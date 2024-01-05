const menuItems = [
    //Tea
    { id: "item1", name: "Tea Half", price: 70, category: "Tea" },
    { id: "item2", name: "Tea Full", price: 100, category: "Tea" },
    { id: "item3", name: "Garden Special Tea", price: 150, category: "Tea" },
    { id: "item4", name: "Gur Wali Chai", price: 120, category: "Tea" },
    { id: "item5", name: "Ginger Tea", price: 120, category: "Tea" },
    { id: "item6", name: "Coffee", price: 200, category: "Tea" },
    { id: "item7", name: "Cream Coffee", price: 250, category: "Tea" },
    { id: "item8", name: "Chocolate Coffee", price: 250, category: "Tea" },
    { id: "item9", name: "Chocolate Cream Coffee", price: 300, category: "Tea" },
    { id: "item10", name: "Cold Coffee", price: 250, category: "Tea" },
    //Pratha
    { id: "item11", name: "Anda Pratha", price: 110, category: "Pratha" },
    { id: "item12", name: "Aloo Pratha", price: 130, category: "Pratha" },
    { id: "item13", name: "Aloo Cheese", price: 200, category: "Pratha" },
    { id: "item14", name: "Chicken Pratha", price: 230, category: "Pratha" },
    { id: "item15", name: "Chicken Cheese Pratha", price: 300, category: "Pratha" },
    { id: "item16", name: "Chicken Achari Pratha", price: 270, category: "Pratha" },
    { id: "item17", name: "BBQ Pratha", price: 500, category: "Pratha" },
    { id: "item18", name: "Sada Pratha", price: 60, category: "Pratha" },
    { id: "item19", name: "Pizza Pratha", price: 500, category: "Pratha" },
    { id: "item20", name: "Nutella Pratha", price: 150, category: "Pratha" },
    { id: "item21", name: "Shakar Pratha", price: 100, category: "Pratha" },
    //Burger
    { id: "item22", name: "Chicken Patty Burger", price: 240, category: "Burger" },
    { id: "item23", name: "Tower Burger", price: 550, category: "Burger" },
    { id: "item24", name: "Kebabish Burger", price: 310, category: "Burger" },
    { id: "item25", name: "Egg Cheese Burger", price: 220, category: "Burger" },
    { id: "item26", name: "Jambo Spicy Burger", price: 340, category: "Burger" },
    { id: "item27", name: "Thunder Burger", price: 350, category: "Burger" },
    { id: "item28", name: "Zinger Burger", price: 330, category: "Burger" },
    //Fried
    { id: "item29", name: "Nuggets Full", price: 400, category: "Fried" },
    { id: "item30", name: "Nuggets Half", price: 200, category: "Fried" },
    { id: "item31", name: "Wings Full", price: 450, category: "Fried" },
    { id: "item32", name: "Wings Half", price: 250, category: "Fried" },
    { id: "item33", name: "Fries Full", price: 300, category: "Fried" },
    { id: "item34", name: "Fries Half", price: 150, category: "Fried" },
    { id: "item35", name: "Loaded Fries", price: 450, category: "Fried" },
    { id: "item36", name: "Garlic Mayo Fries", price: 380, category: "Fried"},
    //PrathaRoll
    { id: "item37", name: "Chicken Paratha Roll", price: 270, category: "PrathaRoll" },
    { id: "item38", name: "Chicken Cheese Paratha", price: 320, category: "PrathaRoll" },
    { id: "item39", name: "Chicken Gyora", price: 330, category: "PrathaRoll" },
    { id: "item40", name: "Zinger Paratha Roll", price: 380, category: "PrathaRoll" },
    { id: "item41", name: "Kebab Paratha Roll", price: 320, category: "PrathaRoll" },
    //Drinks
    { id: "item42", name: "Oreo Shake", price: 350, category: "Drinks" },
    { id: "item43", name: "Mango Shake", price: 320, category: "Drinks" },
    { id: "item44", name: "Banana Shake", price: 320, category: "Drinks" },
    { id: "item45", name: "Kulfa Shake", price: 220, category: "Drinks" },
    { id: "item46", name: "Mint Margarita", price: 210, category: "Drinks" },
    { id: "item47", name: "Kitkat Shake", price: 350, category: "Drinks" },
    { id: "item48", name: "Lime", price: 120, category: "Drinks" },
    { id: "item49", name: "Lemonade", price: 150, category: "Drinks" },
    //BBQ
    { id: "item50", name: "Tikka Boti 4 Piece", price: 200, category: "BBQ" },
    { id: "item51", name: "Tikka Leg Piece", price: 250, category: "BBQ" },
    { id: "item52", name: "Tikka ChestPiece", price: 280, category: "BBQ" },
    { id: "item53", name: "Malai Boti 4 Piece", price: 300, category: "BBQ" },
    { id: "item54", name: "Seekh Kebab 1 Piece", price: 200, category: "BBQ" },
    { id: "item55", name: "BBQ Malai Piece Chest", price: 300, category: "BBQ" },
    { id: "item56", name: "BBQ Malai Piece Leg", price: 270, category: "BBQ" },
    { id: "item57", name: "Tandori Wings", price: 150, category: "BBQ" },
    { id: "item58", name: "Kalmi Tikka 3 Piece", price: 350, category: "BBQ" },
    { id: "item59", name: "Cheese Kebab 1 Seekh", price: 230, category: "BBQ" },
    { id: "item60", name: "Achari Tikka Boti 1 Seekh", price: 250, category: "BBQ" },
    { id: "item61", name: "Haryali Boti 1 Seekh", price: 340, category: "BBQ" },
    { id: "item62", name: "Kastoori Boti 1 Seekh", price: 400, category: "BBQ" },
    { id: "item63", name: "BBQ Fish Full", price: 1100, category: "BBQ" },
    { id: "item64", name: "BBQ Fish Half", price: 680, category: "BBQ" },
    { id: "item65", name: "BBQ Full Special Platter", price: 2100, category: "BBQ" },
    { id: "item66", name: "BBQ Half Special Platter", price: 1200, category: "BBQ" }
  ];
  
  const categories = ['All', 'Tea', 'Pratha', 'Burger', 'Fried', 'PrathaRoll', 'Drinks', 'BBQ'];

