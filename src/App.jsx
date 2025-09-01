import React from "react";

const initialArticles = [
  "Il Signore degli Anelli",
  "Lo Squalo",
  "Il Piccolo Principe",
  "Orgoglio e Pregiudizio",
  "Harry Potter e la Pietra Filosofale",
];

function App() {
  return (
    <> 
    <div className="container my-5">
      <div className="row">
        <div className="col-12 gy-3">
          <h1>Lista articoli</h1>
          <div className="col-12">
            <ul className="list-unstyled list-group ms-0">
              {initialArticles.map((article,index) => {
                return (
                  <li className="list-group-item" key={index}>
                    {article}
                  </li>
                );                
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
