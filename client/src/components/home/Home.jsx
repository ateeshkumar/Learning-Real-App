import React, { useEffect, useRef, useState } from 'react'
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Search from '../search';
import home from '../../assests/home.png';
import facebook from '../../assests/Facebook.png';
import google from '../../assests/Google.png';
import microsoft from '../../assests/microsoft.png';
import ibm from '../../assests/ibm.png';
import zomato from '../../assests/Zomato.png';
import tcs from '../../assests/TCS.png';
import hp from '../../assests/hp.png';
import oyo from '../../assests/oyo.png';
import amazon from '../../assests/amazon.png';
import categories from '../../data/curriculum';
import cirtification from '../../data/certification'; 
import {FaCode} from 'react-icons/fa';
import {BsArrowLeftShort,BsArrowRightShort} from 'react-icons/bs';
import chooseus from '../../data/chooseus';
import courses from '../../data/courses';
import Navbar from '../navbar';
import Footer from '../footer';
import {useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    const image = [google,facebook,microsoft,amazon,zomato,ibm,tcs,hp,oyo];
    const [curriculum,setCurriculum] = useState(categories);
    const [curr,setCurr] = useState('categories');
    const [iconpending,setIconPending] = useState(true);
    const [imgnpending,setImgPending] = useState(true);
    const scrollRef = useRef(null);
    const scroll = (direction)=>{
        const {current} = scrollRef;
        if(direction==='left'){
          current.scrollLeft -=300;
        }else{
          current.scrollLeft +=300;
        }
      }
    useEffect(()=>{
        if(curr==='categories'){
            setCurriculum(categories);
            setIconPending(true);
            setImgPending(false);

        }else{
            setCurriculum(cirtification)
            setIconPending(false)
            setImgPending(true);
        }
    },[curr])
  return (
    <div className='home-container'>
        <Navbar/>
        <div className="h-header">
            <div className="h-left">
                <h1>
                    Simple Easy Learning <br /> at Your Fingertips
                </h1>
                <Search/> 
                <button onClick={()=>navigate('/codeeditor')} className='btn'><FaCode/> Coding Compiler</button>
            </div>
            <div className="h-right">
            <div class="loader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            </div>
        </div>
        <div className="h-overview">
            <div className="ov-left">
                <img src={home} alt="home" />
            </div>
            <div className="ov-right">
                <h1>Overview</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto praesentium, placeat alias vitae quo ullam voluptatem neque? Optio et dolorem accusamus sunt harum illum ea, voluptates a, esse perspiciatis voluptas.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto praesentium, placeat alias vitae quo ullam voluptatem neque? Optio et dolorem accusamus sunt harum illum ea, voluptates a, esse perspiciatis voluptas.</p>
            </div>
        </div>
        <div className="courses">
            <h1>Our Courses</h1>
            <div className="course-gallery-con" ref={scrollRef}>
                <div className="course-gallery" onClick={()=>navigate('/hero')}>
                    {
                        courses.map((item)=>(
                            <div className="gallery-card">
                                <img src={item.icon} alt={item.title}/>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="course-gallery-arrow">
                    <BsArrowLeftShort className='gallery-arrow-icon' onClick={()=>scroll('left')}/>
                    <BsArrowRightShort className='gallery-arrow-icon' onClick={()=>scroll('right')}/>
                </div>
            </div>
        </div>
        <div className="curriculum">
            <div className="inner-curriculum">
                <div className="cu-upper">
                    <h1>Curriculum</h1>
                    <p>We offer courses that provide complete knowledge on almost any skill you’d like to add to your proficiency. For <br />
                    learners who want to master a skill set from scratch to the advanced level, <br />
                    we offer Certifications and Advanced Certifications.</p>
                </div>
                <div className="cu-mid">
                    <div className="cumid-left">
                        <span onClick={()=>setCurr('categories')}>Categories</span>
                        <span onClick={()=>setCurr('certifications')}>Certifications</span>
                    </div>
                    <div className="cumid-right">
                        <button>See All</button>
                    </div>
                </div>
                <div className="cu-lower">
                    {
                        curr ==='categories'?(<h2>The letest technical  skills. yours for the taking.</h2>):
                        (<h2>Upgrade yourself with certification that include combinaton of ourmultiple courses.</h2>)  
                    }
                    <div className="curr-card">
                        { curriculum.map((item)=>(
                            <div className='curr-source'>
                                <div className="curr-icon">
                                    {iconpending && <FontAwesomeIcon icon={item.icon} className='curr-icon-block' />}
                                    {imgnpending && <img src={item.icon} className='cirti-img' alt='Img'/>}
                                </div>
                                <h3>{item.title}</h3>
                            </div>
                        )) }
                    </div>
                </div>
            </div>
        </div>
        <div className="companies">
            <div className="comp-left">
                {
                    image.map((item)=>(
                        <div className='comp-img'>
                            <img src={item} alt="Compines"/>
                        </div>
                    ))
                }
            </div>
            <div className="comp-right">
               <h1>Our Learners </h1>
               <h2>work with</h2>
               <p>Join our global community of learners who are excelling in top companies. Unleash your true potential with our comprehensive courses to upgrade your career.</p>
            </div>
        </div>
        <div className="whychoosus">
            <h1>Why <h2>Choose Us</h2></h1>
            <div className="choose-card-container">
                {
                    chooseus.map((item)=>(
                        <div className="choose-card">
                            <FontAwesomeIcon icon={item.icon} className='ch-card-icon'/>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    ))
                }
            </div>

        </div>
        <Footer/>
    </div>
  )
  
}

export default Home;