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
                <!-- <a href="{{route('order',$p->id)}}" class="btn btn-danger btn-block">MAKE ORDER</a> -->
                <a href="" class="btn btn-primary btn-block" id="pay" data-id="{{$p->id}}" data-price="{{$p->price}}">MAKE ORDER</a>
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

    <div class="best-features">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-heading">
              <h2>About Sixteen Clothing</h2>
            </div>
          </div>
          <div class="col-md-6">
            <div class="left-content">
              <h4>Looking for the best products?</h4>
              <p><a rel="nofollow" href="https://templatemo.com/tm-546-sixteen-clothing" target="_parent">This template</a> is free to use for your business websites. However, you have no permission to redistribute the downloadable ZIP file on any template collection website. <a rel="nofollow" href="https://templatemo.com/contact">Contact us</a> for more info.</p>
              <ul class="featured-list">
                <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                <li><a href="#">Consectetur an adipisicing elit</a></li>
                <li><a href="#">It aquecorporis nulla aspernatur</a></li>
                <li><a href="#">Corporis, omnis doloremque</a></li>
                <li><a href="#">Non cum id reprehenderit</a></li>
              </ul>
              <a href="about.html" class="filled-button">Read More</a>
            </div>
          </div>
          <div class="col-md-6">
            <div class="right-image">
              <img src="assets/images/feature-image.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
@endsection

@push('payment')
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
<script>
  $('body').on('click','#pay',function(e){
            e.preventDefault();
            var pid = $(this).data('id')
            var price = $(this).data('price')
            var options = {
                "key": "rzp_test_maJ4boTxHKiQn6", // Enter the Key ID generated from the Dashboard
                "amount": price * 100, // Amount is in currency subunits. Default currency is INR. Hence, 10 refers to 1000 paise
                "currency": "INR",
                "name": "NiceSnippets",
                "description": "Test Transaction",
                "image": "https://www.nicesnippets.com/image/imgpsh_fullsize.png",
                "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                "handler": function (response){
                    $.ajaxSetup({
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        }
                    });
                    $.ajax({
                        type:'POST',
                        url:"{{ route('payment') }}",
                        data:{razorpay_payment_id:response.razorpay_payment_id,amount:amount},
                        success:function(data){
                            $('.success-message').text(data.success);
                            $('.success-alert').fadeIn('slow', function(){
                               $('.success-alert').delay(5000).fadeOut(); 
                            });
                            $('.amount').val('');
                        }
                    });
                },
                "prefill": {
                    "name": "Mehul Bagda",
                    "email": "mehul.bagda@example.com",
                    "contact": "818********6"
                },
                "notes": {
                    "address": "test test"
                },
                "theme": {
                    "color": "#F37254"
                }
            };
            var rzp1 = new Razorpay(options);
            rzp1.open();
        });
</script>
@endpush