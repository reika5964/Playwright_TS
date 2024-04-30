import {test,expect} from '@playwright/test'

test.describe.parallel('Section_08_KO_UI_Tests_: Tips_&_Tricks',()=>{
    
    test('Test Retires_Using_CLI',async ({page})=>{
        
        await page.goto('dummy_URL')
      
    })

})//describe

  