@extends('admin.master')
@section('content')
<section id="main-content">
	<section class="wrapper">
		<div class="table-agile-info">
  <div class="panel panel-default">
    <div class="panel-heading">
      VIEW AND MANAGE PRODUCTS
    </div>
    <div class="table-responsive">
      <table class="table table-striped b-t b-light">
        <thead>
          <tr>
            <th>NO.</th>
            <th>PRODUCT NAME</th>
            <th>PRICE</th>
            <th>CATAGORY</th>
            <th>IMAGE</th>
            <th>DESCRIPTION</th>
            <th>RATING</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          @php $num=1 @endphp
          @foreach($product as $p)
  
          <tr>
            <td>{{$num++}}</td>
            <td>{{$p->p_name}}</td>
            <td>{{$p->price}}</td>
            <td>{{$p->name}}</td>
            <td><img src="{{url('uploads/'.$p->image)}}" width="50px"></td>
            <td>{{$p->description}}</td>
            <td>{{$p->rating}}</td>
            <td>
                <a href="{{route('edit',$p->id)}}" class="btn btn-primary">EDIT</a>

                <a href="{{route('delete',$p->id)}}" class="btn btn-danger">DELET</a>
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

<!--main content end-->
</section>
@endsection