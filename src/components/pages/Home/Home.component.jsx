import React from "react";
import Header from '../../features/Header/Header.component';
import Hero from "../../features/Hero/Hero.component";
import Footer from '../../features/Footer/Footer.component';

export default function Home() {
  return (
    <>
    <Header />
    <br className='mt-5'></br>
    <br></br>
    <Hero/>
      <div>Home</div>
      <Footer/>
    </>
  );
}
