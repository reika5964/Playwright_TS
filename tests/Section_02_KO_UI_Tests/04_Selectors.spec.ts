import {test,expect} from '@playwright/test'

test.skip('Section_02_KO_UI_Tests - Selectors', async ({page} )=> {

    //Get the element from the page and click on it

    //Text 
    await page.click('text=Sign in')

    //CSS Selector 
    await page.click('button') // Tag
    await page.click('#id') // ID
    await page.click('.class') // Class

     //Only Visible 
     await page.click('.submit-button:visible') //Class
   
     //Combinations
     await page.click('#username .first') // ID and Class

     //XPath
     await page.click('//button') // Tag

})
