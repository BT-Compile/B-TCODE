import React from 'react';
import './App.css';

function App() {
  
  const hover = (elementId) => {
    // Handle hover event
  };

  const offhover = (elementId) => {
    // Handle mouseout event
  };

  const handleClick = () => {
    // Handle click event
    window.location.href = 'index.html';
  };

  return (
    <div>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>BTCompile.io | Code</title>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto+Condensed&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="App.css" />
      </head>
      <div className='wrapper'>
        <div className='banner'>
          <div className='bannertext'>
            <h1>Welcome</h1>
          </div>
        </div>

        <div className='containerBanner'>
        <div id="code" class="square" onmouseover="hover('code');" onmouseout="offhover('code');" onclick="(window.location.href='index.html')">
                <p id="pagetitle">Code</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
