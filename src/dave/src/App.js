import './App.css';
// import ReactCardSlider from './components/ReactCardSlider';
import ReactCardSlider from './component/ReactCardSlider';
import Daveheader from'./component/davehader';
function Appp() {
 
  const sliderClick = (slider)=>{
    alert("Our best teacher");
  }


  const slides = [
    {image:"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",title:"This is a title",description:"This is a description",clickEvent:sliderClick},
    {image:"https://picsum.photos/600/500",title:"This is a second title",description:"This is a second description",clickEvent:sliderClick},
    {image:"https://picsum.photos/700/600",title:"This is a third title",description:"This is a third description",clickEvent:sliderClick},
    {image:"https://picsum.photos/500/400",title:"This is a fourth title",description:"This is a fourth description",clickEvent:sliderClick},
    {image:"https://picsum.photos/200/300",title:"This is a fifth title",description:"This is a fifth description",clickEvent:sliderClick},
    {image:"https://picsum.photos/800/700",title:"This is a sixth title",description:"This is a sixth description",clickEvent:sliderClick},
    {image:"https://picsum.photos/300/400",title:"This is a seventh title",description:"This is a seventh description",clickEvent:sliderClick},
    {image:"https://picsum.photos/100/200",title:"This is a sixth title",description:"This is a sixth description",clickEvent:sliderClick},
    {image:"https://picsum.photos/300/400",title:"This is a seventh title",description:"This is a seventh description",clickEvent:sliderClick},
    {image:"https://picsum.photos/100/200",title:"This is a sixth title",description:"This is a sixth description",clickEvent:sliderClick},
    {image:"https://picsum.photos/400/500",title:"This is a seventh title",description:"This is a seventh description",clickEvent:sliderClick},
  ]
  return (
    <div className='hader'>
     
    
    <div id="body">
    
      <ReactCardSlider slides={slides}/>
     
    </div>
    </div>
    
  );
}

export default Appp;