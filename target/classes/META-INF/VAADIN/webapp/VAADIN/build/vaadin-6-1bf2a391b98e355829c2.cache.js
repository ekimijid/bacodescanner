(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{336:function(e,t,n){"use strict";n.r(t),n.d(t,"addCssBlock",(function(){return c}));n(77),n(44),n(280),n(142);var i=n(41),d=n(69),o=n(40),r=n(37);class a extends r.a{static get template(){return i.a`
      <style>
        :host {
          animation: 1ms flow-component-renderer-appear;
        }

        @keyframes flow-component-renderer-appear {
          to {
            opacity: 1;
          }
        }
      </style>
      <slot></slot>
    `}static get is(){return"flow-component-renderer"}static get properties(){return{nodeid:Number,appid:String}}static get observers(){return["_attachRenderedComponentIfAble(appid, nodeid)"]}ready(){super.ready(),this.addEventListener("click",(function(e){this.firstChild&&"function"==typeof this.firstChild.click&&e.target===this&&(e.stopPropagation(),this.firstChild.click())})),this.addEventListener("animationend",this._onAnimationEnd)}_asyncAttachRenderedComponentIfAble(){this._debouncer=d.a.debounce(this._debouncer,o.b,()=>this._attachRenderedComponentIfAble())}_attachRenderedComponentIfAble(){if(!this.nodeid||!this.appid)return;const e=this._getRenderedComponent();this.firstChild?e?this.firstChild!==e?(this.replaceChild(e,this.firstChild),this._defineFocusTarget(),this.onComponentRendered()):(this._defineFocusTarget(),this.onComponentRendered()):this._asyncAttachRenderedComponentIfAble():e?(this.appendChild(e),this._defineFocusTarget(),this.onComponentRendered()):this._asyncAttachRenderedComponentIfAble()}_getRenderedComponent(){try{return window.Vaadin.Flow.clients[this.appid].getByNodeId(this.nodeid)}catch(e){console.error("Could not get node %s from app %s",this.nodeid,this.appid),console.error(e)}return null}onComponentRendered(){}_defineFocusTarget(){var e=this._getFirstFocusableDescendant(this.firstChild);null!==e&&e.setAttribute("focus-target","true")}_getFirstFocusableDescendant(e){if(this._isFocusable(e))return e;if(e.hasAttribute&&(e.hasAttribute("disabled")||e.hasAttribute("hidden")))return null;if(!e.children)return null;for(var t=0;t<e.children.length;t++){var n=this._getFirstFocusableDescendant(e.children[t]);if(null!==n)return n}return null}_isFocusable(e){return(!e.hasAttribute||"function"!=typeof e.hasAttribute||!e.hasAttribute("disabled")&&!e.hasAttribute("hidden"))&&0===e.tabIndex}_onAnimationEnd(e){0===e.animationName.indexOf("flow-component-renderer-appear")&&this._attachRenderedComponentIfAble()}}window.customElements.define(a.is,a);var s=n(10);const l=document.createElement("template");l.innerHTML=`<style>\n  ${s.b.cssText}\n  ${s.d.cssText}\n</style>`,document.head.appendChild(l.content);n(306),n(307),n(326),n(296),n(90),n(308),n(15),n(309),n(21),n(17),n(12),n(18),n(310);const c=function(e,t=!1){const n=document.createElement("template");n.innerHTML=e,document.head[t?"insertBefore":"appendChild"](n.content,document.head.firstChild)};let h;const u=document.getElementsByTagName("script");for(let e=0;e<u.length;e++){const t=u[e];if("module"==t.getAttribute("type")&&t.getAttribute("data-app-id")&&!t["vaadin-bundle"]){h=t;break}}if(!h)throw new Error("Could not find the bundle script to identify the application id");h["vaadin-bundle"]=!0,window.Vaadin.Flow.fallbacks||(window.Vaadin.Flow.fallbacks={});const p=window.Vaadin.Flow.fallbacks;p[h.getAttribute("data-app-id")]={},p[h.getAttribute("data-app-id")].loadFallback=function(){return Promise.all([n.e(1),n.e(3)]).then(n.bind(null,335))}}}]);