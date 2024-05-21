import React from 'react';

import profileImg from "../../assets/rajimg.png";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";
import CV from "../../assets/cv.pdf"
import './home.css'

import { FaTwitter, FaBehance, FaDribbble } from "react-icons/fa";

export const Home = () => {
  return (
    <section className='home' id='home'>
     <div className="home__wrapper">
     <div className='home__container container'>
        <p className='home__subtitle text-cs'>
          Hello, <span>My Name Is</span>
        </p>

        <h1 className='home__title text-cs'>
          <span>RAJ</span> 
        </h1>
        <h1 className='surname'>
          <span>CHAUHAN</span>
        </h1>

        <p className="home_job">
          <span className='text-cs'>I Am</span> <b>Android And Software Developer</b>
        </p>

       <div className='resize'>
       <div className="home__img-wrapper">
          <div className="home__banner">
            <img src={profileImg} alt='' className='home__profile' />
          </div>

          <p className="home__data home__data-one">
            <span className='text-lg'>
              100<b>+</b>
            </span>

            <span className='text-sm'>
              LeetCode <b>Problem Solved</b>
            </span>
          </p>

          <p className="home__data home__data-two">
            <span className='text-lg'>
              100
            </span>

            <span className='text-sm'>
              Completed <span>Projects</span>
            </span>
          </p>

          <img src={shapeOne} alt='' className='shape shape__1'/>
          <img src={shapeTwo} alt='' className='shape shape__2'/>
          <img src={shapeTwo} alt='' className='shape shape__3'/>
        </div>

       </div>
        <p className='home__text'>
          Passionate Android Developer committed to continuous growth and innovation in mobile app development.
          Skilled in crafting impactful experiences and eager to collaborate on innovative projects
        </p>

        <div className='home__socials'>
          <a href='' className='home__social-link'>
            <FaTwitter />
          </a>
          <a href='' className='home__social-link'>
            <FaDribbble />
          </a>
          <a href='' className='home__social-link'>
            <FaBehance />
          </a>
        </div>

        <div className='home__btns'>
          <a download ='' href={CV} className='btn text-cs'>
            Download CV
          </a>

          <a href='#skills' className='hero__link text-cs'>
            My Skills
          </a>
        </div>
      </div>

<div className="section__deco deco__left">
  <img src={shapeOne} alt='' className='shape'/>
</div>

     </div>
    </section>
  )
}