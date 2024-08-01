// //NOTE: Your DOM manipulation will occur in this file
// import { filterByMerchant } from './scripts';

// //Here are 2 example functions just to demonstrate one way you can export/import between the two js files. You'll want to delete these once you get your own code going.
// const exampleFunction1 = (person) => {
//   console.log(`oh hi there ${person}`)
// }

// const exampleFunction2 = (person) => {
//   console.log(`bye now ${person}`)
// }

// const itemsView = document.querySelector("#items-view")
// const merchantsView = document.querySelector("#merchants-view")


// function setUpEventListeners(items, merchants) {
//   // document.addEventListener('DOMContentLoaded', () => {
//   //   console.log('hi')
//   //   displayItems(items)
//   // })
  
//   document.addEventListener('DOMContentLoaded', () => {
//       console.log('hi merch')
//       displayMerchants(merchants)
//   })
  
//   merchantsView.addEventListener('click', (event) => {
//       console.log('event: ', event)
//       displayMerchantItems(event)
//   })
// }

// function displayItems(items) {
//   items.forEach(item => {
//     itemsView.innerHTML += `
//      <article class="item" id="item-${item.id}">
//           <img src="" alt="">
//           <h2>${item.attributes.name}</h2>
//           <p>${item.attributes.description}</p>
//           <p>$${item.attributes.unit_price}</p>
//           <button>ORDER</button>
//         </article>
//     `
//   })
// }

// function displayMerchants(merchants) {
//     merchants.forEach(merchant => {
//         merchantsView.innerHTML += 
//         `<article class="merchant" id="merchant-${merchant.id}">
//           <h3 class="merchant-name">${merchant.attributes.name}</h3>
//         <button class="view-items-button">View Merchant Items</button>
//         </article>`
//     })
// }

// // function displaySingleItem(itemData) {

// // }
// const merchantSpecificItems = {
//   "data": [
//       {
//           "id": "4",
//           "type": "item",
//           "attributes": {
//               "name": "Item Nemo Facere",
//               "description": "Sunt eum id eius magni consequuntur delectus veritatis. Quisquam laborum illo ut ab. Ducimus in est id voluptas autem.",
//               "unit_price": 42.91,
//               "merchant_id": 2
//           }
//       },
//       {
//           "id": "5",
//           "type": "item",
//           "attributes": {
//               "name": "Item Expedita Aliquam",
//               "description": "Voluptate aut labore qui illum tempore eius. Corrupti cum et rerum. Enim illum labore voluptatem dicta consequatur. Consequatur sunt consequuntur ut officiis.",
//               "unit_price": 687.23,
//               "merchant_id": 1
//           }
//       },
//       {
//           "id": "6",
//           "type": "item",
//           "attributes": {
//               "name": "Item Provident At",
//               "description": "Numquam officiis reprehenderit eum ratione neque tenetur. Officia aut repudiandae eum at ipsum doloribus. Iure minus itaque similique. Ratione dicta alias asperiores minima ducimus nesciunt at.",
//               "unit_price": 159.25,
//               "merchant_id": 1
//           }
//       },
//       {
//           "id": "7",
//           "type": "item",
//           "attributes": {
//               "name": "Item Expedita Fuga",
//               "description": "Fuga assumenda occaecati hic dolorem tenetur dolores nisi. Est tenetur adipisci voluptatem vel. Culpa adipisci consequatur illo. Necessitatibus quis quo velit sed repellendus ut amet.",
//               "unit_price": 311.63,
//               "merchant_id": 1
//           }
//       },
//       {
//           "id": "8",
//           "type": "item",
//           "attributes": {
//               "name": "Item Est Consequuntur",
//               "description": "Reprehenderit est officiis cupiditate quia eos. Voluptatem illum reprehenderit quo vel eligendi. Et eum omnis id ut aliquid veniam.",
//               "unit_price": 343.55,
//               "merchant_id": 1
//           }
//       },
//       {
//           "id": "9",
//           "type": "item",
//           "attributes": {
//               "name": "Item Quo Magnam",
//               "description": "Culpa deleniti adipisci voluptates aut. Sed eum quisquam nisi. Voluptatem est rerum est qui id reprehenderit. Molestiae laudantium non velit alias. Ipsa consequatur modi quibusdam.",
//               "unit_price": 225.82,
//               "merchant_id": 1
//           }
//       },
//       {
//           "id": "10",
//           "type": "item",
//           "attributes": {
//               "name": "Item Quidem Suscipit",
//               "description": "Reiciendis sed aperiam culpa animi laudantium. Eligendi veritatis sint dolorem asperiores. Earum alias illum eos non rerum.",
//               "unit_price": 340.18,
//               "merchant_id": 1
//           }
//       },
//       {
//           "id": "11",
//           "type": "item",
//           "attributes": {
//               "name": "Item Rerum Magni",
//               "description": "Iusto ratione illum. Adipisci est perspiciatis temporibus. Ducimus id dolorem voluptas eligendi repellat iure sit.",
//               "unit_price": 130.46,
//               "merchant_id": 1
//           }
//       },
//       {
//           "id": "12",
//           "type": "item",
//           "attributes": {
//               "name": "Item Et Cumque",
//               "description": "Ducimus id perferendis. Libero ullam odit aut quisquam non. Rem eaque distinctio quos. Eaque nihil odit.",
//               "unit_price": 395.15,
//               "merchant_id": 1
//           }
//       }
//     ]
//   }


// function displayMerchantItems(event) {
//   if (!event.target.classList.contains("view-items-button")) {
//     return
//   }
//   console.log('et:', event.target)
//   //get the merchant id
//   let merchantId = event.target.parentElement.id.split('-')[1]
//   console.log("id: ",  merchantId)
//   //fetch the items for that specific merchant
//   //display all items for that merchant
//   const filteredMerchantItems = filterByMerchant(merchantId)
//   console.log("fmi: ", filteredMerchantItems)
//   displayItems(filteredMerchantItems)
// }

// function show(elements) {
//   elements.forEach(element => {
//     element.classList.remove('hidden')
//   })
// }

// function hide(elements) {

// }

// export {
//   setUpEventListeners

// }