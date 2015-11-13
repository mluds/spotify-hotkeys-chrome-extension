var openOptionBox = document.getElementById('open-option');

document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.sync.get({
        'openOption': true
    }, function(items) {
        openOptionBox.checked = items.openOption;
    });
});

openOptionBox.addEventListener('click', function() {
    var openOption = openOptionBox.checked;
    chrome.storage.sync.set({
        'openOption': openOption
    });
});
