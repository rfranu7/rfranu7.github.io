export default class BookTime {
    bookings;

    timeslots = ["9:00AM-10:00AM", "10:00AM-11:00AM", "11:00AM-12:00PM", "1:00PM-2:00PM", "2:00PM-3:00PM", "3:00PM-4:00PM", "4:00PM-5:00PM", "5:00PM-6:00PM", "6:00PM-7:00PM"]
    timeslotsShort = ["9:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]
    constructor(bookings) {
        this.bookings = bookings;
        this.sortDate();
    }

    sortDate(){
        this.bookings.sort(function (a, b) {
            var key1 = new Date(a.data.date);
            var key2 = new Date(b.data.date);
        
            if (key1 < key2) {
                return -1;
            } else if (key1 == key2) {
                return 0;
            } else {
                return 1;
            }
        });
    }
    checkBookingDate(date) {
        // RESET TIMESLOT DISABLED
        const timeslots = document.querySelectorAll(".time-btn");
        timeslots.forEach(element => {
            element.removeAttribute('disabled');
        });

        this.bookings.forEach(element => {
            const bookingDate = new Date(element.data.date);
            const bookingTime = element.data.time;

            if(bookingDate.toDateString() === date.toDateString()){
                console.log("same day");
                const timeslots = document.querySelectorAll(".time-btn");
                timeslots.forEach(element => {
                    element.removeAttribute('disabled');
                    if(element.dataset.time == bookingTime){
                        console.log(bookingTime);
                        console.log(element.dataset.time);
                        element.setAttribute('disabled', 'true');
                    }
                });
            }
        });
    }
    


}