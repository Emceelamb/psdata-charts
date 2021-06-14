import  React, {useState} from 'react'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="flex items-center justify-center pa4 bg-lightest-blue navy">
        <svg
          className="w1"
          data-icon="info"
          viewBox="0 0 32 32"
          style={{fill: "currentColor"}}
        >
          <title>
            UN Peace and Security
          </title>
          <path d="M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6" />
        </svg>
        <span className="1h-title ml3 helvetica">
          Demo
        </span>
      </div>
    </div>

  );
}

export default App;
