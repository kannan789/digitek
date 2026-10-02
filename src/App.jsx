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
  
      
    </>
  )
}

export default App
