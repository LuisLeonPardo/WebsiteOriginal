import React from 'react';
import styles from '../Cards/Cards.module.scss';
import cardsData from '../Cards/cards.json';
import NavBar from '../Landing/NavBar/NavBar';
import Footer from '../Landing/Footer/Footer';
import SearchBar from '../SearchBar/SearchBar';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Cards = () => {

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
    <div className={styles.container}>      
        {cardsData.map((card) => (
          <div className={styles.card} key={card.id}>
            <div  className={styles.icon1}>
              <span>
                <h2 className={styles.title}>{card.title}:</h2>
              </span>     
            </div>
            <ul className={styles.icon}>
              {card.questions.map((question) => (
                <li className={styles.li} key={question.id}>
                  <a href={`/detail/${question.id}`}>{question.question}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <footer>
        <Footer />
      </footer>
       </div>
    );
  };
  
  export default Cards;
