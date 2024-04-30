import {test,expect} from '@playwright/test'

test('Section_02_KO_UI_Tests - Go to Application', async ({page} )=> {

    //Go to the Application
    await page.goto("https://example.com/")
    
})
