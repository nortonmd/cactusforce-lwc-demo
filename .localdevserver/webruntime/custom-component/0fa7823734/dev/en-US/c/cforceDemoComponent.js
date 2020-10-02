Webruntime.define('lwc/cforceDemoComponent', ['lwc'], function (lwc) { 'use strict';

    function tmpl($api, $cmp, $slotset, $ctx) {
      const {
        t: api_text,
        d: api_dynamic
      } = $api;
      return [api_text("Hello, "), api_dynamic($cmp.name), api_text("! Your phone number is "), api_dynamic($cmp.phoneNumber)];
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.stylesheets = [];
    tmpl.stylesheetTokens = {
      hostAttribute: "lwc-cforceDemoComponent_cforceDemoComponent-host",
      shadowAttribute: "lwc-cforceDemoComponent_cforceDemoComponent"
    };

    class CforceDemoComponent extends lwc.LightningElement {
      constructor(...args) {
        super(...args);
        this.name = 'Cactusforce';
        this.phoneNumber = '';
      }

      connectedCallback() {
        console.log("I was fired!!!");
      }

    }

    lwc.registerDecorators(CforceDemoComponent, {
      publicProps: {
        name: {
          config: 0
        },
        phoneNumber: {
          config: 0
        }
      }
    });

    var cforceDemoComponent = lwc.registerComponent(CforceDemoComponent, {
      tmpl: _tmpl
    });

    return cforceDemoComponent;

});
