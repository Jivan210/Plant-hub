import React, { useState, useEffect } from 'react';
import '../styles/customerProfilePage.css';
import profileImage from '../resources/Logininpageimage.png';
import { Link } from 'react-router-dom';

const CustomerProfilePage = () => {
    const [profile, setProfile] = useState({
        name: 'Jivan Jyoti Pal',
        email: 'jivan@gmail.com',
        phoneNumber: '9598755687',
        address: 'Patia, Bhubaneswar',
        state: 'Odisha',
        zipCode: '751024'
    });

    useEffect(() => {
        // customer profile data would typically be loaded from a server
        // Here, we'll initialize with empty data for simplicity
    }, []);

    const handleChange = (e) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value
        });
    };

    const handleSave = (e) => {
        e.preventDefault();

        console.log('Profile data saved:', profile);
    };

    return (
        <div style={{ backgroundColor: '#fff9f0', minHeight: '100vh', padding: '20px' }}>
            <header>
                <h1>B.planet</h1>
                <nav>
                    <Link to="/customerhome">Home</Link>
                    <Link to="/customerprofilepage">Profile</Link>
                    <Link to="/customercontactus">Contact Us</Link>
                </nav>
            </header>
            <main>
                <section className="profile">
                    <h2>Edit Profile</h2>
                    <div className="profile-image-container">
                        <img src={profileImage} alt="Profile" className="profile-image" />
                    </div>
                    <form onSubmit={handleSave}>
                        <label htmlFor="name">Name:</label>
                        <div className="input-container">
                            <input type="text" id="name" name="name" value={profile.name} onChange={handleChange} style={{ backgroundColor: '#d9d9d9' }} />
                            <button className="edit-button">Edit</button>
                        </div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={profile.email} onChange={handleChange} style={{ backgroundColor: '#d9d9d9' }} />
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input type="tel" id="phoneNumber" name="phoneNumber" value={profile.phoneNumber} onChange={handleChange} style={{ backgroundColor: '#d9d9d9' }} />
                        <label htmlFor="address">Address:</label>
                        <input type="text" id="address" name="address" value={profile.address} onChange={handleChange} style={{ backgroundColor: '#d9d9d9' }} />
                        <label htmlFor="state">State:</label>
                        <input type="text" id="state" name="state" value={profile.state} onChange={handleChange} style={{ backgroundColor: '#d9d9d9' }} />
                        <label htmlFor="zipCode">Zip Code:</label>
                        <input type="text" id="zipCode" name="zipCode" value={profile.zipCode} onChange={handleChange} style={{ backgroundColor: '#d9d9d9' }} />
                        <button type="submit">Save</button>
                    </form>
                </section>
            </main>
        </div>
    );
};

export default CustomerProfilePage;
