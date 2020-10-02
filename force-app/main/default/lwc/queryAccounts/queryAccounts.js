import { LightningElement } from 'lwc';
import getAccountList from '@salesforce/apex/AccountDataService.queryAccounts';

export default class QueryAccounts extends LightningElement {
    accounts;
    errors;

    handleLoad() {
        getAccountList()
            .then((result) => {
                this.accounts = result;
                this.error = undefined;
            })
            .catch((error) => {
                this.error = error;
                this.accounts = undefined;
            });
    }

}