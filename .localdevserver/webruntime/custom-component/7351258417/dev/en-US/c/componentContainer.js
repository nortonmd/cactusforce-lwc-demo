Webruntime.define('lwc/componentContainer', ['c/cforceDemoComponent', 'lwc'], function (_cCforceDemoComponent, lwc) { 'use strict';

    _cCforceDemoComponent = _cCforceDemoComponent && Object.prototype.hasOwnProperty.call(_cCforceDemoComponent, 'default') ? _cCforceDemoComponent['default'] : _cCforceDemoComponent;

    function tmpl($api, $cmp, $slotset, $ctx) {
      const {
        t: api_text,
        h: api_element,
        c: api_custom_element
      } = $api;
      return [api_element("p", {
        key: 0
      }, [api_text(" I am the container")]), api_custom_element("c-cforce-demo-component", _cCforceDemoComponent, {
        props: {
          "name": "Dave",
          "phonenumber": "480"
        },
        key: 1
      }, [])];
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.stylesheets = [];
    tmpl.stylesheetTokens = {
      hostAttribute: "lwc-componentContainer_componentContainer-host",
      shadowAttribute: "lwc-componentContainer_componentContainer"
    };

    class ComponentContainer extends lwc.LightningElement {}

    var componentContainer = lwc.registerComponent(ComponentContainer, {
      tmpl: _tmpl
    });

    return componentContainer;

});
