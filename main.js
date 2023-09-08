let projects = document.querySelectorAll('#projects .project')
let slider;
let i = 0
let count;

projects.forEach(project => {
    project.addEventListener('mouseenter', e => {

        slider = document.querySelectorAll(`#${e.target.id} .box img`)

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

        document.getElementById(e.target.id).style.height = '265px'

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

    document.getElementById(project).style.height = '330px'


}

