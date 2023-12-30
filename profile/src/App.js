import React, { Component } from "react";
import styles from "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    // Initialize state with person details, show state, and time interval
    this.state = {
      person: {
        fullName: "Jane Hawks",
        bio: "Mustang",
        imgSrc: "photo/lady.svg",
        profession: "Software Engineer",
      },
      show: false,
      timeInterval: 0,
    };
  }

  componentDidMount() {
    // Set up an interval to update the time interval every second
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeInterval: prevState.timeInterval + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // Clear the interval to prevent memory leaks when the component is unmounted
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    // Toggle the show state when the button is clicked
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    // Destructure state for easier use in the render method
    const { person, show, timeInterval } = this.state;

    return (
      <div>
        {/* Button to toggle the visibility of the person's profile */}
        <button onClick={this.toggleShow}>Toggle</button>

        {/* Conditionally render the person's profile based on the show state */}
        {show && (
          <div className="persons">
            <p className="texts">Full Name: {person.fullName}</p>
            <p className="texts">Bio: {person.bio}</p>
            <img src={person.imgSrc} alt="Profile" />
            <p className="texts">Profession: {person.profession}</p>
          </div>
        )}

        {/* Display the time interval since the component was mounted */}
        <p className="Time">Time Interval: {timeInterval} seconds</p>
      </div>
    );
  }
}

export default App;
