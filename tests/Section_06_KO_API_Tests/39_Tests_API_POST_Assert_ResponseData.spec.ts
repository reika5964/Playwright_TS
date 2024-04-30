import { test, expect } from '@playwright/test'

test.describe.parallel('Section_06_KO_API_Tests : API Testing', () => {
  
  const baseUrl = 'https://reqres.in/api'

  test('POST Request - Create New User', async ({ request }) => {
    const response = await request.post(`${baseUrl}/user`, {
      //Request Body
      data: {
        id: 1000,
      },
    })
    //Extract the Response
    const responseBody = JSON.parse(await response.text())
    //Assertions
    expect(responseBody.id).toBe(1000)
    expect(responseBody.createdAt).toBeTruthy()
  })

  test('POST Request - Login', async ({ request }) => {
    const response = await request.post(`${baseUrl}/login`, {
      //Request Body
      data: {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      },
    })
    
    //Extract the Response
    const responseBody = JSON.parse(await response.text())
    //Assertions
    expect(response.status()).toBe(200)
    expect(responseBody.token).toBeTruthy()
  })

  test('POST Request - Login Fail', async ({ request }) => {
    const response = await request.post(`${baseUrl}/login`, {
      //Request Body
      data: {
        email: 'eve.holt@reqres.in',
      },
    })
    //Extract the Response
    const responseBody = JSON.parse(await response.text())

    //Assertions
    expect(response.status()).toBe(400)
    expect(responseBody.error).toBe('Missing password')
  })


})//describe