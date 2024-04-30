import { test, expect } from '@playwright/test'

test.describe.parallel('Section_06_KO_API_Tests : API Testing', () => {
  
  const baseUrl = 'https://reqres.in/api'

  test('GET Request - Get User Detail', async ({ request }) => {
    const response = await request.get(`${baseUrl}/users/1`)
    const responseBody = JSON.parse(await response.text())

    //Print the Response Data in console
    console.log(responseBody);

    //Assertions
    expect(response.status()).toBe(200)
    expect(responseBody.data.id).toBe(1)
    expect(responseBody.data.first_name).toBe('George')
    expect(responseBody.data.last_name).toBe('Bluth')
    expect(responseBody.data.email).toBeTruthy()
  })

})//describe