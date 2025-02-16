<?php
namespace App\Services;

use Illuminate\Support\Facades\Http;

class AnimeService {

    protected $anime_url = "https://api.jikan.moe/v4/top/anime";

    public function getAnime() {

        $response = Http::get($this->anime_url);

        return $response->json()['data'];
    }

    public function getPopular() {

        $response = Http::get($this->anime_url . "?=bypopularity");

        return $response->json()['data'];
    }

    public function getSeason() {

        $response = Http::get('https://api.jikan.moe/v4/seasons/now');

        return $response->json()['data'];
    }

    public function getAnimeById($id) {

        $response = Http::get('https://api.jikan.moe/v4/anime/'. $id .'/full');

        return $response->json()['data'];
    }

    public function getEpisode($id) {
        $response = Http::get('https://api.jikan.moe/v4/anime/'. $id.'/episodes');

        return $response->json()['data'];

    }
}
