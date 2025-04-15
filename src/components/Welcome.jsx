import React from "react";

class Welcome extends React.Component {
  state = {
    name: "Sara",
    age: 27,
    occupation: "Software Engineer",
    hobbies: ["Reading", "Traveling", "Cooking"],
  };

  changeName = () => {
    return this.setState({ name: "John" });
  };

  render() {
    return (
      <div>
        <h1>
          Hello {this.state.name}! You are {this.state.age} years old and you
          work as a {this.state.occupation}.
        </h1>
        <p>
          Your hobbies are:
          <ul>
            {this.state.hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </p>
        <button
          onClick={this.changeName}
          className="px-6 py-2 border-none bg-amber-400 rounded-full"
        >
          Change Name
        </button>
      </div>
    );
  }
}
export default Welcome;
