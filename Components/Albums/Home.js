import React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import "./Home.css";
const Albums = () => {
  return (
    <div>
      <div className="Heading_Generics">
        <span>
          <h1>THE GENERICS</h1>
          <h2>Get our Latest Album</h2>

          <FaRegCirclePlay
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "24px",
              width: "15%",
              height: "10%",
              marginLeft: "300px",
           
              backgroundColor:"1px solid skyblue",
              marginTop: "-50px",
            }}
          />
        </span>
      </div>

      <div className="All_tables_generics">
        <h1>Tours</h1>

        <div className="data_details">
          <div className="Generic_Data">
            <span className="Album_data">JUL16</span>
            <span className="Album_min">DETROIT, MI</span>
            <span className="Album_Ener">DTE ENERGY MUSIC THEATRE</span>
            <button className="Album_buttton">BUY TICKETS</button>
          </div>
          <div className="Generic_Data">
            <span className="Album_data">JUL19</span>
            <span className="Album_min">TORONTO,ON</span>
            <span className="Album_Ener">BUDWEISER STAGE</span>
            <button className="Album_buttton">BUY TICKETS</button>
          </div>
          <div className="Generic_Data">
            <span className="Album_data">JUL 22</span>
            <span className="Album_min">BRISTOW, VA</span>
            <span className="Album_Ener">JIGGY LUBE LIVE</span>
            <button className="Album_buttton">BUY TICKETS</button>
          </div>
          <div className="Generic_Data">
            <span className="Album_data">JUL 29</span>
            <span className="Album_min">PHOENIX, AZ</span>
            <span className="Album_Ener">AK-CHIN PAVILION</span>
            <button className="Album_buttton">BUY TICKETS</button>
          </div>
          <div className="Generic_Data">
            <span className="Album_data">AUG 2</span>
            <span className="Album_min">LAS VEGAS, NV</span>
            <span className="Album_Ener">T-MOBILE ARENA</span>
            <button className="Album_buttton">BUY TICKETS</button>
          </div>
          <div className="Generic_Data">
            <span className="Album_data">AUG 7</span>
            <span className="Album_min">CONCORD, CA</span>
            <span className="Album_Ener">CONCORD PAVILION</span>
            <button className="Album_buttton" >BUY TICKETS</button>
          </div>
        </div>
      </div>

      <div>
        <div className="The_Generic">
          <h1>The Generics</h1>
        </div>
      </div>
    </div>
  );
};
export default Albums;
