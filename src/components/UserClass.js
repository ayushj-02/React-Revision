import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      setInfo: {},
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/ayushj-02");
    const json = await data.json();
    this.setState({ setInfo: json });
  }
  render() {
    const { name, location, avatar_url } = this.state.setInfo;
    const { count } = this.state;
    return (
      <div
        style={{
          border: "1px solid red",
          padding: "1rem 2rem",
          marginBottom: "1rem",
        }}
      >
        <p style={{ marginBottom: 0 }}>Data coming from Class Component</p>
        {/* <div className="counter">
          <h1>{count}</h1>
          <button onClick={() => this.setState({ count: count + 1 })}>+</button>
          <button onClick={() => this.setState({ count: count - 1 })}>-</button>
        </div> */}
        <div className="user-card">
          <img src={avatar_url} alt="" />
          <div>
            <h1 className="name">Name : {name}</h1>
            <h2>Location : Bengaluru</h2>
            <h3>Contact : +91-9999999999</h3>
            <h3>
              Loggedin User :{" "}
              {
                <UserContext.Consumer>
                  {(data) => data.loggedInUser}
                </UserContext.Consumer>
              }
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default UserClass;
