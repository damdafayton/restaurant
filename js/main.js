const teamObj = {
  1: {
    image: './images/chef.jfif',
    title: 'Ryan - Owner/Chef',
    slogan: '“Pleasure in the job puts perfection in the work” - Aristotle',
    description: `Ryan has built his skills in some of the country’s most lauded restaurants including the Michelin
        one-star restaurant Caviar Russe, Wylie Dufresne’s landmark for modernist cooking WD-50, as well as
        Dovetail NYC and minibar by Jose Andres.`,
  },
  2: {
    image: './images/head-chef.jfif',
    title: 'Michael - Head Chef',
    slogan: '“The belly rules the mind.” - Spanish Proverb',
    description: `A Florida native and a graduate from the Culinary Institute of America, Michael has been working side
        by side with Ryan over the last five years where he has proven to be a superb culinary talent.`,
  },
};

// < div class="" >

//     </div>

const team = document.querySelector('#team');
const more = '<div class="more p-2">MORE<span class="arrow mx-3"></span></div>';

Object.keys(teamObj).forEach((member) => {
  const div = document.createElement('div');
  div.innerHTML = `<div class="position-relative">
        <img class="photo-team" src="${teamObj[member].image}" alt="photo of owner">
        <div class=""></div>
        </div>
        <div class="d-flex flex-column text-start">
            <h3 class="fw-bold fs-4">${teamObj[member].title}</h3>
            <p class="text-orange fw-bold">${teamObj[member].slogan}</p>
            <div class="line line-gray"></div>
            <p>${teamObj[member].description}</p>
        </div>`;
  div.classList.add('card-team', 'd-flex', 'gap-4');
  team.appendChild(div);
});
if (document.location.pathname.includes('index,html')) {
  team.innerHTML += more;
} else if (document.location.pathname.includes('about')) {
  const cardTeam = document.querySelectorAll('.card-team');
  cardTeam.forEach((card) => {
    const cardImg = card.getElementsByTagName('img');
    cardImg[0].classList.add('img-sepia');
    cardImg[0].nextElementSibling.classList.add('img-reddish');
  });
}
