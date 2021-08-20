$(document).ready(function () {
    var currentFloor = 2;
    var floorPath =  $(".home-image path");
    var counterUp = $(".counter-up"); /* кнопка увелечения этажа */
var counterDown = $(".counter-down"); /* кнопка уменьшения этажа */
    floorPath.on("mouseover", function () { /* Выделяет этаж,при наведение на него */
    floorPath.removeClass("current-floor"); /* Удаление текущего этажа */
    currentFloor = $(this).attr("data-floor");
    $(".counter").text(currentFloor);
  });

  counterUp.on("click", function() {
      if (currentFloor < 18) { 
        currentFloor++;
        usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2,
        useGroupping: false });
        $(".counter").text(usCurrentFloor);
        floorPath.removeClass("current-floor");
        $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");  
      }
  });

  counterDown.on("click", function(){
      if(currentFloor > 2) {
        currentFloor--;
        usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2,
        useGroupping: false });
        $(".counter").text(usCurrentFloor);
        floorPath.removeClass("current-floor");
        $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");  
      }
  })
});