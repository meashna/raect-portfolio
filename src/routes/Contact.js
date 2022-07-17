import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import Form from "../components/Form";



function Contact() {
  return (
    <div>
     <Navbar/>
     <HeroImg2 heading="Contact me " text="If you want a service or guidence, feel free to text me!"/>
     <Form/>
     <Footer/>
    </div>
  )
}

export default Contact