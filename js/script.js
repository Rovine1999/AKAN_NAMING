const daysOfTheWeek=["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday", "Saturday"];
const maleNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleName=["Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Afua","ama"];


function myFunction() {
    const year = parseInt(document.getElementById("year").value);
    const month = parseInt(document.getElementById("month").value);
    const day = parseInt(document.getElementById("day").value);
    const female =document.getElementById("female");
    const male = document.getElementById("male");


    if(year == "" || year < 1 || year > 2025 || year !== year ) {
        alert("Please Enter A Valid Year");
    } else if(month =="" || month < 1 || month > 12 || month !== month) {
        alert("Please Enter A Valid Month Between 1 And 12");
    } else if(day =="" || day < 1 || day > 31 || day !== day) {
        alert("Please A Valid Day Between 1 and 31");
    }
    
            const a = Math.floor((14 - month) / 12);
            const y = year - a;
            const m = month + 12 * a - 2;
            const d = (day + y + Math.floor(y / 4) - Math.floor(y / 100) +
            Math.floor(year / 400) + Math.floor((31 * m) / 12)) % 7;

            if(male.checked==true && female.checked==false){
                alert("Your Akan Name Is  " + maleNames [d] + "   You Were Born On " + daysOfTheWeek[d]);
            } else if(female.checked==true && male.checked==false){
                alert("Your Akan Name Is  " + femaleName [d] + "  You Were Born On " + daysOfTheWeek[d]);
            }
}