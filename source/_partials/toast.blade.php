<!-- Toast -->
<div class="toast-container position-fixed bottom-0 end-0 p-3">
    <div id="{{ isset($id) ? trim($id) : 'toast' }}" class="toast align-items-center text-bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
            <div class="toast-body cities-font">
                @if (isset($message))
                    {{ $message }}
                @else
                    Hello there! This does nothing (yet)!
                @endif

            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    </div>
</div>
