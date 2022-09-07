const express = require("express");
const bodyParser = require("body-parser");



const app = express();

var todos = ["Buy food" ,"Cook food" , "Eat food"];

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static("public"))



app.get("/", function(req, res) {


  var today = new Date();

  var options = {
    weekday: "long",
    day : "numeric",
    month: "long"
  };

  var day = today.toLocaleDateString("en-US" ,options);

  res.render("list", {
    listTitle: day,
    newToDo: todos
  })

})




  app.post("/" , function(req , res){

    var todo = req.body.todo;
    todos.push(todo);

    res.redirect("/")
  })



app.get("/about" , (req , res) =>{
  res.render("about");
})



app.listen(3000, function() {
  console.log("The server is running on port 3000");
})






























  //
  //
  // var today = new Date();
  // var currentDay = today.getDay();
  // var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Friday", "Saturday"];
  //
  // var day = "";
  //
  //
  // switch (currentDay) {
  //   case 0:
  //     day = "Sunday"
  //     break;
  //
  //   case 1:
  //     day = "Monday"
  //     break;
  //
  //   case 2:
  //     day = "Tuesday"
  //     break;
  //
  //   case 3:
  //     day = "Wednesday"
  //     break;
  //
  //   case 4:
  //     day = "Thirsday"
  //     break;
  //
  //   case 5:
  //     day = "Friday"
  //     break;
  //
  //   case 6:
  //     day = "Saturday"
  //     break;
  //   default:
  //     console.log("Error you current day is not between Sunday to Saturday");
  //
  // }
  //
