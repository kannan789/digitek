import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import image1 from './assets/pexels-khwanchai-4175023.jpg'
import image2 from './assets/pexels-mikhail-nilov-6592700.jpg'
import image3 from './assets/pexels-yankrukov-7693244.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav class="navigation">
      <div><h1>Digitek</h1></div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>      
      </ul>
      <div><button>Log In</button></div>
    </nav>
    <div class="crsl">
          <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={image1} class="d-block w-100" alt="..." height="400px" />
          </div>
          <div class="carousel-item">
            <img src={image2} class="d-block w-100" alt="..." height="400px" /> 
          </div>
          <div class="carousel-item">
            <img src={image3} class="d-block w-100" alt="..." height="400px" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="">Next</span>
        </button>
      </div>
    </div>
    <div class="about">
        <h2>About Us</h2>
          <div>
              At <span class="bld">Digitek</span>, we craft digital experiences that don’t just look good—they perform. Our mission is to help businesses transform ideas into powerful, user-friendly web solutions that drive growth and engagement.
          </div>
        <h4>What We Do</h4>
        <ul>

          <li><span class="bld">Custom Web Development</span> – Building responsive, scalable websites tailored to your brand.</li>
          <li><span class="bld">UI/UX Design</span> – Creating intuitive interfaces that delight users and boost conversions.</li>
          <li><span class="bld">Performance Optimization</span> – Ensuring speed, accessibility, and seamless functionality across devices.</li>
          <li><span class="bld">Digital Strategy</span> – Aligning technology with your business goals for measurable impact.</li>
        </ul>

        <h4>Why Choose Us</h4>
          <div>We blend creativity with technical expertise, combining modern frameworks like React, Next.js, and TypeScript with a keen eye for design. Every project is approached with precision, collaboration, and a focus on delivering results that matter.
          </div>

        <h4>Our Vision</h4>
          <div>To empower businesses with digital solutions that are not only visually compelling but also strategically effective—helping you stand out in a competitive online world.</div>
          

    </div>

    <div class="contact-form">
      <h2>Contact</h2>
      <form>
        <div>
          <label>Name</label>
          <input type="text" />
        </div>
        <div>
          <label>Email</label>
          <input type="text" />
        </div>
        <div>
          <label>Message</label>
          <textarea>

          </textarea>
        </div>
      </form>
    </div>
  
      
    </>
  )
}

export default App
