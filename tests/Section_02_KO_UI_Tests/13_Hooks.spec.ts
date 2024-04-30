import {test,expect} from '@playwright/test'

test.describe('Section_02_KO_UI_Tests - HOOKS',()=> {

    test.beforeAll(async() =>{
        console.log('beforeAll')
    })//beforeAll

    test.beforeEach(async() =>{
        console.log('beforeEach')
    })//beforeEach

    test('Section_02_KO_UI_Tests - Test #1 ', async ()=> {
        console.log('Test #1')
    })
    test('Section_02_KO_UI_Tests - Test #2 ', async ()=> {
        console.log('Test #2')
    })
    test('Section_02_KO_UI_Tests - Test #3 ', async ()=> {
        console.log('Test #3')
    })

    test.afterEach(async() =>{
        console.log('afterEach')
    })//afterEach

    test.afterAll(async() =>{
        console.log('afterAll')
    })//afterAll
})
  