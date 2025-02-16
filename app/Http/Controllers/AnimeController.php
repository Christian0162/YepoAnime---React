<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use App\Services\AnimeService;
use Illuminate\Support\Facades\Auth;
use App\Models\Comment;
use App\Models\User;


class AnimeController extends Controller
{
    public function index(AnimeService $animeService) {

        $allAnime = $animeService->getAnime();
        $getTrending = $animeService->getPopular();
        $getSeason = $animeService->getSeason();

        $comment = Comment::all();


        // dump($allAnime);

        return Inertia::render('Home',
         ['allAnime' => $allAnime,
          'getTrending' => $getTrending,
          'getSeason' => $getSeason,
          'comment' => $comment
         ]);
    }
    public function show(AnimeService $animeService, $id) {
        $getAnime = $animeService->getAnimeById($id);

        $getEpisode = $animeService->getEpisode($id);

        $user = Auth::user();

        $comments = Comment::with('user')->get();

        // dump($comments);
        dump(Auth::user());

        return Inertia::render('Watch',
        ['getAnime' => $getAnime,
        'getEpisode' => $getEpisode,
        'comments' => $comments,
        'user' => $user]);
    }
}
