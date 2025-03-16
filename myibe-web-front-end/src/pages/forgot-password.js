// ForgotPassword.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BASE_URL from './config'; // Import the base URL

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch(`${BASE_URL}/api/auth/forgot-password`, { // Use the base URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();
            
            if (response.ok) {
                setMessage('A password reset link has been sent to your email.');
            } else {
                setError(data.msg || 'An error occurred. Please try again.');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <section className="forgot-password">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong second">
                            <div className="card-body p-5 text-center">
                                <h3 className="mb-5">Forgot Password</h3>

                                {error && <div className="alert alert-danger">{error}</div>}
                                {message && <div className="alert alert-success">{message}</div>}

                                <form onSubmit={handlePasswordReset}>
                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="typeEmailX">Email</label>
                                        <input
                                            type="email"
                                            placeholder='Enter your email'
                                            id="typeEmailX"
                                            className="form-control form-control-lg"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <button
                                        className="btn btn-danger btn-lg btn-block"
                                        type="submit"
                                    >
                                        Reset Password
                                    </button>

                                    <hr className="my-4" />

                                    <h5 className='mt-4'>
                                        Remember your password? <Link to="/login" className='text-danger'>Login</Link>
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

export default ForgotPassword;
