import {test,expect} from '@playwright/test'

test.describe.parallel('Section_08_KO_UI_Tests_: Tips_&_Tricks',()=>{
    
    test('Test Skip Browser',async ({page, browserName})=>{

        //Skip for Chromium browser
        test.skip(browserName === 'chromium','Feature is not yet implemented for Chromium browser')
        
        await page.goto('https://example.com/')
      
    })

})//describe

  