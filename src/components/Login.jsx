import React from 'react'
import '../styles/loginPage.css';
import LoginPageImage from '../resources/Logininpageimage.png'
import { handleLogin } from './auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = () =>{
        handleLogin();
        navigate("/adminhome")
    }
    return (
        <div>
            <header>
                <h1>B.planet</h1>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Profile</a>
                    <a href="#">Contact Us</a>
                </nav>
            </header>
            <main>
                <section className="login">
                    <h2>Login</h2>
                    <img src={LoginPageImage} alt="Login Page" />
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" required />
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required />
                        <button type="submit">Login</button>
                    </form>
                </section>
            </main>
        </div>
    )
}

export default Login
