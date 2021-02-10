import './About.css'
import { ReactComponent as WorkIcon } from "../images/shoe.svg"
import { ReactComponent as SchoolIcon } from "../images/phone.svg";
import code from '../images/code.png'
import hello from '../images/hello.png'
import ftbd1 from '../images/ftbd1.png'
import ftbd2 from '../images/ftbd2.jpg'
import exp from '../images/exp.png'
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
    <div>
      <div style={{backgroundColor:'grey', paddingBottom: 30}}>
      <h2 className="title">About Me</h2>
      <p style={{marginLeft:50, marginRight:50, fontSize: 20}}><strong>I graduated with First Class Honours as a Master 
        of Mechanical Engineering in 2017 and am currently the Digital Product Manager at Tripal Group.  
        My hobbies and interests include: Running <FaRunning style={{color: 'white'}}/>, Table Tennis <FaTableTennis style={{color: 'white'}}/>, 
        cooking <GiKitchenScale style={{color: 'white'}}/>, and nutrition <IoMdNutrition style={{color: 'white'}}/>. 
        I also follow most major sports, with a keen interest in Mixed Martial Arts <GiBoxingGlove style={{color: 'white'}}/>, 
        Football<IoMdFootball style={{color: 'white'}}/>, Cricket<GiCricketBat style={{color: 'white'}}/>.</strong></p>
        
      <p style={{marginLeft:50, marginRight:50, marginTop: 20, fontSize: 20}}><strong>My professional journey started at Tripal Group, 
        a safety shoe design and supply company. The role was a 30 month Knowledge Transfership Partnership ( <a style={{color: 'white'}} target="_blank" 
        href="https://www.gov.uk/guidance/knowledge-transfer-partnerships-what-they-are-and-how-to-apply">
        Click to find out about KTPs </a>) project
        aiming to leverage The University of Sheffield's technology infrastructure to investigate the viability of 3D printing 
        as an additional/alternate manufacturing process and eventually integrate it into Tripal's existing setup. As a KTP
        associate was completing the project whilst managing the critical constraints such as cost and time. Project progress
        and viability were communicated at quarterly gate reviews through technical presentations/demos and business cases.
        To achieve the goals set out in the project plan, I built a cross platform mbile app that captures and processes 
        users foot data to generate accuaret sizing recommendations and build customised 3D printed insoles. In addition, 
        to the app, I lead the R&D process of creating the base design of a 3D insole that can generate personalised
        comfort. Efficient Project Management skills has underpinned my success in delivering these products. Read  
        the timeline of my achievements below.</strong></p>
      </div>
      <h3 className="title">My Timeline</h3>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="February 2018"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon/>}
        >
          <h4 className="vertical-timeline-element-title" style={{marginBottom:20}}>First Coding Course</h4>
          <img class="img-fluid" aspectRatio="16by9" src={code} alt="" />
          <p>
            Undertook courses for JavaScript, HTML, CSS and Python to help build a cross-platform mobile app UI and the corresponding back-end.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="March 2018"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-title" style={{marginBottom:20}}>First Line of Code</h4>
          <img class="img-fluid" aspectRatio="16by9" src={hello} alt="" />
          <p>
            Reproduced 'Hello-World' on an emulator for the first time.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="March 2018"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-title" style={{marginBottom:20}}>Final base design of insoles</h4>
          <img class="img-fluid" aspectRatio="16by9" src={ftbd1} alt="" />
          <p>
          Initial study to investigate the relationship between biomechanical parameters and underfoot comfort
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="March 2018"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-title" style={{marginBottom:20}}>Footbed Prototype Production</h4>
          <img class="img-fluid" aspectRatio="16by9" src={ftbd2} alt="" />
          <p>
          Personalised insoles for in-house testing based on the results of the user trials,
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="March 2018"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-title" style={{marginBottom:20}}>Product User trials</h4>
          <img class="img-fluid" aspectRatio="16by9" src={exp} alt="" />
          <p>
          Ethically approved user trials for the foot measurement app and footbeds with varying arch supports
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="March 2018"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-title" style={{marginBottom:20}}>R&D for 3D printed insoles</h4>
          <img class="img-fluid" aspectRatio="16by9" src={exp2} alt="" />
          <p>
          Larger study to investigate the relationship between underfoot comfort and relevant biomechanical parameters such as peak pressure and contact area
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="March 2018"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-title" style={{marginBottom:20}}>App UI completion</h4>
          <img class="img-fluid" aspectRatio="16by9" src={s3} alt="" />
          <p>
            Reproduced 'Hello-World' on an emulator for the first time.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="March 2018"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-title" style={{marginBottom:20}}>App store release</h4>
          <img class="img-fluid" aspectRatio="16by9" src={s4} alt="" />
          <p>
            Reproduced 'Hello-World' on an emulator for the first time.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="March 2018"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-title" style={{marginBottom:20}}>Python foot measurement algorithm</h4>
          <img class="img-fluid" aspectRatio="16by9" src={skin} alt="" />
          <p>
            Reproduced 'Hello-World' on an emulator for the first time.
          </p>
        </VerticalTimelineElement>
                <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="March 2018"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-title" style={{marginBottom:20}}>GCP and Firebase implementation</h4>
          <img class="img-fluid" aspectRatio="16by9" src={cloudfunctions} alt="" />
          <img class="img-fluid" aspectRatio="16by9" src={cloudstorage} alt="" />
          <p>
            Reproduced 'Hello-World' on an emulator for the first time.
          </p>
        </VerticalTimelineElement>
                <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="March 2018"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-title" style={{marginBottom:20}}>Arch capture and measurement</h4>
          <img class="img-fluid" aspectRatio="16by9" src={skin} alt="" />
          <p>
            Reproduced 'Hello-World' on an emulator for the first time.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
    //GCP, firebase, app store release
  );
}

export default App;