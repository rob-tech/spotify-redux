import React from "react";
import { Container } from "reactstrap";
import DisplayMovies from "./DisplayMovies"
import Album from "./Album"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import image from "../logo/Spotify_Logo.png"
import next from "../PlayerButtons/Next.png"
import play from "../PlayerButtons/Play.png"
import previous from "../PlayerButtons/Previous.png"
import repeat from "../PlayerButtons/Repeat.png"
import shuffle from "../PlayerButtons/Shuffle.png"
//SSimport logo from './logo/';
//import Shuffel from "../playerButtons/Next.png"

class MainPage extends React.Component {
  render() {
    return (
        <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 fixed-left " style={{background:"black"}} >
              <div className="mt-4">
                  <img  src={image}
                  alt="s"
                  width="131px"
                  height="40px"/>
              </div>
            <div
              className="nav-link flex-column  mt-4  "
              id="v-pills-tab"
              aria-orientation="vertical" >
              <a className="nav-item nav-link" href="/">Home</a>
              <a className="nav-item nav-link" href="#">Search</a>
              <a className="nav-item nav-link" href="#">Your Library</a>
              <a className="nav-item nav-link" href="#">Your Albums</a>
            </div>
            
            <div className="nav-btn ">
              <button className="btn signup-Btn" type="button" style={{marginTop : "100px",marginBottom:"20px"}} >
                Sign Up
              </button>
              <button className="btn login-Btn" type="button" style={{marginBottom : "20px"}} >
                Login
              </button>
              <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
            </div>
            
          </div>
          <div className="container" >
          <div className="row centering" id="mainShow">
            <div className="col-10 mainPage">
                <div className="row">
                <div className="mainLinks mt-3">
                <a href="#">TRENDING</a>
                <a href="#"> PODCAST</a>
                <a href="#">MOODS AND GENRES</a>
                <a href="#">NEW RELEASES</a>
                <a href="#">DISCOVER</a>
              </div>
           
                </div>
                <div className = "mt-5">
                {/* <Route path="/playlist" exact  component={Playlist}/> */}
                <Route  path="/" exact  component={DisplayMovies}/>
                <Route  path="/Album/:id" exact component={Album}/>
                </div>
              
               </div>
          </div>
                  </div>
        </div>
      </div>
      <div className="container-fluid  " style={{height:"100px",background:"black"}} >
         
          <div className="row justify-content-center  py-3">
          <div class="row">
                <div class="col-12 playerControls text-center">
                    <a href="#">
                        <img src={previous} alt="shuffle" style={{width: "20px", paddingRight: 100 }}/>
                    </a>

                    <a href="#">
                        <img src={play} alt="play" style={{width: "20px"}}/>
                    </a>
                    <a href="#">
                        <img src={next} alt="shuffle" style={{width: "20px"}}/>
                    </a>
                    <a href="#">
                        <img src={shuffle} alt="shuffle" style={{width: "20px"}}/>
                    </a>
                    <a href="#">
                        <img src={repeat} alt="shuffle" style={{width: "20px"}}/>
                    </a>
                </div>
         
          </div>
          </div>
      </div>
      </>
    );
  }
}

export default MainPage;
