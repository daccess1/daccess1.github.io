function backendAPIRequest(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.onload = function () {
            console.log('XHR type:', xhr.responseType);
            var status = xhr.status;
            if (status === 200) {
                resolve(xhr.responseText);
            } else {
                reject(status);
            }
        };
        xhr.send();
    });
}

async function loadFriendsPage() {
    console.log('Loading friends page');
    const viewDataPayload = await fetch(`https://bba7p9tu9njf9teo8qkf.containers.yandexcloud.net/player/friends/${_player.ref_id}`);
    const viewData = await viewDataPayload.json();

    const view = {
        friends_count: viewData.length,
        friends: viewData
    }

    const templateRequest = await fetch("/pages/friends/page.template.html?v=2");
    const template = await templateRequest.text();
    document.getElementById('pageContent').innerHTML = Mustache.render(template, view);
}