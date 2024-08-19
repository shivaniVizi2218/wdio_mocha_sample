const loginPage = require('../pageobjects/orangeHRM_login.page')
const loginData = require('../../data/orangeHRM_data.json');
describe('sample test', () =>{
    
    it("first test", async() => {
        browser.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
       // browser.waitForExist(await loginPage.userName, 2000);        
        await loginPage.login('Admin','admin123');
        await loginPage.landingPage();
    })


})