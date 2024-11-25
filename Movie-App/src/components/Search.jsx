import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Search({ onSearch }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query); // Trigger the search
      navigate("/results"); // Navigate to the results page
    } else {
      alert("Please enter a search term.");
    }
  };

  return (
    <div className="search-bar">
      <input
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Search;
