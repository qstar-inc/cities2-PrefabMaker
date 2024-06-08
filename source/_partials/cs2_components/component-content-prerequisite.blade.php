<hr />
<h5>Content Prerequisite</h5>
<div class="form-check mb-3">
    <input class="form-check-input" type="checkbox" id="requiresDLC">
    <label class="form-check-label" for="requiresDLC">Enable (max 1) <a class="link-info" href="#" data-bs-toggle="tooltip" data-bs-placement="right"
            data-bs-title="Enable if this brand requires a DLC to spawn."><i class="bi bi-question-circle"></i></a></label>
    <div class="dlc-container">
        <button class="dlc-button" id="dlc-cs1th" type="button" title="Treasure Hunt" style="background-image: url('{{ $page->images }}/source/CS1TreasureHunt.svg');"></button>
        <button class="dlc-button" id="dlc-paradox" type="button" title="Link Paradox Account" style="background-image: url('{{ $page->images }}/source/Paradox.svg');"></button>
        <button class="dlc-button" id="dlc-landmark" type="button" title="Landmark Buildings" style="background-image: url('{{ $page->images }}/source/Landmark.svg');"></button>
        <button class="dlc-button" id="dlc-sanfrancisco" type="button" title="San Francisco Set" style="background-image: url('{{ $page->images }}/source/SanFran.svg');"></button>
    </div>
</div>
