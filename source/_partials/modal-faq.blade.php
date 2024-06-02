<!-- FAQ Modal -->
<div class="modal fade" id="faqModal" tabindex="-1" aria-labelledby="faqModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="faqModalLabel">Frequently Asked Questions</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div>
                    <h4>Where is the Cities: Skylines II user data folder and where should the Prefab files be placed?</h4>
                    <p class="mb-0">Cities: Skylines II user data folder is located at <code>%LocalAppData%Low\Colossal Order\Cities Skylines II\</code>.
                        Within this directory, there are various subfolders for specific purposes.
                    </p>
                    <span>Place the above address on Run (<kbd>Win</kbd> + <kbd>R</kbd>) or Explorer (<kbd>Win</kbd> + <kbd>E</kbd>) address bar</span>
                    <p class="mt-3">Prefab files can be placed anywhere within the user data folder, and they will load automatically.
                        However, if a Prefab file is placed in a folder or subfolder that begins with a <code>.</code> (dot/period), it will not be loaded.
                        But the preferred folder is <code>StreamingData~</code>.</p>
                </div>
                <hr class="m-auto mb-3" />
                <div>
                    <h4>How to get a CID for the Prefabs?</h4>
                    <p>
                        Every custom content in Cities: Skylines II requires a CID (Component Identifier). Each item created in-game automatically saves with a CID file, however externally made items
                        won't work properly without a CID file. To obtain the CID for the Prefabs, follow these steps:
                    <ol>
                        <li>Open the game Editor.</li>
                        <li>Select any object (like buildings, props, etc) from the Add Objects menu and plop it to the map.</li>
                        <li>Select the object and on the details panel, click on the Duplicate button. This will add a duplicated object to your mouse pointer.</li>
                        <li>Place the duplicated object on the map, and delete the original one from the map.</li>
                        <li>Look at the Workspace panel on the left, and expand the Objects heading if necessary to view the Objects List. There should only be one item.</li>
                        <li>Click the save icon beside the duplicated object (suffixed with <code> (copy)</code>). This will save this duplicated asset to the <code>StreamingData~</code> folder.</li>
                        <li>On the <code>StreamingData~</code> folder, you'll see a folder named with the object you just saved. On the folder, you'll see one <code>.Prefab</code> file and one
                            <code>.Prefab.cid</code> file. Delete the <code>.Prefab</code> file and rename the <code>.Prefab.cid</code> file to include the name of your custom content. For example, if
                            your downloaded prefab is <code>StarQInc.Prefab</code>, your CID file name should be <code>StarQInc.Prefab.cid</code>. Place them in the same folder, according to the
                            criteria mentioned above, and the item will load automatically in game.
                        </li>
                    </ol>
                    </p>
                    <p>There are numerous <em>other</em> methods to acquire a CID, but ensure they are generated within the game. It's advised against using random GUID generators, as they could
                        become incompatible in the future, even if they currently function.</p>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
