import { test, expect } from '@playwright/test';
import fs from 'fs/promises';

test('test', async ({ page }) => {
  //Go to https://www.saucedemo.com/
      await page.goto('https://www.saucedemo.com/');
      //Enter the username and password
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  //Click on login button
  await page.locator('[data-test="login-button"]').click();
  //Add the first item to the cart (sauce labs fleece jacket)
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();

  //Open the second item and add it to the cart (sauce labs onesie)
  await page.locator('[data-test="item-2-title-link"]').click();
  await page.locator('[data-test="add-to-cart"]').click();

  await page.locator('[data-test="shopping-cart-link"]').click();

     // Assert the number of products in the cart
   const cartCount = await page.innerText('.shopping_cart_badge');
   console.assert(cartCount === '2', `Expected cart count to be 2, but got ${cartCount}`);

   //Assert order details on the overview page
   const overviewProductNames = await page.$$eval('.cart_item .inventory_item_name', items => items.map(item => item.innerText));
   console.assert(overviewProductNames.length === 2, `Expected 2 products on overview page, but got ${overviewProductNames.length}`);

  //Proceed to make the order
  await page.locator('[data-test="checkout"]').click();

//Load test data
const loadTestData=async()=>{
  const data=await fs.readFile('./tests/testData/testdata.json','utf8');
  return JSON.parse(data);
};

//Use the test data
  const testData= await loadTestData();
  const firstName=testData.firstName;
  const lastName=testData.lastName
  const postalCode=testData.postalCode

    await page.locator('[data-test="firstName"]').click();
      await page.fill('[data-test="firstName"]',firstName);

  await page.locator('[data-test="lastName"]').click();
    await page.fill('[data-test="lastName"]',lastName);

  await page.locator('[data-test="postalCode"]').click();
    await page.fill('[data-test="postalCode"]',postalCode);

  await page.locator('[data-test="continue"]').click();
  //Complete the purchase
  await page.locator('[data-test="finish"]').click();

     // Verify the "Complete" page
     const completeMessage = await page.innerText('.complete-header');
   console.assert(completeMessage.includes('THANK YOU FOR YOUR ORDER'), `Unexpected message: ${completeMessage}`);
  //Close the browser  
  await page.close();
});