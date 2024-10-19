'use client'
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchResults from '../components/SearchResults/SearchResults';
import styles from './page.module.scss';

interface SearchResult {
  trackId: number;
  trackName: string;
  artistName: string;
  artworkUrl100: string;
}

const Home: React.FC = () => {
  const [results, setResults] = useState<SearchResult[]>([]);

  const handleSearch = async (query: string) => {
    const response = await fetch(`https://itunes.apple.com/search?term=${query}&limit=10`);
    const data = await response.json();
    setResults(data.results);
  };

  return (
    <div className={styles.container}>
      <h1>Media Search</h1>
      <SearchBar onSearch={handleSearch} />
      <SearchResults results={results} />
    </div>
  );
};

export default Home;