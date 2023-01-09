"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./app.css");
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== "object" && typeof obj !== "function")) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
const styles = {
  marginLeft: "5px",
  marginTop: "3px",
  height: "20px",
  width: "20px",
  borderRadius: "50%",
  cursor: "pointer",
  backgroundColor: "red",
};
function yearLabelCalculator(array) {
  let result = [];
  array.forEach((i) => {
    result.push({
      index: i * 52 - 1,
      label: i,
    });
  });
  return result;
}
function MomentoMoriCalender({
  yearLabel = [5, 10, 15, 20, 30, 40, 50, 60, 70, 80],
  boxColorOption = ["#4ea69d", "#b350aa", "#a5c45a", "#a1405d"],
  defaultBoxColor = "#4ea69d",
  dateOfBirth = "",
  showDateInput = true,
  title = "Momento Mori Life Calender",
}) {
  var _boxColorOption$;
  const [dob, setDob] = (0, _react.useState)(dateOfBirth);
  const [boxColor, setBoxColor] = (0, _react.useState)(
    (_boxColorOption$ =
      boxColorOption === null || boxColorOption === void 0
        ? void 0
        : boxColorOption[0]) !== null && _boxColorOption$ !== void 0
      ? _boxColorOption$
      : defaultBoxColor
  );
  const [week, setWeek] = (0, _react.useState)([]);
  // 2023-01-12
  const yearsToShowOnRightSide = yearLabelCalculator(yearLabel);
  function weeksInLife(dob, boxColor) {
    const today = new Date();
    const start = new Date(dob);
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
    setDob(dateOfBirth);
  }, [dateOfBirth]);
  (0, _react.useEffect)(() => {
    setWeek(weeksInLife(dob, boxColor));
  }, [dob, dateOfBirth, boxColor]);
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    /*#__PURE__*/ _react.default.createElement(
      "div",
      {
        className: "container",
      },
      /*#__PURE__*/ _react.default.createElement(
        "div",
        {
          style: {
            marginLeft: "15px",
            marginTop: "30px",
            width: "80vw",
          },
        },
        /*#__PURE__*/ _react.default.createElement(
          "div",
          {
            style: {
              display: "flex",
              justifyContent: "space-between",
              marginRight: "20px",
            },
          },
          /*#__PURE__*/ _react.default.createElement(
            "div",
            {
              style: {
                width: "25%",
              },
            },
            showDateInput &&
              /*#__PURE__*/ _react.default.createElement(
                _react.default.Fragment,
                null,
                /*#__PURE__*/ _react.default.createElement(
                  "span",
                  null,
                  "Date of Birth:"
                ),
                " ",
                /*#__PURE__*/ _react.default.createElement("input", {
                  type: "date",
                  value: dob,
                  onChange: (e) => setDob(e.target.value),
                  style: {
                    borderRadius: "10px",
                  },
                })
              )
          ),
          /*#__PURE__*/ _react.default.createElement(
            "div",
            {
              style: {
                width: "60%",
                textAlign: "center",
                fontSize: "24px",
              },
            },
            title &&
              /*#__PURE__*/ _react.default.createElement("i", null, " ", title)
          ),
          /*#__PURE__*/ _react.default.createElement(
            "div",
            {
              style: {
                width: "20%",
              },
            },
            boxColorOption.length !== 0 &&
              /*#__PURE__*/ _react.default.createElement(
                "div",
                {
                  style: {
                    display: "flex",
                    justifyContent: "end",
                  },
                },
                boxColorOption.map((color) => {
                  return /*#__PURE__*/ _react.default.createElement("div", {
                    key: color,
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
        )
      ),
      /*#__PURE__*/ _react.default.createElement(
        "div",
        {
          className: "calender",
        },
        week.map((item, index) => {
          let sixMonth = index % 26 === 0;
          let rowSpace = (index + 1) % 520 === 0;
          return /*#__PURE__*/ _react.default.createElement(
            _react.default.Fragment,
            null,
            /*#__PURE__*/ _react.default.createElement(
              "div",
              {
                key: item.date,
                title: item.date !== "Invalid Date" && item.date.slice(4, 15),
                className: "week-cell",
                style: {
                  marginBottom: rowSpace && "10px",
                  marginLeft: sixMonth && "8px",
                  backgroundColor: item.color,
                },
              },
              index % 52 === 0 &&
                /*#__PURE__*/ _react.default.createElement(
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
              yearsToShowOnRightSide.map((year) => {
                if (year.index === index)
                  return /*#__PURE__*/ _react.default.createElement(
                    "h6",
                    {
                      key: year.label,
                      style: {
                        fontSize: "12px",
                        marginLeft: "15px",
                        fontWeight: "600",
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
var _default = MomentoMoriCalender;
exports.default = _default;
