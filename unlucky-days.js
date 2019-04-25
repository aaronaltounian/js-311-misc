let daysInMonth = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
let days = [ 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday' ];

function unluckyDays( year, startDay ) {
    let counter = 0;
    startDay = startDay.toLowerCase().trim();
    let dayOfWeek = days.indexOf(startDay);
    // check for leap year and if so set februrary days:
    if( year % 4 === 0 ) {
        daysInMonth[1] = 29;
    }
    // loop through the daysInMonth array to get each month's day count value:
    for( let i = 0; i < daysInMonth.length; i++ ) {
        // use that value to iterate as many times as there are days:
        for( let j = 1; j <= daysInMonth[i]; j++ ) {
            if( j === 13 && dayOfWeek === 5 ) {
                counter++;
            }
            dayOfWeek === 6 ? dayOfWeek = 0 : dayOfWeek++;
        }
    }
    return `The year ${year} has ${counter} Friday the 13ths!`;
}

console.log( unluckyDays(2015, 'thursday') );