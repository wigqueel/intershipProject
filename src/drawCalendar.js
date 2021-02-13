

export default class DrawCalendar{
    isSelected  (box, key, users) {
        return users[key].hasOwnProperty(box)
    }
    
    drawCalendar(boxesToSelect, users, days, hours){
    function deleteButton(box, boxesToSelect){
            delete users[boxesToSelect.toString()][box.toString()]
            window.localStorage["users"] =JSON.stringify( users)
            draw.drawCalendar(boxesToSelect,users,days,hours)
        }
    if(document.querySelector("#underCalendar") != null){
        let underCalendar =  document.querySelector("#underCalendar")
        underCalendar.parentNode.removeChild(underCalendar);
    }
    let isSkiped = false
    calendar.insertAdjacentHTML("beforeend", `<div id = "underCalendar" >  </div>`);
    document.querySelector("#underCalendar").insertAdjacentHTML("beforeend", `<div class = "box font-weight-bold" style="background-color: lightgray" > Time </div>`)
    for (let col = 0; col < days.length; col++) {
        document.querySelector("#underCalendar").insertAdjacentHTML("beforeend", `<div class = "box font-weight-bold" style="background-color: lightgray" > ${days[col]} </div>`);
    }
    for (let box = 0, i= 0; box <= 44; box++) {
        if(box%5 == 0 && !isSkiped){
            document.querySelector("#underCalendar").insertAdjacentHTML("beforeend", `<div class = "box" >${hours[i]} </div>`);
            isSkiped = true
            --box;
            ++i;
        }
        else{
            if(this.isSelected(box, boxesToSelect, users))
            {
                document.querySelector("#underCalendar").insertAdjacentHTML("beforeend", `<div class = "box selected" > ${ users[boxesToSelect][box] ? users[boxesToSelect][box]  : "" }  <button id= 'deleteButton' value=${box} onClick="deleteButton('${box}' ,'${boxesToSelect}', '${users}', '${days}','${hours}')" type=''button' class='btn  btn-sm' style = 'opacity:40%;background-color:lightgreen;float:right; padding: 1px 4px;'>X</button> </div>`);
                
            }
            else{
                document.querySelector("#underCalendar").insertAdjacentHTML("beforeend", `<div class = "box not-selected" > ${ users[boxesToSelect][box] ? users[boxesToSelect][box]  : "" }  </div>`);
                
            }
            isSkiped = false
    }
    }

}
}