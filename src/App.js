// App.js
import React from 'react';
import UserProfile from './UserProfile';  // Import UserProfile component
import './UserProfile.css';               // Import the CSS file

const App = () => {
  return (
    <div className="app-container">
      <UserProfile
        name="Sam"
        age={25}
        location="1 Willow Lane"
        image="https://stardewvalleywiki.com/mediawiki/images/9/94/Sam.png"  // Replace with actual image URL
      />
      <UserProfile
        name="Abigail"
        age={22}
        location="Pierre's General Store"
        image="https://stardewvalleywiki.com/mediawiki/images/8/88/Abigail.png"  // Replace with actual image URL
      />
      <UserProfile
        name="Sebastian"
        age={25}
        location="24 Mountain Road"
        image="https://stardewvalleywiki.com/mediawiki/images/a/a8/Sebastian.png"  // Replace with actual image URL
      />
    </div>
  );
};

export default App;
