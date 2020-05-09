
$(function () {
  $(".create-form").on("submit", function (event) {
  
    event.preventDefault();

    var burger = {
      burger_name: $("#burger").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim(),
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: burger,
    }).then(function () {
      console.log("created new burger");
      location.reload();
    }
  );
  });
  
  $(".devour-state").on("click", function (event) {
    var id = $(this).data("id");
    var devour = $(this).data("devour");
    var newDevourLevel = {
      devoured: devour,
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourLevel,
    }).then(function () {
      console.log("changed devour state to", devour);
      location.reload();
    });
  });

  $(".burger-delete").on("click", function (event) {
    var id = $(this).data("id");

    // DELETE Request
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(function () {
      console.log("deleted burger", id);
      location.reload();
    });
  });
});



