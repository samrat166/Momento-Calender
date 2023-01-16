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
function weeksInLife(param) {
  const dateOfBirth = new Date(param.dateOfBirth);
  const defaultColor = param.defaultColor;
  const events = param.events.length === 0 ? [] : param.events;
  const today = new Date();
  const end = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const weeks = [];
  let start = new Date(dateOfBirth);
  for (let i = 0; i < 4160; i++) {
    let date = start.toString();
    let color = defaultColor;
    let event;
    let eventExist = false;
    let eventDescription = "No event";
    let weekEvent = events.find((e) => {
      const eventStart = new Date(e.startingDate);
      const eventEnd = new Date(e.endDate);
      if (eventStart <= start && start <= eventEnd) {
        eventExist = true;
        color = e.color;
        eventDescription = e.description;
        return true;
      }
    });
    if (start <= end && start.getTime() <= end.getTime()) {
      if (eventExist) {
        weeks.push({
          event: {
            description: eventDescription,
          },
          color: color,
          date: date,
        });
      } else {
        weeks.push({
          color: color,
          date: date,
          event: {
            description: eventDescription,
          },
        });
      }
    } else {
      weeks.push({
        color: "white",
        date: date,
        event: {
          description: `You haven't lived`,
        },
      });
    }
    start.setDate(start.getDate() + 7);
  }
  return weeks;
}
function MomentoMoriCalender({
  yearLabel = [],
  dateOfBirth = "",
  events = [],
  showStartingOfYear = true,
  defaultColor = "pink",
}) {
  const [week, setWeek] = (0, _react.useState)(
    weeksInLife({
      dateOfBirth,
      events,
    })
  );
  const yearsToShowOnRightSide = yearLabelCalculator(yearLabel);
  (0, _react.useEffect)(() => {
    setWeek(
      weeksInLife({
        dateOfBirth,
        events,
        defaultColor,
      })
    );
  }, [dateOfBirth, events]);
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    /*#__PURE__*/ _react.default.createElement(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "center",
        },
      },
      /*#__PURE__*/ _react.default.createElement(
        "div",
        {
          style: {
            marginTop: "10px",
            marginLeft: showStartingOfYear && "70px",
          },
        },
        /*#__PURE__*/ _react.default.createElement(
          "div",
          {
            className: "calender",
          },
          week.map((item, index) => {
            var _item$event;
            let rowSpace = (index + 1) % 520 === 0;
            return /*#__PURE__*/ _react.default.createElement(
              _react.default.Fragment,
              null,
              /*#__PURE__*/ _react.default.createElement(
                "div",
                {
                  key: item.date,
                  title:
                    item === null || item === void 0
                      ? void 0
                      : (_item$event = item.event) === null ||
                        _item$event === void 0
                      ? void 0
                      : _item$event.description,
                  className: "week-cell",
                  style: {
                    marginBottom: rowSpace && "4px",
                    backgroundColor: item.color,
                  },
                },
                showStartingOfYear &&
                  index % 52 === 0 &&
                  /*#__PURE__*/ _react.default.createElement(
                    "h6",
                    {
                      style: {
                        fontSize: "9px",
                        marginLeft: "-58px",
                      },
                    },
                    /*#__PURE__*/ _react.default.createElement(
                      "i",
                      null,
                      item.date !== "Invalid Date" && item.date.slice(4, 15)
                    )
                  ),
                yearsToShowOnRightSide.length !== 0 &&
                  yearsToShowOnRightSide.map((year) => {
                    if (year.index === index)
                      return /*#__PURE__*/ _react.default.createElement(
                        "h6",
                        {
                          key: year.label,
                          style: {
                            fontSize: "10px",
                            marginLeft: "14px",
                            fontWeight: "600",
                            marginTop: "-2px",
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
    )
  );
}
var _default = MomentoMoriCalender;
exports.default = _default;
