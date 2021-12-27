// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Enable hot-reloading
if (module.hot) {
  module.hot.accept();
}

// Create a react component
const App = () => {
  const buttonText = { text: 'click me' };

  return (
    <div>
      <label className="label" for="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText.text}</button>
    </div>
  );
};

// Take the react compoent and show it on the scren
ReactDOM.render(<App />, document.querySelector('#root'));
