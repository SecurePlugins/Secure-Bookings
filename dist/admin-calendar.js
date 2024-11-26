(()=>{var __webpack_modules__={231:module=>{module.exports.q=function(input,maxHeight,maxWidth){let tree=[{id:"root",start:0,end:maxHeight,depth:-1,children:[]}],siblingIndex={index:{},clear:function(){this.index={}},add:function(node){(this.index[node.depth]||(this.index[node.depth]=[])).push(node)},get:function(depth){return this.index[depth]||[]}};function overlaps(node,item){return item.start>=node.start&&item.start<node.end||node.start==item.start||node.end==item.end}function traverse(node,item,depth){if(!overlaps(node,item))return!1;let list=siblingIndex.get(depth+1);for(let key in list)if(traverse(list[key],item,depth+1))return!0;return function(node,item,depth){item.depth=depth+1,siblingIndex.add(item),node.children.push(item),item.parent=node,tree.push(item)}(node,item,depth),!0}siblingIndex.clear(),input=input.map((function(node){return node.end-node.start<22&&(node.end=node.start+22),{id:node.id,start:node.start,end:node.end,height:node.end-node.start,width:0,children:[],depth:0,maxDepth:0}})).sort((function(a,b){return a.start===b.start?b.end-a.end:a.start-b.start}));let root=tree[0];return input.forEach((function(item){traverse(root,item,-1)})),function(){let currentRoot,setChildren=function(node,depth){node.maxDepth=depth,node.children.forEach((function(child){setChildren(child,depth)}))},leaves=tree.filter((function(node){return 0===node.children.length})),roots={};leaves.forEach((function(leaf){let node=leaf,maxDepth=0;for(;;){if(maxDepth=Math.max(maxDepth,node.depth),!(node.parent&&node.parent.depth>=0)){currentRoot=roots[node.id]||(roots[node.id]=node),currentRoot.maxDepth=Math.max(currentRoot.maxDepth,maxDepth);break}node=node.parent}}));for(let rootId in roots)setChildren(roots[rootId],roots[rootId].maxDepth);tree.forEach((function(leaf){let nextDepth=leaf.maxDepth+1,siblings=siblingIndex.get(nextDepth);for(;siblings.length>0;){for(let index in siblings)if(overlaps(siblings[index],leaf))return void(leaf.maxDepth=Math.max(leaf.maxDepth,siblings[index].maxDepth));siblings=siblingIndex.get(++nextDepth)}}))}(),tree.forEach((function(node){node.width=maxWidth/(node.maxDepth+1)})),tree.shift(),tree.map((function(node){return{id:node.id,top:node.start,left:node.width*node.depth,width:node.width,height:node.height}}))}},415:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";const external_jQuery_namespaceObject=window.jQuery;var external_jQuery_default=__webpack_require__.n(external_jQuery_namespaceObject),admin_calendar_layout=__webpack_require__(231);external_jQuery_default()((function($){$(".calendar_month_event").on("mouseenter",(function(){let id=this.dataset.id;$(".calendar_event_id_"+id).find("a.wc-bookings-event-link").addClass("calendar_month_event_selected")})).on("mouseleave",(function(){let id=this.dataset.id;$(".calendar_event_id_"+id).find("a.wc-bookings-event-link").removeClass("calendar_month_event_selected")}));let input=$.map($(".daily_view_booking"),(function(el){return{id:$(el).data("bookingId"),start:$(el).data("bookingStart"),end:$(el).data("bookingEnd")}})),scale=1968/1440;(0,admin_calendar_layout.q)(input,1968,100).forEach((function(node){let $el=$('*[data-booking-id="'+node.id+'"]');$el.css({top:"calc("+node.top*scale+"px + 2px )"}),$el.css({height:"calc("+node.height*scale+"px - 3px )"}),$el.css("left",node.left+"%"),$el.css({width:"calc("+node.width+"% - 13px )"}),$el.show()}),function(){if($(".calendar_days").length&&$(".daily_view_booking").length){let previousStartValue,smallestStartValueIndex;$(".daily_view_booking").each((function(index){let currentStartValue=parseInt($(this).data("bookingStart"),10);void 0===previousStartValue&&(previousStartValue=currentStartValue),currentStartValue<=previousStartValue&&(smallestStartValueIndex=index),previousStartValue=currentStartValue}));let findFirstBooking=setInterval((function(){let firstBookingTopOffset=parseInt($(".daily_view_booking").eq(smallestStartValueIndex).offset().top,10);firstBookingTopOffset>0&&($("html, body").animate({scrollTop:firstBookingTopOffset-110},600),clearInterval(findFirstBooking))}),100);setTimeout((function(){clearInterval(findFirstBooking)}),5e3)}}()),$.map($(".daily_view_global_availabiltiy"),(function(el){return{start:$(el).data("start"),end:$(el).data("end"),id:$(el).data("globalAvailabilityId")}})).forEach((function(range){let $el=$('*[data-global-availability-id="'+range.id+'"]');$el.css({top:"calc("+range.start*scale+"px )"}),$el.css({height:"calc("+(range.end-range.start)*scale+"px )"}),$el.css("left","-43px"),$el.css({width:"calc(100% + 50px )"}),$el.show()})),$(".daily_view_booking").each((function(index,el){let $el=$(el);$el.height($el.height()-12)})),$(document).ready((function(){const $today_el=$(".wc-bookings-schedule-date.wc-booking-schedule-today");if($today_el.length){const today_offset=parseInt($today_el.offset().top,10);$("html, body").animate({scrollTop:today_offset-101},600)}}))}))}},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={exports:{}};return __webpack_modules__[moduleId](module,module.exports,__webpack_require__),module.exports}__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),__webpack_require__(415);__webpack_require__(231)})();
//# sourceMappingURL=admin-calendar.js.map