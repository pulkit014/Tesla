/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */

import React, {useEffect, useState} from 'react';
import CarDetails from '../CarDetails/CarDetails';
import './Cars.css'

export default function Cars() {
    const [carsData, setCarsData] = useState([]);
    const [carSelected, setCarSelected] = useState();

      useEffect(() => {
          (() => {
              
                  fetch('http://localhost:8000/viewset/Cars/')
                  .then(response => response.json())
                  .then(data => setCarsData(data));
                
          })();
      });
    
    return (
        <div>
            {carSelected &&
            (
                <CarDetails
                    car={carSelected}
                />
            )}
            {!carSelected && (<>
                <ul>
                    {carsData.map((item) => (
                        <>
                            <div className="style2">
                                <div className="grid-container" onClick={()=>setCarSelected(item)}>
                                    <div className="item1"><img className="img1" src={item["image"]}></img></div>
                                    <div className="item2">{item["name"]}</div>
                                    <div className="item3">{item["range"]}</div>
                                    <div className="item4">{item["top_speed"]}</div>
                                    <div className="item5">{item["time_to_60"]}</div>
                                    <div className="item6">{item["peak_power"]}</div>
                                    <div className="item7">{item["starts_price"]}</div>
                                    <div className="item8">0-60</div>
                                    <div className="item9">Top Speed</div>                              
                                    <div className="item10">Peak Power</div>
                                    <div className="item11">$tarts</div>
                                </div>
                            </div>
                        </>
                    ))}
                </ul>
            </>)}
        </div>
    )
}