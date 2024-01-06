/* Brief Overview of the Test case
===================================== 
Test case Name - To ensure that the search functionality on the website returns accurate and relevant results.
Precondition: In this scenario, Assuming that there is a book called "F# for Scientists" with the ISBN No - "9780470242117"
Method done : Here I got a random ISBN No and then type it in the search bar and checking whether it shows the correct results.
Expected Output : User is able to get the correct search results relevant to the provided ISBN Value. 
(It should display the correct book title in the search results relevant to the entered ISBN).
*/

import { test, expect } from '@playwright/test';
const SEARCH_BOX = "//input[@id='searchField1']"; 
const ISBN = "9780470242117";

test('Verify the Product Search functionality of onlinelibrary.wiley.com', async ({ page }) => {
   
await page.goto('https://onlinelibrary.wiley.com/');

  //  title 
  await expect(page).toHaveTitle("Wiley Online Library | Scientific research articles, journals, books, and reference works", { timeout: 10000 });

  // Type ISBN in the search box and press Enter
  await page.fill(SEARCH_BOX, ISBN);
  await page.press(SEARCH_BOX, 'Enter');

  // Assuming the search results take some time to load, you may need to wait for them
 
  const searchResultTitleSelector = '.meta__title span.hlFld-Title';
  await page.waitForSelector(searchResultTitleSelector, { timeout: 2000 });
  

  // Store the book title in a variable
  const bookTitle = await page.innerText(searchResultTitleSelector);

  // Validate that the search results contain the correct book title
  await expect(bookTitle).toContain('F# for Scientists');
  
  
});
