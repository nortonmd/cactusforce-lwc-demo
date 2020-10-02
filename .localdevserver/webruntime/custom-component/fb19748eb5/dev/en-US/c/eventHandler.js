Webruntime.define('lwc/eventHandler', ['lwc', 'c/eventThrower'], function (lwc, _cEventThrower) { 'use strict';

    _cEventThrower = _cEventThrower && Object.prototype.hasOwnProperty.call(_cEventThrower, 'default') ? _cEventThrower['default'] : _cEventThrower;

    function tmpl($api, $cmp, $slotset, $ctx) {
      const {
        t: api_text,
        d: api_dynamic,
        h: api_element,
        b: api_bind,
        c: api_custom_element
      } = $api;
      const {
        _m0
      } = $ctx;
      return [api_element("p", {
        key: 0
      }, [api_text("I bring you this message ["), api_dynamic($cmp.message), api_text("]")]), api_custom_element("c-event-thrower", _cEventThrower, {
        key: 1,
        on: {
          "cactusforce": _m0 || ($ctx._m0 = api_bind($cmp.handleCactusforceEvent))
        }
      }, [])];
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.stylesheets = [];
    tmpl.stylesheetTokens = {
      hostAttribute: "lwc-eventHandler_eventHandler-host",
      shadowAttribute: "lwc-eventHandler_eventHandler"
    };

    class EventHandler extends lwc.LightningElement {
      constructor(...args) {
        super(...args);
        this.message = '';
      }

      handleCactusforceEvent() {
        this.message += 'Cactus Force Event thrown';
      }

    }

    lwc.registerDecorators(EventHandler, {
      publicProps: {
        message: {
          config: 0
        }
      }
    });

    var eventHandler = lwc.registerComponent(EventHandler, {
      tmpl: _tmpl
    });

    return eventHandler;

});
