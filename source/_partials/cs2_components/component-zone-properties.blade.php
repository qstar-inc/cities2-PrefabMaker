<hr />
<h5>Zone Properties</h5>
<div class="mb-3">
    <div class="form-check mb-3">
        <input class="form-check-input" type="checkbox" id="scaleResidentials">
        <label class="form-check-label" for="scaleResidentials">Scale Residentials</label>
    </div>
    <div class="input-group mb-3">
        <div class="form-floating">
            <input type="number" class="form-control" id="resiProp" placeholder="Residential Properties">
            <label for="resiProp">Residential Properties</label>
        </div>
        <div class="form-floating">
            <input type="number" class="form-control" id="spaceMultiplier" placeholder="Space Multiplier">
            <label for="spaceMultiplier">Space Multiplier</label>
        </div>
    </div>
    <div class="form-check mb-3">
        <input class="form-check-input" type="radio" name="allowedResources" id="allowedSold">
        <label class="form-check-label" for="allowedSold">Allowed Sold <a class="link-info" href="#" data-bs-toggle="tooltip" data-bs-placement="right"
                data-bs-title="Add resources that this zone can sell."><i class="bi bi-question-circle"></i></a></label>
    </div>
    <div class="d-none mb-3" id="allowedSold-container">
        <select disabled multiple id="allowedSold_select" name="allowedSold_select"></select>
    </div>
    <div class="form-check mb-3">
        <input class="form-check-input" type="radio" name="allowedResources" id="allowedManufactured">
        <label class="form-check-label" for="allowedManufactured">Allowed Manufactured <a class="link-info" href="#" data-bs-toggle="tooltip" data-bs-placement="right"
                data-bs-title="Add resources that this zone can manufacture."><i class="bi bi-question-circle"></i></a></label>
    </div>
    <div class="d-none mb-3" id="allowedManufactured-container">
        <select disabled multiple id="allowedManufactured_select" name="allowedManufactured_select"></select>
    </div>
    <div class="form-check mb-3">
        <input class="form-check-input" type="radio" name="allowedResources" id="allowedStored">
        <label class="form-check-label" for="allowedStored">Allowed Stored <a class="link-info" href="#" data-bs-toggle="tooltip" data-bs-placement="right"
                data-bs-title="Add resources that this zone can store."><i class="bi bi-question-circle"></i></a></label>
    </div>
    <div class="d-none mb-3" id="allowedStored-container">
        <select disabled multiple id="allowedStored_select" name="allowedStored_select"></select>
    </div>
    <div class="form-check mb-3">
        <input class="form-check-input" type="radio" name="allowedResources" id="none">
        <label class="form-check-label" for="none">Deselect Allowed Resources</label>
    </div>
    <div class="d-none mb-3" id="none-container"></div>
    <div class="form-floating mb-3">
        <input type="number" class="form-control" id="fireHazard" placeholder="Fire Hazard Modifier">
        <label for="fireHazard">Fire Hazard Modifier</label>
    </div>
</div>
