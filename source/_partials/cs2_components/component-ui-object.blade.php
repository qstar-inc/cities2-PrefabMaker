<hr />
<h5>UI Object</h5>
<div>
    <div class="mb-3">
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="uiGroupVanillaOrCustom" id="uiGroupVanilla" value="uiGroupVanilla" checked>
            <label class="form-check-label" for="uiGroupVanilla">Vanilla</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="uiGroupVanillaOrCustom" id="uiGroupCustom" value="uiGroupCustom">
            <label class="form-check-label" for="uiGroupCustom">Custom</label>
        </div>
    </div>
    <div class="mb-3" id="uiGroupSelectorDiv">
        <label class="form-label" for="uiGroupSelector">UI Group</label>
        <select disabled id="uiGroupSelector" name="uiGroupSelector" aria-label="UI Group"></select>
    </div>
    <div class="form-floating mb-3 d-none" id="uiGroupCIDDiv">
        <input type="text" class="form-control" id="uiGroupCID" maxlength="32" minlength="32" placeholder="Custom UI Group CID">
        <label for="uiGroupCID">Custom UI Group CID</label>
    </div>
    <div class="input-group mb-3">
        <div class="form-floating">
            <input type="number" class="form-control" id="uiPriority" placeholder="Priority">
            <label for="uiPriority">Priority</label>
        </div>
        <div class="form-floating">
            <input type="text" class="form-control" id="uiIcon" placeholder="Icon">
            <label for="uiIcon">Icon</label>
        </div>
        <div class="form-floating">
            <input type="text" class="form-control" id="uiLargeIcon" placeholder="Large Icon">
            <label for="uiLargeIcon">Large Icon</label>
        </div>
    </div>
    <div class="form-check mb-3">
        <input class="form-check-input" type="checkbox" id="isDebugObject">
        <label class="form-check-label" for="isDebugObject">Is Debug Object</label>
    </div>
</div>
