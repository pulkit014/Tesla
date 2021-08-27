/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable no-labels */
/* eslint-disable no-unused-labels */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import history from './../history';
import { Component } from "react";
import first from "./home_image.png";
import "./Home.css";


export default function Home() {
  return (
        <div className="container">
          <img src={first}/>
          <button className="btn" onClick={() => history.push('/cars')}>All Cars</button>
        </div>
    );
}