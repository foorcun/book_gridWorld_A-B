class State {
    constructor(no) {
      this.no = no;

      this.value=1;


    }
    actionNorth(newState,reward) {
      return newState;
    }

    actionSouth(newState,reward) {
        return newState,reward;
      }

      actionEast(newState,reward) {
        return newState,reward;
      }

      actionWest(newState,reward) {
        return newState,reward;
      }
  }