import {test,expect} from '@playwright/test'

test('Section_02_KO_UI_Tests - Assertions', async ({page} )=> {

    await page.goto("https://example.com/")

    await expect(page).toHaveURL('https://example.com/')
    await expect(page).toHaveTitle('Example Domain')

    const element_heading = await page.locator('h1')
    await expect(element_heading).toBeVisible()
    // await expect(element_heading).toHaveAttribute()
    // await expect(element_heading).toHaveCSS()
    await expect(element_heading).toContainText('Example')
    await expect(element_heading).toHaveText('Example Domain')
    await expect(element_heading).toHaveCount(1)
    
    const element_noExistence = await page.locator('h112874')
    await expect(element_noExistence).not.toBeVisible()

})


