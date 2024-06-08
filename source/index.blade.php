@extends('_layouts.main')

@section('body')
    <div class="container">
        <div id="get-started-container" class="col-12 d-flex flex-column align-items-stretch justify-content-center text-center">
            <h1 class="align-self-center cities-font">Select a button above to get started</h1>
        </div>
    </div>
@endsection

@section('js')
    <script>
        const nav = document.getElementById('nav');
        const footer = document.getElementById('footer');
        const headerContainer = document.getElementById('header-container');
        const buttonContainer = document.getElementById('button-container');
        const getStartedContainer = document.getElementById('get-started-container');
        if (buttonContainer == null) {
            var buttonHeight = 0;
        } else {
            var buttonHeight = buttonContainer.offsetHeight;
        }

        function updategetStartedContainerHeight() {
            const totalHeight = window.innerHeight - (nav.offsetHeight + footer.offsetHeight + headerContainer.offsetHeight + buttonHeight);
            getStartedContainer.style.height = totalHeight * .9 + 'px';
        }

        updategetStartedContainerHeight();
        window.addEventListener('resize', updategetStartedContainerHeight);
    </script>
@endsection
