<?php

use App\Http\Controllers\CityController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\CountryController;
use App\Http\Controllers\MySkillController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\OfferController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::redirect('/', '/dashboard');

Route::group(['middleware' => ['auth', 'verified']], function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->prefix('dashboard')->group(function () {
    Route::resource('country', CountryController::class)->except(['show', 'destroy']);
    Route::resource('city', CityController::class)->except(['show', 'destroy']);
    Route::resource('company', CompanyController::class);
    Route::resource('skill', SkillController::class)->except(['show', 'destroy']);
    Route::resource('my-skill', MySkillController::class)->except(['show', 'destroy']);
    Route::resource('offer', OfferController::class);
});

require __DIR__.'/auth.php';
