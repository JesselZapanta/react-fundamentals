<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\AdminStoreUserRequest;
use App\Http\Requests\Admin\AdminUpdateUserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

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
    public function getData(Request $request)
    {

        $search = $request->search;

        return User::where('name', 'like', "%$search%")
                        ->orWhere('email', 'like', "%$search%")
                        ->orderBy('id', 'desc')
                        ->paginate(10)
                        ->onEachSide(1);

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

        $avatar = $data['avatar'];

        if($avatar){
            $data['avatar'] = $avatar->store('avatar', 'public');
        }

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
        return User::findOrFail($id);
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
        $user = User::findOrFail($id);

        $data = $request->validated();

        if (!empty($data['password'])) {
            $data['password'] = bcrypt($data['password']);
        } else {
            unset($data['password']);
        }

        if ($request->hasFile('avatar')) {
            if ($user->avatar) {
                Storage::disk('public')->delete($user->avatar);
            }
            $data['avatar'] = $request->file('avatar')->store('avatar', 'public');
        } else {
            $data['avatar'] = $user->avatar;
        }

        $user->update($data);

        return response()->json([
            'status' => 'updated'
        ], 200);
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = User::findOrFail($id);

        $user->delete();

        return response()->json([
            'status' => 'deleted'
        ], 200);
    }
}
