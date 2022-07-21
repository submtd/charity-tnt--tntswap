<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
        <title>{{ config('app.name') }}</title>
    </head>
    <body>
        <div id="app">
            <App/>
        </div>
        <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>
