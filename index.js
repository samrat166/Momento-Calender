"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;
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
const yearLabel = [
  {
    index: 259,
    label: 5,
  },
  {
    index: 519,
    label: 10,
  },
  {
    index: 779,
    label: 15,
  },
  {
    index: 1039,
    label: 20,
  },
  {
    index: 1299,
    label: 25,
  },
  {
    index: 1819,
    label: 35,
  },
  {
    index: 2599,
    label: 50,
  },
  {
    index: 3379,
    label: 65,
  },
  {
    index: 4159,
    label: 80,
  },
];
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
      let date = start.toString();
      if (start <= end && start.getTime() <= end.getTime()) {
        color = boxColor;
      } else {
        color = "white";
      }
      weeks.push({
        date: date,
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
            marginTop: "30px",
            width: "80vw",
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
              " Momento Mori Life Calender"
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
          className: "calender",
        },
        week.map((item, index) => {
          let sixMonth = index % 26 === 0;
          let rowSpace = (index + 1) % 520 === 0;
          console.log(item.date);
          return /*#__PURE__*/ React.createElement(
            React.Fragment,
            null,
            /*#__PURE__*/ React.createElement(
              "div",
              {
                title: item.date !== "Invalid Date" && item.date.slice(4, 15),
                className: "week-cell",
                style: {
                  marginBottom: rowSpace && "10px",
                  marginLeft: sixMonth && "8px",
                  backgroundColor: item.color,
                },
              },
              index % 52 === 0 &&
                /*#__PURE__*/ React.createElement(
                  "h6",
                  {
                    style: {
                      fontSize: "10px",
                      marginLeft: "-60px",
                    },
                  },
                  item.date !== "Invalid Date" && item.date.slice(4, 15)
                ),
              " ",
              yearLabel.map((year) => {
                if (year.index === index)
                  return /*#__PURE__*/ React.createElement(
                    "h6",
                    {
                      style: {
                        fontSize: "14px",
                        marginLeft: "15px",
                        fontWeight: "bold",
                        marginTop: "-3px",
                      },
                    },
                    year.label
                  );
              })
            )
          );
        })
      )
    )
  );
}
var _default = MomentoMori;
exports.default = _default;