window.generateMenu = function() {
    const menuContainer = document.getElementById('menu');
  
    menuItems.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('item');
      itemDiv.classList.add(item.category.toLowerCase()); // Add category class for filtering
      itemDiv.id = item.id;
  
      const itemCardDiv = document.createElement('div');
      itemCardDiv.classList.add('item-card');
  
      const itemName = document.createElement('h2');
      itemName.textContent = item.name;
  
      const itemPrice = document.createElement('p');
      itemPrice.classList.add('item-price');
      itemPrice.textContent = `Rs: ${item.price.toFixed(0)}`;
  
      const quantityContainer = document.createElement('div');
      quantityContainer.classList.add('quantity-container');
  
      const decreaseButton = document.createElement('button');
      decreaseButton.classList.add('quantity-button');
      decreaseButton.textContent = '-';
      decreaseButton.onclick = () => changeQuantity(`quantity${item.id}`, -1);
  
      const quantityDisplay = document.createElement('h5');
      quantityDisplay.id = `quantity${item.id}`;
      quantityDisplay.classList.add('quantity-display');
      quantityDisplay.textContent = '1';
  
      const increaseButton = document.createElement('button');
      increaseButton.classList.add('quantity-button');
      increaseButton.textContent = '+';
      increaseButton.onclick = () => changeQuantity(`quantity${item.id}`, 1);
  
      const addButton = document.createElement('button');
      addButton.textContent = 'Add';
      addButton.classList.add("button")
      addButton.onclick = () => addItem(item.name, item.price, `quantity${item.id}`);
  
      // Append elements
      quantityContainer.append(decreaseButton, quantityDisplay, increaseButton);
      itemCardDiv.append(itemName, itemPrice, quantityContainer, addButton);
      itemDiv.appendChild(itemCardDiv);
      menuContainer.appendChild(itemDiv);
    });
  }
  
window.showCategory = function(category) {
    const allItems = document.querySelectorAll('.item');
    const navbarLinks = document.querySelectorAll('.navbar a');
    const tableOrders = document.getElementById('tableOrders');
    
    navbarLinks.forEach(link => link.classList.remove('active'));
  
    allItems.forEach(item => {
      if (category === 'All' || item.classList.contains(category.toLowerCase())) {
        item.style.display = 'block';
        tableOrders.style.display = 'none';
      }
      else {
        item.style.display = 'none';
      }
    });
  
    const selectedLink = document.querySelector(`.navbar a[href="#"][onclick*="${category}"]`);
    if (selectedLink) {
      selectedLink.classList.add('active');
    }
  }
  
  // Add the following code to your existing event listener
  document.addEventListener('DOMContentLoaded', () => {
    generateMenu();
    showCategory('All');
  });

  window.addItem = function(name, price, quantityId) {
    const quantityDisplay = document.getElementById(quantityId);
    const currentQuantity = parseInt(quantityDisplay.textContent);

    if (!isNaN(currentQuantity) && currentQuantity > 0) {
        const itemTotal = price * currentQuantity;
        const item = {
            name,
            price,
            quantity: currentQuantity,
            total: itemTotal
        };
        cart.push(item);

        updateCart();
        resetQuantity(quantityDisplay);
    }
}

