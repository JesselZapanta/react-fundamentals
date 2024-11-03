<?php

use App\Http\Controllers\Admin\AdminUserController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/admin/user', [AdminUserController::class, 'index'])->name('admin.user-index');
Route::get('/admin/getUser', [AdminUserController::class, 'getData'])->name('admin.getUser-index');
Route::post('/admin/user/store', [AdminUserController::class, 'store'])->name('admin.user-store');
Route::put('/admin/user/update/{id}', [AdminUserController::class, 'update'])->name('admin.user-update');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
