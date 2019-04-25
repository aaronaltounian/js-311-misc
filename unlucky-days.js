// Create a function to find how many Friday the 13ths there are in a given year.

// initialize a variable to hold days in each month:
let daysInMonth = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
// initialize a variable to hold strings for each day:
let days = [ 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday' ];

function unluckyDays( year, startDay ) {
    // initialize the counter to hold how many Friday the 13ths:
    let counter = 0;
    
    // lowercase and trim the startDay parameter for easy comparison purposes:
    startDay = startDay.toLowerCase().trim();
    
    // create a variable to hold the index number of the day from the days array
    // (this is a roundabout way to get the number from a pure perspective, but assumes a human wouldn't type in '0' to denote 'Sunday' as an argument in the function):
    let dayOfWeek = days.indexOf(startDay);

    // check for leap year and if so set februrary days accordingly:
    if( year % 4 === 0 ) {
        daysInMonth[1] = 29;
    }

    // loop through the daysInMonth array to get each month's day count value:
    for( let i = 0; i < daysInMonth.length; i++ ) {
        // use that value to iterate as many times as there are days:
        for( let j = 1; j <= daysInMonth[i]; j++ ) {
            // check if it's the 13th day (j) and if the day is currently Friday (index position 5 in the days array):s
            if( j === 13 && dayOfWeek === 5 ) {
                // increment counter:
                counter++;
            }
            // increment the day unless it's Saturday (6), in which case set it to Sunday (0):
            dayOfWeek === 6 ? dayOfWeek = 0 : dayOfWeek++;
        }
    }
    return `The year ${year} has ${counter} Friday the 13ths!`;
}

console.log( unluckyDays(2015, 'thursday') );