public with sharing class AccountDataService {

    @AuraEnabled
    public static List<Account> queryAccounts() {
        return [SELECT Id, Name FROM Account LIMIT 10];
    }
}