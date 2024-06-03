<!DOCTYPE html>
<html lang="en" data-bs-theme="dark">

<head>
    <meta charset="utf-8">
    <meta charset="UTF-8">
    <meta name="author" content="{{ $page->author }}">
    <meta name="description" content="{{ $page->description }}">
    <meta name="keywords" content="{{ $page->keywords }}">
    <meta name="language" content="English">
    <meta name="revisit-after" content="7 days">
    <meta name="robots" content="index, follow">
    <meta name="title" content="{{ $page->title }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta property="og:description" content="{{ $page->description }}" />
    <meta property="og:image" content="{{ $page->images }}/thumb.jpg" />
    <meta property="og:title" content="{{ $page->title }}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{{ $page->url }}" />
    <meta property="twitter:card" content="{{ $page->images }}/thumb.jpg" />
    <meta property="twitter:description" content="{{ $page->description }}" />
    <meta property="twitter:image" content="{{ $page->images }}/thumb.jpg" />
    <meta property="twitter:title" content="{{ $page->title }}" />
    <meta property="twitter:url" content="{{ $page->url }}" />
    <title>{{ $page->title }}</title>

    <link rel="icon" type="image/x-icon" href="{{ $page->images }}/starq.ico">
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
    <div class="page-content container-xxl mb-5 px-5">
        <div id="header-container" class="row">
            <div class="d-flex justify-content-between align-items-center flex-wrap mt-5">
                <h1 class="cities-font">Cities: Skylines II Prefab Maker</h1>
            </div>
        </div>
        <div id="button-container" class="m-auto pb-2 border-2 border-bottom border-warning text-center">
            <a class="btn btn-primary" href="{{ $page->repo . 'brand' }}">Brand Prefab</a>
            <button class="btn btn-primary" disabled>Toolbar Item</button>
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
    <!-- Select2 JS-->
    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
    <!-- Custom JS-->
    <script defer src="{{ $page->repo . mix('js/main.js', 'assets/build') }}"></script>
    @yield('js')
</body>

</html>
