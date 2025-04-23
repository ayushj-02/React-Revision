import { useEffect, useState } from "react";

const User = () => {
  const [count, setCount] = useState(0);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    try {
      const data = await fetch("https://api.github.com/users/ayushj-02");
      const json = await data.json();
      setUserInfo(json);
    } catch (err) {
      throw err;
    }
  };

  console.log(userInfo);
  const { name, location, avatar_url } = userInfo;
  return (
    <div
      style={{
        border: "1px solid red",
        padding: "1rem 2rem",
        marginBottom: "1rem",
      }}
    >
      <p style={{ marginBottom: 0 }}>Data coming from Functional Component</p>
      {/* <div className="counter">
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div> */}
      <div className="user-card">
        <img src={avatar_url} alt="" />
        <div>
          <h1 className="name">Name : {name}</h1>
          <h2>Location : Bengaluru</h2>
          <h3>Contact : +91-9999999999</h3>
        </div>
      </div>
    </div>
  );
};

export default User;
