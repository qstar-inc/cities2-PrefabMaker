@extends('_layouts.main')

@section('body')
    @include('_partials.modal-ui-asset')
    @include('_partials.toast', ['id' => 'text-copied-toast', 'message' => 'Text copied to your clipboard'])
    <div class="">
        <h2>UI Asset <a class="btn btn-info btn-sm py-0" data-bs-toggle="modal" data-bs-target="#uiAssetModal">Learn More</a></h2>
        <form id="uiAssetFormLoad" autocomplete="off">
            <div class="mb-3">
                <label class="form-label" for="fileUpload">Load Prefab file (optional) <a class="link-info" href="#" data-bs-toggle="tooltip" data-bs-placement="right"
                        data-bs-title="Load a previously generated Prefab file"><i class="bi bi-question-circle"></i></a></label>
                <input disabled class="form-control" type="file" id="fileUpload" accept=".Prefab">
            </div>
        </form>
        <form id="uiAssetForm" autocomplete="off">
            <hr />
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="uiAssetMenuOrCategory" id="uiAssetMenu" value="uiAssetMenu">
                <label class="form-check-label" for="uiAssetMenu">UI Asset Menu <a class="link-info" href="#" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Toolbar item"><i
                            class="bi bi-question-circle"></i></a></label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="uiAssetMenuOrCategory" id="uiAssetCategory" value="uiAssetCategory">
                <label class="form-check-label" for="uiAssetCategory">UI Asset Category <a class="link-info" href="#" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tab item"><i
                            class="bi bi-question-circle"></i></a></label>
            </div>
            <hr />
            <h5>UI Asset <span id="uiAssetTitle">...</span></h5>
            <div class="form-floating mb-3">
                <input disabled class="form-control" type="text" id="name" name="name" placeholder="Name">
                <label class="form-label" for="name">Name</label>
            </div>
            <div id="components" class="d-none">
                @include('_partials/cs2_components/component-ui-object')</div>
            <div class="d-grid">
                <input disabled class="v-stack-self-top btn btn-danger" id="generate-button" type="button" value="Generate" onclick="generateFiles()">
                <button disabled class="v-stack-self-bottom btn btn-success" id="download-button" onclick="downloadFile()">Download</button>
            </div>
        </form>
        <div>
            <pre class="d-none" id="output"></pre>
        </div>
    </div>
@endsection

@section('js')
    <script defer src="{{ $page->repo . mix('js/ui_asset_maker.js', 'assets/build') }}"></script>
@endsection
