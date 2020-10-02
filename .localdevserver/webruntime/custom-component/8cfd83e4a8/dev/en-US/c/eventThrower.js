Webruntime.define('lwc/eventThrower', ['lwc'], function (lwc) { 'use strict';

    function tmpl($api, $cmp, $slotset, $ctx) {
      return [];
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.stylesheets = [];
    tmpl.stylesheetTokens = {
      hostAttribute: "lwc-eventThrower_eventThrower-host",
      shadowAttribute: "lwc-eventThrower_eventThrower"
    };

    class EventThrower extends lwc.LightningElement {
      handleClick() {
        this.dispatchEvent(new CustomEvent('cactusforce'));
      }

    }

    var eventThrower = lwc.registerComponent(EventThrower, {
      tmpl: _tmpl
    });

    return eventThrower;

});
