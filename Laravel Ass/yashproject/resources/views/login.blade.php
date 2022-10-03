@extends('master')
@section('content')
<style>
  label{
    width:100%;
    text-align:left;
    margin-left:10px;
  }
</style>
    <!-- Page Content -->
    <div class="page-heading contact-heading header-text">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="text-content">
              <h4 style="font-size:50px;">LOGIN</h4>
              <h2>letâ€™s start shopping</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="send-message">
      <div class="container">
        <div class="row">
          <center>
          <div class="col-md-6 column">
            <div class="section-heading">
              <h2 style="font-size:50px;">LOGIN</h2>
            </div>
          </div>
          <div class="col-md-9 column">
            <div class="contact-form">
              <form  method="post">
                @csrf
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <fieldset>
                    <label>EMAIL</label>
                      <input name="email" type="text" class="form-control" id="email" placeholder="E-Mail Address" >
                    </fieldset>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <fieldset>
                    <label>PASSWORD</label>
                      <input name="password" type="text" class="form-control" id="subject" placeholder="Password" >
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <input type="submit" name="login" id="form-submit" class="filled-button btn btn-block btn-light" value="LOGIN">
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
         </center>
        </div>
      </div>
    </div>
    @endsection