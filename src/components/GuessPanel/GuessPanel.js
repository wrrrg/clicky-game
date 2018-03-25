import React from "react";

// By extending the React.Component class, Counter inherits functionality from it
class GuessPanel extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    guessedArr: []
  };

// when a friend is guessed, it is added to the guess array
  addFriend = () => {
    // We always use the setState method to update a component's state
    let guessedArr = [...this.state.guessedArr];

    guessedArr.push({
      id: this.id
    });

    this.setState({guessedArr});
  };



  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div>This is a game message!</div>
    );
  }
}

export default GuessPanel;
