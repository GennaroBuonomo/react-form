import { useState } from "react";

const initialArticles = [
  "Il Signore degli Anelli",
  "Lo Squalo",
  "Il Piccolo Principe",
  "Orgoglio e Pregiudizio",
  "Harry Potter e la Pietra Filosofale",
];

function App() {
  const [newArticle, setNewArticle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Articolo aggiornato");
  };

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
          <div className="col-12">
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="d-flex">
              <input 
               type="text"
               className="form-control me-2"
               placeholder="inserisci articolo"
               value={newArticle}
               onChange={(e) => setNewArticle(e.target.value)}
              />
              <button className="btn btn-success">Inserisci</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
