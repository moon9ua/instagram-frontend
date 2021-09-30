import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const useTargetUser = () => {
  const [targetUser, setTargetUser] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    setTargetUser(pathname.substr(1));
  }, [pathname]);

  return targetUser;
};

export default useTargetUser;
