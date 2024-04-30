import {test,expect} from '@playwright/test'

const automationTools =['Appium','Cypress','Playwright','Selenium','RestAssured'];

//Rahul Shetty
test.describe.configure( { mode : 'parallel' } );

//test.describe.parallel('Test suite - Execution: PARALLEL',()=>{}//describe

    for(const automationTool of automationTools){
        test("Section_08_KO_UI_Tests - Running Test for "+automationTool, async({page})=>{
            await page.goto('https://www.google.com/')
            await page.type("[name='q']",automationTool)
    
            //Press ENTER using Keyboard
            await page.keyboard.press('Enter')
    
            await expect(page).toHaveTitle(automationTool + ' - Google Search')
    
            await page.waitForTimeout(3000)

        })//test
    }//for
    
