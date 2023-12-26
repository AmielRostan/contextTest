function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish('Nemo');

/********************************* Scenario 1 *********************************/
// eat(); // thougth was: 'undefined eats fish food'


/********************************* Scenario 2 *********************************/
// nemo.eat = eat;
// nemo.eat(); // thougth was: 'Nemo eats fish food'


/********************************* Scenario 3 *********************************/
// nemo.eat = eat;
// eat(); // thougth was: 'undefined eats fish food'


/********************************* Scenario 4 *********************************/
// nemo.swim(); // thougth was: 'Nemo swimming in the water'


/********************************* Scenario 5 *********************************/
// const swim = nemo.swim;
// swim(); // thougth was: 'undefined swimming in the water' | I was wrong that throws an error
