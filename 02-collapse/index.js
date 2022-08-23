const content = document.querySelector('.collapsible__content');
const btn = document.querySelector('.collapsible__button');
const btnHidden = document.querySelector('.collapsible__action--hidden');
const btnVisible = document.querySelector('.collapsible__action--visible');
let visibilityСheck = false;

function hideContent() {
  content.animate(
    { opacity: 0 },
    {
      fill: 'forwards',
      duration: 100,
    }
  )
  btnVisible.style.display = 'none';
  btnHidden.style.display = 'block';
  visibilityСheck = true;
}

function showContent() {
  content.animate(
    { opacity: 1 },
    {
      fill: 'forwards',
      duration: 500,
    }
  )
  btnVisible.style.display = 'block';
  btnHidden.style.display = 'none';
  visibilityСheck = false;
}

btn.addEventListener('click', function () {
  if (visibilityСheck) {
    showContent()
  } else {
    hideContent()
  }
})