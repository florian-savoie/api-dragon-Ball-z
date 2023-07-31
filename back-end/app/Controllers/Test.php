<?php

// Test.php (dans le dossier 'controllers')

namespace App\Controllers;

class Test extends BaseController
{
    public function test()
    {

       
            $json_file = '../public/Data/json/perso.json';
    
            // Vérifier si le fichier existe
            if (file_exists($json_file)) {
                // Lire le contenu JSON du fichier
                $json_content = file_get_contents($json_file);
            
                // Décoder le contenu JSON en tableau PHP
                $personnages = json_decode($json_content, true);
            
                // Afficher le contenu du tableau
            }
    
    


      

        // Configurer les en-têtes pour autoriser les requêtes depuis http://localhost:3000
        header('Access-Control-Allow-Origin: http://localhost:3000');
        header('Content-Type: application/json');

        // Convertir le tableau en JSON et l'envoyer
        echo json_encode($personnages);
    }
}