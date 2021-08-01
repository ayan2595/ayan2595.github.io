import React from 'react';
import Hero from '../components/Hero';
import PDF from '../images/doc.pdf';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import pythonlogo from '../images/python.png'
import firebaselogo from '../images/firebase-icon.png'
import gcplogo from '../images/gcp-icon.png'
import jslogo from '../images/js-icon.png'
import opencv from '../images/opencv.png'
import sixsig from '../images/sixsig.jpg'
import prince from '../images/prince.png'
import agileba from '../images/agileba.png'
import agilepm from '../images/agilepm.jpg'
import reactnativelogo from '../images/RN-icon.png'
import './Home.scss'

function HomePage(props){

    return(
        <div id="bootstrap-overrides" style = {{ backgroundColor: 'white'}}>
        <Hero title ={props.title} subTitle={props.subTitle}/>
        <div className="headingwrapper">
            <h1>Education</h1>
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
            <h3>Shelby Finance</h3>     
        </div>
        <div className="dateTitle">
            <p><strong>July 2021 - Present</strong>: Mobile Application Engineer</p>
        </div>
        <div className="description border border-dark" style={{margin: 'auto', justifyContent: 'center', verticalAlign: 'middle', marginBottom: 10}}>
            <div style={{flexDirection:'column'}}>
            <p style = {{marginBottom:10}}>Adding features to the 'UMoney' mobile banking app.</p>
            </div>
        </div>
        <div className="subheading">
            <h3>Tripal Group</h3>     
        </div>
        <div className="dateTitle">
            <p><strong>March 2020 - July 2021</strong>: Digital Product Manager</p>
        </div>
        <div className="description border border-dark" style={{margin: 'auto', justifyContent: 'center', verticalAlign: 'middle', marginBottom: 10}}>
            <div style={{flexDirection:'column'}}>
            <p style = {{marginBottom:10}}>Served in a dual role capacity.</p>
            <p style = {{marginBottom:10}}>As a Developer, maintained and added new features to the 'FootGauge' app.</p>
            <p style = {{marginBottom:0}}>As the Digital Product Manager, lead the delivery of Tripal's data driven footwear accesories and the licensing/sales programme for 'FootGauge'.</p>
            </div>
        </div>
        <div className="subheading">
            <h3>Tripal Group</h3>     
        </div>
        <div className="dateTitle">
            <p><strong>2017-2020</strong>: KTP Associate - Mobile App Developer & 3D Printing Engineer</p>
        </div>
        <div className="description border border-dark" style={{margin: 'auto', justifyContent: 'center', verticalAlign: 'middle'}}>
            <p style = {{marginBottom:0}}>Delivered an end-to-end system which captures and processes user data to create personalised footwear by leveraging 3D printing. As a part of this project, was the sole developer of Tripal's 'FootGauge' app, available now on the 
            <a target="_blank" href="https://search.itunes.apple.com/WebObjects/MZContentLink.woa/wa/link?mt=8&amp;path=apps%2fFootGauge" style={{color:'blue'}}> Apple App Store </a> and 
            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.Tripal.FootPal" style={{color:'blue'}}> Google Play Store</a>.</p>
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
        <div className="headingwrapper">
            <h1 className="heading">Certifications</h1>
        </div>
        <div className="row" style = {{ marginLeft : 10, marginBottom: 10 }}>
            <img className="img" src={prince} />
            <p style = {{ marginLeft : 10, alignSelf:'center' }}><strong>PRINCE2 Foundation</strong></p>
        </div>
        <div className="row" style = {{ marginLeft : 10, marginBottom: 10 }}>
            <img class="img" src={agileba} />
            <p style = {{ marginLeft : 10, alignSelf:'center'}}><strong>Agile Business Analyst (AgileBA) Foundation</strong></p>
        </div>
        <div className="row" style = {{ marginLeft : 10, marginBottom: 10 }}>
            <img class="img" src={agilepm}/>
            <p style = {{ marginLeft : 10, alignSelf:'center' }}><strong>Agile Project Management (AgilePM) Foundation</strong></p>
        </div>
        <div className="row" style = {{ marginLeft : 10, marginBottom: 10 }}>
            <img class="img" src={sixsig} />
            <p style = {{ marginLeft : 10, alignSelf:'center' }}><strong>Six Sigma Green and Yellow Belt</strong></p>
        </div>
        <div style = {{justifyContent:'center', alignItems:'center', margin:'auto'}}>
        <a href={PDF} without rel="noopener noreferrer" target="_blank">
        <button style = {{ marginLeft : 10, marginBottom : 10, marginTop:10, justifySelf:'center', alignSelf:'center', backgroundColor:'grey', fontWeight:'bold', width:300}} trailingIcon="picture_as_pdf" label="Resume">
        Full Resume/CV 2021- Click to view
        </button>
        </a>
        </div>
        </div>
        );
        }

        export default HomePage