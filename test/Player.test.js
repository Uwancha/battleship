import { createAIPlayer, createHumanPlayer } from "../src/Player"

describe('Player', () => {

    const mockOpponentGameboard = {
        receiveAttack: jest.fn().mockReturnValue('dummyResult'),
    };


    test('AI player takeTurn generates attack coordinates and returns the result of the attack',() => {
        
        const aiPlayer = createAIPlayer(mockOpponentGameboard);
        const { attack, result } = aiPlayer.takeTurn();

        expect(Array.isArray(attack)).toBe(true);
        expect(attack.length).toBe(2);

        expect(result).toBeDefined();
        expect(mockOpponentGameboard.receiveAttack).toHaveBeenCalledWith(attack);

    });

    test('Human player takeTurn uses provided attack coordinates and returns the result of the attack', () => {
        const humanPlayer = createHumanPlayer(mockOpponentGameboard);
        const attackCoordinates = [2, 3];
        const { attack, result } = humanPlayer.takeTurn(attackCoordinates);

        expect(attack).toEqual(attackCoordinates);

        expect(result).toBeDefined();
        expect(mockOpponentGameboard.receiveAttack).toHaveBeenCalledWith(attackCoordinates);
        
    });

    test('AI player\'s takeTurn doesn\'t attack the same coordinates twice', () => {

        const mockOpponentGameboard = {
            receiveAttack: jest.fn().mockReturnValue('dummyResult'),
        };

        const aiPlayer = createAIPlayer(mockOpponentGameboard);

        const previousAttacks = [];

        for (let i = 0; i < 10; i++) {
            const { attack, result } = aiPlayer.takeTurn();

            expect(previousAttacks.includes(attack)).toBe(false);

            previousAttacks.push(attack);

            expect(result).toBeDefined();
            expect(mockOpponentGameboard.receiveAttack).toHaveBeenCalledWith(attack);
        };

    });
});


