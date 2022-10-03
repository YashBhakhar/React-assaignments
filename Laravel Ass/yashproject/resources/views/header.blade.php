<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap" rel="stylesheet">

    <title>Sixteen Clothing HTML Template</title>

    <!-- Bootstrap core CSS -->
    <link href="{{url('clients/vendor/bootstrap/css')}}/bootstrap.min.css" rel="stylesheet">
<!--

TemplateMo 546 Sixteen Clothing

https://templatemo.com/tm-546-sixteen-clothing

-->

    <!-- Additional CSS Files -->
    <link rel="stylesheet" href="{{url('clients/assets/css')}}/fontawesome.css">
    <link rel="stylesheet" href="{{url('clients/assets/css')}}/templatemo-sixteen.css">
    <link rel="stylesheet" href="{{url('clients/assets/css')}}/owl.css">

    <style>
    .navbar .navbar-nav .nav-item:hover .dropdown-menu {
    display: block;}
    </style>
  </head>

  <body>

    <!-- ***** Preloader Start ***** -->
    <div id="preloader">
        <div class="jumper">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>  
    <!-- ***** Preloader End ***** -->

    <!-- Header -->
    <header class="">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="{{route('clienthome')}}"><h2>MY <em>PERFUME</em></h2></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item ">
                <a class="nav-link" href="{{route('clienthome')}}">HOME
                  <span class="sr-only">(current)</span>
                </a>
              </li> 
              <li class="nav-item  dropdown">
        <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
         CATAGORY
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="{{route('perfume')}}">PERFUMES</a>
          <a class="dropdown-item" href="{{route('dio')}}">DIO</a>
          <a class="dropdown-item" href="{{route('attar')}}">ATTAR</a>
        </div>
      </li>
      @if(Session::has('user'))
      
      <li class="nav-item  dropdown">
        <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
         PROFILE
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="{{route('myprofile')}}">MY PROFILE</a>
          <a class="dropdown-item" href="{{route('mycart')}}">MY CART</a>
          <a class="dropdown-item" href="{{route('myorder')}}">MY ORDERS</a>
        </div>
      </li>
      <li class="nav-item">
                <a class="nav-link" href="{{route('logout')}}" id="logout">LOGOUT</a>
              </li>

              @else
              <li class="nav-item">
                <a class="nav-link" href="{{route('login')}}">LOGIN</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="{{route('signup')}}">SIGNUP</a>
              </li>
              
              @endif
     
              <li class="nav-item">
                <a class="nav-link" href="{{route('aboutus')}}">ABOUT US</a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </header>