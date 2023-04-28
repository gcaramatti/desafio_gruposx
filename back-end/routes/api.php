<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\CompanyController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login', [UserController::class, 'login']);
Route::post('new-user', [UserController::class, 'store']);
Route::post('new-user-onboarding', [UserController::class, 'storeUserOnOnboarding']);


Route::group(['middleware' => 'auth:sanctum'], function() {
    Route::get('user', [UserController::class,'userDetails']);
    Route::get('users', [UserController::class,'index']);
    Route::get('logout', [UserController::class,'logout']);
    Route::get('user/{id}', [UserController::class, 'show']);
    Route::put('update-user/{id}', [UserController::class, 'update']);
    Route::delete('delete-user/{id}', [UserController::class, 'destroy']);

    Route::get('companies', [CompanyController::class, 'index']);
    Route::get('company-users/{id}', [CompanyController::class, 'getCompanyUsers']);
    Route::put('update-company/{id}', [CompanyController::class,'update']);
    Route::post('new-company', [CompanyController::class,'store']);
    Route::delete('delete-company/{id}', [CompanyController::class, 'destroy']);
});