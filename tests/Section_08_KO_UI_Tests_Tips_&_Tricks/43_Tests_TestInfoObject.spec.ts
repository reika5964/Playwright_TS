import {test,expect} from '@playwright/test'

test.describe.parallel('Section_08_KO_UI_Tests_: Tips_&_Tricks',()=>{
    
    test('TestInfo Object',async ({page},TestInfo)=>{

        await page.goto('https://example.com/')

        //Print the TestInfo object
        //console.log(TestInfo)

        console.log(TestInfo.title)
        console.log(TestInfo.file)
        console.log(TestInfo.outputDir)
        console.log(TestInfo.timeout)
    })

    test('TestInfo Object',async ({page},TestInfo)=>{
        console.log(TestInfo.title)
        console.log(TestInfo.file)
        console.log(TestInfo.outputDir)
        console.log(TestInfo.timeout)
    })


})//describe

  