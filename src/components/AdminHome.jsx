import React from 'react';
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



const AdminHome = () => {
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
                <section className="intro">
                    <h2>'As interesting as a plant'</h2>
                    <img src={HeroImage1} alt="Hero Image 1" />
                    <img src={HeroImage2} alt="Hero Image 2" />
                </section>
                <section className="featured-products">
                    <h3>Featured Product</h3>
                    <table>
                        <tr>
                            <td><img src={Image1} alt="Plant Image 1" /></td>
                            <td><img src={Image2} alt="Plant Image 2" /></td>
                            <td><img src={Image3} alt="Plant Image 3" /></td>
                            <td><img src={Image4} alt="Plant Image 4" /></td>
                        </tr>
                        <tr>
                            <td><img src={Image5} alt="Plant Image 5" /></td>
                            <td><img src={Image6} alt="Plant Image 6" /></td>
                            <td><img src={Image7} alt="Plant Image 7" /></td>
                            <td><img src={Image8} alt="Plant Image 8" /></td>
                        </tr>
                        <tr>
                            <td><img src={Image9} alt="Plant Image 9" /></td>
                            <td><img src={Image10} alt="Plant Image 10" /></td>
                            <td><img src={Image11} alt="Plant Image 11" /></td>
                            <td><img src={Image12} alt="Plant Image 12" /></td>
                        </tr>
                        <tr>
                            <td><img src={Image13} alt="Plant Image 13" /></td>
                            <td><img src={Image14} alt="Plant Image 14" /></td>
                            <td><img src={Image15} alt="Plant Image 15" /></td>
                            <td><img src={Image16} alt="Plant Image 16" /></td>
                        </tr>
                        <tr>
                            <td><img src={Image17} alt="Plant Image 17" /></td>
                            <td><img src={Image18} alt="Plant Image 18" /></td>
                            <td><img src={Image19} alt="Plant Image 19" /></td>
                            <td><img src={Image20} alt="Plant Image 20" /></td>
                        </tr>
                    </table>
                    <div className="pagination">
                        <button>Previous</button>
                        <button>Next</button>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default AdminHome