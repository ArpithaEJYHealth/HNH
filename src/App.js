import './App.css';
import logo from './logo.jpg';
import slider from './slider.png';
import './Navbar.css';
import './Landing.css';
import heroimage from './heroimage.png';
import calanderImage from './calanderImage.png';
import aboutEventImage from './aboutEventImage.png';
import './AboutEvent.css';
import registrationsImage from './registrationsImage.png';
import collegesImage from './collegesImage.png';
import countriesImage from './countriesImage.png';
import citiesImage from './citiesImage.png';
// import aboutOurEventImage from './aboutOurEventImage.png';
import './Workshop.css';
import workshopImage from './workshopImage.png';
import './Themes.css';
import themesImage from './themesImage.png';
import './Roadmap.css';
import roadmapsImage from './roadmapsImage.png';
import prizesImage from "./prizesImage.png";
import './Prizes.css';
import './Sponsors.css';
import sponsorsImage from './sponsorsImage.png';
import './OurTeam.css';
import './FAQ.css';
import upArrow from "./upArrow.png";
import downArrow from "./downArrow.png";
import { useState } from 'react';
import './Contact.css';
import contactUsImage from './contactUsImage.png';
import './Footer.css';
import footerImage from './footerImage.png';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Landing />
      <AboutEvent />
      <Workshops />
      <Themes />
      <Roadmap />
      <Prizes />
      <Sponsors />
      <OurTeam />
      <FAQ />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;


// Below section is individual sections on the page


//Nav Bar

const Navbar = () => {
  return (
    <div className='nav-bar'>
      <img className='hnhlogo' src={logo} alt="logo" />
      <div className='nav-frame'>
        <ul className='nav-items'>
          <li><a className='nav-list-options' href='#about-event-id'>About</a></li>
          <li><a className='nav-list-options' href='#workshop-id'>Workshops</a></li>
          <li><a className='nav-list-options' href='#themes-id'>Themes</a></li>
          <li><a className='nav-list-options' href='#roadmap-id'>Roadmap</a></li>
          <li><a className='nav-list-options' href='#prizes-id'>Prizes</a></li>
          <li><a className='nav-list-options' href='#sponsors-id'>Sponsors</a></li>
          <li><a className='nav-list-options' href='#our-team-id'>More...</a></li>
        </ul>
        <img className='slider' src={slider} alt='slider'></img>
      </div>
      <a className='contact-section' href='#contact-us-id'> <button className='contact'>Contact Us</button></a>
    </div>);
}



//Landing Page
const Landing = () => {
  return (
    // <div className='landing-wrapper'>
    <div className='landing-section'>
      <div className='hero-details-section'>
        <p className="heading-title">HACK n’ HEAL</p>
        <p className="heading-desc">Learn | Teach | Hack | Heal</p>
        <section className='hero-sub-section'>
          <p className="register-now-details">Register  Now</p>
          <p className="join-discord-details">Join Discord</p>
        </section>
        <p className="hero-date-details"> <img className='calanderImage' src={calanderImage} alt="calanderImage" />26’th-28’th Feb, 2023</p>
      </div>
      <div className='hero-image-section'>
        <img className='hero-image' src={heroimage} alt="heroimage" />
      </div>
    </div>
    // </div>
    );
}

//About our event


