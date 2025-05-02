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
    <div className="border border-gray-50 px-3 py-2 mb-4 mx-5 bg-gray-100">
      {/* <p style={{ marginBottom: 0 }}>Data coming from Functional Component</p> */}
      {/* <div className="counter">
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div> */}
      <div className="user-card flex justify-start">
        <img src={avatar_url} alt="" className="w-20  mr-[1rem]" />
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
