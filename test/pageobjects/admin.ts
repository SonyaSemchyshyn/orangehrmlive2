class Admin{
    private userFormContainerLocator = '.orangehrm-card-container';
    userName: string = 'Paule01010';
    password: string = 'QWERTYqwerty12345!';
    emploeeName: string = 'Peter Mac Anderson';
    get errorMessage(){
        return $('//*[contains(text(), \'Should be at least 5 characters\')]')
    }
    get successMessage(){
        return $('//*[contains(text(), \'Successfully Saved\')]')
    }
    get enabledStatus(){
        return $('//*[contains(text(), \'Enabled\')]')
    }
    get checkAddedUser(){
        return $('//*[contains(text(), \'Paule01010\')]');
    }
    async createUser(){
        await this.userRole.click();
        await this.adminUserRole.click();
        await this.EmployeeName.setValue(this.emploeeName);
        await (await this.autocompleteEmployeeName).waitForDisplayed();
        await this.usersName.click();
        await this.userNameInput.setValue(this.userName);
        await browser.pause(1000)
        await (await this.errorMessage).waitForExist({ reverse: true });
        await this.statusDropDown.click();
        await (await this.enabledStatus).waitForDisplayed();
        await (await this.enabledStatus).click();
        await (await this.getPassword()).setValue(this.password);
        await (await this.getPasswordConfirm()).setValue(this.password);
        await this.submitBtn.click();
    }
    get adminPanel(){
        return $('a[href=\'/web/index.php/admin/viewAdminModule\']');
    }

    get addBtn(){
        return $('.orangehrm-header-container .oxd-button')
    }

    get userRole(){
        return $('div.oxd-select-text-input');
    }

    get adminUserRole(){
        return $('[role=\'listbox\']');
    }
    
    get EmployeeName(){
        return $('input[placeholder="Type for hints..."]');
    }

    get autocompleteEmployeeName(){
        return $('//*[contains(text(), \'Peter Mac Anderson\')]')
    }

    get usersName(){
        return $$('div.oxd-autocomplete-dropdown')[0];
    }

    get userNameInput(){
        return $('div[data-v-2fe357a6] > input.oxd-input.oxd-input--active[data-v-844e87dc][autocomplete=\'off\']');  
    }

    get statusDropDown(){
        return $$('.oxd-select-text--after .oxd-icon')[1];
    }

    get status(){
        return $('[role=\'listbox\']');
    };

    get userFormContainer(){
        return $(this.userFormContainerLocator)
    }

    private get userPasswordsInputs(){
        return this.userFormContainer.$('.user-password-row').$$('.oxd-input');
    }

    async getPassword(){
        const passwordInput = await this.userPasswordsInputs;
        return passwordInput[0];
    }

    async getPasswordConfirm(){
        const confirmPasswordInput = await this.userPasswordsInputs;
        return confirmPasswordInput[1];
    }

    get submitBtn(){
        return $$('button.oxd-button')[1]
    }

}
export default new Admin;