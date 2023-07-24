// import React, { useState } from 'react';
// import axios from 'axios';
// import './Profile.css';

// const Profileform = ({ onLogin }) => {
//   const [formData, setFormData] = useState({
//     name:'',
//     email:'',
//     designation:'',
//     performancestatus:'',
//     experience:'',
//   });

//   const [submitting, setSubmitting] = useState(false);
//   const [setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     createMerchant();
//   };

//   const createMerchant = async () => {
//     setSubmitting(true);
//     try {
//       const formDataToSubmit = new FormData();
//       formDataToSubmit.append('name',formData.name);
//       formDataToSubmit.append('email',formData.email);
//       formDataToSubmit.append('designation',formData.designation);
//       formDataToSubmit.append('performancestatus',formData.performancestatus);
//       formDataToSubmit.append('experience',formData.experience);
  
//       const response = await axios.post(
//         'http://localhost:3001/profile_data',
//         formDataToSubmit,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         }
//       );
  
//       console.log(response);
    
//       setError('');
//       onLogin();
//     } catch (error) {
//       console.error(error);
      
//     } finally {
//       setSubmitting(false);
//     }
//   };
  
//   const main = {
//     backgroundImage: 'url("https://img.freepik.com/premium-vector/blue-soft-abstract-futuristic-background_120409-2415.jpg?w=1380")',
//     backgroundSize: 'cover',
//     backgroundImageRepeat: 'no-repeat',
//     minHeight: '100vh',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
  
//   };
//   return (
//     <div style={main}>
//       <div className="form-container">
//         <h2><u>Profile Form</u></h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="name">Name*</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               data-aos="fade-right"
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="email">Email*</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               data-aos="fade-right"
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="designation">Designation*</label>
//             <input
//               type="text"
//               id="designation"
//               name="designation"
//               value={formData.designation}
//               onChange={handleChange}
//               data-aos="fade-right"
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="performancestatus">Performance Status*</label>
//             <select
//               id="performancestatus"
//               name="performancestatus"
//               value={formData.performancestatus}
//               onChange={handleChange}
//               data-aos="fade-right"
//               required
//             >
//               <option value="">Select Status</option>
//               <option value="excellent">Excellent</option>
//               <option value="good">Good</option>
//               <option value="fair">Fair</option>
//               <option value="poor">Poor</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label htmlFor="experience">Experience*</label>
//             <input
//               type="text"
//               id="experience"
//               name="experience"
//               value={formData.experience}
//               onChange={handleChange}
//               data-aos="fade-right"
//               required
//             />
//           </div>
          
//           <div className="form-group">
//             <button type="submit" disabled={submitting} data-aos="fade-up">
//               {submitting ? 'Submitting...' : 'Submit'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Profileform;

import React, { useState } from 'react';
import axios from 'axios';

const Profileform = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    designation: '',
    performancestatus: '',
    experience: '',
    profilePic: null,
  });

  const [submitting, setSubmitting] = useState(false);
  const [setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createMerchant();
  };

  const createMerchant = async () => {
    setSubmitting(true);
    try {
      const formDataToSubmit = new FormData();
      formDataToSubmit.append('name', formData.name);
      formDataToSubmit.append('email', formData.email);
      formDataToSubmit.append('designation', formData.designation);
      formDataToSubmit.append('performancestatus', formData.performancestatus);
      formDataToSubmit.append('experience', formData.experience);
      formDataToSubmit.append('profilePic', formData.profilePic);

      const response = await axios.post(
        'http://localhost:3001/profile_data',
        formDataToSubmit,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log(response);

      setError('');
      onLogin();
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  const main = {
    backgroundImage:
      'url("https:")',
    backgroundSize: 'cover',
    backgroundImageRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const formContainer = {
    background: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    width:'60%',
    backgroundColor:'rgb(226, 238, 245)',
  };

  const rowContainer = {
    display: 'flex',
    justifyContent:'space-evenly',
    marginBottom: '20px',
  };

  const labelStyle = {
    fontWeight: 'bold',
    
  };

  const inputStyle = {
    width: '300px',
    padding: '5px',
    height:'40px',
    borderRadius: '5px',
  };

  const selectStyle = {
    width: '300px',
    padding: '5px',
    height:'40px',
    borderRadius: '5px',
  };

  const buttonStyle = {
    backgroundColor: '#754b21',
    border: 'none',
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
    width:'150px',
    marginTop:'20px',
    
  };

  const profilePicStyle = {
    width: '120px',
    height: '120px',
    borderRadius: '60%',
  };

  return (
    <div style={main}>
      <div style={formContainer}>
        <div style={{ paddingLeft:'30px',backgroundColor:'lightblue',borderRadius:'10px'}}>
          <img
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.1383546018.1689150791&semt=ais"
            alt="Profile Pic"
            style={profilePicStyle}
            
          />
          <h2 style={{ textAlign: 'center', textDecoration: 'underline',paddingBottom:'20px' }}>Profile Form</h2>
        </div>&nbsp;&nbsp;
        
        <form onSubmit={handleSubmit}>
          <div style={rowContainer}>
            <div>
              <label htmlFor="name" style={labelStyle}>
                Name*
              </label>
              <br />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>
            <div>
              <label htmlFor="email" style={labelStyle}>
                Email*
              </label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>
          </div>

          <div style={rowContainer}>
            <div>
              <label htmlFor="designation" style={labelStyle}>
                Designation*
              </label>
              <br />
              <input
                type="text"
                id="designation"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>
            <div>
              <label htmlFor="performancestatus" style={labelStyle}>
                Performance Status*
              </label>
              <br />
              <select
                id="performancestatus"
                name="performancestatus"
                value={formData.performancestatus}
                onChange={handleChange}
                style={selectStyle}
                required
              >
                <option value="">Select Status</option>
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
                <option value="poor">Poor</option>
              </select>
            </div>
          </div>

          <div style={{ paddingLeft:'34px',}}>
            <div>
              <label htmlFor="experience" style={labelStyle}>
                Experience*
              </label>
              <br />
              <input
                type="text"
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>
          </div>

        

          <div style={{ paddingLeft:'34px',}}>
            <button type="submit" disabled={submitting} style={buttonStyle}>
              {submitting ? 'Saving...' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profileform;