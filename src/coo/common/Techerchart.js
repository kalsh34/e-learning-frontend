import React from 'react';
import { Col } from 'antd';
import { Line } from 'react-chartjs-2'
import { RiArrowDropDownLine} from "react-icons/ri";
import { Button} from 'antd';
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

const TeCharts = () => {
  const data={
    title:'kdskdn',
    labels:['Oct20','Nov20','Dec20','Jan21','Feb21','Mar21'],
    datasets:[
      {
        data:[0,486,97,680,194,486,291,900],
    
        borderColor:'#07B1C5',
        borderfontSize:6,
       
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
        <Col xs={15} sm={16} md={12} lg={8} xl={13}> 
        <h2 style={{color:'black',margin:15,fontSize:20}}>Get top insights about your performance</h2>
        <Button style={{
          
          backgroundColor:'#E6F0F0',
          borderRadius:5,
          float:'right',
          marginRight:20
          
        
        }}>Last 12 months <RiArrowDropDownLine/></Button>
        
            
        <Line data={data } style={{marginLeft:30,marginTop:-100}} /></Col>
        </div>
        
    );
}

export default TeCharts;