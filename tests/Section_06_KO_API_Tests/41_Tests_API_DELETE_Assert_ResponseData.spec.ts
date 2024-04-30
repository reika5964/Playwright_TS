import { test, expect } from '@playwright/test'

test.describe.parallel('Section_06_KO_API_Tests : API Testing', () => {
  
  const baseUrl = 'https://reqres.in/api'

  test('DELETE Request - Delete User', async ({ request }) => {
    //This is a DELETE Request
    const response = await request.delete(`${baseUrl}/users/2`)

    //Assertion: Response Status Code to be 204
    expect(response.status()).toBe(204)
  })

})//describe