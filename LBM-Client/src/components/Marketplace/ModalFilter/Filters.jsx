import React from "react";
import "./Filters.scss";
import Close from "./assets/Close.svg";
import Graphic from "./assets/Graphic.svg";
import {BiBuildingHouse} from 'react-icons/bi'
import {AiOutlineHome} from 'react-icons/ai'
import {RiHomeWifiLine, RiHotelLine} from 'react-icons/ri'

function Filters({ handleClose }) {
  return (
    <div className="filters-container">
      <div className="filters-modal-top">
        <div
          onClick={handleClose}
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            height: "100%",
          }}
        >
          <img src={Close} />
        </div>
        <h1>Filters</h1>
      </div>
      <div className="filters-modal-content">
        <div className="filters-modal-content-first">
          <h1>Price range</h1>
          <h2>The average price per property is $800,000+</h2>
          <div className="filters-modal-content-graphic">
            <img src={Graphic} />
            <div className="graphic-content">
              <div className="graphic-text">
                <h3>Minimal price</h3>
                <h4>$ 10</h4>
              </div>
              <span>-</span>
              <div className="graphic-text">
                <h3>Maximum price</h3>
                <h4>$ 450</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="filters-modal-content-second">
          <div className="filters-modal-content-second-text">
            <h3>Country</h3>
            <div className="content-select">
              <select>
                <option hidden value="">
                  Placeholder text
                </option>
                <option>Dubai</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Germany</option>
              </select>
            </div>
          </div>
          <div className="filters-modal-content-second-text">
            <h3>Country</h3>
            <div className="content-select">
              <select>
                <option hidden value="">
                  Placeholder text
                </option>
                <option>Abu Dhabi</option>
                <option>Al Ain</option>
                <option>London</option>
                <option>New York</option>
                <option>Berlin</option>
              </select>
            </div>
          </div>
        </div>
        <div className="filters-modal-content-third">
          <h3>Kind of property</h3>
          <div className="filter-cards-container">
            <div className="filter-cards">
              <AiOutlineHome size={32} />
              <h4>Home</h4>
            </div>
            <div className="filter-cards">
              <BiBuildingHouse size={32} />
              <h4>Apartment</h4>
            </div>
            <div className="filter-cards">
              <RiHomeWifiLine size={32} />
              <h4>Guesthouse</h4>
            </div>
            <div className="filter-cards">
              <RiHotelLine size={32} />
              <h4>Hotel</h4>
            </div>
          </div>
        </div>
        <div className="filters-modal-content-fourth">
          <h3>Rooms and beds</h3>
          <div className="container-text">
            <h4>Bedrooms</h4>
            <div className="container-text-items">
              <h5>Any</h5>
              <h6>1</h6>
              <h6>2</h6>
              <h6>3</h6>
              <h6>4</h6>
              <h6>5</h6>
              <h6>6</h6>
              <h6>7</h6>
            </div>
          </div>
          <div className="container-text">
            <h4>Beds</h4>
            <div className="container-text-items">
              <h5>Any</h5>
              <h6>1</h6>
              <h6>2</h6>
              <h6>3</h6>
              <h6>4</h6>
              <h6>5</h6>
              <h6>6</h6>
              <h6>7</h6>
            </div>
          </div>
          <div className="container-text">
            <h4>Bathrooms</h4>
            <div className="container-text-items">
              <h5>Any</h5>
              <h6>1</h6>
              <h6>2</h6>
              <h6>3</h6>
              <h6>4</h6>
              <h6>5</h6>
              <h6>6</h6>
              <h6>7</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="filters-modal-bot">
        <h1 onClick={handleClose}>Remove all</h1>
        <h2 onClick={handleClose}>Show 681 properties</h2>
      </div>
    </div>
  );
}

export default Filters;

{
  /* <div
        onClick={handleClose}
        style={{ display: "flex", alignItems: "center", cursor: 'pointer' }}
      >
        <BsX className="close" />
      </div> */
}
