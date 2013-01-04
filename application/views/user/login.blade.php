@layout('master')

@section('title')
Login
@endsection

@section('styles')
<link rel="stylesheet" type="text/css" href="/css/login.css" />
@endsection

@section('content')
<h1>Login</h1>

{{ Form::open('login', 'POST', array('class' => 'login-form')) }}
    @if (Session::has('login_errors'))
        <span class="error">Email or password incorrect.</span>
    @endif
    
    <p>{{ Form::label('email', 'Your email') }}</p>
    <p>{{ Form::text('email', 'demo@didgeridoo.io') }}</p>
    
    <p>{{ Form::label('password', 'Your password') }}</p>
    <p>{{ Form::text('password', '1234') }}</p>

    {{ Form::hidden('redirect', '/ide') }}
    
    <p>{{ Form::submit('Login') }}</p>
{{ Form::close() }}
@endsection