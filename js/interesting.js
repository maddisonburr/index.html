/*
 * Maddison Burr - Portfolio Js
*/

document.addEventListener('DOMContentLoaded', function() {
    // set current year on footer
    var currentYearString = String(new Date().getFullYear());
    document.getElementById("date").innerText = currentYearString;    

    // button click event
    var btnAlert = document.getElementById("btn-alert");
    btnAlert.addEventListener("click", function(){
        alert("you clicked me");
    });

    // button hover events
    const button = document.getElementById('btn-alert');
    button.addEventListener('mouseover', function() {
      // change text on hover
      button.textContent = 'Hovered me! - still click me';
    });
    button.addEventListener('mouseout', function() {
      // revert text on mouseout
      button.textContent = 'click me';
    });

    // button +1 click event
    var btnCounter = document.getElementById("btn-counter");
    var counter = 0;
    btnCounter.addEventListener("click", function(){
        var txt = document.getElementById("txt-counter");
        counter++;
        txt.innerText = String(counter);
        // check if odd or even and add class
        if (counter % 2 === 0) {
            txt.classList.add("even");
            txt.classList.remove("odd");
          } else {
            txt.classList.add("odd");
            txt.classList.remove("even");
          }
    });

    // numbers loop
    var numbersList = document.getElementById('numbers');
    for (let i = 1; i <= 100; i++) {
      // create a new list item and say if even or odd
        var listItem = document.createElement('li');
        listItem.textContent = i % 2 === 0 ? 'even' : 'odd';
        numbersList.appendChild(listItem);
    }
});