const AboutEvent = () => {
  return (
    <div className="event-info" id="about-event-id">
      <div className="about-our-event">
        <p className="about-our-event-heading">About our Event</p>
      </div>
      <div className='about-event'>
        <div className="event-desc">HnH will be a 72 hours program, conducted in various stages with open dimensions to webinars, workshops and placement opportunities.
          Through this hackathon we aim to produce high impact innovations better than existing alternatives, relevant to the local context, simple, easily tested, and visible to others.
          Program features:
          <ul className="about-event-list">
            <li>72 hours of live hackathon</li>
            <li>Opportunity to interact with industry experts</li>
            <li>Experience live workshops</li>
            <li>40+ in-demand skills & 25+ services</li>
            <li>Real-time project</li>
          </ul>
        </div>
        <img className='aboutEventImage' src={aboutEventImage} alt="abountEventImage" />
      </div>
      <div>
        <section className="stats">
          <section className="regStats">
            <img className='registrationsImage' src={registrationsImage} alt="registrationsImage" />
            <p className="statsNo">4500+</p>
            <p className="statsdesc">Registrations</p>
          </section>
          <section className="collegeStats">
            <img className='collegesImage' src={collegesImage} alt="collegesImage" />
            <p className="statsNo">100+</p>
            <p className="statsdesc">Colleges</p>
          </section>
          <section className="countryStats">
            <img className='countriesImage' src={countriesImage} alt="countriesImage" />
            <p className="statsNo">20</p>
            <p className="statsdesc">Countries</p>
          </section>
          <section className="citystats">
            <img className='citiesImage' src={citiesImage} alt="citiesImage" />
            <p className="statsNo">456</p>
            <p className="statsdesc">Cities</p>
          </section>
        </section>
      </div>
    </div>
  );
}

//Workshops

const Workshops = () => {
  return (
    <div className="workshop-section" id='workshop-id'>
      <img className="workshopImage" src={workshopImage} alt='workshopImage'></img>
    </div>
  );
}

//Themes
const Themes = () => {
  return (
    <div className="themes-layout" id='themes-id'>
      <img className="themesImage" src={themesImage} alt='themesImage' />
    </div>
  );
}

//Roadmap

const Roadmap = () => {
  return (
    <div className="roadmaps-layout" id='roadmap-id'>
      <img className="roadmapsImage" src={roadmapsImage} alt='roadmapsImage' />
    </div>
  );
}

//Prizes
const Prizes = () => {
  return (
    <div className="prizes-layout" id='prizes-id'>
      <img className="prizesImage" src={prizesImage} alt='prizesImage' />
    </div>
  );
}

//Sponsors

const Sponsors = () => {
  return (
    <div className="sponsors-layout" id='sponsors-id'>
      <img className='sponsorsImage' src={sponsorsImage} alt="sponsorsImage" />
    </div>
  );
}

//Our Team

const OurTeam = () => {
  const teamMemberData = [{
    memberName: "Bharat Pahwa",
    title: "Design Lead",
    image: require('./teamMemberImage.png'),
    twitter: require('./twitterIcon.png'),
    linkedIn: require('./linkedInIcon.png'),
    facebook: require('./facebookIcon.png')

  },
  {
    memberName: "Bharat Pahwa",
    title: "Design Lead",
    image: require('./teamMemberImage.png'),
    twitter: require('./twitterIcon.png'),
    linkedIn: require('./linkedInIcon.png'),
    facebook: require('./facebookIcon.png')

  },
  {
    memberName: "Bharat Pahwa",
    title: "Design Lead",
    image: require('./teamMemberImage.png'),
    twitter: require('./twitterIcon.png'),
    linkedIn: require('./linkedInIcon.png'),
    facebook: require('./facebookIcon.png')

  },
  {
    memberName: "Bharat Pahwa",
    title: "Design Lead",
    image: require('./teamMemberImage.png'),
    twitter: require('./twitterIcon.png'),
    linkedIn: require('./linkedInIcon.png'),
    facebook: require('./facebookIcon.png')

  },
  {
    memberName: "Bharat Pahwa",
    title: "Design Lead",
    image: require('./teamMemberImage.png'),
    twitter: require('./twitterIcon.png'),
    linkedIn: require('./linkedInIcon.png'),
    facebook: require('./facebookIcon.png')

  },
  {
    memberName: "Bharat Pahwa",
    title: "Design Lead",
    image: require('./teamMemberImage.png'),
    twitter: require('./twitterIcon.png'),
    linkedIn: require('./linkedInIcon.png'),
    facebook: require('./facebookIcon.png')

  },
  {
    memberName: "Bharat Pahwa",
    title: "Design Lead",
    image: require('./teamMemberImage.png'),
    twitter: require('./twitterIcon.png'),
    linkedIn: require('./linkedInIcon.png'),
    facebook: require('./facebookIcon.png')

  },
  {
    memberName: "Bharat Pahwa",
    title: "Design Lead",
    image: require('./teamMemberImage.png'),
    twitter: require('./twitterIcon.png'),
    linkedIn: require('./linkedInIcon.png'),
    facebook: require('./facebookIcon.png')

  }
  ];
  return (
    <>
    <p className='our-team-heading' id='our-team-id'>Our Team</p>
    <div className="our-team-layout" >
      {/* <section className='ourTeamImage' /> */}
     
      <div className="team-member-card">
        {teamMemberData.map(({ image, memberName, title, twitter, linkedIn, facebook }) => (
          <div className="our-team-wrapper">
            <img className='member-image' src={image} alt='teamMemberImage'></img>
            <div className="member-name"> {memberName} </div>
            <div className="member-title">{title} </div>
            <div className="social-media-links">
              <img src={twitter} alt='twitter' className='social-link'></img>
              <img src={linkedIn} alt='linkedIn' className='social-link'></img>
              <img src={facebook} alt='facebook' className='social-link'></img>
            </div>
          </div>
        ))}
      </div>

    </div>
    </>
  );
}




