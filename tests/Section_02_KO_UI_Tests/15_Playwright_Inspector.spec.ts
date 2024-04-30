import {test} from '@playwright/test'

import {loadHomePage, assertPageTitle, assertPageURL} from '../../utils/Utils_Example'

test('Section_02_KO_UI_Tests - Custom Functions', async ({page} )=> {

    await loadHomePage(page)

    await page.pause()
    
    await assertPageTitle(page)

    await assertPageURL(page)
       
})
