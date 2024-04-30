import {test,expect} from '@playwright/test'
import {getRandomNumber} from '../../utils/Utils_DataHelpers'

    test('Section_08_KO_UI_Tests_ - Get Random Number',async ({browser})=>{
        
        let randomNumber = await getRandomNumber()
        console.log(randomNumber)

        randomNumber = await getRandomNumber()
        console.log(randomNumber)
        
        randomNumber = await getRandomNumber()
        console.log(randomNumber)

    })//test

  