// src/GenerateNew.js
import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { Dropdown } from 'react-bootstrap'; // Import Bootstrap Dropdown
import axios from 'axios'; // Import axios for making HTTP requests
import { toast } from 'react-toastify'; // Import toast from react-toastify
import BASE_URL from './config'; // Import BASE_URL

const GenerateNew = () => {
  const [userId, setUserId] = useState('');
  const [link, setLink] = useState('');
  const [qrCodeDataURL, setQrCodeDataURL] = useState('');
  const [logo, setLogo] = useState(null);
  const [color, setColor] = useState('#000000'); // Default color
  const [search, setSearch] = useState('');
  const [filteredColors, setFilteredColors] = useState([]);
  const canvasRef = useRef(null);

  // List of colors
  const colors = [
    '#000000', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF',
    '#FFA500', '#800080', '#008000', '#FFD700', '#A52A2A', '#C0C0C0', '#808080',
    '#FFFFFF', '#F0F8FF', '#FAEBD7', '#FFFAF0', '#F5F5DC', '#FFE4C4', '#FFEBCD'
  ];

  // Filter colors based on search input
  useEffect(() => {
    const searchLower = search.toLowerCase();
    const newFilteredColors = colors.filter(color => color.toLowerCase().includes(searchLower));
    setFilteredColors(newFilteredColors);
  }, [search]);

  // Extract userId from URL and set the link
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('userId');

    if (id) {
      setUserId(id);
      setLink(`http://54.224.211.138:5000/end-users?userId=${id}`);
    } else {
      setLink('http://54.224.211.138:5000/all-songs');
    }
  }, []);

  // Generate QR code data URL whenever the link or color changes
  useEffect(() => {
    if (link) {
      QRCode.toDataURL(link, { width: 256, margin: 1, color: { dark: color, light: '#FFFFFF' } }, (err, url) => {
        if (err) {
          console.error('Error generating QR code:', err);
          return;
        }
        setQrCodeDataURL(url);
      });
    }
  }, [link, color]);

  // Handle logo file upload
  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to add logo to QR code and draw on canvas
  const addLogoToQRCode = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      console.error('Failed to get canvas context.');
      return;
    }

    const qrImg = new Image();
    qrImg.src = qrCodeDataURL;

    qrImg.onload = () => {
      const qrCodeSize = 256; // Same as canvas size
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous drawings
      ctx.drawImage(qrImg, 0, 0, qrCodeSize, qrCodeSize);

      if (logo) {
        const logoImg = new Image();
        logoImg.src = logo;

        logoImg.onload = () => {
          // Define logo size and position
          const logoSize = 64; // Adjust if needed
          const logoX = (canvas.width - logoSize) / 2;
          const logoY = (canvas.height - logoSize) / 2;

          // Draw logo centered on the QR code
          ctx.drawImage(logoImg, logoX, logoY, logoSize, logoSize);
        };

        logoImg.onerror = (err) => {
          console.error('Error loading logo image:', err);
        };
      }
    };

    qrImg.onerror = (err) => {
      console.error('Error loading QR code image:', err);
    };
  };

  // Handle the "Generate QR Code" button click
  const handleGenerateQRCode = () => {
    if (qrCodeDataURL) {
      addLogoToQRCode();
    }
  };

  // Function to download the QR code image
  const handleDownloadQRCode = () => {
    if (!qrCodeDataURL) {
      console.error('No QR code available to download.');
      return;
    }

    const canvas = canvasRef.current;
    if (canvas) {
      const dataURL = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = dataURL;
      link.download = 'qrcode.png';
      link.click();
    } else {
      console.error('Failed to download QR code.');
    }
  };

  // Function to save the QR code
  const handleSaveQRCode = async () => {
    const userId = localStorage.getItem('userId'); // Get userId from localStorage
    if (!userId || !link) {
      toast.error('Error: No link or user ID found.');
      return;
    }

    const qrCodeData = {
      userId,
      link,
      color,
    };

    try {
      const response = await axios.post(`${BASE_URL}/api/qrcode/save-qrcode`, qrCodeData);
      toast.success(response.data.msg || 'QR code saved successfully!');
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to save QR code image';
      toast.error(errorMessage);
      console.error('Error saving QR code image:', errorMessage);
    }
  };

  return (
    <div className='admin-dashboard'>
      <main className="content">
        <div className='container mt-5'>
          <h1 className="mb-4">Generate Your QR Code</h1>

          <p>Upload Logo</p>
          <input
            className='form-control mb-4'
            type="file"
            accept="image/*"
            onChange={handleLogoUpload}
            style={{ marginBottom: '20px' }}
          />
          <p>Choose QR Code Color</p>
          <Dropdown>
            <Dropdown.Toggle className='form-control' variant="success" id="dropdown-basic">
              {color || 'Select Color'}
            </Dropdown.Toggle>

            <Dropdown.Menu className='form-control'>
              <Dropdown.Item>
                <input
                  type="text"
                  placeholder="Search colors..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="form-control"
                />
              </Dropdown.Item>
              {filteredColors.map((colorOption, index) => (
                <Dropdown.Item
                  key={index}
                  onClick={() => setColor(colorOption)}
                  style={{ backgroundColor: colorOption, color: '#000000' }}
                >
                  {colorOption}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <button onClick={handleGenerateQRCode} className='mt-3 mb-4'>
            Generate QR Code
          </button>
          <div>
            <canvas ref={canvasRef} width={256} height={256} />
          </div>
          <button onClick={handleDownloadQRCode} className='mt-3 mb-4'>
            Download QR Code
          </button>
          <button onClick={handleSaveQRCode} className='mt-3 ml-3 mb-4'>
            Save QR Code
          </button>

        </div>
      </main>
    </div>
  );
};

export default GenerateNew;
