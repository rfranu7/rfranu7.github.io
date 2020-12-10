import { request } from './db.js';
import BookTime from './book-time.js';

export default class Calendar {
    month;
    year;
    today; // Date Object

    bookings;

    month_list = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    month_list_short = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
    days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    constructor(month, year, today) {
        this.month = month;
        this.year = year;
        this.today =  today;
            
        this.generateBooking();
    }

    async generateBooking(){
        const books = await request('get-all-booking');
        this.bookings = new BookTime(books.bookings);
    }

    fillCalendar() {
        const firstDay = new Date(this.year, this.month, 1);
        const startingDay = firstDay.getDay();

        var monthLength = this.days_in_month[this.month];

        if (this.month == 1) {
            if((this.year % 4 == 0 && this.year % 100 != 0) || this.year % 400 == 0){
                monthLength = 29;
            }
        }

        document.getElementById("monthLabel").textContent = this.month_list[this.month]+" "+this.year;
        var html = '';
        var day = 1;
        for (var i = 0; i < 9; i++) {

            for (var j = 0; j <= 6; j++) {
                if(day == this.today.getDate() && this.month == this.today.getMonth() && this.year == this.today.getFullYear()){
                    html += '<li class="day today""><a class="scnd-font-color">';
                    if (day <= monthLength && (i > 0 || j >= startingDay)) {
                        html += day;
                        day++;
                    }
                } else {
                    if (day <= monthLength && (i > 0 || j >= startingDay)) {
                        html += '<li class="day"><a class="scnd-font-color">';
                        html += day;
                        day++;
                    }
                }

                html += '</a></li>';
            }

            if (day > monthLength) {
                break;
            }
        }

        const body = document.getElementById("calBody");
        body.innerHTML = html;

        const month = new Date(document.getElementById("monthLabel").textContent);
        const allDay = document.querySelectorAll('.day');
        allDay.forEach(element => {
            element.addEventListener("click", (e) => {
                const addDay = e.target.textContent-1;
                const chosenDate = new Date(month.getFullYear(),month.getMonth(), month.getDate()+addDay);
                if(chosenDate<this.today){
                    alert("can't select previous day");
                    return;
                }
                allDay.forEach(element => {
                    element.classList.remove("selectedDay");
                });
                e.target.parentNode.classList.add("selectedDay");
                this.bookings.checkBookingDate(chosenDate)
            });
        });
    }

    prevMonth(){
        this.month = this.month-1;
        if(this.month < 0){
            this.month = 11;
            this.year =  this.year-1;
        }
        this.fillCalendar()
    }

    nextMonth(){
        this.month = this.month+1;
        if(this.month == 12){
            this.month = 0;
            this.year =  this.year+1;
        }
        this.fillCalendar()
    }

    getToday(){
        this.year = this.today.getFullYear();
        this.month = this.today.getMonth();
        this.fillCalendar()
    }
}