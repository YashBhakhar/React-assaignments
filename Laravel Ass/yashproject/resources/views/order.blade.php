@extends('master')
@section('content')
<style>
  label{
    width:100%;
    text-align:left;
    margin-left:10px;
  }
  .row1{
        padding-top:100px;
        /* align-items:center; */
    }
</style>
    <!-- Page Content -->
      <div class="container">
        <div class="row1">
          <center>
          <div class="col-md-6 column">
            <div class="section-heading">
              <h2 style="font-size:50px;">MAKE ORDER</h2>
            </div>
          </div>
          <div class="col-md-9 column">
            <div class="contact-form">
              <form  method="post">
                @csrf
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <fieldset>
                    <label>PRODUCT NAME</label>
                      <input name="" type="" class="form-control" id="email" placeholder="E-Mail Address" value="{{$p->p_name}}">
                    </fieldset>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <fieldset>
                    <label>QUENTITY</label>
                      <input name="quentity" type="number" class="form-control" id="subject" placeholder="QUENTITY" value="1">
                    </fieldset>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <fieldset>
                    <label>METHOD</label>
                    <select class="form-control" aria-lable="default select example"
                                                    name="method">
                                                    <option> METHODS </option>
                                                    <option> ONLINE </option>
                                                    <option> CASH ON DELIVERY </option>
                                                    </select>
                    </fieldset>
                  </div>
                  <div class="col-lg-12" style="margin-top:35px">
                    <fieldset>
                      <input type="submit" name="order" id="form-submit" class="filled-button btn btn-block btn-light" value="MAKE ORDER">
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
         </center>
        </div>
      </div>
      
    @endsection