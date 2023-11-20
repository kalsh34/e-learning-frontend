import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Videos from './videos';
import Detail from './detaill';



const Page = ({ current, dada, didi, setdada }) => {
const [card, setcard] = useState(null);
const [vidoe, setvidoe] = useState(null);
const [vid, setvid] = useState('');
const [curnt, setcurnt] = useState('');
const [instractors, setinstractors] = useState('');
const [id, setId] = useState(useParams().id);
const [vidid, setvidid] = useState();
  
useEffect(() => {
    const fetchCard = async () => {
      const response = await axios.get(`http://192.168.0.130:5000/courses/${id}`);
      const response2 = await axios.get(`http://192.168.0.130:5000/files/video`);
      setvidoe(response2.data.filter(v => v.course._id === id)[0].video);
      setvidid(response2.data.filter(v => v.course._id === id));
      setLoop(response2.data.filter(v => v.course._id === id)[0].duration);
      setvid(response2.data.filter(v => v.course._id === id));
      // setInstractors(response.data);
      console.log('dfghmfgdfdgfgm');
      console.log(response.data);
      console.log(response2.data.filter(v => v.course._id === id)[0].video);
      const data = response.data;
      console.log();
      setcard(data);
    };
    fetchCard();
  }, [id]);

  const [watched, setwatched] = useState([]);
  const [loop, setLoop] = useState();

  const handleVideoSeen = (videoId) => {
    if (!watched.includes(videoId)) {
      setwatched((prevWatched) => [...prevWatched, videoId]);
    }
  };

  const handlecliker = (videoId) => {
    const selectVideo = vid.filter((state) => state._id === videoId);
    setvidoe(selectVideo[0].video);
    setLoop(selectVideo[0].duration);
    handleVideoSeen(videoId);
  };
  const [video, setvideo] = useState();
  const handelseena=async(k)=>{
  setvideo(k)
  const sen={video}
  try {

    const response=await axios.post('http://192.168.0.130:5000/seen/seencreate',sen,{
      headers:{
        
          Authorization:"Bearer " + localStorage.getItem("jwt"),
          "Content-Type":"application/json"
      }
  })
  alert(response.data.msg)

  } catch (error) {
    if(error.response){
      alert(error.response.data.error)
    }
  }
}
  return (
    <div className='tut1'>
      <div className='cont1'>
        <p className='p3'>{card?.courseName}</p>
        <p className='p2'>By {instractors.instractor?.firstName} {instractors.instractor?.lastName}</p>
        <div className='AE111'>
          <h3 className='ea'>Course contents</h3>
        </div>
        <Videos dada={{ ...dada, v1: 'http://192.168.0.130:5000/' + vidoe }} current={current} />
      </div>
      <div className='cont2'>
        <div className='h33'>
          {vid &&
            vid.map((it) => (
              <ul className='vid34' key={it._id}>
                <li className='vid1234' onClick={() => handlecliker(it._id)}>
                  {it.videoName}
                </li>
                <button className="button"
                
  style={{ backgroundColor: watched.includes() ? 'green' : 'white' }}
  onClick={() => handelseena(it._id)}
>
  {watched.includes(it._id) ? 'Watched' : 'Add to Watched'}
</button>
              </ul>
            ))}
        </div>
      </div>
      <Detail instractors={instractors} card={card} loop={loop} />
    </div>
  );
};

export default Page;