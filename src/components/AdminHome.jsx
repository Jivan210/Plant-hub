import React, { useState } from 'react';
import '../styles/adminHomePage.css';
import HeroImage1 from '../resources/hero-image-1.png';
import HeroImage2 from '../resources/hero-image-2.png';
import Image1 from '../resources/image1.png';
import Image2 from '../resources/image2.png';
import Image3 from '../resources/image3.png';
import Image4 from '../resources/image4.png';
import Image5 from '../resources/image5.png';
import Image6 from '../resources/image6.png';
import Image7 from '../resources/image7.png';
import Image8 from '../resources/image8.png';
import Image9 from '../resources/image9.png';
import Image10 from '../resources/image10.png';
import Image11 from '../resources/image11.png';
import Image12 from '../resources/image12.png';
import Image13 from '../resources/image13.png';
import Image14 from '../resources/image14.png';
import Image15 from '../resources/image15.png';
import Image16 from '../resources/image16.png';
import Image17 from '../resources/image17.png';
import Image18 from '../resources/image18.png';
import Image19 from '../resources/image19.png';
import Image20 from '../resources/image20.png';
import { useNavigate } from 'react-router-dom';

const AdminHome = () => {
    const navigate = useNavigate();
    const [activeLink, setActiveLink] = useState('/adminhome');

    const handleLinkClick = (path) => {
        setActiveLink(path);
        navigate(path);
    };

    const handleImageClick = (image, name) => {
        navigate('/admindescription', { state: { image, name } });
    };

    return (
        <div>
            <header>
                <h1>B.planet</h1>
                <nav>
                    <a
                        href="/home"
                        onClick={(e) => { e.preventDefault(); handleLinkClick("/adminhome"); }}
                        className={activeLink === "/adminhome" ? 'active' : ''}
                    >
                        Home
                    </a>
                    <a
                        href="/profile"
                        onClick={(e) => { e.preventDefault(); handleLinkClick("/adminprofilepage"); }}
                        className={activeLink === "/adminprofilepage" ? 'active' : ''}
                    >
                        Profile
                    </a>
                    <a
                        href="/contact"
                        onClick={(e) => { e.preventDefault(); handleLinkClick("/admincontactus"); }}
                        className={activeLink === "/admincontactus" ? 'active' : ''}
                    >
                        Contact Us
                    </a>
                </nav>
            </header>
            <main>
                <section className="intro">
                    <h2>'As interesting as a plant'</h2>
                    <img src={HeroImage1} alt="Hero Image 1" />
                    <img src={HeroImage2} alt="Hero Image 2" />
                </section>
                <section className="featured-products">
                    <h3>Featured Product</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td onClick={() => handleImageClick(Image1, "Tree 1")}>
                                    <img src={Image1} alt="Tree 1" />
                                    <p>Tree 1</p>
                                </td>
                                <td onClick={() => handleImageClick(Image2, "Tree 2")}>
                                    <img src={Image2} alt="Tree 2" />
                                    <p>Tree 2</p>
                                </td>
                                <td onClick={() => handleImageClick(Image3, "Tree 3")}>
                                    <img src={Image3} alt="Tree 3" />
                                    <p>Tree 3</p>
                                </td>
                                <td onClick={() => handleImageClick(Image4, "Tree 4")}>
                                    <img src={Image4} alt="Tree 4" />
                                    <p>Tree 4</p>
                                </td>
                            </tr>
                            <tr>
                                <td onClick={() => handleImageClick(Image5, "Plant 1")}>
                                    <img src={Image5} alt="Plant 1" />
                                    <p>Plant 1</p>
                                </td>
                                <td onClick={() => handleImageClick(Image6, "Plant 2")}>
                                    <img src={Image6} alt="Plant 2" />
                                    <p>Plant 2</p>
                                </td>
                                <td onClick={() => handleImageClick(Image7, "Plant 3")}>
                                    <img src={Image7} alt="Plant 3" />
                                    <p>Plant 3</p>
                                </td>
                                <td onClick={() => handleImageClick(Image8, "Plant 4")}>
                                    <img src={Image8} alt="Plant 4" />
                                    <p>Plant 4</p>
                                </td>
                            </tr>
                            <tr>
                                <td onClick={() => handleImageClick(Image9, "Tray")}>
                                    <img src={Image9} alt="Tray" />
                                    <p>Tray</p>
                                </td>
                                <td onClick={() => handleImageClick(Image10, "Soil")}>
                                    <img src={Image10} alt="Soil" />
                                    <p>Soil</p>
                                </td>
                                <td onClick={() => handleImageClick(Image11, "Soil 2")}>
                                    <img src={Image11} alt="Soil 2" />
                                    <p>Soil 2</p>
                                </td>
                                <td onClick={() => handleImageClick(Image12, "Spade")}>
                                    <img src={Image12} alt="Spade" />
                                    <p>Spade</p>
                                </td>
                            </tr>
                            <tr>
                                <td onClick={() => handleImageClick(Image13, "Duck 1")}>
                                    <img src={Image13} alt="Duck 1" />
                                    <p>Duck 1</p>
                                </td>
                                <td onClick={() => handleImageClick(Image14, "Duck 2")}>
                                    <img src={Image14} alt="Duck 2" />
                                    <p>Duck 2</p>
                                </td>
                                <td onClick={() => handleImageClick(Image15, "Duck 3")}>
                                    <img src={Image15} alt="Duck 3" />
                                    <p>Duck 3</p>
                                </td>
                                <td onClick={() => handleImageClick(Image16, "Duck 4")}>
                                    <img src={Image16} alt="Duck 4" />
                                    <p>Duck 4</p>
                                </td>
                            </tr>
                            <tr>
                                <td onClick={() => handleImageClick(Image17, "Pot 1")}>
                                    <img src={Image17} alt="Pot 1" />
                                    <p>Pot 1</p>
                                </td>
                                <td onClick={() => handleImageClick(Image18, "Pot 2")}>
                                    <img src={Image18} alt="Pot 2" />
                                    <p>Pot 2</p>
                                </td>
                                <td onClick={() => handleImageClick(Image19, "Pot 3")}>
                                    <img src={Image19} alt="Pot 3" />
                                    <p>Pot 3</p>
                                </td>
                                <td onClick={() => handleImageClick(Image20, "Pot 4")}>
                                    <img src={Image20} alt="Pot 4" />
                                    <p>Pot 4</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="pagination">
                        <button>Previous</button>
                        <button>Next</button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AdminHome;
