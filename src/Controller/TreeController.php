<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\Tree;

//Tree entity API=> this function returns (Get Action) all records of table (Tree) in DB
#[Route(path: "/tree")]
class TreeController extends AbstractController
{    
    #[Route(path: "/tree", name: "allTrees", methods: ["GET"])]
    public function index(ManagerRegistry $doctrine) :JsonResponse
    {
        //return die("OK");
        try {
            $trees = $doctrine->getRepository(Tree::class)->findAll();

            if (!$trees) {
                return new JsonResponse([
                    'message' => "No record found!",
                ]);
            }

            $data = [];

            foreach ($trees as $tree) {
                $data[] = [
                    'title' => $tree->getTitle(),
                    'latitude' => $tree->getLatitude(),
                    'longitude' => $tree->getLongitude(),
                    'timestamp' => $tree->getTimestamp(),
                ];
            }
            return new JsonResponse($data, Response::HTTP_OK);
        }
        catch(\Exception $e){
            return new JsonResponse([
                'message' => "No record found!",
                'exception' => $e->getMessage(),
            ]);
        }
    }
}