let printWindow;
let cart = [];

window.changeQuantity = function(quantityId, amount) {
    const quantityDisplay = document.getElementById(quantityId);
    let currentQuantity = parseInt(quantityDisplay.textContent);

    if (!isNaN(currentQuantity)) {
        currentQuantity += amount;
        currentQuantity = Math.max(currentQuantity, 1);

        quantityDisplay.textContent = currentQuantity;
    }
}

window.updateCart = function() {
    const cartList = document.getElementById('cart-list');
    const totalElement = document.getElementById('total');

    cartList.innerHTML = '';

    let total = 0;

    cart.forEach((item, index) => {
        const listItem = document.createElement('tr');
        listItem.innerHTML = `
            <td class="left">${item.name}</td>
            <td>${item.price.toFixed(0)}</td>
            <td>${item.quantity}</td>
            <td>${item.total.toFixed(0)}</td>
            <td><button class="delete-button" onclick="deleteCartItem(${index})">Delete</button></td>
        `;
        cartList.appendChild(listItem);
        total += item.total;
    });

    totalElement.textContent = `Total: ${total.toFixed(0)} Rs`;

    cartList.scrollTop = cartList.scrollHeight;
}

window.resetQuantity = function(element) {
    element.textContent = '1';
}

window.getTotal = function(tableNumber){
    let total = 0;
    const orders = tableOrdersArray[tableNumber - 1];
    orders.forEach(items => {
        items.forEach(order =>{
        total += order.total;
        })
    });
    return total;
}

window.printReceipt = function() {
    console.log("Print receipt function called");

    const tableNumber = document.getElementById("table-tableNumber").textContent;
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();
    const total = getTotal(tableNumber);
    const orders = tableOrdersArray[tableNumber - 1];
    const salesData = {
        date: new Date().toISOString(),
        items: orders.flatMap(order => order.map(item => ({
            name: item.name,
            price: item.price.toFixed(0),
            quantity: item.quantity,
            total: item.total.toFixed(0),
        }))),
        total: total,
        tableNumber: tableNumber,
    };
    console.log(salesData)

    printWindow = window.open("", "_blank");
    printWindow.document.write(`
        <html>
            <head>
                <title>Receipt</title>
                <style>
                    body {
                        font-family: 'Arial', sans-serif;
                        padding: 20px;
                    }
                    
                    .receipt-header {
                        text-align: center;
                        font-size: 1.2em;
                        margin-bottom: 20px;
                    }
                    
                    .receipt-info {
                        margin-bottom: 10px;
                    }

                    .receipt-tableno{
                        font-size: 50px;
                        text-align: center;
                        font-weight: 400;
                    }
                    
                    .receipt-table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-bottom: 20px;
                    }
                    
                    .receipt-table th, .receipt-table td {
                        border: 1px solid #ddd;
                        padding: 8px;
                        text-align: left;
                    }
                    
                    #total {
                        margin-top: 20px;
                    }

                    .phone{
                        text-align: left;
                        font-size: small;
                    }
                    
                    @media print {
                        body {
                            width: 8.5in;
                            height: 11in;
                            margin: 0.5in;
                        }
                    }
                </style>
            </head>
            <body>
                <div class="receipt-header">
                    <h1>Tea Garden</h1>
                    <h2>Receipt</h2>
                    <p class="phone">Contact: 0309-0908452</p>
                    <p class="receipt-info">Date: ${formattedDate}</p>
                    <p class="receipt-info">Time: ${formattedTime}</p>
                </div>
                
                <table class="receipt-table">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${generateReceiptItems(tableNumber)} <!-- Dynamically insert items, quantity, price, and total here -->
                    </tbody>
                </table>
        
                <p id="total">Total Rs: ${getTotal(tableNumber).toFixed(0)}</p>
                <p class="receipt-info">Table#</p>
                <p class="receipt-tableno">${tableNumber}</p>
            </body>
        </html>
    `);

    printWindow.document.close();
    printWindow.onafterprint = function(){
        try{
            addSalesDataToFirebase(salesData).then(() => {
                printWindow.close();
                tableOrdersArray[tableNumber - 1] = [];
            });
        }
        catch(err){
            console.log(err)
            alert("Something went wrong!")
        }
        
    }
    printWindow.print();
    console.log(tableOrdersArray)
}

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAJ0_JjhWeh0uNZCzLO_LS3eNEFn82Wakc",
  authDomain: "tea-garden-c5c9e.firebaseapp.com",
  projectId: "tea-garden-c5c9e",
  storageBucket: "tea-garden-c5c9e.appspot.com",
  messagingSenderId: "186222733805",
  appId: "1:186222733805:web:a6841375c7d994cc631fe4",
  measurementId: "G-6S6PKY50SR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const salesCollection = collection(db, "sales");

