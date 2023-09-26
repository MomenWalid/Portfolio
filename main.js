const overlay = document.querySelector('.overlay')
// Start Menu

const barIcon = document.querySelector('.menu .bar-icon')
const menu = document.querySelector('.menu .menu-content')
const menuXIcon = document.querySelector('.menu .x-icon')

barIcon.onclick = function () {
    menu.classList.add('show')
    overlay.style.visibility = 'visible'

}
menuXIcon.onclick = function () {
    menu.classList.remove('show')
    overlay.style.visibility = 'hidden'
}

// End Menu

// Start Settings

const gearIcon = document.querySelector('.settings .gear-icon');
const setting = document.querySelector('.settings .config')
const settingXIcon = document.querySelector('.settings .x-icon')
const colors = document.querySelectorAll('.colors ul li');
const videos = document.querySelectorAll('.background-video ul li');
const mood = document.querySelectorAll('.mood p i');
const move = document.querySelector('.mood p .move');
const sun = document.querySelector('.mood p .sun');
const moon = document.querySelector('.mood p .moon');
let style = document.getElementById('theme')
let img = document.getElementById('round-text')

gearIcon.onclick = function () {
    setting.classList.add('show')
    overlay.style.visibility = 'visible'

}
settingXIcon.onclick = function () {
    setting.classList.remove('show')
    overlay.style.visibility = 'hidden'
}

mood.forEach(icon => {
    icon.addEventListener('click', e => {

        mood.forEach(icon => {
            icon.classList.remove('active')
        })

        if (e.target.classList.contains('sun')) {
            move.classList.remove('right');
            moon.classList.remove('active');

            move.classList.add('left');
            sun.classList.add('active');

            style.href = 'Style/light.css';

            img.src = 'imgs/round-text-b.png';

            localStorage.setItem('theme', 'Style/light.css');

        }
        else if (e.target.classList.contains('moon')) {
            move.classList.remove('left');
            sun.classList.remove('active');

            move.classList.add('right');
            moon.classList.add('active');

            style.href = 'Style/main.css';

            img.src = 'imgs/round-text-w.png';

            localStorage.setItem('theme', 'Style/main.css');

        }
    })
})

let theme = localStorage.getItem('theme');
if (theme != null) {
    style.href = theme

    if (theme == 'Style/light.css') {
        moon.classList.remove('active');
        sun.classList.add('active');
        img.src = 'imgs/round-text-b.png';
    }
}



colors.forEach(color => {
    color.addEventListener('click', e => {

        colors.forEach(color => {
            color.classList.remove('active')
        })

        document.documentElement.style.setProperty('--main-color', e.target.dataset.color)

        e.target.classList.add('active');

        localStorage.setItem('color', e.target.dataset.color)
    })
})

let mainColor = localStorage.getItem('color');
if (mainColor != null) {
    document.documentElement.style.setProperty('--main-color', mainColor)

    colors.forEach(color => {
        color.classList.remove('active');

        if (mainColor == color.dataset.color) {
            color.classList.add('active');
        }
    })

}



videos.forEach(video => {

    video.addEventListener('click', e => {

        videos.forEach(video => {
            video.classList.remove('active')
        })


        document.querySelector('video').src = e.target.dataset.src


        e.target.classList.add('active');


        localStorage.setItem("src", e.target.dataset.src);

    })
})


let src = localStorage.getItem('src');
if (src != null) {
    document.querySelector('video').src = src;

    videos.forEach(video => {
        video.classList.remove('active');

        if (video.dataset.src == src) {
            video.classList.add('active');
        }
    })
}


// End Settings


// Start Projects Animation
const projectSection = document.querySelector('#projects');
const projects = document.querySelectorAll('#projects .project');
let slider;
let i = 0
let count;


projects.forEach(project => {
    project.addEventListener('mouseenter', e => {

        slider = document.querySelectorAll(`#${e.target.id} img`)

        projectDetails(e.target.id)

    })
})

projects.forEach(project => {
    project.addEventListener('mouseleave', e => {

        slider.forEach(e => {
            e.classList.remove('active')
        })

        i = 0;
        slider[i].classList.add('active')

        clearInterval(count)

    })
})

function projectDetails(project) {
    count = setInterval(() => {
        slider[i].classList.remove('active')

        i++;

        if (i >= slider.length) {
            i = 0;
            slider[i].classList.add('active')
        } else {
            slider[i].classList.add('active')
        }
    }, 3000)
}

// End Projects Animation



// Start Active Sections

const sections = document.querySelectorAll('main section');


window.onscroll = function () {
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 100) {
            document.querySelector(`#${section.id} .section-head`).classList.add('active')
            document.getElementById(section.id).classList.add('active')
        } else {
            document.querySelector(`#${section.id} .section-head`).classList.remove('active')
        }
    })
}


// End Active Sections

