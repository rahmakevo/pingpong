// A function that will take a number, computes a range if the following conditions are met
// push to an array:
// 1.if divisible by 15 push "pingpong"
// 2.else if divisble by 3 push "ping"
// 3.elseif divisble by 5 push "pong"
// 4.else push that number

function pingPong(number){
  var newArray = [];

  for (var i=1; i<=number; i++) {
    if ( i % 15 === 0) {
      newArray.push("pingpong");
    }
    else if (i % 3 === 0) {
      newArray.push("ping");
    }
    else if (i % 5 === 0) {
      newArray.push("pong");
    }
    else {
      newArray.push(i);
    }
  }
  return newArray;
}

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var numbers = parseInt($("input#input").val());
    var result = pingPong(numbers);

    // loop through the result, and for each item appen the item
    // <ol>
    //   <li>list</li>
    // </ol>
    $("div#output").text("");
    result.forEach(function(list){
    $("div#output").append("<li>" + list + "</li>");
    console.log(list);
    })
    $("div#output").show();
    console.log(result);

  })
})
