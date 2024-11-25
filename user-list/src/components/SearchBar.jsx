const SearchBar = ({ searchTerm, handleSearch }) => (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
  export default SearchBar