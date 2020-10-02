import { LightningElement, api } from 'lwc';

export default class EventHandler extends LightningElement {
    @api message = '';

    handleCactusforceEvent() {
        this.message += 'Cactus Force Event thrown';
    }
}