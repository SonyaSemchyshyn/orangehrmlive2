class Admin{
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
    get linda(){
        return $('[role=\'listbox\']');
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
    get password(){
        let res = $$('input.oxd-input.oxd-input--active')[1];
        return res;
    }
    get passwordConfirm(){
        let res = $$('input.oxd-input.oxd-input--active')[2];
        return res;
    }
    get submitBtn(){
        return $('button.oxd-button')
    }
}
export default new Admin;