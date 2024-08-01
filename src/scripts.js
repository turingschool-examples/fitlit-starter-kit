// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
import './css/styles.css';
import './images/turing-logo.png';
import merchantsData from './data/merchants';
import itemsData from './data/items';

const itemsView = document.querySelector("#items-view")
const merchantsView = document.querySelector("#merchants-view")
const showingText = document.querySelector("#showing-text")
const merchantsNavButton = document.querySelector("#merchants-nav")
const itemsNavButton = document.querySelector("#items-nav")


// document.addEventListener('DOMContentLoaded', () => {
//   console.log('hi')
//   displayItems(itemsData.data)
// })

document.addEventListener('DOMContentLoaded', () => {
console.log('hi merch')
displayMerchants(merchantsData.data)
})

merchantsView.addEventListener('click', (event) => {
console.log('event: ', event)
displayMerchantItems(event)
})

merchantsNavButton.addEventListener('click', showAllMerchants)
itemsNavButton.addEventListener('click', showAllItems)

function showAllMerchants() {
  showingText.innerText = "All Merchants"
  addRemoveActiveNav(merchantsNavButton, itemsNavButton)
  show([merchantsView])
  hide([itemsView])
  displayMerchants(merchantsData.data)
}

function showAllItems() {
  showingText.innerText = "All Items"
  addRemoveActiveNav(itemsNavButton, merchantsNavButton)
  show([itemsView])
  hide([merchantsView])
  displayItems(itemsData.data)
}

function filterByMerchant(merchantId) {
  const specificMerchantItems = itemsData.data.filter(item => {
    return item.attributes.merchant_id === parseInt(merchantId)
  })
  return specificMerchantItems
}

function displayItems(items) {
  itemsView.innerHTML = ''
  items.forEach(item => {
    itemsView.innerHTML += `
     <article class="item" id="item-${item.id}">
          <img src="" alt="">
          <h2>${item.attributes.name}</h2>
          <p>${item.attributes.description}</p>
          <p>$${item.attributes.unit_price}</p>
          <button>ORDER</button>
        </article>
    `
  })
}

function displayMerchants(merchants) {
    merchantsView.innerHTML = ''
    merchants.forEach(merchant => {
        merchantsView.innerHTML += 
        `<article class="merchant" id="merchant-${merchant.id}">
          <h3 class="merchant-name">${merchant.attributes.name}</h3>
        <button class="view-items-button">View Merchant Items</button>
        </article>`
    })
}

// function displaySingleItem(itemData) {

// }



function displayMerchantItems(event) {
  if (!event.target.classList.contains("view-items-button")) {
    return
  }
  console.log('et:', event.target)
  //get the merchant id
  let merchantId = event.target.parentElement.id.split('-')[1]
  console.log("id: ",  merchantId)
  //fetch the items for that specific merchant
  //display all items for that merchant
  const filteredMerchantItems = filterByMerchant(merchantId)
  toggleToMerchantItemsView(merchantId, filteredMerchantItems)
}


function toggleToMerchantItemsView(id, items) {
  showingText.innerText = `All Items for Merchant #${id}`
  show([itemsView])
  hide([merchantsView])
  toggleActiveNav([itemsNavButton, merchantsNavButton])
  displayItems(items)
}

function viewAllMerchants() {
  showingText.innerText = `All Merchants`
  hide([itemsView])
  show([merchantsView])
  toggleActiveNav([itemsNavButton, merchantsNavButton])
  displayMerchants(merchantsData.data)
}

function show(elements) {
  elements.forEach(element => {
    element.classList.remove('hidden')
  })
}

function hide(elements) {
  elements.forEach(element => {
    element.classList.add('hidden')
  })
}

function addRemoveActiveNav(nav1, nav2) {
  nav1.classList.add('active-nav')
  nav2.classList.remove('active-nav')
}


