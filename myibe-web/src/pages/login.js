import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BASE_URL from './config'; // Import the base URL

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        
        try {
            console.log('Submitting login:', { email, password });

            const response = await fetch(`${BASE_URL}/api/auth/login`, { // Use the base URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }), // Send email and password
            });

            const data = await response.json(); // Get the response as JSON
            console.log('API Response:', data);

            if (response.ok) {
                const { token, userId, venueType, username } = data; // Extract values from response

                // Store token, userId, and userName in localStorage
                localStorage.setItem('token', token);
                localStorage.setItem('userId', userId);
                localStorage.setItem('username', username); // Save username
                localStorage.setItem('venueType', venueType); // Save venueType

                // Redirect based on venueType
                switch (venueType) {
                    case 'admin':
                        navigate('/admin-dashboard');
                        break;
                    case 'club':
                        navigate('/club-dashboard');
                        break;
                    default:
                        navigate('/club-dashboard');
                        break;
                }
            } else {
                console.error('Error response:', data); 
                setError(data.msg || 'Your email or password is incorrect'); // Show error message
            }
        } catch (err) {
            console.error('Fetch error:', err);
            setError('An error occurred. Please try again.'); // Handle fetch errors
        }
    };

    return (
        <section className="signup">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong second">
                            <div className="card-body p-5 text-center">
                                <h3 className="mb-5">SIGN IN</h3>

                                {/* Display error message if there is an error */}
                                {error && <div className="alert alert-danger">{error}</div>}

                                <form onSubmit={handleLogin}>
                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="typeEmailX-2">Email</label>
                                        <input
                                            type="email"
                                            placeholder='Enter Email'
                                            id="typeEmailX-2"
                                            className="form-control form-control-lg"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="typePasswordX-2">Password</label>
                                        <input
                                            type="password"
                                            placeholder='Enter Password'
                                            id="typePasswordX-2"
                                            className="form-control form-control-lg"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="form-check d-flex justify-content-start mb-4">
                                        <label className="form-check-label" htmlFor="form1Example3">
                                            <Link to="/forgot-password" className='text-light'>Forgotten password?</Link>
                                        </label>
                                    </div>

                                    <button
                                        className="btn btn-danger btn-lg btn-block"
                                        type="submit"
                                    >
                                        Login
                                    </button>

                                    <hr className="my-4" />

                                    <h5 className='mt-4'>
                                        You don't have an account? <Link to="/signup" className='text-danger'>Create an account</Link>
                                    </h5>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
