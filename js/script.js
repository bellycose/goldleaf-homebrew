const nav = document.querySelector('.toggle')
fetch('/goldleaf-homebrew/toggle.html')
    .then(res => res.text())
    .then(data => {
        nav.innerHTML = data
    })