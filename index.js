"use strict";

var _react = require("react");
const styles = {
  marginLeft: "5px",
  marginTop: "3px",
  height: "20px",
  width: "20px",
  borderRadius: "50%",
  cursor: "pointer",
  backgroundColor: "red",
};
function MomentoMori({
  boxColorOption = ["#4ea69d", "#b350aa", "#a5c45a", "#a1405d"],
}) {
  const [dateOfBirth, setDateOfBirth] = (0, _react.useState)();
  const [boxColor, setBoxColor] = (0, _react.useState)(
    boxColorOption === null || boxColorOption === void 0
      ? void 0
      : boxColorOption[0]
  );
  const [week, setWeek] = (0, _react.useState)([]);
  function weeksInLife(dateOfBirth, boxColor) {
    const today = new Date();
    const start = new Date(dateOfBirth);
    const end = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    const weeks = [];
    for (let i = 0; i < 4160; i++) {
      let color;
      if (start <= end && start.getTime() <= end.getTime()) {
        color = boxColor;
      } else {
        color = "white";
      }
      weeks.push({
        color: color,
      });
      start.setDate(start.getDate() + 7);
    }
    return weeks;
  }
  (0, _react.useEffect)(() => {
    setWeek(weeksInLife(dateOfBirth, boxColor));
  }, [dateOfBirth, boxColor]);
  return /*#__PURE__*/ React.createElement(
    React.Fragment,
    null,
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "container",
      },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          style: {
            marginLeft: "15px",
            marginTop: "20px",
          },
        },
        /*#__PURE__*/ React.createElement(
          "div",
          {
            style: {
              display: "flex",
              justifyContent: "space-between",
              marginRight: "20px",
            },
          },
          /*#__PURE__*/ React.createElement(
            "div",
            null,
            /*#__PURE__*/ React.createElement("span", null, "Date of Birth:"),
            " ",
            /*#__PURE__*/ React.createElement("input", {
              type: "date",
              onChange: (e) => setDateOfBirth(e.target.value),
              style: {
                borderRadius: "10px",
              },
            })
          ),
          /*#__PURE__*/ React.createElement(
            "h3",
            {
              style: {
                textAlign: "left",
              },
            },
            /*#__PURE__*/ React.createElement(
              "i",
              null,
              " Momento Mori Calender"
            )
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                display: "flex",
              },
            },
            /*#__PURE__*/ React.createElement("span", null, "Box Color:"),
            " ",
            boxColorOption.map((color) => {
              return /*#__PURE__*/ React.createElement("div", {
                style: {
                  ...styles,
                  backgroundColor: color,
                  border: boxColor !== color && "3px solid white",
                },
                onClick: () => setBoxColor(color),
              });
            })
          )
        )
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "calender mt-4",
        },
        week.map((item, index) => {
          let sixMonth = index % 26 === 0;
          let rowSpace = (index + 1) % 520 === 0;
          return /*#__PURE__*/ React.createElement(
            React.Fragment,
            null,
            /*#__PURE__*/ React.createElement(
              "div",
              {
                className: "week-cell",
                style: {
                  marginBottom: rowSpace && "10px",
                  marginLeft: sixMonth && "10px",
                  backgroundColor: item.color,
                },
              },
              " "
            )
          );
        })
      )
    )
  );
}
module.exports = MomentoMori;
