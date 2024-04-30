import {test,expect} from '@playwright/test'

import {loadHomePage, assertPageTitle, assertPageURL} from '../../utils/Utils_Example'

test('Section_02_KO_UI_Tests - 16_ArtifactsOnFail_Video_Screenshot.spec', async ({page} )=> {

    await loadHomePage(page)
    
    //await assertPageTitle(page)
    console.log('Assertion for Page Title')
    await expect(page).toHaveTitle('Example Domain - Fail')

    await assertPageURL(page)
       
})
