import React, { useState } from 'react';
import './CardHeader.css'; // Import your CSS file

const CardHeader = (props) => {
 const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="card-container">
        <div className="service-card">
            <div className="service-content">
                <h2>Captive HR Service</h2>
            </div>
        </div>
        
        <div className="service-card">
            <div className="service-content">
                <h2>Hire to Retire Cycle</h2>
            </div>
        </div>

        <div className="service-card">
            <div className="service-content">
                <h2>Career Development</h2>
            </div>
        </div>

        <div className="service-card">
            <div className="service-content">
                <h2>Technology-centric</h2>
            </div>
        </div>
    </div>
  );
};

export default CardHeader;














// import React, { useState } from 'react';
// import './CardHeader.css'; // Import your CSS file

// const CardHeader = (props) => {
//   const [expanded, setExpanded] = useState(false);

//   const serviceData = [
//     { title: 'Captive HR Service', description: 'Description for Captive HR Service' },
//     { title: 'Hire to Retire Cycle', description: 'Description for Hire to Retire Cycle' },
//     { title: 'Career Development', description: 'Description for Career Development' },
//     { title: 'Technology-centric', description: 'Description for Technology-centric' },
//   ];

//   const handleMouseEnter = () => {
//     setExpanded(true);
//   };

//   const handleMouseLeave = () => {
//     setExpanded(false);
//   };

//   return (
//     <div className="card-container">
//       {serviceData.map((service, index) => (
//         <div
//           className={`service-card ${expanded ? 'expanded' : ''}`}
//           key={index}
//         >
//           <div className="service-content">
//             <h2>{service.title}</h2>
//             <p>{service.description}</p>
//           </div>
//         </div>
//       ))}
//       {expanded && (
//         <div className="additional-services">
//           {serviceData.slice(1, 4).map((service, index) => (
//             <div className="service-card" key={index}>
//               <div className="service-content">
//                 <h2>{service.title}</h2>
//                 <p>{service.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CardHeader;



