const checkBox = document.querySelector('#myonoffswitch');
let body = document.body;
let cardDisplay = document.querySelectorAll('.card');
let headerDisplay = document.querySelectorAll('.header__heading');
let statsDisplay = document.querySelectorAll('.stats');
let cardNumberDisplay = document.querySelectorAll('.card__details--number');
let statsNumberDisplay = document.querySelectorAll('.stats__details--number');

checkBox.addEventListener('change', function() {
    if (checkBox.checked) {
        body.style.backgroundColor = "white";
        body.style.transition = "1s ease-in";
        for(let i = 0; i < cardDisplay.length; i++) {
             cardDisplay[i].style.backgroundColor = 'hsl(227, 47%, 96%)';
             cardDisplay[i].style.transform = 'rotateX(360deg)';
             cardDisplay[i].style.transition = "1s ease-in";
             
        }

       
        for(let i = 0; i < headerDisplay.length; i++) {
            headerDisplay[i].style.color = 'black';
            headerDisplay[i].style.transition = "1s ease-in";
             
       }

       for(let i = 0; i < statsDisplay.length; i++) {
        statsDisplay[i].style.backgroundColor = 'hsl(227, 47%, 96%)';    
        statsDisplay[i].style.transition = "1s ease-in";
   }

   for(let i = 0; i < cardNumberDisplay.length; i++) {
    cardNumberDisplay[i].style.color = 'black';
}

for(let i = 0; i < statsNumberDisplay.length; i++) {
    statsNumberDisplay[i].style.color = 'black';
}
       
    } else {
        body.style.backgroundColor = "";
        body.style.transition = "1s ease-in";
        for(let i = 0; i < cardDisplay.length; i++) {
            cardDisplay[i].style.backgroundColor = 'hsl(228, 28%, 20%)';
           cardDisplay[i].style.transform = 'rotateX(-360deg)';
          
            cardDisplay[i].style.transition = " 1s ease-in";
            
       }
       for(let i = 0; i < headerDisplay.length; i++) {
        headerDisplay[i].style.color = 'white';
        headerDisplay[i].style.transition = "1s ease-in";
             
   }
   for(let i = 0; i < statsDisplay.length; i++) {
    statsDisplay[i].style.backgroundColor = 'hsl(228, 28%, 20%)';
    statsDisplay[i].style.transition = "1s ease-in";
}

for(let i = 0; i < cardNumberDisplay.length; i++) {
    cardNumberDisplay[i].style.color = 'white';
}

for(let i = 0; i < statsNumberDisplay.length; i++) {
    statsNumberDisplay[i].style.color = 'white';
}
    }
   
})
