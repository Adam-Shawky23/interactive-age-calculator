const inputYear = document.getElementById('year-input')
const inputMonth = document.getElementById('month-input')
const inputDay = document.getElementById('day-input')
const resultYear = document.getElementById('years-word')
const resultMonth = document.getElementById('months-word')
const resultDay = document.getElementById('days-word')
const btn = document.getElementById("button")
const today = new Date()
let month = today.getMonth()+1 
let year = today.getFullYear()
let day = today.getDate()
let above = document.getElementsByClassName("above") 
let errorY = document.getElementById("error-y")
let errorM = document.getElementById("error-m")
let errorD = document.getElementById("error-d")




btn.addEventListener("click", ()=>{
    const months = (yearAge, oldMonth) => new Date(yearAge, oldMonth, 0).getDate();
    if (inputYear.value > year || inputYear.value < 1600)
     {
        above[2].style.color='hsl(0, 100%, 67%)'
        errorY.innerHTML="Please enter a valid year"
        
        
        
     }
    else{
        errorY.innerHTML=""
        above[2].style.color='grey'
        let yearAge = year-inputYear.value
        resultYear.innerText = yearAge
        
    }  

    if (inputMonth.value > 12 || inputMonth.value < 1){
        above[1].style.color='hsl(0, 100%, 67%)'
        errorM.innerHTML="Please enter a valid month"
        
    }
    else{
        above[1].style.color='grey'
        errorM.innerHTML=""
        let oldMonth = month -inputMonth.value
        if (oldMonth < 1){
            year--;
            oldMonth = 12- (-m);
  }
        resultMonth.innerText = oldMonth
    }
    if (inputDay.value > 31 || inputDay.value <1){
        errorD.innerHTML="Please enter a valid day"
        above[0].style.color='hsl(0, 100%, 67%)'
    }
    else{
        above[0].style.color='grey'
        errorD.innerHTML=""
        let dayAge = day - inputDay.value
        
        if (dayAge < 1) {
          month--;
          dayAge = months(year, month) - ( -dayAge);
        }
    resultDay.innerText = dayAge
    
     }
     
    
    
    }
    
    

)
