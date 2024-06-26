<?php

namespace App\Http\Controllers;

use App\Http\Filters\UserFilter;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
 
    /**
     * Show the form for creating a new resource.
     */
    public function index(UserFilter $filter)
    {
        return inertia("Customers/Index", [
            "users" => UserResource::collection(User::filter($filter)->paginate(10)),
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}
