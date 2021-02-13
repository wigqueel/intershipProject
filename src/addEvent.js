
let users = JSON.parse(window.localStorage.getItem('users'));
let days = JSON.parse(window.localStorage.getItem('days'));
let hours = JSON.parse(window.localStorage.getItem('hours'));

console.log(users)

for (key in users) {
    document.querySelector("#users").insertAdjacentHTML("afterbegin", `<option value=${key} class="dropdown-item" >${key}</option>`);
}

for (let el = 0; el < days.length; el++) {
    document.querySelector("#days").insertAdjacentHTML("afterbegin", `<option value=${days[el]} class="dropdown-item" >${days[el]}</option>`);
}

for (let el = 0; el < hours.length; el++) {
    document.querySelector("#hours").insertAdjacentHTML("afterbegin", `<option value=${hours[el]} class="dropdown-item" >${hours[el]}</option>`);
}

let clicks = 0;
addButton.addEventListener('click', function () {
    if(document.querySelector("#workName").value){
    ++clicks;
    if(clicks >= 4){
        document.getElementById("underError").remove()
        --clicks;
    }
    let box = (hours.indexOf(document.getElementById("hours").value)*(days.length ) + days.indexOf( document.getElementById("days").value) )
    if(box in users[document.getElementById("users").value]){
        
        document.querySelector("#errorMessage").insertAdjacentHTML("afterbegin", `<div  id="underError"  style = "margin-bottom:1px; padding-bottom: 9px; padding-top: 8px;border-radius: 4px;background-color: red; opacity:65%; font-weight:bold; color:#daf3e9; padding-left: 5%; position:relative;padding-bottom: 12px;">
        This time is already busy
        <button type="button" id="closeError" class="btn "  style="margin: -5px 2px 0 0;background-color:black;color:white;float: right;">X</button>
        </div>
      `);
      document.getElementById("closeError").onclick = function(){document.getElementById("underError").remove(); clicks--;}
        
    }
    else{
        users[document.getElementById("users").value][box.toString()] = document.getElementById('workName').value;
        window.localStorage["users"] = JSON.stringify(users);
        location.href='http://127.0.0.1:5500/dist/index.html';
    }
}
else{
    alert("required field is empty")
}
});
