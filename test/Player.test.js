import { Player } from "../src/Player"

describe('Player', () => {

    const mockOpponentGameboard = {
        receiveAttack: jest.fn().mockReturnValue('dummyResult'),
    };


    test('takeTurn returns an attack and the result of the attack',() => {
        
        const player = Player(mockOpponentGameboard);
        const { attack, result } = player.takeTurn();

        expect(Array.isArray(attack)).toBe(true);
        expect(attack.length).toBe(2);

        expect(result).toBeDefined();
        expect(mockOpponentGameboard.receiveAttack).toHaveBeenCalledWith(attack);

    });

    test('takeTurn doesn\'t attack the same coordinates twice', () => {

        const mockOpponentGameboard = {
            receiveAttack: jest.fn().mockReturnValue('dummyResult'),
        };

        const player = Player(mockOpponentGameboard);

        const previousAttacks = [];

        for (let i = 0; i < 10; i++) {
            const { attack, result } = player.takeTurn();

            expect(previousAttacks.includes(attack)).toBe(false);

            previousAttacks.push(attack);

            expect(result).toBeDefined();
            expect(mockOpponentGameboard.receiveAttack).toHaveBeenCalledWith(attack);
        }

    });
})