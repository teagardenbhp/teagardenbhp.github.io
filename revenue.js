import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

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
const db = getFirestore(app);

const salesCollection = collection(db, "sales");

document.addEventListener('DOMContentLoaded', () => {
    const today = new Date();
  document.getElementById('startDate').valueAsDate = today;
  document.getElementById('endDate').valueAsDate = today; 
});

window.generateRevenueReport = async function() {
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');
  
    const startDate = new Date(startDateInput.value);
    const endDate = new Date(endDateInput.value);
  
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(23, 59, 59, 999);

  console.log(startDate.toISOString())
  console.log(endDate.toISOString())

  const querySales = query(salesCollection, where("date", ">=", startDate.toISOString()), where("date", "<=", endDate.toISOString()));

  try {
    const salesSnapshot = await getDocs(querySales);
    const salesData = salesSnapshot.docs.map(doc => doc.data());
    displayRevenueData(salesData);
    console.log(salesData)
  } catch (error) {
    console.error('Error retrieving sales data:', error);
  }
};


window.displayRevenueData = function(data) {
    const revenueDataContainer = document.getElementById('revenueData');
    const totalRevenueContainer = document.getElementById('totalRevenue');
  
    revenueDataContainer.innerHTML = '';
    totalRevenueContainer.textContent = '';
  
    let totalRevenue = 0;
    const itemRevenueMap = {};
  
    data.forEach(item => {
      const itemRevenue = item.items.reduce((acc, cur) => {
        const itemName = cur.name;
        const quantity = parseInt(cur.quantity);
        const revenue = parseInt(cur.total);
  
        if (!acc[itemName]) {
          acc[itemName] = { quantity: 0, revenue: 0 };
        }
  
        acc[itemName].quantity += quantity;
        acc[itemName].revenue += revenue;
        return acc;
      }, {});
  
      Object.keys(itemRevenue).forEach(itemName => {
        if (!itemRevenueMap[itemName]) {
          itemRevenueMap[itemName] = { quantity: 0, revenue: 0 };
        }
  
        itemRevenueMap[itemName].quantity += itemRevenue[itemName].quantity;
        itemRevenueMap[itemName].revenue += itemRevenue[itemName].revenue;
      });
  
      totalRevenue += Object.values(itemRevenue).reduce((acc, cur) => acc + cur.revenue, 0);
    });
  
    Object.keys(itemRevenueMap).forEach(itemName => {
      const { quantity, revenue } = itemRevenueMap[itemName];
  
      revenueDataContainer.innerHTML += `
        <div class="item">
          <p>Item Name: <strong> ${itemName} </strong> </p>
          <p>Item Sold: ${quantity}</p>
          <p>Item Made: ${revenue.toFixed(0)} Rs</p>
        </div>
      `;
    });
  
    totalRevenueContainer.textContent = `Total Revenue: ${totalRevenue.toFixed(0)}`;
  };
  