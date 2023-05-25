import React from "react";
import NavBar from "../Landing/NavBar/NavBar";
import Footer from "../Landing/Footer/Footer";
import styles from "./DetailSupport.module.scss";
import { useParams } from "react-router-dom";
import { useState } from "react";
import questionsData from "../Cards/cards.json"; // import Card.JSON with questions & answ.
import ThumbUp from '../../assets/ThumbUp.png';
import ThumbDown from '../../assets/ThumbDown.png';
import {Link} from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar'




export default function DetailSupport() {
  const { id } = useParams(); // get the  question ID  from the parameters of the URL.
   

  //Search for the question in "card.json".
  let question, content;
  for (const category of questionsData) {
    const foundQuestion = category.questions.find((q) => q.id === Number(id));
    if (foundQuestion) {
      question = foundQuestion.question;
      content = foundQuestion.content;
      break;
    }
  }

  const [helpful, setHelpful] = useState(0);
  const [notHelpful, setNotHelpful] = useState(0);

  const handleHelpfulClick = () => {
    setHelpful(helpful + 1);
  };

  const handleNotHelpfulClick = () => {
    setNotHelpful(notHelpful + 1);
  };

 


  return (
    <div className={styles.detailContainer}>
      <nav>
        <NavBar />
      </nav>
      <div>
        <h1 className={styles.h1}>Support Center</h1>
        <span>
          <h3 className={styles.h2}>
            Browse through our frequently asked questions, tutorials, and other self-help resources to find the answers you need.
          </h3>
        </span>
        <SearchBar></SearchBar>
       <div className={styles.divPopular}>
        <h2 className={styles.popular}>POPULAR:</h2>
        <Link to = "/detail/1" className={styles.question1}><p>What is hosting?</p></Link>
        <Link to ="/detail/2" className={styles.question2}><p>Why my website is slow?</p></Link>
        </div>

        <div>
          <div className={styles.divRectangle}>
             <h2 className={styles.h1}>{question}</h2>
              <p className={styles.h3}>{content}</p>
              <div className={styles.thumbs} >
            <p>Is this article helpful?</p>
            <div>
              <button onClick={handleHelpfulClick}>
                <img src={ThumbUp} alt="Thumbs Up"/>
              </button>
              <span>{helpful}</span>
              <button  onClick={handleNotHelpfulClick}>
                <img src={ThumbDown} alt="Thumbs Down" />
              </button> 
              <span>{notHelpful}</span>
            </div>
            </div>
          </div>     
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
