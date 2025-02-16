<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Comment;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    //
    public function store(Request $request, $anime_id) {
        // Log request data
        // Log::info('Comment Request Data:', $request->all());

        $request->validate([
            'comment' => 'required|string|max:500',
        ]);

        $comment = Comment::create([
            'user_id' => Auth::id(),
            'anime_id' => $anime_id,
            'content' => $request->comment,
        ]);

        return response()->json(['success', $comment]);
    }

}
