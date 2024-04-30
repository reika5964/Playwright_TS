import {test,expect} from '@playwright/test'
import {getRandomEmail} from '../../utils/Utils_DataHelpers'

    test('Section_08_KO_UI_Tests_ - Get Random Email',async ({browser})=>{
        
        let randomEmail = await getRandomEmail()
        console.log(randomEmail)

        randomEmail = await getRandomEmail()
        console.log(randomEmail)

        randomEmail = await getRandomEmail()
        console.log(randomEmail)

    })//test

  