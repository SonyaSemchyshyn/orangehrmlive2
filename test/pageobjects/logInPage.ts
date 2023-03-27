import { ChainablePromiseElement } from 'webdriverio';
class LogInPage{
    login:string = 'Admin';
    password:string = 'admin123'; 
    get userNameInput(): ChainablePromiseElement<WebdriverIO.Element>{
        return $('.oxd-input[name=\'username\']');
    }

    get userPasswordInput(): ChainablePromiseElement<WebdriverIO.Element>{
        return $('.oxd-input[name=\'password\']');
    }

    get submitBtn(): ChainablePromiseElement<WebdriverIO.Element>{
        return $('button[type=\'submit\']');
    }

    get userDropDown(){
        return $('.oxd-userdropdown-name')
    }
    async logIn(){
        await this.userNameInput.waitForDisplayed()
        await this.userNameInput.click();
        await this.userNameInput.addValue(this.login);
        await this.userPasswordInput.click();
        await this.userPasswordInput.addValue(this.password);
        await this.submitBtn.click();
    }
}
export default new LogInPage;