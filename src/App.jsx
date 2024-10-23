import React from 'react';
import Header from './components/Header/Header';
import Button from '@mui/material/Button';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="app-main">
        <div className="content">
          <h1>Hello, React with Vite and MUI!</h1>
          <p>Digitális aláíró szolgáltatás a Comnicától</p>
          <h2>Üdvözlöm a Comnica Signature-ben!</h2>
          <p>
            A következőkben végigvezetjük dokumentumai elfogadásán és aláírásán.
            A folyamat több percet is igénybe vehet, ezért kérjük, csak akkor
            kezdje el, ha készen áll rá.
          </p>
          <Button
            variant="contained"
            onClick={() => console.log('Button clicked!')}
          >
            Kezdjük!
          </Button>
        </div>
      </main>
    </div>
  );
}

export default App;
