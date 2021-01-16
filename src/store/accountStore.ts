import {action, makeObservable, observable, runInAction} from "mobx";
import * as AccountItems from "../models/accountType-items";

export class AccountStore {
    isLoading: boolean = true;

    accountTypeItems: AccountItems.IAccountTypeItem[] = [];

    selectedAccountItem: string = '';

    constructor() {
        makeObservable(this, {
            accountTypeItems: observable,
            selectedAccountItem: observable,
            isLoading: observable,
            init: action,
            setSelectedAccountItem: action
        });
    }

    setSelectedAccountItem(accountName: string) {
        this.selectedAccountItem = accountName
    }

    init() {
        setTimeout(()=> {
            runInAction(() => {
                this.accountTypeItems.push(
                    AccountItems.expert,
                    AccountItems.propertyManager,
                    AccountItems.tenant
                );
                this.isLoading = false;
            })
        },1000)
    }
}
