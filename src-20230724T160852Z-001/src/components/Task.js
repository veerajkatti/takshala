// import React, { useState, useEffect } from 'react';


// const initialFormState = {
//   name: '',
//   email: '',
//   phone_no: '',
//   course: '',
//   status: '',
//   referredby: '',
// };

// function Task() {
//   const [formData, setFormData] = useState(initialFormState);
//   const [merchants, setMerchants] = useState([]);

//   useEffect(() => {
//     getMerchants();
//   }, []);

//   function getMerchants() {
//     fetch('http://localhost:3001')
//       .then(response => response.json())
//       .then(data => {
//         setMerchants(data);
//       });
//   }

//   function createMerchant() {
//     fetch('http://localhost:3001/merchant_model', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     })
//       .then(response => response.json())
//       .then(data => {
//         alert(data);
//         setFormData(initialFormState);
//         getMerchants();
//       });
//   }

//   function deleteMerchant(id) {
//     fetch(`http://localhost:3001/merchant_model/${id}`, {
//       method: 'DELETE',
//     })
//       .then(response => response.json())
//       .then(data => {
//         alert(data);
//         getMerchants();
//       });
//   }

//   function handleInputChange(event) {
//     const { name, value } = event.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value,
//     }));
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     createMerchant();
//   }

//   const tableStyle = {
//     width: '100%',
//     borderCollapse: 'collapse',
//     marginTop: '20px',
//   };

//   const thStyle = {
//     backgroundColor: '#000080',
//     fontWeight: 'bold',
//     padding: '10px',
//     textAlign: 'center',
//     border: '1px solid #ccc',
//     color: 'white',
//   };

//   const tdStyle = {
//     padding: '10px',
//     textAlign: 'center',
//     border: '1px solid #ccc',
//   };

//   const evenRowStyle = {
//     backgroundColor: '#f9f9f9',
//   };
//   const main = {
//     backgroundImage: 'url("data:image/jpeg;base64,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")',
//     backgroundSize: 'cover',
//     backgroundImageRepeat: 'no-repeat',
//     minHeight: '100vh',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
  
//   };

