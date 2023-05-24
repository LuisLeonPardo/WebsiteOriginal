import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import styles from './SearchBar.module.scss';
import cardsData from '../Cards/cards.json';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Obtener sugerencias basadas en el valor de búsqueda actual
  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : cardsData.filter((card) =>
          card.title.toLowerCase().includes(inputValue)
        );
  };

  // Renderizar cada sugerencia
  const renderSuggestion = (suggestion) => (
    <div className={styles.card}>
      <h2>{suggestion.title}</h2>
      <ul>
        {suggestion.questions.map((question) => (
          <li key={question.id}>
            <a href={`/detail/${question.id}`}>{question.question}</a>
          </li>
        ))}
      </ul>
    </div>
  );

  // Controlar cambios en el valor de búsqueda
  const onChange = (event, { newValue }) => {
    setSearchTerm(newValue);
  };

  // Actualizar las sugerencias al escribir en el campo de búsqueda
  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  // Limpiar las sugerencias al borrar el contenido del campo de búsqueda
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  // Realizar la búsqueda al hacer clic en el botón de búsqueda
  const handleSearch = () => {
    const filteredCards = cardsData.filter((card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSuggestions(filteredCards);
  };

  // Configuración de Autosuggest
  const inputProps = {
    placeholder: 'Search...',
    value: searchTerm,
    onChange: onChange,
  };

  return (
    <div>
      <div className={styles.searchContainer}>
        <button onClick={handleSearch}>Search</button>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={(suggestion) => suggestion.title}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      
      </div>
      
    </div>
  );
};

export default SearchBar;

