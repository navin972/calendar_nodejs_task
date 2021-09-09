//API to send Day Of the Week, Day
//request object for API is {"Date":"2011-10-05T14:48:00.000Z"}
const moment = require("moment");
let calendar = function (request, response) {
  const date = moment(request.body.Date);
  const validateDate = date.isValid(date);
  if (validateDate) {
    dayName = date.format("dddd");
    const dayNumber = date.format("d");
    response.status(200).json({ dayName: dayName, dayNumber: dayNumber });
  } else {
    response.status(400).json({ errMessage: "Not a valid date." });
  }
};
module.exports = { calendar };
