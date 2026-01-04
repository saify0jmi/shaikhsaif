/*=============== HOME SPLIT TEXT ===============*/
const { animate ,splitText, stagger} = anime;
const { chars: chars1 } = splitText('.home__profession-1', {chars: true});
const { chars: chars2 } = splitText('.home__profession-2', {chars: true});

animate(chars1, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 900,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
});
animate(chars2, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 900,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
});

/*=============== SWIPER PROJECTS ===============*/
const swiperProjects = new Swiper('.projects__swiper', {
  loop: true,
  spaceBetween: 24,
  slidesPerView: 'auto',
  grabCursor:true,
  speed: 600,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay:{
    delay: 3000,
    disableOnInteraction: false,

  }
});

/*=============== WORK TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')
tabs.forEach((tab) =>{
  tab.addEventListener('click',()=>{
    const targetSelector = tab.dataset.target ,
          targetContent = document.querySelector(targetSelector)
    //Disable all content and active tabs
    tabContents.forEach((content)=>content.classList.remove('work-active'))
    tabs.forEach((t)=>t.classList.remove('work-active'))

    //Active the tab and corresponding content
    tab.classList.add('work-active')
    targetContent.classList.add('work-active')
  })
})
/*=============== COPY EMAIL IN CONTACT ===============*/
const copyBtn = document.getElementById('contact-btn'),
  copyEmail = document.getElementById('contact-email').textContent

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(copyEmail).then(()=>{
    copyBtn.innerHTML='Email Copied <i class="ri-check-line"></i>';
    setTimeout(()=>{
    copyBtn.innerHTML = 'Copy email <i class="ri-file-copy-line"></i>';
  }, 2000);
  })
});
/*=============== CURRENT YEAR OF THE FOOTER ===============*/
const footerYear = document.getElementById('footer-year');
footerYear.textContent = new Date().getFullYear();

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const id = section.id;
    const top = section.offsetTop - 50;
    const height = section.offsetHeight;

    const link = document.querySelector(
      `.nav__menu a[href*="${id}"]`
    );

    if (!link) return;

    link.classList.toggle(
      'active-link',
      scrollY > top && scrollY <= top + height
    );
  });
};

window.addEventListener('scroll', scrollActive);


/*=============== CUSTOM CURSOR ===============*/
const cc = document.querySelector('.cursor');
let mouseX=0,mouseY =0;
const ccMove=()=>{
  cc.style.left =`${mouseX}px`
  cc.style.top =`${mouseY}px`
  cc.style.transform =`translate(-50%, -50%)`
  requestAnimationFrame(ccMove)
}
document.addEventListener('mousemove',(e)=>{
  mouseX = e.clientX
  mouseY = e.clientY
});
ccMove()
/* Hide custom cursor on links */
const a = document.querySelectorAll('a')

a.forEach(item =>{
  item.addEventListener('mousemove',()=>{
    cc.classList.add('hide-cursor')
  })
  item.addEventListener('mouseleave',()=>{
    cc.classList.remove('hide-cursor')
  })
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 300,
  // reset: true
})
sr.reveal(`.home__image, .projects__container, .work__container
  ,contact__container`)
sr.reveal(`.home__data`,{delay: 900, origin:'bottom'})
sr.reveal(`.home__info`,{delay: 1200, origin:'bottom'})
sr.reveal(`.home__info, .home__cv`,{delay: 1500})
sr.reveal(`.about__data`,{origin: 'left'})
sr.reveal(`.about__image`,{origin: 'right'})
// sr.reveal(`.services__card`,{interval: 100})
