const nav = document.querySelector('.toggle')
fetch('/toggle.html')
    .then(res => res.text())
    .then(data => {
        nav.innerHTML = data
    })