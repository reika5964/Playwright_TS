import { test, expect } from '@playwright/test'

test.describe.parallel('Section_06_KO_API_Tests : API Testing', () => {
  
  const baseUrl = 'https://reqres.in/api'

  test('Simple API Test - Extract Response Body', async ({ request }) => {

    // This is a GET request 
    // URL: https://reqres.in/api/users/3
    const response = await request.get(`${baseUrl}/users/3`)

    //Assertion for Response Status Code
    expect(response.status()).toBe(200)

    //Extracting the Response Body
    const responseBody = JSON.parse(await response.text())

    console.log(responseBody)

  })

})//describe