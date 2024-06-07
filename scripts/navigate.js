function backendAPIRequest(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.responseType = 'document';
        xhr.onload = function () {
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
    const view = await backendAPIRequest('http://localhost:8080/player/friends/018ff258-3ad0-7198-a240-e4499593faf3');

    console.log(view);

    const request = new XMLHttpRequest();
    request.open("GET", "/pages/friends/page.template.html", true);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            const template = request.responseText;
            const render = Mustache.render(template, view);
            document.getElementById('pageContent').innerHTML = render;
        }
    }
    request.send();
}