<?php

namespace App\Http\Controllers;

use App\Http\Filters\UserFilter;
use App\Http\Resources\UserResource;
use App\Models\Customer;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
 
    /**
     * Show the form for creating a new resource.
     */
    public function index(UserFilter $filter)
    {
        return inertia("Users/Index", [
            "users" => UserResource::collection(User::with('customer', 'roles')->filter($filter)->paginate(10)),
            'customers'=> Customer::select('name', 'id')->get(),
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
