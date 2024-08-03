import React from 'react';
import '../styles/adminDescriptionPage.css';
import { useLocation } from 'react-router-dom';

const AdminDescriptionPage = () => {
    const location = useLocation();
    const { image, name } = location.state || {}; // Retrieve image and name from location state

    return (
        <div>
            <header>
                <h1>B.planet</h1>
                <nav>
                    <a href="/adminhome">Home</a>
                    <a href="/adminprofilepage">Profile</a>
                    <a href="/admincontactus">Contact Us</a>
                </nav>
            </header>
            <main>
                <section className="description">
                    <h2>{name}</h2> {/* Display the name of the image */}
                    <img src={image} alt={name} />
                    <h3>Plant Care Guide</h3>
                    <p><strong>Water:</strong> Allow the soil to dry out completely before watering.</p>
                    <p><strong>Light:</strong> Bright indirect light is recommended.</p>
                    <p><strong>Tips:</strong> Gently wipe the leaves to remove dust and allow the plant to photosynthesize properly.</p>
                    <h3>Description</h3>
                    <p>A tree that is unique and interesting in every aspect. It's easy to care for and adds a touch of nature to any space.</p>
                </section>
            </main>
        </div>
    );
};

export default AdminDescriptionPage;
