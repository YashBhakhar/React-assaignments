@extends('master')
@section('content')
<style>
    .row{
        padding:100px;
        align-items:center;
    }
</style>
    <!-- <div class="team-members"> -->
      <div class="container">
        <div class="row">
          <div class="col-md-4">
              @if(Session::has('user'))
              <?php $s = Session::get('user');?>
            <div class="team-member">
              <div class="thumb-container">
                <img src="{{url('clients/assets/images')}}/team_01.jpg" alt="">
              </div>
              <div class="down-content">
                <h4>{{$s->name}}</h4>
                <span>{{$s->email}}</span>
                <p>{{$s->address}}.</p>
              </div>
            </div>
            @endif
          </div>
        </div>
      </div>
    <!-- </div> -->
@endsection