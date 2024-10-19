import React from 'react';
import styles from './SearchResults.module.scss';

interface SearchResult {
  trackId: number;
  trackName: string;
  artistName: string;
  artworkUrl100: string;
}

interface SearchResultsProps {
  results: SearchResult[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  return (
    <div className={styles.searchResults}>
      {results.map((result) => (
        <div key={result.trackId} className={styles.resultItem}>
          <img src={result.artworkUrl100} alt={result.trackName} />
          <div>
            <h3>{result.trackName}</h3>
            <p>{result.artistName}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;