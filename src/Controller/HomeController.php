<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    //Home page rendering...
    #[Route('/')]
    public function index()
    {
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',]
        );
    }
}