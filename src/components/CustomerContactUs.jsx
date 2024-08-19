import React from 'react'
import '../styles/customerContactUsPage.css'
import { Link } from 'react-router-dom';

const CustomerContactUs = () => {
  return (
    <div className="container">
      <header>
        <h1>B.planet</h1>
        <nav>
          <Link to="/customerhome">Home</Link>
          <Link to="/customerprofilepage">Profile</Link>
          <Link to="/customercontactus">Contact Us</Link>
        </nav>
      </header>
      <main>
        <section className="contact">
          <h2>Contact Us</h2>
          <div className="contact-box">
            <div className="left-side">
              <h3>Stay Updated</h3>
              <p>Need to get in touch with us?</p>
              <a href="https://facebook.com">Facebook</a>
              <a href="https://instagram.com">Instagram</a>
            </div>
            <div className="right-side">
              <form>
                <input type="text" placeholder="Name: abc" required />
                <input type="email" placeholder="Email: fhh@fgg" required />
                <textarea placeholder="Your experience" required></textarea>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default CustomerContactUs