import React from "react";

const articoli = [
  'Il Signore degli Anelli',
  'Lo Squalo',
  'Il Piccolo Principe',
  'Orgoglio e Pregiudizio',
  'Harry Potter e la Pietra Filosofale',
];

function App() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          <ul className="list-unstyled">
            {articoli.map((titolo, index) => (
              <li key={index}>{titolo}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
