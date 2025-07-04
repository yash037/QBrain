import React from "react";
import DateUtil from "../../Utils/DateUtil";
import Emoji from "../Layout/Emoji";
import { Link } from "react-router-dom";

const QuizInfo = (props) => {
  return (
    <React.Fragment>
      <tr style={{}}>
        <th
          scope="row"
          className="counterCell"
          style={{
            fontFamily: `"Lexend Deca", sans-serif`,
            fontSize: "14px",
            fontWeight: "bold",
          }}
        ></th>
        <td
          className="option-name"
          style={{
            fontFamily: `"Lexend Deca", sans-serif`,
            color: "var(--qbrain-bg-dark)",
          }}
        >
          {props.title}
        </td>
        <td
          style={{
            fontFamily: `"Roboto", sans-serif`,
            color: "dimgray",
          }}
        >
          {DateUtil.getFormattedDateTime(props.date)}
        </td>
        <td
          className="option-dropdown"
          style={{ color: "var(--qbrain-bg-dark" }}
        >
          {props.participated}
        </td>
        <td
          className="option-dropdown"
          style={{ color: "var(--qbrain-bg-dark" }}
        >
          {props.flawless}
        </td>
        <td
          style={{
            fontFamily: `"Lexend Deca", sans-serif`,
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          <span
            style={{
              margin: "8px",
            }}
          >
            <Emoji emoji="🧲" />
          </span>
          {props.id}
        </td>
        <td>
          <Link
            to={`/leaderboard/${props.id}`}
            style={{
              background: "#6366f1",
              color: "white",
              padding: "5px 10px",
              borderRadius: "8px",
              fontSize: "13px",
              textDecoration: "none",
            }}
          >
            View
          </Link>
        </td>
      </tr>
      {/* <div className="row">
        <div className="col-sm-5 option-name">{props.title}</div>
        <div
          className="col-sm-2 option-dropdown"
          style={{ color: "var(--qbrain-bg-dark" }}
        >
          {props.participated}
        </div>
        <div
          className="col-sm-2 option-dropdown"
          style={{ color: "var(--qbrain-bg-dark" }}
        >
          {props.flawless}
        </div>
        <div className="col-sm-3">
          <div className="card">
            <div
              className="option-dropdown"
              style={{
                fontSize: "14px",
                width: "100%",
              }}
            >
              <span
                style={{
                  margin: "8px",
                }}
              >
                <Emoji emoji="🧲" />
              </span>
              {props.id}
            </div>
          </div>
        </div>
      </div> */}
      {/* <hr /> */}
    </React.Fragment>
  );
};

export default QuizInfo;
