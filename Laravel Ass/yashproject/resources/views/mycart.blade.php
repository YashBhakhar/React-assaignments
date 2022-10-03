@extends('master')
@section('content')
<style>
  .table-agile-info{
    padding-top: 100px;
  }
</style>
  
	<section class="container">
		<div class="table-agile-info">
      <h3>MY CART</h3>
      <br>
  <div class="panel panel-default">
    <div class="table-responsive">
      <table class="table table-striped b-t b-light table-hover">
        <thead>
          <tr>
            <th>NO.</th>
            <th>PRODUCT NAME</th>
            <th>PRICE</th>
            <th>QUENTITY</th>
            <th>IMAGE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          @php $num=1 @endphp
          @foreach($cart as $p)
  
          <tr>
            <td>{{$num++}}</td>
            <td>{{$p->p_name}}</td>
            <td>{{$p->price}}</td>
            <td>{{$p->quentity}}</td>
            <td><img src="{{url('uploads/'.$p->image)}}" width="50px"></td>
            <td>
                <a href="{{route('order',$p->id)}}" class="btn btn-primary">MAKE ORDER</a>

                <a href="{{route('deletecart',$p->id)}}" class="btn btn-danger">DELETE</a>
                </td>
          </tr>
          
            @endforeach
       
        </tbody>
      </table>
    </div>
            </div>
</div>
</section>
</section>
@endsection