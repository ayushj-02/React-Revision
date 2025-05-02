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
      <div className="border border-gray-50 px-3 py-2 mb-4 mx-5 bg-gray-100">
        {/* <p style={{ marginBottom: 0 }}>Data coming from Class Component</p> */}
        {/* <div className="counter">
          <h1>{count}</h1>
          <button onClick={() => this.setState({ count: count + 1 })}>+</button>
          <button onClick={() => this.setState({ count: count - 1 })}>-</button>
        </div> */}
        <div className="user-card flex justify-start">
          <img src={avatar_url} alt="" className="w-20  mr-[1rem]" />
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
