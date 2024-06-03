@extends('_layouts.main')

@section('body')
    @include('_partials.modal-brand')
    @include('_partials.toast', ['id' => 'text-copied-toast', 'message' => 'Text copied to your clipboard'])
    <div class="">
        <h2>Brand Maker <a class="btn btn-info btn-sm py-0" data-bs-toggle="modal" data-bs-target="#brandModal">Learn More</a></h2>
        <form id="brandFormLoad" autocomplete="off">
            <div class="mb-3">
                <label class="form-label" for="fileUpload">Load Prefab file (optional) <a class="link-info" href="#" data-bs-toggle="tooltip" data-bs-placement="right"
                        data-bs-title="Load a previously generated Prefab file"><i class="bi bi-question-circle"></i></a></label>
                <input class="form-control" type="file" id="fileUpload" accept=".Prefab">
            </div>
        </form>
        <form id="brandForm" autocomplete="off">
            <div class="form-floating mb-3">
                <input class="form-control" type="text" id="shortname" name="shortname" placeholder="Short Name">
                <label class="form-label" for="shortname">Short Name</label>
                <div id="shortnameWarning">Short Name cannot contain spaces.</div>
            </div>
            <div class="form-check mb-3">
                <input checked class="form-check-input" type="checkbox" id="sameAsShortName">
                <label class="form-check-label" for="sameAsShortName">
                    Name is same as Short Name
                </label>
            </div>
            <div class="form-floating mb-3">
                <input disabled class="form-control" type="text" id="name" name="name" placeholder="Name">
                <label class="form-label" for="name">Name</label>
            </div>
            <div class="mb-3">
                <label class="form-label" for="companies_type">Companies (at least one): <a class="link-info" href="#" data-bs-toggle="tooltip" data-bs-placement="right"
                        data-bs-title="Select at least one type of company. This determines on what zones should it be possible to spawn this brand."><i class="bi bi-question-circle"></i></a></label>
                <select disabled multiple id="companies_type" name="companies_type"></select>
            </div>
            <div class="mb-3">
                <label class="form-label">Brand Colors <a class="link-info" href="#" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Each brand requires 3 color values"><i
                            class="bi bi-question-circle"></i></a></label>
                <div class="input-group color-group v-stack-top">
                    <input class="form-control" type="text" id="hexInput1" name="hexInput1" placeholder="#000000">
                    <input class="form-control form-control-color" type="color" id="colorPicker1" name="colorPicker1">
                </div>
                <div class="input-group color-group v-stack-middle">
                    <input class="form-control" type="text" id="hexInput2" name="hexInput2" placeholder="#000000">
                    <input class="form-control form-control-color" type="color" id="colorPicker2" name="colorPicker2">
                </div>
                <div class="input-group color-group v-stack-bottom">
                    <input class="form-control" type="text" id="hexInput3" name="hexInput3" placeholder="#000000">
                    <input class="form-control form-control-color" type="color" id="colorPicker3" name="colorPicker3">
                </div>
            </div>
            <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" id="requiresDLC">
                <label class="form-check-label" for="requiresDLC">Requires DLC (max 1) <a class="link-info" href="#" data-bs-toggle="tooltip" data-bs-placement="right"
                        data-bs-title="Select if spawing this item should require owning a DLC."><i class="bi bi-question-circle"></i></a></label>
                <div class="dlc-container">
                    <button class="dlc-button" id="dlc-cs1th" type="button" title="Treasure Hunt" style="background-image: url('{{ $page->images }}/source/CS1TreasureHunt.svg');"></button>
                    <button class="dlc-button" id="dlc-paradox" type="button" title="Link Paradox Account" style="background-image: url('{{ $page->images }}/source/Paradox.svg');"></button>
                    <button class="dlc-button" id="dlc-landmark" type="button" title="Landmark Buildings" style="background-image: url('{{ $page->images }}/source/Landmark.svg');"></button>
                    <button class="dlc-button" id="dlc-sanfrancisco" type="button" title="San Francisco Set" style="background-image: url('{{ $page->images }}/source/SanFran.svg');"></button>
                </div>
            </div>
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
    <script defer src="{{ $page->repo . mix('js/brand_maker.js', 'assets/build') }}"></script>
@endsection
