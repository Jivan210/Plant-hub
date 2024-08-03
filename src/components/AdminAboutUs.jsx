import React from 'react'
import '../styles/adminAboutUsPage.css'

const AdminAboutUs = () => {
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
                <section className="about-us">
                    <h2>About Us</h2>
                    <p>Welcome to B.planet! We specialize in providing the best care and information for your plants. Our team is dedicated to helping you create a beautiful and thriving plant collection.</p>
                </section>
            </main>
    </div>
  )
}

export default AdminAboutUs
