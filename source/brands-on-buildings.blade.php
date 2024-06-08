@extends('_layouts.main')
@section('css')
    <link href="https://cdn.datatables.net/v/bs5/dt-2.0.8/fh-4.0.1/r-3.0.2/sp-2.3.1/sl-2.0.3/datatables.min.css" rel="stylesheet">
@endsection

@section('body')
    <div class="container">
        <table id="tableX" class="display" style="width:100%">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Zone</th>
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <th>Item</th>
                    <th>Zone</th>
                </tr>
            </tfoot>
        </table>
    </div>
@endsection

@section('js')
    <script src="https://cdn.datatables.net/v/bs5/dt-2.0.8/fh-4.0.1/r-3.0.2/sp-2.3.1/sl-2.0.3/datatables.min.js"></script>
    <!-- Custom JS-->
    <script defer src="{{ $page->repo . mix('js/brands-on-buildings.js', 'assets/build') }}"></script>
@endsection
