$(".devourBtn").on("click", function(){

  const id = $(this).data("id");

  $.ajax("/api/burgers/" + id, {
      type : "PUT"

  }).then(function(response){
    
      location.reload();
  });
  
});

$(".deleteBtn").on("click", function(){

  const id = $(this).data("id");
  
  $.ajax("/api/burgers/" + id, {

      type : "DELETE"
      
  }).then(function(response){
     
      location.reload();
  });

});

$("#submit").on("click", function(event){
  event.preventDefault();

  const burger = $("#burgerName").val().trim();
  const burgerName = { burger };
  
  $.ajax("/api/burgers", {

      type : "POST",
      data : burgerName

  }).then(function(response){
     
      location.reload();

  });
});



// // Make sure we wait to attach our handlers until the DOM is fully loaded.
// $(function () {
//     $(".create-form").on("submit", function (event) {
//       // Make sure to preventDefault on a submit event.
//       event.preventDefault();
      
//       var newBurger = {
//         burger_name: $("#burger").val().trim(),
//         // devoured: $("[name=devoured]:checked").val().trim(),
//       };
//       console.log(newBurger);
//       // Send the POST request.
//       $.ajax("/api/burgers", {
//         type: "POST",
//         data: newBurger,
//       }).then(function () {
//         console.log("created new burger");
//         // Reload the page to get the updated list
//         location.reload();
//       });
//     });
//     $(".change-devour").on("click", function (event) {
//       var id = $(this).data("id");
//       var newDevour = $(this).data("newdevour");
  
//       var newDevourState = {
//         devoured: newDevour,
//       };
  
//       // Send the PUT request.
//       $.ajax("/api/burgers/" + id, {
//         type: "PUT",
//         data: newDevourState,
//       }).then(function () {
//         console.log("changed devour status to", newDevour);
//         // Reload the page to get the updated list
//         location.reload();
//       });
//     });
//   });