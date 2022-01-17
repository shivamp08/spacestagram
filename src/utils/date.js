const getDateAsISOString = (date) => {
  var month = date.getMonth() + 1;
  var day = date.getDate();
  return `${date.getFullYear()}-${month > 9 ? month : "0" + month}-${
    day > 9 ? day : "0" + day
  }`;
};

const getDateAsPrettyString = (dateString) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(dateString + "T10:20:30Z");
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

export { getDateAsISOString, getDateAsPrettyString };
