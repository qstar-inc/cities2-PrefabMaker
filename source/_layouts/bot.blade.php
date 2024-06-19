<!DOCTYPE html>
<html lang="en" data-bs-theme="dark">

<head>
    <meta charset="utf-8">
    <meta charset="UTF-8">
    <meta name="author" content="{{ $page->author }}">
    <meta name="description" content="{{ $page->bot_description }}">
    <meta name="keywords" content="{{ $page->keywords }}">
    <meta name="language" content="English">
    <meta name="revisit-after" content="7 days">
    <meta name="robots" content="index, follow">
    <meta name="title" content="{{ $page->bot_title }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta property="og:description" content="{{ $page->bot_description }}" />
    <meta property="og:image" content="{{ $page->images }}/thumb.jpg" />
    <meta property="og:title" content="{{ $page->bot_title }}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{{ $page->url }}" />
    <meta property="twitter:card" content="{{ $page->images }}/thumb.jpg" />
    <meta property="twitter:description" content="{{ $page->bot_description }}" />
    <meta property="twitter:image" content="{{ $page->images }}/thumb.jpg" />
    <meta property="twitter:title" content="{{ $page->bot_title }}" />
    <meta property="twitter:url" content="{{ $page->url }}" />
    <title>{{ $page->bot_title }}</title>

    <link rel="icon" type="image/x-icon" href="{{ $page->images }}/starq.ico">
    @yield('css')
    <link rel="stylesheet" href="{{ $page->repo . mix('css/main.css', 'assets/build') }}">
</head>

<body class="text-gray-900 font-sans antialiased">
    @include('_partials.nav')
    @include('_partials.toast')
    @include('_partials.modal-faq')

    <div id="spinner-overlay" class="spinner-overlay d-none">
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <div id="blur-overlay" class="blur-overlay d-none"></div>
    <div class="page-content container-xxl">
        <div id="header-container" class="row">
            <h6 class="cities-font mx-auto mt-4 text-center"></h6>
            <div class="m-auto">
                <h1 class="cities-font collapse show multi-collapse text-center">StarQ's Cities: Skylines II Modding Bot</h1>
            </div>
        </div>
        @yield('body')
    </div>
    @include('_partials.footer')
    <script>
        0
    </script>
    <!-- Jquery JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Custom JS-->
    <script defer src="{{ $page->repo . mix('js/main.js', 'assets/build') }}"></script>
    @yield('js')
</body>

</html>
