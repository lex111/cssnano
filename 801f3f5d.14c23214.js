(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1154:function(e,t,n){var o={"./_collections":184,"./_collections.js":184,"./_path":201,"./_path.js":201,"./_transforms":204,"./_transforms.js":204,"./addAttributesToSVGElement":409,"./addAttributesToSVGElement.js":409,"./addClassesToSVGElement":410,"./addClassesToSVGElement.js":410,"./cleanupAttrs":411,"./cleanupAttrs.js":411,"./cleanupEnableBackground":412,"./cleanupEnableBackground.js":412,"./cleanupIDs":413,"./cleanupIDs.js":413,"./cleanupListOfValues":414,"./cleanupListOfValues.js":414,"./cleanupNumericValues":415,"./cleanupNumericValues.js":415,"./collapseGroups":416,"./collapseGroups.js":416,"./convertColors":417,"./convertColors.js":417,"./convertEllipseToCircle":418,"./convertEllipseToCircle.js":418,"./convertPathData":419,"./convertPathData.js":419,"./convertShapeToPath":420,"./convertShapeToPath.js":420,"./convertStyleToAttrs":421,"./convertStyleToAttrs.js":421,"./convertTransform":422,"./convertTransform.js":422,"./inlineStyles":423,"./inlineStyles.js":423,"./mergePaths":438,"./mergePaths.js":438,"./minifyStyles":439,"./minifyStyles.js":439,"./moveElemsAttrsToGroup":453,"./moveElemsAttrsToGroup.js":453,"./moveGroupAttrsToElems":454,"./moveGroupAttrsToElems.js":454,"./prefixIds":455,"./prefixIds.js":455,"./removeAttributesBySelector":456,"./removeAttributesBySelector.js":456,"./removeAttrs":457,"./removeAttrs.js":457,"./removeComments":458,"./removeComments.js":458,"./removeDesc":459,"./removeDesc.js":459,"./removeDimensions":460,"./removeDimensions.js":460,"./removeDoctype":461,"./removeDoctype.js":461,"./removeEditorsNSData":462,"./removeEditorsNSData.js":462,"./removeElementsByAttr":463,"./removeElementsByAttr.js":463,"./removeEmptyAttrs":464,"./removeEmptyAttrs.js":464,"./removeEmptyContainers":465,"./removeEmptyContainers.js":465,"./removeEmptyText":466,"./removeEmptyText.js":466,"./removeHiddenElems":467,"./removeHiddenElems.js":467,"./removeMetadata":468,"./removeMetadata.js":468,"./removeNonInheritableGroupAttrs":469,"./removeNonInheritableGroupAttrs.js":469,"./removeOffCanvasPaths":470,"./removeOffCanvasPaths.js":470,"./removeRasterImages":471,"./removeRasterImages.js":471,"./removeScriptElement":472,"./removeScriptElement.js":472,"./removeStyleElement":473,"./removeStyleElement.js":473,"./removeTitle":474,"./removeTitle.js":474,"./removeUnknownsAndDefaults":475,"./removeUnknownsAndDefaults.js":475,"./removeUnusedNS":476,"./removeUnusedNS.js":476,"./removeUselessDefs":477,"./removeUselessDefs.js":477,"./removeUselessStrokeAndFill":478,"./removeUselessStrokeAndFill.js":478,"./removeViewBox":479,"./removeViewBox.js":479,"./removeXMLNS":480,"./removeXMLNS.js":480,"./removeXMLProcInst":481,"./removeXMLProcInst.js":481,"./reusePaths":482,"./reusePaths.js":482,"./sortAttrs":491,"./sortAttrs.js":491,"./sortDefsChildren":492,"./sortDefsChildren.js":492};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=s,e.exports=r,r.id=1154},1393:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=1393},1397:function(e,t){},1399:function(e,t){},1550:function(e,t){},171:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),s=n(202),a=n(553),l=n.n(a),i=n(554),c=n.n(i),m=n(183),u=n(185),d=n.n(u),p=n(241),v=n(242),h=n.n(v);class f extends o.Component{constructor(e){super(e),this.state={isEditorReady:!1},this.handleEditorDidMount=this.handleEditorDidMount.bind(this)}handleEditorDidMount(){this.setState({isEditorReady:!0})}render(){return r.a.createElement("div",null,r.a.createElement(v.ControlledEditor,{height:"50rem",theme:this.props.theme,language:"css",loading:r.a.createElement(p.RingSpinner,null),value:this.props.input,onChange:this.props.handleOnChange,editorDidMount:this.handleEditorDidMount,options:{lineNumbers:"on"}}))}}var E=f;class j extends o.Component{render(){return r.a.createElement("div",null,r.a.createElement(h.a,{height:"50rem",theme:this.props.theme,language:"css",loading:r.a.createElement(p.RingSpinner,null),value:this.props.output,editorDidMount:this.handleEditorDidMount,options:{lineNumbers:"on"}}))}}var g=j,y={encodeToBase64:e=>window.btoa(unescape(encodeURIComponent(e))),decodeFromBase64:e=>decodeURIComponent(escape(window.atob(e)))};class b extends o.Component{render(){return r.a.createElement("div",null,r.a.createElement(v.ControlledEditor,{height:"50rem",theme:this.props.theme,language:"json",loading:r.a.createElement(p.RingSpinner,null),value:this.props.config,onChange:this.props.handleOnChange,editorDidMount:this.handleEditorDidMount,options:{lineNumbers:"on"}}))}}var S=b,C=n(589),N=n(590),w=n(588),A=n(98),D=n.n(A);function O({...e}){return r.a.createElement("nav",{className:d()("navbar navbar--dark",D.a.playgroundInnerNav)},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("button",{onClick:e.toggleTheme,className:d()("button button--primary",D.a.headbtn)},r.a.createElement(w.a,null)," Toggle theme"),r.a.createElement("button",{onClick:e.runHandler,className:d()("button button--primary",D.a.headbtn)},r.a.createElement(C.a,null)," Run"),r.a.createElement("button",{onClick:e.format,className:d()("button button--primary",D.a.headbtn)},r.a.createElement(N.a,null)," Format"),r.a.createElement("button",{onClick:e.save,className:d()("button button--primary",D.a.headbtn)},r.a.createElement(C.b,null)," Save"))))}var T=n(179),P=n.n(T);const k={cssnanoPresetDefault:n(338),cssnanoPresetAdvanced:n(1538)};function _(e,t,n){if(!Array.isArray(e))return Promise.resolve(e()(t,n));{const[o,r]=e;if(void 0===r||"object"==typeof r&&!r.exclude)return Promise.resolve(o(r)(t,n))}return Promise.resolve()}var M=(e,t)=>{const{plugins:n}=k[(o=t[0],o.split("-").map((e,t)=>0===t?e:e.slice(0,1).toUpperCase().concat(e.slice(1))).join(""))](t[1]);var o;const r=(e,t)=>n.reduce((n,o)=>n.then(_.bind(null,o,e,t)),Promise.resolve());return new Promise((t,n)=>{P()(r).process(e).then(e=>t(e)).catch(e=>n(e))})},I=n(99),U=n.n(I);t.default=()=>{const e=JSON.parse("undefined"!=typeof window&&window.localStorage.getItem("cssnano_editor_state")||null),t=function(){try{return JSON.parse(y.decodeFromBase64(window.location.hash.replace(/^#/u,"")))}catch(e){return null}}()||e||{input:"/* write your css below */",config:'// cssnano config\n{\n  "preset" : "default",\n}\n'},n=Object(m.a)(),{siteConfig:a={}}=n,[i,u]=Object(o.useState)("dark"),[v,h]=Object(o.useState)(!1),[f,j]=Object(o.useState)("/* your optimized output here */"),[b,C]=Object(o.useState)(t.input),[N,w]=Object(o.useState)(t.config);return r.a.createElement(s.a,{title:""+a.title,description:"CSSNANO - Playground"},r.a.createElement(O,{toggleTheme:function(){u("light"===i?"dark":"light")},runHandler:async function(){h(!0);const e=function(e){void 0!==e.preset&&e.preset;if(void 0===e.plugins){if(Array.isArray(e.preset))return["advance"===e.preset[0]?"cssnano-preset-advance":"cssnano-preset-default",e.preset.length>1?e.preset[1]:{}];e.preset}return["cssnano-preset-default",{}]}(JSON.parse(JSON.stringify(N.split("\n").slice(1).join("\n"))));M(b,e).then(e=>{j(e.css)}).catch(e=>{j(e)}),h(!1)},format:function(){const e=l.a.format(b,{parser:"css",plugins:[c.a]});C(e)},save:function(){const e=JSON.stringify({input:b,config:N});"undefined"!=typeof window&&(window.localStorage&&window.localStorage.setItem("cssnano_editor_state",e),window.location.hash=y.encodeToBase64(e))}}),r.a.createElement("div",{className:D.a.panelLoaderPlaceholder,style:{display:v?"block":"none"}},r.a.createElement("div",{className:D.a.panelLoaderHolder},r.a.createElement(p.RingSpinner,null))),r.a.createElement("div",{className:"row",style:{margin:"0"}},r.a.createElement("div",{className:d()("col col--4",U.a.editorCol)},r.a.createElement(E,{theme:i,input:b,handleOnChange:function(e,t){C(t)}})),r.a.createElement("div",{className:d()("col col--4",U.a.editorCol)},r.a.createElement(S,{theme:i,config:N,handleOnChange:function(e,t){w(t)}})),r.a.createElement("div",{className:d()("col col--4",U.a.editorCol)},r.a.createElement(g,{theme:i,output:f}))))}},591:function(e,t){},592:function(e,t){},593:function(e,t){},610:function(e,t){},625:function(e,t){}}]);