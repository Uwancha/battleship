function createAIPlayer(opponentGameboard) {
    const attackedCoordinates = new Set();

    function randomAttack() {
        let availableCoordinates = [];
        
        for (let row = 0; row < 10; row++) {
            for (let col = 0; col < 10; col++) {
                const coordinates = [row, col];
                if (!attackedCoordinates.has(JSON.stringify(coordinates))) {
                    availableCoordinates.push(coordinates);
                }
            }
        }

        if (availableCoordinates.length === 0) {
            return null;
        }

        const randomIndex = Math.floor(Math.random() * availableCoordinates.length);

        return availableCoordinates[randomIndex];
    };

    function takeTurn() {

        let attack;
        let result;
        do {
            attack = randomAttack();
            if (attack === null) {
                result = "All coordinates attacked";
            } else {
                result = opponentGameboard.receiveAttack(attack);
            }
        } while (result === "Already attacked");

        if (attack !== null) {
            attackedCoordinates.add(JSON.stringify(attack));
        }
        
        return { attack,  result };
    };
 
    return { takeTurn };
};

function createHumanPlayer(opponentGameboard) {
    function takeTurn(attackCoordinates) {
      const result = opponentGameboard.receiveAttack(attackCoordinates);
      return { attack: attackCoordinates, result };
    }
  
    return { takeTurn };
  }
  

export { createAIPlayer, createHumanPlayer };