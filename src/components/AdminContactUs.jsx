import React from 'react'
import '../styles/adminContactUsPage.css'

const AdminContactUs = () => {
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
                <section className="contact">
                    <h2>Contact Us</h2>
                    <form action="#">
                        <label htmlFor="email">Stay Updated:</label>
                        <input type="email" id="email" name="email" required placeholder="Enter your email" />
                        <button type="submit">Sign Up</button>
                    </form>
                    <address>
                        <p>Email: info@bplanet.com</p>
                        <p>Phone: 123-456-7890</p>
                    </address>
                </section>
            </main>
    </div>
  )
}

export default AdminContactUs
