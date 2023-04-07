let baseUrl = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
import LogInPage from "../pageobjects/logInPage";
import Admin from "../pageobjects/admin"
import SystemUser from "../pageobjects/systemUser";
import systemUser from "../pageobjects/systemUser";
describe('', () => {
    it('User should log in', async () => {
        await browser.url(baseUrl);
        await LogInPage.logIn(); 

        await expect(browser).toHaveUrl('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    });

    it('Add user', async () => {

        await Admin.adminPanel.click();
        await Admin.addBtn.click();
        await Admin.userRole.click();
        await Admin.adminUserRole.click();
        await Admin.EmployeeName.setValue("Peter Mac Anderson");
        await browser.pause(2000);
        await Admin.usersName.waitForDisplayed();
        await Admin.usersName.click();
        await Admin.userNameInput.setValue('Pauastt');
        await Admin.statusDropDown.click();
        await browser.scroll(0,40);
        await Admin.status.click();
        await (await Admin.getPassword()).setValue('QWERTYqwerty12345!');
        await (await Admin.getPasswordConfirm()).setValue('QWERTYqwerty12345!');
        await Admin.submitBtn.click();
        await browser.pause(4000);
        await expect(browser).toHaveUrl('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');

    });

    it('Verify that the user has been added', async()=>{

        await (await SystemUser.userName).setValue('Pauastt');
        await (await SystemUser.submitBtn).click();
        await expect(SystemUser.userNameRecord).toHaveText('Pauastt');
        await expect(SystemUser.recordRole).toHaveText('Admin');
        await expect(SystemUser.employeeNameRecord).toHaveText('Peter Anderson');
        await expect(SystemUser.recordStatus).toHaveText('Enabled');
    });

    it('Delete user record', async()=>{

        await (await SystemUser.deleteBtn).click();
        await (await SystemUser.confirmDeleteBtn).click();
        await expect(SystemUser.successMessage).toHaveTextContaining('Success')
    })
})