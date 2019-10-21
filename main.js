var listElement = document.querySelector('#app ul');
var inputElemnt = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var divElement = document.querySelector('#carregando')
var appElement = document.querySelector('#app')

function addRepos() {
    listElement.innerHTML = '';

    var userName = inputElemnt.value;
    divElement.style.display = "block";
    appElement.style.display = "none";

    axios.get('https://api.github.com/users/' + userName + '/repos')
        .then((result) => {
            divElement.style.display = "none";
            appElement.style.display = "block";
            for (data of result.data) {
                var nameRepos = document.createElement('li');
                var nameReposText = document.createTextNode(data.name);

                nameRepos.appendChild(nameReposText);
                listElement.appendChild(nameRepos);
            }
        }).catch((err) => {
            console.warn(err);
            divElement.style.display = "none";
            appElement.style.display = "block";
        });
}

buttonElement.onclick = addRepos;