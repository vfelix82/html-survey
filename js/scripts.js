$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var name = $("#userName").val();
    var dob = $("#born").val();
    var food = $("input:radio[name=food]:checked").val();
    var gender = $("#gender").val();
    var favoriteColor = $("#color").val();
    alert("Your name is " + name + ", your date of birth is " + dob + ", your favorite food is "+ food + ", your gender is " + gender + ", and your favorite color is " + favoriteColor);

  });
});
