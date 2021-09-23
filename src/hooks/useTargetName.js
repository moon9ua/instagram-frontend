import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const useTargetName = () => {
  const [targetName, setTargetName] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    setTargetName(pathname.substr(1));
  }, [pathname]);

  return targetName;
};

export default useTargetName;
