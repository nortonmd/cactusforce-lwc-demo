import { LightningElement, api } from 'lwc';

export default class CforceDemoComponent extends LightningElement {
    @api name = 'Cactusforce';
    @api phonenumber = '';

    connectedCallback() {
        console.log( "I was fired!!!");
    }
}