import Bowman from '../js/bowman';

test('character creation Bowman', () => {
  const unit = new Bowman('John', 'Bowman');
  const result = {
    name: 'John',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(unit).toEqual(result);
});

test('Не верный тип Bowman', () => {
  expect(() => new Bowman('Ror', 'Zerg')).toThrow();
});

test('testing length "name"', () => {
  expect(() => new Bowman('Bollivariuson', 'Bowman')).toThrow();
});

test('testing length "name"', () => {
  expect(() => new Bowman('w', 'Bowman')).toThrow();
});

test('testing type "name"', () => {
  expect(() => new Bowman(123, 'Bowman')).toThrow();
});
