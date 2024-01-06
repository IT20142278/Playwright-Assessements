/* Brief Overview of the Test case
===================================== 
Test case Name - To verify that a user can successfully delete items from their favorites list on the website.
preconditions and Method - Assuming that there is already an Article named One More Circle in the favorite list and checking whether 
it can be deleted when pressing the delete icon.
Expected Output : The item in the  favorite list should get deleted without any errors.*/

import { test, expect } from '@playwright/test';

test('Delete Favorites on Wiley Online Library', async ({ page }) => {
  // Navigate to the favorites page
  await page.goto('https://onlinelibrary.wiley.com/action/showPreferences?menuTab=favorites');

  // Assuming there is a delete button associated with the favorite item
  
  const deleteButton = await page.$('.favorite__name:has-text("One More Circle") + .icon-trash-can.delete-item');

  // Check if the delete button is found
  expect(deleteButton).not.toBeNull();

  // Get the text of the favorite item before deletion
  const favoriteTextBeforeDeletion = await page.textContent('.favorite__name:has-text("One More Circle")');

  // Click the delete button
  await deleteButton?.click();

  // Wait for page update after deletion
  await page.waitForLoadState();

  // Check if the favorite item is no longer present
  const favoriteTextAfterDeletion = await page.textContent('.favorite__name:has-text("One More Circle")');

  expect(favoriteTextBeforeDeletion).not.toEqual(favoriteTextAfterDeletion);

  
});
