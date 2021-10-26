import { CarouselData } from '../data/CarouselData';
import Carousel from "react-elastic-carousel"
import Card from "./Card"


function Car () {

const breakPoints = [
  {width: 1, itemsToShow: 1},
  {width: 500, itemsToShow: 2},
  {width: 768, itemsToShow: 3},
]


  return (

    <div className="carouselSlider darkestColor carouselImages">
      <Carousel 
        breakPoints={breakPoints} 
        enableAutoPlay 
        autoPlaySpeed={8000}
        
      >
        <Card number={<img src={CarouselData[0].image}/>} />
        <Card number={<img src={CarouselData[1].image}/>} />
        <Card number={<img src={CarouselData[2].image}/>} />
        <Card number={<img src={CarouselData[3].image}/>} />   
        <Card number={<img src={CarouselData[4].image}/>} />      
        <Card number={<img src={CarouselData[5].image}/>} />  
        <Card number={<img src={CarouselData[6].image}/>} />  
        <Card number={<img src={CarouselData[7].image}/>} />  
        <Card number={<img src={CarouselData[8].image}/>} />  
        <Card number={<img src={CarouselData[9].image}/>} />  
        <Card number={<img src={CarouselData[10].image}/>} />
        <Card number={<img src={CarouselData[10].image}/>} />  
      </Carousel>
    </div>
  )
}

export default Car;