//   return (
//     <div style={main}>
//       <h1>
//         <u>New Lead Page</u>
//       </h1>
//       <br />
//       <form
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           width: '300px',
//           margin: 'auto',
//         }}
//         onSubmit={handleSubmit}
//       >
//         <br />
//         <div style={{ display: 'flex', marginBottom: '10px' }}>
//           <label htmlFor="name" style={{ fontWeight: 'bold' }}>
//             Name*
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             required
//             style={{
//               marginLeft: '10px',
//               width: '100%',
//               padding: '5px',
//               border: '1px solid #ccc',
//               borderRadius: '4px',
//             }}
//           />
//         </div>
//         <br />
//         <div style={{ display: 'flex', marginBottom: '10px' }}>
//           <label htmlFor="email" style={{ fontWeight: 'bold' }}>
//             Email*
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             required
//             style={{
//               marginLeft: '10px',
//               width: '100%',
//               padding: '5px',
//               border: '1px solid #ccc',
//               borderRadius: '4px',
//             }}
//           />
//         </div>
//         <br />
//         <div style={{ display: 'flex', marginBottom: '10px' }}>
//           <label htmlFor="phone_no" style={{ fontWeight: 'bold' }}>
//             Contact*
//           </label>
//           <input
//             type="text"
//             id="phone_no"
//             name="phone_no"
//             value={formData.contact}
//             onChange={handleInputChange}
//             required
//             style={{
//               marginLeft: '10px',
//               width: '100%',
//               padding: '5px',
//               border: '1px solid #ccc',
//               borderRadius: '4px',
//             }}
//           />
//         </div>
//         <br />
//         <div style={{ display: 'flex', marginBottom: '10px' }}>
//           <label htmlFor="course" style={{ fontWeight: 'bold' }}>
//             Course*
//           </label>
//           <select
//             id="course"
//             name="course"
//             value={formData.course}
//             onChange={handleInputChange}
//             required
//             style={{
//               marginLeft: '10px',
//               width: '100%',
//               padding: '5px',
//               border: '1px solid #ccc',
//               borderRadius: '4px',
//             }}
//           >
//             <option value="">Select Course</option>
//             <option value="Hair Dressing">Hair Dressing</option>
//             <option value="Make-up Artist">Make-up Artist</option>
//             <option value="Nail Art">Nail Art</option>
//             <option value="Beautician">Beautician</option>
//             <option value="Other">Other</option>
//           </select>
//         </div>
//         <br />
//         <div style={{ display: 'flex', marginBottom: '10px' }}>
//           <label htmlFor="status" style={{ fontWeight: 'bold' }}>
//             Status*
//           </label>
//           <select
//             id="status"
//             name="status"
//             value={formData.status}
//             onChange={handleInputChange}
//             required
//             style={{
//               marginLeft: '10px',
//               width: '100%',
//               padding: '5px',
//               border: '1px solid #ccc',
//               borderRadius: '4px',
//             }}
//           >
//             <option value="">Select Status</option>
//             <option value="Interested">Interested</option>
//             <option value="Maybe Interested">Maybe Interested</option>
//             <option value="Not Interested">Not Interested</option>
//           </select>
//         </div>
//         <br />
//         <div style={{ display: 'flex', marginBottom: '10px' }}>
//           <label htmlFor="referredby" style={{ fontWeight: 'bold' }}>
//             Referred By*
//           </label>
//           <select
//             id="referredby"
//             name="referredby"
//             value={formData.referredBy}
//             onChange={handleInputChange}
//             required
//             style={{
//               marginLeft: '10px',
//               width: '100%',
//               padding: '5px',
//               border: '1px solid #ccc',
//               borderRadius: '4px',
//             }}
//           >
//             <option value="">Select Referred By</option>
//             <option value="Referral 1">Referral 1</option>
//             <option value="Referral 2">Referral 2</option>
//             <option value="Referral 3">Referral 3</option>
//             <option value="Referral 4">Referral 4</option>
//             <option value="Referral 5">Referral 5</option>
//             <option value="Referral 6">Referral 6</option>
//             <option value="Referral 7">Referral 7</option>
//             <option value="Referral 8">Referral 8</option>
//             <option value="Referral 9">Referral 9</option>
//             <option value="Referral 10">Referral 10</option>
//           </select>
//         </div>
//         <br />
//         <button
//           type="submit"
//           style={{
//             backgroundColor: '#4caf50',
//             color: 'white',
//             border: 'none',
//             padding: '10px 15px',
//             borderRadius: '4px',
//             cursor: 'pointer',
//             alignSelf: 'center',
//           }}
//         >
//           Add
//         </button>
//       </form>
//       <br />
//       <table style={tableStyle}>
//         <thead>
//           <tr>
//             <th style={thStyle}>Name</th>
//             <th style={thStyle}>Email</th>
//             <th style={thStyle}>Contact</th>
//             <th style={thStyle}>Course</th>
//             <th style={thStyle}>Status</th>
//             <th style={thStyle}>Referred By</th>
            
//           </tr>
//         </thead>
//         <tbody>
//           {merchants.map((merchant, index) => (
//             <tr key={merchant.id} style={index % 2 === 0 ? evenRowStyle : {}}>
//               <td style={tdStyle}>{merchant.name}</td>
//               <td style={tdStyle}>{merchant.email}</td>
//               <td style={tdStyle}>{merchant.phone_no}</td>
//               <td style={tdStyle}>{merchant.course}</td>
//               <td style={tdStyle}>{merchant.status}</td>
//               <td style={tdStyle}>{merchant.referredby}</td>
//               <td style={tdStyle}>
//                 <button onClick={() => deleteMerchant(merchant.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Task;




import React, { useState, useEffect } from 'react';
import MyImage from '../components/images/MyImage.jpg';
const initialFormState = {
  name: '',
  email: '',
  phone_no: '',
  course: '',
  status: '',
  referredby: '',
};

