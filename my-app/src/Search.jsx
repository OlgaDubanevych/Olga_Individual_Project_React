import React, { useState } from "react";
import './styles.css'
import SearchBox from './components/SearchBar/SearchBox'
import Results from './components/SearchBar/Results'
import ResultItem from "./components/SearchBar/ResultItem";
import Questions from './components/SearchBar/Questions.json'
import QuestionCategory from './components/SearchBar/QuestionCategory'

export default function Search() {
  const [searchInput, setSearchInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearch = (text) => {
    setSearchInput(text);
  }

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  }

  return (
    <main>
      <QuestionCategory questionCategory={selectedCategory} handleChange={handleCategoryChange} />
      
      <Results Results={Questions} searchInput={searchInput} selectedCategory={selectedCategory} />
    </main>
  )
}
