/* eslint-disable */
console.log(`Mode => ${process.env.REACT_APP_MODE}`);
const Constants = {
  SERVER_URL : "http://localhost:8283/exam/hub/api/v1",
  SECRET_HASH_KEY: process.env.REACT_APP_SECRET_KEY,
};

export default Constants;
