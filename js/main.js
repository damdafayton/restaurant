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
        title: 'Beverage Director'
    },
    4: {
        image: './images/event.jfif',
        name: 'Jessica',
        title: 'Events Director'
    }
};

const team = document.querySelector('#team-members');

// Add team members to section
Object.keys(teamObj).forEach((member) => {
    const div = document.createElement('div');
    div.innerHTML = `<div class="p-3 position-relative">
        <img class="img-chess" src="./images/chess.png">
        <div class="position-relative">
            <img class="photo-team" src="${teamObj[member].image}" alt="photo of owner">
            <div class=""></div>
        </div>
        </div>
        <div class="d-flex flex-column text-start">
            <h3 class="fw-bold fs-4">${teamObj[member].name}</h3>
            <p class="text-orange fw-bold">${teamObj[member].title}</p>
            <div class="line line-gray"></div>
            <p>${teamObj[member].description || ''}</p>
        </div>`;
    div.classList.add('card-team', 'd-flex', 'gap-2');
    team && team.appendChild(div);
});

if (document.location.pathname.includes('index.html')) {
    // Hide team members
    const cardTeam = document.querySelectorAll('.card-team')
    cardTeam.forEach((card, i) => {
        if (i >= 2) {
            card.classList.add('d-none')
        }
    })

    // Add load more button
    const moreBtn = document.createElement('div')
    moreBtn.classList.add('more', 'p-2')
    moreBtn.innerHTML = 'MORE<span class="arrow ms-3"></span>'
    moreBtn.addEventListener('click', () => {
        cardTeam.forEach(card => {
            card.classList.remove('d-none')
        })
        moreBtn.classList.add('d-none')
    })
    team.appendChild(moreBtn)
} else if (document.location.pathname.includes('about')) {
    // Add image blur classes
    const cardTeam = document.querySelectorAll('.card-team');
    cardTeam.forEach((card) => {
        const cardImg = card.querySelector('.photo-team');
        cardImg.classList.add('img-sepia');
        cardImg.nextElementSibling.classList.add('img-reddish');
    });
}
