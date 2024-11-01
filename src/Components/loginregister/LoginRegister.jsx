import React, { useState } from "react";
import './LoginRegister.css';
import { FaUser, FaLock, FaEnvelope, FaHome, FaFacebookF, FaPhone } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const LoginRegister = () => {
    const [action, setAction] = useState(''); // State to toggle between login and signup
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const signupLink = () => setAction('active');
    const loginLink = () => setAction('');

    const onBackToHome = () => navigate('/');

    const handleLogin = (e) => {
        e.preventDefault();
        const demoUsername = "testuser";
        const demoPassword = "password123";

        if (username === demoUsername && password === demoPassword) {
            navigate('/dashboard'); // Navigate to the dashboard page on successful login
        } else {
            alert("Invalid username or password!");
        }
    };

    return (
        <div className="auth-container">
            <div className={`wrapper ${action}`}>
                {/* Login Form */}
                <div className={`form-box login ${action === '' ? 'active' : ''}`}>
                    <form onSubmit={handleLogin}>
                        <h1>Login</h1>
                        <div className="input-box">
                            <input
                                type="text"
                                placeholder="Username"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <FaUser className="icon" />
                        </div>
                        <div className="input-box">
                            <input
                                type="password"
                                placeholder="Password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <FaLock className="icon" />
                        </div>
                        <button type="submit">Login</button>
                        <div className="signup-link">
                            <p>Don't have an account? <a href="#" onClick={signupLink}>Sign-Up</a></p>
                        </div>
                    </form>
                </div>

                {/* Sign-Up Form */}
                <div className={`form-box sign-up ${action === 'active' ? 'active' : ''}`}>
                    <form>
                        <h1>Sign-Up</h1>
                        <div className="input-box">
                            <input type="text" placeholder="Name" required />
                            <FaUser className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Username" required />
                            <FaUser className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="email" placeholder="Email" required />
                            <FaEnvelope className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Present Address" required />
                            <FaHome className='icon' />
                        </div>
                        <div className="side-by-side">
                            <div className="input-box half">
                                <select id="department" required>
                                    <option value="" disabled selected>Department</option>
                                    <option value="CSE">CSE</option>
                                    <option value="EE">EE</option>
                                    <option value="ME">ME</option>
                                </select>
                            </div>
                            <div className="input-box half">
                                <select id="batch" required>
                                    <option value="" disabled selected>Batch</option>
                                    <option value="2019">2019</option>
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                </select>
                            </div>
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Student ID" required />
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Facebook ID" required />
                            <FaFacebookF className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Phone Number" required />
                            <FaPhone className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password" required />
                            <FaLock className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Confirm Password" required />
                            <FaLock className='icon' />
                        </div>
                        <div className="gender-section">
                            <label className="gender-label">Gender</label>
                            <label className="gender-option">
                                <input type="radio" name="gender" value="male" className="gender-checkbox" />
                                <span className="checkmark"></span>
                                <span className="gender-text">Male</span>
                            </label>
                            <label className="gender-option">
                                <input type="radio" name="gender" value="female" className="gender-checkbox" />
                                <span className="checkmark"></span>
                                <span className="gender-text">Female</span>
                            </label>
                        </div>

                        <div className="input-box">
                            Interested in Challenges
                            <label className="toggle-label">
                                <input type="checkbox" className="toggle-checkbox" />
                                <span className="slider"></span>
                            </label>
                        </div>

                        <div className="remember-forgot">
                            <label><input type="checkbox" /> I agree to the terms & conditions</label>
                        </div>
                        <button type="submit">Sign-up</button>
                        <div className="login-link">
                            <p>Already have an account? <a href="#" onClick={loginLink}>Login</a></p>
                        </div>
                    </form>
                </div>
            </div>
            <button onClick={onBackToHome} className="back-home-btn">Back to Home</button>
        </div>
    );
};

export default LoginRegister;
