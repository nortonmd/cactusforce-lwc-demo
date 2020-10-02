import { LightningElement } from 'lwc';

export default class EventThrower extends LightningElement {
    handleClick() {
        this.dispatchEvent( new CustomEvent( 'cactusforce'));
    }
}