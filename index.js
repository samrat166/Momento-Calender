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
function MomentoMoriCalender({
  yearLabel = [],
  dateOfBirth = "",
  events = [],
  showDateInput = true,
  showStartingOfYear = true,
}) {
  const [dob, setDob] = (0, _react.useState)(dateOfBirth);
  const [event, setEvent] = (0, _react.useState)(events);
  const [week, setWeek] = (0, _react.useState)([]);
  // 2023-01-12
  const yearsToShowOnRightSide = yearLabelCalculator(yearLabel);
  function weeksInLife(param) {
    const dateOfBirth = new Date(param.dateOfBirth);
    const events = param.events.length === 0 ? [] : param.events;
    const today = new Date();
    const end = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    const weeks = [];
    let start = new Date(dateOfBirth);
    for (let i = 0; i < 4160; i++) {
      let date = start.toString();
      let color = "#4ea69d";
      let event;
      let eventExist = false;
      for (let j = 0; j < events.length; j++) {
        const eventStart = new Date(events[j].startingDate);
        const eventEnd = new Date(events[j].endDate);
        if (eventStart <= start && start <= eventEnd) {
          eventExist = true;
          color = events[j].color;
          event = events[j];
          break;
        }
      }
      if (start <= end && start.getTime() <= end.getTime()) {
        if (eventExist) {
          weeks.push({
            event: event,
            color: color,
            date: date,
          });
        } else {
          weeks.push({
            color: color,
            date: date,
            event: {
              description: "No event",
            },
          });
        }
      } else {
        weeks.push({
          color: "white",
          date: date,
          event: {
            description: "You haven't lived",
          },
        });
      }
      start.setDate(start.getDate() + 7);
    }
    return weeks;
  }
  (0, _react.useEffect)(() => {
    setDob(dateOfBirth);
    setEvent(events);
  }, [dateOfBirth, events]);
  (0, _react.useEffect)(() => {
    setWeek(
      weeksInLife({
        dateOfBirth: dob,
        events: event,
      })
    );
  }, [dob, event]);
  console.log(week);
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
          )
        )
      ),
      /*#__PURE__*/ _react.default.createElement(
        "div",
        {
          className: "calender",
        },
        week.map((item, index) => {
          var _item$event;
          let sixMonth = index % 26 === 0;
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
                  marginBottom: rowSpace && "10px",
                  marginLeft: sixMonth && "8px",
                  backgroundColor: item.color,
                },
              },
              showStartingOfYear &&
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
