import './App.css';
import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
//Pages
import Dashboard from './pages/Dashboard';
import CreateBook from './pages/CreateBook';
import EditBook from './pages/EditBook.js';
import AllBooks from './pages/AllBooks';
import CreateMember from './pages/CreateMember';
import EditMember from './pages/EditMember';
import AllMembers from './pages/AllMembers';
import AllRecommendations from './pages/AllRecommendations';
import Help from './pages/Help'
//Component
import Navigation from './components/Navigation';



function App() {
  const [bookToEdit, setBookToEdit] = useState(); 
  const [memberToEdit, setMemberToEdit] = useState(); 

  return (
    <div className="App">
      <Router>
        <Navigation/>
        <header>
        <h1>The Happy Reader</h1>
        <p>Today a reader, tomorrow a leader.</p>
        </header>
        <div className="App-header">
          <Route path="/" exact>
            <Dashboard />
          </Route>
          {/* Books Section */}
          <Route path="/books">
            <AllBooks setBookToEdit={setBookToEdit} />
          </Route>
          <Route path="/create-book">
            <CreateBook />
          </Route>
          <Route path="/edit-book">
            <EditBook bookToEdit={bookToEdit} />
          </Route>
          {/* Members Section */}
          <Route path="/members">
            <AllMembers setMemberToEdit={setMemberToEdit} />
          </Route>
          <Route path="/create-member">
            <CreateMember />
          </Route>
          <Route path="/edit-member">
            <EditMember memberToEdit={memberToEdit} />
          </Route>
          {/* Recommendations Section */}
          <Route path="/recommendations">
            <AllRecommendations />
          </Route>

          <Route path="/help">
            <Help/>
          </Route>
        </div>
      </Router>
      <footer><p>© 2023 copyright</p></footer> 
    </div>
  );
}

export default App;
