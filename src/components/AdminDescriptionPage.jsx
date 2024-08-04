import React from 'react';
import '../styles/adminDescriptionPage.css';
import { useLocation,Link } from 'react-router-dom';

const AdminDescriptionPage = () => {
    const location = useLocation();
    const { image, name } = location.state || {}; // Retrieve image and name from location state

    return (
        <div>
            <header>
                <h1>B.planet</h1>
                <nav>
                    <Link to="/adminhome">Home</Link>
                    <Link to="/adminprofilepage">Profile</Link>
                    <Link to="/admincontactus">Contact Us</Link>
                </nav>
            </header>
            <main>
                <section className="description">
                    <div className="description-content">
                        <h2>{name}</h2> {/* Display the name of the image */}
                        <h3>Plant Care Guide</h3>
                        <div className="separator"></div>
                        <p><strong>Water:</strong> Allow the soil to dry out completely before watering.</p>
                        <div className="separator"></div>
                        <p><strong>Light:</strong> Bright indirect light is recommended.</p>
                        <div className="separator"></div>
                        <p><strong>Tips:</strong> Gently wipe the leaves to remove dust and allow the plant to photosynthesize properly.</p>
                        <div className="separator"></div>
                        <h3>Description</h3>
                        <p>A tree that is unique and interesting in every aspect. It's easy to care for and adds a touch of nature to any space.</p>
                    </div>
                    <img src={image} alt={name} />
                </section>
            </main>
        </div>
    );
};

export default AdminDescriptionPage;