function Task() {
  const [formData, setFormData] = useState(initialFormState);
  const [merchants, setMerchants] = useState([]);

  useEffect(() => {
    getMerchants();
  }, []);

  function getMerchants() {
    fetch('http://localhost:3001')
      .then(response => response.json())
      .then(data => {
        setMerchants(data);
      });
  }

  function createMerchant() {
    fetch('http://localhost:3001/merchant_model', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        alert(data);
        setFormData(initialFormState);
        getMerchants();
      });
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    createMerchant();
  }

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  };

  const thStyle = {
    backgroundColor: '#000080',
    fontWeight: 'bold',
    padding: '10px',
    textAlign: 'center',
    border: '1px solid #ccc',
    color: 'white',
  };

  const tdStyle = {
    padding: '10px',
    textAlign: 'center',
    border: '1px solid #ccc',
  };

  const evenRowStyle = {
    backgroundColor: '',
  };
  const main = {
   
    backgroundSize: 'cover',
    backgroundImageRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  
  };

  return (
    <div className='taskbody'>
      <div style={main}>
          <div className='left'>
          <img className="imagess"
          src={MyImage}
           alt="My Image" 
           backgroundSize="cover"
           />
          </div>
          <div className='right'>
            <h1>
              New Lead Page
            </h1>
            <br />
            <form
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '300px',
                margin: 'auto',
              }}
              onSubmit={handleSubmit}
            >
              <br />
              <div style={{ display: 'flex', marginBottom: '10px' }}>
                <label htmlFor="name" style={{ fontWeight: 'bold' }}>
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={{
                    marginLeft: '10px',
                    width: '100%',
                    padding: '5px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                  }}
                />
              </div>
              <br />
              <div style={{ display: 'flex', marginBottom: '10px' }}>
                <label htmlFor="email" style={{ fontWeight: 'bold' }}>
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{
                    marginLeft: '10px',
                    width: '100%',
                    padding: '5px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                  }}
                />
              </div>
              <br />
              <div style={{ display: 'flex', marginBottom: '10px' }}>
                <label htmlFor="phone_no" style={{ fontWeight: 'bold' }}>
                  Contact*
                </label>
                <input
                  type="text"
                  id="phone_no"
                  name="phone_no"
                  value={formData.phone_no}
                  onChange={handleInputChange}
                  required
                  style={{
                    marginLeft: '10px',
                    width: '100%',
                    padding: '5px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                  }}
                />
              </div>
              <br />
              <div style={{ display: 'flex', marginBottom: '10px' }}>
                <label htmlFor="course" style={{ fontWeight: 'bold' }}>
                  Course*
                </label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  required
                  style={{
                    marginLeft: '10px',
                    width: '100%',
                    padding: '5px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                  }}
                >
                  <option value="">Select Course</option>
                  <option value="Hair Dressing">Hair Dressing</option>
                  <option value="Make-up Artist">Make-up Artist</option>
                  <option value="Nail Art">Nail Art</option>
                  <option value="Beautician">Beautician</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <br />
              <div style={{ display: 'flex', marginBottom: '10px' }}>
                <label htmlFor="status" style={{ fontWeight: 'bold' }}>
                  Status*
                </label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  required
                  style={{
                    marginLeft: '10px',
                    width: '100%',
                    padding: '5px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                  }}
                >
                  <option value="">Select Status</option>
                  <option value="Interested">Interested</option>
                  <option value="Maybe Interested">Maybe Interested</option>
                  <option value="Not Interested">Not Interested</option>
                </select>
              </div>
              <br />
              <div style={{ display: 'flex', marginBottom: '10px' }}>
                <label htmlFor="referredby" style={{ fontWeight: 'bold' }}>
                  Referred By*
                </label>
                <select
                  id="referredby"
                  name="referredby"
                  value={formData.referredBy}
                  onChange={handleInputChange}
                  required
                  style={{
                    marginLeft: '10px',
                    width: '100%',
                    padding: '5px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                  }}
                >
                  <option value="">Select Referred By</option>
                  <option value="Referral 1">Referral 1</option>
                  <option value="Referral 2">Referral 2</option>
                  <option value="Referral 3">Referral 3</option>
                  <option value="Referral 4">Referral 4</option>
                  <option value="Referral 5">Referral 5</option>
                  <option value="Referral 6">Referral 6</option>
                  <option value="Referral 7">Referral 7</option>
                  <option value="Referral 8">Referral 8</option>
                  <option value="Referral 9">Referral 9</option>
                  <option value="Referral 10">Referral 10</option>
                </select>
              </div>
              <br />
              <button
                type="submit"
                style={{
                  backgroundColor: '#4caf50',
                  color: 'white',
                  border: 'none',
                  padding: '15px 35px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  alignSelf: 'center',
                  
                }}
              >
                Add
              </button>
            </form>
            <br />
          </div>
        </div>  
        <div className='table'>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Email</th>
                <th style={thStyle}>Contact</th>
                <th style={thStyle}>Course</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>Referred By</th>
              </tr>
            </thead>
            <tbody>
              {merchants.map((merchant, index) => (
                <tr key={merchant.id} style={index % 2 === 0 ? evenRowStyle : {}}>
                  <td style={tdStyle}>{merchant.name}</td>
                  <td style={tdStyle}>{merchant.email}</td>
                  <td style={tdStyle}>{merchant.phone_no}</td>
                  <td style={tdStyle}>{merchant.course}</td>
                  <td style={tdStyle}>{merchant.status}</td>
                  <td style={tdStyle}>{merchant.referredby}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
      
    
  );
}

export default Task;