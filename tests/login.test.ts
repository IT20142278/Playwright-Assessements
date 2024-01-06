/* Brief Overview of the Test case
===================================== 
Test case Name - To Verify the Login Request with Valid Credentials.
preconditions and Method  - Assuming that an account has already been created, 
verify the ability to log in successfully by attempting to log in with the created user's credentials.
Expected output - User should be able to log in successfully with the status code '200'
*/

import { test, expect } from '@playwright/test';

// Defining the URL for the login page
const url = "https://onlinelibrary.wiley.com/action/doLogin?societyURLCode=";

// Defining a test case with the name 'Verify the Login request with valid credentials'
test.only('Verify the Login request with valid credentials', async ({ request }) => {

    // Making a POST request to the specified URL with login credentials
    let response = await request.post(
        url,
        {
             // Providing login and password as data in the request body
            data:{
                login: "kasunijayasekara52@gmail.com",
                password: "Kasuni@123"
            }


        }

    )
// Expecting the response status to be 200
expect(response.status()).toBe(200);

// Expecting the response status to be truthy (non-zero)
expect(response.status()).toBeTruthy();


});