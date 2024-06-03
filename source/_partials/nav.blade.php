<!-- Navigation Bar -->
<nav id="nav" class="navbar navbar-expand-lg bg-secondary fixed-top">
    <div class="container-xxl">
        <a class="navbar-brand" href="{{ $page->url }}">
            <img src="{{ $page->images }}/starq.svg" alt="StarQ" width="50" height="50" class="d-inline-block align-text-baseline" style="margin-top: -1rem !important;">
            <span class="h1 cities-font">{{ $page->author }}</span>
        </a>
        <a class="btn btn-outline-info me-2" type="button" href="https://qstar-inc.github.io/">About Me</a>
        <button class="navbar-toggler" id="toaster" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
</nav>
