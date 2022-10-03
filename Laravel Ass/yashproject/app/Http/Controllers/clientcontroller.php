<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DbProduct;
use App\Models\DbUser;
use App\Models\DbCart;
use App\Models\DbOrder;
use Illuminate\Support\Facades\Hash;

class clientcontroller extends Controller
{
    function home(request $request){
        $product = DbProduct::all();
        return view('home',compact('product'));
    }
    function payment(request $request){
        $order = new DbOrder;
        $id = $_POST['id'];
        $p = DbProduct::find($id);
        if($request->session()->has('user')){
        $s = $request->session()->get('user');
        }
        if($request->input('order')){
            $order->uid = $s->id;
            $order->pid = $p->id;
            $order->quentity = $request->input('quentity');
            $order->method = $request->input('method');
            $order->status = 'DISPACHED';
            $order->save();
            return redirect()->route('myorder');
        }
        return view('order',compact('p'));
    }
    function perfume(request $request){
        $product = DbProduct::select()        
        ->where('db_products.cat_id','1')
        ->get();

        return view('home',compact('product'));
    }
    function dio(request $request){
        $product = DbProduct::select()        
        ->where('db_products.cat_id','2')
        ->get();

        return view('home',compact('product'));
    }
    function attar(request $request){
        $product = DbProduct::select()        
        ->where('db_products.cat_id','3')
        ->get();

        return view('home',compact('product'));
    }
    function signup(request $request){
        $user = new DbUser;
        if($request->input('signup')){
            $validated = $request->validate([
                'name' 
                => 'required',
                'email' => 'required|unique:db_users',
                'password' => 'required',
                'address' => 'required',
            ]);

            $user->name=$request->input('name');
            $user->email=$request->input('email');
            $user->password= Hash::make($request->input('password'));
            $user->address=$request->input('address');
            $user->role_id=2;
            $user->save();
            return redirect()->route('login');
        }
        return view('signup');
    }
    function login(request $request){
        $user = DbUser::all();
        if($request->input('login')){
            $email = $request->input('email');
            $password = $request->input('password');
            $user = DbUser::where('email',$email)->first();
            if(Hash::check($password,$user->password)){
                if($user->role_id == 2){
                    $request->session()->put('user',$user);
                    return redirect()->route('clienthome');
                }
                else{
                    $request->session()->put('admin',$user);
                    return redirect()->route('home');
                }
            }
        }
        return view('login');
    }
    function logout(request $request){
        if($request->session()->has('user')){
            $request->session()->forget('user');
            return redirect()->route('login');
        }
        if($request->session()->has('admin')){
            $request->session()->forget('admin');
            return redirect()->route('login');
        }
    }
    function myprofile(request $request){
        return view('myprofile');
    }
    function cart(request $request,$id){
        $cart = new DbCart;
        $p = DbProduct::find($id);
        if($request->session()->has('user')){
        $s = $request->session()->get('user');
        }
        if($request->input('cart')){
            $cart->uid = $s->id;
            $cart->pid = $p->id;
            $cart->quentity = $request->input('quentity');
            $cart->save();
            return redirect()->route('mycart');
        }
        return view('cart',compact('p'));
    }
    function mycart(request $request){
        if($request->session()->has('user')){
            $s = $request->session()->get('user');
        }
        $cart = DbCart::select("db_carts.id","db_carts.pid","db_products.p_name","db_products.price","db_carts.quentity","db_products.image")
        ->join('db_products','db_products.id','db_carts.pid')
        ->where('db_carts.uid',$s->id)
        ->get();
        return view('mycart',compact('cart'));
    }
    function deletecart(request $request,$id){
        $cart = DbCart::find($id);
        $cart->delete();
        return redirect()->route('mycart');
    }
    function deleteorder(request $request,$id){
        $order = DbOrder::find($id);
        $order->delete();
        return redirect()->route('clienthome');
    }
    function aboutus(request $request){
        return view('aboutus');
    }
    function order(request $request,$id){
        $order = new DbOrder;
        $p = DbProduct::find($id);
        if($request->session()->has('user')){
        $s = $request->session()->get('user');
        }
        if($request->input('order')){
            $order->uid = $s->id;
            $order->pid = $p->id;
            $order->quentity = $request->input('quentity');
            $order->method = $request->input('method');
            $order->status = 'DISPACHED';
            $order->save();
            return redirect()->route('myorder');
        }
        return view('order',compact('p'));
    }
    function myorder(request $request){
        if($request->session()->has('user')){
            $s = $request->session()->get('user');
        }
        $order = DbOrder::select("db_orders.id","db_products.p_name","db_products.price","db_orders.quentity","db_products.image","db_orders.status")
        ->join('db_products','db_products.id','db_orders.pid')
        ->where('db_orders.uid',$s->id)
        ->get();
        return view('myorder',compact('order'));
    }
}