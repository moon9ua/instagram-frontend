import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { endLoading, startLoading } from "../modules/loading";
import { getUserAPI } from "../utils/API";

const useUserProfile = (targetName) => {
  const dispatch = useDispatch();

  const [error, setError] = useState("");
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const doGetUserAPI = async (targetName) => {
      dispatch(startLoading());
      setError("");
      try {
        const info = await getUserAPI(targetName);
        dispatch(endLoading());
        setError("");
        setProfile({ ...info });
      } catch (e) {
        dispatch(endLoading());
        setError(e.message);
      }
    };

    if (targetName) doGetUserAPI(targetName); // 진짜 잘 모르겠다..!!! 이렇게 쓰면 안될 것 같은데...
  }, [targetName, dispatch]);

  return [profile, error];
};

export default useUserProfile;
