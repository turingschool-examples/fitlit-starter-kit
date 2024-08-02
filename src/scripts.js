// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
import './css/styles.css';
import './images/turing-logo.png';
// import merchantsData from './data/merchants';
// import itemsData from './data/items';
import {fetchData, postData} from './apiCalls'


const itemsView = document.querySelector("#items-view")
const merchantsView = document.querySelector("#merchants-view")
const showingText = document.querySelector("#showing-text")
const merchantsNavButton = document.querySelector("#merchants-nav")
const itemsNavButton = document.querySelector("#items-nav")
const addNewButton = document.querySelector("#add-new-button")

//form elements
const merchantForm = document.querySelector("#new-merchant-form")
const newMerchantName = document.querySelector("#new-merchant-name")
const newItemName = document.querySelector("#new-item-name")
const submitMerchantButton = document.querySelector("#submit-merchant")
const submitItemButton = document.querySelector("#submit-item")


merchantsView.addEventListener('click', (event) => {
  handleMerchantClicks(event)
})

merchantsNavButton.addEventListener('click', showAllMerchants)
itemsNavButton.addEventListener('click', showAllItems)

addNewButton.addEventListener('click', addNew)
submitMerchantButton.addEventListener('click', submitMerchant)

let merchants;
let items;

Promise.all([fetchData('merchants'), fetchData('items')])
// fetchData('merchants')
.then(responses => {
    console.log('d', responses)
    merchants = responses[0].data
    items = responses[1].data
    displayMerchants(merchants)
  })
  .catch(err => {
    console.log('catch')
  })




function addNew() {
  if (addNewButton.dataset.state === "merchant") {
    show([merchantForm])
  } else if (addNewButton.dataset.state === "items") {
    // console.log('items')
  }
}

function deleteSelected(event) {
  const splitId = event.target.closest("article").id.split('-')
  console.log("id: ",  splitId[1])
  console.log("type: ",  splitId[0])


}

function handleMerchantClicks(event) {
  console.log(event)
  if (event.target.classList.contains("delete-merchant")) {
    deleteSelected(event)
  } else if (event.target.classList.contains("edit-merchant")) {
    //edit function invocation
  } else if (event.target.classList.contains("view-merchant-items")) {
    displayMerchantItems(event)
  }
}

// find merchant name by id

function submitMerchant() {
  event.preventDefault()
  var merchantName = newMerchantName.value
  console.log("merchantName: ", merchantName)
  hide([merchantForm])
  postData('merchants', { name: merchantName })
    .then(postedMerchant => {
      console.log('post res: ', postedMerchant)
      displayAddedMerchant(postedMerchant.data)
    })
  //successful post...add new merchant to DOM
}

function showAllMerchants() {
  showingText.innerText = "All Merchants"
  addRemoveActiveNav(merchantsNavButton, itemsNavButton)
  addNewButton.dataset.state = 'merchant'
  show([merchantsView])
  hide([itemsView])
  displayMerchants(merchants)
}

function showAllItems() {
  showingText.innerText = "All Items"
  addRemoveActiveNav(itemsNavButton, merchantsNavButton)
  addNewButton.dataset.state = 'item'
  show([itemsView])
  hide([merchantsView])
  displayItems(items)
}

function filterByMerchant(merchantId) {
  console.log('filterByMerchant')
  const specificMerchantItems = items.filter(item => {
    return item.attributes.merchant_id === parseInt(merchantId)
  })
  return specificMerchantItems
}

function displayItems(items) {
  itemsView.innerHTML = ''
  items.forEach(item => {
    let merchant = findMerchantName(item.attributes.merchant_id)
    console.log('merchant: ', merchant)
    itemsView.innerHTML += `
     <article class="item" id="item-${item.id}">
          <img src="" alt="">
          <h2>${item.attributes.name}</h2>
          <p>${item.attributes.description}</p>
          <p>$${item.attributes.unit_price}</p>
          <p class="merchant-name-in-item">Merchant: ${merchant}</p>
          <button>ORDER</button>
        </article>
    `
  })
}

function findMerchantName(id) {
  const result = merchants.find(merchant => {
    return parseInt(merchant.id) === id
  })
  return result.attributes.name
}

function displayMerchants(merchants) {
    merchantsView.innerHTML = ''
    merchants.forEach(merchant => {
        merchantsView.innerHTML += 
        `<article class="merchant" id="merchant-${merchant.id}">
          <h3 class="merchant-name">${merchant.attributes.name}</h3>
           <button class="delete-merchant icon">🗑️</button>
           <button class="edit-merchant icon">✎</button>
          <button class="view-merchant-items">View Merchant Items</button>
        </article>`
    })
}

function displayAddedMerchant(merchant) {
      merchantsView.insertAdjacentHTML('afterbegin', 
      `<article class="merchant" id="merchant-${merchant.id}">
        <h3 class="merchant-name">${merchant.attributes.name}</h3>
         <button class="delete-merchant icon">🗑️</button>
         <button class="edit-merchant icon">✎</button>
        <button class="view-merchant-items">View Merchant Items</button>
      </article>`)
}

function displayMerchantItems(event) {
  let merchantId = event.target.closest("article").id.split('-')[1]
  console.log("id: ",  merchantId)
  const filteredMerchantItems = filterByMerchant(merchantId)
  toggleToMerchantItemsView(merchantId, filteredMerchantItems)
}


function toggleToMerchantItemsView(id, items) {
  showingText.innerText = `All Items for Merchant #${id}`
  show([itemsView])
  hide([merchantsView])
  addRemoveActiveNav(itemsNavButton, merchantsNavButton)
  addNewButton.dataset.state = 'item'
  displayItems(items)
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


