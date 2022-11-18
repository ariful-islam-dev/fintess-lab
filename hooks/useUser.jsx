import { useEffect, useState } from "react";
import { getLocalStore, removeLocalStorage } from "../utils/storage";

const useUser = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const userData = getLocalStore("user");
    setUser(userData);
  }, []);
  const handleLogout = () => {
    removeLocalStorage("user");
  };

  const handleLogin = (user) => {};
  const handleSignUp = (user) => {};
  return {
    user,
    handleLogout,
    handleSignUp,
    handleLogin,
  };
};

export default useUser;
