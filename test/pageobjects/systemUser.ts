class SystemUser{
    private systemUsersCotainerLocator = '.oxd-table-filter';
    private recordsContainerLocators = '#data-v-c186142a';

    get systemUsersContainer(){
        return $(this.systemUsersCotainerLocator)
    }
    get userName(){
        return this.systemUsersContainer.$('.oxd-input.oxd-input--active')
    }
    get submitBtn(){
        return $('button[type="submit"]');
    }
    get recordsContainer(){
        return $(this.recordsContainerLocators);
    }
    get userNameRecord(){
        return $("//div[contains(text(),'Pauastt')]");
    }
    get recordRole(){
        return $$(".oxd-table-cell.oxd-padding-cell")[2];
    }
    get employeeNameRecord(){
        return $$(".oxd-table-cell.oxd-padding-cell")[3];
    }
    get recordStatus(){
        return $$(".oxd-table-cell.oxd-padding-cell")[4];
    }
    get deleteBtn(){
        return $$('.oxd-icon-button.oxd-table-cell-action-space')[0]
    }
    get confirmDeleteBtn(){
        return $('.oxd-button--label-danger')
    }

    get successMessage(){
        return $('[aria-live=\'assertive\']')
    }
    
}
export default new SystemUser;