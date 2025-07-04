import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import NavBar from "../Layout/NavBar";

const Leaderboard = () => {
  const { quizId } = useParams();
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const authToken = sessionStorage.getItem("qbrain-authToken");
    axios
      .get(`/api/leaderboard/${quizId}`, {
        headers: {
          "auth-token": authToken,
        },
      })
      .then((res) => setLeaderboard(res.data))
      .catch((err) => console.error("Error fetching leaderboard:", err));
  }, [quizId]);

  return (
  <React.Fragment>
    <NavBar
      isLoggedIn={true}
      checkLogin={() => true}
      onLogout={() => {
        sessionStorage.clear();
        window.location.href = "/login";
      }}
    />

    <div className="bg" style={{ minHeight: "100vh", padding: "40px" }}>
      <div className="section" style={{ maxWidth: "800px", margin: "auto" }}>
        <h2 className="profile-name">🏆 Leaderboard</h2>
        <div className="profile-email">Quiz ID: {quizId}</div>

        {leaderboard.length === 0 ? (
          <div className="jumbo-subtitle" style={{ marginTop: "40px" }}>
            No participants yet for this quiz. Be the first one!
          </div>
        ) : (
          <table className="table mt-4">
            <thead className="count-title">
              <tr>
                <th scope="col">Rank</th>
                <th scope="col">Name</th>
                <th scope="col">Score</th>
                <th scope="col">Flawless</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence>
                {leaderboard.map((user, index) => (
                  <motion.tr
                    key={user._id || `${user.userId}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    style={{
                      backgroundColor:
                        index === 0
                          ? "var(--qbrain-light-purple)"
                          : "transparent",
                    }}
                  >
                    <th scope="row">{index + 1}</th>
                    <td className="option-name">{user.name}</td>
                    <td className="option-dropdown">{user.score}</td>
                    <td className="option-dropdown">
                      {user.flawless ? "✅" : "❌"}
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        )}
      </div>
    </div>
  </React.Fragment>
);
};

export default Leaderboard;
