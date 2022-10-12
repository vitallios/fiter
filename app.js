const icon4 = document.querySelector('#nav-icon4')
const burgerMenu = document.querySelector('.open_menu')

icon4.addEventListener('click', () => {
  addClassOpen(icon4)
})
function addClassOpen(e) {
  if (e.classList.value == '') {
    e.classList.value = 'open'
    burgerMenu.classList.remove('none')
    burgerMenu.style.whidth = '50%';
    burgerMenu.style.display = "flex";
    burgerMenu.style.position = "fixed";
    burgerMenu.style.background = "var(--bg)";
    burgerMenu.style.flexDirection = "column";
    burgerMenu.style.left = "0";
    burgerMenu.style.top = "0";
    burgerMenu.style.bottom = "0";
    burgerMenu.style.zIndex = "5";
    burgerMenu.style.transition = ".5s";
    burgerMenu.style.fontSize = "2em";
    burgerMenu.style.padding = "1em";
    document.querySelector('body').style.overflow = 'hidden'
  } else {
    e.classList.value = ''
    burgerMenu.classList.add('none')
    burgerMenu.style.left = "-100%";
    document.querySelector('body').style.overflow = ''
  }
}

const openLinks = document.querySelectorAll('.open_link')

openLinks.forEach((e) => {
  e.addEventListener('click', () => {
    console.dir(e);
    if (e.innerText == e.innerText) {
      e.classList.value = ''
      burgerMenu.classList.add('none')
      burgerMenu.style.left = "-100%";
      document.querySelector('body').style.overflow = ''
      document.querySelector('#nav-icon4').classList.remove('open')
    }
  })
})

const btnTop = document.querySelector('.top')

function up() {
  var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);

  if (top > 0) {
    window.scrollBy(0, ((top + 120) / -12));
    t = setTimeout('up()', 20);
  } else clearTimeout(t);
  return false;
}

btnTop.addEventListener('click', () => {
  up()
})
