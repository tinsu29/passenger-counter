//document.getElementById('count-el').innerText =5
let countel = document.getElementById('count-el')
let savedEl = document.getElementById('save-el')
let  count=  0
 function increment(){

    count += 1
    countel.innerText = count

 }


 function save(){

  saved = countel.innerText

  let countstr =  saved + " - " 

  savedEl.textContent += countstr

  countel.innerText = 0
  count =0 ;

}

