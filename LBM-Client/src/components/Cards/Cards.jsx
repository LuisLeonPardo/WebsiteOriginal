import React from 'react';
import styles from '../Cards/Cards.module.scss';
import cardsData from '../Cards/cards.json';


const Cards = () => {
    return (
      <div className={styles.container}>
        {cardsData.map((card) => (
          <div className={styles.card} key={card.id}>
            <div  className={styles.icon1}>
              <span>
                <h2 className={styles.title}>{card.title}</h2>
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
    );
  };
  
  export default Cards;
