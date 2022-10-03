<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admincontroller;
use App\Http\Controllers\clientcontroller;
use App\Http\Middleware\mymiddleware;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('home');
// })->name('clienthome');
Route::get('/',[clientcontroller::class,'home'])->name('clienthome');
Route::get('/perfume',[clientcontroller::class,'perfume'])->name('perfume');
Route::get('/dio',[clientcontroller::class,'dio'])->name('dio');
Route::get('/attar',[clientcontroller::class,'attar'])->name('attar');
Route::get('/signup',[clientcontroller::class,'signup'])->name('signup');
Route::post('/signup',[clientcontroller::class,'signup'])->name('signup');
Route::get('/login',[clientcontroller::class,'login'])->name('login');
Route::post('/login',[clientcontroller::class,'login'])->name('login');
Route::get('/logout',[clientcontroller::class,'logout'])->name('logout');
Route::get('/aboutus',[clientcontroller::class,'aboutus'])->name('aboutus');

Route::middleware(['my'])->group(function (){
Route::get('/myprofile',[clientcontroller::class,'myprofile'])->name('myprofile');
Route::get('/cart/{id}',[clientcontroller::class,'cart'])->name('cart');
Route::post('/cart/{id}',[clientcontroller::class,'cart'])->name('cart');
Route::get('/deletecart/{id}',[clientcontroller::class,'deletecart'])->name('deletecart');
Route::get('/order/{id}',[clientcontroller::class,'order'])->name('order');
Route::get('/deleteorder/{id}',[clientcontroller::class,'deleteorder'])->name('deleteorder');
Route::post('/order/{id}',[clientcontroller::class,'order'])->name('order');
Route::get('/mycart',[clientcontroller::class,'mycart'])->name('mycart');
Route::get('/myorder',[clientcontroller::class,'myorder'])->name('myorder');
Route::get('/payment',[clientcontroller::class,'payment'])->name('payment');

Route::get('/admin1',[Admincontroller::class,'home'])->name('home');
Route::get('/admin/addproduct',[Admincontroller::class,'addproduct'])->name('addproduct');
Route::post('/admin/addproduct',[Admincontroller::class,'addproduct'])->name('addproduct');
Route::get('/admin/deleteproduct/{id}',[Admincontroller::class,'deleteproduct'])->name('delete');
Route::get('/admin/editproduct/{id}',[Admincontroller::class,'editproduct'])->name('edit');
Route::post('/admin/editproduct/{id}',[Admincontroller::class,'editproduct'])->name('edit');

});

Route::get('/admin1',[Admincontroller::class,'home'])->name('home');
Route::get('/admin/addproduct',[Admincontroller::class,'addproduct'])->name('addproduct');
Route::post('/admin/addproduct',[Admincontroller::class,'addproduct'])->name('addproduct');
Route::get('/admin/deleteproduct/{id}',[Admincontroller::class,'deleteproduct'])->name('delete');
Route::get('/admin/editproduct/{id}',[Admincontroller::class,'editproduct'])->name('edit');
Route::post('/admin/editproduct/{id}',[Admincontroller::class,'editproduct'])->name('edit');

