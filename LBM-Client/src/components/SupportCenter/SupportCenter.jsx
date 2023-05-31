import React from "react";
import NavBar from "../Landing/NavBar/NavBar";
import Footer from "../Landing/Footer/Footer";
import styles from "./SupportCenter.module.scss";
import {Link} from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";

export default function SupportCenter() {
  const [filteredCards, setFilteredCards] = useState([]);

  return (
    <div className={styles.supcontainer}>
      <nav>
        <NavBar />
      </nav>
      <div className={styles.content}>
        <h1 className={styles.h1}>Support Center</h1>
        <span>
          <h3 className={styles.h3}>
            Browse through our frequently asked questions, tutorials, and other self-help resources to find the answers you need.
          </h3>
        </span>
        <span>
          <SearchBar setFilteredCards={setFilteredCards} />
        </span>
        <div className={styles.divPopular}>
          <h3 className={styles.popular}>POPULAR:</h3>
          <Link to="/detail/6" className={styles.question1}>
            <p>What is hosting?</p>
          </Link>
          <Link to="/detail/7" className={styles.question2}>
            <p>Why is my website slow?</p>
          </Link>
          <Link to="/cards" className={styles.question2}>
            <p>Show all</p>
          </Link>
        </div>
       
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
