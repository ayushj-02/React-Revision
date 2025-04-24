import { useEffect, useState } from "react";

const useStatusOnline = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => setOnlineStatus(true));
    window.addEventListener("offline", () => setOnlineStatus(false));
  }, []);
  return onlineStatus;
};

export default useStatusOnline;
