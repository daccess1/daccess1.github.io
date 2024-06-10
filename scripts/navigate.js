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
    const viewF = await fetch("https://bba7p9tu9njf9teo8qkf.containers.yandexcloud.net/player/friends/018ff258-3ad0-7198-a240-e4499593faf3");
    const viewFBody = await viewF.json();

    console.log('XHR:', JSON.parse(view));
    console.log('Fetch:', viewFBody);

    const view = {
        friends_count: 2,
        friends: [
            {
                "user_id": 47,
                "user_name": "Tony Montana",
                "score": 0
            },
            {
                "user_id": 48,
                "user_name": "Антон Городецкий",
                "score": 0
            }
        ]
    }

    const request = new XMLHttpRequest();
    request.open("GET", "/pages/friends/page.template.html?v=1", true);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            const template = request.responseText;
            document.getElementById('pageContent').innerHTML = Mustache.render(template, view);
        }
    }
    request.send();
}