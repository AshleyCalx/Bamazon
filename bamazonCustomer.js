var mysql = require ("mysql");
var inquirer = require ("inquirer");


// Connection for mysql database
var connection = mysql.createConnection ({
		host: "localhost",
		port: 3306,
		user: "root",
		password: "",
		database: "bamazon_db"
});

//
connection.connect(function(error){
	if (error) throw error;
	console.log("connected as id " + connection.threadId);
});

//Function for products query
function queryAllProducts (){
	connection.query("SELECT * FROM products", function(err, res){
		for (var i = 0; i < res.length; i++) {
			console.log("Id: " + res[i].id + " | " + res[i].productName + " | " + "$" + res[i].price);
		}
		console.log("---------------------------------------------------");
	});
}

function start(){

	connection.query(SELECT * FROM products, function(err, res){
		if (error) throw error;
		inquirer.prompt({
			{
			name: "id",
			type: "input",
			message:"Choose products for purchase: "
			},
			
			{
			name:"quality"
			type:"input",
			message:"Select quality for purchase: "

			}]).then(function(answer){
				for(var i =0; i< res.length; i ++) {
					if(res[i].id == answer.id){
						if(res[i].stockQuantity < answer.quantity){
							console.log("---------------------------------------------------");
							console.log("Insufficient quantity! Choose another amount");
							start();
						}
						else(res[i].stockQuantity .+ answer.quantity){
							price(answer.quantity, res[i].price);
							purchase(res[i].stockQuantity, answer.quantity, answer.id);
	
						}
					}
				}
			});
		});
	}
//Total of purchase
	function price(quantityOfProducts, price){
		var total = quantityOfProducts * price;
		console.log("Total: " + "$" + total);
	}

	function purchase(stockQuantity, quantityOfProducts, id){
		inquirer.prompt([{
			name:"confirmPurchase",
			type: "rawlist",
			message:"Please confirm purchase to proceed",
			choice:["CONFIRM","CANCEL"]
		}]).then(function(answer){
			if(answer.confirmPurchase === "CONFIRM"){
				purchaseUpdate(stockQuantity, quantityOfProducts, id);
			} else {
				start();
			}
			
		});
	}

