const data = [
    {
        img: 'img/project1.jpg',
        desc: 'This is a project to create a website for a group called MT Duyung, located in Karanganyar, a region in Indonesia, using HTML CSS, and JavaScript.',
        github: 'https://patriobimasuci354.github.io/'
    },
    {
        img: 'img/project2.jpg',
        desc: 'This is a project to create a gaming-themed website, using HTML, CSS, and JavaScript',
        github: 'https://patriobimasuci354.github.io/Game-suit/'
    },
    {
        img: 'img/project3.jpg',
        desc: 'This is a website about anime that I\'ve created. It\'s just the frontend part, and I didn\'t use an API. It\'s built with HTML, CSS, and JavaScript',
        github: 'https://patriobimasuci354.github.io/web-mirip-otakudesu/'
    },
    {
        img: 'img/project4.jpg',
        desc: `This is a website for a company's landing page. It's not really a full-fledged project, but just a template that I've created.`,
        github: 'https://patriobimasuci354.github.io/landing-page/'
    }
]
let cards = '';
data.forEach((e, i) => {
    cards += `<div class="card">
                <figure>
                    <img src="${e.img}" alt="project-image${i + 1}">
                    <figcaption>
                        <p><span class="no">${i + 1}. </span> <span class="Pdesc">${e.desc}</span> </p>
                        <a href="${e.github}" target="_blank">check this project..</a>
                    </figcaption>
                </figure>
            </div>`;
});

const projectC = document.querySelector('.projectC');
projectC.innerHTML = cards;

// animation for navbar
const input = document.querySelector('.navigator input');
const ulNav = document.querySelector('.navbar ul');
let i = 1
input.addEventListener('click', function () {
    if (i % 2 == 0) {
        ulNav.classList.toggle('ulTransition');
        setTimeout(() => {
            ulNav.classList.toggle('ulSlide');
        }, 500);
        i++
        return false;
    }
    ulNav.classList.toggle('ulSlide');
    setTimeout(() => {
        ulNav.classList.toggle('ulTransition');
    }, 200);
    i++
});


// turn off a behavior : 
// const aUL = document.querySelectorAll('.navbar a');
// aUL.forEach(a => {
//     a.preventDefault;
// })








// AOS animation :
const project = document.querySelectorAll('.card img');
const pProject = document.querySelectorAll('.card p');
const aProject = document.querySelectorAll('.card a');
project.forEach((img, i) => {
    img.dataset.aos = 'flip-down';
    img.dataset.aosDuration = '1500';
    img.dataset.aosDelay = i * 200;
});

pProject.forEach((p, i) => {
    p.dataset.aos = 'flip-down';
    p.dataset.aosDuration = '1500';
    p.dataset.aosDelay = i * 100;
});



