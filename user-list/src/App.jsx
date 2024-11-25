import { useState } from 'react';
import SearchBar from './components/SearchBar'
import Filters from './components/Filters'
import SortOptions from './components/SortOptions'
import UserList from './components/UserList'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
const initialUsers = [
  { id: 1, name: 'Ashish Bajpai', mobile: 9718277892, email: 'ashish.bajpai@abes.ac.in', age: 28 },
  { id: 2, name: 'Prashant Tomar', mobile: 9718277892,  email: 'prashant.tomar@abes.ac.in', age: 34 },
  { id: 3, name: 'Aatif Jamshed', mobile: 9718277892,  email: 'aatif.jamshed@abes.ac.in', age: 45 },
  { id: 4, name: 'Abhishek Kesharwani', mobile: 9718277892,  email: 'abhishek.kesharwani@abes.ac.in', age: 22 },
  { id: 5, name: 'Amit Sinha', mobile: 9718277892,  email: 'amit.sinha@abes.ac.in', age: 30 },
];
function App() {
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterAge, setFilterAge] = useState('');
  const [sortBy, setSortBy] = useState('name');
   
  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

 
  const handleAgeFilter = (event) => {
    setFilterAge(event.target.value);
  };

 
  const handleSort = (event) => {
    const { value } = event.target;
    setSortBy(value);
  };

  
  const filteredUsers = users
    .filter(user => {
      
      return user.name.toLowerCase().includes(searchTerm.toLowerCase());
    })
    .filter(user => {
      
      if (!filterAge) return true;
      return user.age === parseInt(filterAge);
    })
    .sort((a, b) => {
      
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'age') {
        return a.age - b.age;
      }
      return 0;
    });
  return (
    <div>
      <Header/>
    <div className="App"> <h1>User Directory</h1></div>
          
      <div className='container'>
        <div className='searchbar'><SearchBar searchTerm={searchTerm} handleSearch={handleSearch} /></div>
        <div className='filters'><Filters filterAge={filterAge} handleAgeFilter={handleAgeFilter} /></div>
        <div className='SortOptions'><SortOptions handleSort={handleSort} /></div>
        <div className='userlist'><UserList users={filteredUsers} /></div>            
      
      </div> 
      <Footer/>
    </div>
  )
}
export default App
