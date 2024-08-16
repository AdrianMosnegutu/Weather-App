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
    <form className="flex h-12 items-center" onSubmit={handleSubmit}>
      <input
        className="h-full w-full rounded-l-full bg-white px-5 shadow-inner"
        type="text"
        placeholder="Insert location..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button
        className="bg-accent h-full rounded-r-full px-6 text-white transition-all ease-linear hover:bg-opacity-75 active:bg-opacity-50"
        type="submit"
      >
        <FaSearch size={20} />
      </button>
    </form>
  );
};

SearchBar.propTypes = {
  onLocationChange: PropTypes.func.isRequired,
};

export default SearchBar;
