import {test,expect} from '@playwright/test'
import {getRandomString} from '../../utils/Utils_DataHelpers'

    test('Section_08_KO_UI_Tests_ - Get Random String',async ({browser})=>{
        
        let randomString = await getRandomString()
        console.log(randomString)    

        randomString = await getRandomString()
        console.log(randomString)    

        randomString = await getRandomString()
        console.log(randomString)    

    })//test

  