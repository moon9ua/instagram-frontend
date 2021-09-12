// const REGISTER = "localhost:8080/api/register";

const wait = (timeToDelay) => new Promise((resolve) => setTimeout(resolve, timeToDelay)); // 임시

export const register = async (user) => {
  try {
    /*
    const response = await fetch(REGISTER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(user),
    });
    const result = await response.json();
    return result; // result.message인가??? 나중에 수정...
    */

    await wait(1000);
    return "i'm token!!!";
  } catch (e) {
    console.error(e); // 임시
  }
};
