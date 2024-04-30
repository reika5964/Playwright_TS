import {test,expect} from '@playwright/test'

test.describe.parallel('Section_08_KO_UI_Tests_: Tips_&_Tricks',()=>{
    
    test('Test Fixme Annotation',async ({page, browserName})=>{

        //Skip for Chromium browser
        test.fixme(browserName === 'chromium','Test is not stable, needs Revision')
        
        await page.goto('https://example.com/')
      
    })

})//describe

  