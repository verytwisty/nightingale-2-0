!function(e){var t={};function n(l){if(t[l])return t[l].exports;var a=t[l]={i:l,l:!1,exports:{}};return e[l].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t,n){"use strict";n.r(t);var l=n(0),a=wp.element,c=(a.useState,a.setState,wp.i18n.__),r=wp.blocks.registerBlockType,s=wp.blockEditor,o=s.RichText,i=s.InspectorControls,u=s.URLInputButton,h=s.ColorPalette,m=s.MediaUpload,b=s.InnerBlocks,d=wp.element.createElement("svg",{width:60,height:30},wp.element.createElement("rect",{x:"0.000",y:"0.000",width:"59.000",height:"30"})),p=wp.element.createElement("svg",{width:60,height:30},wp.element.createElement("rect",{x:"31.000",y:"0.000",width:"29.000",height:"30"}),wp.element.createElement("rect",{x:"0.000",y:"0.000",width:"29.000",height:"30"})),k=wp.element.createElement("svg",{width:60,height:30},wp.element.createElement("rect",{x:"41.000",y:"0.000",width:"19.000",height:"30"}),wp.element.createElement("rect",{x:"21.000",y:"0.000",width:"19.000",height:"30"}),wp.element.createElement("rect",{x:"0.000",y:"0.000",width:"19.000",height:"30"})),g=wp.element.createElement("svg",{width:60,height:40},wp.element.createElement("rect",{x:"41.000",y:"0.000",width:"19.000",height:"19"}),wp.element.createElement("rect",{x:"21.000",y:"0.000",width:"19.000",height:"19"}),wp.element.createElement("rect",{x:"0.000",y:"0.000",width:"19.000",height:"19"}),wp.element.createElement("rect",{x:"31.000",y:"20.000",width:"29.000",height:"19"}),wp.element.createElement("rect",{x:"0.000",y:"20.000",width:"29.000",height:"19"})),E=wp.element.createElement("svg",{width:60,height:40},wp.element.createElement("rect",{x:"41.000",y:"0.000",width:"19.000",height:"19"}),wp.element.createElement("rect",{x:"21.000",y:"0.000",width:"19.000",height:"19"}),wp.element.createElement("rect",{x:"0.000",y:"0.000",width:"19.000",height:"19"}),wp.element.createElement("rect",{x:"41.000",y:"20.000",width:"19.000",height:"19"}),wp.element.createElement("rect",{x:"21.000",y:"20.000",width:"19.000",height:"19"}),wp.element.createElement("rect",{x:"0.000",y:"20.000",width:"19.000",height:"19"})),O=[{title:"Full Width",icon:d,template:[["nhsblocks/dashpanel",{className:"nhsuk-grid-column-full"}]]},{title:"Two Columns",icon:p,template:[["nhsblocks/dashpanel",{className:"nhsuk-grid-column-one-half"}],["nhsblocks/dashpanel",{className:"nhsuk-grid-column-one-half"}]]},{title:"Three Columns",icon:k,template:[["nhsblocks/dashpanel",{className:"nhsuk-grid-column-one-third"}],["nhsblocks/dashpanel",{className:"nhsuk-grid-column-one-third"}],["nhsblocks/dashpanel",{className:"nhsuk-grid-column-one-third"}]]},{title:"Two Columns Then Three Columns",icon:wp.element.createElement("svg",{width:60,height:40},wp.element.createElement("rect",{x:"31.000",y:"0.000",width:"29.000",height:"19"}),wp.element.createElement("rect",{x:"0.000",y:"0.000",width:"29.000",height:"19"}),wp.element.createElement("rect",{x:"41.000",y:"20.000",width:"19.000",height:"19"}),wp.element.createElement("rect",{x:"21.000",y:"20.000",width:"19.000",height:"19"}),wp.element.createElement("rect",{x:"0.000",y:"20.000",width:"19.000",height:"19"})),template:[["nhsblocks/dashpanel",{className:"nhsuk-grid-column-one-half"}],["nhsblocks/dashpanel",{className:"nhsuk-grid-column-one-half"}],["nhsblocks/dashpanel",{className:"nhsuk-grid-column-one-third"}],["nhsblocks/dashpanel",{className:"nhsuk-grid-column-one-third"}],["nhsblocks/dashpanel",{className:"nhsuk-grid-column-one-third"}]]},{title:"Three Columns Then Two Columns",icon:g,template:[["nhsblocks/dashpanel",{className:"nhsuk-grid-column-one-third"}],["nhsblocks/dashpanel",{className:"nhsuk-grid-column-one-third"}],["nhsblocks/dashpanel",{className:"nhsuk-grid-column-one-third"}],["nhsblocks/dashpanel",{className:"nhsuk-grid-column-one-half"}],["nhsblocks/dashpanel",{className:"nhsuk-grid-column-one-half"}]]},{title:"Three Columns, Two Rows",icon:E,template:[["nhsblocks/dashpanel",{className:"nhsuk-grid-column-one-third"}],["nhsblocks/dashpanel",{className:"nhsuk-grid-column-one-third"}],["nhsblocks/dashpanel",{className:"nhsuk-grid-column-one-third"}],["nhsblocks/dashpanel",{className:"nhsuk-grid-column-one-third"}],["nhsblocks/dashpanel",{className:"nhsuk-grid-column-one-third"}],["nhsblocks/dashpanel",{className:"nhsuk-grid-column-one-third"}]]}];r("nhsblock/dashboardnav",{title:c("Dashboard Navigation","nhsblocks"),category:"nhsblocks",icon:"tagcloud",attributes:{template:{type:"array"}},edit:function(e){var t=e.attributes.template,n=e.setAttributes,a=null===t||!t;return Object(l.createElement)("div",{className:"nhsuk-grid-row"},Object(l.createElement)("div",{className:"nhsuk-panel-group nhsuk-grid-column-full nhsuk-dashboard"},Object(l.createElement)(b,{template:a?null:t,__experimentalTemplateOptions:O,__experimentalOnSelectTemplateOption:function(e){n({template:e})}})))},save:function(e){e.attributes.template;return Object(l.createElement)("div",{className:"nhsuk-grid-row"},Object(l.createElement)("div",{className:"nhsuk-panel-group nhsuk-dashboard"},Object(l.createElement)(b.Content,null)))}}),r("nhsblocks/dashpanel",{title:c("Dashboard Region","nhsblocks"),description:c("Simple image background with text and link to give Dashboard navigation panel"),icon:"feedback",category:"nhsblocks",parent:"nhsblocks/dashboardnav",attributes:{panelTitle:{type:"string",source:"html",selector:"h3"},panelLink:{type:"string",source:"attribute",selector:".nhsuk-promo__link-wrapper",attribute:"href"},backgroundImage:{type:"string",default:"/wp-content/themes/nightingale-2-0/assets/pixel_trans.png"},overlayColor:{type:"string",default:"#ffffff"}},edit:function(e){var t=e.setAttributes,n=e.attributes,a=e.className,r=n.overlayColor,s=n.backgroundImage,b=n.panelTitle,d=n.panelLink;return[Object(l.createElement)(i,null,Object(l.createElement)("div",null,Object(l.createElement)("strong",null,"Add a link for this panel"),Object(l.createElement)(u,{className:"nhsblocks-dropdown__input",label:c("Dashboard Link","nhsblocks"),onChange:function(e){t({panelLink:e})},url:d})),Object(l.createElement)("div",null,Object(l.createElement)("strong",null,"Select a background color:")," ",Object(l.createElement)("br",null),Object(l.createElement)("i",null,"(this will be ignored if you choose an image below)"),Object(l.createElement)(h,{value:r,onChange:function(e){t({overlayColor:e})}})),Object(l.createElement)("div",null,Object(l.createElement)("strong",null,"Select a background image:"),Object(l.createElement)(m,{onSelect:function(e){t({backgroundImage:e.sizes.full.url})},type:"image",value:s,render:function(e){var t=e.open;return Object(l.createElement)("button",{onClick:t},"Upload Image!")}}))),Object(l.createElement)("div",{className:"".concat(a," nhsuk-panel-group__item")},Object(l.createElement)("div",{class:"nhsuk-panel-with-label",style:{backgroundColor:r,backgroundImage:"url(".concat(s,")"),backgroundSize:"cover",backgroundPosition:"center"}},Object(l.createElement)("h3",{class:"nhsuk-panel-with-label__label"},Object(l.createElement)(o,{placeholder:c("Panel Title","nhsblocks"),value:b,onChange:function(e){t({panelTitle:e})}})),Object(l.createElement)("img",{src:"/wp-content/themes/nightingale-2-0/assets/pixel_trans.png",class:"nhsuk-dashboard__image",alt:""})))]},save:function(e){var t=e.attributes,n=t.overlayColor,a=t.backgroundImage,c=t.panelTitle,r=t.panelLink;return Object(l.createElement)("div",{className:"nhsuk-panel-group__item"},Object(l.createElement)("a",{href:r,className:"nhsuk-promo__link-wrapper"},Object(l.createElement)("div",{class:"nhsuk-panel-with-label",style:{backgroundImage:"url(".concat(a,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundColor:n}},Object(l.createElement)("h3",{class:"nhsuk-panel-with-label__label"},Object(l.createElement)(o.Content,{value:c})),Object(l.createElement)("img",{src:"/wp-content/themes/nightingale-2-0/assets/pixel_trans.png",class:"nhsuk-dashboard__image",alt:""}))))}});var v=wp.i18n.__,w=wp.blocks.registerBlockType,j=wp.blockEditor,y=j.RichText,_=j.InnerBlocks;w("nhsblocks/dodont",{title:v("Do and Don't List","nhsblocks"),category:"nhsblocks",icon:"yes-alt",attributes:{panelTitle:{type:"string",source:"html",selector:"h3"}},edit:function(e){var t=e.attributes.panelTitle,n=(e.className,e.setAttributes);return Object(l.createElement)("div",{className:"nhsuk-do-dont-list"},Object(l.createElement)("h3",{className:"nhsuk-do-dont-list__label"},Object(l.createElement)(y,{placeholder:v("Panel Title","nhsblocks"),value:t,onChange:function(e){n({panelTitle:e})}})),Object(l.createElement)("ul",{className:"nhsuk-list nhsuk-list--cross"},Object(l.createElement)(_,{allowedBlocks:[]})))},save:function(e){var t=e.attributes,n=t.panelTitle;t.panelText;return Object(l.createElement)("div",{className:"nhsuk-do-dont-list"},Object(l.createElement)("h3",{className:"nhsuk-do-dont-list__label"},Object(l.createElement)(y.Content,{value:n})),Object(l.createElement)("ul",{className:"nhsuk-list nhsuk-list--cross"},Object(l.createElement)(_.Content,null)))}}),w("nhsblocks/doitem",{title:v("List Item with Tick","nhsblocks"),category:"nhsblocks",icon:"yes",parent:["nhsblocks/dodont"],attributes:{panelText:{type:"string",source:"html",selector:"span"}},edit:function(e){var t=e.attributes.panelText,n=e.setAttributes;return Object(l.createElement)("li",null,Object(l.createElement)("svg",{class:"nhsuk-icon nhsuk-icon__tick",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true"},Object(l.createElement)("path",{"stroke-width":"4","stroke-linecap":"round",d:"M18.4 7.8l-8.5 8.4L5.6 12"})),Object(l.createElement)("span",null,Object(l.createElement)(y,{placeholder:v("Text","nhsblocks"),value:t,onChange:function(e){n({panelText:e})}})))},save:function(e){var t=e.attributes.panelText;return Object(l.createElement)("li",null,Object(l.createElement)("svg",{class:"nhsuk-icon nhsuk-icon__tick",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true"},Object(l.createElement)("path",{"stroke-width":"4","stroke-linecap":"round",d:"M18.4 7.8l-8.5 8.4L5.6 12"})),Object(l.createElement)("span",null,Object(l.createElement)(y.Content,{value:t})))}}),w("nhsblocks/dontitem",{title:v("List Item with Cross","nhsblocks"),category:"nhsblocks",icon:"no-alt",parent:["nhsblocks/dodont"],attributes:{panelText:{type:"string",source:"html",selector:"span"}},edit:function(e){var t=e.attributes.panelText,n=e.setAttributes;return Object(l.createElement)("li",null,Object(l.createElement)("svg",{class:"nhsuk-icon nhsuk-icon__cross",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true"},Object(l.createElement)("path",{d:"M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z"}),Object(l.createElement)("path",{d:"M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z"})),Object(l.createElement)("span",null,Object(l.createElement)(y,{placeholder:v("Text","nhsblocks"),value:t,onChange:function(e){n({panelText:e})}})))},save:function(e){var t=e.attributes.panelText;return Object(l.createElement)("li",null,Object(l.createElement)("svg",{class:"nhsuk-icon nhsuk-icon__cross",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true"},Object(l.createElement)("path",{d:"M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z"}),Object(l.createElement)("path",{d:"M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z"})),Object(l.createElement)("span",null,Object(l.createElement)(y.Content,{value:t})))}});var f=wp.i18n.__,x=wp.blocks.registerBlockType,N=wp.blockEditor,T=N.RichText,C=N.URLInputButton;x("nhsblocks/nhsbutton",{title:f("Button","nhsblocks"),category:"nhsblocks",icon:"admin-links",styles:[{name:"green",label:f("Standard (Green)"),isDefault:!0},{name:"secondary",label:f("Secondary (Grey)")},{name:"reverse",label:f("Reverse (White)")}],supports:{align:!0},attributes:{buttonLabel:{type:"string",source:"html",selector:".nhsuk-button"},buttonLink:{type:"string",source:"attribute",selector:"a.nhsuk-button",attribute:"href"}},edit:function(e){var t=e.attributes,n=t.buttonLabel,a=t.buttonLink,c=e.className,r=e.setAttributes;return Object(l.createElement)("a",{href:"#0",className:"".concat(c," nhsuk-button")},Object(l.createElement)(T,{placeholder:f("Button Label","nhsblocks"),value:n,onChange:function(e){r({buttonLabel:e})}}),Object(l.createElement)(C,{className:"nhsblocks-dropdown__input",label:f("Button URL","nhsblocks"),onChange:function(e){r({buttonLink:e})},url:a}))},save:function(e){var t=e.attributes,n=t.buttonLabel,a=t.buttonLink;return Object(l.createElement)("a",{href:a,className:"nhsuk-button"},Object(l.createElement)(T.Content,{value:n}))}});var B=wp.i18n.__,S=wp.blocks.registerBlockType,I=wp.blockEditor.RichText;S("nhsblocks/reveal1",{title:B("Simple Reveal","nhsblocks"),category:"nhsblocks",icon:"plus-alt",styles:[{name:"downarrow",label:B("Down Arrow"),isDefault:!0},{name:"expander",label:B("Plus Icon")}],attributes:{revealTitle:{type:"string",source:"html",selector:".nhsuk-details__summary-text"},revealText:{type:"string",source:"html",selector:".nhsuk-details__text"},expanderBox:{type:"string"}},edit:function(e){var t=e.attributes,n=t.revealTitle,a=t.revealText,c=e.className,r=e.setAttributes;return Object(l.createElement)("details",{className:"".concat(c," nhsuk-details newstyle"),open:!0},Object(l.createElement)("summary",{className:"nhsuk-details__summary",role:"button","aria-controls":"details-content-","aria-expanded":"true"},Object(l.createElement)("span",{className:"nhsuk-details__summary-text"},Object(l.createElement)(I,{placeholder:B("Reveal Title","nhsblocks"),value:n,onChange:function(e){r({revealTitle:e})}}))),Object(l.createElement)("div",{className:"nhsuk-details__text",id:"details-content-","aria-hidden":"false"},Object(l.createElement)(I,{multiline:"p",placeholder:B("Reveal Contents","nhsblocks"),onChange:function(e){r({revealText:e})},value:a})))},save:function(e){var t=e.attributes,n=t.revealTitle,a=t.revealText;return Object(l.createElement)("details",{className:"nhsuk-details"},Object(l.createElement)("summary",{className:"nhsuk-details__summary",role:"button","aria-controls":"details-content-","aria-expanded":"false"},Object(l.createElement)("span",{className:"nhsuk-details__summary-text"},Object(l.createElement)(I.Content,{value:n}))),Object(l.createElement)("div",{className:"nhsuk-details__text",id:"details-content-","aria-hidden":"false"},Object(l.createElement)(I.Content,{multiline:"p",value:a})))}});var L=wp.i18n.__,q=wp.blocks.registerBlockType,R=wp.blockEditor,P=R.RichText,A=R.InnerBlocks,Q=[["core/paragraph",{placeholder:"Panel Text"}],["nhsblocks/nhsbutton",{align:"right"}]];q("nhsblocks/panel1",{title:L("Panel Region","nhsblocks"),description:L("By default this block includes a title, block of text and button link. You can remove the button if you wish by clicking it then clicking three dots on the navigation bar at the top of the page then the bin","nhsblocks"),icon:"feedback",category:"nhsblocks",styles:[{name:"default",label:L("Plain white panel"),isDefault:!0},{name:"panel-grey",label:L("Grey")},{name:"panel-with-label",label:L("With Label")}],attributes:{panelTitle:{type:"string",source:"html",selector:"h3"}},edit:function(e){var t=e.attributes.panelTitle,n=e.className,a=e.setAttributes;return Object(l.createElement)("div",{className:"".concat(n," nhsuk-panel")},Object(l.createElement)("h3",null,Object(l.createElement)(P,{placeholder:L("Panel Title","nhsblocks"),value:t,onChange:function(e){a({panelTitle:e})}})),Object(l.createElement)("div",{className:"paneltext"},Object(l.createElement)(A,{template:Q})))},save:function(e){var t=e.attributes.panelTitle;return Object(l.createElement)("div",{className:"nhsuk-panel"},Object(l.createElement)("h3",null,Object(l.createElement)(P.Content,{value:t})),Object(l.createElement)("div",{className:"paneltext"},Object(l.createElement)(A.Content,null)))}});var D=wp.i18n.__,M=wp.blocks.registerBlockType,z=wp.blockEditor.RichText,U=wp.data.withSelect;M("nhsblocks/latestnews",{title:D("Latest Posts / News","nhsblocks"),category:"nhsblocks",edit:U(function(e){return{posts:e("core").getEntityRecords("postType","post",{per_page:6})}})(function(e){var t=e.posts;e.className;if(!t)return"Loading...";if(t&&0===t.length)return"No posts";var n=t[0];return Object(l.createElement)("div",{className:"nhsuk-grid-column-one-'.$width.' nhsuk-panel-group__item"},Object(l.createElement)("div",{className:"nhsuk-panel"},Object(l.createElement)("h3",null,Object(l.createElement)(z.Content,{value:n.title.rendered})),Object(l.createElement)("img",{src:function(e){return e||""}(n.featured_image_nhsblocksFeatImg_url),alt:"{post.title.rendered}"}),Object(l.createElement)(z.Content,{value:n.excerpt.rendered}),Object(l.createElement)("a",{href:n.link},"Read More Link")))}),save:function(e){return null}});var W=wp.i18n.__,H=wp.blocks.registerBlockType,G=wp.blockEditor,F=G.URLInputButton,Y=G.RichText,$=G.InnerBlocks;G.MediaUpload,G.InspectorControls;H("nhsblocks/promo1",{title:W("Promo Region","nhsblocks"),category:"nhsblocks",icon:"megaphone",styles:[{name:"default",label:W("Standard"),isDefault:!0},{name:"promo-small",label:W("Smaller Text")}],attributes:{promoTitle:{type:"string",source:"html",selector:".nhsuk-promo__heading"},promoText:{type:"string",source:"html",selector:".nhsuk-promo__description"},promoLink:{type:"string",source:"attribute",selector:".nhsuk-promo a",attribute:"href"}},edit:function(e){var t=e.attributes,n=t.promoTitle,a=t.promoText,c=t.promoLink,r=e.className,s=e.setAttributes;return Object(l.createElement)("div",{className:"".concat(r," nhsuk-promo")},Object(l.createElement)("div",{class:"nhsuk-promo__content"},Object(l.createElement)(F,{className:"nhsblocks-dropdown__input",label:W("Panel Link","nhsblocks"),onChange:function(e){s({promoLink:e})},url:c}),Object(l.createElement)($,{allowedBlocks:["core/image"]}),Object(l.createElement)("h3",{class:"nhsuk-promo__heading"},Object(l.createElement)(Y,{placeholder:W("Promo Title","nhsblocks"),value:n,onChange:function(e){s({promoTitle:e})}})),Object(l.createElement)("div",{className:"nhsuk-promo__description"},Object(l.createElement)(Y,{multiline:"p",placeholder:W("Promo Contents","nhsblocks"),onChange:function(e){s({promoText:e})},value:a}))))},save:function(e){var t=e.attributes,n=t.promoTitle,a=t.promoText,c=t.promoLink;return Object(l.createElement)("div",{className:"nhsuk-promo"},Object(l.createElement)("a",{href:c,className:"nhsuk-promo__link-wrapper"},Object(l.createElement)("div",{class:"nhsuk-promo__content"},Object(l.createElement)($.Content,null),Object(l.createElement)("h3",{class:"nhsuk-promo__heading"},Object(l.createElement)(Y.Content,{value:n})),Object(l.createElement)("div",{className:"nhsuk-promo__description"},Object(l.createElement)(Y.Content,{multiline:"p",value:a})))))}});var J=wp.i18n.__,K=wp.blocks.registerBlockType,V=wp.blockEditor.RichText;K("nhsblocks/quote1",{title:J("Simple Quote","nhsblocks"),category:"nhsblocks",icon:"format-quote",styles:[{name:"standard",label:J("Standard"),isDefault:!0},{name:"quote-reverse",label:J("Inverse")}],attributes:{quoteName:{type:"string",source:"html",selector:".nhsuk-inset-text__quote-attribution"},quoteText:{type:"array",source:"children",multiline:"p",selector:".nhsuk-inset-text__quote"}},edit:function(e){var t=e.attributes,n=t.quoteName,a=t.quoteText,c=e.className,r=e.setAttributes;return Object(l.createElement)("div",{className:"".concat(c," nhsuk-inset-text")},Object(l.createElement)("span",{className:"nhsuk-u-visually-hidden"},"Quote / Testimonial: "),Object(l.createElement)("div",{className:"nhsuk-inset-text__quote"},Object(l.createElement)(V,{multiline:"p",placeholder:J("Quote","nhsblocks"),onChange:function(e){r({quoteText:e})},value:a})),Object(l.createElement)("span",{className:"nhsuk-inset-text__quote-attribution"},Object(l.createElement)(V,{placeholder:J("Quote Name","nhsblocks"),value:n,onChange:function(e){r({quoteName:e})}})))},save:function(e){var t=e.attributes,n=t.quoteName,a=t.quoteText;return Object(l.createElement)("div",{className:"nhsuk-inset-text"},Object(l.createElement)("span",{className:"nhsuk-u-visually-hidden"},"Quote / Testimonial: "),Object(l.createElement)("div",{className:"nhsuk-inset-text__quote"},Object(l.createElement)(V.Content,{multiline:"p",value:a})),Object(l.createElement)("span",{className:"nhsuk-inset-text__quote-attribution"},Object(l.createElement)(V.Content,{value:n})))}});var X=wp.i18n.__,Z=wp.blocks.registerBlockType,ee=wp.blockEditor.RichText;Z("nhsblocks/card1",{title:X("Card Region","nhsblocks"),category:"nhsblocks",attributes:{cardTitle:{type:"string",source:"html",selector:".nhsuk-care-card__heading-text"},cardText:{type:"array",source:"children",multiline:"p",selector:".nhsuk-care-card__content"}},edit:function(e){var t=e.attributes,n=t.cardTitle,a=t.cardText,c=e.className,r=e.setAttributes;return Object(l.createElement)("div",{className:"".concat(c," nhsuk-care-card")},Object(l.createElement)("div",{className:"nhsuk-care-card__heading-container"},Object(l.createElement)("h3",{className:"nhsuk-care-card__heading"},Object(l.createElement)("span",{role:"text"},Object(l.createElement)("span",{className:"nhsuk-u-visually-hidden"},"Non-urgent advice: "),Object(l.createElement)("span",{className:"nhsuk-care-card__heading-text"},Object(l.createElement)(ee,{placeholder:X("Card Title","nhsblocks"),value:n,onChange:function(e){r({cardTitle:e})}})))),Object(l.createElement)("span",{className:"nhsuk-care-card__arrow","aria-hidden":"true"})),Object(l.createElement)("div",{className:"nhsuk-care-card__content"},Object(l.createElement)(ee,{multiline:"p",placeholder:X("Card Contents","nhsblocks"),onChange:function(e){r({cardText:e})},value:a})))},save:function(e){var t=e.attributes,n=t.cardTitle,a=t.cardText;return Object(l.createElement)("div",{className:"nhsuk-grid-column-width nhsuk-care-card nhsuk-care-card--type"},Object(l.createElement)("div",{className:"nhsuk-care-card__heading-container"},Object(l.createElement)("h3",{className:"nhsuk-care-card__heading"},Object(l.createElement)("span",{role:"text"},Object(l.createElement)("span",{className:"nhsuk-u-visually-hidden"},"Non-urgent advice: "),Object(l.createElement)("span",{className:"nhsuk-care-card__heading-text"},Object(l.createElement)(ee.Content,{value:n})))),Object(l.createElement)("span",{className:"nhsuk-care-card__arrow","aria-hidden":"true"})),Object(l.createElement)("div",{className:"nhsuk-care-card__content"},Object(l.createElement)(ee.Content,{multiline:"p",value:a})))}}),wp.blocks.registerBlockStyle("nhsblocks/card1",{name:"default",label:"Standard Blue",isDefault:!0}),wp.blocks.registerBlockStyle("nhsblocks/card1",{name:"urgent",label:"Urgent (Red)"}),wp.blocks.registerBlockStyle("nhsblocks/card1",{name:"immediate",label:"Immediate (Red and Black)"});var te=wp.element,ne=(te.useState,te.setState,wp.i18n.__),le=wp.blocks.registerBlockType,ae=wp.blockEditor.InnerBlocks,ce=wp.element.createElement("svg",{width:60,height:30},wp.element.createElement("rect",{x:"31.000",y:"0.000",width:"29.000",height:"30"}),wp.element.createElement("rect",{x:"0.000",y:"0.000",width:"29.000",height:"30"})),re=wp.element.createElement("svg",{width:60,height:30},wp.element.createElement("rect",{x:"41.000",y:"0.000",width:"19.000",height:"30"}),wp.element.createElement("rect",{x:"21.000",y:"0.000",width:"19.000",height:"30"}),wp.element.createElement("rect",{x:"0.000",y:"0.000",width:"19.000",height:"30"})),se=wp.element.createElement("svg",{width:60,height:30},wp.element.createElement("rect",{x:"21.000",y:"0.000",width:"39.000",height:"30"}),wp.element.createElement("rect",{x:"0.000",y:"0.000",width:"19.000",height:"30"})),oe=wp.element.createElement("svg",{width:60,height:30},wp.element.createElement("rect",{x:"41.000",y:"0.000",width:"19.000",height:"30"}),wp.element.createElement("rect",{x:"0.000",y:"0.000",width:"39.000",height:"30"})),ie=wp.element.createElement("svg",{width:60,height:30},wp.element.createElement("rect",{x:"46.000",y:"0.000",width:"14.000",height:"30"}),wp.element.createElement("rect",{x:"31.000",y:"0.000",width:"14.000",height:"30"}),wp.element.createElement("rect",{x:"0.000",y:"0.000",width:"29.000",height:"30"})),ue=[{title:"Two Columns",icon:ce,template:[["nhsblocks/onehalf"],["nhsblocks/onehalf"]]},{title:"Three Columns",icon:re,template:[["nhsblocks/onethird"],["nhsblocks/onethird"],["nhsblocks/onethird"]]},{title:"One Third / Two Thirds Columns",icon:se,template:[["nhsblocks/onethird"],["nhsblocks/twothirds"]]},{title:"Two Thirds / One Third Columns",icon:oe,template:[["nhsblocks/twothirds"],["nhsblocks/onethird"]]},{title:"One Quarter / One Half / One Quarter Columns",icon:wp.element.createElement("svg",{width:60,height:30},wp.element.createElement("rect",{x:"46.000",y:"0.000",width:"14.000",height:"30"}),wp.element.createElement("rect",{x:"16.000",y:"0.000",width:"29.000",height:"30"}),wp.element.createElement("rect",{x:"0.000",y:"0.000",width:"14.000",height:"30"})),template:[["nhsblocks/onequarter"],["nhsblocks/onehalf"],["nhsblocks/onequarter"]]},{title:"One Quarter / One Quarter / One Half Columns",icon:wp.element.createElement("svg",{width:60,height:30},wp.element.createElement("rect",{x:"31.000",y:"0.000",width:"29.000",height:"30"}),wp.element.createElement("rect",{x:"16.000",y:"0.000",width:"14.000",height:"30"}),wp.element.createElement("rect",{x:"0.000",y:"0.000",width:"14.000",height:"30"})),template:[["nhsblocks/onequarter"],["nhsblocks/onequarter"],["nhsblocks/onehalf"]]},{title:"One Half / One Quarter / One Quarter Columns",icon:ie,template:[["nhsblocks/onehalf"],["nhsblocks/onequarter"],["nhsblocks/onequarter"]]}],he=[{title:"Panel",icon:"feedback",template:[["nhsblocks/panel1"]]},{title:"Promo",icon:"megaphone",template:[["nhsblocks/promo1"]]},{title:"Quote / Testimonial",icon:"format-quote",template:[["nhsblocks/quote1"]]}];le("nhsblock/rowgroup",{title:ne("Grouped Items","nhsblocks"),category:"nhsblocks",icon:"layout",attributes:{template:{type:"array"}},edit:function(e){var t=e.attributes.template,n=e.setAttributes,a=null===t||!t;return Object(l.createElement)("div",{className:"nhsuk-grid-row"},Object(l.createElement)("div",{className:"nhsuk-panel-group nhsuk-grid-column-full"},Object(l.createElement)(ae,{template:a?null:t,__experimentalTemplateOptions:ue,__experimentalOnSelectTemplateOption:function(e){n({template:e})}})))},save:function(e){e.attributes.template;return Object(l.createElement)("div",{className:"nhsuk-grid-row"},Object(l.createElement)("div",{className:"nhsuk-panel-group nhsuk-grid-column-full"},Object(l.createElement)(ae.Content,null)))}}),le("nhsblocks/onehalf",{title:ne("One Half Width","nhsblocks"),category:"nhsblocks",parent:["nhsblock/rowgroup"],attributes:{template:{type:"array"}},edit:function(e){var t=e.attributes.template,n=e.setAttributes,a=null===t||!t;return Object(l.createElement)("div",{className:"nhsuk-grid-column-one-half"},Object(l.createElement)(ae,{template:a?null:t,__experimentalTemplateOptions:he,__experimentalOnSelectTemplateOption:function(e){n({template:e})}}))},save:function(e){e.attributes.template;return Object(l.createElement)("div",{className:"nhsuk-grid-column-one-half"},Object(l.createElement)(ae.Content,null))}}),le("nhsblocks/onethird",{title:ne("One Third Width","nhsblocks"),category:"nhsblocks",parent:["nhsblock/rowgroup"],attributes:{template:{type:"array"}},edit:function(e){var t=e.attributes.template,n=e.setAttributes,a=null===t||!t;return Object(l.createElement)("div",{className:"nhsuk-grid-column-one-third"},Object(l.createElement)(ae,{template:a?null:t,__experimentalTemplateOptions:he,__experimentalOnSelectTemplateOption:function(e){n({template:e})}}))},save:function(e){e.attributes.template;return Object(l.createElement)("div",{className:"nhsuk-grid-column-one-third"},Object(l.createElement)(ae.Content,null))}}),le("nhsblocks/onequarter",{title:ne("One Quarter Width","nhsblocks"),category:"nhsblocks",parent:["nhsblock/rowgroup"],attributes:{template:{type:"array"}},edit:function(e){var t=e.attributes.template,n=e.setAttributes,a=null===t||!t;return Object(l.createElement)("div",{className:"nhsuk-grid-column-one-quarter"},Object(l.createElement)(ae,{template:a?null:t,__experimentalTemplateOptions:he,__experimentalOnSelectTemplateOption:function(e){n({template:e})}}))},save:function(e){e.attributes.template;return Object(l.createElement)("div",{className:"nhsuk-grid-column-one-quarter"},Object(l.createElement)(ae.Content,null))}}),le("nhsblocks/twothirds",{title:ne("Two Thirds Width","nhsblocks"),category:"nhsblocks",parent:["nhsblock/rowgroup"],attributes:{template:{type:"array"}},edit:function(e){var t=e.attributes.template,n=e.setAttributes,a=null===t||!t;return Object(l.createElement)("div",{className:"nhsuk-grid-column-two-thirds"},Object(l.createElement)(ae,{template:a?null:t,__experimentalTemplateOptions:he,__experimentalOnSelectTemplateOption:function(e){n({template:e})}}))},save:function(e){e.attributes.template;return Object(l.createElement)("div",{className:"nhsuk-grid-column-two-thirds"},Object(l.createElement)(ae.Content,null))}}),le("nhsblocks/threequarters",{title:ne("Three Quarter Width","nhsblocks"),category:"nhsblocks",parent:["nhsblock/rowgroup"],attributes:{template:{type:"array"}},edit:function(e){var t=e.attributes.template,n=e.setAttributes,a=null===t||!t;return Object(l.createElement)("div",{className:"nhsuk-grid-column-three-quarters"},Object(l.createElement)(ae,{template:a?null:t,__experimentalTemplateOptions:he,__experimentalOnSelectTemplateOption:function(e){n({template:e})}}))},save:function(e){e.attributes.template;return Object(l.createElement)("div",{className:"nhsuk-grid-column-three-quarters"},Object(l.createElement)(ae.Content,null))}});var me=wp.i18n.__,be=wp.blocks.registerBlockType,de=wp.blockEditor,pe=de.RichText,ke=de.InspectorControls,ge=de.ColorPalette,Ee=de.MediaUpload,Oe=de.InnerBlocks;be("nhsblocks/heroblock",{title:me("Hero Block","nhsblocks"),description:me("Full width zone, designed to go at the top of your page with an optional image background, texta area and call to action","nhsblocks"),category:"nhsblocks",icon:"schedule",attributes:{overlayColor:{type:"string",default:"#005eb8"},backgroundImage:{type:"string",default:"/wp-content/themes/nightingale-2-0/assets/pixel_trans.png"}},edit:function(e){var t=e.setAttributes,n=e.attributes,a=e.className,c=n.overlayColor,r=n.backgroundImage;return[Object(l.createElement)(ke,null,Object(l.createElement)("div",null,Object(l.createElement)("strong",null,"Select a background color:")," ",Object(l.createElement)("br",null),Object(l.createElement)("i",null,"(this will be ignored if you choose an image below)"),Object(l.createElement)(ge,{value:c,onChange:function(e){t({overlayColor:e})}})),Object(l.createElement)("div",null,Object(l.createElement)("strong",null,"Select a background image:"),Object(l.createElement)(Ee,{onSelect:function(e){t({backgroundImage:e.sizes.full.url})},type:"image",value:r,render:function(e){var t=e.open;return Object(l.createElement)("button",{onClick:t},"Upload Image!")}}))),Object(l.createElement)("section",{className:"".concat(a,"  nhsuk-hero nhsuk-hero--image nhsuk-hero--image-description"),style:{backgroundColor:c,backgroundImage:"url(".concat(r,")"),backgroundSize:"cover",backgroundPosition:"center"}},Object(l.createElement)("div",{className:"nhsuk-hero__overlay"},Object(l.createElement)("div",{className:"nhsuk-width-container"},Object(l.createElement)("div",{className:"nhsuk-grid-row"},Object(l.createElement)("div",{className:"nhsuk-grid-column-two-thirds"},Object(l.createElement)(Oe,{template:[]}))))))]},save:function(e){var t=e.attributes,n=(e.className,t.overlayColor),a=t.backgroundImage;return Object(l.createElement)("section",{className:"nhsuk-hero nhsuk-hero--image nhsuk-hero--image-description",style:{backgroundImage:"url(".concat(a,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundColor:n}},Object(l.createElement)("div",{className:"nhsuk-hero__overlay"},Object(l.createElement)("div",{className:"nhsuk-width-container"},Object(l.createElement)("div",{className:"nhsuk-grid-row"},Object(l.createElement)("div",{className:"nhsuk-grid-column-two-thirds"},Object(l.createElement)(Oe.Content,null))))))}}),be("nhsblocks/heroinner",{title:me("Hero Block Inner Text","nhsblocks"),description:me("Add some text to the header","nhsblocks"),category:"nhsblocks",parent:"nhsblocks/heroblock",icon:"nametag",attributes:{texttitle:{type:"array",source:"children",selector:"h1"},texttext:{type:"array",source:"children",selector:"p"},fontColor:{type:"string",default:"#ffffff"}},edit:function(e){var t=e.setAttributes,n=e.attributes,a=(e.className,n.fontColor);return[Object(l.createElement)(ke,null,Object(l.createElement)("div",null,Object(l.createElement)("strong",null,"Select a font color:"),Object(l.createElement)(ge,{value:a,onChange:function(e){t({fontColor:e})}}))),Object(l.createElement)("div",{className:"nhsuk-hero-content"},Object(l.createElement)(pe,{tagName:"h1",className:"nhsuk-u-margin-bottom-3",value:n.texttitle,onChange:function(e){t({texttitle:e})},placeholder:"Enter your text here!",style:{color:a}}),Object(l.createElement)(pe,{tagName:"p",className:"nhsuk-body-l nhsuk-u-margin-bottom-0",value:n.texttext,onChange:function(e){t({texttext:e})},placeholder:"Enter your text here!",style:{color:a}}),Object(l.createElement)("span",{className:"nhsuk-hero__arrow","aria-hidden":"true"}))]},save:function(e){var t=e.attributes,n=(e.className,t.fontColor);return Object(l.createElement)("div",{className:"nhsuk-hero-content"},Object(l.createElement)(pe.Content,{tagName:"h1",className:"nhsuk-u-margin-bottom-3",style:{color:n},value:t.texttitle}),Object(l.createElement)(pe.Content,{tagName:"p",className:"nhsuk-body-l nhsuk-u-margin-bottom-0",style:{color:n},value:t.textString}),Object(l.createElement)("span",{className:"nhsuk-hero__arrow","aria-hidden":"true"}))}})}]);