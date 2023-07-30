<?php

// Test.php (dans le dossier 'controllers')

namespace App\Controllers;

class Test extends BaseController
{
    public function test()
    {
        $data = array(
            'Florian' => 'savoie 1',
            'item2' => 'Valeur 2',
            'item3' => 'Valeur 3',
        );

        // Configurer les en-têtes pour autoriser les requêtes depuis http://localhost:3000
        header('Access-Control-Allow-Origin: http://localhost:3000');
        header('Content-Type: application/json');

        // Convertir le tableau en JSON et l'envoyer
        echo json_encode($data);
    }
}