@extends('_layouts.main')

@section('body')
    @include('_partials.modal-zone')
    @include('_partials.toast', ['id' => 'text-copied-toast', 'message' => 'Text copied to your clipboard'])
    <div class="">
        <h2>Zone Maker <a class="btn btn-info btn-sm py-0" data-bs-toggle="modal" data-bs-target="#zoneModal">Learn More</a></h2>
        <form id="zoneFormLoad" autocomplete="off">
            <div class="mb-3">
                <label class="form-label" for="fileUpload">Load Prefab file (optional) <a class="link-info" href="#" data-bs-toggle="tooltip" data-bs-placement="right"
                        data-bs-title="Load a previously generated Prefab file"><i class="bi bi-question-circle"></i></a></label>
                <input disabled class="form-control" type="file" id="fileUpload" accept=".Prefab">
            </div>
        </form>
        <form id="zoneForm" autocomplete="off">
            <hr />
            <h5>Zone Prefab</h5>
            <div class="form-floating mb-3">
                <input class="form-control" type="text" id="name" name="name" placeholder="Name">
                <label class="form-label" for="name">Name</label>
            </div>
            <div class="form-floating mb-3 ps-0">
                <select class="form-select" id="areaTypeSelector" aria-label="Area Type">
                    <option value="0">None</option>
                    <option value="1">Residential</option>
                    <option value="2">Commercial</option>
                    <option value="3">Industrial</option>
                </select>
                <label class="form-label" for="areaTypeSelector">Area Type</label>
            </div>
            <div class="mb-3">
                <label class="form-label">Zone Colors <a class="link-info" href="#" data-bs-toggle="tooltip" data-bs-placement="right"
                        data-bs-title="Each zone requires two color valus, one for the edge and one for the grid."><i class="bi bi-question-circle"></i></a></label>
                <div class="input-group color-group">
                    <div class="form-floating v-stack-top">
                        <input type="text" class="form-control" id="hexInput1" name="hexInput1" placeholder="#000000">
                        <label for="hexInput1">Zone Color</label>
                    </div>
                    <input class="h-auto form-control form-control-color" type="color" id="colorPicker1" name="colorPicker1">
                </div>
                <div class="input-group color-group">
                    <div class="form-floating v-stack-bottom">
                        <input type="text" class="form-control" id="hexInput2" name="hexInput2" placeholder="#000000">
                        <label for="hexInput2">Edge Color</label>
                    </div>
                    <input class="h-auto form-control form-control-color" type="color" id="colorPicker2" name="colorPicker2">
                </div>
            </div>
            <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" id="isOffice">
                <label class="form-check-label" for="isOffice">Office <a class="link-info" href="#" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Is this an office zoning?"><i
                            class="bi bi-question-circle"></i></a></label>
            </div>
            @include('_partials/cs2_components/component-zone-pollution')
            @include('_partials/cs2_components/component-zone-service-consumption')
            @include('_partials/cs2_components/component-crime-accumulation')
            @include('_partials/cs2_components/component-mail-accumulation')
            @include('_partials/cs2_components/component-theme-object')
            @include('_partials/cs2_components/component-zone-properties')
            @include('_partials/cs2_components/component-ui-object')
            @include('_partials/cs2_components/component-group-ambience')
            @include('_partials/cs2_components/component-unlockable')
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
    <script defer src="{{ $page->repo . mix('js/zone_maker.js', 'assets/build') }}"></script>
@endsection
