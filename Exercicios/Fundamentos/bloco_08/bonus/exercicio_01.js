const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const getDragonDamage = () => Math.floor((Math.random() * (dragon.strength - 15)) + 15);

function getWarriorDamage() {
  const {strength} = warrior;
  const maxDamage = strength * warrior.weaponDmg;

  return Math.floor((Math.random() * (maxDamage - strength)) + strength);
}

function getMageDamage() {
  const minDamage = mage.intelligence;
  const maxDamage = minDamage * 2;
  const turnDamage = {
    damage: 'Não possui mana suficiente',
    mana: 0,
  };

  if (mage.mana < 15) {
    return turnDamage;
  }

  turnDamage.mana = 15;
  turnDamage.damage = Math.floor((Math.random() * (maxDamage - minDamage)) + minDamage);

  return turnDamage;
}

const gameActions = {
  warriorTurn: (getDamage) => {
    const warriorDamage = getDamage();
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },

  mageTurn: (getDamage) => {
    const mageDamage = getDamage();
    mage.damage = mageDamage.damage;
    mage.mana -= mageDamage.mana;
    dragon.healthPoints -= mageDamage.damage;
  },

  dragonTurn: (getDamage) => {
    const dragonDamage = getDamage();
    dragon.damage = dragonDamage;
    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
  },

  turn: () => battleMembers,
};

let count = 1;

do {
  gameActions.warriorTurn(getWarriorDamage);
  gameActions.mageTurn(getMageDamage);
  gameActions.dragonTurn(getDragonDamage);
  console.log(`Rodada: ${count}`);
  console.log(gameActions.turn());
  count += 1;
} while (mage.healthPoints > 0 && warrior.healthPoints > 0 && dragon.healthPoints > 0); 

function getFinalResult() {
  if (mage.healthPoints <= 0) return(`Mago perdeu`);
  if (warrior.healthPoints <= 0) return(`Warrior perdeu`);
  if (dragon.healthPoints <= 0) return(`Dragon perdeu`);
}

console.log(`\n\nResultado final: ${getFinalResult()}`);
