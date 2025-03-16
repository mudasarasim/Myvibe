import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BASE_URL from './config';

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);
    
    // Get the token from the query parameters
    const query = new URLSearchParams(useLocation().search);
    const token = query.get('token');  // Retrieve the token from the URL

    const handlePasswordReset = async (e) => {
        e.preventDefault();

        // Validate that both passwords match
        if (newPassword !== confirmPassword) {
            setError('Passwords do not match.');
            setMessage('');  // Clear the success message if any
            return;
        }

        try {
            const response = await fetch(`${BASE_URL}/api/auth/reset-password/${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ password: newPassword, confirmPassword }),  // Send both passwords
            });

            const data = await response.json();

            if (response.ok) {
                setMessage('Your password has been successfully reset.');
                setError('');  // Clear the error if any
            } else {
                setError(data.msg || 'An error occurred. Please try again.');
                setMessage('');  // Clear the success message
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
            setMessage('');  // Clear the success message
        }
    };

    return (
        <section className="reset-password">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong">
                            <div className="card-body p-5 text-center">
                                <h3 className="mb-5">Reset Password</h3>

                                {error && <div className="alert alert-danger">{error}</div>}
                                {message && <div className="alert alert-success">{message}</div>}

                                <form onSubmit={handlePasswordReset}>
                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="newPassword">New Password</label>
                                        <input
                                            type="password"
                                            placeholder='Enter new password'
                                            id="newPassword"
                                            className="form-control form-control-lg"
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                                        <input
                                            type="password"
                                            placeholder='Confirm new password'
                                            id="confirmPassword"
                                            className="form-control form-control-lg"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
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

export default ResetPassword;
