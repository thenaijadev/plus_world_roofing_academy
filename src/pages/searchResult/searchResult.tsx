import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GlobalContext } from "../../GlobalProvider";
import "./searchResult.css";

const SearchResult = () => {
  const [error, setError] = useState(null); // Track errors
  const [isLoading, setIsLoading] = useState(true);
  const [searchResult, setSearchResult] = useState([]);
  const { shouldSearch, setShouldSearch } = useContext(GlobalContext);
  const location = useLocation(); // Get the current location object
  const searchTerm = new URLSearchParams(location.search).get("q"); // Extract search term

  useEffect(() => {
    async function handleSearch() {
      try {
        const response = await axios.post(
          `${process.env.VITE_APP_API_URL}/api/search`,
          {
            searchTerm,
          }
        );

        setSearchResult(response.data.result);
        console.log(response);
        setShouldSearch(false);
      } catch (error: any) {
        console.error("Error:", error.message);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    handleSearch();
  }, [shouldSearch]);

  return (
    <div className="product-list-container">
      {isLoading ? (
        <div className="message">
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
          <p className="loading-message">....searching</p>
        </div>
      ) : error ? (
        <div className="message">
          <p className="error-message">Error: {error}</p>
        </div>
      ) : searchResult.length > 0 ? (
        <div>
          <h3 className="search-header">Search Results</h3>
          <div className="product-list-container"></div>
        </div>
      ) : (
        <div className="message">
          <p className="loading-message">we found nothing</p>
        </div>
      )}
    </div>
  );
};

export default SearchResult;
