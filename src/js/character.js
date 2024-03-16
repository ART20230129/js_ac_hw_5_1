export default class Character {
  constructor(name, type, health = 100, level = 1) {
    if (name.length < 2 || name.length > 10 || typeof name !== 'string') {
      throw new Error('Error: inappropriate parameter length/type name!');
    } else {
      this.name = name;
    }

    const typeHero = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!typeHero.includes(type)) {
      throw new Error('Error: Inappropriate character type!');
    } else {
      this.type = type;
    }

    this.health = health;
    this.level = level;
  }
}
