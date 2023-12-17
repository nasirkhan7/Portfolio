import React from 'react'
import './intro.css';
import { Link } from "react-scroll";
import { BsBagFill } from "react-icons/bs";
import bg from '../../assets/images/PASSPORT-removebg-preview.png'
const Intro = () => {
  return (
    <>
    <section id='intro'>
    <div className="introContent">
    <span className='hello'>Hello, </span>
    <span className='introText'>I'm <span className='introName'> Nasir Khan</span></span>
    <p className="introPara">I am a Full Stack developer having experience <br /> with HTML, CSS and JAVASCRIPT, REACT.</p>
    <Link><button className="btn">
    <BsBagFill />Hire me</button></Link>
    </div>
    <img src={bg} alt="Profile" className='bg' />








    </section>
    
    
    </>


    )
}

export default Intro