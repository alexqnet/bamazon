var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    
    // Your username
    user: 'root',
    
    //Your password
    password: '',
    database: 'bamazon'
});
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
console.log("----------------");
console.log("Welcome to Bamazon!");
console.log("----------------");

});
displayProducts();

function displayProducts() {
  var query = connection.query("SELECT * FROM products", function(err, res) {
    console.log("There are (current inventory):")
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].stock_quantity + " " + res[i].product_name + "s (ID#" + res[i].item_id + ") in the " + res[i].department_name + " dept. – $" + res[i].price);
    }
    console.log("----------------");

questions ();
  })

};

function questions () {
  inquirer
    .prompt([
      {
        type: "number",
        message: "What is the ID of the item you would like to purchase?",
        name: "item_answer"
      },
      {
        type: "number",
        message: "How many would you like to buy?",
        name: "quantity_answer"
      },
      {
      type: "confirm",
      message: "Confirm order",
      name: "confirm",
      default: true
    },
    ])
    .then(function(inquirerResponse) {

// console.log(inquirerResponse.quantity_answer);
// console.log(inquirerResponse.item_answer);

// reduceQuantity (inquirerResponse.quantity_answer,inquirerResponse.item_answer);

checkQuantity (inquirerResponse.quantity_answer, inquirerResponse.item_answer);

  });
}

function checkQuantity (desiredQuantity, itemNum) {
  var query = connection.query("SELECT * FROM products WHERE item_id=?", [itemNum], function(err, res) {
    // console.log(res[0].stock_quantity); 
    if (desiredQuantity>res[0].stock_quantity) {
      console.log("Sorry. There is not sufficient inventory to fulfill this request.")
    }
    else {
      var updateQuantity = res[0].stock_quantity-desiredQuantity
      var cost = res[0].price * desiredQuantity
      reduceQuantity (updateQuantity,itemNum, cost)
    }
  });

}

function reduceQuantity (quantity,itemNum, cost) {
  var query = connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        stock_quantity: quantity
      },
      {
        item_id: itemNum
      }
    ],
    function(err, res) {
      console.log("Congratulations! Your order of $" + cost + " has been processed.");
    }
  );

}
