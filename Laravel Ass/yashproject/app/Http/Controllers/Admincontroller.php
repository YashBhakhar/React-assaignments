<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DbProduct;
use App\Models\DbCatagory;

class Admincontroller extends Controller
{
    function home(){
        $product = DbProduct::select("db_products.id","db_catagories.name","db_products.p_name","db_products.price","db_products.description","db_products.rating","db_products.image")
        ->join('db_catagories','db_catagories.id','db_products.cat_id')
        ->get();
        return view('admin.home',compact('product'));
    }
    function addproduct(request $request){
        $product = new DbProduct;
        $cat = DbCatagory::all();
        if($request->input('add')){
            if($request->has('file')){
                $image =$request->file('file');
                $path = "uploads/";
                $fname = $image->getClientOriginalName();
                $image->move($path,$fname);
            }
            $product->p_name = $request->input('name');
            $product->price = $request->input('price');
            $product->cat_id = $request->input('cat');
            $product->image=$fname;
            $product->description = $request->input('desc');
            $product->rating = $request->input('rating');
            $product->save();
        }
        return view('admin.addproduct',compact('cat'));
    }
    function deleteproduct(request $request,$id){
        $product = DbProduct::find($id);
        $product->delete();
        return redirect()->route('home');
    }
    function editproduct(request $request,$id){
        $product = DbProduct::find($id);
        $cat = DbCatagory::all();
        if($request->input('update')){
            if($request->has('file')){
                $image =$request->file('file');
                $path = "uploads/";
                $fname = $image->getClientOriginalName();
                $image->move($path,$fname);
                $product->image=$fname;
            }
            $product->p_name = $request->input('name');
            $product->price = $request->input('price');
            $product->cat_id = $request->input('cat');
            $product->description = $request->input('desc');
            $product->save();
            return redirect()->route('home');
        }
        return view('admin.editproduct',compact('product','cat'));
    }
}
