import axios from "axios";

const AuthService = {
  register: async (request) => {
    return await axios
      .post("/api/auth/registration", request)
      .then((response) => {
        return true;
      })
      .catch((err) => {
        return false;
      });
  },
  login: async (request) => {
    return await axios
      .post("/api/auth/login", request)
      .then((response) => {
        const authToken = response.headers["auth-token"];
        sessionStorage.setItem("qbrain-token", authToken);
        return { ...response.data, authToken };
      })
      .catch((err) => {
        console.log("Error", err);
        return false;
      });
  },
  logout: (request) => {
    sessionStorage.clear();
  },
};

export default AuthService;
