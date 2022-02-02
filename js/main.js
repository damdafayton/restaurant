const teamObj = {
  1: {
    image: './images/chef.jfif',
    name: 'Ryan',
    title: 'Owner/Chef',
    description: `Ryan has built his skills in some of the country’s most lauded restaurants including the Michelin
        one-star restaurant Caviar Russe, Wylie Dufresne’s landmark for modernist cooking WD-50, as well as
        Dovetail NYC and minibar by Jose Andres.`,
  },
  2: {
    image: './images/head-chef.jfif',
    name: 'Michael',
    title: 'Head Chef',
    description: `A Florida native and a graduate from the Culinary Institute of America, Michael has been working side
        by side with Ryan over the last five years where he has proven to be a superb culinary talent.`,
  },
  3: {
    image: './images/beverage.jpg',
    name: 'Will',
    title: 'Beverage Director',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta non veniam culpa quibusdam eius laboriosam amet placeat ipsam quia similique autem perferendis, aliquid nobis deserunt fugiat eligendi! Officia, magnam dolorem.',
  },
  4: {
    image: './images/event.jfif',
    name: 'Jessica',
    title: 'Events Director',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta non veniam culpa quibusdam eius laboriosam amet placeat ipsam quia similique autem perferendis, aliquid nobis deserunt fugiat eligendi! Officia, magnam dolorem.',
  },
  5: {
    image: './images/beverage.jpg',
    name: 'Will Jr',
    title: 'Beverage Director Assistant',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta non veniam culpa quibusdam eius laboriosam amet placeat ipsam quia similique autem perferendis, aliquid nobis deserunt fugiat eligendi! Officia, magnam dolorem.',
  },
  6: {
    image: './images/event.jfif',
    name: 'Jessica Jr',
    title: 'Events Director Assistant',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta non veniam culpa quibusdam eius laboriosam amet placeat ipsam quia similique autem perferendis, aliquid nobis deserunt fugiat eligendi! Officia, magnam dolorem.',
  },
};

const team = document.querySelector('#team-members');
const isIndexPage = (document.location.pathname.includes('index.html') || !document.location.pathname.includes('.html'));

// Add team members to section
Object.keys(teamObj).forEach((member) => {
  const div = document.createElement('div');
  const details = `<div class="d-flex flex-column text-start">
            <h3 class="fw-bold fs-5">${teamObj[member].name}</h3>
            <p class="fw-bold">${teamObj[member].title}</p>
            <div class="line line-gray"></div>
            <p>${teamObj[member].description || ''}</p>
        </div>`;
  div.innerHTML = `<div class="p-2 position-relative">
        ${isIndexPage ? '<img class="img-chess" src="./images/chess.png">' : ''}
        <div class="position-relative">
            <img class="photo-team" src="${teamObj[member].image}" alt="photo of owner">
            <div class=""></div>
            <div class="text-in-image">${isIndexPage ? '' : details}</div>
        </div>
        </div>
        ${isIndexPage ? details : ''}`;
  div.classList.add('card-team', 'd-flex', 'gap-1', 'justify-content-center', 'col', 'px-0');
  if (team) { team.appendChild(div); }
});

if (isIndexPage) {
  // Hide team members
  const cardTeam = document.querySelectorAll('.card-team');
  cardTeam.forEach((card, i) => {
    if (i >= 2) {
      card.classList.add('d-none');
    }
  });

  // Add load more button
  const moreBtn = document.createElement('div');
  moreBtn.classList.add('more', 'p-2');
  moreBtn.innerHTML = 'MORE<span class="arrow ms-3"></span>';
  moreBtn.addEventListener('click', () => {
    cardTeam.forEach((card) => {
      card.classList.remove('d-none');
    });
    moreBtn.classList.add('d-none');
  });
  team.appendChild(moreBtn);
} else if (document.location.pathname.includes('about')) {
  // Add image blur classes
  const cardTeam = document.querySelectorAll('.card-team');
  cardTeam.forEach((card) => {
    const cardImg = card.querySelector('.photo-team');
    cardImg.classList.add('img-sepia');
    cardImg.style.width = '100%';
    cardImg.nextElementSibling.classList.add('img-reddish');
  });
}
