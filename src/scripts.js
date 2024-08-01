// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********


// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';

// An example of how you tell webpack to use a JS file
import merchantsData from './data/merchants';
import itemsData from './data/items';

console.log("merchantData :", merchantsData);
console.log("itemsData :", itemsData);

// Example of one way to import functions from the domUpdates file.  You will delete these examples.
import { exampleFunction1, exampleFunction2 } from './domUpdates';

exampleFunction1('Travis');
exampleFunction2('Travis')