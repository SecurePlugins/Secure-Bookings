(()=>{"use strict";var __webpack_require__={n:module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},d:(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},o:(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop)};const external_jQuery_namespaceObject=window.jQuery;var $;$=__webpack_require__.n(external_jQuery_namespaceObject)(),function(){const minDuration=$("#_wc_booking_min_duration"),maxDuration=$("#_wc_booking_max_duration");let minDurationInitialVal=minDuration.val(),maxDurationInitialVal=maxDuration.val(),error="",hasError=!1;minDuration.add(maxDuration).on("input",(function(){const isDurationComparisonValid=Number(minDuration.val())<=Number(maxDuration.val());if(error="_wc_booking_min_duration"===this.name?"wc_bookings_invalid_min_duration":"wc_bookings_invalid_max_duration",isDurationComparisonValid)(fieldEl=$(this)).next().hasClass("wc_bookings_error")&&fieldEl.next(".wc_bookings_error").remove(),hasError=!1;else{if(""===maxDuration.val())return;!function(fieldEl,error){fieldEl.next().hasClass("wc_bookings_error")||fieldEl.after(`<div class="wc_bookings_error">${error}</div>`)}($(this),wc_bookings_admin_edit_booking_params[error]),hasError=!0}var fieldEl})),minDuration.add(maxDuration).on("blur",(function(){const currentDurationField=$(this);(hasError||""===currentDurationField.val())&&(currentDurationField.val(currentDurationField.is(minDuration)?minDurationInitialVal:maxDurationInitialVal),currentDurationField.trigger("input"))}))}()})();
//# sourceMappingURL=admin-edit-bookable-product.js.map