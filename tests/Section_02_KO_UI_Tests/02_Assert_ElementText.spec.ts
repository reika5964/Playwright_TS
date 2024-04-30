import {test,expect} from '@playwright/test'

test('Section_02_KO_UI_Tests - 02_Assert_ElementText', async ({page} )=> {

    //Go to the Application
    await page.goto("https://example.com/")

    //Get the element which has CSS Selector h1
    const heading_PageTitle = await page.locator('h1')

    //Assertion - Element: heading_PageTitle must have the text 'Example Domain'
    await expect(heading_PageTitle).toContainText('Example Domain')
    
})
