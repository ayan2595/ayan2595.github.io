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
        <div style = {{ backgroundColor: 'white'}}>
        <Hero title ={props.title} subTitle={props.subTitle}/>
        <div className="headingwrapper">
            <h1 className="heading">Education</h1>
        </div>
        <div style = {{ marginLeft:10}}>
        <div className="subheading">
            <h3>The University of Sheffield</h3>     
        </div>
        <div className="dateTitle">
            <p><strong>2013-2017</strong>: 1st Class Honours in Mechanical Engineering</p>
        </div>
        
        <div className="description border border-dark" style={{margin: 'auto', justifyContent: 'center', verticalAlign: 'middle'}}>
            <p style = {{marginBottom:0}}><strong>Final Year Project</strong>: Investigation of the impact and penetration resistance of current ballistic materials, 
            when treated with nano-particle based shear thickening fluids (STFs) revealed that incorporation of STFs does not improve performance.</p>
        </div>
        </div>
        <div className="headingwrapper">
            <h1 className="heading">Work Experience</h1>
        </div>
        <div style = {{ marginLeft:10}}>
        <div className="subheading">
            <h3>The Tripal Group</h3>     
        </div>
        <div className="dateTitle">
            <p><strong>March 2020 - Present</strong>: Digital Product Manager</p>
        </div>
        <div className="description border border-dark" style={{margin: 'auto', justifyContent: 'center', verticalAlign: 'middle', marginBottom: 10}}>
            <p style = {{marginBottom:0}}>Leading the delivery of Tripal’s new data driven footwear line and maintenance of their foot measurement and sizing app.</p>
        </div>
        <div className="subheading">
            <h3>The University of Sheffield</h3>     
        </div>
        <div className="dateTitle">
            <p><strong>2017-2020</strong>: KTP Associate - Mobile App Developer & Additive Manufacturing Specialist</p>
        </div>
        <div className="description border border-dark" style={{margin: 'auto', justifyContent: 'center', verticalAlign: 'middle'}}>
            <p style = {{marginBottom:0}}>Delivered an end-to-end system which captures and processes user data to create personalised footwear by leveraging 3D printing.</p>
        </div>
        </div>
        <div className="headingwrapper">
            <h1 className="heading">Skills</h1>
        </div>
        <div className="row" style = {{ marginLeft : 10, marginBottom: 10 }}>
            <img className="img" src={jslogo} />
            <p style = {{ marginLeft : 10, alignSelf:'center' }}><strong>JavaScript</strong></p>
        </div>
        <div className="row" style = {{ marginLeft : 10, marginBottom: 10 }}>
            <img class="img" src={reactnativelogo} />
            <p style = {{ marginLeft : 10, alignSelf:'center'}}><strong>React Native</strong></p>
        </div>
        <div className="row" style = {{ marginLeft : 10, marginBottom: 10 }}>
            <img class="img" src={pythonlogo}/>
            <p style = {{ marginLeft : 10, alignSelf:'center' }}><strong>Python</strong></p>
        </div>
        <div className="row" style = {{ marginLeft : 10, marginBottom: 10 }}>
            <img class="img" src={opencv} />
            <p style = {{ marginLeft : 10, alignSelf:'center' }}><strong>OpenCV</strong></p>
        </div>
        <div className="row" style = {{ marginLeft : 10, marginBottom: 10 }}>
            <img class="img" src={gcplogo} />
            <p style = {{ marginLeft : 10, alignSelf:'center' }}><strong>Google Cloud Platform</strong></p>
        </div>
        <div className="row" style = {{ marginLeft : 10, marginBottom: 10 }}>
            <img class="img" src={firebaselogo} />
            <p style = {{ marginLeft : 10, alignSelf:'center' }}><strong>Firebase</strong></p>
        </div>
        <div style = {{justifyContent:'center', alignItems:'center', margin:'auto'}}>
        <a href={PDF} without rel="noopener noreferrer" target="_blank">
        <button style = {{ marginLeft : 10, marginBottom : 10, marginTop:10, justifySelf:'center', alignSelf:'center'}} trailingIcon="picture_as_pdf" label="Resume">
        Full Resume/CV 2021- Click to view
        </button>
        </a>
        </div>
        </div>
        );
        }

        export default HomePage