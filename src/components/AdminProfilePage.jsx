import React, { useState, useEffect } from 'react';
import '../styles/adminProfilePage.css'

const AdminProfilePage = () => {
    const [profile, setProfile] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        address: '',
        state: '',
        zipCode: ''
    });

    useEffect(() => {
        // Admin profile data would typically be loaded from a server
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
        // Save profile data to storage or server
        console.log('Profile data saved:', profile);
    };
    return (
        <div>
            <header>
                <h1>B.planet</h1>
                <nav>
                    <a href="/home">Home</a>
                    <a href="/profile">Profile</a>
                    <a href="/contact">Contact Us</a>
                </nav>
            </header>
            <main>
                <section className="profile">
                    <h2>Edit Profile</h2>
                    <form onSubmit={handleSave}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={profile.name} onChange={handleChange} />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={profile.email} onChange={handleChange} />
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input type="tel" id="phoneNumber" name="phoneNumber" value={profile.phoneNumber} onChange={handleChange} />
                        <label htmlFor="address">Address:</label>
                        <input type="text" id="address" name="address" value={profile.address} onChange={handleChange} />
                        <label htmlFor="state">State:</label>
                        <input type="text" id="state" name="state" value={profile.state} onChange={handleChange} />
                        <label htmlFor="zipCode">Zip Code:</label>
                        <input type="text" id="zipCode" name="zipCode" value={profile.zipCode} onChange={handleChange} />
                        <button type="submit">Save</button>
                    </form>
                </section>
            </main>
        </div>
    )
}

export default AdminProfilePage