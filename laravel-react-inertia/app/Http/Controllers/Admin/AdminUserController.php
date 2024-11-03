<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\AdminStoreUserRequest;
use App\Http\Requests\Admin\AdminUpdateUserRequest;
use App\Models\User;
use Illuminate\Http\Request;

class AdminUserController extends Controller
{
    /**
     * Display a page of the resource.
     */
    public function index()
    {
        return inertia('Admin/User/Index');
    }

    /**
     * Display a listing of the resource.
     */
    public function getData()
    {
        $users = User::orderBy('id', 'desc')->get();
        return response()->json($users);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AdminStoreUserRequest $request)
    {
        $data = $request->validated();

        User::create($data);

        return response()->json([
            'status' => 'saved'
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(AdminUpdateUserRequest $request, string $id)
    {
        // return response()->json(['data' => $request->all()]);

        $user = User::findOrFail($id);

        $data = $request->validated();

        $password = $data['password'] ?? null;

        if($password){
            $data['password'] = bcrypt($data['password']);
        }else{
            unset($data['password']);
        }

        $user->update($data);//the problem

        return response()->json([
            'status' => 'updated'
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
