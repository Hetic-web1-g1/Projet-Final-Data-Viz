const body = document.querySelector('body')
const scrollBar = document.querySelector('#scroll')



window.addEventListener('scroll', () => {
    let scroll = window.scrollY / (body.clientHeight - window.innerHeight);
    let scrollPercent = Math.round(scroll * 100);
    scrollBar.style.height = scrollPercent + '%';
});


// const step1 = document.querySelector('#sondage')
// const scrollBar1 = document.querySelector('#scroll1')

// const step2 = document.querySelector('#conclusion')
// const scrollBar2 = document.querySelector('#scroll2')

// window.addEventListener('scroll', () => {
//     let scroll1 = window.scrollY / (step1.clientHeight - window.innerHeight);
//     let scrollPercent1 = Math.round(scroll1 * 100);
//     scrollBar1.style.height = scrollPercent1 + '%';
// });

// window.addEventListener('scroll', () => {
//     let scroll2 = window.scrollY / (step2.clientHeight - window.innerHeight);
//     let scrollPercent2 = Math.round(scroll2 * 100);
//     scrollBar2.style.height = scrollPercent2 + '%';
// });