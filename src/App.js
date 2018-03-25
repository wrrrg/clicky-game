import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import friends from "./friends.json";
import "./App.css";

// to randomize the friend cards
function randomize(friends){
  for(let i=friends.length -1; i> 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = friends[i];
    friends[i] = friends[j];
    friends[j] = temp;
  }
  return friends;
};

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    gameText: "Click each image once, but only once. Try to get all 12 without repeating one!",
    topScore: 0,
    currentScore: 0,
    unselected: friends
  };

  updateScore = image => {
    const findImage = this.state.unselected.find(item => item.image === image);
    if(findImage === undefined){
      this.setState({
        gameText: "Game over! You clicked that one twice.",
        currentScore: 0,
        topScore: (this.state.currentScore > this.state.topScore) ? this.state.currentScore : this.state.topScore,
        friends: friends,
        unselected: friends
      });
      this.moveImage();
    }
    else {
      const newFriends = this.state.unselected.filter(item => item.image !==image);
      this.setState({
        gameText: "Nice going!",
        currentScore: this.state.currentScore+1,
        friends: friends,
        unselected: newFriends
      });
      this.moveImage();
    }

  };
// just a nifty little function to shuffle the friend cards at the end of the score update
  moveImage = () => {
    const shuffledFriends = randomize(this.state.friends);
    this.setState({
      friends: shuffledFriends
    });
  };




  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Nav
          currentScore = {this.state.currentScore}
          gameText = {this.state.gameText}
          topScore = {this.state.topScore}/>
        {this.state.friends.map(friend => (
          <FriendCard
            updateScore={this.updateScore}
            moveImage={this.moveImage}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
