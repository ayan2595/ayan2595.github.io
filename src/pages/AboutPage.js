import './About.css'
import { ReactComponent as ShoeIcon } from "../images/shoe.svg"
import { ReactComponent as PhoneIcon } from "../images/phone.svg";
import { ReactComponent as qualIcon } from "../images/qual.png";
import code from '../images/code.png'
import hello from '../images/hello.png'
import ftbd1 from '../images/ftbd1.png'
import ftbd2 from '../images/ftbd2.jpg'
import archimage from '../images/archimage.jpg'
import scanner from '../images/scanner.jpg'
import exp from '../images/exp.png'
import iteratve from '../images/iterative.png'
import cicd from '../images/cicd.jpg'
import tdd from '../images/tdd.png'
import apprelease from '../images/apprelease.png'
import cloudfunctions from '../images/cloudfunctions.png'
import cloudstorage from '../images/cloudstorage.png'
import exp2 from '../images/exp2.png'
import s3 from '../images/s3.png'
import s4 from '../images/s4.png'
import skin from '../images/skin.jpg'
import { GiCricketBat } from 'react-icons/gi';
import { IoMdFootball } from 'react-icons/io';
import { GiBoxingGlove } from 'react-icons/gi';
import { FaTableTennis } from 'react-icons/fa';
import { IoMdNutrition } from 'react-icons/io'; 
import { FaRunning } from 'react-icons/fa'; 
import { GiKitchenScale } from 'react-icons/gi'; 
import { AiFillApple } from 'react-icons/ai'; 
import { FcAndroidOs } from 'react-icons/fc'; 
import timelineElements from "../TimelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function App() {
  let workIconStyles = { background: "#06D6A0", height:200, width: 200};
  let schoolIconStyles = { background: "#f9c74f", height:200, width: 200};

  return (
    <div id="bootstrap-overrides">
      <div style={{backgroundColor:'grey', paddingBottom: 20, paddingTop: 10}}>
      <h2 className="title">About Me</h2>
      <p style={{marginLeft:50, marginRight:50}}><strong>I graduated from the University of Sheffield with a First Class Honours in Mechanical Engineering in 2017.
        I am currently the Digital Product Manager at Tripal Group, leading
        their digital transformation which includes creating a mobile app for user foot data capture, utilising 3D printing for manufacturing bespoke
        products and using data to drive footwear design. My hobbies and interests include: Running <FaRunning style={{color: 'white'}}/>, 
        Table Tennis <FaTableTennis style={{color: 'white'}}/>, cooking <GiKitchenScale style={{color: 'white'}}/>, and studying
        about nutrition <IoMdNutrition style={{color: 'white'}}/>. 
        I follow most major sports, with a keen interest in Mixed Martial Arts <GiBoxingGlove style={{color: 'white'}}/>, 
        Football<IoMdFootball style={{color: 'white'}}/>, Cricket<GiCricketBat style={{color: 'white'}}/>.</strong></p>
        
      <p style={{marginLeft:50, marginRight:50, marginTop: 20}}><strong>My professional journey started at Tripal Group. 
        The role was a Knowledge Transfership Partnership ( <a style={{color: 'white'}} target="_blank" 
        href="https://www.gov.uk/guidance/knowledge-transfer-partnerships-what-they-are-and-how-to-apply">
        Click to find out about KTPs </a>) project with The University of Sheffield, to investigate the viability of 3D printing as 
        an additional manufacturing process for Tripal. To achieve this goal
        I built a cross platform mobile app that captures and processes the users foot data to generate accurate shoe sizing recommendations and 
        build customised 3D printed insoles. In addition, I lead the R&D process of creating the base design of 
        a 3D printed insole that can generate personalised comfort. Efficient Project Management skills underpinned my success in delivering these products. 
        Read the timeline of my achievements below.</strong></p>
      </div>
      <h2 className="title">My Timeline</h2>
      <VerticalTimeline>
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="September 2017"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<PhoneIcon/>}
        >
          <h4 className="vertical-timeline-element-title" style={{marginBottom:20}}>Market Research - 3D Data Capture Systems</h4>
          <img class="img-fluid" aspectRatio="16by9" src={scanner} alt="" />
          <p>Market Research revealed that developing a cross-platform mobile app to capture customer foot data as opposed to setting up physical 3D scanning stations across the UK, would
            save Tripal over £200,000 in equipment, training and logistical costs; this would also reach a lot more end users compared to the physical systems.</p>
        </VerticalTimelineElement>
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="December 2017"
          contentStyle={{ background: 'green' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<qualIcon />}
        >
        <h4 style ={{color:'white'}}>PRINCE2 Foundation Certification</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="February 2018"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<PhoneIcon/>}
        >
          <h4 className="vertical-timeline-element-title" style={{marginBottom:20}}>Learning to Code</h4>
          <img class="img-fluid" aspectRatio="16by9" src={code} alt="" />
          <p>
            To help build the cross-platform foot capture mobile app, I undertook basic courses for JavaScript, HTML, CSS and Python for the App UI and the corresponding back-end. 
            In addition I did code-alongs on resources such as YouTube; Github, Google and Stackoverflow were among the other helpful resources.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="March 2018"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<PhoneIcon />}
        >
          <h4 className="vertical-timeline-element-title" style={{marginBottom:20}}>First Line of Code</h4>
          <img class="img-fluid" aspectRatio="16by9" src={hello} alt="" />
          <p>
            After learning basics of coding, I created my first React Native app using Expo and reproduced 'Hello-World' on an emulator for the first time.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2018"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<ShoeIcon/>}
        >
          <h4 className="vertical-timeline-element-title" style={{marginBottom:20}}>R&D for 3D printed insoles</h4>
          <img class="img-fluid" aspectRatio="16by9" src={exp} alt="" />
          <p>
          To design a 3D printed insole, it was crucial to investigate the relationship between biomechanical parameters such as contact area and peak pressure and
          underfoot comfort.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="October 2018"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<ShoeIcon />}
        >
          <h4 className="vertical-timeline-element-title" style={{marginBottom:20}}>Insole Prototypes</h4>
          <img class="img-fluid" aspectRatio="16by9" src={ftbd2} alt="" />
          <p>
          Created a set of modular insoles with different materials and design features based on the initial research and testing.
          These were utilised for ethically approved user trials.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="February 2019"
          contentStyle={{ background: 'green' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<qualIcon />}
        >
        <h4 style ={{color:'white'}}>Agile Project Management Foundation Certification</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="March 2019"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<ShoeIcon/>}
        >
          <h4 className="vertical-timeline-element-title" style={{marginBottom:20}}>User Trials</h4>
          <img class="img-fluid" aspectRatio="16by9" src={exp2} alt="" />
          <p>
          Data from the user trials was utilised to establish a correlation between the different insole design metrics and its
          effect on overall underfoot comfort.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="April 2019"
          contentStyle={{ background: 'green' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<qualIcon />}
        >
        <h4 style ={{color:'white'}}>Six Sigma Green and Yellow Belt Certification</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2019"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<ShoeIcon />}
        >
          <h4 className="vertical-timeline-element-title" style={{marginBottom:20}}>Final Insole Design</h4>
          <img class="img-fluid" aspectRatio="16by9" src={ftbd1} alt="" />
          <p>
          At the end of R&D cycle, the research and data from multiple user trials was used
          to create the base design for both a semi-customised and fully-customised range of insoles.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="August 2019"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<PhoneIcon/>}
        >
          <h4 className="vertical-timeline-element-title" style={{marginBottom:20}}>App UI completion</h4>
          <img class="img-fluid" aspectRatio="16by9" src={iteratve} alt="" />
          <p>
            Created version 1 of the App UI, which had the ability to capture a birds eye view of the users image and process it to
            produce an accurate shoe size recommendation for any shoe style.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="October 2019"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<PhoneIcon/>}
        >
          <h4 className="vertical-timeline-element-title" style={{marginBottom:20}}>Google Cloud Platform (GCP) and Firebase</h4>
          <img class="img-fluid" aspectRatio="16by9" src={cloudfunctions} alt="" />
          <img class="img-fluid" aspectRatio="16by9" src={cloudstorage} alt="" />
          <p>
            Introduced GCP and Firebase for the Apps backend requirements. Firebase was utilised for user login
            and store user images. GCP was utilised to host the python based image processing script as a 
            cloud function which was triggered using HTTP endpoints in the UI.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="December 2019"
          contentStyle={{ background: 'green' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<qualIcon />}
        >
        <h4 style ={{color:'white'}}>Agile Business Analyst Foundation Certification</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="February 2020"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<PhoneIcon/>}
        >
          <h4 className="vertical-timeline-element-title" style={{marginBottom:20}}>Python Algorithm</h4>
          <img class="img-fluid" aspectRatio="16by9" src={skin} alt="" />
          <p>
            Implemented Python's OpenCV library to create an algorithm that utilised an A4 paper as reference to measure the critical metrics of the foot. 
            These measurements were then matched to dimensions of the selected footwear to produce an accurate shoe
            sizing recommendation.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="March-October 2020"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<PhoneIcon/>}
        >
          <h4 className="vertical-timeline-element-title" style={{marginBottom:20}}>App Trials</h4>
          <div style={{justifyContent:'space-between'}}>
          <img class="img-fluid" style={{justifyContent:'center', alignItems:'center', marginBottom:5}} aspectRatio="16by9" src={cicd} alt="" />
          <img class="img-fluid" style={{justifyContent:'center', alignItems:'center', marginBottom:5}} aspectRatio="16by9" src={tdd} alt="" />
          </div>
          <p>
            Internal trials and external user trials were utilised to monitor performance, accuracy and general user experience.
            Iterative development was implemented to make the transition from the development to the production version of the app.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="November 2020"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<PhoneIcon/>}
        >
          <h4 className="vertical-timeline-element-title" style={{marginBottom:20}}>App Store Release</h4>
          <img class="img-fluid" aspectRatio="16by9" src={apprelease} alt="" />
          <p>
            Fulfilled all the formalites from creating developer accounts to writing privacy policies to succesfully launch 
            the app of the Apple App Store <AiFillApple style={{color: 'grey'}}/> and Google Play Store <FcAndroidOs style={{color: 'white'}}/>. 
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="February 2021"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<PhoneIcon />}
        >
          <h4 className="vertical-timeline-element-title" style={{marginBottom:20}}>Arch Mapping</h4>
          <img class="img-fluid" aspectRatio="16by9" src={archimage} alt="" />
          <p>
            Added the ability to map the contour of the arch and extract the users arch height allowing recommendation of semi-custom
            'low', 'medium', 'high' arched insoles, or manufacture personalised 3D printed insole.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
    //GCP, firebase, app store release
  );
}

export default App;