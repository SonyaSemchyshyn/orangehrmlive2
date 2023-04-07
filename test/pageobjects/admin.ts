class Admin{
    private userFormContainerLocator = '.orangehrm-card-container';
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
        return $('button.oxd-button')
    }
}
export default new Admin;