async function addSalesDataToFirebase(data) {
    console.log(data)
  try {
    const docRef = await addDoc(salesCollection, data);
    console.log("Sales data added with ID: ", docRef.id);

  } catch (error) {
    alert("Something went wrong!")
    console.error("Error adding sales data: ", error);
  }
}

window.generateReceiptItems = function(tableNumber) {
    let itemsHtml = '';
    const orders = tableOrdersArray[tableNumber - 1];
    orders.forEach(cart =>{
        cart.forEach(item => {
            itemsHtml += `
                <tr>
                    <td class="setWidth">${item.name}</td>
                    <td>${item.quantity}</td>
                    <td>${item.price.toFixed(0)}</td>
                    <td>${item.total.toFixed(0)}</td>
                </tr>
            `;
        });
})
    return itemsHtml;
}

window.cartTotal = function() {
    return cart.reduce((total, item) => total + item.total, 0);
}

window.addExtraItem = function() {
    const extraItemName = document.getElementById("extraItemName").value;
    const extraItemQuantity = parseInt(document.getElementById("quantity0").textContent);
    const extraItemPrice = parseFloat(document.getElementById("extraItemPrice").value);

    if (!isNaN(extraItemQuantity) && extraItemQuantity > 0 && !isNaN(extraItemPrice) && extraItemPrice >= 0) {
        addItem(extraItemName, extraItemPrice, 'quantity0', extraItemQuantity);
        resetExtraItemFields();
    }
}

window.resetExtraItemFields = function() {
    document.getElementById("extraItemName").value = "Extra";
    document.getElementById("quantity0").textContent = "1";
    document.getElementById("extraItemPrice").value = "";
}

window.clearInputField = function(input) {
    input.value = '';
}

const tableOrdersArray = Array.from({ length: 20 }, () => []);

window.addItemToTableOrder = function () {

    const tableNumberInput = document.getElementById('tableNumber');
    const tableNumber = parseInt(tableNumberInput.value);
    tableOrdersArray[tableNumber - 1].push(cart);
    alert("Items added to Table# " + tableNumber)
    cart = [];
    updateCart();
    tableNumberInput.value = "";
}
  

window.buttonClick = function (tableNumber) {
    const tableOrders = document.getElementById('tableOrders');
    const allItems = document.querySelectorAll('.item');
    const navbarLinks = document.querySelectorAll('.navbar a');

    navbarLinks.forEach(link => link.classList.remove('active'));
  
    allItems.forEach(item => {
        item.style.display = 'none';
        tableOrders.style.display = 'block';
      }
    )

    const tableNum = document.getElementById("table-tableNumber");
    tableNum.innerHTML = `${tableNumber}`;

    const orders = tableOrdersArray[tableNumber - 1];
    const tableList = document.getElementById('table-list');
    const totalElement = document.getElementById('table-total');
    tableList.innerHTML = '';
    let total = 0;

    orders.forEach((cart, cartIndex) => {
        cart.forEach((item, itemIndex) => {
            const listItem = document.createElement('tr');
            listItem.innerHTML = `
                <td class="left">${item.name}</td>
                <td>${item.price.toFixed(0)}</td>
                <td>${item.quantity}</td>
                <td>${item.total.toFixed(0)}</td>
                <td><button class="delete-button" onclick="deleteTableOrderItem(${tableNumber - 1}, ${cartIndex}, ${itemIndex})">Delete</button></td>
            `;
            tableList.appendChild(listItem);
            total += item.total;
        });
    });
    totalElement.textContent = `Total: ${total} Rs`;
  };

window.deleteCartItem = function(index) {
    cart.splice(index, 1);
    updateCart();
}
window.deleteTableOrderItem = function(tableIndex, cartIndex, itemIndex) {
    tableOrdersArray[tableIndex][cartIndex].splice(itemIndex, 1);
    buttonClick(tableIndex + 1);
};