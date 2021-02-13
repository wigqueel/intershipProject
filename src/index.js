import Draw from './drawCalendar'
import css from './main.css'
const draw = new Draw();


const calendar = document.querySelector("#calendar")
const members = document.querySelector("#members")

let days = ["Mon", "Tue", "Wed", "Thu", "Fri"]
let usersStart = {All:{0 : "A", 1: "B", 2 : "C", 3 : "D" , 13 : "E", 24 : "G"},Maria: {1: "Project A" , 37 : "Project C"}, Anya: {5: "Project A" , 6 : "Project B"}}
let hours = ["10:00", "11:00", "12:00","13:00","14:00","15:00","16:00","17:00","18:00"]

if(!window.localStorage.getItem('users')) {
    window.localStorage.setItem('users', JSON.stringify(usersStart));
    window.localStorage.setItem('days', JSON.stringify(days));
    window.localStorage.setItem('hours', JSON.stringify(hours));
}

let users = JSON.parse(window.localStorage.getItem('users'))

for (let key in users) {
    members.insertAdjacentHTML("afterbegin", `<option value=${key} class="dropdown-item" >${key}</option>`);
}
draw.drawCalendar('All', users,days,hours)


members.addEventListener('change', function () {
    draw.drawCalendar(this.value,users,days,hours)
});




