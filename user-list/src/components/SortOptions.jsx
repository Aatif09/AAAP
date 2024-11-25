const SortOptions = ({ handleSort }) => (
    <div>
      <label>
        Sort by:
        <select onChange={handleSort}>
          <option value="name">Name</option>
          <option value="age">Age</option>
        </select>
      </label>
    </div>
  );

  export default SortOptions