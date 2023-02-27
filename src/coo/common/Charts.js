import React from 'react';
import { Col } from 'antd';
import { Line } from 'react-chartjs-2'
import{
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  Tooltip,
  LinearScale,
  PointElement,
  Filler
} from 'chart.js';
ChartJS.register(LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,Filler,
  PointElement,)

const Charts = () => {
  const data={
    title:'kdskdn',
    labels:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    datasets:[
      {
        data:[0,2,5,7,1,4,7,10,25],
    
        borderColor:'#07B1C5',
        borderfontSize:6,
        backgroundColor: '#07B1C5',
        opacity: 0.2,
        tension:0.4,
        fill:true,
        pointStyle:'star',
        pointBorderColor:'blue',
        
      }
    ]
  };
 
    return (
      <div style={{width:1200,height:390,backgroundColor:' #E6F0F0',marginTop:150,marginLeft:30,borderRadius:6,}}>
        <Col xs={15} sm={16} md={12} lg={8} xl={13}style={{marginLeft:30,width:1000}}> 
        <h2 style={{color:'black',margin:15,fontSize:20}}>Monthly Progress</h2>
        <h5 style={{color:'black',fontSize:13}}>This is the latest improvment </h5>
        <Line data={data } style={{width:1000}} /></Col>
        </div>
        
    );
}

export default Charts;