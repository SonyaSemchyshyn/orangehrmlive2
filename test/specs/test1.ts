let baseUrl = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
import LogInPage from "../pageobjects/logInPage";
import Admin from "../pageobjects/ad"
describe('', () => {
    it('User should log in', async () => {
        await browser.url(baseUrl);
        await LogInPage.logIn(); 
        await expect(browser).toHaveUrl('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
        // await expect(LogInPage.userDropDown).toHaveTextContaining('Collings');
    })
    it('Add user', async () => {
        await Admin.adminPanel.click();
        await Admin.addBtn.click();
        await Admin.userRole.click();
        await Admin.adminUserRole.click();
        await Admin.EmployeeName.addValue('Linda Jane Anderson');
        await browser.pause(3000);
        await Admin.linda.waitForDisplayed();
        await Admin.linda.click();
        await Admin.userNameInput.addValue('Pauas');
        await Admin.statusDropDown.click();
        await browser.scroll(0,40);
        await Admin.status.click();
       
        await Admin.password.click();
        await Admin.password.addValue('QWERTYqwerty12345!');
        await browser.scroll(100,0);
        await Admin.passwordConfirm.click();
        await Admin.passwordConfirm.addValue('QWERTYqwerty12345!');
        await browser.pause(3000);
        await Admin.submitBtn.click();

    })
})