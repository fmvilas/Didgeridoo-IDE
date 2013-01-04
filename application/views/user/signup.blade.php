@layout('master')

@section('title')
Sign up
@endsection

@section('styles')
<link rel="stylesheet" type="text/css" href="/css/signup.css" />
@endsection

@section('content')
<h1>Sign up with us! It's free!</h1>

{{ Form::open('signup', 'POST', array('class' => 'signup-form')) }}
    @if (Session::has('login_errors'))
        <span class="error">Email or password invalid.</span>
    @endif
    
    <p>{{ Form::label('email', 'Your email') }}</p>
    <p>{{ Form::text('email') }}</p>
    
    <p>{{ Form::label('password', 'Your password') }}</p>
    <p>{{ Form::password('password') }}</p>

    <p>{{ Form::label('password', 'Repeat your password') }}</p>
    <p>{{ Form::password('password') }}</p>
    
    <p>{{ Form::submit('Sign up') }}</p>
{{ Form::close() }}
@endsection