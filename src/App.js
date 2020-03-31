import React from 'react';
import './App.css';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
        <Contact 
        name = "Kitty Stanley"
        avatar = "https://randomuser.me/api/portraits/women/8.jpg"
        statut
        />

        <Contact
        name = "Nathan Payne"
        avatar = "https://randomuser.me/api/portraits/men/72.jpg"
        />

        <Contact
          name = "Clara Brooks"
          avatar = "https://randomuser.me/api/portraits/women/4.jpg"
          statut
        />

    </div>
  );
}

export default App;
