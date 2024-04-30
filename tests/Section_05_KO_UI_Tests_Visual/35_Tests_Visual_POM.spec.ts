import { test, expect } from '@playwright/test'
import { HomePage } from '../../page-objects/HomePage'
import { LoginPage } from '../../page-objects/LoginPage'

test.describe.parallel('Section_05_KO_UI_Tests_Visual : Visual Regression Testing Example - Page Object Model', () => {
  
  let homepage: HomePage
  let loginpage: LoginPage

  test.beforeEach(async ({ page }) => {
    homepage = new HomePage(page)
    loginpage = new LoginPage(page)

    await homepage.visit()
    await homepage.clickOnSignIn()
  })

  test('Login Form', async ({ page }) => {
    await loginpage.snapshotLoginForm()
  })

  test('Login Error Message', async ({ page }) => {
    await loginpage.login('Fail', 'some invalid password')
    await loginpage.snapshotErrorMessage()
  })

})//describe