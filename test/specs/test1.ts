let baseUrl = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
import LogInPage from "../pageobjects/logInPage";
import Admin from "../pageobjects/admin"
import SystemUser from "../pageobjects/systemUser";
describe('', () => {
    it('User should log in', async () => {
        await browser.url(baseUrl);
        await LogInPage.logIn(); 

        await expect(browser).toHaveUrl('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    });

    it('Add user', async () => {

        await Admin.adminPanel.click();
        await Admin.addBtn.click();
        await Admin.createUser();
        await (await Admin.successMessage).waitForDisplayed;
        expect(Admin.successMessage).toHaveTextContaining('Successfully Saved');
        expect(browser).toHaveUrl('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
    });

    it('Verify that the user has been added', async()=>{

        await (await SystemUser.userName).setValue(Admin.userName);
        await (await SystemUser.submitBtn).click();
        await expect(SystemUser.userNameRecord).toHaveText(Admin.userName);
        await expect(SystemUser.recordRole).toHaveText('Admin');
        await expect(SystemUser.employeeNameRecord).toHaveText('Peter Anderson');
        await expect(SystemUser.recordStatus).toHaveText('Enabled');
    });

    it('Delete user record', async()=>{

        await (await SystemUser.deleteBtn).click();
        await (await SystemUser.confirmDeleteBtn).click();
        await expect(SystemUser.successMessage).toHaveTextContaining('Success');

        await (await SystemUser.userName).setValue(Admin.userName);
        await (await SystemUser.submitBtn).click();
        expect(SystemUser.noResultsFoundMessage).toHaveTextContaining('No Records Found')
    })
})