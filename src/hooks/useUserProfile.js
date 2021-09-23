import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { endLoading, startLoading } from "../modules/loading";
import { getUserAPI } from "../utils/API";

const useUserProfile = (targetName) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.session);

  const [error, setError] = useState("");
  const [info, setInfo] = useState({});

  useEffect(() => {
    const doGetUserAPI = async (targetName) => {
      dispatch(startLoading());
      setError("");
      try {
        const info = user.username === targetName ? { ...user } : await getUserAPI(targetName);
        dispatch(endLoading());
        setError("");
        setInfo({ ...info });
      } catch (e) {
        dispatch(endLoading());
        setError(e.message);
      }
    };

    if (targetName) doGetUserAPI(targetName); // 진짜 잘 모르겠다..!!! 이렇게 쓰면 안될 것 같은데...
  }, [targetName, dispatch, user]);

  return [error, info];
};

export default useUserProfile;
