import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [status, setStatus] = useState(1);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setStatus(0);
    });

    window.addEventListener("online", () => {
      setStatus(1);
    });
  }, []);

  return status;
};

export default useOnlineStatus;
