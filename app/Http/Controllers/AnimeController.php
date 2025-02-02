<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use App\Services\AnimeService;

class AnimeController extends Controller
{
    public function index(AnimeService $animeService) {

        $allAnime = $animeService->getAnime();
        $getTrending = $animeService->getPopular();
        $getSeason = $animeService->getSeason();


        // dump($allAnime);

        return Inertia::render('test',
         ['allAnime' => $allAnime,
          'getTrending' => $getTrending,
          'getSeason' => $getSeason
         ]);
    }
}
