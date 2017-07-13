function Cone (){
  this.size = "";
  this.flavorSingle ="";
  this.flavor1 = "";
  this.flavor2 = "";
  this.toppings = [];
  this.cost = 0;
}

$(document).ready(function() {
  var cone = new Cone();

  $("#sizeSubmit").click(function() {
    var size = $("input:radio[name=size]:checked").val();
    cone.size = size;
    console.log(size);
    if (size === "single" || size === "kid") {
      $("#single").show();
      console.log("hi");
    }
    else if (size === "double") {
      $("#double").show();
      console.log("hello");
    }
  });
  $("#singleSubmit").click(function() {
    var flavorSingle = $("input:radio[name=flavorSingle]:checked").val();
    cone.flavorSingle = flavorSingle;
    console.log(flavorSingle);
    $("input:checkbox[name=toppings1]:checked").each(function() {
      var toppings = $(this).val();
      cone.toppings.push(toppings);
      console.log($(this).val());
    });

    console.log(cone);
  });
  // var flavor1 = $("input:radio[name=flavor1]:checked").val();
  // var flavor2 = $("input:radio[name=flavor2]:checked").val();
  // cone.flavor1 = flavor1;
  // cone.flavor2 = flavor2;

});
