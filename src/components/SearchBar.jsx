import PropTypes from "prop-types";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onLocationChange }) => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onLocationChange(userInput);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Insert location..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button type="submit">
        <FaSearch />
      </button>
    </form>
  );
};

SearchBar.propTypes = {
  onLocationChange: PropTypes.func.isRequired,
};

export default SearchBar;
