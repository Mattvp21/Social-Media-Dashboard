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
        for(let i = 0; i < cardDisplay.length; i++) {
             cardDisplay[i].style.backgroundColor = 'hsl(227, 47%, 96%)';
             
        }

       
        for(let i = 0; i < headerDisplay.length; i++) {
            headerDisplay[i].style.color = 'black';
       }

       for(let i = 0; i < statsDisplay.length; i++) {
        statsDisplay[i].style.backgroundColor = 'hsl(227, 47%, 96%)';    
   }

   for(let i = 0; i < cardNumberDisplay.length; i++) {
    cardNumberDisplay[i].style.color = 'black';
}

for(let i = 0; i < statsNumberDisplay.length; i++) {
    statsNumberDisplay[i].style.color = 'black';
}
       
    } else {
        body.style.backgroundColor = "";
        for(let i = 0; i < cardDisplay.length; i++) {
            cardDisplay[i].style.backgroundColor = 'hsl(228, 28%, 20%)';
       }
       for(let i = 0; i < headerDisplay.length; i++) {
        headerDisplay[i].style.color = 'white';
   }
   for(let i = 0; i < statsDisplay.length; i++) {
    statsDisplay[i].style.backgroundColor = 'hsl(228, 28%, 20%)';
    
}

for(let i = 0; i < cardNumberDisplay.length; i++) {
    cardNumberDisplay[i].style.color = 'white';
}

for(let i = 0; i < statsNumberDisplay.length; i++) {
    statsNumberDisplay[i].style.color = 'white';
}
    }
   
})
