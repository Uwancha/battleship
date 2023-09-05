import { Ship } from '../src/Ship';

describe('creating a ship', () => {
  test('Ship object is created successfully with the specified length', () => {
    const ship = Ship(2);
    expect(ship.length).toBe(2);
  });

  test('Verify that the initial hit count is 0.', () => {
    const ship = Ship();
    expect(ship.hit).toBe(0);
  });

  test('Check that the sunk status is initially false', () => {
    const ship = Ship();
    expect(ship.sunk).toBe(false);
  });

  test('the hit() function increases the hit count by 1', () => {
    const ship = Ship();
    const result = ship.Hit();
    expect(result).toBe(1);
  });

  test('hitting the Ship multiple times increments the hit count accordingly.', () => {
    const ship = Ship();
    ship.Hit();
    ship.Hit();
    expect(ship.hit).toBe(2);
  });

  test('hitting the Ship does not modify the sunk status', () => {
    const ship = Ship();
    ship.Hit();
    expect(ship.sunk).toBe(false);
  });

  test('isSunk() returns false if the hit count is less than the Ship\'s length.', () => {
    const ship = Ship(5);
    ship.Hit();
    ship.Hit();
    ship.Hit();
    ship.Hit();
    expect(ship.isSunk()).toBe(false);
  });

  test('isSunk() returns true if the hit count is equal to the Ship\'s length', () => {
    const ship = Ship(5);
    ship.Hit();
    ship.Hit();
    ship.Hit();
    ship.Hit();
    ship.Hit();
    expect(ship.isSunk()).toBe(true);
  });

  test('isSunk() continues to return true even if the hit count exceeds the Ship\'s length.', () => {
    const ship = Ship(3);
    ship.Hit();
    ship.Hit();
    ship.Hit();
    ship.Hit();
    ship.Hit();
    expect(ship.isSunk()).toBe(true);
  });

  test('a Ship with a length of 0 is an invalid Ship.', () => {
    const ship = Ship(0);
    expect(ship).toBe('Invalid Ship');
  });

  test('isSunk() returns false for a Ship with length 1 and no hits', () => {
    const ship = Ship(1);
    expect(ship.isSunk()).toBe(false);
  });
});

