import { padding } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


// ... (other styles remain unchanged)



 const containerStyle = {
  marginTop: '5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start', // Align cards to the top of the container
  flexWrap: 'wrap', // Wrap the cards when they exceed container width
  width: '100vw',
  height: '100vh',
  // backgroundColor: '#f4f4f4',
  overflowY: 'auto',
};

const cardStyle = {
  display: 'flex',
  flexDirection: 'column', 
  alignItems: 'center',
  width: 'calc(25% - 10px)', // Divided by 4 columns with margin included
  padding: '100px', // Adjusted padding for better appearance
  border: '1px solid #ccc',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  backgroundColor: 'white',
  margin: '10px',
  marginTop: '5rem',

  
};

const imageStyle = {
  width: '15%',
  borderRadius: '100%',
};

const titleStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  marginTop: '-4rem',
  textAlign: 'center',
}; 
const buttonstyle = {
  marginTop: '3.5rem', 
  width: '3rem',
  padding: '7px',
  backgroundColor: 'white',
}
const Watched = () => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://192.168.0.130:5000/seen/seenget', {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("jwt"),
            "Content-Type": "application/json"
          },
        });

        setCourse(response.data);
        console.log('Course:', course);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    } 
    fetchData();
  }, []);
const handeledelt=async(id)=>{
  try {
    const response=await axios.delete(`http://192.168.0.130:5000/seen/delete/${id}`)
    if(!response){
      alert("Something went wrong")
    }
    alert(response.data.msg)
    window.location.reload();
  } catch (error) {
    console.log(error)
  }
}
  return ( 
    <div style={containerStyle}>
      {course.map((items, index) => (
        <div style={cardStyle} className="v1" key={index}>
          {items.video && items.video.videoName && (
            <p style={titleStyle} className='p'>{items.video.videoName}</p>
          

          )}
           {items && items._id && (
          <button style={buttonstyle} onClick={()=>handeledelt(items._id)}>delete</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Watched;