//FAQ
const FAQ = () => {

  const accordionData = [{
    title: 'What is a hackathon?',
    content: `A hackathon, also known as a codefest, is a social coding event
    that brings computer programmers and other interested people
    together to improve upon or build a new software program.
    The word hackathon is a portmanteau of the words hacker,
    which means clever programmer, and marathon, an event marked by endurance.
   `
  },
  {
    title: 'Is the hackathon free?',
    content: `No, the hackathon is not free. It has an entry fee of Rs. X.
    But we also offer discounts through below platforms:
   `
  },
  {
    title: 'Is it necessary to have a team at the time of registration?',
    content: `No, you are free to form a team after you register.
   `
  },

  {
    title: 'What if we are not able to form our own team?',
    content: `You can connect with aspiring hackers on our Discord #discord_channel. 
    But if you are not able to form a team here, 
    you can mail us at xxx@ejy.health.com or #discord_id.
   `
  },

  {
    title: 'Is the registration fees refundable?',
    content: `Yes/No/Partially
   `
  },

  {
    title: 'Why should you take part in this hackathon?',
    content: `We are providing a platform to the young talent to come up with
    solutions for some of the most underrated but most prominent 
    problems the country faces. Apart from that hackathons provide 
    an opportunity for individual contributors to strengthen 
    soft skills like leadership, mentoring and communication.
    There's no better way for beginners to learn new technical
     skills than by participating in a hackathon.
   `
  }




  ];

  //   const { title, content } = accordionData;
  //   const [isActive, setIsActive] = useState(false);




  return (
    <>
      <div className="FAQLayout">
        <p className="FAQ-heading">FAQ's</p>
      </div>

      <section className="FAQImages">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </section>


    </>

  )
};

//Accordion

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div className='faq-question'>{title}</div>
        {/* <div className="accordion-icon">{isActive ? '-' : '+'}</div> */}
        <div className="accordion-icon">{isActive ? <img className="upArrow" src={upArrow} alt="upArrow"></img> : <img className="downArrow" src={downArrow} alt="downArrow"></img>}</div>
      </div>
      {isActive && <div className="faq-answer">{content}</div>}
    </div>
  );
}



//Contact Us
const ContactUs = () => {
  return (
    <div>
      <div className="contact-us-layout" >
        <section className="code-of-conduct"  id='contact-us-id'><p>Code of Conduct</p></section>
      </div>
      <img className='contactUsImage' src={contactUsImage} alt="contactUsImage" />
    </div>
  );
}

//Footer

const Footer = () => {
  return (
    <div className="footer-section">
      <img className='footerImage' src={footerImage} alt="footerImage" />
    </div>
  );
}




