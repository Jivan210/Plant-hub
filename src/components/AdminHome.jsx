import React from 'react';
import '../styles/adminHomePage.css';
import HeroImage1 from '../resources/hero-image-1.png';
import HeroImage2 from '../resources/hero-image-2.png';

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
                            <td><img src="../resources/image1.png" alt="Plant Image 1" /></td>
                            <td><img src="../resources/image2.png" alt="Plant Image 2" /></td>
                            <td><img src="../resources/image3.png" alt="Plant Image 3" /></td>
                            <td><img src="../resources/image4.png" alt="Plant Image 4" /></td>
                        </tr>
                        <tr>
                            <td><img src="../resources/image5.png" alt="Plant Image 5" /></td>
                            <td><img src="../resources/image6.png" alt="Plant Image 6" /></td>
                            <td><img src="../resources/image7.png" alt="Plant Image 7" /></td>
                            <td><img src="../resources/image8.png" alt="Plant Image 8" /></td>
                        </tr>
                        <tr>
                            <td><img src="../resources/image9.png" alt="Plant Image 9" /></td>
                            <td><img src="../resources/image10.png" alt="Plant Image 10" /></td>
                            <td><img src="../resources/image11.png" alt="Plant Image 11" /></td>
                            <td><img src="../resources/image12.png" alt="Plant Image 12" /></td>
                        </tr>
                        <tr>
                            <td><img src="../resources/image13.png" alt="Plant Image 13" /></td>
                            <td><img src="../resources/image14.png" alt="Plant Image 14" /></td>
                            <td><img src="../resources/image15.png" alt="Plant Image 15" /></td>
                            <td><img src="../resources/image16.png" alt="Plant Image 16" /></td>
                        </tr>
                        <tr>
                            <td><img src="../resources/image17.png" alt="Plant Image 17" /></td>
                            <td><img src="../resources/image18.png" alt="Plant Image 18" /></td>
                            <td><img src="../resources/image19.png" alt="Plant Image 19" /></td>
                            <td><img src="../resources/image20.png" alt="Plant Image 20" /></td>
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