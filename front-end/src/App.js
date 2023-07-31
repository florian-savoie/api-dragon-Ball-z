import { ChakraProvider } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, CardFooter , Stack , Image , Button,Divider,ButtonGroup } from '@chakra-ui/react'

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
<ChakraProvider>
  <div>
    <h1 className="text-center">Les personnages Dragon ball Z :</h1>
    <div className="row gap-5 d-flex justify-content-center mt-5">
      {Array.isArray(data) &&
        data.map((perso, index) => (
          <Card maxW="sm" key={index} style={{border:"2px solid #F0E68C"}}>
            <CardBody>
              <Image
                className="mt-3"
                src={`${process.env.PUBLIC_URL}/img/${perso.img}`}
                alt={`Avatar de ${perso.name}`}
                borderRadius="lg"
                style={{
                  maxHeight: '15rem',
                  width: '15rem',
                  minHeight: '15rem',
                  margin: 'auto',
                  borderRadius: '1rem',
                }}
              />
              <Divider />
              <li className="text-center">
                <strong>Nom :</strong> {perso.name}
                <br />
                <strong>Description :</strong> {perso.race}
                <br />
                <br />
              </li>
            </CardBody>
          </Card>
        ))}
    </div>
  </div>
</ChakraProvider>
  );
};

export default App;
