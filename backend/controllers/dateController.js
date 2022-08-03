
const getformattedMidnightDate = (newDate, addedDays, subtractMilliseconds) =>
{
   newDate.setDate(newDate.getDate() + addedDays)
   newDate.setHours(0,0,0,0)
   if(subtractMilliseconds != 0){
    newDate.setMilliseconds(newDate.getMilliseconds() - subtractMilliseconds)
   }
   newDate.setMinutes(newDate.getMinutes() - newDate.getTimezoneOffset())
   return newDate.toISOString()
};

const getformattedDate = (newDate, addedDays) =>
{
   newDate.setDate(newDate.getDate() + addedDays)
   newDate.setMinutes(newDate.getMinutes() - newDate.getTimezoneOffset())
   return newDate.toISOString()
};

module.exports = { getformattedMidnightDate, getformattedDate };