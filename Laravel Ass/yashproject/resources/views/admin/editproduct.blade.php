@extends('admin.master')
@section('content')
<body>
    <section id="container">
        <section id="main-content">
            <section class="wrapper">
                <div class="form-w3layouts">
                    <div class="row">
                        <div class="col-lg-12">

                            <section class="panel">
                                <header class="panel-heading">
                                    ADD PRODUCT
                                </header>
                                <div class="panel-body">
                                    <div class="position-center">
                                        <form role="form" method="POST" enctype="multipart/form-data">
                                            @csrf
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">PRODUCT NAME :</label>
                                                <input type="text" name="name" class="form-control"
                                                    id="exampleInputEmail1" placeholder="Product Name" value="{{$product->p_name}}">
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputPassword1">PRICE</label>
                                                <input type="text" name="price" class="form-control"
                                                    id="exampleInputPassword1" placeholder="Price" value="{{$product->price}}">
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputFile">File input</label>
                                                <input type="file" name="file" id="exampleInputFile">
                                            </div>
                                            <div class="form-group">SELECT CATAGORY :
                                                <select class="form-select" aria-lable="default select example"
                                                    name="cat">
                                                    <option> CATAGORYS </option>
                                                    @foreach($cat as $c)
                                                    <option value="{{$c->id}}" {{$c->id==$product->cat_id?'selected':''}}>
                                                        {{$c->name}}
                                                    </option>
                                                    @endforeach
                                                    </select>
                                            </div>

                                            <div class="form-group">
                                                <label>PRODUCT DISCRIPTION</label>
                                                <textarea class="form-control" name="desc"
                                                    style="height: 100px; width: 100%;">{{$product->description}}</textarea>

                                            </div>
                                            <input  name="update" type="submit" class="btn btn-info btn-block" value="EDIT PRODUCT">
                                        </form>
                                    </div>

                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    </section>
@endsection