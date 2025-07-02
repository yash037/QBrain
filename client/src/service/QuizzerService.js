import axios from "axios";

const QuizService = {
  getQuizzer: async (user_id, authToken) => {
    return await axios
      .get("/api/quizzers/" + user_id, {
        headers: {
          "auth-token": authToken,
        },
      })
      .then((response) => {
        return { ...response.data };
      })
      .catch((err) => {
        console.log("Error", err);
        return false;
      });
  },
};

export default QuizService;
