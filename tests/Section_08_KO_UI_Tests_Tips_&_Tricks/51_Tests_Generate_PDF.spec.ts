import {test,expect} from '@playwright/test'

//Rahul Shetty
test.describe.configure( { mode : 'parallel' } );
//test.describe.parallel('Section_08_KO_UI_Tests_: Tips_&_Tricks',()=>{
    
    test.skip('Section_08_KO_UI_Tests_ - Generate PDF',async ({browser})=>{
        
        // 1. Go to package.json
        // 2. Run the node script:
            // npm run test_Tips_Generate_PDF_Github_Profile_rajatt95
            // npm run test_Tips_Generate_PDF_Github_Page_rajatt95
        
    })//test

//})//describe

  