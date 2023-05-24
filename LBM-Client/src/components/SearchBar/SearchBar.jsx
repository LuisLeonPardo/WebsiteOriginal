import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import styles from './SearchBar.module.scss';
import Cards from '../Cards/cards.json'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Obtener sugerencias basadas en el valor de búsqueda actual
  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : Cards.filter((card) =>
          card.title.toLowerCase().includes(inputValue)
        );
  };

  // Renderizar cada sugerencia
  const renderSuggestion = (suggestion) => (
    <div>
      <div>
      <h2>{suggestion.title}</h2>
      <p>
        {suggestion.questions.map((question) => (
          <div key={question.id}>
            <a href={`/detail/${question.id}`}>{question.question}</a>
          </div>
        ))}
      </p>
    </div>
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

  // Do the serach when the button is clicked
  const handleSearch = () => {
      const filteredCards = Cards.filter((card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSuggestions(filteredCards);
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
      <button className={styles.button} onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;

