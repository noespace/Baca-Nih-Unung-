const cover = document.getElementById("cover");
const storySlide = document.getElementById("storySlide");
const ending = document.getElementById("ending");
const openKetupat = document.getElementById("openKetupat");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const pageLabel = document.getElementById("pageLabel");
const pageTitle = document.getElementById("pageTitle");
const pageBody = document.getElementById("pageBody");
const progressBar = document.getElementById("progressBar");
const counter = document.getElementById("counter");
const answer = document.getElementById("answer");

const LAST_PAGE = STORY_PAGES.length + 1;
let currentPage = 0;
let touchStartX = 0;

function showOnly(element) {
  [cover, storySlide, ending].forEach((slide) => {
    slide.classList.toggle("active", slide === element);
  });
}

function render() {
  if (currentPage === 0) {
    showOnly(cover);
  } else if (currentPage === LAST_PAGE) {
    showOnly(ending);
  } else {
    const page = STORY_PAGES[currentPage - 1];
    pageLabel.textContent = page.label;
    pageTitle.textContent = page.title;
    pageBody.innerHTML = page.body;
    showOnly(storySlide);
  }

  prevButton.disabled = currentPage === 0;
  nextButton.disabled = currentPage === LAST_PAGE;
  counter.textContent = `${currentPage} / ${LAST_PAGE}`;
  progressBar.style.width = `${(currentPage / LAST_PAGE) * 100}%`;
  document.getElementById("book").scrollTop = 0;
}

function movePage(direction) {
  currentPage = Math.max(0, Math.min(LAST_PAGE, currentPage + direction));
  render();
}

openKetupat.addEventListener("click", () => movePage(1));
prevButton.addEventListener("click", () => movePage(-1));
nextButton.addEventListener("click", () => movePage(1));

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") movePage(1);
  if (event.key === "ArrowLeft") movePage(-1);
});

document.addEventListener("touchstart", (event) => {
  touchStartX = event.changedTouches[0].clientX;
}, { passive: true });

document.addEventListener("touchend", (event) => {
  const distance = event.changedTouches[0].clientX - touchStartX;
  if (Math.abs(distance) > 70) movePage(distance < 0 ? 1 : -1);
}, { passive: true });

document.querySelectorAll("[data-answer]").forEach((button) => {
  button.addEventListener("click", () => {
    answer.innerHTML = ENDING_RESPONSES[button.dataset.answer];
    answer.classList.add("show");
  });
});

render();
