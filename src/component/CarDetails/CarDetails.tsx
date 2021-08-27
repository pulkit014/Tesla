import React, {useEffect, useState} from 'react';
import './CarDetails.css'
import blackimg from "./black_car.png";
export default function CarDetails(props: {car: any }) {
    const [carVariation, setCarVariation] = useState([]);


    useEffect(() => {
        (() => {
            
                fetch('http://localhost:8000/viewset/CarVariation/')
                .then(response => response.json())
                .then(data => setCarVariation(data));
              
        })();
    });
  return(
    
    <div className="style3">
    <div className="grid-container2">
        <div className="box1"><img className="img1" src={props.car["image"]} alt=""></img></div>
        <div className="box2"><img className="imgblack"src={blackimg} alt=""/></div>
        <div className="box3"></div>
        <div className="box4">{props.car["name"]}</div>
        <div className="box5">{carVariation[0] && carVariation[0]["variation_name"]}</div>
        <div className="box6">{carVariation[1] && carVariation[1]["variation_name"]}</div>
        <div className="box7">Range</div>
        <div className="box8">Peak Power</div>
        <div className="box9">{props.car["range"]}</div>
        <div className="box10">{props.car["peak_power"]}</div>
        <div className="box11">Top Speed</div>                              
        <div className="box12">Start Price</div>
        <div className="box13">{props.car["top_speed"]}</div>
        <div className="box14">{props.car["starts_price"]}</div>  
    </div>
    </div>
  )
}