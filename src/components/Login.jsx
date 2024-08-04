import React, { useState } from 'react';
import '../styles/loginPage.css';
import LoginPageImage from '../resources/Logininpageimage.png';
import { handleLogin } from './auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const { success, role, message } = handleLogin(email, password);
        if (success) {
            if (role === 'admin') {
                navigate('/adminhome');
            } else if (role === 'customer') {
                navigate('/customerhome');
            }
        } else {
            alert(message);
        }
    };

    return (
        <div className="login-container">
            <header>
                <h1>B.planet</h1>
            </header>
            <main>
                <section className="login">
                    <div className="login-image">
                        <img src={LoginPageImage} alt="Login Page" />
                    </div>
                    <div className="login-form">
                        <h2>Login</h2>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="email">Email:</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                            />
                            <label htmlFor="password">Password:</label>
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                            />
                            <button type="submit">Login</button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Login;
