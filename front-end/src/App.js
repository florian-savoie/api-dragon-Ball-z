// App.js (dans le dossier 'src')

import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    // Fonction pour récupérer les données depuis le serveur CodeIgniter
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/test');
        const jsonData = await response.json();

        // Vérifier si les données sont un objet avant de les stocker dans le state
        if (typeof jsonData === 'object' && jsonData !== null) {
          setData(jsonData);
        } else {
          console.error('Les données récupérées ne sont pas un objet.');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Données récupérées depuis CodeIgniter :</h1>
      <ul>
        {Object.keys(data).map((key, index) => (
          <li key={index}>
            <strong>{key}:</strong> {data[key]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
