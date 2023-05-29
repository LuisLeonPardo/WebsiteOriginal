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
  const [thumbsUpClicked, setThumbsUpClicked] = useState(false);
  const [thumbsDownClicked, setThumbsDownClicked] = useState(false);


  const handleHelpfulClick = () => {
    if (!thumbsUpClicked) {
      setHelpful((prevCount) => prevCount + 1);
      setThumbsUpClicked(true);
      if (thumbsDownClicked) {
        setNotHelpful((prevCount) => prevCount - 1);
        setThumbsDownClicked(false);
      }
    }
  };

  const handleNotHelpfulClick = () => {
    if (!thumbsDownClicked) {
      setNotHelpful((prevCount) => prevCount + 1);
      setThumbsDownClicked(true);
      if (thumbsUpClicked) {
        setHelpful((prevCount) => prevCount - 1);
        setThumbsUpClicked(false);
      }
    }
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
        <Link to = "/detail/6" className={styles.question1}><p>What is hosting?</p></Link>
        <Link to ="/detail/7" className={styles.question2}><p>Why my website is slow?</p></Link>
        <Link to="/cards" className={styles.question2}><p>Show all</p></Link>
        </div>

        <div>
          <div className={styles.divRectangle}>
             <h2 className={styles.title}>{question}</h2>
             <div className={styles.content}>
             {content.split('\n').map((paragraph, index) => (
      <p className={styles.p} key={index}>{paragraph}</p>
    ))}    
             </div>
             
              <div className={styles.thumbs} >
            <p>Is this article helpful?</p>
            <div>
              <button onClick={handleHelpfulClick} disabled={thumbsUpClicked}>
                <img src={ThumbUp} alt="Thumbs Up"/>
              </button>
              <span>{helpful}</span>
              <button  onClick={handleNotHelpfulClick} disabled={thumbsDownClicked}>
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
