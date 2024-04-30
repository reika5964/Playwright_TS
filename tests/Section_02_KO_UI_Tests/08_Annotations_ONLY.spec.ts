import {test,expect} from '@playwright/test'

test.only('Section_02_KO_UI_Tests - Annotations - ONLY', async ({page} )=> {

        //Go to the Application
        await page.goto("http://zero.webappsecurity.com/")
    
        //Get the element from the page which has ID 'signin_button' and click on it
        await page.click('#signin_button')
    
        //Get the element from the page which has text 'Sign in' and click on it
        await page.click('text=Sign in')
    
        //Get the element which has class 'alert-error'
        const msg_error_login = await page.locator('.alert-error')
    
        //Assertion - Element: msg_error_login must have the text 'Login and/or password are wrong.'
        await expect(msg_error_login).toContainText('Login and/or password are wrong.')
        
})    

test('Section_02_KO_UI_Tests - 02_Assert_ElementText - Annotations - ONLY', async ({page} )=> {

    //Go to the Application
    await page.goto("https://example.com/")

    //Get the element which has CSS Selector h1
    const heading_PageTitle = await page.locator('h1')

    //Assertion - Element: heading_PageTitle must have the text 'Example Domain'
    await expect(heading_PageTitle).toContainText('Example Domain')
    
})


  