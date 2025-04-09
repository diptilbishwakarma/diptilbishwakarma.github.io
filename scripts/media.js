const gameDataJSON = `
[
  {
    "name": "Shadow of the Tomb Raider",
    "price": 39.99,
    "image": "../images/SOTR.webp",
    "genre": "Puzzle, Action-adventure game, Platform game, Shooter game"
  },
  {
    "name": "Grand Theft Auto V",
    "price": 29.99,
    "image": "../images/GTAV.webp",
    "genre": "Open world, Action-adventure game, First-person shooter, Nonlinear gameplay"
  },
  {
    "name": "Gran Turismo 7",
    "price": 59.99,
    "image": "../images/Gran_Turismo.webp",
    "genre": "Racing game, Simulation video game, Sports video game, Simulation Game"
  },
  {
    "name": "Mario Kart 8 Deluxe",
    "price": 59.99,
    "image": "../images/Mario.webp",
    "genre": "Racing game, Action game"
  },
  {
    "name": "Raji: An Ancient Epic",
    "price": 24.99,
    "image": "../images/raji.webp",
    "genre": "Action-adventure game, Indie game, Platform game"
  }
]
`;

class VideoGame {

    #price;

    constructor(name, genre, image, price = 0) {
        this.name = name;
        this.#price = price;
        this.genre = genre;
        this.image = image;
    }

    toString() {
        return `${this.name} (${this.genre})`;
    }

    get price() {
        return this.#price;
    }

    set price(value) {
        if (value < 0) {
            this.#price = 0;
        }
        else {
            this.#price = value;
        }
    }

    createHTMLElement() {
        const container = document.createElement('div');
        container.classList.add('game-item');
    
        const img = document.createElement('img');
        img.src = this.image;
        img.alt = this.name;
        img.style.width = '200px';
        img.style.height = '200px';
    
        const name_up = document.createElement('h3');
        name_up.textContent = this.name;
    
        const genre_up = document.createElement('p');
        genre_up.textContent = `Genre: ${this.genre}`;
    
        const price_up = document.createElement('p');
        price_up.textContent = `Price: $${this.price.toFixed(2)}`;
    
        container.appendChild(img);
        container.appendChild(name_up);
        container.appendChild(genre_up);
        container.appendChild(price_up);
    
        return container;
      }
}

document.addEventListener('DOMContentLoaded', () => {
    const gamesArray = JSON.parse(gameDataJSON);
    const mediaCont = document.getElementById('media_collection');

    gamesArray.forEach(gameData => {
        const game = new VideoGame(gameData.name, gameData.genre, gameData.image, gameData.price);
        const gameElement = game.createHTMLElement();
        mediaCont.appendChild(gameElement);
    });
});