import React from 'react';
import './Home.css';
import { FaExternalLinkAlt } from "react-icons/fa";
import { ImLeaf } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import {motion} from 'framer-motion';
import {useRef} from 'react';

const Home = (reference) => {
  const ref = useRef(null)
  return (
    <div>
      <section className="home">
        <div className="home-container">
          <div className="home-container-title">
            <h1 className="home-title-text">Experience the ultimate in learning with <span>the most innovative platform</span> around.</h1>
            <button className='home-button'>Explore courses</button>
          </div>
          <div className="home-container-video">
            <video src="https://ik.imagekit.io/sheryians/iso_3_n1fw8fPbi.mp4?updatedAt=1697664185145" autoPlay loop muted ></video>
          </div>
          <div className="course-container">
            <div className="title-text-container">
              <h2 style={{ color: "gray" }}>Take your game to next level</h2>
            </div>
            <div className="course-text-container">
              <h1 style={{ fontSize: '3.5rem' }}>Courses.</h1>
            </div>
            <div className="course-card-container" ref={ref} >
              <motion.div drag dragConstraints={ref} whileDrag={{scale: 1.1}} dragElastic={.1} dragTransition={{bounceStiffness:100, bounceDamping: 10}} className="course-card">
                <img src="https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="card-image" />
                <p className='course-card-title'>Learn Front-End Development basics</p>
                <div className="course-btns">
                  <p>Web Development</p>
                  <p>Designing</p>
                </div>
                <div className='course-bottom'>
                  <div className='course-bottom-one'>
                    <p style={{ color: 'lightgray' }}>Theme</p>
                    <p>Web Development</p>
                  </div>
                </div>
              </motion.div>
              <motion.div drag dragConstraints={ref} whileDrag={{scale: 1.1}} dragElastic={.1} dragTransition={{bounceStiffness:100, bounceDamping: 10}} className="course-card">
                <img src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="card-image" />
                <p className='course-card-title'>Master Front-End Domination: Create anything eith Code</p>
                <div className="course-btns">
                  <p>ReactJS</p>
                  <p>Redux</p>
                </div>
                <div className='course-bottom'>
                  <div className='course-bottom-one'>
                    <p style={{ color: 'lightgray' }}>Theme</p>
                    <p>Web Development</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="company-container">
            <p className='company-para'>Secure coveted positions at premier corporations by aligning your skills with industry demands. Elevate your candidacy through strategic networking, continuous skill development, and a polished professional persona.</p>
            <div className="company-logo">
              <img src="https://logos-world.net/wp-content/uploads/2022/01/Nagarro-Logo.png" alt="" />
              <img src="https://logos-world.net/wp-content/uploads/2021/11/Walmart-Logo.png" alt="" />
              <img src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png" alt="" />
              <img src="https://logos-world.net/wp-content/uploads/2023/01/Wipro-Logo-500x281.png" alt="" />
              <img src="https://www.sheryians.com/images/netlink.webp" alt="" />
              <img src="https://www.sheryians.com/images/tcs.webp" alt="" />
            </div>
          </div>
          <div className="insights-container">
            <h1 className='insights-title'>Insights<span>.</span></h1>
          </div>
          <h1 className='project-title-text'>Projects</h1>
          <div className="project-card-container">
            <div className="project-card pc1 ">
              <button className='project-button'>Coming Soon</button>
              <h2 className='porject-title'>Spotify Clone</h2>
              <p className='project-link-text'>build premium spotify <span><FaExternalLinkAlt /></span></p>
              <video src="https://ik.imagekit.io/sheryians/projects_card_1_gif_0__MWy37eIkh" autoPlay muted loop ></video>
            </div>
            <div className="project-card pc2 ">
              <button className='project-button'>Coming Soon</button>
              <h2 className='porject-title'>Whatsapp Clone</h2>
              <p className='project-link-text'>private messaging with node and socket.io   <span><FaExternalLinkAlt /></span></p>
              <video src="https://ik.imagekit.io/sheryians/projects_card_2_gif_0__qeYQfa-ja" autoPlay muted loop ></video>
            </div>
            <div className="project-card pc3 ">
              <button className='project-button'>Coming Soon</button>
              <h2 className='porject-title'>Google Drive Clone</h2>
              <p className='project-link-text'>implement google drive with node and mongodb    <span><FaExternalLinkAlt /></span></p>
              <video src="https://ik.imagekit.io/sheryians/projects_card_3_gif_0__Hnk_IL0fk" autoPlay muted loop ></video>
            </div>
          </div>
          <div className="talent-container">
            <div className="talent-text">
              <ImLeaf />
              <h2>Start your journey now,</h2>
              <h2>leve up your</h2>
              <h2>skills.</h2>
              <p>beachamplearning.app@gmail.com</p>
              <p>2024 &copy; BeAChamp Learning App.</p>
            </div>
            <div className="talent-quote">
            <p className='talent-para'>Secure coveted positions at premier corporations by aligning your skills with industry demands. Elevate your candidacy through strategic networking, continuous skill development, and a polished professional persona.</p>
            </div>
          </div>
          <div className="social-container">
            <h2 className='social-logo'>BeAChamp</h2>
            <h1 className='social-title'>We are social</h1>
            <div className="social-links">
            <FaFacebook />
            <RiInstagramFill />
            <BsLinkedin />
            <BsDiscord />
            <FaYoutube />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home