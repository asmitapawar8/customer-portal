import './SeamexHeader.css';
import React, { useState } from 'react';
import ServiceType from '../ServiceCards';
import Card2 from './card2';
import CardHeader from './CardHeader';
import wfa from '../../assets/wfa.jpg';
import htr from '../../assets/htr.jpg';
import cardevp from '../../assets/cardevp.jpg'
import personaldata from '../../assets/personaldata.jpg';
import exit from '../../assets/exit.jpg';
import middle from '../../assets/middle.jpg';
import ob from '../../assets/ob.jpg';


const AboutUs = () => {

  const [isCardVisible, setCardVisible] = useState(false);
  const [showCards, setShowCards] = useState(false); // Add state to control card visibility

  const toggleCardVisibility = () => {
    setCardVisible(!isCardVisible);
  };
   // Function to show cards on hover
   const handleMouseEnter = () => {
    setShowCards(true);
  };

  // Function to hide cards when not hovering
  const handleMouseLeave = () => {
    setShowCards(false);
  };
  const service1 = [
    {
      name: 'Hire-To-Retire Lifecycle',
      photo: htr,
      aim: 'Efficiently manage HR processes',
      description:'We play a multifaceted role in facilitating various critical processes that are essential for maintaining an efficient and productive workforce. At its core, Workforce Administration encompasses a wide array of HR functions, each contributing to the seamless functioning of an organization. These functions include Recruitment, Hiring, Payroll Management, Leave Management, and Mobility Management. Recruitment encompasses activities such as job posting, candidate sourcing, interviewing, and onboarding. Hiring involves conducting background checks, providing orientation, and ensuring a smooth transition into the company. Payroll Management is responsible for accurately compensating employees. It includes tasks like calculating wages, deductions, taxes, and ensuring timely salary disbursal. Leave Management focuses on overseeing employee leave requests, ensuring compliance with leave policies, and maintaining records to manage workforce availability. Mobility Management addresses the relocation and transfer of employees, whether between departments, locations, or even businesses. It encompasses logistics, immigration, and support services to ensure a hassle-free transition.Effective Workforce Administration optimizes these functions, streamlining HR processes to create a harmonious, engaged, and highly productive workforce. It contributes to an organization.s ability to attract, retain, and nurture talent, thereby fostering long-term growth and success. Ultimately, it is the backbone of a company.s human resources operations, enhancing efficiency and enabling strategic human capital management.Effective Workforce Administration optimizes these functions, streamlining HR processes to create a harmonious, engaged, and highly productive workforce. It contributes to an organization.s ability to attract, retain, and nurture talent, thereby fostering long-term growth and success. Ultimately, it is the backbone of a companys human resources operations, enhancing efficiency and enabling strategic human capital management.' },
  ];
  const service2 = [
    {
      name: 'Workforce  Administration',
      photo: wfa,
      aim: '$30',
      description: 'Lorem ipsum dolor sit amet, consectLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.etur adipiscing elit.',
    }];
    const service3 = [
      {
        name: 'Alt-Recruit & On-boarding',
        photo: ob,
        aim: 'Alt-Recruit & On-boarding',
        description: 'Lorem ipsum dolor sit amet, consectLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.etur adipiscing elit.',
     
      }];
      const servicemiddle = [
        {
          name: 'We cater these services',
          photo: middle,
        }];

    const service4 = [
        {
          name: 'Exit and Offboarding',
          photo: exit,
          aim: 'Exit & Offboarding',
          description: 'Lorem ipsum dolor sit amet, consectLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.etur adipiscing elit.',
       
        }];
    const service5 = [
          {
            name: 'Personal Employee Data Management',
            photo: personaldata,
            aim: 'Personal Employee Data Management',
            description: 'Lorem ipsum dolor sit amet, consectLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.etur adipiscing elit.',
         
          }];
    const service6 = [
            {
              name: 'Career Development',
        photo: cardevp,
        aim: 'Career Development',
        description: 'Lorem ipsum dolor sit amet, consectLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.etur adipiscing elit.',
     
            }];
            
   


  return (
    <div>
      <div className="about-us-container">
        <div className="about-us-content">
          <h1 id='h1' style={{ fontSize: '43px' }}>SeamEx: Creating an Delightful <br></br>Employee Experience!!</h1>
          <p id='p1'>
            We serve as the backbone of the Aditya Birla Group, providing captive HR shared services.
            <br></br>We play a crucial role in supporting the ABG's global workforce and contributing to its growth and success.
          </p>
        </div>
        <br />
        <h1
          className='service-areas-header'
          style={{ fontSize: '23px', cursor: 'pointer' }}
          // onClick={toggleCardVisibility}
          onMouseEnter={handleMouseEnter} // Show cards on hover
          onMouseLeave={handleMouseLeave} // Hide cards when not hovering
          onClick={toggleCardVisibility}
          > Services We Offer.. &nbsp;<i className="fas fa-hand-pointer"></i></h1>
        {/* {isCardVisible && <CardHeader />} */}
        {isCardVisible && (
          <div className={`card-container ${showCards ? 'show-cards' : ''}`}>
            <CardHeader/>
      </div>)}
      <div className='container'>
        <div className='card-container'>
          <div className="star-container">
            <div className="left-cards">
              <div className="abc">
                <div className="service-container">
                  {service1.map((service, index) => (
                    <ServiceType key={index} service={service} />
                  ))}
                </div>
              </div>
              <div className="abc">
                <div className="service-container">
                  {service2.map((service, index) => (
                    <ServiceType key={index} service={service} />
                  ))}
                </div>
              </div>
              <div className="abc">
                <div className="service-container">
                  {service3.map((service, index) => (
                    <ServiceType key={index} service={service} />
                  ))}
                </div>
              </div>
          </div>
          <div className="abc">
          <div className="star-container">

              <div className="service-container">
          <Card2
        title="We cater these services"
        description="This is a short description of the card."
        fullDescription="This is the full description of the card. It provides more details about the card's content."
        image={"../../assets/middle.jpg"}
      />
                </div>
              </div>
          </div>
            {/* <div className="abc">
              <div className="service-container">
                {servicemiddle.map((service, index) => (
                  <ServiceType key={index} service={service} />
                ))}
              </div>
            </div> */}
          </div>
          <div className="star-container">
          <div className="right-cards">
          <div className="abc">
                <div className="service-container">
                  {service4.map((service, index) => (
                    <ServiceType key={index} service={service} />
                  ))}
                </div>

              <div className="abc">
                <div className="service-container">
                  {service5.map((service, index) => (
                    <ServiceType key={index} service={service} />
                  ))}
                </div>
              </div>

              <div className="abc">
                <div className="service-container">
                  {service6.map((service, index) => (
                    <ServiceType key={index} service={service} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
