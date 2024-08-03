import React from 'react'
import '../styles/adminDescriptionPage.css'
import image12 from '../resources/image12.png'

const AdminDescriptionPage = () => {
  return (
    <div>
      <header>
                <h1>B.planet</h1>
                <nav>
                    <a href="#">Profile</a>
                    <a href="#">Home</a>
                    <a href="#">Contact Us</a>
                </nav>
            </header>
            <main>
                <section className="description">
                    <h2>Tree 1</h2>
                    <img src={image12} alt="Plant Image 12" />
                    <h3>Plant Care Guide</h3>
                    <p><strong>Water:</strong> Allow the soil to dry out completely before watering.</p>
                    <p><strong>Light:</strong> Bright indirect light is recommended.</p>
                    <p><strong>Tips:</strong> Gently wipe the leaves to remove dust and allow the plant to photosynthesize properly.</p>
                    <h3>Description</h3>
                    <p>A tree that is unique and interesting in every aspect. It's easy to care for and adds a touch of nature to any space.</p>
                </section>
            </main>
    </div>
  )
}

export default AdminDescriptionPage
