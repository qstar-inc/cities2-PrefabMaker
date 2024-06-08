<hr />
<h5>Theme Object</h5>
<div class="form-check mb-3">
    <input class="form-check-input" type="checkbox" id="requiresTheme">
    <label class="form-check-label" for="requiresTheme">Enable (max 1) <a class="link-info" href="#" data-bs-toggle="tooltip" data-bs-placement="right"
            data-bs-title="Enable if this zone belongs to a theme."><i class="bi bi-question-circle"></i></a></label>
    <div id="theme-container" class="theme-container">
        <button class="theme-button" id="theme-na" type="button" title="North American" style="background-image: url('{{ $page->images }}/theme/na.svg');"></button>
        <button class="theme-button" id="theme-eu" type="button" title="European" style="background-image: url('{{ $page->images }}/theme/eu.svg');"></button>
    </div>
</div>
