/*!
 * Vue Material v0.6.2
 * Made with love by Marcos Moura
 * Released under the MIT License.
 */
!(function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.VueMaterial=n():t.VueMaterial=n()})(this,(function(){return (function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var e={};return n.m=t,n.c=e,n.p="/",n(0)})({0:function(t,n,e){t.exports=e(82)},2:function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},3:function(t,n,e){var r=e(24)("wks"),o=e(19),i=e(2).Symbol,u="function"==typeof i,c=t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))};c.store=r},4:function(t,n,e){t.exports=!e(11)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},5:function(t,n){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},6:function(t,n,e){var r=e(10),o=e(29),i=e(28),u=Object.defineProperty;n.f=e(4)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},7:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},8:function(t,n,e){var r=e(6),o=e(14);t.exports=e(4)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},9:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},10:function(t,n,e){var r=e(9);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},11:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},12:function(t,n,e){var r=e(35),o=e(15);t.exports=function(t){return r(o(t))}},13:function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=function t(n,e){return!(!n||!n.$el)&&(0!==n._uid&&(n.$el.classList.contains(e)?n:t(n.$parent,e)))};n.default=e,t.exports=n.default},14:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},15:function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},16:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},17:function(t,n,e){var r=e(2),o=e(5),i=e(26),u=e(8),c="prototype",f=function(t,n,e){var a,s,l,p=t&f.F,d=t&f.G,v=t&f.S,h=t&f.P,y=t&f.B,m=t&f.W,x=d?o:o[n]||(o[n]={}),g=x[c],b=d?r:v?r[n]:(r[n]||{})[c];d&&(e=n);for(a in e)s=!p&&b&&void 0!==b[a],s&&a in x||(l=s?b[a]:e[a],x[a]=d&&"function"!=typeof b[a]?e[a]:y&&s?i(l,r):m&&b[a]==l?(function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n[c]=t[c],n})(l):h&&"function"==typeof l?i(Function.call,l):l,h&&((x.virtual||(x.virtual={}))[a]=l,t&f.R&&g&&!g[a]&&u(g,a,l)))};f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},18:function(t,n,e){var r=e(24)("keys"),o=e(19);t.exports=function(t){return r[t]||(r[t]=o(t))}},19:function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},20:function(t,n){t.exports={}},21:function(t,n,e){var r=e(33),o=e(23);t.exports=Object.keys||function(t){return r(t,o)}},22:function(t,n,e){var r=e(9),o=e(2).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},23:function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},24:function(t,n,e){var r=e(2),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},25:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},26:function(t,n,e){var r=e(32);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},27:function(t,n,e){var r=e(15);t.exports=function(t){return Object(r(t))}},28:function(t,n,e){var r=e(9);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},29:function(t,n,e){t.exports=!e(4)&&!e(11)((function(){return 7!=Object.defineProperty(e(22)("div"),"a",{get:function(){return 7}}).a}))},30:function(t,n,e){var r=e(16),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},31:function(t,n,e){var r=e(6).f,o=e(7),i=e(3)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},32:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},33:function(t,n,e){var r=e(7),o=e(12),i=e(34)(!1),u=e(18)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),f=0,a=[];for(e in c)e!=u&&r(c,e)&&a.push(e);for(;n.length>f;)r(c,e=n[f++])&&(~i(a,e)||a.push(e));return a}},34:function(t,n,e){var r=e(12),o=e(30),i=e(37);t.exports=function(t){return function(n,e,u){var c,f=r(n),a=o(f.length),s=i(u,a);if(t&&e!=e){for(;a>s;)if(c=f[s++],c!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===e)return t||s||0;return!t&&-1}}},35:function(t,n,e){var r=e(25);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},36:function(t,n){t.exports=!0},37:function(t,n,e){var r=e(16),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):i(t,n)}},39:function(t,n,e){"use strict";var r=e(36),o=e(17),i=e(41),u=e(8),c=e(7),f=e(20),a=e(47),s=e(31),l=e(49),p=e(3)("iterator"),d=!([].keys&&"next"in[].keys()),v="@@iterator",h="keys",y="values",m=function(){return this};t.exports=function(t,n,e,x,g,b,_){a(e,n,x);var w,O,j,S=function(t){if(!d&&t in E)return E[t];switch(t){case h:return function(){return new e(this,t)};case y:return function(){return new e(this,t)}}return function(){return new e(this,t)}},M=n+" Iterator",P=g==y,A=!1,E=t.prototype,F=E[p]||E[v]||g&&E[g],I=F||S(g),k=g?P?S("entries"):I:void 0,T="Array"==n?E.entries||F:F;if(T&&(j=l(T.call(new t)),j!==Object.prototype&&(s(j,M,!0),r||c(j,p)||u(j,p,m))),P&&F&&F.name!==y&&(A=!0,I=function(){return F.call(this)}),r&&!_||!d&&!A&&E[p]||u(E,p,I),f[n]=I,f[M]=m,g)if(w={values:P?I:S(y),keys:b?I:S(h),entries:k},_)for(O in w)O in E||i(E,O,w[O]);else o(o.P+o.F*(d||A),n,w);return w}},40:function(t,n,e){var r=e(10),o=e(48),i=e(23),u=e(18)("IE_PROTO"),c=function(){},f="prototype",a=function(){var t,n=e(22)("iframe"),r=i.length,o="<",u=">";for(n.style.display="none",e(46).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write(o+"script"+u+"document.F=Object"+o+"/script"+u),t.close(),a=t.F;r--;)delete a[f][i[r]];return a()};t.exports=Object.create||function(t,n){var e;return null!==t?(c[f]=r(t),e=new c,c[f]=null,e[u]=t):e=a(),void 0===n?e:o(e,n)}},41:function(t,n,e){t.exports=e(8)},42:function(t,n,e){"use strict";var r=e(50)(!0);e(39)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})}))},45:function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}n.__esModule=!0;var o=e(51),i=r(o);n.default=function(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return(0,i.default)(t)}},46:function(t,n,e){t.exports=e(2).document&&document.documentElement},47:function(t,n,e){"use strict";var r=e(40),o=e(14),i=e(31),u={};e(8)(u,e(3)("iterator"),(function(){return this})),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},48:function(t,n,e){var r=e(6),o=e(10),i=e(21);t.exports=e(4)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),c=u.length,f=0;c>f;)r.f(t,e=u[f++],n[e]);return t}},49:function(t,n,e){var r=e(7),o=e(27),i=e(18)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},50:function(t,n,e){var r=e(16),o=e(15);t.exports=function(t){return function(n,e){var i,u,c=String(o(n)),f=r(e),a=c.length;return f<0||f>=a?t?"":void 0:(i=c.charCodeAt(f),i<55296||i>56319||f+1===a||(u=c.charCodeAt(f+1))<56320||u>57343?t?c.charAt(f):i:t?c.slice(f,f+2):(i-55296<<10)+(u-56320)+65536)}}},51:function(t,n,e){t.exports={default:e(52),__esModule:!0}},52:function(t,n,e){e(42),e(64),t.exports=e(5).Array.from},54:function(t,n,e){var r=e(25),o=e(3)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(t,n){try{return t[n]}catch(t){}};t.exports=function(t){var n,e,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=u(n=Object(t),o))?e:i?r(n):"Object"==(c=r(n))&&"function"==typeof n.callee?"Arguments":c}},55:function(t,n,e){"use strict";var r=e(6),o=e(14);t.exports=function(t,n,e){n in t?r.f(t,n,o(0,e)):t[n]=e}},56:function(t,n,e){var r=e(20),o=e(3)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},57:function(t,n,e){var r=e(10);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},58:function(t,n,e){var r=e(3)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:e=!0}},i[r]=function(){return u},t(i)}catch(t){}return e}},63:function(t,n,e){var r=e(54),o=e(3)("iterator"),i=e(20);t.exports=e(5).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},64:function(t,n,e){"use strict";var r=e(26),o=e(17),i=e(27),u=e(57),c=e(56),f=e(30),a=e(55),s=e(63);o(o.S+o.F*!e(58)((function(t){Array.from(t)})),"Array",{from:function(t){var n,e,o,l,p=i(t),d="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,y=void 0!==h,m=0,x=s(p);if(y&&(h=r(h,v>2?arguments[2]:void 0,2)),void 0==x||d==Array&&c(x))for(n=f(p.length),e=new d(n);n>m;m++)a(e,m,y?h(p[m],m):p[m]);else for(l=x.call(p),e=new d;!(o=l.next()).done;m++)a(e,m,y?u(l,h,[o.value,m],!0):o.value);return e.length=m,e}})},82:function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){t.component("md-file",t.extend(u.default)),t.material.styles.push(f.default)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=o;var i=e(275),u=r(i),c=e(230),f=r(c);t.exports=n.default},129:function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var o=e(45),i=r(o),u=e(13),c=r(u);n.default={props:{value:String,id:String,name:String,disabled:Boolean,required:Boolean,placeholder:String,accept:String,multiple:Boolean},data:function(){return{filename:this.value}},watch:{value:function(){this.filename=this.value}},methods:{getMultipleName:function(t){var n=[];return[].concat((0,i.default)(t)).forEach((function(t){n.push(t.name)})),n.join(", ")},openPicker:function(){this.disabled||(this.$refs.fileInput.click(),this.$refs.textInput.$el.focus())},onFileSelected:function(t){var n=t.target.files||t.dataTransfer.files;n?n.length>1?this.filename=this.getMultipleName(n):1===n.length?this.filename=n[0].name:this.filename=null:this.filename=t.target.value.split("\\").pop(),this.$emit("selected",n||t.target.value),this.$emit("input",this.filename)}},mounted:function(){if(this.parentContainer=(0,c.default)(this.$parent,"md-input-container"),!this.parentContainer)throw this.$destroy(),new Error("You should wrap the md-file in a md-input-container");this.parentContainer.hasFile=!0},beforeDestroy:function(){this.parentContainer.hasFile=!1}},t.exports=n.default},213:function(t,n){},230:function(t,n){t.exports=""},275:function(t,n,e){var r,o;e(213),r=e(129);var i=e(358);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,t.exports=r},358:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"md-file",on:{click:t.openPicker}},[e("md-input",{directives:[{name:"model",rawName:"v-model",value:t.filename,expression:"filename"}],ref:"textInput",attrs:{readonly:"",required:t.required,placeholder:t.placeholder,disabled:t.disabled},domProps:{value:t.filename},on:{input:function(n){t.filename=n}}}),t._v(" "),e("md-icon",[t._v("attach_file")]),t._v(" "),e("input",{ref:"fileInput",attrs:{type:"file",id:t.id,name:t.name,disabled:t.disabled,multiple:t.multiple,accept:t.accept},on:{change:t.onFileSelected}})],1)},staticRenderFns:[]}}})}));