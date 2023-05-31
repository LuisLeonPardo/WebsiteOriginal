import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import styles from './SearchBar.module.scss';
import Cards from '../Cards/cards.json'



const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
 

  // gets suggestions based on the value of the input
  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : Cards.filter((card) =>
          card.title.toLowerCase().includes(inputValue)
        );
  };

  // renders the main topics(title) of each card of questions
  const renderSuggestion = (suggestion) => (
    <div>
      <h2 className={styles.h2}>{suggestion.title}</h2>
    </div>   
  );

  // Controls changes in the search value
  const onChange = (event, { newValue }) => {
    setSearchTerm(newValue);
  };

  // update suggestions writen in the input
  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  // Clean suggestions when user delete the input
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };
  const [filteredCards, setFilteredCards] = useState([]);
  // Do the serach when the button is clicked
  const handleSearch = () => {
    const filteredCards = Cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(filteredCards); 
  setFilteredCards(filteredCards);
  };

  //  Autosuggest configuration
  const inputProps = {
    placeholder: '🔍 Search',
    value: searchTerm,
    onChange: onChange,
    style: {
      width: '500px', // Cambia el ancho según tus necesidades
      height: '40px', // Cambia el alto según tus necesidades
      border: 'none', // Elimina el borde
      outline: 'none', // Elimina el contorno cuando se enfoca
    }
  };

  
  const FilteredCards = () => {
    return (
      <div className={styles.container}>
        {filteredCards.map((card) => (
          <div key={card.id}className={styles.card} >
            <div className={styles.icon1}> 
            <h2 className={styles.title}>{card.title}
            </h2></div>
            <div className={styles.icon}>
            <ul className={styles.icon}>
              {card.questions.map((question) => (
                <li className={styles.li} key={question.id}>
                  <a href={`/detail/${question.id}`}>{question.question}</a>
                </li>
              ))}
            </ul>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.input}> 
           <Autosuggest 
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={(suggestion) => suggestion.title}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}     
        /> 
      </div>
      <div>
        <button className={styles.button} onClick={handleSearch}>Search</button>
      </div>
      <div className={styles.container}>
          {filteredCards.length > 0 ? <FilteredCards /> : null }
     
      </div>
    
    </div>
  );
};

export default SearchBar;

