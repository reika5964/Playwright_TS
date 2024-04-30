import {test,expect} from '@playwright/test'

test.describe.parallel('Section_08_KO_UI_Tests_: Tips_&_Tricks',()=>{
    
    test('Mouse Movement Simulation',async ({page})=>{
        
        await page.goto('https://example.com/')

        await page.mouse.move(0,0)
        await page.waitForTimeout(2000)
        await page.mouse.down()
        await page.waitForTimeout(2000)
        await page.mouse.move(0,100)
        await page.waitForTimeout(2000)
        await page.mouse.up()
        await page.waitForTimeout(2000)
      
    })//test

})//describe

  