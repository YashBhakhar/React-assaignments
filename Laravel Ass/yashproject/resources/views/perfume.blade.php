@extends('master')
@section('content')
    <!-- Page Content -->
    <!-- Banner Starts Here -->
    <div class="banner header-text">
      <div class="owl-banner owl-carousel">
        <div class="banner-item-01">
          <div class="text-content">
            <h4>Best Offer</h4>
            <h2>New Arrivals On Sale</h2>
          </div>
        </div>
        <div class="banner-item-02">
          <div class="text-content">
            <h4>Flash Deals</h4>
            <h2>Get your best products</h2>
          </div>
        </div>
        <div class="banner-item-03">
          <div class="text-content">
            <h4>Last Minute</h4>
            <h2>Grab last minute deals</h2>
          </div>
        </div>
      </div>
    </div>
    <!-- Banner Ends Here -->

    <div class="latest-products">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-heading">
              <h2>Latest Products</h2>
            </div>
          </div>
          @foreach($product as $p)
          <div class="col-md-4">
            <div class="product-item">
              <a href="#"><img src="{{url('uploads/'.$p->image)}}" alt="" style="height:450px"></a>
              <div class="down-content">
                <a href="#"><h4>{{$p->p_name}}</h4></a>
                <h6>${{$p->price}}</h6>
                <p>{{$p->description}}</p>
                <ul class="stars">
                  @for($i=0;$i<$p->rating;$i++)
                  <li><i class="fa fa-star"></i></li>
                  @endfor

                </ul>
                @if(Session::has('user'))
                <a href="{{route('cart',$p->id)}}" class="btn btn-primary btn-block">ADD TO CART</a>
                <a href="{{route('order',$p->id)}}" class="btn btn-danger btn-block">MAKE ORDER</a>
                @else
                <a href="{{route('login')}}" class="btn btn-primary btn-block">ADD TO CART</a>
                <a href="{{route('login')}}" class="btn btn-danger btn-block">MAKE ORDER</a>
                @endif
              </div>
            </div>
          </div>
          @endforeach
        </div>
      </div>
    </div>

@endsection    