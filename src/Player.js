function Player(opponentGameboard) {

    function randomAttack() {
        const row = Math.floor(Math.random() * 10);
        const col = Math.floor(Math.random() * 10);

        return [row, col];
    };

    function takeTurn() {

        let attack;
        let result;
        do {
            attack = randomAttack();
            result = opponentGameboard.receiveAttack(attack);
        } while (result === "Already attacked");
        
        return { attack,  result };
    };

    return { takeTurn };

};

export { Player };