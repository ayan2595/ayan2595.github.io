import React from 'react';
import Hero from '../components/Hero';
import PDF from '../images/doc.pdf';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import pythonlogo from '../images/python.jpg'
import firebaselogo from '../images/firebase-icon.png'
import gcplogo from '../images/gcp-icon.png'
import jslogo from '../images/js-icon.png'
import opencv from '../images/opencv.png'
import reactnativelogo from '../images/RN-icon.png'
import './Home.css'

function HomePage(props){
    return(
        <div>
        <Hero title ={props.title} subTitle={props.subTitle}/>
        <section id="resume">

        <div className="headingwrapper">
            <h1 className="heading"><span>Education</span></h1>
        </div>
        <div className="subheading">
            <h3>The University of Sheffield</h3>     
        </div>
        <div className="dateTitle">
            <p>2013-2017: 1st Class Honours in Mechanical Engineering</p>
        </div>
        
        <div className="description border border-dark justify-content-center">
            <p>Final Year Project: Investigation of the impact and penetration resistance of current ballistic materials, 
            when treated with nano-particle based shear thickening fluids (STFs) revealed that incorporation of STFs does not improve performance.</p>
        </div>

        <div className="headingwrapper">
            <h1 className="heading"><span>Work Experience</span></h1>
        </div>
        <div className="subheading">
            <h3>The Tripal Group</h3>     
        </div>
        <div className="dateTitle">
            <p>March 2020 - Present : Digital Product Manager</p>
        </div>
        <div className="description border border-dark">
            <p>Leading the delivery of Tripal’s new data driven footwear line and maintenance of their shoe sizing app.</p>
        </div>
        
        <div className="subheading">
            <h3>The University of Sheffield</h3>     
        </div>
        <div className="dateTitle">
            <p>2017-2020: KTP Associate - Mobile App Developer & Additive Manufacturing Specialist</p>
        </div>
        <div className="description border border-dark">
            <p className="txt">Delivered an end-to-end system which captures and utilises user data to create personalised footwear by leveraging 3D printing.</p>
        </div>
        <a href={PDF} without rel="noopener noreferrer" target="_blank">
        <button trailingIcon="picture_as_pdf" label="Resume">
        Resume/CV 2021- Click to view
        </button>
        </a>

        <div className="headingwrapper">
            <h1 className="heading"><span>Skills</span></h1>
        </div>
        <div className="row padding-left-10px">
            <img className="img" src={jslogo} />
            <p>JavaScript</p>
        </div>
        <div className="row">
            <img class="img" src={reactnativelogo} />
            <p>React Native</p>
        </div>
        <div className="row">
            <img class="img" src={pythonlogo}/>
            <p>Python</p>
        </div>
        <div className="row">
            <img class="img" src={opencv} />
            <p>OpenCV</p>
        </div>
        <div className="row">
            <img class="img" src={gcplogo} />
            <p>Google Cloud Platform</p>
        </div>
        <div className="row">
            <img class="img" src={firebaselogo} />
            <p>Firebase</p>
        </div>
        </section>
        </div>
        );
        }

        export default HomePage