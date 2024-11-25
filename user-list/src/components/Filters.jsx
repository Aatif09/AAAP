const Filters = ({ filterAge, handleAgeFilter }) => (
    <div>
      <label>
        Filter by Age:
        <select value={filterAge} onChange={handleAgeFilter}>
          <option value="">All Ages</option>
          <option value="22">22</option>
          <option value="28">28</option>
          <option value="30">30</option>
          <option value="34">34</option>
          <option value="45">45</option>
        </select>
      </label>
    </div>
  );

  export default Filters