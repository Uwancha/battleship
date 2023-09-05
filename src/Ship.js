function Ship(length) {
    if (length <= 0) return 'Invalid Ship';
    return {
      length,
      hit: 0,
      sunk: false,
  
      Hit() {
        this.hit += 1;
        return this.hit;
      },
  
      isSunk() {
        return this.hit >= this.length;
      },
    };
  }
  
  export { Ship };