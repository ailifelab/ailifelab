import{a as e,c as t,n,o as r,r as i,s as a}from"./index-D9_-1m5S.js";import{t as o}from"./summary-C_X6zVJ3.js";function s(e,t){let n=t||{};return(e[e.length-1]===``?[...e,``]:e).join((n.padRight?` `:``)+`,`+(n.padLeft===!1?``:` `)).trim()}var c=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,l=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,u={};function d(e,t){return((t||u).jsx?l:c).test(e)}var f=/[ \t\n\f\r]/g;function p(e){return typeof e==`object`?e.type===`text`&&m(e.value):m(e)}function m(e){return e.replace(f,``)===``}var h=class{constructor(e,t,n){this.normal=t,this.property=e,n&&(this.space=n)}};h.prototype.normal={},h.prototype.property={},h.prototype.space=void 0;function g(e,t){let n={},r={};for(let t of e)Object.assign(n,t.property),Object.assign(r,t.normal);return new h(n,r,t)}function _(e){return e.toLowerCase()}var v=class{constructor(e,t){this.attribute=t,this.property=e}};v.prototype.attribute=``,v.prototype.booleanish=!1,v.prototype.boolean=!1,v.prototype.commaOrSpaceSeparated=!1,v.prototype.commaSeparated=!1,v.prototype.defined=!1,v.prototype.mustUseProperty=!1,v.prototype.number=!1,v.prototype.overloadedBoolean=!1,v.prototype.property=``,v.prototype.spaceSeparated=!1,v.prototype.space=void 0;var y=a({boolean:()=>x,booleanish:()=>S,commaOrSpaceSeparated:()=>D,commaSeparated:()=>E,number:()=>w,overloadedBoolean:()=>C,spaceSeparated:()=>T}),b=0,x=O(),S=O(),C=O(),w=O(),T=O(),E=O(),D=O();function O(){return 2**++b}var k=Object.keys(y),A=class extends v{constructor(e,t,n,r){let i=-1;if(super(e,t),ee(this,`space`,r),typeof n==`number`)for(;++i<k.length;){let e=k[i];ee(this,k[i],(n&y[e])===y[e])}}};A.prototype.defined=!0;function ee(e,t,n){n&&(e[t]=n)}function j(e){let t={},n={};for(let[r,i]of Object.entries(e.properties)){let a=new A(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(a.mustUseProperty=!0),t[r]=a,n[_(r)]=r,n[_(a.attribute)]=r}return new h(t,n,e.space)}var M=j({properties:{ariaActiveDescendant:null,ariaAtomic:S,ariaAutoComplete:null,ariaBusy:S,ariaChecked:S,ariaColCount:w,ariaColIndex:w,ariaColSpan:w,ariaControls:T,ariaCurrent:null,ariaDescribedBy:T,ariaDetails:null,ariaDisabled:S,ariaDropEffect:T,ariaErrorMessage:null,ariaExpanded:S,ariaFlowTo:T,ariaGrabbed:S,ariaHasPopup:null,ariaHidden:S,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:T,ariaLevel:w,ariaLive:null,ariaModal:S,ariaMultiLine:S,ariaMultiSelectable:S,ariaOrientation:null,ariaOwns:T,ariaPlaceholder:null,ariaPosInSet:w,ariaPressed:S,ariaReadOnly:S,ariaRelevant:null,ariaRequired:S,ariaRoleDescription:T,ariaRowCount:w,ariaRowIndex:w,ariaRowSpan:w,ariaSelected:S,ariaSetSize:w,ariaSort:null,ariaValueMax:w,ariaValueMin:w,ariaValueNow:w,ariaValueText:null,role:null},transform(e,t){return t===`role`?t:`aria-`+t.slice(4).toLowerCase()}});function N(e,t){return t in e?e[t]:t}function P(e,t){return N(e,t.toLowerCase())}var F=j({attributes:{acceptcharset:`accept-charset`,classname:`class`,htmlfor:`for`,httpequiv:`http-equiv`},mustUseProperty:[`checked`,`multiple`,`muted`,`selected`],properties:{abbr:null,accept:E,acceptCharset:T,accessKey:T,action:null,allow:null,allowFullScreen:x,allowPaymentRequest:x,allowUserMedia:x,alpha:x,alt:null,as:null,async:x,autoCapitalize:null,autoComplete:T,autoFocus:x,autoPlay:x,blocking:T,capture:null,charSet:null,checked:x,cite:null,className:T,closedBy:null,colorSpace:null,cols:w,colSpan:w,command:null,commandFor:null,content:null,contentEditable:S,controls:x,controlsList:T,coords:w|E,crossOrigin:null,data:null,dateTime:null,decoding:null,default:x,defer:x,dir:null,dirName:null,disabled:x,download:C,draggable:S,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:x,formTarget:null,headers:T,height:w,hidden:C,high:w,href:null,hrefLang:null,htmlFor:T,httpEquiv:T,id:null,imageSizes:null,imageSrcSet:null,inert:x,inputMode:null,integrity:null,is:null,isMap:x,itemId:null,itemProp:T,itemRef:T,itemScope:x,itemType:T,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:x,low:w,manifest:null,max:null,maxLength:w,media:null,method:null,min:null,minLength:w,multiple:x,muted:x,name:null,nonce:null,noModule:x,noValidate:x,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:x,optimum:w,pattern:null,ping:T,placeholder:null,playsInline:x,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:x,referrerPolicy:null,rel:T,required:x,reversed:x,rows:w,rowSpan:w,sandbox:T,scope:null,scoped:x,seamless:x,selected:x,shadowRootClonable:x,shadowRootCustomElementRegistry:x,shadowRootDelegatesFocus:x,shadowRootMode:null,shadowRootSerializable:x,shape:null,size:w,sizes:null,slot:null,span:w,spellCheck:S,src:null,srcDoc:null,srcLang:null,srcSet:null,start:w,step:null,style:null,tabIndex:w,target:null,title:null,translate:null,type:null,typeMustMatch:x,useMap:null,value:S,width:w,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:T,axis:null,background:null,bgColor:null,border:w,borderColor:null,bottomMargin:w,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:x,declare:x,event:null,face:null,frame:null,frameBorder:null,hSpace:w,leftMargin:w,link:null,longDesc:null,lowSrc:null,marginHeight:w,marginWidth:w,noResize:x,noHref:x,noShade:x,noWrap:x,object:null,profile:null,prompt:null,rev:null,rightMargin:w,rules:null,scheme:null,scrolling:S,standby:null,summary:null,text:null,topMargin:w,valueType:null,version:null,vAlign:null,vLink:null,vSpace:w,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:x,disablePictureInPicture:x,disableRemotePlayback:x,exportParts:E,part:T,prefix:null,property:null,results:w,security:null,unselectable:null},space:`html`,transform:P}),I=j({attributes:{accentHeight:`accent-height`,alignmentBaseline:`alignment-baseline`,arabicForm:`arabic-form`,baselineShift:`baseline-shift`,capHeight:`cap-height`,className:`class`,clipPath:`clip-path`,clipRule:`clip-rule`,colorInterpolation:`color-interpolation`,colorInterpolationFilters:`color-interpolation-filters`,colorProfile:`color-profile`,colorRendering:`color-rendering`,crossOrigin:`crossorigin`,dataType:`datatype`,dominantBaseline:`dominant-baseline`,enableBackground:`enable-background`,fillOpacity:`fill-opacity`,fillRule:`fill-rule`,floodColor:`flood-color`,floodOpacity:`flood-opacity`,fontFamily:`font-family`,fontSize:`font-size`,fontSizeAdjust:`font-size-adjust`,fontStretch:`font-stretch`,fontStyle:`font-style`,fontVariant:`font-variant`,fontWeight:`font-weight`,glyphName:`glyph-name`,glyphOrientationHorizontal:`glyph-orientation-horizontal`,glyphOrientationVertical:`glyph-orientation-vertical`,hrefLang:`hreflang`,horizAdvX:`horiz-adv-x`,horizOriginX:`horiz-origin-x`,horizOriginY:`horiz-origin-y`,imageRendering:`image-rendering`,letterSpacing:`letter-spacing`,lightingColor:`lighting-color`,markerEnd:`marker-end`,markerMid:`marker-mid`,markerStart:`marker-start`,maskType:`mask-type`,navDown:`nav-down`,navDownLeft:`nav-down-left`,navDownRight:`nav-down-right`,navLeft:`nav-left`,navNext:`nav-next`,navPrev:`nav-prev`,navRight:`nav-right`,navUp:`nav-up`,navUpLeft:`nav-up-left`,navUpRight:`nav-up-right`,onAbort:`onabort`,onActivate:`onactivate`,onAfterPrint:`onafterprint`,onBeforePrint:`onbeforeprint`,onBegin:`onbegin`,onCancel:`oncancel`,onCanPlay:`oncanplay`,onCanPlayThrough:`oncanplaythrough`,onChange:`onchange`,onClick:`onclick`,onClose:`onclose`,onCopy:`oncopy`,onCueChange:`oncuechange`,onCut:`oncut`,onDblClick:`ondblclick`,onDrag:`ondrag`,onDragEnd:`ondragend`,onDragEnter:`ondragenter`,onDragExit:`ondragexit`,onDragLeave:`ondragleave`,onDragOver:`ondragover`,onDragStart:`ondragstart`,onDrop:`ondrop`,onDurationChange:`ondurationchange`,onEmptied:`onemptied`,onEnd:`onend`,onEnded:`onended`,onError:`onerror`,onFocus:`onfocus`,onFocusIn:`onfocusin`,onFocusOut:`onfocusout`,onHashChange:`onhashchange`,onInput:`oninput`,onInvalid:`oninvalid`,onKeyDown:`onkeydown`,onKeyPress:`onkeypress`,onKeyUp:`onkeyup`,onLoad:`onload`,onLoadedData:`onloadeddata`,onLoadedMetadata:`onloadedmetadata`,onLoadStart:`onloadstart`,onMessage:`onmessage`,onMouseDown:`onmousedown`,onMouseEnter:`onmouseenter`,onMouseLeave:`onmouseleave`,onMouseMove:`onmousemove`,onMouseOut:`onmouseout`,onMouseOver:`onmouseover`,onMouseUp:`onmouseup`,onMouseWheel:`onmousewheel`,onOffline:`onoffline`,onOnline:`ononline`,onPageHide:`onpagehide`,onPageShow:`onpageshow`,onPaste:`onpaste`,onPause:`onpause`,onPlay:`onplay`,onPlaying:`onplaying`,onPopState:`onpopstate`,onProgress:`onprogress`,onRateChange:`onratechange`,onRepeat:`onrepeat`,onReset:`onreset`,onResize:`onresize`,onScroll:`onscroll`,onSeeked:`onseeked`,onSeeking:`onseeking`,onSelect:`onselect`,onShow:`onshow`,onStalled:`onstalled`,onStorage:`onstorage`,onSubmit:`onsubmit`,onSuspend:`onsuspend`,onTimeUpdate:`ontimeupdate`,onToggle:`ontoggle`,onUnload:`onunload`,onVolumeChange:`onvolumechange`,onWaiting:`onwaiting`,onZoom:`onzoom`,overlinePosition:`overline-position`,overlineThickness:`overline-thickness`,paintOrder:`paint-order`,panose1:`panose-1`,pointerEvents:`pointer-events`,referrerPolicy:`referrerpolicy`,renderingIntent:`rendering-intent`,shapeRendering:`shape-rendering`,stopColor:`stop-color`,stopOpacity:`stop-opacity`,strikethroughPosition:`strikethrough-position`,strikethroughThickness:`strikethrough-thickness`,strokeDashArray:`stroke-dasharray`,strokeDashOffset:`stroke-dashoffset`,strokeLineCap:`stroke-linecap`,strokeLineJoin:`stroke-linejoin`,strokeMiterLimit:`stroke-miterlimit`,strokeOpacity:`stroke-opacity`,strokeWidth:`stroke-width`,tabIndex:`tabindex`,textAnchor:`text-anchor`,textDecoration:`text-decoration`,textRendering:`text-rendering`,transformOrigin:`transform-origin`,typeOf:`typeof`,underlinePosition:`underline-position`,underlineThickness:`underline-thickness`,unicodeBidi:`unicode-bidi`,unicodeRange:`unicode-range`,unitsPerEm:`units-per-em`,vAlphabetic:`v-alphabetic`,vHanging:`v-hanging`,vIdeographic:`v-ideographic`,vMathematical:`v-mathematical`,vectorEffect:`vector-effect`,vertAdvY:`vert-adv-y`,vertOriginX:`vert-origin-x`,vertOriginY:`vert-origin-y`,wordSpacing:`word-spacing`,writingMode:`writing-mode`,xHeight:`x-height`,playbackOrder:`playbackorder`,timelineBegin:`timelinebegin`},properties:{about:D,accentHeight:w,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:w,amplitude:w,arabicForm:null,ascent:w,attributeName:null,attributeType:null,azimuth:w,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:w,by:null,calcMode:null,capHeight:w,className:T,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:w,diffuseConstant:w,direction:null,display:null,dur:null,divisor:w,dominantBaseline:null,download:x,dx:null,dy:null,edgeMode:null,editable:null,elevation:w,enableBackground:null,end:null,event:null,exponent:w,externalResourcesRequired:null,fill:null,fillOpacity:w,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:E,g2:E,glyphName:E,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:w,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:w,horizOriginX:w,horizOriginY:w,id:null,ideographic:w,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:w,k:w,k1:w,k2:w,k3:w,k4:w,kernelMatrix:D,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:w,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:w,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:w,overlineThickness:w,paintOrder:null,panose1:null,path:null,pathLength:w,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:T,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:w,pointsAtY:w,pointsAtZ:w,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:D,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:D,rev:D,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:D,requiredFeatures:D,requiredFonts:D,requiredFormats:D,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:w,specularExponent:w,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:w,strikethroughThickness:w,string:null,stroke:null,strokeDashArray:D,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:w,strokeOpacity:w,strokeWidth:null,style:null,surfaceScale:w,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:D,tabIndex:w,tableValues:null,target:null,targetX:w,targetY:w,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:D,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:w,underlineThickness:w,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:w,values:null,vAlphabetic:w,vMathematical:w,vectorEffect:null,vHanging:w,vIdeographic:w,version:null,vertAdvY:w,vertOriginX:w,vertOriginY:w,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:w,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:`svg`,transform:N}),L=j({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:`xlink`,transform(e,t){return`xlink:`+t.slice(5).toLowerCase()}}),te=j({attributes:{xmlnsxlink:`xmlns:xlink`},properties:{xmlnsXLink:null,xmlns:null},space:`xmlns`,transform:P}),ne=j({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:`xml`,transform(e,t){return`xml:`+t.slice(3).toLowerCase()}}),re={classId:`classID`,dataType:`datatype`,itemId:`itemID`,strokeDashArray:`strokeDasharray`,strokeDashOffset:`strokeDashoffset`,strokeLineCap:`strokeLinecap`,strokeLineJoin:`strokeLinejoin`,strokeMiterLimit:`strokeMiterlimit`,typeOf:`typeof`,xLinkActuate:`xlinkActuate`,xLinkArcRole:`xlinkArcrole`,xLinkHref:`xlinkHref`,xLinkRole:`xlinkRole`,xLinkShow:`xlinkShow`,xLinkTitle:`xlinkTitle`,xLinkType:`xlinkType`,xmlnsXLink:`xmlnsXlink`},ie=/[A-Z]/g,ae=/-[a-z]/g,oe=/^data[-\w.:]+$/i;function se(e,t){let n=_(t),r=t,i=v;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)===`data`&&oe.test(t)){if(t.charAt(4)===`-`){let e=t.slice(5).replace(ae,le);r=`data`+e.charAt(0).toUpperCase()+e.slice(1)}else{let e=t.slice(4);if(!ae.test(e)){let n=e.replace(ie,ce);n.charAt(0)!==`-`&&(n=`-`+n),t=`data`+n}}i=A}return new i(r,t)}function ce(e){return`-`+e.toLowerCase()}function le(e){return e.charAt(1).toUpperCase()}var ue=g([M,F,L,te,ne],`html`),de=g([M,I,L,te,ne],`svg`);function fe(e){return e.join(` `).trim()}var pe=r(((e,t)=>{var n=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,i=/^\s*/,a=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,o=/^:\s*/,s=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,c=/^[;\s]*/,l=/^\s+|\s+$/g;function u(e,t){if(typeof e!=`string`)throw TypeError(`First argument must be a string`);if(!e)return[];t||={};var l=1,u=1;function f(e){var t=e.match(r);t&&(l+=t.length);var n=e.lastIndexOf(`
`);u=~n?e.length-n:u+e.length}function p(){var e={line:l,column:u};return function(t){return t.position=new m(e),_(),t}}function m(e){this.start=e,this.end={line:l,column:u},this.source=t.source}m.prototype.content=e;function h(n){var r=Error(t.source+`:`+l+`:`+u+`: `+n);if(r.reason=n,r.filename=t.source,r.line=l,r.column=u,r.source=e,!t.silent)throw r}function g(t){var n=t.exec(e);if(n){var r=n[0];return f(r),e=e.slice(r.length),n}}function _(){g(i)}function v(e){var t;for(e||=[];t=y();)t!==!1&&e.push(t);return e}function y(){var t=p();if(e.charAt(0)==`/`&&e.charAt(1)==`*`){for(var n=2;e.charAt(n)!=``&&(e.charAt(n)!=`*`||e.charAt(n+1)!=`/`);)++n;if(n+=2,e.charAt(n-1)===``)return h(`End of comment missing`);var r=e.slice(2,n-2);return u+=2,f(r),e=e.slice(n),u+=2,t({type:`comment`,comment:r})}}function b(){var e=p(),t=g(a);if(t){if(y(),!g(o))return h(`property missing ':'`);var r=g(s),i=e({type:`declaration`,property:d(t[0].replace(n,``)),value:r?d(r[0].replace(n,``)):``});return g(c),i}}function x(){var e=[];v(e);for(var t;t=b();)t!==!1&&(e.push(t),v(e));return e}return _(),x()}function d(e){return e?e.replace(l,``):``}t.exports=u})),me=r((e=>{var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var n=t(pe());function r(e,t){let r=null;if(!e||typeof e!=`string`)return r;let i=(0,n.default)(e),a=typeof t==`function`;return i.forEach(e=>{if(e.type!==`declaration`)return;let{property:n,value:i}=e;a?t(n,i,e):i&&(r||={},r[n]=i)}),r}})),he=r((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.camelCase=void 0;var t=/^--[a-zA-Z0-9_-]+$/,n=/-([a-z])/g,r=/^[^-]+$/,i=/^-(webkit|moz|ms|o|khtml)-/,a=/^-(ms)-/,o=function(e){return!e||r.test(e)||t.test(e)},s=function(e,t){return t.toUpperCase()},c=function(e,t){return`${t}-`};e.camelCase=function(e,t){return t===void 0&&(t={}),o(e)?e:(e=e.toLowerCase(),e=t.reactCompat?e.replace(a,c):e.replace(i,c),e.replace(n,s))}})),ge=r(((e,t)=>{var n=(e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}})(me()),r=he();function i(e,t){var i={};return!e||typeof e!=`string`||(0,n.default)(e,function(e,n){e&&n&&(i[(0,r.camelCase)(e,t)]=n)}),i}i.default=i,t.exports=i})),_e=ye(`end`),ve=ye(`start`);function ye(e){return t;function t(t){let n=t&&t.position&&t.position[e]||{};if(typeof n.line==`number`&&n.line>0&&typeof n.column==`number`&&n.column>0)return{line:n.line,column:n.column,offset:typeof n.offset==`number`&&n.offset>-1?n.offset:void 0}}}function be(e){let t=ve(e),n=_e(e);if(t&&n)return{start:t,end:n}}function xe(e){return!e||typeof e!=`object`?``:`position`in e||`type`in e?Ce(e.position):`start`in e||`end`in e?Ce(e):`line`in e||`column`in e?Se(e):``}function Se(e){return we(e&&e.line)+`:`+we(e&&e.column)}function Ce(e){return Se(e&&e.start)+`-`+Se(e&&e.end)}function we(e){return e&&typeof e==`number`?e:1}var R=class extends Error{constructor(e,t,n){super(),typeof t==`string`&&(n=t,t=void 0);let r=``,i={},a=!1;if(t&&(i=`line`in t&&`column`in t||`start`in t&&`end`in t?{place:t}:`type`in t?{ancestors:[t],place:t.position}:{...t}),typeof e==`string`?r=e:!i.cause&&e&&(a=!0,r=e.message,i.cause=e),!i.ruleId&&!i.source&&typeof n==`string`){let e=n.indexOf(`:`);e===-1?i.ruleId=n:(i.source=n.slice(0,e),i.ruleId=n.slice(e+1))}if(!i.place&&i.ancestors&&i.ancestors){let e=i.ancestors[i.ancestors.length-1];e&&(i.place=e.position)}let o=i.place&&`start`in i.place?i.place.start:i.place;this.ancestors=i.ancestors||void 0,this.cause=i.cause||void 0,this.column=o?o.column:void 0,this.fatal=void 0,this.file=``,this.message=r,this.line=o?o.line:void 0,this.name=xe(i.place)||`1:1`,this.place=i.place||void 0,this.reason=this.message,this.ruleId=i.ruleId||void 0,this.source=i.source||void 0,this.stack=a&&i.cause&&typeof i.cause.stack==`string`?i.cause.stack:``,this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}};R.prototype.file=``,R.prototype.name=``,R.prototype.reason=``,R.prototype.message=``,R.prototype.stack=``,R.prototype.column=void 0,R.prototype.line=void 0,R.prototype.ancestors=void 0,R.prototype.cause=void 0,R.prototype.fatal=void 0,R.prototype.place=void 0,R.prototype.ruleId=void 0,R.prototype.source=void 0;var Te=t(ge(),1),Ee={}.hasOwnProperty,De=new Map,Oe=/[A-Z]/g,ke=new Set([`table`,`tbody`,`thead`,`tfoot`,`tr`]),Ae=new Set([`td`,`th`]),je=`https://github.com/syntax-tree/hast-util-to-jsx-runtime`;function Me(e,t){if(!t||t.Fragment===void 0)throw TypeError("Expected `Fragment` in options");let n=t.filePath||void 0,r;if(t.development){if(typeof t.jsxDEV!=`function`)throw TypeError("Expected `jsxDEV` in options when `development: true`");r=Ue(n,t.jsxDEV)}else{if(typeof t.jsx!=`function`)throw TypeError("Expected `jsx` in production options");if(typeof t.jsxs!=`function`)throw TypeError("Expected `jsxs` in production options");r=He(n,t.jsx,t.jsxs)}let i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||`react`,evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space===`svg`?de:ue,stylePropertyNameCase:t.stylePropertyNameCase||`dom`,tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},a=Ne(i,e,void 0);return a&&typeof a!=`string`?a:i.create(e,i.Fragment,{children:a||void 0},void 0)}function Ne(e,t,n){if(t.type===`element`)return Pe(e,t,n);if(t.type===`mdxFlowExpression`||t.type===`mdxTextExpression`)return Fe(e,t);if(t.type===`mdxJsxFlowElement`||t.type===`mdxJsxTextElement`)return Le(e,t,n);if(t.type===`mdxjsEsm`)return Ie(e,t);if(t.type===`root`)return Re(e,t,n);if(t.type===`text`)return ze(e,t)}function Pe(e,t,n){let r=e.schema,i=r;t.tagName.toLowerCase()===`svg`&&r.space===`html`&&(i=de,e.schema=i),e.ancestors.push(t);let a=Ye(e,t.tagName,!1),o=We(e,t),s=Ke(e,t);return ke.has(t.tagName)&&(s=s.filter(function(e){return typeof e!=`string`||!p(e)})),Be(e,o,a,t),Ve(o,s),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function Fe(e,t){if(t.data&&t.data.estree&&e.evaluater){let n=t.data.estree.body[0];return n.type,e.evaluater.evaluateExpression(n.expression)}Xe(e,t.position)}function Ie(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Xe(e,t.position)}function Le(e,t,n){let r=e.schema,i=r;t.name===`svg`&&r.space===`html`&&(i=de,e.schema=i),e.ancestors.push(t);let a=t.name===null?e.Fragment:Ye(e,t.name,!0),o=Ge(e,t),s=Ke(e,t);return Be(e,o,a,t),Ve(o,s),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function Re(e,t,n){let r={};return Ve(r,Ke(e,t)),e.create(t,e.Fragment,r,n)}function ze(e,t){return t.value}function Be(e,t,n,r){typeof n!=`string`&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Ve(e,t){if(t.length>0){let n=t.length>1?t:t[0];n&&(e.children=n)}}function He(e,t,n){return r;function r(e,r,i,a){let o=Array.isArray(i.children)?n:t;return a?o(r,i,a):o(r,i)}}function Ue(e,t){return n;function n(n,r,i,a){let o=Array.isArray(i.children),s=ve(n);return t(r,i,a,o,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function We(e,t){let n={},r,i;for(i in t.properties)if(i!==`children`&&Ee.call(t.properties,i)){let a=qe(e,i,t.properties[i]);if(a){let[i,o]=a;e.tableCellAlignToStyle&&i===`align`&&typeof o==`string`&&Ae.has(t.tagName)?r=o:n[i]=o}}if(r){let t=n.style||={};t[e.stylePropertyNameCase===`css`?`text-align`:`textAlign`]=r}return n}function Ge(e,t){let n={};for(let r of t.attributes)if(r.type===`mdxJsxExpressionAttribute`){if(r.data&&r.data.estree&&e.evaluater){let t=r.data.estree.body[0];t.type;let i=t.expression;i.type;let a=i.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else Xe(e,t.position)}else{let i=r.name,a;if(r.value&&typeof r.value==`object`){if(r.value.data&&r.value.data.estree&&e.evaluater){let t=r.value.data.estree.body[0];t.type,a=e.evaluater.evaluateExpression(t.expression)}else Xe(e,t.position)}else a=r.value===null||r.value;n[i]=a}return n}function Ke(e,t){let n=[],r=-1,i=e.passKeys?new Map:De;for(;++r<t.children.length;){let a=t.children[r],o;if(e.passKeys){let e=a.type===`element`?a.tagName:a.type===`mdxJsxFlowElement`||a.type===`mdxJsxTextElement`?a.name:void 0;if(e){let t=i.get(e)||0;o=e+`-`+t,i.set(e,t+1)}}let s=Ne(e,a,o);s!==void 0&&n.push(s)}return n}function qe(e,t,n){let r=se(e.schema,t);if(!(n==null||typeof n==`number`&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?s(n):fe(n)),r.property===`style`){let t=typeof n==`object`?n:Je(e,String(n));return e.stylePropertyNameCase===`css`&&(t=Ze(t)),[`style`,t]}return[e.elementAttributeNameCase===`react`&&r.space?re[r.property]||r.property:r.attribute,n]}}function Je(e,t){try{return(0,Te.default)(t,{reactCompat:!0})}catch(t){if(e.ignoreInvalidStyle)return{};let n=t,r=new R("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:n,ruleId:`style`,source:`hast-util-to-jsx-runtime`});throw r.file=e.filePath||void 0,r.url=je+`#cannot-parse-style-attribute`,r}}function Ye(e,t,n){let r;if(!n)r={type:`Literal`,value:t};else if(t.includes(`.`)){let e=t.split(`.`),n=-1,i;for(;++n<e.length;){let t=d(e[n])?{type:`Identifier`,name:e[n]}:{type:`Literal`,value:e[n]};i=i?{type:`MemberExpression`,object:i,property:t,computed:!!(n&&t.type===`Literal`),optional:!1}:t}r=i}else r=d(t)&&!/^[a-z]/.test(t)?{type:`Identifier`,name:t}:{type:`Literal`,value:t};if(r.type===`Literal`){let t=r.value;return Ee.call(e.components,t)?e.components[t]:t}if(e.evaluater)return e.evaluater.evaluateExpression(r);Xe(e)}function Xe(e,t){let n=new R("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:`mdx-estree`,source:`hast-util-to-jsx-runtime`});throw n.file=e.filePath||void 0,n.url=je+`#cannot-handle-mdx-estrees-without-createevaluater`,n}function Ze(e){let t={},n;for(n in e)Ee.call(e,n)&&(t[Qe(n)]=e[n]);return t}function Qe(e){let t=e.replace(Oe,$e);return t.slice(0,3)===`ms-`&&(t=`-`+t),t}function $e(e){return`-`+e.toLowerCase()}var et={action:[`form`],cite:[`blockquote`,`del`,`ins`,`q`],data:[`object`],formAction:[`button`,`input`],href:[`a`,`area`,`base`,`link`],icon:[`menuitem`],itemId:null,manifest:[`html`],ping:[`a`,`area`],poster:[`video`],src:[`audio`,`embed`,`iframe`,`img`,`input`,`script`,`source`,`track`,`video`]},tt={};function nt(e,t){let n=t||tt;return rt(e,typeof n.includeImageAlt!=`boolean`||n.includeImageAlt,typeof n.includeHtml!=`boolean`||n.includeHtml)}function rt(e,t,n){if(at(e)){if(`value`in e)return e.type===`html`&&!n?``:e.value;if(t&&`alt`in e&&e.alt)return e.alt;if(`children`in e)return it(e.children,t,n)}return Array.isArray(e)?it(e,t,n):``}function it(e,t,n){let r=[],i=-1;for(;++i<e.length;)r[i]=rt(e[i],t,n);return r.join(``)}function at(e){return!!(e&&typeof e==`object`)}var ot=document.createElement(`i`);function st(e){let t=`&`+e+`;`;ot.innerHTML=t;let n=ot.textContent;return n.charCodeAt(n.length-1)===59&&e!==`semi`?!1:n!==t&&n}function z(e,t,n,r){let i=e.length,a=0,o;if(t=t<0?-t>i?0:i+t:t>i?i:t,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(t,n),e.splice(...o);else for(n&&e.splice(t,n);a<r.length;)o=r.slice(a,a+1e4),o.unshift(t,0),e.splice(...o),a+=1e4,t+=1e4}function B(e,t){return e.length>0?(z(e,e.length,0,t),e):t}var ct={}.hasOwnProperty;function lt(e){let t={},n=-1;for(;++n<e.length;)ut(t,e[n]);return t}function ut(e,t){let n;for(n in t){let r=(ct.call(e,n)?e[n]:void 0)||(e[n]={}),i=t[n],a;if(i)for(a in i){ct.call(r,a)||(r[a]=[]);let e=i[a];dt(r[a],Array.isArray(e)?e:e?[e]:[])}}}function dt(e,t){let n=-1,r=[];for(;++n<t.length;)(t[n].add===`after`?e:r).push(t[n]);z(e,0,0,r)}function ft(e,t){let n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)==65535||(n&65535)==65534||n>1114111?`�`:String.fromCodePoint(n)}function pt(e){return e.replace(/[\t\n\r ]+/g,` `).replace(/^ | $/g,``).toLowerCase().toUpperCase()}var V=K(/[A-Za-z]/),H=K(/[\dA-Za-z]/),mt=K(/[#-'*+\--9=?A-Z^-~]/);function ht(e){return e!==null&&(e<32||e===127)}var gt=K(/\d/),_t=K(/[\dA-Fa-f]/),vt=K(/[!-/:-@[-`{-~]/);function U(e){return e!==null&&e<-2}function W(e){return e!==null&&(e<0||e===32)}function G(e){return e===-2||e===-1||e===32}var yt=K(/\p{P}|\p{S}/u),bt=K(/\s/);function K(e){return t;function t(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function q(e){let t=[],n=-1,r=0,i=0;for(;++n<e.length;){let a=e.charCodeAt(n),o=``;if(a===37&&H(e.charCodeAt(n+1))&&H(e.charCodeAt(n+2)))i=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(o=String.fromCharCode(a));else if(a>55295&&a<57344){let t=e.charCodeAt(n+1);a<56320&&t>56319&&t<57344?(o=String.fromCharCode(a,t),i=1):o=`�`}else o=String.fromCharCode(a);o&&=(t.push(e.slice(r,n),encodeURIComponent(o)),r=n+i+1,``),i&&=(n+=i,0)}return t.join(``)+e.slice(r)}function J(e,t,n,r){let i=r?r-1:1/0,a=0;return o;function o(r){return G(r)?(e.enter(n),s(r)):t(r)}function s(r){return G(r)&&a++<i?(e.consume(r),s):(e.exit(n),t(r))}}function xt(e,t,n,r,i,a){let o=0;return s;function s(t){return a>0&&G(t)?(e.enter(r),c(t)):l(t)}function c(t){return G(t)&&o<a?(e.consume(t),o++,c):(e.exit(r),l(t))}function l(e){return o>=i?t(e):n(e)}}var St={tokenize:Ct};function Ct(e){let t=e.attempt(this.parser.constructs.contentInitial,r,i),n;return t;function r(n){if(n===null){e.consume(n);return}return e.enter(`lineEnding`),e.consume(n),e.exit(`lineEnding`),J(e,t,`linePrefix`)}function i(t){return e.enter(`paragraph`),a(t)}function a(t){let r=e.enter(`chunkText`,{contentType:`text`,previous:n});return n&&(n.next=r),n=r,o(t)}function o(t){if(t===null){e.exit(`chunkText`),e.exit(`paragraph`),e.consume(t);return}return U(t)?(e.consume(t),e.exit(`chunkText`),a):(e.consume(t),o)}}var wt=class{constructor(){this.index=new Map,this.map=[]}add(e,t,n){Tt(this,e,t,n,!1)}addBefore(e,t,n){Tt(this,e,t,n,!0)}consume(e){if(this.map.sort(function(e,t){return e[0]-t[0]}),this.map.length===0)return;let t=this.map.length,n=[];for(;t>0;)--t,n.push(e.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),e.length=this.map[t][0];n.push(e.slice()),e.length=0;let r=n.pop();for(;r;){for(let t of r)e.push(t);r=n.pop()}this.map.length=0,this.index.clear()}};function Tt(e,t,n,r,i){if(n===0&&r.length===0)return;let a=e.index.get(t);if(a){a[1]+=n,i?(r.push(...a[2]),a[2]=r):a[2].push(...r);return}let o=[t,n,r];e.map.push(o),e.index.set(t,o)}var Et={tokenize:Ot},Dt={tokenize:kt};function Ot(e){let t=this,n=[],r=0,i,a,o;return s;function s(i){if(r<n.length){let a=n[r];return t.containerState=a[1],e.attempt(a[0].continuation,c,l)(i)}return l(i)}function c(e){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&v();let n=t.events.length,a=n,o;for(;a--;)if(t.events[a][0]===`exit`&&t.events[a][1].type===`chunkFlow`){o=t.events[a][1].end;break}_(r);let s=n;for(;s<t.events.length;)t.events[s][1].end={...o},s++;let c=new wt;return c.add(a+1,0,t.events.slice(n)),c.add(n,s-n,[]),c.consume(t.events),l(e)}return s(e)}function l(a){if(r===n.length){if(!i)return f(a);if(i.currentConstruct&&i.currentConstruct.concrete)return m(a);t.interrupt=!(!i.currentConstruct||i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Dt,u,d)(a)}function u(e){return i&&v(),_(r),f(e)}function d(e){return t.parser.lazy[t.now().line]=r!==n.length,o=t.now().offset,m(e)}function f(n){return t.containerState={},e.attempt(Dt,p,m)(n)}function p(e){return r++,n.push([t.currentConstruct,t.containerState]),f(e)}function m(n){if(n===null){i&&v(),_(0),e.consume(n);return}return i||=t.parser.flow(t.now()),e.enter(`chunkFlow`,{_tokenizer:i,contentType:`flow`,previous:a}),h(n)}function h(n){if(n===null){g(e.exit(`chunkFlow`),!0),_(0),e.consume(n);return}return U(n)?(e.consume(n),g(e.exit(`chunkFlow`)),r=0,t.interrupt=void 0,s):(e.consume(n),h)}function g(e,n){let s=t.sliceStream(e);if(n&&s.push(null),e.previous=a,a&&(a.next=e),a=e,i.defineSkip(e.start),i.write(s),t.parser.lazy[e.start.line]){let e=i.events.length;for(;e--;)if(i.events[e][1].start.offset<o&&(!i.events[e][1].end||i.events[e][1].end.offset>o))return;let n=t.events.length,a=n,s,c;for(;a--;)if(t.events[a][0]===`exit`&&t.events[a][1].type===`chunkFlow`){if(s){c=t.events[a][1].end;break}s=!0}for(_(r),e=n;e<t.events.length;)t.events[e][1].end={...c},e++;let l=new wt;l.add(a+1,0,t.events.slice(n)),l.add(n,e-n,[]),l.consume(t.events)}}function _(r){let i=n.length;for(;i-->r;){let r=n[i];t.containerState=r[1],r[0].exit.call(t,e)}n.length=r}function v(){i.write([null]),a=void 0,i=void 0,t.containerState._closeFlow=void 0}}function kt(e,t,n){return J(e,e.attempt(this.parser.constructs.document,t,n),`linePrefix`,this.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)}function At(e){if(e===null||W(e)||bt(e))return 1;if(yt(e))return 2}function jt(e,t,n){let r=[],i=-1;for(;++i<e.length;){let a=e[i].resolveAll;a&&!r.includes(a)&&(t=a(t,n),r.push(a))}return t}var Mt={name:`attention`,resolveAll:Nt,tokenize:Pt};function Nt(e,t){let n=-1,r;for(;++n<e.length;)if(e[n][0]===`enter`&&e[n][1].type===`attentionSequence`&&e[n][1]._close){let i=n;for(;i--;)if(e[i][0]===`exit`&&e[i][1].type===`attentionSequence`&&e[i][1]._open&&t.sliceSerialize(e[i][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[i][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[i][1].end.offset-e[i][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;let a=e[i][1].end.offset-e[i][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1,o={...e[i][1].end},s={...e[n][1].start};Ft(o,-a),Ft(s,a);let c={type:a>1?`strongSequence`:`emphasisSequence`,start:o,end:{...e[i][1].end}},l={type:a>1?`strongSequence`:`emphasisSequence`,start:{...e[n][1].start},end:s},u={type:a>1?`strongText`:`emphasisText`,start:{...e[i][1].end},end:{...e[n][1].start}},d={type:a>1?`strong`:`emphasis`,start:{...c.start},end:{...l.end}};e[i][1].end={...c.start},e[n][1].start={...l.end},r=[],e[i][1].end.offset-e[i][1].start.offset&&(r=B(r,[[`enter`,e[i][1],t],[`exit`,e[i][1],t]])),r=B(r,[[`enter`,d,t],[`enter`,c,t],[`exit`,c,t],[`enter`,u,t]]),r=B(r,jt(t.parser.constructs.insideSpan.null,e.slice(i+1,n),t)),r=B(r,[[`exit`,u,t],[`enter`,l,t],[`exit`,l,t],[`exit`,d,t]]);let f=0;e[n][1].end.offset-e[n][1].start.offset&&(f=2,r=B(r,[[`enter`,e[n][1],t],[`exit`,e[n][1],t]])),z(e,i-1,n-i+3,r),n=i+r.length-f-2;break}}for(n=-1;++n<e.length;)e[n][1].type===`attentionSequence`&&(e[n][1].type=`data`);return e}function Pt(e,t){let n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=At(r),a;return o;function o(t){return a=t,e.enter(`attentionSequence`),s(t)}function s(o){if(o===a)return e.consume(o),s;let c=e.exit(`attentionSequence`),l=At(o),u=!l||l===2&&i||n.includes(o)&&o!==42&&o!==95,d=!i||i===2&&l||n.includes(r)&&r!==42&&r!==95;return c._open=!!(a===42?u:u&&(i||!d)),c._close=!!(a===42?d:d&&(l||!u)),t(o)}}function Ft(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}var It={name:`autolink`,tokenize:Lt};function Lt(e,t,n){let r=0;return i;function i(t){return e.enter(`autolink`),e.enter(`autolinkMarker`),e.consume(t),e.exit(`autolinkMarker`),e.enter(`autolinkProtocol`),a}function a(t){return V(t)?(e.consume(t),o):t===64?n(t):l(t)}function o(e){return e===43||e===45||e===46||H(e)?(r=1,s(e)):l(e)}function s(t){return t===58?(e.consume(t),r=0,c):(t===43||t===45||t===46||H(t))&&r++<32?(e.consume(t),s):(r=0,l(t))}function c(r){return r===62?(e.exit(`autolinkProtocol`),e.enter(`autolinkMarker`),e.consume(r),e.exit(`autolinkMarker`),e.exit(`autolink`),t):r===null||r===32||r===60||ht(r)?n(r):(e.consume(r),c)}function l(t){return t===64?(e.consume(t),u):mt(t)?(e.consume(t),l):n(t)}function u(e){return H(e)?d(e):n(e)}function d(n){return n===46?(e.consume(n),r=0,u):n===62?(e.exit(`autolinkProtocol`).type=`autolinkEmail`,e.enter(`autolinkMarker`),e.consume(n),e.exit(`autolinkMarker`),e.exit(`autolink`),t):f(n)}function f(t){if((t===45||H(t))&&r++<63){let n=t===45?f:d;return e.consume(t),n}return n(t)}}var Rt={partial:!0,tokenize:zt};function zt(e,t,n){return r;function r(t){return G(t)?J(e,i,`linePrefix`)(t):i(t)}function i(e){return e===null||U(e)?t(e):n(e)}}var Bt={continuation:{tokenize:Ht},exit:Ut,name:`blockQuote`,tokenize:Vt};function Vt(e,t,n){let r=this;return i;function i(t){if(t===62){let n=r.containerState;return n.open||=(e.enter(`blockQuote`,{_container:!0}),!0),e.enter(`blockQuotePrefix`),e.enter(`blockQuoteMarker`),e.consume(t),e.exit(`blockQuoteMarker`),a}return n(t)}function a(n){return G(n)?(e.enter(`blockQuotePrefixWhitespace`),e.consume(n),e.exit(`blockQuotePrefixWhitespace`),e.exit(`blockQuotePrefix`),t):(e.exit(`blockQuotePrefix`),t(n))}}function Ht(e,t,n){let r=this;return i;function i(t){return G(t)?J(e,a,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):a(t)}function a(r){return e.attempt(Bt,t,n)(r)}}function Ut(e){e.exit(`blockQuote`)}var Wt={name:`characterEscape`,tokenize:Gt};function Gt(e,t,n){return r;function r(t){return e.enter(`characterEscape`),e.enter(`escapeMarker`),e.consume(t),e.exit(`escapeMarker`),i}function i(r){return vt(r)?(e.enter(`characterEscapeValue`),e.consume(r),e.exit(`characterEscapeValue`),e.exit(`characterEscape`),t):n(r)}}var Kt={name:`characterReference`,tokenize:qt};function qt(e,t,n){let r=this,i=0,a,o;return s;function s(t){return e.enter(`characterReference`),e.enter(`characterReferenceMarker`),e.consume(t),e.exit(`characterReferenceMarker`),c}function c(t){return t===35?(e.enter(`characterReferenceMarkerNumeric`),e.consume(t),e.exit(`characterReferenceMarkerNumeric`),l):(e.enter(`characterReferenceValue`),a=31,o=H,u(t))}function l(t){return t===88||t===120?(e.enter(`characterReferenceMarkerHexadecimal`),e.consume(t),e.exit(`characterReferenceMarkerHexadecimal`),e.enter(`characterReferenceValue`),a=6,o=_t,u):(e.enter(`characterReferenceValue`),a=7,o=gt,u(t))}function u(s){if(s===59&&i){let i=e.exit(`characterReferenceValue`);return o===H&&!st(r.sliceSerialize(i))?n(s):(e.enter(`characterReferenceMarker`),e.consume(s),e.exit(`characterReferenceMarker`),e.exit(`characterReference`),t)}return o(s)&&i++<a?(e.consume(s),u):n(s)}}var Jt={partial:!0,tokenize:Yt};function Yt(e,t,n){let r=this;return i;function i(t){return t===null?n(t):(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),a)}function a(e){return r.parser.lazy[r.now().line]?n(e):t(e)}}var Xt={concrete:!0,name:`codeFenced`,tokenize:Zt};function Zt(e,t,n){let r=this,i={partial:!0,tokenize:x},a=0,o=0,s;return c;function c(e){return l(e)}function l(t){let n=r.events[r.events.length-1];return a=n&&n[1].type===`linePrefix`?n[2].sliceSerialize(n[1],!0).length:0,s=t,e.enter(`codeFenced`),e.enter(`codeFencedFence`),e.enter(`codeFencedFenceSequence`),u(t)}function u(t){return t===s?(o++,e.consume(t),u):o<3?n(t):(e.exit(`codeFencedFenceSequence`),G(t)?J(e,d,`whitespace`)(t):d(t))}function d(n){return n===null||U(n)?(e.exit(`codeFencedFence`),r.interrupt?t(n):e.check(Jt,h,b)(n)):(e.enter(`codeFencedFenceInfo`),e.enter(`chunkString`,{contentType:`string`}),f(n))}function f(t){return t===null||U(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceInfo`),d(t)):G(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceInfo`),J(e,p,`whitespace`)(t)):t===96&&t===s?n(t):(e.consume(t),f)}function p(t){return t===null||U(t)?d(t):(e.enter(`codeFencedFenceMeta`),e.enter(`chunkString`,{contentType:`string`}),m(t))}function m(t){return t===null||U(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceMeta`),d(t)):t===96&&t===s?n(t):(e.consume(t),m)}function h(t){return e.attempt(i,b,g)(t)}function g(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),_}function _(t){return a>0&&G(t)?J(e,v,`linePrefix`,a+1)(t):v(t)}function v(t){return t===null||U(t)?e.check(Jt,h,b)(t):(e.enter(`codeFlowValue`),y(t))}function y(t){return t===null||U(t)?(e.exit(`codeFlowValue`),v(t)):(e.consume(t),y)}function b(n){return e.exit(`codeFenced`),t(n)}function x(e,t,n){let i=0;return a;function a(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),c}function c(t){return e.enter(`codeFencedFence`),G(t)?J(e,l,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):l(t)}function l(t){return t===s?(e.enter(`codeFencedFenceSequence`),u(t)):n(t)}function u(t){return t===s?(i++,e.consume(t),u):i>=o?(e.exit(`codeFencedFenceSequence`),G(t)?J(e,d,`whitespace`)(t):d(t)):n(t)}function d(r){return r===null||U(r)?(e.exit(`codeFencedFence`),t(r)):n(r)}}}var Qt={name:`codeIndented`,tokenize:en},$t={partial:!0,tokenize:tn};function en(e,t,n){return r;function r(t){return e.enter(`codeIndented`),xt(e,i,n,`linePrefix`,4,4)(t)}function i(t){return t===null?o(t):U(t)?e.attempt($t,i,o)(t):(e.enter(`codeFlowValue`),a(t))}function a(t){return t===null||U(t)?(e.exit(`codeFlowValue`),i(t)):(e.consume(t),a)}function o(n){return e.exit(`codeIndented`),t(n)}}function tn(e,t,n){let r=this;return i;function i(o){return r.parser.lazy[r.now().line]?n(o):U(o)?(e.enter(`lineEnding`),e.consume(o),e.exit(`lineEnding`),i):xt(e,t,a,`linePrefix`,4,4)(o)}function a(e){return U(e)?i(e):n(e)}}var nn={name:`codeText`,previous:an,resolve:rn,tokenize:on};function rn(e){let t=e.length-4,n=3,r,i;if((e[n][1].type===`lineEnding`||e[n][1].type===`space`)&&(e[t][1].type===`lineEnding`||e[t][1].type===`space`)){for(r=n;++r<t;)if(e[r][1].type===`codeTextData`){e[n][1].type=`codeTextPadding`,e[t][1].type=`codeTextPadding`,n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!==`lineEnding`&&(i=r):(r===t||e[r][1].type===`lineEnding`)&&(e[i][1].type=`codeTextData`,r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function an(e){return e!==96||this.events[this.events.length-1][1].type===`characterEscape`}function on(e,t,n){let r=0,i,a;return o;function o(t){return e.enter(`codeText`),e.enter(`codeTextSequence`),s(t)}function s(t){return t===96?(e.consume(t),r++,s):(e.exit(`codeTextSequence`),c(t))}function c(t){return t===null?n(t):t===32?(e.enter(`space`),e.consume(t),e.exit(`space`),c):t===96?(a=e.enter(`codeTextSequence`),i=0,u(t)):U(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),c):(e.enter(`codeTextData`),l(t))}function l(t){return t===null||t===32||t===96||U(t)?(e.exit(`codeTextData`),c(t)):(e.consume(t),l)}function u(n){return n===96?(e.consume(n),i++,u):i===r?(e.exit(`codeTextSequence`),e.exit(`codeText`),t(n)):(a.type=`codeTextData`,l(n))}}var sn=class{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,t){let n=t??1/0;return n<this.left.length?this.left.slice(e,n):e>this.left.length?this.right.slice(this.right.length-n+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-n+this.left.length).reverse())}splice(e,t,n){let r=t||0;this.setCursor(Math.trunc(e));let i=this.right.splice(this.right.length-r,1/0);return n&&cn(this.left,n),i.reverse()}pop(){return this.setCursor(1/0),this.left.pop()}push(e){this.setCursor(1/0),this.left.push(e)}pushMany(e){this.setCursor(1/0),cn(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),cn(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&this.right.length===0||e<0&&this.left.length===0)){if(e<this.left.length){let t=this.left.splice(e,1/0);cn(this.right,t.reverse())}else{let t=this.right.splice(this.left.length+this.right.length-e,1/0);cn(this.left,t.reverse())}}}};function cn(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function ln(e){let t={},n=-1,r,i,a,o,s,c,l,u=new sn(e);for(;++n<u.length;){for(;n in t;)n=t[n];if(r=u.get(n),n&&r[1].type===`chunkFlow`&&u.get(n-1)[1].type===`listItemPrefix`&&(c=r[1]._tokenizer.events,a=0,a<c.length&&c[a][1].type===`lineEndingBlank`&&(a+=2),a<c.length&&c[a][1].type===`content`))for(;++a<c.length&&c[a][1].type!==`content`;)c[a][1].type===`chunkText`&&(c[a][1]._isInFirstContentOfListItem=!0,a++);if(r[0]===`enter`)r[1].contentType&&(Object.assign(t,un(u,n)),n=t[n],l=!0);else if(r[1]._container){for(a=n,i=void 0;a--;)if(o=u.get(a),o[1].type===`lineEnding`||o[1].type===`lineEndingBlank`)o[0]===`enter`&&(i&&(u.get(i)[1].type=`lineEndingBlank`),o[1].type=`lineEnding`,i=a);else if(o[1].type!==`linePrefix`&&o[1].type!==`listItemIndent`)break;i&&(r[1].end={...u.get(i)[1].start},s=u.slice(i,n),s.unshift(r),u.splice(i,n-i+1,s))}}return z(e,0,1/0,u.slice(0)),!l}function un(e,t){let n=e.get(t)[1],r=e.get(t)[2],i=t-1,a=[],o=n._tokenizer;o||(o=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));let s=o.events,c=[],l={},u,d,f=-1,p=n,m=0,h=0,g=[h];for(;p;){for(;e.get(++i)[1]!==p;);a.push(i),p._tokenizer||(u=r.sliceStream(p),p.next||u.push(null),d&&o.defineSkip(p.start),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(u),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),d=p,p=p.next}for(p=n;++f<s.length;)s[f][0]===`exit`&&s[f-1][0]===`enter`&&s[f][1].type===s[f-1][1].type&&s[f][1].start.line!==s[f][1].end.line&&(h=f+1,g.push(h),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(o.events=[],p?(p._tokenizer=void 0,p.previous=void 0):g.pop(),f=g.length;f--;){let t=s.slice(g[f],g[f+1]),n=a.pop();c.push([n,n+t.length-1]),e.splice(n,2,t)}for(c.reverse(),f=-1;++f<c.length;)l[m+c[f][0]]=m+c[f][1],m+=c[f][1]-c[f][0]-1;return l}var dn={resolve:pn,tokenize:mn},fn={partial:!0,tokenize:hn};function pn(e){return ln(e),e}function mn(e,t){let n;return r;function r(t){return e.enter(`content`),n=e.enter(`chunkContent`,{contentType:`content`}),i(t)}function i(t){return t===null?a(t):U(t)?e.check(fn,o,a)(t):(e.consume(t),i)}function a(n){return e.exit(`chunkContent`),e.exit(`content`),t(n)}function o(t){return e.consume(t),e.exit(`chunkContent`),n.next=e.enter(`chunkContent`,{contentType:`content`,previous:n}),n=n.next,i}}function hn(e,t,n){let r=this;return i;function i(t){return e.exit(`chunkContent`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),J(e,a,`linePrefix`)}function a(i){if(i===null||U(i))return n(i);let a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes(`codeIndented`)&&a&&a[1].type===`linePrefix`&&a[2].sliceSerialize(a[1],!0).length>=4?t(i):e.interrupt(r.parser.constructs.flow,n,t)(i)}}function gn(e,t,n,r,i,a,o,s,c){let l=c||1/0,u=0;return d;function d(t){return t===60?(e.enter(r),e.enter(i),e.enter(a),e.consume(t),e.exit(a),f):t===null||t===32||t===41||ht(t)?n(t):(e.enter(r),e.enter(o),e.enter(s),e.enter(`chunkString`,{contentType:`string`}),h(t))}function f(n){return n===62?(e.enter(a),e.consume(n),e.exit(a),e.exit(i),e.exit(r),t):(e.enter(s),e.enter(`chunkString`,{contentType:`string`}),p(n))}function p(t){return t===62?(e.exit(`chunkString`),e.exit(s),f(t)):t===null||t===60||U(t)?n(t):(e.consume(t),t===92?m:p)}function m(t){return t===60||t===62||t===92?(e.consume(t),p):p(t)}function h(i){return!u&&(i===null||i===41||W(i))?(e.exit(`chunkString`),e.exit(s),e.exit(o),e.exit(r),t(i)):u<l&&i===40?(e.consume(i),u++,h):i===41?(e.consume(i),u--,h):i===null||i===32||i===40||ht(i)?n(i):(e.consume(i),i===92?g:h)}function g(t){return t===40||t===41||t===92?(e.consume(t),h):h(t)}}function _n(e,t,n,r,i,a){let o=this,s=0,c;return l;function l(t){return e.enter(r),e.enter(i),e.consume(t),e.exit(i),e.enter(a),u}function u(l){return s>999||l===null||l===91||l===93&&!c||l===94&&!s&&`_hiddenFootnoteSupport`in o.parser.constructs?n(l):l===93?(e.exit(a),e.enter(i),e.consume(l),e.exit(i),e.exit(r),t):U(l)?(e.enter(`lineEnding`),e.consume(l),e.exit(`lineEnding`),u):(e.enter(`chunkString`,{contentType:`string`}),d(l))}function d(t){return t===null||t===91||t===93||U(t)||s++>999?(e.exit(`chunkString`),u(t)):(e.consume(t),c||=!G(t),t===92?f:d)}function f(t){return t===91||t===92||t===93?(e.consume(t),s++,d):d(t)}}function vn(e,t,n,r,i,a){let o;return s;function s(t){return t===34||t===39||t===40?(e.enter(r),e.enter(i),e.consume(t),e.exit(i),o=t===40?41:t,c):n(t)}function c(n){return n===o?(e.enter(i),e.consume(n),e.exit(i),e.exit(r),t):(e.enter(a),l(n))}function l(t){return t===o?(e.exit(a),c(o)):t===null?n(t):U(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),J(e,l,`linePrefix`)):(e.enter(`chunkString`,{contentType:`string`}),u(t))}function u(t){return t===o||t===null||U(t)?(e.exit(`chunkString`),l(t)):(e.consume(t),t===92?d:u)}function d(t){return t===o||t===92?(e.consume(t),u):u(t)}}function yn(e,t){let n;return r;function r(i){return U(i)?(e.enter(`lineEnding`),e.consume(i),e.exit(`lineEnding`),n=!0,r):G(i)?J(e,r,n?`linePrefix`:`lineSuffix`)(i):t(i)}}var bn={name:`definition`,tokenize:Sn},xn={partial:!0,tokenize:Cn};function Sn(e,t,n){let r=this,i;return a;function a(t){return e.enter(`definition`),o(t)}function o(t){return _n.call(r,e,s,n,`definitionLabel`,`definitionLabelMarker`,`definitionLabelString`)(t)}function s(t){return i=pt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),t===58?(e.enter(`definitionMarker`),e.consume(t),e.exit(`definitionMarker`),c):n(t)}function c(t){return W(t)?yn(e,l)(t):l(t)}function l(t){return gn(e,u,n,`definitionDestination`,`definitionDestinationLiteral`,`definitionDestinationLiteralMarker`,`definitionDestinationRaw`,`definitionDestinationString`)(t)}function u(t){return e.attempt(xn,d,d)(t)}function d(t){return G(t)?J(e,f,`whitespace`)(t):f(t)}function f(a){return a===null||U(a)?(e.exit(`definition`),r.parser.defined.push(i),t(a)):n(a)}}function Cn(e,t,n){return r;function r(t){return W(t)?yn(e,i)(t):n(t)}function i(t){return vn(e,a,n,`definitionTitle`,`definitionTitleMarker`,`definitionTitleString`)(t)}function a(t){return G(t)?J(e,o,`whitespace`)(t):o(t)}function o(e){return e===null||U(e)?t(e):n(e)}}var wn={name:`hardBreakEscape`,tokenize:Tn};function Tn(e,t,n){return r;function r(t){return e.enter(`hardBreakEscape`),e.consume(t),i}function i(r){return U(r)?(e.exit(`hardBreakEscape`),t(r)):n(r)}}var En={name:`headingAtx`,resolve:Dn,tokenize:On};function Dn(e,t){let n=e.length-2,r=3;if(e[r][1].type===`whitespace`&&(r+=2),n-2>r&&e[n][1].type===`whitespace`&&(n-=2),e[n][1].type===`atxHeadingSequence`&&(r===n-1||n-4>r&&e[n-2][1].type===`whitespace`)&&(n-=r+1===n?2:4),n>r){let i={type:`atxHeadingText`,start:e[r][1].start,end:e[n][1].end},a={type:`chunkText`,start:e[r][1].start,end:e[n][1].end,contentType:`text`};z(e,r,n-r+1,[[`enter`,i,t],[`enter`,a,t],[`exit`,a,t],[`exit`,i,t]])}return e}function On(e,t,n){let r=0;return i;function i(t){return e.enter(`atxHeading`),a(t)}function a(t){return e.enter(`atxHeadingSequence`),o(t)}function o(t){return t===35&&r++<6?(e.consume(t),o):t===null||W(t)?(e.exit(`atxHeadingSequence`),s(t)):n(t)}function s(n){return n===35?(e.enter(`atxHeadingSequence`),c(n)):n===null||U(n)?(e.exit(`atxHeading`),t(n)):G(n)?J(e,s,`whitespace`)(n):(e.enter(`atxHeadingText`),l(n))}function c(t){return t===35?(e.consume(t),c):(e.exit(`atxHeadingSequence`),s(t))}function l(t){return t===null||t===35||W(t)?(e.exit(`atxHeadingText`),s(t)):(e.consume(t),l)}}var kn=`address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul`.split(`.`),An=[`pre`,`script`,`style`,`textarea`],jn={concrete:!0,name:`htmlFlow`,resolveTo:Nn,tokenize:Pn},Mn={partial:!0,tokenize:Fn};function Nn(e){let t=e.length;for(;t--&&(e[t][0]!==`enter`||e[t][1].type!==`htmlFlow`););return t>1&&e[t-2][1].type===`linePrefix`&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function Pn(e,t,n){let r=this,i,a,o,s,c;return l;function l(e){return u(e)}function u(t){return e.enter(`htmlFlow`),e.enter(`htmlFlowData`),e.consume(t),d}function d(s){return s===33?(e.consume(s),f):s===47?(e.consume(s),a=!0,h):s===63?(e.consume(s),i=3,r.interrupt?t:F):V(s)?(e.consume(s),o=String.fromCharCode(s),g):n(s)}function f(a){return a===45?(e.consume(a),i=2,p):a===91?(e.consume(a),i=5,s=0,m):V(a)?(e.consume(a),i=4,r.interrupt?t:F):n(a)}function p(i){return i===45?(e.consume(i),r.interrupt?t:F):n(i)}function m(i){return i===`CDATA[`.charCodeAt(s++)?(e.consume(i),s===6?r.interrupt?t:O:m):n(i)}function h(t){return V(t)?(e.consume(t),o=String.fromCharCode(t),g):n(t)}function g(s){if(s===null||s===47||s===62||W(s)){let c=s===47,l=o.toLowerCase();return!c&&!a&&An.includes(l)?(i=1,r.interrupt?t(s):O(s)):kn.includes(o.toLowerCase())?(i=6,c?(e.consume(s),_):r.interrupt?t(s):O(s)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(s):a?v(s):y(s))}return s===45||H(s)?(e.consume(s),o+=String.fromCharCode(s),g):n(s)}function _(i){return i===62?(e.consume(i),r.interrupt?t:O):n(i)}function v(t){return G(t)?(e.consume(t),v):E(t)}function y(t){return t===47?(e.consume(t),E):t===58||t===95||V(t)?(e.consume(t),b):G(t)?(e.consume(t),y):E(t)}function b(t){return t===45||t===46||t===58||t===95||H(t)?(e.consume(t),b):x(t)}function x(t){return t===61?(e.consume(t),S):G(t)?(e.consume(t),x):y(t)}function S(t){return t===null||t===60||t===61||t===62||t===96?n(t):t===34||t===39?(e.consume(t),c=t,C):G(t)?(e.consume(t),S):w(t)}function C(t){return t===c?(e.consume(t),c=null,T):t===null||U(t)?n(t):(e.consume(t),C)}function w(t){return t===null||t===34||t===39||t===47||t===60||t===61||t===62||t===96||W(t)?x(t):(e.consume(t),w)}function T(e){return e===47||e===62||G(e)?y(e):n(e)}function E(t){return t===62?(e.consume(t),D):n(t)}function D(t){return t===null||U(t)?O(t):G(t)?(e.consume(t),D):n(t)}function O(t){return t===45&&i===2?(e.consume(t),j):t===60&&i===1?(e.consume(t),M):t===62&&i===4?(e.consume(t),I):t===63&&i===3?(e.consume(t),F):t===93&&i===5?(e.consume(t),P):U(t)&&(i===6||i===7)?(e.exit(`htmlFlowData`),e.check(Mn,L,k)(t)):t===null||U(t)?(e.exit(`htmlFlowData`),k(t)):(e.consume(t),O)}function k(t){return e.check(Jt,A,L)(t)}function A(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),ee}function ee(t){return t===null||U(t)?k(t):(e.enter(`htmlFlowData`),O(t))}function j(t){return t===45?(e.consume(t),F):O(t)}function M(t){return t===47?(e.consume(t),o=``,N):O(t)}function N(t){if(t===62){let n=o.toLowerCase();return An.includes(n)?(e.consume(t),I):O(t)}return V(t)&&o.length<8?(e.consume(t),o+=String.fromCharCode(t),N):O(t)}function P(t){return t===93?(e.consume(t),F):O(t)}function F(t){return t===62?(e.consume(t),I):t===45&&i===2?(e.consume(t),F):O(t)}function I(t){return t===null||U(t)?(e.exit(`htmlFlowData`),L(t)):(e.consume(t),I)}function L(n){return e.exit(`htmlFlow`),t(n)}}function Fn(e,t,n){return r;function r(r){return e.enter(`lineEnding`),e.consume(r),e.exit(`lineEnding`),e.attempt(Rt,t,n)}}var In={name:`htmlText`,tokenize:Ln};function Ln(e,t,n){let r=this,i,a,o;return s;function s(t){return e.enter(`htmlText`),e.enter(`htmlTextData`),e.consume(t),c}function c(t){return t===33?(e.consume(t),l):t===47?(e.consume(t),x):t===63?(e.consume(t),y):V(t)?(e.consume(t),w):n(t)}function l(t){return t===45?(e.consume(t),u):t===91?(e.consume(t),a=0,m):V(t)?(e.consume(t),v):n(t)}function u(t){return t===45?(e.consume(t),p):n(t)}function d(t){return t===null?n(t):t===45?(e.consume(t),f):U(t)?(o=d,M(t)):(e.consume(t),d)}function f(t){return t===45?(e.consume(t),p):d(t)}function p(e){return e===62?j(e):e===45?f(e):d(e)}function m(t){return t===`CDATA[`.charCodeAt(a++)?(e.consume(t),a===6?h:m):n(t)}function h(t){return t===null?n(t):t===93?(e.consume(t),g):U(t)?(o=h,M(t)):(e.consume(t),h)}function g(t){return t===93?(e.consume(t),_):h(t)}function _(t){return t===62?j(t):t===93?(e.consume(t),_):h(t)}function v(t){return t===null||t===62?j(t):U(t)?(o=v,M(t)):(e.consume(t),v)}function y(t){return t===null?n(t):t===63?(e.consume(t),b):U(t)?(o=y,M(t)):(e.consume(t),y)}function b(e){return e===62?j(e):y(e)}function x(t){return V(t)?(e.consume(t),S):n(t)}function S(t){return t===45||H(t)?(e.consume(t),S):C(t)}function C(t){return U(t)?(o=C,M(t)):G(t)?(e.consume(t),C):j(t)}function w(t){return t===45||H(t)?(e.consume(t),w):t===47||t===62||W(t)?T(t):n(t)}function T(t){return t===47?(e.consume(t),j):t===58||t===95||V(t)?(e.consume(t),E):U(t)?(o=T,M(t)):G(t)?(e.consume(t),T):j(t)}function E(t){return t===45||t===46||t===58||t===95||H(t)?(e.consume(t),E):D(t)}function D(t){return t===61?(e.consume(t),O):U(t)?(o=D,M(t)):G(t)?(e.consume(t),D):T(t)}function O(t){return t===null||t===60||t===61||t===62||t===96?n(t):t===34||t===39?(e.consume(t),i=t,k):U(t)?(o=O,M(t)):G(t)?(e.consume(t),O):(e.consume(t),A)}function k(t){return t===i?(e.consume(t),i=void 0,ee):t===null?n(t):U(t)?(o=k,M(t)):(e.consume(t),k)}function A(t){return t===null||t===34||t===39||t===60||t===61||t===96?n(t):t===47||t===62||W(t)?T(t):(e.consume(t),A)}function ee(e){return e===47||e===62||W(e)?T(e):n(e)}function j(r){return r===62?(e.consume(r),e.exit(`htmlTextData`),e.exit(`htmlText`),t):n(r)}function M(t){return e.exit(`htmlTextData`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),N}function N(t){return G(t)?J(e,P,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):P(t)}function P(t){return e.enter(`htmlTextData`),o(t)}}var Rn={name:`labelEnd`,resolveAll:Hn,resolveTo:Un,tokenize:Wn},zn={tokenize:Gn},Bn={tokenize:Kn},Vn={tokenize:qn};function Hn(e){let t=-1,n=[];for(;++t<e.length;){let r=e[t][1];if(n.push(e[t]),r.type===`labelImage`||r.type===`labelLink`||r.type===`labelEnd`){let e=r.type===`labelImage`?4:2;r.type=`data`,t+=e}}return e.length!==n.length&&z(e,0,e.length,n),e}function Un(e,t){let n=e.length,r=0,i,a,o;for(;n--;){let t=e[n][1];if(i){if(t.type===`link`||t.type===`labelLink`&&t._inactive)break;e[n][0]===`enter`&&t.type===`labelLink`&&(t._inactive=!0)}else if(a){if(e[n][0]===`enter`&&(t.type===`labelImage`||t.type===`labelLink`)&&!t._balanced&&(i=n,t.type!==`labelLink`)){r=2;break}}else t.type===`labelEnd`&&(a=n)}let s={type:e[i][1].type===`labelLink`?`link`:`image`,start:{...e[i][1].start},end:{...e[e.length-1][1].end}},c={type:`label`,start:{...e[i][1].start},end:{...e[a][1].end}},l={type:`labelText`,start:{...e[i+r+2][1].end},end:{...e[a-2][1].start}};return o=[[`enter`,s,t],[`enter`,c,t]],o=B(o,e.slice(i+1,i+r+3)),o=B(o,[[`enter`,l,t]]),o=B(o,jt(t.parser.constructs.insideSpan.null,e.slice(i+r+4,a-3),t)),o=B(o,[[`exit`,l,t],e[a-2],e[a-1],[`exit`,c,t]]),o=B(o,e.slice(a+1)),o=B(o,[[`exit`,s,t]]),z(e,i,e.length,o),e}function Wn(e,t,n){let r=this,i=r._labelStarts,a,o;if(i){for(;i.length>0&&i[i.length-1]._balanced;)i.pop();a=i[i.length-1]}return s;function s(t){return a?a._inactive?d(t):(o=r.parser.defined.includes(pt(r.sliceSerialize({start:a.end,end:r.now()}))),e.enter(`labelEnd`),e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelEnd`),c):n(t)}function c(t){return t===40?e.attempt(zn,u,o?u:d)(t):t===91?e.attempt(Bn,u,o?l:d)(t):o?u(t):d(t)}function l(t){return e.attempt(Vn,u,d)(t)}function u(e){return i.pop(),t(e)}function d(e){return a._balanced=!0,n(e)}}function Gn(e,t,n){return r;function r(t){return e.enter(`resource`),e.enter(`resourceMarker`),e.consume(t),e.exit(`resourceMarker`),i}function i(t){return W(t)?yn(e,a)(t):a(t)}function a(t){return t===41?u(t):gn(e,o,s,`resourceDestination`,`resourceDestinationLiteral`,`resourceDestinationLiteralMarker`,`resourceDestinationRaw`,`resourceDestinationString`,32)(t)}function o(t){return W(t)?yn(e,c)(t):u(t)}function s(e){return n(e)}function c(t){return t===34||t===39||t===40?vn(e,l,n,`resourceTitle`,`resourceTitleMarker`,`resourceTitleString`)(t):u(t)}function l(t){return W(t)?yn(e,u)(t):u(t)}function u(r){return r===41?(e.enter(`resourceMarker`),e.consume(r),e.exit(`resourceMarker`),e.exit(`resource`),t):n(r)}}function Kn(e,t,n){let r=this;return i;function i(t){return _n.call(r,e,a,o,`reference`,`referenceMarker`,`referenceString`)(t)}function a(e){return r.parser.defined.includes(pt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(e):n(e)}function o(e){return n(e)}}function qn(e,t,n){return r;function r(t){return e.enter(`reference`),e.enter(`referenceMarker`),e.consume(t),e.exit(`referenceMarker`),i}function i(r){return r===93?(e.enter(`referenceMarker`),e.consume(r),e.exit(`referenceMarker`),e.exit(`reference`),t):n(r)}}var Jn={name:`labelStartImage`,resolveAll:Rn.resolveAll,tokenize:Yn};function Yn(e,t,n){let r=this,i;return a;function a(t){return e.enter(`labelImage`),e.enter(`labelImageMarker`),e.consume(t),e.exit(`labelImageMarker`),o}function o(t){return t===91?(e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),i=e.exit(`labelImage`),s):n(t)}function s(e){return e===94&&`_hiddenFootnoteSupport`in r.parser.constructs?n(e):(r._labelStarts=r._labelStarts||[],r._labelStarts.push(i),t(e))}}var Xn={name:`labelStartLink`,resolveAll:Rn.resolveAll,tokenize:Zn};function Zn(e,t,n){let r=this,i;return a;function a(t){return e.enter(`labelLink`),e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),i=e.exit(`labelLink`),o}function o(e){return e===94&&`_hiddenFootnoteSupport`in r.parser.constructs?n(e):(r._labelStarts=r._labelStarts||[],r._labelStarts.push(i),t(e))}}var Qn={name:`lineEnding`,tokenize:$n};function $n(e,t){return n;function n(n){return e.enter(`lineEnding`),e.consume(n),e.exit(`lineEnding`),J(e,t,`linePrefix`)}}var er={name:`thematicBreak`,tokenize:tr};function tr(e,t,n){let r=0,i;return a;function a(t){return e.enter(`thematicBreak`),o(t)}function o(e){return i=e,s(e)}function s(a){return a===i?(e.enter(`thematicBreakSequence`),c(a)):r>=3&&(a===null||U(a))?(e.exit(`thematicBreak`),t(a)):n(a)}function c(t){return t===i?(e.consume(t),r++,c):(e.exit(`thematicBreakSequence`),G(t)?J(e,s,`whitespace`)(t):s(t))}}var Y={continuation:{tokenize:ar},exit:sr,name:`list`,tokenize:ir},nr={partial:!0,tokenize:cr},rr={partial:!0,tokenize:or};function ir(e,t,n){let r=this,i=r.events[r.events.length-1],a=i&&i[1].type===`linePrefix`?i[2].sliceSerialize(i[1],!0).length:0,o=0;return s;function s(t){let i=r.containerState.type||(t===42||t===43||t===45?`listUnordered`:`listOrdered`);if(i===`listUnordered`?!r.containerState.marker||t===r.containerState.marker:gt(t)){if(r.containerState.type||(r.containerState.type=i,e.enter(i,{_container:!0})),i===`listUnordered`)return e.enter(`listItemPrefix`),t===42||t===45?e.check(er,n,l)(t):l(t);if(!r.interrupt||t===49)return e.enter(`listItemPrefix`),e.enter(`listItemValue`),c(t)}return n(t)}function c(t){return gt(t)&&++o<10?(e.consume(t),c):(!r.interrupt||o<2)&&(r.containerState.marker?t===r.containerState.marker:t===41||t===46)?(e.exit(`listItemValue`),l(t)):n(t)}function l(t){return e.enter(`listItemMarker`),e.consume(t),e.exit(`listItemMarker`),r.containerState.marker=r.containerState.marker||t,e.check(Rt,r.interrupt?n:u,e.attempt(nr,f,d))}function u(e){return r.containerState.initialBlankLine=!0,a++,f(e)}function d(t){return G(t)?(e.enter(`listItemPrefixWhitespace`),e.consume(t),e.exit(`listItemPrefixWhitespace`),f):n(t)}function f(n){return r.containerState.size=a+r.sliceSerialize(e.exit(`listItemPrefix`),!0).length,t(n)}}function ar(e,t,n){let r=this;return r.containerState._closeFlow=void 0,e.check(Rt,i,a);function i(n){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,J(e,t,`listItemIndent`,r.containerState.size+1)(n)}function a(n){return r.containerState.furtherBlankLines||!G(n)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(n)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(rr,t,o)(n))}function o(i){return r.containerState._closeFlow=!0,r.interrupt=void 0,J(e,e.attempt(Y,t,n),`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(i)}}function or(e,t,n){let r=this;return J(e,i,`listItemIndent`,r.containerState.size+1);function i(e){let i=r.events[r.events.length-1];return i&&i[1].type===`listItemIndent`&&i[2].sliceSerialize(i[1],!0).length===r.containerState.size?t(e):n(e)}}function sr(e){e.exit(this.containerState.type)}function cr(e,t,n){let r=this;return J(e,i,`listItemPrefixWhitespace`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:5);function i(e){let i=r.events[r.events.length-1];return!G(e)&&i&&i[1].type===`listItemPrefixWhitespace`?t(e):n(e)}}var lr={name:`setextUnderline`,resolveTo:ur,tokenize:dr};function ur(e,t){let n=new wt,r=e.length,i,a,o;for(;r--;)if(e[r][0]===`enter`){if(e[r][1].type===`content`){i=r;break}e[r][1].type===`paragraph`&&(a=r)}else e[r][1].type===`content`&&n.add(r,1,[]),!o&&e[r][1].type===`definition`&&(o=r);let s={type:`setextHeading`,start:{...e[i][1].start},end:{...e[e.length-1][1].end}};return e[a][1].type=`setextHeadingText`,o?(n.add(a,0,[[`enter`,s,t]]),n.add(o+1,0,[[`exit`,e[i][1],t]]),e[i][1].end={...e[o][1].end}):e[i][1]=s,n.add(e.length,0,[[`exit`,s,t]]),n.consume(e),e}function dr(e,t,n){let r=this,i;return a;function a(t){let a=r.events.length,s;for(;a--;)if(r.events[a][1].type!==`lineEnding`&&r.events[a][1].type!==`linePrefix`&&r.events[a][1].type!==`content`){s=r.events[a][1].type===`paragraph`;break}return!r.parser.lazy[r.now().line]&&(r.interrupt||s)?(e.enter(`setextHeadingLine`),i=t,o(t)):n(t)}function o(t){return e.enter(`setextHeadingLineSequence`),s(t)}function s(t){return t===i?(e.consume(t),s):(e.exit(`setextHeadingLineSequence`),G(t)?J(e,c,`lineSuffix`)(t):c(t))}function c(r){return r===null||U(r)?(e.exit(`setextHeadingLine`),t(r)):n(r)}}var fr={tokenize:pr};function pr(e){let t=this,n=e.attempt(Rt,r,e.attempt(this.parser.constructs.flowInitial,i,J(e,e.attempt(this.parser.constructs.flow,i,e.attempt(dn,i)),`linePrefix`)));return n;function r(r){if(r===null){e.consume(r);return}return e.enter(`lineEndingBlank`),e.consume(r),e.exit(`lineEndingBlank`),t.currentConstruct=void 0,n}function i(r){if(r===null){e.consume(r);return}return e.enter(`lineEnding`),e.consume(r),e.exit(`lineEnding`),t.currentConstruct=void 0,n}}var mr={resolveAll:vr()},hr=_r(`string`),gr=_r(`text`);function _r(e){return{resolveAll:vr(e===`text`?yr:void 0),tokenize:t};function t(t){let n=this,r=this.parser.constructs[e],i=t.attempt(r,a,o);return a;function a(e){return c(e)?i(e):o(e)}function o(e){if(e===null){t.consume(e);return}return t.enter(`data`),t.consume(e),s}function s(e){return c(e)?(t.exit(`data`),i(e)):(t.consume(e),s)}function c(e){if(e===null)return!0;let t=r[e],i=-1;if(t)for(;++i<t.length;){let e=t[i];if(!e.previous||e.previous.call(n,n.previous))return!0}return!1}}}function vr(e){return t;function t(t,n){let r=-1,i;for(;++r<=t.length;)i===void 0?t[r]&&t[r][1].type===`data`&&(i=r,r++):(!t[r]||t[r][1].type!==`data`)&&(r!==i+2&&(t[i][1].end=t[r-1][1].end,t.splice(i+2,r-i-2),r=i+2),i=void 0);return e?e(t,n):t}}function yr(e,t){let n=new wt,r=0;for(;++r<=e.length;)if((r===e.length||e[r][1].type===`lineEnding`)&&e[r-1][1].type===`data`){let i=e[r-1][1],a=t.sliceStream(i),o=a.length,s=-1,c=0,l;for(;o--;){let e=a[o];if(typeof e==`string`){for(s=e.length;e.charCodeAt(s-1)===32;)c++,s--;if(s)break;s=-1}else if(e===-2)l=!0,c++;else if(e!==-1){o++;break}}if(t._contentTypeTextTrailing&&r===e.length&&(c=0),c){let a={type:r===e.length||l||c<2?`lineSuffix`:`hardBreakTrailing`,start:{_bufferIndex:o?s:i.start._bufferIndex+s,_index:i.start._index+o,line:i.end.line,column:i.end.column-c,offset:i.end.offset-c},end:{...i.end}};i.end={...a.start},i.start.offset===i.end.offset?Object.assign(i,a):n.add(r,0,[[`enter`,a,t],[`exit`,a,t]])}r++}return n.consume(e),e}var br=a({attentionMarkers:()=>Or,contentInitial:()=>Sr,disable:()=>kr,document:()=>xr,flow:()=>wr,flowInitial:()=>Cr,insideSpan:()=>Dr,string:()=>Tr,text:()=>Er}),xr={42:Y,43:Y,45:Y,48:Y,49:Y,50:Y,51:Y,52:Y,53:Y,54:Y,55:Y,56:Y,57:Y,62:Bt},Sr={91:bn},Cr={[-2]:Qt,[-1]:Qt,32:Qt},wr={35:En,42:er,45:[lr,er],60:jn,61:lr,95:er,96:Xt,126:Xt},Tr={38:Kt,92:Wt},Er={[-5]:Qn,[-4]:Qn,[-3]:Qn,33:Jn,38:Kt,42:Mt,60:[It,In],91:Xn,92:[wn,Wt],93:Rn,95:Mt,96:nn},Dr={null:[Mt,mr]},Or={null:[42,95]},kr={null:[]};function Ar(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0},i={},a=[],o=[],s=[],c={attempt:C(x),check:C(S),consume:v,enter:y,exit:b,interrupt:C(S,{interrupt:!0})},l={code:null,containerState:{},defineSkip:h,events:[],now:m,parser:e,previous:null,sliceSerialize:f,sliceStream:p,write:d},u=t.tokenize.call(l,c);return t.resolveAll&&a.push(t),l;function d(e){return o=B(o,e),g(),o[o.length-1]===null?(w(t,0),l.events=jt(a,l.events,l),l.events):[]}function f(e,t){return Mr(p(e),t)}function p(e){return jr(o,e)}function m(){let{_bufferIndex:e,_index:t,line:n,column:i,offset:a}=r;return{_bufferIndex:e,_index:t,line:n,column:i,offset:a}}function h(e){i[e.line]=e.column,E()}function g(){for(;r._index<o.length;){let e=o[r._index];if(typeof e==`string`){let t=r._index;for(r._bufferIndex<0&&(r._bufferIndex=0);r._index===t&&r._bufferIndex<e.length;)_(e.charCodeAt(r._bufferIndex))}else _(e)}}function _(e){u=u(e)}function v(e){U(e)?(r.line++,r.column=1,r.offset+=e===-3?2:1,E()):e!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),l.previous=e}function y(e,t){let n=t||{};return n.type=e,n.start=m(),l.events.push([`enter`,n,l]),s.push(n),n}function b(e){let t=s.pop();return t.end=m(),l.events.push([`exit`,t,l]),t}function x(e,t){w(e,t.from)}function S(e,t){t.restore()}function C(e,t){return n;function n(n,r,i){let a,o,s,u;return Array.isArray(n)?f(n):`tokenize`in n?f([n]):d(n);function d(e){return t;function t(t){let n=t!==null&&e[t],r=t!==null&&e.null;return f([...Array.isArray(n)?n:n?[n]:[],...Array.isArray(r)?r:r?[r]:[]])(t)}}function f(e){return a=e,o=0,e.length===0?i:p(e[o])}function p(e){return n;function n(n){return u=T(),s=e,e.partial||(l.currentConstruct=e),e.name&&l.parser.constructs.disable.null.includes(e.name)?h(n):e.tokenize.call(t?Object.assign(Object.create(l),t):l,c,m,h)(n)}}function m(t){return e(s,u),r}function h(e){return u.restore(),++o<a.length?p(a[o]):i}}}function w(e,t){e.resolveAll&&!a.includes(e)&&a.push(e),e.resolve&&z(l.events,t,l.events.length-t,e.resolve(l.events.slice(t),l)),e.resolveTo&&(l.events=e.resolveTo(l.events,l))}function T(){let e=m(),t=l.previous,n=l.currentConstruct,i=l.events.length,a=Array.from(s);return{from:i,restore:o};function o(){r=e,l.previous=t,l.currentConstruct=n,l.events.length=i,s=a,E()}}function E(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function jr(e,t){let n=t.start._index,r=t.start._bufferIndex,i=t.end._index,a=t.end._bufferIndex,o;if(n===i)o=[e[n].slice(r,a)];else{if(o=e.slice(n,i),r>-1){let e=o[0];typeof e==`string`?o[0]=e.slice(r):o.shift()}a>0&&o.push(e[i].slice(0,a))}return o}function Mr(e,t){let n=-1,r=[],i;for(;++n<e.length;){let a=e[n],o;if(typeof a==`string`)o=a;else switch(a){case-5:o=`\r`;break;case-4:o=`
`;break;case-3:o=`\r
`;break;case-2:o=t?` `:`	`;break;case-1:if(!t&&i)continue;o=` `;break;default:o=String.fromCharCode(a)}i=a===-2,r.push(o)}return r.join(``)}function Nr(e){let t={constructs:lt([br,...(e||{}).extensions||[]]),content:n(St),defined:[],document:n(Et),flow:n(fr),lazy:{},string:n(hr),text:n(gr)};return t;function n(e){return n;function n(n){return Ar(t,e,n)}}}function Pr(e){for(;!ln(e););return e}var Fr=/[\0\t\n\r]/g;function Ir(){let e=1,t=``,n=!0,r;return i;function i(i,a,o){i=t+(typeof i==`string`?i.toString():new TextDecoder(a||void 0).decode(i));let s=[],c=0;for(t=``,n&&=(i.charCodeAt(0)===65279&&c++,void 0);c<i.length;){Fr.lastIndex=c;let n=Fr.exec(i),a=n&&n.index!==void 0?n.index:i.length,o=i.charCodeAt(a);if(!n){t=i.slice(c);break}if(o===10&&c===a&&r)s.push(-3),r=void 0;else switch(r&&=(s.push(-5),void 0),c<a&&(s.push(i.slice(c,a)),e+=a-c),o){case 0:s.push(65533),e++;break;case 9:{let t=Math.ceil(e/4)*4;for(s.push(-2);e++<t;)s.push(-1);break}case 10:s.push(-4),e=1;break;default:r=!0,e=1}c=a+1}return o&&(r&&s.push(-5),t&&s.push(t),s.push(null)),s}}var Lr=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Rr(e){return e.replace(Lr,zr)}function zr(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){let e=n.charCodeAt(1),t=e===120||e===88;return ft(n.slice(t?2:1),t?16:10)}return st(n)||e}var Br={}.hasOwnProperty;function Vr(e,t,n){return t&&typeof t==`object`&&(n=t,t=void 0),Hr(n)(Pr(Nr(n).document().write(Ir()(e,t,!0))))}function Hr(e){let t={transforms:[],canContainEols:[`emphasis`,`fragment`,`heading`,`paragraph`,`strong`],enter:{autolink:a(_e),autolinkProtocol:T,autolinkEmail:T,atxHeading:a(pe),blockQuote:a(ce),characterEscape:T,characterReference:T,codeFenced:a(le),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:a(le,o),codeText:a(ue,o),codeTextData:T,data:T,codeFlowValue:T,definition:a(de),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:a(fe),hardBreakEscape:a(me),hardBreakTrailing:a(me),htmlFlow:a(he,o),htmlFlowData:T,htmlText:a(he,o),htmlTextData:T,image:a(ge),label:o,link:a(_e),listItem:a(ye),listItemValue:f,listOrdered:a(ve,d),listUnordered:a(ve),paragraph:a(be),reference:te,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:a(pe),strong:a(Se),thematicBreak:a(we)},exit:{atxHeading:c(),atxHeadingSequence:x,autolink:c(),autolinkEmail:se,autolinkProtocol:oe,blockQuote:c(),characterEscapeValue:E,characterReferenceMarkerHexadecimal:re,characterReferenceMarkerNumeric:re,characterReferenceValue:ie,characterReference:ae,codeFenced:c(g),codeFencedFence:h,codeFencedFenceInfo:p,codeFencedFenceMeta:m,codeFlowValue:E,codeIndented:c(_),codeText:c(ee),codeTextData:E,data:E,definition:c(),definitionDestinationString:b,definitionLabelString:v,definitionTitleString:y,emphasis:c(),hardBreakEscape:c(O),hardBreakTrailing:c(O),htmlFlow:c(k),htmlFlowData:E,htmlText:c(A),htmlTextData:E,image:c(M),label:P,labelText:N,lineEnding:D,link:c(j),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:ne,resourceDestinationString:F,resourceTitleString:I,resource:L,setextHeading:c(w),setextHeadingLineSequence:C,setextHeadingText:S,strong:c(),thematicBreak:c()}};Ur(t,(e||{}).mdastExtensions||[]);let n={};return r;function r(e){let r={type:`root`,children:[]},a={stack:[r],tokenStack:[],config:t,enter:s,exit:l,buffer:o,resume:u,data:n},c=[],d=-1;for(;++d<e.length;)(e[d][1].type===`listOrdered`||e[d][1].type===`listUnordered`)&&(e[d][0]===`enter`?c.push(d):d=i(e,c.pop(),d));for(d=-1;++d<e.length;){let n=t[e[d][0]];Br.call(n,e[d][1].type)&&n[e[d][1].type].call(Object.assign({sliceSerialize:e[d][2].sliceSerialize},a),e[d][1])}if(a.tokenStack.length>0){let e=a.tokenStack[a.tokenStack.length-1];(e[1]||Gr).call(a,void 0,e[0])}for(r.position={start:X(e.length>0?e[0][1].start:{line:1,column:1,offset:0}),end:X(e.length>0?e[e.length-2][1].end:{line:1,column:1,offset:0})},d=-1;++d<t.transforms.length;)r=t.transforms[d](r)||r;return r}function i(e,t,n){let r=t-1,i=-1,a=!1,o,s,c,l;for(;++r<=n;){let t=e[r];switch(t[1].type){case`listUnordered`:case`listOrdered`:case`blockQuote`:t[0]===`enter`?i++:i--,l=void 0;break;case`lineEndingBlank`:t[0]===`enter`&&(o&&!l&&!i&&!c&&(c=r),l=void 0);break;case`linePrefix`:case`listItemValue`:case`listItemMarker`:case`listItemPrefix`:case`listItemPrefixWhitespace`:break;default:l=void 0}if(!i&&t[0]===`enter`&&t[1].type===`listItemPrefix`||i===-1&&t[0]===`exit`&&(t[1].type===`listUnordered`||t[1].type===`listOrdered`)){if(o){let i=r;for(s=void 0;i--;){let t=e[i];if(t[1].type===`lineEnding`||t[1].type===`lineEndingBlank`){if(t[0]===`exit`)continue;s&&(e[s][1].type=`lineEndingBlank`,a=!0),t[1].type=`lineEnding`,s=i}else if(t[1].type!==`linePrefix`&&t[1].type!==`blockQuotePrefix`&&t[1].type!==`blockQuotePrefixWhitespace`&&t[1].type!==`blockQuoteMarker`&&t[1].type!==`listItemIndent`)break}c&&(!s||c<s)&&(o._spread=!0),o.end=Object.assign({},s?e[s][1].start:t[1].end),e.splice(s||r,0,[`exit`,o,t[2]]),r++,n++}if(t[1].type===`listItemPrefix`){let i={type:`listItem`,_spread:!1,start:Object.assign({},t[1].start),end:void 0};o=i,e.splice(r,0,[`enter`,i,t[2]]),r++,n++,c=void 0,l=!0}}}return e[t][1]._spread=a,n}function a(e,t){return n;function n(n){s.call(this,e(n),n),t&&t.call(this,n)}}function o(){this.stack.push({type:`fragment`,children:[]})}function s(e,t,n){this.stack[this.stack.length-1].children.push(e),this.stack.push(e),this.tokenStack.push([t,n||void 0]),e.position={start:X(t.start),end:void 0}}function c(e){return t;function t(t){e&&e.call(this,t),l.call(this,t)}}function l(e,t){let n=this.stack.pop(),r=this.tokenStack.pop();if(r)r[0].type!==e.type&&(t?t.call(this,e,r[0]):(r[1]||Gr).call(this,e,r[0]));else throw Error("Cannot close `"+e.type+"` ("+xe({start:e.start,end:e.end})+`): it’s not open`);n.position.end=X(e.end)}function u(){return nt(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function f(e){if(this.data.expectingFirstListItemValue){let t=this.stack[this.stack.length-2];t.start=Number.parseInt(this.sliceSerialize(e),10),this.data.expectingFirstListItemValue=void 0}}function p(){let e=this.resume(),t=this.stack[this.stack.length-1];t.lang=e}function m(){let e=this.resume(),t=this.stack[this.stack.length-1];t.meta=e}function h(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function g(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,``),this.data.flowCodeInside=void 0}function _(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e.replace(/(\r?\n|\r)$/g,``)}function v(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=pt(this.sliceSerialize(e)).toLowerCase()}function y(){let e=this.resume(),t=this.stack[this.stack.length-1];t.title=e}function b(){let e=this.resume(),t=this.stack[this.stack.length-1];t.url=e}function x(e){let t=this.stack[this.stack.length-1];t.depth||=this.sliceSerialize(e).length}function S(){this.data.setextHeadingSlurpLineEnding=!0}function C(e){let t=this.stack[this.stack.length-1];t.depth=this.sliceSerialize(e).codePointAt(0)===61?1:2}function w(){this.data.setextHeadingSlurpLineEnding=void 0}function T(e){let t=this.stack[this.stack.length-1].children,n=t[t.length-1];(!n||n.type!==`text`)&&(n=Ce(),n.position={start:X(e.start),end:void 0},t.push(n)),this.stack.push(n)}function E(e){let t=this.stack.pop();t.value+=this.sliceSerialize(e),t.position.end=X(e.end)}function D(e){let n=this.stack[this.stack.length-1];if(this.data.atHardBreak){let t=n.children[n.children.length-1];t.position.end=X(e.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(n.type)&&(T.call(this,e),E.call(this,e))}function O(){this.data.atHardBreak=!0}function k(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function A(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function ee(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function j(){let e=this.stack[this.stack.length-1];if(this.data.inReference){let t=this.data.referenceType||`shortcut`;e.type+=`Reference`,e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}function M(){let e=this.stack[this.stack.length-1];if(this.data.inReference){let t=this.data.referenceType||`shortcut`;e.type+=`Reference`,e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}function N(e){let t=this.sliceSerialize(e),n=this.stack[this.stack.length-2];n.label=Rr(t),n.identifier=pt(t).toLowerCase()}function P(){let e=this.stack[this.stack.length-1],t=this.resume(),n=this.stack[this.stack.length-1];this.data.inReference=!0,n.type===`link`?n.children=e.children:n.alt=t}function F(){let e=this.resume(),t=this.stack[this.stack.length-1];t.url=e}function I(){let e=this.resume(),t=this.stack[this.stack.length-1];t.title=e}function L(){this.data.inReference=void 0}function te(){this.data.referenceType=`collapsed`}function ne(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=pt(this.sliceSerialize(e)).toLowerCase(),this.data.referenceType=`full`}function re(e){this.data.characterReferenceType=e.type}function ie(e){let t=this.sliceSerialize(e),n=this.data.characterReferenceType,r;n?(r=ft(t,n===`characterReferenceMarkerNumeric`?10:16),this.data.characterReferenceType=void 0):r=st(t);let i=this.stack[this.stack.length-1];i.value+=r}function ae(e){let t=this.stack.pop();t.position.end=X(e.end)}function oe(e){E.call(this,e);let t=this.stack[this.stack.length-1];t.url=this.sliceSerialize(e)}function se(e){E.call(this,e);let t=this.stack[this.stack.length-1];t.url=`mailto:`+this.sliceSerialize(e)}function ce(){return{type:`blockquote`,children:[]}}function le(){return{type:`code`,lang:null,meta:null,value:``}}function ue(){return{type:`inlineCode`,value:``}}function de(){return{type:`definition`,identifier:``,label:null,title:null,url:``}}function fe(){return{type:`emphasis`,children:[]}}function pe(){return{type:`heading`,depth:0,children:[]}}function me(){return{type:`break`}}function he(){return{type:`html`,value:``}}function ge(){return{type:`image`,title:null,url:``,alt:null}}function _e(){return{type:`link`,title:null,url:``,children:[]}}function ve(e){return{type:`list`,ordered:e.type===`listOrdered`,start:null,spread:e._spread,children:[]}}function ye(e){return{type:`listItem`,spread:e._spread,checked:null,children:[]}}function be(){return{type:`paragraph`,children:[]}}function Se(){return{type:`strong`,children:[]}}function Ce(){return{type:`text`,value:``}}function we(){return{type:`thematicBreak`}}}function X(e){return{line:e.line,column:e.column,offset:e.offset}}function Ur(e,t){let n=-1;for(;++n<t.length;){let r=t[n];Array.isArray(r)?Ur(e,r):Wr(e,r)}}function Wr(e,t){let n;for(n in t)if(Br.call(t,n))switch(n){case`canContainEols`:{let r=t[n];r&&e[n].push(...r);break}case`transforms`:{let r=t[n];r&&e[n].push(...r);break}case`enter`:case`exit`:{let r=t[n];r&&Object.assign(e[n],r);break}}}function Gr(e,t){throw Error(e?"Cannot close `"+e.type+"` ("+xe({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+xe({start:t.start,end:t.end})+`) is open`:"Cannot close document, a token (`"+t.type+"`, "+xe({start:t.start,end:t.end})+`) is still open`)}function Kr(e){let t=this;t.parser=n;function n(n){return Vr(n,{...t.data(`settings`),...e,extensions:t.data(`micromarkExtensions`)||[],mdastExtensions:t.data(`fromMarkdownExtensions`)||[]})}}function qr(e,t){let n={type:`element`,tagName:`blockquote`,properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function Jr(e,t){let n={type:`element`,tagName:`br`,properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:`text`,value:`
`}]}function Yr(e,t){let n=t.value?t.value+`
`:``,r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=[`language-`+i[0]]);let a={type:`element`,tagName:`code`,properties:r,children:[{type:`text`,value:n}]};return t.meta&&(a.data={meta:t.meta}),e.patch(t,a),a=e.applyData(t,a),a={type:`element`,tagName:`pre`,properties:{},children:[a]},e.patch(t,a),a}function Xr(e,t){let n={type:`element`,tagName:`del`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Zr(e,t){let n={type:`element`,tagName:`em`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Qr(e,t){let n=typeof e.options.clobberPrefix==`string`?e.options.clobberPrefix:`user-content-`,r=String(t.identifier).toUpperCase(),i=q(r.toLowerCase()),a=e.footnoteOrder.indexOf(r),o,s=e.footnoteCounts.get(r);s===void 0?(s=0,e.footnoteOrder.push(r),o=e.footnoteOrder.length):o=a+1,s+=1,e.footnoteCounts.set(r,s);let c={type:`element`,tagName:`a`,properties:{href:`#`+n+`fn-`+i,id:n+`fnref-`+i+(s>1?`-`+s:``),dataFootnoteRef:!0,ariaDescribedBy:[`footnote-label`]},children:[{type:`text`,value:String(o)}]};e.patch(t,c);let l={type:`element`,tagName:`sup`,properties:{},children:[c]};return e.patch(t,l),e.applyData(t,l)}function $r(e,t){let n={type:`element`,tagName:`h`+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function ei(e,t){if(e.options.allowDangerousHtml){let n={type:`raw`,value:t.value};return e.patch(t,n),e.applyData(t,n)}}function ti(e,t){let n=t.referenceType,r=`]`;if(n===`collapsed`?r+=`[]`:n===`full`&&(r+=`[`+(t.label||t.identifier)+`]`),t.type===`imageReference`)return[{type:`text`,value:`![`+t.alt+r}];let i=e.all(t),a=i[0];a&&a.type===`text`?a.value=`[`+a.value:i.unshift({type:`text`,value:`[`});let o=i[i.length-1];return o&&o.type===`text`?o.value+=r:i.push({type:`text`,value:r}),i}function ni(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return ti(e,t);let i={src:q(r.url||``),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);let a={type:`element`,tagName:`img`,properties:i,children:[]};return e.patch(t,a),e.applyData(t,a)}function ri(e,t){let n={src:q(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:`element`,tagName:`img`,properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function ii(e,t){let n={type:`text`,value:t.value.replace(/\r?\n|\r/g,` `)};e.patch(t,n);let r={type:`element`,tagName:`code`,properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function ai(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return ti(e,t);let i={href:q(r.url||``)};r.title!==null&&r.title!==void 0&&(i.title=r.title);let a={type:`element`,tagName:`a`,properties:i,children:e.all(t)};return e.patch(t,a),e.applyData(t,a)}function oi(e,t){let n={href:q(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:`element`,tagName:`a`,properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function si(e,t,n){let r=e.all(t),i=n?ci(n):li(t),a={},o=[];if(typeof t.checked==`boolean`){let e=r[0],n;e&&e.type===`element`&&e.tagName===`p`?n=e:(n={type:`element`,tagName:`p`,properties:{},children:[]},r.unshift(n)),n.children.length>0&&n.children.unshift({type:`text`,value:` `}),n.children.unshift({type:`element`,tagName:`input`,properties:{type:`checkbox`,checked:t.checked,disabled:!0},children:[]}),a.className=[`task-list-item`]}let s=-1;for(;++s<r.length;){let e=r[s];(i||s!==0||e.type!==`element`||e.tagName!==`p`)&&o.push({type:`text`,value:`
`}),e.type===`element`&&e.tagName===`p`&&!i?o.push(...e.children):o.push(e)}let c=r[r.length-1];c&&(i||c.type!==`element`||c.tagName!==`p`)&&o.push({type:`text`,value:`
`});let l={type:`element`,tagName:`li`,properties:a,children:o};return e.patch(t,l),e.applyData(t,l)}function ci(e){let t=!1;if(e.type===`list`){t=e.spread||!1;let n=e.children,r=-1;for(;!t&&++r<n.length;)t=li(n[r])}return t}function li(e){return e.spread??e.children.length>1}function ui(e,t){let n={},r=e.all(t),i=-1;for(typeof t.start==`number`&&t.start!==1&&(n.start=t.start);++i<r.length;){let e=r[i];if(e.type===`element`&&e.tagName===`li`&&e.properties&&Array.isArray(e.properties.className)&&e.properties.className.includes(`task-list-item`)){n.className=[`contains-task-list`];break}}let a={type:`element`,tagName:t.ordered?`ol`:`ul`,properties:n,children:e.wrap(r,!0)};return e.patch(t,a),e.applyData(t,a)}function di(e,t){let n={type:`element`,tagName:`p`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function fi(e,t){let n={type:`root`,children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function pi(e,t){let n={type:`element`,tagName:`strong`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function mi(e,t){let n=e.all(t),r=n.shift(),i=[];if(r){let n={type:`element`,tagName:`thead`,properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],n),i.push(n)}if(n.length>0){let r={type:`element`,tagName:`tbody`,properties:{},children:e.wrap(n,!0)},a=ve(t.children[1]),o=_e(t.children[t.children.length-1]);a&&o&&(r.position={start:a,end:o}),i.push(r)}let a={type:`element`,tagName:`table`,properties:{},children:e.wrap(i,!0)};return e.patch(t,a),e.applyData(t,a)}function hi(e,t,n){let r=n?n.children:void 0,i=(r?r.indexOf(t):1)===0?`th`:`td`,a=n&&n.type===`table`?n.align:void 0,o=a?a.length:t.children.length,s=-1,c=[];for(;++s<o;){let n=t.children[s],r={},o=a?a[s]:void 0;o&&(r.align=o);let l={type:`element`,tagName:i,properties:r,children:[]};n&&(l.children=e.all(n),e.patch(n,l),l=e.applyData(n,l)),c.push(l)}let l={type:`element`,tagName:`tr`,properties:{},children:e.wrap(c,!0)};return e.patch(t,l),e.applyData(t,l)}function gi(e,t){let n={type:`element`,tagName:`td`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}var _i=9,vi=32;function yi(e){let t=String(e),n=/\r?\n|\r/g,r=n.exec(t),i=0,a=[];for(;r;)a.push(bi(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return a.push(bi(t.slice(i),i>0,!1)),a.join(``)}function bi(e,t,n){let r=0,i=e.length;if(t){let t=e.codePointAt(r);for(;t===_i||t===vi;)r++,t=e.codePointAt(r)}if(n){let t=e.codePointAt(i-1);for(;t===_i||t===vi;)i--,t=e.codePointAt(i-1)}return i>r?e.slice(r,i):``}function xi(e,t){let n={type:`text`,value:yi(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function Si(e,t){let n={type:`element`,tagName:`hr`,properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}var Ci={blockquote:qr,break:Jr,code:Yr,delete:Xr,emphasis:Zr,footnoteReference:Qr,heading:$r,html:ei,imageReference:ni,image:ri,inlineCode:ii,linkReference:ai,link:oi,listItem:si,list:ui,paragraph:di,root:fi,strong:pi,table:mi,tableCell:gi,tableRow:hi,text:xi,thematicBreak:Si,toml:wi,yaml:wi,definition:wi,footnoteDefinition:wi};function wi(){}var{defineProperty:Ti}=Object,Ei=typeof self==`object`?self:globalThis,Di=(e,t)=>{switch(e){case`Function`:case`SharedWorker`:case`Worker`:case`eval`:case`setInterval`:case`setTimeout`:throw TypeError(`unable to deserialize `+e)}return new Ei[e](t)},Oi=(e,t)=>{let n=(t,n)=>(e.set(n,t),t),r=i=>{if(e.has(i))return e.get(i);let[a,o]=t[i];switch(a){case 0:case-1:return n(o,i);case 1:{let e=n([],i);for(let t of o)e.push(r(t));return e}case 2:{let e=n({},i);for(let[t,n]of o){let i=r(t),a=r(n);i===`__proto__`?Ti(e,i,{value:a,configurable:!0,enumerable:!0,writable:!0}):e[i]=a}return e}case 3:return n(new Date(o),i);case 4:{let{source:e,flags:t}=o;return n(new RegExp(e,t),i)}case 5:{let e=n(new Map,i);for(let[t,n]of o)e.set(r(t),r(n));return e}case 6:{let e=n(new Set,i);for(let t of o)e.add(r(t));return e}case 7:{let{name:e,message:t}=o;return n(typeof Ei[e]==`function`?Di(e,t):Error(t),i)}case 8:return n(BigInt(o),i);case`BigInt`:return n(Object(BigInt(o)),i);case`ArrayBuffer`:return n(new Uint8Array(o).buffer,o);case`DataView`:{let{buffer:e}=new Uint8Array(o);return n(new DataView(e),o)}case`-0`:return-0}return n(Di(a,o),i)};return r},ki=e=>Oi(new Map,e)(0),Z=``,{toString:Ai}={},{keys:ji,is:Mi}=Object,Ni=e=>{let t=typeof e;if(t!==`object`||!e)return[0,t];let n=Ai.call(e).slice(8,-1);switch(n){case`Array`:return[1,Z];case`Object`:return[2,Z];case`Date`:return[3,Z];case`RegExp`:return[4,Z];case`Map`:return[5,Z];case`Set`:return[6,Z];case`DataView`:return[1,n]}return n.includes(`Array`)?[1,n]:e instanceof Error?[7,e.name||`Error`]:[2,n]},Pi=([e,t])=>e===0&&(t===`function`||t===`symbol`),Fi=(e,t,n,r)=>{let i=(e,t)=>{let i=r.push(e)-1;return n.set(t,i),i},a=o=>{if(n.has(o))return n.get(o);let[s,c]=Ni(o);switch(s){case 0:{let t=o;switch(c){case`bigint`:s=8,t=o.toString();break;case`number`:if(!o&&Mi(o,-0))return r.push([`-0`])-1;break;case`function`:case`symbol`:if(e)throw TypeError(`unable to serialize `+c);t=null;break;case`undefined`:return i([-1],o)}return i([s,t],o)}case 1:{if(c){let e=o;return c===`DataView`?e=new Uint8Array(o.buffer):c===`ArrayBuffer`&&(e=new Uint8Array(o)),i([c,[...e]],o)}let e=[],t=i([s,e],o);for(let t of o)e.push(a(t));return t}case 2:{if(c)switch(c){case`BigInt`:return i([c,o.toString()],o);case`Boolean`:case`Number`:case`String`:return i([c,o.valueOf()],o)}if(t&&`toJSON`in o)return a(o.toJSON());let n=[],r=i([s,n],o);for(let t of ji(o))(e||!Pi(Ni(o[t])))&&n.push([a(t),a(o[t])]);return r}case 3:return i([s,isNaN(o.getTime())?Z:o.toISOString()],o);case 4:{let{source:e,flags:t}=o;return i([s,{source:e,flags:t}],o)}case 5:{let t=[],n=i([s,t],o);for(let[n,r]of o)(e||!(Pi(Ni(n))||Pi(Ni(r))))&&t.push([a(n),a(r)]);return n}case 6:{let t=[],n=i([s,t],o);for(let n of o)(e||!Pi(Ni(n)))&&t.push(a(n));return n}}let{message:l}=o;return i([s,{name:c,message:l}],o)};return a},Ii=(e,{json:t,lossy:n}={})=>{let r=[];return Fi(!(t||n),!!t,new Map,r)(e),r},Li=typeof structuredClone==`function`?(e,t)=>t&&(`json`in t||`lossy`in t)?ki(Ii(e,t)):structuredClone(e):(e,t)=>ki(Ii(e,t));function Ri(e,t){let n=[{type:`text`,value:`↩`}];return t>1&&n.push({type:`element`,tagName:`sup`,properties:{},children:[{type:`text`,value:String(t)}]}),n}function zi(e,t){return`Back to reference `+(e+1)+(t>1?`-`+t:``)}function Bi(e){let t=typeof e.options.clobberPrefix==`string`?e.options.clobberPrefix:`user-content-`,n=e.options.footnoteBackContent||Ri,r=e.options.footnoteBackLabel||zi,i=e.options.footnoteLabel||`Footnotes`,a=e.options.footnoteLabelTagName||`h2`,o=e.options.footnoteLabelProperties||{className:[`sr-only`]},s=[],c=-1;for(;++c<e.footnoteOrder.length;){let i=e.footnoteById.get(e.footnoteOrder[c]);if(!i)continue;let a=e.all(i),o=String(i.identifier).toUpperCase(),l=q(o.toLowerCase()),u=0,d=[],f=e.footnoteCounts.get(o);for(;f!==void 0&&++u<=f;){d.length>0&&d.push({type:`text`,value:` `});let e=typeof n==`string`?n:n(c,u);typeof e==`string`&&(e={type:`text`,value:e}),d.push({type:`element`,tagName:`a`,properties:{href:`#`+t+`fnref-`+l+(u>1?`-`+u:``),dataFootnoteBackref:``,ariaLabel:typeof r==`string`?r:r(c,u),className:[`data-footnote-backref`]},children:Array.isArray(e)?e:[e]})}let p=a[a.length-1];if(p&&p.type===`element`&&p.tagName===`p`){let e=p.children[p.children.length-1];e&&e.type===`text`?e.value+=` `:p.children.push({type:`text`,value:` `}),p.children.push(...d)}else a.push(...d);let m={type:`element`,tagName:`li`,properties:{id:t+`fn-`+l},children:e.wrap(a,!0)};e.patch(i,m),s.push(m)}if(s.length!==0)return{type:`element`,tagName:`section`,properties:{dataFootnotes:!0,className:[`footnotes`]},children:[{type:`element`,tagName:a,properties:{...Li(o),id:`footnote-label`},children:[{type:`text`,value:i}]},{type:`text`,value:`
`},{type:`element`,tagName:`ol`,properties:{},children:e.wrap(s,!0)},{type:`text`,value:`
`}]}}var Vi=(function(e){if(e==null)return Ki;if(typeof e==`function`)return Gi(e);if(typeof e==`object`)return Array.isArray(e)?Hi(e):Ui(e);if(typeof e==`string`)return Wi(e);throw Error(`Expected function, string, or object as test`)});function Hi(e){let t=[],n=-1;for(;++n<e.length;)t[n]=Vi(e[n]);return Gi(r);function r(...e){let n=-1;for(;++n<t.length;)if(t[n].apply(this,e))return!0;return!1}}function Ui(e){let t=e;return Gi(n);function n(n){let r=n,i;for(i in e)if(r[i]!==t[i])return!1;return!0}}function Wi(e){return Gi(t);function t(t){return t&&t.type===e}}function Gi(e){return t;function t(t,n,r){return!!(qi(t)&&e.call(this,t,typeof n==`number`?n:void 0,r||void 0))}}function Ki(){return!0}function qi(e){return typeof e==`object`&&!!e&&`type`in e}function Ji(e){return e}var Yi=[];function Xi(e,t,n,r){let i;typeof t==`function`&&typeof n!=`function`?(r=n,n=t):i=t;let a=Vi(i),o=r?-1:1;s(e,void 0,[])();function s(e,i,c){let l=e&&typeof e==`object`?e:{};if(typeof l.type==`string`){let t=typeof l.tagName==`string`?l.tagName:typeof l.name==`string`?l.name:void 0;Object.defineProperty(u,"name",{value:`node (`+Ji(e.type+(t?`<`+t+`>`:``))+`)`})}return u;function u(){let l=Yi,u,d,f;if((!t||a(e,i,c[c.length-1]||void 0))&&(l=Zi(n(e,c)),l[0]===!1))return l;if(`children`in e&&e.children){let t=e;if(t.children&&l[0]!==`skip`)for(d=(r?t.children.length:-1)+o,f=c.concat(t);d>-1&&d<t.children.length;){let e=t.children[d];if(u=s(e,d,f)(),u[0]===!1)return u;d=typeof u[1]==`number`?u[1]:d+o}}return l}}}function Zi(e){return Array.isArray(e)?e:typeof e==`number`?[!0,e]:e==null?Yi:[e]}function Qi(e,t,n,r){let i,a,o;typeof t==`function`&&typeof n!=`function`?(a=void 0,o=t,i=n):(a=t,o=n,i=r),Xi(e,a,s,i);function s(e,t){let n=t[t.length-1],r=n?n.children.indexOf(e):void 0;return o(e,r,n)}}var $i={}.hasOwnProperty,ea={};function ta(e,t){let n=t||ea,r=new Map,i=new Map,a={all:s,applyData:ra,definitionById:r,footnoteById:i,footnoteCounts:new Map,footnoteOrder:[],handlers:{...Ci,...n.handlers},one:o,options:n,patch:na,wrap:aa};return Qi(e,function(e){if(e.type===`definition`||e.type===`footnoteDefinition`){let t=e.type===`definition`?r:i,n=String(e.identifier).toUpperCase();t.has(n)||t.set(n,e)}}),a;function o(e,t){let n=e.type,r=a.handlers[n];if($i.call(a.handlers,n)&&r)return r(a,e,t);if(a.options.passThrough&&a.options.passThrough.includes(n)){if(`children`in e){let{children:t,...n}=e,r=Li(n);return r.children=a.all(e),r}return Li(e)}return(a.options.unknownHandler||ia)(a,e,t)}function s(e){let t=[];if(`children`in e){let n=e.children,r=-1;for(;++r<n.length;){let i=a.one(n[r],e);if(i){if(r&&n[r-1].type===`break`&&(!Array.isArray(i)&&i.type===`text`&&(i.value=oa(i.value)),!Array.isArray(i)&&i.type===`element`)){let e=i.children[0];e&&e.type===`text`&&(e.value=oa(e.value))}Array.isArray(i)?t.push(...i):t.push(i)}}}return t}}function na(e,t){e.position&&(t.position=be(e))}function ra(e,t){let n=t;if(e&&e.data){let t=e.data.hName,r=e.data.hChildren,i=e.data.hProperties;typeof t==`string`&&(n.type===`element`?n.tagName=t:n={type:`element`,tagName:t,properties:{},children:`children`in n?n.children:[n]}),n.type===`element`&&i&&Object.assign(n.properties,Li(i)),`children`in n&&n.children&&r!=null&&(n.children=r)}return n}function ia(e,t){let n=t.data||{},r=`value`in t&&!($i.call(n,`hProperties`)||$i.call(n,`hChildren`))?{type:`text`,value:t.value}:{type:`element`,tagName:`div`,properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function aa(e,t){let n=[],r=-1;for(t&&n.push({type:`text`,value:`
`});++r<e.length;)r&&n.push({type:`text`,value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:`text`,value:`
`}),n}function oa(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function sa(e,t){let n=ta(e,t),r=n.one(e,void 0),i=Bi(n),a=Array.isArray(r)?{type:`root`,children:r}:r||{type:`root`,children:[]};return i&&(`children`in a,a.children.push({type:`text`,value:`
`},i)),a}function ca(e,t){return e&&`run`in e?async function(n,r){let i=sa(n,{file:r,...t});await e.run(i,r)}:function(n,r){return sa(n,{file:r,...e||t})}}function la(e){if(e)throw e}var ua=r(((e,t)=>{var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString,i=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=function(e){return typeof Array.isArray==`function`?Array.isArray(e):r.call(e)===`[object Array]`},s=function(e){if(!e||r.call(e)!==`[object Object]`)return!1;var t=n.call(e,`constructor`),i=e.constructor&&e.constructor.prototype&&n.call(e.constructor.prototype,`isPrototypeOf`);if(e.constructor&&!t&&!i)return!1;for(var a in e);return a===void 0||n.call(e,a)},c=function(e,t){i&&t.name===`__proto__`?i(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},l=function(e,t){if(t===`__proto__`){if(!n.call(e,t))return;if(a)return a(e,t).value}return e[t]};t.exports=function e(){var t,n,r,i,a,u,d=arguments[0],f=1,p=arguments.length,m=!1;for(typeof d==`boolean`&&(m=d,d=arguments[1]||{},f=2),(d==null||typeof d!=`object`&&typeof d!=`function`)&&(d={});f<p;++f)if(t=arguments[f],t!=null)for(n in t)r=l(d,n),i=l(t,n),d!==i&&(m&&i&&(s(i)||(a=o(i)))?(a?(a=!1,u=r&&o(r)?r:[]):u=r&&s(r)?r:{},c(d,{name:n,newValue:e(m,u,i)})):i!==void 0&&c(d,{name:n,newValue:i}));return d}}));function da(e){if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function fa(){let e=[],t={run:n,use:r};return t;function n(...t){let n=-1,r=t.pop();if(typeof r!=`function`)throw TypeError(`Expected function as last argument, not `+r);i(null,...t);function i(a,...o){let s=e[++n],c=-1;if(a){r(a);return}for(;++c<t.length;)(o[c]===null||o[c]===void 0)&&(o[c]=t[c]);t=o,s?pa(s,i)(...o):r(null,...o)}}function r(n){if(typeof n!=`function`)throw TypeError("Expected `middelware` to be a function, not "+n);return e.push(n),t}}function pa(e,t){let n;return r;function r(...t){let r=e.length>t.length,o;r&&t.push(i);try{o=e.apply(this,t)}catch(e){let t=e;if(r&&n)throw t;return i(t)}r||(o&&o.then&&typeof o.then==`function`?o.then(a,i):o instanceof Error?i(o):a(o))}function i(e,...r){n||(n=!0,t(e,...r))}function a(e){i(null,e)}}var Q={basename:ma,dirname:ha,extname:ga,join:_a,sep:`/`};function ma(e,t){if(t!==void 0&&typeof t!=`string`)throw TypeError(`"ext" argument must be a string`);ba(e);let n=0,r=-1,i=e.length,a;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else r<0&&(a=!0,r=i+1);return r<0?``:e.slice(n,r)}if(t===e)return``;let o=-1,s=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else o<0&&(a=!0,o=i+1),s>-1&&(e.codePointAt(i)===t.codePointAt(s--)?s<0&&(r=i):(s=-1,r=o));return n===r?r=o:r<0&&(r=e.length),e.slice(n,r)}function ha(e){if(ba(e),e.length===0)return`.`;let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||=!0;return t<0?e.codePointAt(0)===47?`/`:`.`:t===1&&e.codePointAt(0)===47?`//`:e.slice(0,t)}function ga(e){ba(e);let t=e.length,n=-1,r=0,i=-1,a=0,o;for(;t--;){let s=e.codePointAt(t);if(s===47){if(o){r=t+1;break}continue}n<0&&(o=!0,n=t+1),s===46?i<0?i=t:a!==1&&(a=1):i>-1&&(a=-1)}return i<0||n<0||a===0||a===1&&i===n-1&&i===r+1?``:e.slice(i,n)}function _a(...e){let t=-1,n;for(;++t<e.length;)ba(e[t]),e[t]&&(n=n===void 0?e[t]:n+`/`+e[t]);return n===void 0?`.`:va(n)}function va(e){ba(e);let t=e.codePointAt(0)===47,n=ya(e,!t);return n.length===0&&!t&&(n=`.`),n.length>0&&e.codePointAt(e.length-1)===47&&(n+=`/`),t?`/`+n:n}function ya(e,t){let n=``,r=0,i=-1,a=0,o=-1,s,c;for(;++o<=e.length;){if(o<e.length)s=e.codePointAt(o);else if(s===47)break;else s=47;if(s===47){if(i!==o-1&&a!==1){if(i!==o-1&&a===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf(`/`),c!==n.length-1){c<0?(n=``,r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf(`/`)),i=o,a=0;continue}}else if(n.length>0){n=``,r=0,i=o,a=0;continue}}t&&(n=n.length>0?n+`/..`:`..`,r=2)}else n.length>0?n+=`/`+e.slice(i+1,o):n=e.slice(i+1,o),r=o-i-1}i=o,a=0}else s===46&&a>-1?a++:a=-1}return n}function ba(e){if(typeof e!=`string`)throw TypeError(`Path must be a string. Received `+JSON.stringify(e))}var xa={cwd:Sa};function Sa(){return`/`}function Ca(e){return!!(typeof e==`object`&&e&&`href`in e&&e.href&&`protocol`in e&&e.protocol&&e.auth===void 0)}function wa(e){if(typeof e==`string`)e=new URL(e);else if(!Ca(e)){let t=TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code=`ERR_INVALID_ARG_TYPE`,t}if(e.protocol!==`file:`){let e=TypeError(`The URL must be of scheme file`);throw e.code=`ERR_INVALID_URL_SCHEME`,e}return Ta(e)}function Ta(e){if(e.hostname!==``){let e=TypeError(`File URL host must be "localhost" or empty on darwin`);throw e.code=`ERR_INVALID_FILE_URL_HOST`,e}let t=e.pathname,n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){let e=t.codePointAt(n+2);if(e===70||e===102){let e=TypeError(`File URL path must not include encoded / characters`);throw e.code=`ERR_INVALID_FILE_URL_PATH`,e}}return decodeURIComponent(t)}var Ea=[`history`,`path`,`basename`,`stem`,`extname`,`dirname`],Da=class{constructor(e){let t;t=e?Ca(e)?{path:e}:typeof e==`string`||ja(e)?{value:e}:e:{},this.cwd=`cwd`in t?``:xa.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let n=-1;for(;++n<Ea.length;){let e=Ea[n];e in t&&t[e]!==void 0&&t[e]!==null&&(this[e]=e===`history`?[...t[e]]:t[e])}let r;for(r in t)Ea.includes(r)||(this[r]=t[r])}get basename(){return typeof this.path==`string`?Q.basename(this.path):void 0}set basename(e){ka(e,`basename`),Oa(e,`basename`),this.path=Q.join(this.dirname||``,e)}get dirname(){return typeof this.path==`string`?Q.dirname(this.path):void 0}set dirname(e){Aa(this.basename,`dirname`),this.path=Q.join(e||``,this.basename)}get extname(){return typeof this.path==`string`?Q.extname(this.path):void 0}set extname(e){if(Oa(e,`extname`),Aa(this.dirname,`extname`),e){if(e.codePointAt(0)!==46)throw Error("`extname` must start with `.`");if(e.includes(`.`,1))throw Error("`extname` cannot contain multiple dots")}this.path=Q.join(this.dirname,this.stem+(e||``))}get path(){return this.history[this.history.length-1]}set path(e){Ca(e)&&(e=wa(e)),ka(e,`path`),this.path!==e&&this.history.push(e)}get stem(){return typeof this.path==`string`?Q.basename(this.path,this.extname):void 0}set stem(e){ka(e,`stem`),Oa(e,`stem`),this.path=Q.join(this.dirname||``,e+(this.extname||``))}fail(e,t,n){let r=this.message(e,t,n);throw r.fatal=!0,r}info(e,t,n){let r=this.message(e,t,n);return r.fatal=void 0,r}message(e,t,n){let r=new R(e,t,n);return this.path&&(r.name=this.path+`:`+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}toString(e){return this.value===void 0?``:typeof this.value==`string`?this.value:new TextDecoder(e||void 0).decode(this.value)}};function Oa(e,t){if(e&&e.includes(Q.sep))throw Error("`"+t+"` cannot be a path: did not expect `"+Q.sep+"`")}function ka(e,t){if(!e)throw Error("`"+t+"` cannot be empty")}function Aa(e,t){if(!e)throw Error("Setting `"+t+"` requires `path` to be set too")}function ja(e){return!!(e&&typeof e==`object`&&`byteLength`in e&&`byteOffset`in e)}var Ma=(function(e){let t=this.constructor.prototype,n=t[e],r=function(){return n.apply(r,arguments)};return Object.setPrototypeOf(r,t),r}),Na=t(ua(),1),Pa={}.hasOwnProperty,Fa=new class e extends Ma{constructor(){super(`copy`),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=fa()}copy(){let t=new e,n=-1;for(;++n<this.attachers.length;){let e=this.attachers[n];t.use(...e)}return t.data((0,Na.default)(!0,{},this.namespace)),t}data(e,t){return typeof e==`string`?arguments.length===2?(Ra(`data`,this.frozen),this.namespace[e]=t,this):Pa.call(this.namespace,e)&&this.namespace[e]||void 0:e?(Ra(`data`,this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;let e=this;for(;++this.freezeIndex<this.attachers.length;){let[t,...n]=this.attachers[this.freezeIndex];if(n[0]===!1)continue;n[0]===!0&&(n[0]=void 0);let r=t.call(e,...n);typeof r==`function`&&this.transformers.use(r)}return this.frozen=!0,this.freezeIndex=1/0,this}parse(e){this.freeze();let t=Va(e),n=this.parser||this.Parser;return Ia(`parse`,n),n(String(t),t)}process(e,t){let n=this;return this.freeze(),Ia(`process`,this.parser||this.Parser),La(`process`,this.compiler||this.Compiler),t?r(void 0,t):new Promise(r);function r(r,i){let a=Va(e),o=n.parse(a);n.run(o,a,function(e,t,r){if(e||!t||!r)return s(e);let i=t,a=n.stringify(i,r);Ua(a)?r.value=a:r.result=a,s(e,r)});function s(e,n){e||!n?i(e):r?r(n):t(void 0,n)}}}processSync(e){let t=!1,n;return this.freeze(),Ia(`processSync`,this.parser||this.Parser),La(`processSync`,this.compiler||this.Compiler),this.process(e,r),Ba(`processSync`,`process`,t),n;function r(e,r){t=!0,la(e),n=r}}run(e,t,n){za(e),this.freeze();let r=this.transformers;return!n&&typeof t==`function`&&(n=t,t=void 0),n?i(void 0,n):new Promise(i);function i(i,a){let o=Va(t);r.run(e,o,s);function s(t,r,o){let s=r||e;t?a(t):i?i(s):n(void 0,s,o)}}}runSync(e,t){let n=!1,r;return this.run(e,t,i),Ba(`runSync`,`run`,n),r;function i(e,t){la(e),r=t,n=!0}}stringify(e,t){this.freeze();let n=Va(t),r=this.compiler||this.Compiler;return La(`stringify`,r),za(e),r(e,n)}use(e,...t){let n=this.attachers,r=this.namespace;if(Ra(`use`,this.frozen),e!=null){if(typeof e==`function`)s(e,t);else if(typeof e==`object`)Array.isArray(e)?o(e):a(e);else throw TypeError("Expected usable value, not `"+e+"`")}return this;function i(e){if(typeof e==`function`)s(e,[]);else if(typeof e==`object`){if(Array.isArray(e)){let[t,...n]=e;s(t,n)}else a(e)}else throw TypeError("Expected usable value, not `"+e+"`")}function a(e){if(!(`plugins`in e)&&!(`settings`in e))throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");o(e.plugins),e.settings&&(r.settings=(0,Na.default)(!0,r.settings,e.settings))}function o(e){let t=-1;if(e!=null){if(Array.isArray(e))for(;++t<e.length;){let n=e[t];i(n)}else throw TypeError("Expected a list of plugins, not `"+e+"`")}}function s(e,t){let r=-1,i=-1;for(;++r<n.length;)if(n[r][0]===e){i=r;break}if(i===-1)n.push([e,...t]);else if(t.length>0){let[r,...a]=t,o=n[i][1];da(o)&&da(r)&&(r=(0,Na.default)(!0,o,r)),n[i]=[e,r,...a]}}}}().freeze();function Ia(e,t){if(typeof t!=`function`)throw TypeError("Cannot `"+e+"` without `parser`")}function La(e,t){if(typeof t!=`function`)throw TypeError("Cannot `"+e+"` without `compiler`")}function Ra(e,t){if(t)throw Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function za(e){if(!da(e)||typeof e.type!=`string`)throw TypeError("Expected node, got `"+e+"`")}function Ba(e,t,n){if(!n)throw Error("`"+e+"` finished async. Use `"+t+"` instead")}function Va(e){return Ha(e)?e:new Da(e)}function Ha(e){return!!(e&&typeof e==`object`&&`message`in e&&`messages`in e)}function Ua(e){return typeof e==`string`||Wa(e)}function Wa(e){return!!(e&&typeof e==`object`&&`byteLength`in e&&`byteOffset`in e)}var $=n(),Ga=t(e(),1),Ka=[],qa={allowDangerousHtml:!0},Ja=/^(https?|ircs?|mailto|xmpp)$/i,Ya=[{from:`astPlugins`,id:`remove-buggy-html-in-markdown-parser`},{from:`allowDangerousHtml`,id:`remove-buggy-html-in-markdown-parser`},{from:`allowNode`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`allowElement`},{from:`allowedTypes`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`allowedElements`},{from:`className`,id:`remove-classname`},{from:`disallowedTypes`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`disallowedElements`},{from:`escapeHtml`,id:`remove-buggy-html-in-markdown-parser`},{from:`includeElementIndex`,id:`#remove-includeelementindex`},{from:`includeNodeIndex`,id:`change-includenodeindex-to-includeelementindex`},{from:`linkTarget`,id:`remove-linktarget`},{from:`plugins`,id:`change-plugins-to-remarkplugins`,to:`remarkPlugins`},{from:`rawSourcePos`,id:`#remove-rawsourcepos`},{from:`renderers`,id:`change-renderers-to-components`,to:`components`},{from:`source`,id:`change-source-to-children`,to:`children`},{from:`sourcePos`,id:`#remove-sourcepos`},{from:`transformImageUri`,id:`#add-urltransform`,to:`urlTransform`},{from:`transformLinkUri`,id:`#add-urltransform`,to:`urlTransform`}];function Xa(e){let t=Za(e),n=Qa(e);return $a(t.runSync(t.parse(n),n),e)}function Za(e){let t=e.rehypePlugins||Ka,n=e.remarkPlugins||Ka,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...qa}:qa;return Fa().use(Kr).use(n).use(ca,r).use(t)}function Qa(e){let t=e.children||``,n=new Da;return typeof t==`string`?n.value=t:``+t,n}function $a(e,t){let n=t.allowedElements,r=t.allowElement,i=t.components,a=t.disallowedElements,o=t.skipHtml,s=t.unwrapDisallowed,c=t.urlTransform||eo;for(let e of Ya)Object.hasOwn(t,e.from)&&``+e.from+(e.to?"use `"+e.to+"` instead":`remove it`)+e.id;return Qi(e,l),Me(e,{Fragment:$.Fragment,components:i,ignoreInvalidStyle:!0,jsx:$.jsx,jsxs:$.jsxs,passKeys:!0,passNode:!0});function l(e,t,i){if(e.type===`raw`&&i&&typeof t==`number`)return o?i.children.splice(t,1):i.children[t]={type:`text`,value:e.value},t;if(e.type===`element`){let t;for(t in et)if(Object.hasOwn(et,t)&&Object.hasOwn(e.properties,t)){let n=e.properties[t],r=et[t];(r===null||r.includes(e.tagName))&&(e.properties[t]=c(String(n||``),t,e))}}if(e.type===`element`){let o=n?!n.includes(e.tagName):a?a.includes(e.tagName):!1;if(!o&&r&&typeof t==`number`&&(o=!r(e,t,i)),o&&i&&typeof t==`number`)return s&&e.children?i.children.splice(t,1,...e.children):i.children.splice(t,1),t}}}function eo(e){let t=e.indexOf(`:`),n=e.indexOf(`?`),r=e.indexOf(`#`),i=e.indexOf(`/`);return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||Ja.test(e.slice(0,t))?e:``}var to=`## 简介

合拍记（FrameDir）是 iPhone 与 iPad 上的独立多机位监看与关键时刻记录工具。把机位、画面、标记和现场笔记归到同一个项目，方便回看拍摄中值得保留的瞬间。

- 每个项目组织最多四个机位，切换单画面和多画面监看。
- 手动配置标准 RTMP 来源；受支持的相机可在应用内连接与预览。
- 点按标记，保存正在出画面的机位截图，以及该时刻前后的短片。
- 用时间线回看标记；通过设备本地语音转写整理项目智记。

公开版本 **1.0**，要求 **iOS / iPadOS 26 或更新版本**。相机兼容性及画质取决于型号、固件、设备与局域网；本产品独立开发，不隶属于相机厂商，也未获其背书。

## 详细使用说明

### 1. 创建项目与机位
新建拍摄项目，填写名称，并按实际现场添加机位。先用少量机位确认画面，再增加到最多四路；为各机位设置容易辨认的名称。

### 2. 接入画面
让手机、平板和相机处于可通信的网络。按来源选择手动 RTMP 配置，或使用支持相机的连接入口。允许本地网络访问；相机发现或连接按需使用蓝牙。不要把某一厂商所有型号都理解为已支持。

配置 RTMP 时核对地址和推流参数。地址中可能带有推流密钥，请勿公开截图或分享完整地址。网络不通时，先核对设备连接、相机输出和应用权限。

### 3. 监看与标记
在单画面与多画面之间切换。出现关键动作时点击标记；应用对有画面的机位保存截图及短片。片段依赖实际收到的流与短时缓存，不等于完整连续录像，也不保证在无信号时补回画面。

### 4. 开启现场语音转写
需要智记时才启用 AI 拾音并授予麦克风权限。Apple 系统在设备本地转写；首次可能需要下载语言资源。转写文字可按设置保存为项目笔记，嘈杂环境下请复核识别结果。

### 5. 回看、分享与清理
从项目时间线查看标记、截图和短片，核对时间与机位。分享前检查导出内容是否包含机位名、现场信息或带密钥的 RTMP 地址。删除标记会删除其关联截图和短片；导出副本需要另行管理。

### 截图说明
本站截图来自开发版本的真实 iPhone / iPad 模拟器，项目与舞台画面为专门制作的演示素材，不代表客户记录或所有相机的兼容性验收。[在 App Store 查看当前版本](https://apps.apple.com/app/id6816482500)。
`,no=`## 简介

墨语引擎（Ink Engine）把文本编辑、阅读与离线听读放在一起。写完后换一种方式听一遍，帮助自己发现重复、长句与不顺口的地方。

- Mac 打开和编辑本地原文件；iPhone / iPad 管理及阅读本机文稿与目录。
- 支持纯文本、Markdown 及常见代码和数据文本；用章节、书签与阅读位置继续阅读。
- 系统语音与内置 ZipVoice Serena / Dylan；各模型分别记住语速，并支持常用多音字与自定义纠音词组。
- 通过系统分享、导入或主动发起附近设备同步传递文稿，无需云端账户。
- 0.3.2 新增简体中文、繁体中文、English 和跟随系统的界面语言选项。

公开 Mac 安装包 **0.3.2（build 8）** 支持 Apple 芯片及 **macOS 26+**，已签名并公证。项目也支持 iPhone / iPad 的 iOS / iPadOS 26+，但尚未在 App Store 上架、没有公开通用签名 IPA。原创源码使用 **MIT License**；第三方组件保留各自许可证。

## 详细使用说明

### 1. 安装与打开
从 [GitHub Releases](https://github.com/ailifelab/InkEngine/releases/tag/v0.3.2) 下载 Mac DMG 与 SHA-256 文件。核对后打开 DMG，将应用拖入 Applications。更新前退出旧版，保留重要文稿备份。iPhone / iPad 自行安装需要自己的开发者签名及描述文件，作者签名不随源码提供。

### 2. 打开、编辑与保存
Mac 使用“打开”（⌘O）或“新建”（⌘N），在编辑模式修改，使用保存（⌘S）或另存为选择位置。手机和平板从本机文稿、历史或导入入口进入。处理原文件前建议备份，不把历史记录当作独立备份。

### 3. 开始听读
切换“阅读”，点击底部播放，再次点击暂停；点击正文中的一行可以从该处开始。用上下段和语速控制检查长文。播放与跳段前核对当前文稿，识别或合成结果仍需自己确认。

### 4. 模型、音色与纠音
在“更多”→“字号与朗读设置”先选择模型，再选该模型的音色。ZipVoice 提供 Serena 女声与 Dylan 男声；系统语音使用设备已安装音色。用“常用多音字与自定义词组”修正人名、地名。

Mac 另有 Qwen 0.6B Serena 测试模型，初始语速 1.25 倍，合成仍慢于实时，连续长篇可能等待。它是本机测试能力，不是实时朗读保证。

### 5. 语言、书签与设备同步
在“更多”的“语言”，或“字号与朗读设置”选择跟随系统、简体中文、繁體中文或 English；Mac 也有语言菜单。切换保留文稿、阅读位置和音色。通过阅读书签管理回看位置。

需要传文稿时主动打开附近设备同步，允许本地网络，在两端核对配对码并确认，再选择同步项目。只与可信设备配对；撤销信任不会删除已传出的文稿。也可用系统分享与导入。

### 6. 清理与版本边界
删除历史入口不一定删除原文件。Mac 清理缓存还可能永久删除所选范围内未保存到外部且不再被目录引用的私有未保存文稿；当前打开文稿保留。清理前确认需要保留的内容已另存。

本页以公开 0.3.2（8）为基准，截图仍为明确标注的 Mac 0.3.1。源码中的多标签、分屏、多窗口及手动保存工作区尚未包含在现有公开安装包中。[完整项目说明](https://github.com/ailifelab/InkEngine)。
`,ro=`## 简介

摄影师小助理把客户、拍摄订单和预约日程放在同一处，适合需要同时跟进多位客户与多次拍摄的独立摄影师和工作室。

### 从客户到拍摄安排
- 建立客户资料，记录联系方式、备注和关联订单。
- 在订单中整理拍摄内容、金额、定金尾款和图片附件。
- 用首页与日历查看试妆、试拍和正式拍摄安排。
- 查看订单统计；从图片中识别文字，辅助整理合同或需求。
- 通过天气与日出日落参考安排外景拍摄。

当前公开商店版本为 **1.1**，要求 iOS / iPadOS **17.3 或更新版本**。天气需要联网，预报与拍摄时段仅供安排参考。本站不承诺具体效率提升、用户数量或零延误。

## 详细使用说明

### 1. 先建立客户资料
打开客户管理，新建客户，填写实际需要的姓名、联系方式和备注。添加照片时使用系统选择器，只选择与工作相关的图片；处理客户信息前请取得适当授权。

### 2. 新建并安排订单
在订单入口新建记录，关联客户，填写拍摄风格、日期、金额、预约事项与备注。把试妆、试拍和正式拍摄时间分别核对后保存；修改日期后再检查日历，避免冲突。

### 3. 查看每日安排与天气
从首页和日历检查近期事项。天气功能可以请求当前位置，或使用你选择的地点。允许定位后会向 Apple 天气服务请求预报；拒绝定位仍可管理客户与订单。户外拍摄请同时留意实际天气变化。

### 4. 整理款项和图片
在订单中核对总额、定金与尾款；不要把拍摄日期已过当成付款凭证。查看统计时请对照原始收款记录。添加订单图片后，可使用文字识别辅助录入，识别结果需要人工核对。

### 5. 修改与删除
在对应客户或订单中维护资料，删除前确认不再需要。客户和订单是关联记录，清理时请检查相关资料。卸载会影响本机数据；系统备份和已分享副本需另行管理。没有在本站承诺云端同步或远程恢复。

### 版本说明
以上以当前商店 1.1 为基准。正在开发的 1.2 中三种主题、三语界面、返图任务及按实际收款统计等改进，**尚不作为当前公开版功能**。截图来自既有 App Store 页面，并非 1.2 界面。[查看 App Store 当前版本](https://apps.apple.com/app/id6746808768)。
`,io=`## 简介

山呼（RidgeCall）是 iPhone 与 iPad 上的附近沟通工具。与身边伙伴组建社群，按住讲话、松开停止，把临时沟通留在附近设备之间。

- 发现附近设备、邀请并批准加入；批准前可当面核对身份短码。
- 分享文字、照片和两秒无声短实况，并查看传输结果。
- 查看成员、静音接收声音、管理社群名称；创始管理员可移除成员。
- 提供前台“保持会话”界面，保留讲话和退出控件。

要求 **iOS / iPadOS 17 或更新版本**，各参与设备均需安装山呼。当前 **1.0 准备上架**，尚无经核实的公开下载入口。连接受距离、遮挡、设备及系统状态影响；山呼不替代紧急通信设备，不承诺固定距离或后台持续在线。

## 详细使用说明

### 1. 设置昵称
首次打开输入昵称，以便伙伴辨认。昵称和公开设备身份会参与附近发现，请避免使用不愿向附近人员展示的信息。

### 2. 开启附近连接
双方保持 Wi-Fi 和附近连接开启，并允许本地网络访问。初次排查建议先在同一 Wi-Fi 局域网、应用前台状态下测试。连接是否可用取决于环境，不把“无需云服务”理解为任何场景都能通信。

### 3. 邀请并核对身份
在附近设备中邀请伙伴，加入社群需要批准。当面将申请设备的身份短码与其设置中显示的短码核对一致，再批准；不要仅凭昵称信任设备。

### 4. 按住讲话
进入对讲，按需允许麦克风，按住讲话按钮发送语音，松开停止。静音控件用于关闭接收声音。保持应用在前台；“保持会话”不能保证锁屏或后台仍可连通。

### 5. 发送文字与媒体
从消息入口输入文字、选择照片，或使用相机拍摄照片及两秒无声短实况。系统照片选择器只提供你选中的内容；相机按需授权。发送后查看传输结果，避免把操作完成当成对方一定收到。

### 6. 退出与清理
在社群中查看成员，按权限调整名称或移除成员。可关闭附近连接、退出社群或在设置清除本机消息历史。退出社群清除已保存的社群凭据；接收方仍可能保存其副本，钥匙串设备身份也可能在卸载后保留。

### 当前截图与版本
图片为 1.0 发布配置在真实模拟器中的空状态和昵称界面，不虚构已连接伙伴，也不证明真实无线连接能力。下载入口在公开可用后再补充。
`,ao=`## 简介

本文由CODEX全自动编写。

WiFi 哨兵是借助 AI 开发的 Mac 菜单栏工具。Wi-Fi 看起来还连着、网页却打不开时，帮你区分连接与上网状况，减少反复打开系统菜单检查的操作。

- 分别检查 Wi-Fi 关联、局域网响应及两个外网目标。
- 展示检测结论、故障复核进度和自动／手动恢复次数。
- 默认 60 秒检测，可调整间隔和业务目标；异常日志支持详情、翻页及导出。
- 自动恢复每次启动默认关闭，确认后才按策略尝试；连续失败进入冷却。

公开版本 **0.1 / build 5.3**，仅有 **Apple Silicon（arm64）** 安装包，没有 Intel 安装包。最低编译目标 macOS 13；既有检查主机为 macOS 27.0.1，更早系统未实机验证。它不会增强无线信号，不保证恢复所有故障。

## 详细使用说明

### 1. 安装
[下载 DMG](https://github.com/ailifelab/WiFiSentinel/releases/download/v0.1-build5.3/WiFiSentinel-0.1-build5.3-macos-arm64.dmg) 与 [SHA-256 校验文件](https://github.com/ailifelab/WiFiSentinel/releases/download/v0.1-build5.3/WiFiSentinel-0.1-build5.3-macos-arm64.dmg.sha256)，核对后将应用拖入 Applications。正式包已经 Developer ID 签名及 Apple 公证，按系统首次打开提示核对来源即可。

### 2. 保持监测，先观察
从菜单栏双眼 Wi-Fi 图标打开“状态与操作”，查看结论及局域网、外网响应。关闭窗口仍可从菜单栏重新打开。保持自动恢复关闭时也能检测并查看异常。

### 3. 调整检测设置
在“检测设置”修改间隔或填写自定义业务地址，点击保存。默认访问 Apple 与 Cloudflare 检测目标；设置其他地址前确认可以接受向该地址周期请求。已保存网络名称与网关端口为可选项，普通使用可先留空。

读取当前网络名称可能需要 macOS 定位授权；应用不读取位置坐标或 Wi-Fi 密码。拒绝授权后按应用提示使用，部分网络核对与重联功能会受限。

### 4. 选择恢复方式
需要时勾选“允许本次启动自动恢复”并阅读确认；重新启动仍需再次确认。默认保守策略在局域网正常时，不会仅凭外网异常就自动关开 Wi-Fi。“上网异常循环恢复”可能在局域网正常而两个外网目标持续超时后触发，请先了解影响。

两种策略都至少需要三轮、持续 120 秒的符合条件故障；连续两次自动恢复验证失败后，冷却 30 分钟清醒时间。“检测并按策略处理”在自动恢复开启时也可能触发恢复；只观察时请关闭总开关。

手动“一键重联 Wi-Fi…”也会先确认。自动或手动恢复可能短暂关开 Wi-Fi，中断会议、下载、SSH 和 VPN。不能接受中断时只用监测。

### 5. 异常、更新与卸载
查看“异常日志”和“执行与权限”；分享导出诊断前删除 SSID、地址、用户名和私人路径。真实断网自动恢复、指定网络重联及 \`-3900\` 情况仍未充分验证，签名公证不代表网络恢复能力已通过。

更新或回滚前正常退出并保留旧应用；如重新开启 Wi-Fi 未确认，先到系统菜单处理。卸载前确认没有未完成恢复事务；本地设置与日志在 \`~/Library/Application Support/WiFiSentinel/\`，需要时在正常退出后自行备份或删除。

[完整使用说明](https://github.com/ailifelab/WiFiSentinel#怎么用) · [安装与回滚](https://github.com/ailifelab/WiFiSentinel/blob/main/docs/INSTALL.md) · [验证范围](https://github.com/ailifelab/WiFiSentinel/blob/main/docs/VALIDATION.md)。项目采用 MIT 许可。截图来自真实运行；截图中自动恢复开启，新启动仍默认关闭。
`,oo=`生效日期：2026 年 9 月 27 日。适用于合拍记 · FrameDir iOS / iPadOS 1.0。本政策依据合拍记项目中准备的 1.0 政策发布，由爱物工造维护。合拍记已在 App Store 上架，功能以实际发布版本为准。

本版本主要在设备本地处理数据。我们不运营接收项目、相机画面或语音的后台服务；App 不接入广告追踪或分析服务。

### 1. 在设备上处理的信息

- **项目与设备：** 项目名称、场景、机位配置、相机名称、蓝牙设备标识和最近使用的 Wi‑Fi 名称，用于恢复项目及连接设备。
- **画面与标记：** 相机通过局域网发送的实时视频及可能附带的音频用于监看。App 会在内存中短时缓存码流。添加标记时，App 将有画面的机位截图，以及标记前后的短片保存到本机；如果相机码流含音频，短片也可能含音频。标记可记录时间、机位、流时码或相机时间码。
- **AI 拾音：** 获得麦克风权限并启用此功能后，麦克风音频由 Apple 系统在设备上转写。App 不会将麦克风原始录音保存为音频文件，也不会上传到我们运营的服务器。识别出的文字可按设置保存为项目智记。设备可能需要从 Apple 下载本地语言识别资源。
- **Wi‑Fi 凭据：** 只有在你选择保存时，Wi‑Fi 密码才会以网络名称为索引存入本机 Keychain；项目数据库只保存网络名称。按你的操作连接受支持相机时，App 会通过本地相机连接发送所需的网络名称与密码，帮助相机加入所选网络。

### 2. 权限与用途

蓝牙用于发现和连接受支持的相机；本地网络用于接收 RTMP 或相机原生预览，并与相机交换连接命令；麦克风仅在启用 AI 拾音时用于转写；当前 Wi‑Fi 名称用于减少重复输入。你可以在系统设置中撤销权限，相应功能可能因此无法使用。

### 3. 分享与第三方

App 不会自动向我们或广告商上传上述本地内容。你主动使用系统分享功能时，导出的标记文件可能包含标记文字、时间、机位名称或 RTMP 地址。接收方如何处理副本，取决于你选择的邮件、隔空投送、云盘等服务及其政策。分享前请检查文件和接收方，尤其注意 RTMP 地址中可能含有推流密钥。

开源相机协议组件用于本机连接，不因这些组件而建立向我们运营服务器上传用户内容的通道。Apple 的系统服务、App Store 与系统备份依据 Apple 的政策运行。

### 4. 保存、删除与安全

项目、设备记录、转写文字和标记媒体保存在 App 本地存储中，不设自动到期日。你可以在 App 内删除标记、智记或已保存设备；删除标记时，关联的截图和短片会一并删除。卸载 App 可移除其应用数据；已导出的副本与系统备份需要在相应位置另行管理。

选择保存的 Wi‑Fi 密码由 iOS Keychain 保护，不写入项目文件。你可以在相机连接页关闭对应网络的密码保存选项；下次按该设置连接时，App 会删除对应的 Keychain 条目。不要仅依赖卸载 App 清理 Keychain 密码。

### 5. 联系与更新

关于本政策、设备本地数据或删除方式的问题，请邮件联系 [sherardchina@gmail.com](mailto:sherardchina@gmail.com)。未来版本若新增云服务、分析功能或其他数据处理，我们会更新本政策和商店隐私申报，并在适用时提供选择或征求同意。
`,so=`版本：2026-10-15。适用于墨语引擎 Ink Engine 当前离线版本。运营与支持：AILife Lab。隐私与技术支持邮箱：sherardchina@gmail.com。

## 本机处理

应用无需注册账号。文稿、目录索引、阅读位置、书签、编辑历史、纠音规则、声音设置和生成的音频保存在设备本地。Mac 可以编辑你通过系统选择器授权的原文件；手机和平板可以导入文稿并管理本机副本。内置 ZipVoice 及 Mac 的 Qwen 模型均在本机合成语音，不将正文上传到我们或第三方语音服务器。系统语音由 Apple 的系统服务提供，音色的下载和系统服务行为受 Apple 政策及系统设置管理。

## 附近设备同步

只有使用附近设备功能时，应用才会在本地网络发现设备、建立连接并传输所选内容；已经记住配对的设备可能在启动或回到前台时重新发现。发现信息包含设备名称和本应用生成的随机设备标识片段，附近局域网参与者可能看到这些信息。连接双方核对配对码并确认后，文稿及所选同步项目中包含的目录、阅读进度等数据会加密传给目标设备，不经过我们的中转服务器。请仅与可信设备配对。

选择记住配对后，应用在本机偏好中保存设备标识、受信任设备名称和公钥关联，并在系统钥匙串中保存本应用的配对私钥。撤销设备信任后，后续连接需要重新配对；钥匙串可能保留旧密钥记录，不能将卸载或撤销信任理解为已清除全部钥匙串记录。撤销信任也不会删除已经传给另一台设备的文稿。

## 权限与外部服务

局域网权限用于发现和连接附近设备；拒绝该权限不影响本机编辑、阅读和内置离线声音。文件访问由系统选择器和沙盒授权控制。应用不申请麦克风、相机、定位、通讯录或广告跟踪权限，没有广告、跨应用跟踪、分析埋点或第三方崩溃上报 SDK。

主动选择系统分享、外部浏览器预览、打开网站或发送支持邮件时，信息会交给你选择的应用或服务。你选择的云盘文件提供器、操作系统备份、Apple 诊断或商店服务可能按其自身政策处理数据；应用未自建云端备份服务。访问官网或 GitHub 会使对应网站接收正常网页请求信息，与本机离线朗读是不同场景。

## 保留、删除与控制

本机文稿和阅读数据为实现功能而保留，直到你在应用或系统文件管理工具中删除。缓存与书签管理提供相应清理操作；删除历史入口记录、生成音频缓存或应用内离线副本，不一定删除 Mac 原文件、导出文件、系统备份或另一设备副本。卸载 iPhone / iPad 应用通常会删除其本机容器数据，钥匙串及备份可能由系统另行保留。重要文稿请自行备份。
Mac 清理缓存时，会一并永久删除所选范围内已移出历史、未保存为外部文件且未被目录引用的私有未保存文稿及其书签、旧版本、阅读位置和朗读缓存；当前打开的文稿会保留。

我们不持有你的本机文稿，无法代为读取或远程删除。需要隐私支持时，请联系上述邮箱；不要发送文稿全文、密钥、证书或其他敏感材料。主动发送邮件时，你的邮箱和自愿提供的信息由邮件服务处理，我们仅用其处理请求，并在处理完成后按实际需要保留或删除相关通信；你可请求删除可由我们控制的支持通信，但法律要求保留的记录除外。

## 未成年人和政策更新

本应用是通用文稿工具，不设公共内容社区，也不主动索取年龄或未成年人信息。未成年人应在监护人指导下管理文稿及分享对象。若未来新增云端语音、账号或数据收集，会在启用前更新政策和商店申报，并按适用要求告知及取得授权。当前版本不自动调用云端语音。
`,co=`版本、生效及更新日期：2026-10-23。发布与支持：AILife Lab。适用摄影师小助理现有客户、订单、附件、定位与天气功能。

### 1. 本机业务资料
你输入的客户姓名、联系方式、备注、订单、预约、金额及选择的图片用于客户与拍摄工作管理。业务数据库及图片保存在设备本机。应用不提供开发者账户或自建云端业务存储，不向我们运营的服务器自动上传客户、订单或附件。

### 2. 定位、地图和天气会联网
天气功能使用 Apple WeatherKit；当前位置授权用于获取天气地点，手选地点也可用于天气请求。地点坐标会交给 Apple 提供天气，地名查询及地图显示也可能向 Apple 系统服务发出请求。这些功能并非完全离线，Apple 可能接收请求所需的地点、来源网络地址和技术信息，处理受 [Apple 隐私政策](https://www.apple.com/legal/privacy/)约束。

你可以在系统设置撤销定位权限；客户和订单管理不依赖定位。天气页面中的预报不代表本站在后台持续追踪你的行程。

### 3. 图片与文字识别
系统照片选择器提供你主动选择的图片，用于客户或订单附件。图片文字识别使用设备上的 Apple Vision；结果需要你核对后使用。相机或保存照片等入口如触发系统权限提示，由你决定是否允许；拒绝会影响对应功能，不影响已录入文字资料。

### 4. 第三方与支持通信
应用未接入广告追踪、第三方分析或第三方社交登录 SDK。Apple 的天气、地图、系统备份、商店和诊断受其各自政策与系统设置管理。主动分享内容时，由所选接收方或服务处理副本。

向 [sherardchina@gmail.com](mailto:sherardchina@gmail.com) 发送邮件时，我们会收到邮箱和你自愿提供的内容，用于处理请求。请勿附上未获授权的客户资料、合同或完整订单数据库。

### 5. 保存、删除与安全
本机资料为实现管理功能而保存，直至你通过应用或系统删除。删除相关记录时请检查关联附件；卸载应用通常移除应用容器数据，系统备份、照片库中原件和已导出副本不会因此一并删除。我们不持有本机数据库，无法替你远程恢复或删除。

请使用设备锁屏与系统安全更新保护资料。你可请求处理我们控制范围内的支持邮件，法律要求保留的记录除外。请勿把其他客户的敏感资料发送给无关接收方。

### 6. 旧版政策与更新
本页替换本站此前收录的通用生成器条款，移除与应用不符的账户、社交登录和笼统使用数据收集描述。旧商店配置可能仍指向[历史政策](https://www.freeprivacypolicy.com/live/ce9f9694-9e91-481b-8272-6694e4850398)；网站更新不会自动修改商店配置。商店的“不收集数据”标签也不表示天气和地图从不联网。

应用不是面向儿童的资料分享社区。监护人应指导未成年人管理个人及客户信息。数据处理方式改变时会更新本政策，并按适用要求告知和取得授权。隐私及支持联系邮箱同上。
`,lo=`版本：1.0。原政策生效日期：2026-10-08。本次说明整理：2026-10-23。发布与支持：AILife Lab。联系：[sherardchina@gmail.com](mailto:sherardchina@gmail.com)。

### 1. 本地通信及接收方
山呼无需账号，不设开发者运营的通信服务器，不含广告、分析或追踪 SDK。开发者不会通过应用接收对话、照片、视频或设备身份。

开启附近连接后，你的昵称和公开设备身份与附近设备共享，用于发现和认证。获准加入的成员接收社群信息，以及你发送的语音、文字、照片或无声短实况。设备也可能为其他成员中继加密通信。

### 2. 权限与选择
麦克风用于按住讲话时发送对讲语音，不保存录音。相机仅用于主动拍摄媒体；系统照片选择器仅提供你选择的内容。本地网络用于发现及连接附近设备。你可关闭附近连接或在系统设置撤销权限，对应功能将受影响。

### 3. 保存与删除
偏好保存在本机；身份密钥与已保存社群凭据存于钥匙串。本地重放防护数据库保存数据包标识，用于拒绝重复通信。消息历史采用有容量上限的内存缓存，可在设置清除。媒体预览和准备可能使用临时文件，用后移除。

退出社群清除其已保存凭据；卸载不保证清除钥匙串中的设备身份。清除本机历史不会删除其他成员设备上的副本。系统备份、主动分享的副本及 Apple 系统服务由相应系统或服务管理。

### 4. 安全边界
通信采用经过身份认证的加密链路与加密社群消息。批准前请当面核对身份短码。接收方可以查看和复制收到的内容；加密不阻止接收方另行保存，不保证设备丢失或被控制后的安全。

### 5. 支持、未成年人及更新
主动发邮件时，你的邮箱及自愿提供的信息用于处理该请求。请勿发送对话内容、身份密钥或社群凭据；可请求删除我们控制范围内的支持通信，法律要求保留的记录除外。

本应用不是面向儿童的公共内容社区；未成年人应在监护人指导下管理分享对象。数据处理改变时会更新应用说明、网站政策及商店隐私信息，并按适用要求告知与取得授权。
`,uo=`版本、生效与更新日期：2026-10-23。适用于 WiFi 哨兵 0.1 / build 5.3。维护与支持：AILife Lab。本文由CODEX全自动编写。

### 1. 本地设置与诊断
设置、事件、运行快照及恢复策略状态保存在本机用户目录 \`~/Library/Application Support/WiFiSentinel/\`。网络名称可能以明文出现；诊断也可能包含网关、接口、地址派生摘要、权限、故障、次数和时间。摘要或哈希仍可能被猜测、关联，不保证匿名。

应用不把本地观察日志自动上传到维护者服务，不读取 Wi-Fi 密码、私钥或位置坐标。

### 2. 检测会发送网络请求
默认业务探测向以下公开目标发送有界请求：
- \`https://www.apple.com/library/test/success.html\`
- \`https://www.cloudflare.com/cdn-cgi/trace\`

你可设置其他业务目标。目标服务、网络中间设备及 VPN 提供方可能观察来源地址、时间与连接特征；这不是完全离线的监测。外部服务如何保存请求信息受其自身政策管理，见 [Apple](https://www.apple.com/legal/privacy/) 与 [Cloudflare](https://www.cloudflare.com/privacypolicy/)。本地网络检测也会与所检测网络设备通信。

### 3. 系统权限与控制
读取实际 Wi-Fi 名称可能需要系统定位授权，该授权用于网络信息读取，不代表应用采集位置坐标。你可以拒绝或在 macOS 设置撤销；部分网络核对功能可能不可用。应用不安装特权后台服务，签名公证不会自动授予权限。

自动恢复每次启动默认关闭，按本次确认才启用。恢复可能关开 Wi-Fi，影响当前连接；你可只用监测或正常退出应用停止检测。

### 4. 保存、导出与删除
设置和诊断在本地用于检测、排错与恢复状态判断，异常日志有容量上限。卸载应用不自动清除上述用户目录。请先正常退出并确认没有未完成的 Wi-Fi 恢复事务，再自行备份或删除目录；删除也会清除设置与冷却记录。

你主动导出或提交诊断时，接收方会获得该文件。提交前删除 SSID、地址、用户名、主机名、私人路径等信息；不要在公开 Issue 粘贴完整设置或原始快照。系统备份、已导出文件及接收方副本需分别管理。

### 5. 支持与更新
访问 GitHub、官网或发送支持邮件，会向相应网站或邮件服务提供正常请求信息。发送至 [sherardchina@gmail.com](mailto:sherardchina@gmail.com) 的邮箱及自愿提供的信息用于处理请求；可请求删除我们可控制的支持通信，法律要求保留的记录除外。

本应用是网络工具，不主动索取年龄或儿童资料。若处理方式改变，会更新本说明并按适用要求告知和取得授权。本说明不保证任何网络环境或接收方的绝对安全。
`,fo=Object.assign({"../../content/products/framedir/description.md":to,"../../content/products/inkengine/description.md":no,"../../content/products/photographer-assistant/description.md":ro,"../../content/products/ridgecall/description.md":io,"../../content/products/wifisentinel/description.md":ao}),po=Object.assign({"../../content/products/framedir/privacy.md":oo,"../../content/products/inkengine/privacy.md":so,"../../content/products/photographer-assistant/privacy.md":co,"../../content/products/ridgecall/privacy.md":lo,"../../content/products/wifisentinel/privacy.md":uo}),mo=Object.assign({}),ho=Object.assign({});function go(e,t,n){let r=Object.entries(e).find(([e])=>e.endsWith(`/products/${t}/${n}`));if(!r||!r[1].trim())throw Error(`Missing or empty content/products/${t}/${n}`);return r[1]}o.map(e=>({product:e,description:go(fo,e.slug,`description.md`),privacy:e.privacyStatus===`draft`?null:go(po,e.slug,`privacy.md`)}));var _o=Object.entries(mo).map(([e,t])=>{let n=e.match(/\/notes\/([a-z0-9-]+)\/article\.md$/)?.[1];if(!n)throw Error(`Invalid note filename: ${e}`);let r=t.match(/^# (.+)\r?\n/)?.[1]?.trim();if(!r)throw Error(`content/notes/${n}/article.md must begin with a # title`);let i=Object.entries(ho).find(([e])=>e.endsWith(`/notes/${n}/note.json`))?.[1];if(!i)throw Error(`Missing content/notes/${n}/note.json`);return{slug:n,title:r,...i,body:t.replace(/^# .+\r?\n/,``).trim()}}).sort((e,t)=>(t.publishedAt??``).localeCompare(e.publishedAt??``)||e.slug.localeCompare(t.slug)),vo={contactUrl:`mailto:sherardchina@gmail.com`,contactLabel:`sherardchina@gmail.com`},yo={name:`FrameDir`,tagline:`Watch multiple cameras. Keep the moments that matter.`,summary:`Monitor up to four camera feeds per project, save marked stills and short clips, and turn speech into on-device notes.`,category:`On-set monitoring`,statusLabel:`Available · 1.0`,screenshotAlts:[`Actual development-build iPhone simulator screen: demonstration project library`,`Actual development-build iPad simulator screen: four-camera monitor with sample footage`],verifiedAt:`2026-10-23`,privacyReviewed:!0},bo={name:`合拍记`,tagline:`多机位一起看，关键时刻随手记。`,summary:`围绕拍摄项目监看最多四路画面，保存标记截图与短片，用本机语音转写整理现场笔记。`,category:`拍摄现场工具`,statusLabel:`已上架 · 1.0`,screenshotAlts:[`开发版真实 iPhone 模拟器界面：演示项目库`,`开发版真实 iPad 模拟器界面：四机位监看，画面为示例素材`],verifiedAt:`2026-10-23`,privacyReviewed:!0},xo={name:`合拍記`,tagline:`多機位一起看，關鍵時刻隨手記。`,summary:`圍繞拍攝專案監看最多四路畫面，儲存標記截圖與短片，用本機語音轉寫整理現場筆記。`,category:`拍攝現場工具`,statusLabel:`已上架 · 1.0`,screenshotAlts:[`開發版真實 iPhone 模擬器介面：演示專案庫`,`開發版真實 iPad 模擬器介面：四機位監看，畫面為示例素材`],verifiedAt:`2026-10-23`,privacyReviewed:!0},So={name:`Ink Engine`,tagline:`Write it down. Listen to it back.`,summary:`Edit on Mac, read on iPhone and iPad, and use local voices to spot repetition and awkward passages.`,category:`Writing and listening review`,statusLabel:`Open-source testing · 0.3.2 (8)`,screenshotAlts:[`Actual Mac 0.3.1 editor: public sample document, chapters and line numbers`,`Actual Mac 0.3.1 reader: public sample document and speech controls`,`Actual Mac 0.3.1 voice settings: ZipVoice with Dylan`],verifiedAt:`2026-10-23`,privacyReviewed:!0},Co={name:`墨语引擎`,tagline:`把写下来的文字，读给自己听。`,summary:`在 Mac 上编辑，在 iPhone 和 iPad 上阅读，用本地声音听出长句、重复和不顺口的地方。`,category:`文稿编辑与听读校稿`,statusLabel:`开源测试 · 0.3.2（8）`,screenshotAlts:[`Mac 0.3.1 真实编辑界面：公开示例文稿、章节和行号`,`Mac 0.3.1 真实阅读界面：公开示例文稿与朗读控制`,`Mac 0.3.1 真实声音设置：ZipVoice 模型与 Dylan 男声`],verifiedAt:`2026-10-23`,privacyReviewed:!0},wo={name:`墨語引擎`,tagline:`把寫下來的文字，讀給自己聽。`,summary:`在 Mac 上編輯，在 iPhone 和 iPad 上閱讀，用本地聲音聽出長句、重複和不順口的地方。`,category:`文稿編輯與聽讀校稿`,statusLabel:`開源測試 · 0.3.2（8）`,screenshotAlts:[`Mac 0.3.1 真實編輯介面：公開示例文稿、章節和行號`,`Mac 0.3.1 真實閱讀介面：公開示例文稿與朗讀控制`,`Mac 0.3.1 真實聲音設定：ZipVoice 模型與 Dylan 男聲`],verifiedAt:`2026-10-23`,privacyReviewed:!0},To={name:`摄影师小助理`,tagline:`Keep clients, bookings and shoot schedules together.`,summary:`Organize client details, photography orders, appointments, deposits, balances and image attachments in one place.`,category:`Photography workflow`,statusLabel:`Available · 1.1`,screenshotAlts:[`Actual App Store screen: daily tasks, weather and shooting times`,`Actual App Store screen: adding an order and appointments`],verifiedAt:`2026-10-23`,privacyReviewed:!0},Eo={name:`摄影师小助理`,tagline:`把客户、订单与拍摄日程收在一起。`,summary:`面向独立摄影师与工作室，集中管理客户、拍摄订单、预约、定金尾款及图片附件。`,category:`摄影工作管理`,statusLabel:`已发布 · 1.1`,screenshotAlts:[`App Store 真实界面：今日任务、天气与拍摄时段`,`App Store 真实界面：添加订单与预约安排`],verifiedAt:`2026-10-23`,privacyReviewed:!0},Do={name:`攝影師小助理`,tagline:`把客戶、訂單與拍攝日程收在一起。`,summary:`面向獨立攝影師與工作室，集中管理客戶、拍攝訂單、預約、定金尾款及圖片附件。`,category:`攝影工作管理`,statusLabel:`已釋出 · 1.1`,screenshotAlts:[`App Store 真實介面：今日任務、天氣與拍攝時段`,`App Store 真實介面：新增訂單與預約安排`],verifiedAt:`2026-10-23`,privacyReviewed:!0},Oo={name:`RidgeCall`,tagline:`Team up nearby. Hold to talk.`,summary:`Create an approved nearby community and share voice, text, photos and two-second silent clips without an account.`,category:`Nearby communication`,statusLabel:`Preparing for release · 1.0`,screenshotAlts:[`Actual 1.0 release-configuration simulator screen: intercom before joining a community`,`Actual 1.0 release-configuration simulator screen: initial nickname setup`],verifiedAt:`2026-10-23`,privacyReviewed:!0},ko={name:`山呼`,tagline:`附近组队，按住讲话。`,summary:`与身边伙伴建立经批准加入的社群，发送语音、文字、照片和两秒无声短实况，无需注册账号。`,category:`附近沟通工具`,statusLabel:`准备上架 · 1.0`,screenshotAlts:[`1.0 发布配置真实模拟器界面：未加入社群的对讲主屏`,`1.0 发布配置真实模拟器界面：首次设置昵称`],verifiedAt:`2026-10-23`,privacyReviewed:!0},Ao={name:`山呼`,tagline:`附近組隊，按住講話。`,summary:`與身邊夥伴建立經批准加入的社群，傳送語音、文字、照片和兩秒無聲短實況，無需註冊賬號。`,category:`附近溝通工具`,statusLabel:`準備上架 · 1.0`,screenshotAlts:[`1.0 釋出配置真實模擬器介面：未加入社群的對講主屏`,`1.0 釋出配置真實模擬器介面：首次設定暱稱`],verifiedAt:`2026-10-23`,privacyReviewed:!0},jo={name:`WiFiSentinel`,tagline:`Keep an eye on Wi-Fi from the menu bar.`,summary:`Check Wi-Fi association, local connectivity and external responses, then attempt recovery only after you confirm the risks.`,category:`Network utility`,statusLabel:`Available · 0.1 / build 5.3`,screenshotAlts:[`Actual status window: healthy network and zero recoveries; auto recovery is enabled in this image but off on each new launch`,`Actual settings: interval, probe targets and optional saved network`],verifiedAt:`2026-10-23`,privacyReviewed:!0},Mo={name:`WiFi 哨兵`,tagline:`在菜单栏，留意你的 Wi-Fi。`,summary:`定期区分 Wi-Fi 连接、局域网和外网响应，在你确认风险后按条件尝试恢复。`,category:`网络连接工具`,statusLabel:`已发布 · 0.1 / build 5.3`,screenshotAlts:[`真实状态窗口：检测正常、恢复次数为零；图中自动恢复已开启，新启动默认关闭`,`真实检测设置：间隔、业务目标与可选已保存网络`],verifiedAt:`2026-10-23`,privacyReviewed:!0},No={name:`WiFi 哨兵`,tagline:`在選單欄，留意你的 Wi-Fi。`,summary:`定期區分 Wi-Fi 連線、區域網和外網響應，在你確認風險後按條件嘗試恢復。`,category:`網路連線工具`,statusLabel:`已釋出 · 0.1 / build 5.3`,screenshotAlts:[`真實狀態視窗：檢測正常、恢復次數為零；圖中自動恢復已開啟，新啟動預設關閉`,`真實檢測設定：間隔、業務目標與可選已儲存網路`],verifiedAt:`2026-10-23`,privacyReviewed:!0},Po=`### 1. Create a project and camera positions
Create a project and give it a name. Add positions to match the set, starting with a small number to confirm the feeds before adding up to four. Use recognizable position names.

### 2. Connect video
Put the phone, tablet and cameras on a network where they can communicate. Configure an RTMP source manually or use the supported-camera connection flow. Allow local-network access; camera discovery or connection may also use Bluetooth. Support for one model does not imply every camera from the manufacturer is supported.

Check RTMP addresses and stream settings. Addresses may contain stream keys: do not publicly share them or screenshots exposing them. If video is missing, check the network, camera output and app permissions first.

### 3. Monitor and mark
Switch between a single feed and the grid. Tap Mark at an important moment to save stills and short clips from positions receiving video. Clips depend on received streams and short-term buffering. They are not a full continuous recording and cannot restore video that was never received.

### 4. Use speech notes
Enable speech notes when needed and allow microphone access. Apple's system services transcribe on the device; local language resources may need downloading first. Recognized text can be saved as project notes according to your settings. Review recognition in noisy environments.

### 5. Review, share and clean up
Browse marks, stills and clips in the project timeline. Before exporting, check camera names, set information and RTMP addresses for sensitive details. Deleting a mark also deletes its associated stills and clips. Manage exported copies separately.

### Screenshots
Images are actual development-build iPhone / iPad simulator captures. Projects and stage footage are purpose-made examples, not client records or proof of compatibility with every camera. [Check the App Store release](https://apps.apple.com/app/id6816482500).
`,Fo=`FrameDir is an independent multi-camera monitoring and moment-logging tool for iPhone and iPad. Keep camera positions, feeds, marks and on-set notes organized by project.

- Organize up to four camera positions and switch between a single view and a grid.
- Configure standard RTMP sources manually, or connect and preview supported cameras in the app.
- Tap Mark to save stills and short clips around that moment from positions receiving video.
- Revisit marks on a timeline and use on-device speech transcription for project notes.

Public version **1.0** requires **iOS / iPadOS 26 or later**. Compatibility and quality depend on camera model, firmware, device and local network. FrameDir is independently developed and is not affiliated with, sponsored by or endorsed by camera manufacturers.
`,Io=`Effective September 27, 2026. This policy applies to FrameDir for iOS / iPadOS version 1.0 and is maintained by AILife Lab. FrameDir is available on the App Store; features depend on the published version.

This version primarily processes data on your device. We do not operate a backend that receives projects, camera footage, or speech. The app does not include advertising trackers or analytics services.

### 1. Information processed on your device

- **Projects and devices:** Project names, scene details, camera slots, camera names, Bluetooth device identifiers, and recently used Wi‑Fi names help restore projects and reconnect devices.
- **Video and marks:** Local camera streams, which may include audio, are shown for monitoring and briefly buffered in memory. When you add a mark, the app saves a still and short clips from camera slots with live video. A clip may include audio from the camera stream. Marks may store time, camera slot, and available stream or camera timecode.
- **Speech notes:** With microphone permission and the feature enabled, Apple system services transcribe microphone audio on the device. The app does not save raw microphone recording as an audio file or upload it to a server we operate. Recognized text may be saved as a project note according to your settings. The device may download a local language resource from Apple.
- **Wi‑Fi credentials:** A password is stored in the device Keychain only if you choose to save it. The project database stores the network name, not the password. When you connect a supported camera, the app sends the required network name and password to that camera over a local connection at your direction.

### 2. Permissions

Bluetooth discovers and connects supported cameras. Local-network access receives RTMP or native camera previews and exchanges connection commands. The microphone is used only when you enable speech notes. The current Wi‑Fi name reduces repeated entry. You may revoke permissions in system settings, although related features may stop working.

### 3. Sharing and third parties

The app does not automatically upload local content to us or advertisers. If you choose to export and share a mark file, it may include note text, timestamps, camera names, or RTMP addresses. Your chosen recipient or service handles the exported copy under its own terms. Review the file and destination before sharing, especially if an RTMP address contains a stream key.

Open-source camera protocol components support local camera connections; they do not create a channel for uploading your content to a server we operate. Apple's system services, App Store, and device backups operate under Apple's policies.

### 4. Retention, deletion, and security

Local projects, device records, transcripts, and mark media have no automatic expiry. You can delete marks, speech notes, and saved devices in the app. Deleting a mark also removes its associated still and clip files. Uninstalling the app removes its app data, but exported copies and system backups must be managed where they are stored.

Opt-in Wi‑Fi passwords are protected by the iOS Keychain, not stored in project files. Turning off the save option for that network and connecting with that choice removes the corresponding Keychain entry. Do not rely on app uninstallation alone to clear Keychain entries.

### 5. Contact and changes

For questions about this policy or local-data deletion, email [sherardchina@gmail.com](mailto:sherardchina@gmail.com). If a future release introduces cloud services, analytics, or other data handling, we will update this policy and App Store privacy disclosures and provide choices or seek consent where applicable.
`,Lo=`### 1. 创建项目与机位
新建拍摄项目，填写名称，并按实际现场添加机位。先用少量机位确认画面，再增加到最多四路；为各机位设置容易辨认的名称。

### 2. 接入画面
让手机、平板和相机处于可通信的网络。按来源选择手动 RTMP 配置，或使用支持相机的连接入口。允许本地网络访问；相机发现或连接按需使用蓝牙。不要把某一厂商所有型号都理解为已支持。

配置 RTMP 时核对地址和推流参数。地址中可能带有推流密钥，请勿公开截图或分享完整地址。网络不通时，先核对设备连接、相机输出和应用权限。

### 3. 监看与标记
在单画面与多画面之间切换。出现关键动作时点击标记；应用对有画面的机位保存截图及短片。片段依赖实际收到的流与短时缓存，不等于完整连续录像，也不保证在无信号时补回画面。

### 4. 开启现场语音转写
需要智记时才启用 AI 拾音并授予麦克风权限。Apple 系统在设备本地转写；首次可能需要下载语言资源。转写文字可按设置保存为项目笔记，嘈杂环境下请复核识别结果。

### 5. 回看、分享与清理
从项目时间线查看标记、截图和短片，核对时间与机位。分享前检查导出内容是否包含机位名、现场信息或带密钥的 RTMP 地址。删除标记会删除其关联截图和短片；导出副本需要另行管理。

### 截图说明
本站截图来自开发版本的真实 iPhone / iPad 模拟器，项目与舞台画面为专门制作的演示素材，不代表客户记录或所有相机的兼容性验收。[在 App Store 查看当前版本](https://apps.apple.com/app/id6816482500)。
`,Ro=`合拍记（FrameDir）是 iPhone 与 iPad 上的独立多机位监看与关键时刻记录工具。把机位、画面、标记和现场笔记归到同一个项目，方便回看拍摄中值得保留的瞬间。

- 每个项目组织最多四个机位，切换单画面和多画面监看。
- 手动配置标准 RTMP 来源；受支持的相机可在应用内连接与预览。
- 点按标记，保存正在出画面的机位截图，以及该时刻前后的短片。
- 用时间线回看标记；通过设备本地语音转写整理项目智记。

公开版本 **1.0**，要求 **iOS / iPadOS 26 或更新版本**。相机兼容性及画质取决于型号、固件、设备与局域网；本产品独立开发，不隶属于相机厂商，也未获其背书。
`,zo=`生效日期：2026 年 9 月 27 日。适用于合拍记 · FrameDir iOS / iPadOS 1.0。本政策依据合拍记项目中准备的 1.0 政策发布，由爱物工造维护。合拍记已在 App Store 上架，功能以实际发布版本为准。

本版本主要在设备本地处理数据。我们不运营接收项目、相机画面或语音的后台服务；App 不接入广告追踪或分析服务。

### 1. 在设备上处理的信息

- **项目与设备：** 项目名称、场景、机位配置、相机名称、蓝牙设备标识和最近使用的 Wi‑Fi 名称，用于恢复项目及连接设备。
- **画面与标记：** 相机通过局域网发送的实时视频及可能附带的音频用于监看。App 会在内存中短时缓存码流。添加标记时，App 将有画面的机位截图，以及标记前后的短片保存到本机；如果相机码流含音频，短片也可能含音频。标记可记录时间、机位、流时码或相机时间码。
- **AI 拾音：** 获得麦克风权限并启用此功能后，麦克风音频由 Apple 系统在设备上转写。App 不会将麦克风原始录音保存为音频文件，也不会上传到我们运营的服务器。识别出的文字可按设置保存为项目智记。设备可能需要从 Apple 下载本地语言识别资源。
- **Wi‑Fi 凭据：** 只有在你选择保存时，Wi‑Fi 密码才会以网络名称为索引存入本机 Keychain；项目数据库只保存网络名称。按你的操作连接受支持相机时，App 会通过本地相机连接发送所需的网络名称与密码，帮助相机加入所选网络。

### 2. 权限与用途

蓝牙用于发现和连接受支持的相机；本地网络用于接收 RTMP 或相机原生预览，并与相机交换连接命令；麦克风仅在启用 AI 拾音时用于转写；当前 Wi‑Fi 名称用于减少重复输入。你可以在系统设置中撤销权限，相应功能可能因此无法使用。

### 3. 分享与第三方

App 不会自动向我们或广告商上传上述本地内容。你主动使用系统分享功能时，导出的标记文件可能包含标记文字、时间、机位名称或 RTMP 地址。接收方如何处理副本，取决于你选择的邮件、隔空投送、云盘等服务及其政策。分享前请检查文件和接收方，尤其注意 RTMP 地址中可能含有推流密钥。

开源相机协议组件用于本机连接，不因这些组件而建立向我们运营服务器上传用户内容的通道。Apple 的系统服务、App Store 与系统备份依据 Apple 的政策运行。

### 4. 保存、删除与安全

项目、设备记录、转写文字和标记媒体保存在 App 本地存储中，不设自动到期日。你可以在 App 内删除标记、智记或已保存设备；删除标记时，关联的截图和短片会一并删除。卸载 App 可移除其应用数据；已导出的副本与系统备份需要在相应位置另行管理。

选择保存的 Wi‑Fi 密码由 iOS Keychain 保护，不写入项目文件。你可以在相机连接页关闭对应网络的密码保存选项；下次按该设置连接时，App 会删除对应的 Keychain 条目。不要仅依赖卸载 App 清理 Keychain 密码。

### 5. 联系与更新

关于本政策、设备本地数据或删除方式的问题，请邮件联系 [sherardchina@gmail.com](mailto:sherardchina@gmail.com)。未来版本若新增云服务、分析功能或其他数据处理，我们会更新本政策和商店隐私申报，并在适用时提供选择或征求同意。
`,Bo=`### 1. 建立專案與機位
新建拍攝專案，填寫名稱，並按實際現場新增機位。先用少量機位確認畫面，再增加到最多四路；為各機位設定容易辨認的名稱。

### 2. 接入畫面
讓手機、平板和相機處於可通訊的網路。按來源選擇手動 RTMP 配置，或使用支援相機的連線入口。允許本地網路訪問；相機發現或連線按需使用藍芽。不要把某一廠商所有型號都理解為已支援。

配置 RTMP 時核對地址和推流引數。地址中可能帶有推流金鑰，請勿公開截圖或分享完整地址。網路不通時，先核對裝置連線、相機輸出和應用許可權。

### 3. 監看與標記
在單畫面與多畫面之間切換。出現關鍵動作時點選標記；應用對有畫面的機位儲存截圖及短片。片段依賴實際收到的流與短時快取，不等於完整連續錄影，也不保證在無訊號時補回畫面。

### 4. 開啟現場語音轉寫
需要智記時才啟用 AI 拾音並授予麥克風許可權。Apple 系統在裝置本地轉寫；首次可能需要下載語言資源。轉寫文字可按設定儲存為專案筆記，嘈雜環境下請複核識別結果。

### 5. 回看、分享與清理
從專案時間線檢視標記、截圖和短片，核對時間與機位。分享前檢查匯出內容是否包含機位名、現場資訊或帶金鑰的 RTMP 地址。刪除標記會刪除其關聯截圖和短片；匯出副本需要另行管理。

### 截圖說明
本站截圖來自開發版本的真實 iPhone / iPad 模擬器，專案與舞臺畫面為專門製作的演示素材，不代表客戶記錄或所有相機的相容性驗收。[在 App Store 檢視當前版本](https://apps.apple.com/app/id6816482500)。
`,Vo=`合拍記（FrameDir）是 iPhone 與 iPad 上的獨立多機位監看與關鍵時刻記錄工具。把機位、畫面、標記和現場筆記歸到同一個專案，方便回看拍攝中值得保留的瞬間。

- 每個專案組織最多四個機位，切換單畫面和多畫面監看。
- 手動配置標準 RTMP 來源；受支援的相機可在應用內連線與預覽。
- 點按標記，儲存正在出畫面的機位截圖，以及該時刻前後的短片。
- 用時間線回看標記；透過裝置本地語音轉寫整理專案智記。

公開版本 **1.0**，要求 **iOS / iPadOS 26 或更新版本**。相機相容性及畫質取決於型號、韌體、裝置與區域網；本產品獨立開發，不隸屬於相機廠商，也未獲其背書。
`,Ho=`生效日期：2026 年 9 月 27 日。適用於合拍記 · FrameDir iOS / iPadOS 1.0。本政策依據合拍記專案中準備的 1.0 政策釋出，由愛物工造維護。合拍記已在 App Store 上架，功能以實際釋出版本為準。

本版本主要在裝置本地處理資料。我們不運營接收專案、相機畫面或語音的後臺服務；App 不接入廣告追蹤或分析服務。

### 1. 在裝置上處理的資訊

- **專案與裝置：** 專案名稱、場景、機位配置、相機名稱、藍芽裝置標識和最近使用的 Wi‑Fi 名稱，用於恢復專案及連線裝置。
- **畫面與標記：** 相機透過區域網傳送的實時影片及可能附帶的音訊用於監看。App 會在記憶體中短時快取碼流。新增標記時，App 將有畫面的機位截圖，以及標記前後的短片儲存到本機；如果相機碼流含音訊，短片也可能含音訊。標記可記錄時間、機位、流時碼或相機時間碼。
- **AI 拾音：** 獲得麥克風許可權並啟用此功能後，麥克風音訊由 Apple 系統在裝置上轉寫。App 不會將麥克風原始錄音儲存為音訊檔案，也不會上傳到我們運營的伺服器。識別出的文字可按設定儲存為專案智記。裝置可能需要從 Apple 下載本地語言識別資源。
- **Wi‑Fi 憑據：** 只有在你選擇儲存時，Wi‑Fi 密碼才會以網路名稱為索引存入本機 Keychain；專案資料庫只儲存網路名稱。按你的操作連線受支援相機時，App 會透過本地相機連線傳送所需的網路名稱與密碼，幫助相機加入所選網路。

### 2. 許可權與用途

藍芽用於發現和連線受支援的相機；本地網路用於接收 RTMP 或相機原生預覽，並與相機交換連線命令；麥克風僅在啟用 AI 拾音時用於轉寫；當前 Wi‑Fi 名稱用於減少重複輸入。你可以在系統設定中撤銷許可權，相應功能可能因此無法使用。

### 3. 分享與第三方

App 不會自動向我們或廣告商上傳上述本地內容。你主動使用系統分享功能時，匯出的標記檔案可能包含標記文字、時間、機位名稱或 RTMP 地址。接收方如何處理副本，取決於你選擇的郵件、隔空投送、雲盤等服務及其政策。分享前請檢查檔案和接收方，尤其注意 RTMP 地址中可能含有推流金鑰。

開源相機協議元件用於本機連線，不因這些元件而建立向我們運營伺服器上傳使用者內容的通道。Apple 的系統服務、App Store 與系統備份依據 Apple 的政策執行。

### 4. 儲存、刪除與安全

專案、裝置記錄、轉寫文字和標記媒體儲存在 App 本地儲存中，不設自動到期日。你可以在 App 內刪除標記、智記或已儲存裝置；刪除標記時，關聯的截圖和短片會一併刪除。解除安裝 App 可移除其應用資料；已匯出的副本與系統備份需要在相應位置另行管理。

選擇儲存的 Wi‑Fi 密碼由 iOS Keychain 保護，不寫入專案檔案。你可以在相機連線頁關閉對應網路的密碼儲存選項；下次按該設定連線時，App 會刪除對應的 Keychain 條目。不要僅依賴解除安裝 App 清理 Keychain 密碼。

### 5. 聯絡與更新

關於本政策、裝置本地資料或刪除方式的問題，請郵件聯絡 [sherardchina@gmail.com](mailto:sherardchina@gmail.com)。未來版本若新增雲服務、分析功能或其他資料處理，我們會更新本政策和商店隱私申報，並在適用時提供選擇或徵求同意。
`,Uo=`### 1. Install and open
Download the Mac DMG and SHA-256 file from [GitHub Releases](https://github.com/ailifelab/InkEngine/releases/tag/v0.3.2). Verify them, open the DMG and drag the app to Applications. Quit the previous version before updating and back up important documents. Installing on iPhone / iPad yourself requires your own developer signing and provisioning; the author's signing materials are not provided.

### 2. Open, edit and save
On Mac choose Open (⌘O) or New (⌘N), edit the document, then Save (⌘S) or Save As. On mobile, enter through local documents, history or import. Back up originals before editing; history is not an independent backup.

### 3. Listen
Switch to reading mode and press the bottom play button; press again to pause. Tap a line to start there. Use paragraph navigation and speed controls to review longer writing. Confirm the active document before playback, and check generated speech yourself.

### 4. Choose a voice and correct pronunciation
Open More → Font and Speech Settings, choose a model, then a voice belonging to that model. ZipVoice includes Serena and Dylan; system speech uses installed voices. Add names and place names to pronunciation corrections when needed.

Mac also includes an experimental Qwen 0.6B Serena model. Its initial playback rate is 1.25× and synthesis remains slower than real time, so long continuous reading may wait. It is an on-device experiment, not a real-time playback guarantee.

### 5. Language, bookmarks and sync
Choose system, Simplified Chinese, Traditional Chinese or English in More → Language or the speech settings; Mac also has a Language menu. Switching preserves documents, reading position and voice selection. Use reading bookmarks for passages to revisit.

Start nearby-device sync yourself, allow local-network access, compare pairing codes on both ends and confirm before choosing items. Pair only with trusted devices. Revoking trust does not delete documents already transferred. System sharing and import are alternatives.

### 6. Clean up and understand version scope
Removing a history entry may not delete the original file. Mac cache cleanup can permanently remove private unsaved documents in the selected scope that are not saved externally or referenced by a folder; the active document is retained. Save what you need before cleaning.

These instructions describe public 0.3.2 (8). Images remain explicitly labeled Mac 0.3.1. Source-only tabs, split views, multiple windows and the manual-save workspace are not included in the existing public installer. [Full project documentation](https://github.com/ailifelab/InkEngine).
`,Wo=`Ink Engine brings text editing, reading and offline speech together. Listen after writing to help notice repetition, long sentences and awkward phrasing.

- Open and edit original local files on Mac; manage and read local documents and folders on iPhone / iPad.
- Work with plain text, Markdown and common code/data text formats, using chapters, bookmarks and reading-position recovery.
- Use system speech or bundled ZipVoice Serena / Dylan voices, with per-model speed settings and custom pronunciation corrections.
- Move documents through system sharing, import or user-initiated nearby-device sync without a cloud account.
- Version 0.3.2 adds Simplified Chinese, Traditional Chinese, English and system-following interface language options.

The public **0.3.2 (build 8)** Mac installer supports Apple silicon and **macOS 26+**, with Developer ID signing and Apple notarization. The project also supports iPhone / iPad on **iOS / iPadOS 26+**, but is not on the App Store and has no public generally signed IPA. Original source uses the **MIT License**; third-party components retain their licenses.
`,Go=`Version: 2026-10-15. Applies to the current offline version of Ink Engine. Operated and supported by AILife Lab. Privacy and technical support: sherardchina@gmail.com.

## Processing on your device

No account is required. Documents, folder indexes, reading positions, bookmarks, editing history, pronunciation rules, voice settings and generated audio are stored locally. On Mac, you can edit original files authorized through the system picker; on iPhone and iPad, you can import documents and manage local copies. The built-in ZipVoice and Mac Qwen models synthesize speech on your device and do not upload document text to us or third-party speech servers. Apple system voices are provided by system services. Voice downloads and system service behavior are governed by Apple's policies and your system settings.

## Nearby device sync

When you use Nearby Devices, the app discovers devices, establishes connections and transfers selected content over the local network. Remembered devices may be rediscovered at startup or when the app returns to the foreground. Discovery information includes the device name and part of a random identifier generated by this app; other participants on the local network may see this information. After both devices verify the pairing code and confirm, documents and selected items, including folder information and reading progress, are encrypted and sent directly to the target device without our relay servers. Pair only with trusted devices.

If you remember a pairing, local preferences store device identifiers, trusted device names and associated public keys. The app's pairing private key is stored in the system Keychain. Revoking trust requires pairing again for future connections. Old key records may remain in Keychain; uninstalling the app or revoking trust does not necessarily clear all Keychain records. Revoking trust does not delete documents already sent to another device.

## Permissions and external services

Local network access is used to discover and connect to nearby devices. Denying it does not affect local editing, reading or built-in offline voices. File access is controlled by the system picker and sandbox authorization. The app does not request microphone, camera, location, contacts or advertising tracking permissions. It includes no advertising, cross-app tracking, analytics instrumentation or third-party crash reporting SDK.

When you choose system sharing, external browser preview, a website or a support email, information is passed to the app or service you select. Your cloud file provider, operating system backups, Apple diagnostics or store services may process data under their own policies. The app has no custom cloud backup service. Visiting our website or GitHub sends normal web request information to those sites; offline reading does not require those visits.

## Retention, deletion and control

Local documents and reading data are retained to provide app features until you delete them in the app or system file tools. Cache & Bookmarks provides corresponding cleanup controls. Removing history entries, generated audio or offline copies does not necessarily delete Mac originals, exported files, system backups or copies on other devices. Uninstalling the iPhone or iPad app normally deletes its local container data; Keychain entries and backups may be retained separately by the system. Back up important documents yourself.
On Mac, clearing the cache also permanently deletes private drafts within the selected scope that have been removed from History, have no external file and are not referenced by a folder, together with their bookmarks, previous versions, reading positions and audio cache. The currently open document is kept.

We do not hold your local documents and cannot read or remotely delete them. For privacy support, contact the email above. Do not send entire documents, keys, certificates or other sensitive materials. When you send an email, your email address and information you choose to provide are processed by your email service. We use them only to handle your request and retain or delete the correspondence as needed after resolution. You may request deletion of support correspondence under our control, except records required by law.

## Minors and policy updates

This is a general-purpose document tool with no public content community. We do not actively request age or information about minors. Minors should manage documents and sharing under a guardian's guidance. If cloud speech, accounts or data collection are introduced, we will update this policy and store disclosures before enabling them and provide notice and obtain authorization where required. The current version does not automatically use cloud speech.
`,Ko=`### 1. 安装与打开
从 [GitHub Releases](https://github.com/ailifelab/InkEngine/releases/tag/v0.3.2) 下载 Mac DMG 与 SHA-256 文件。核对后打开 DMG，将应用拖入 Applications。更新前退出旧版，保留重要文稿备份。iPhone / iPad 自行安装需要自己的开发者签名及描述文件，作者签名不随源码提供。

### 2. 打开、编辑与保存
Mac 使用“打开”（⌘O）或“新建”（⌘N），在编辑模式修改，使用保存（⌘S）或另存为选择位置。手机和平板从本机文稿、历史或导入入口进入。处理原文件前建议备份，不把历史记录当作独立备份。

### 3. 开始听读
切换“阅读”，点击底部播放，再次点击暂停；点击正文中的一行可以从该处开始。用上下段和语速控制检查长文。播放与跳段前核对当前文稿，识别或合成结果仍需自己确认。

### 4. 模型、音色与纠音
在“更多”→“字号与朗读设置”先选择模型，再选该模型的音色。ZipVoice 提供 Serena 女声与 Dylan 男声；系统语音使用设备已安装音色。用“常用多音字与自定义词组”修正人名、地名。

Mac 另有 Qwen 0.6B Serena 测试模型，初始语速 1.25 倍，合成仍慢于实时，连续长篇可能等待。它是本机测试能力，不是实时朗读保证。

### 5. 语言、书签与设备同步
在“更多”的“语言”，或“字号与朗读设置”选择跟随系统、简体中文、繁體中文或 English；Mac 也有语言菜单。切换保留文稿、阅读位置和音色。通过阅读书签管理回看位置。

需要传文稿时主动打开附近设备同步，允许本地网络，在两端核对配对码并确认，再选择同步项目。只与可信设备配对；撤销信任不会删除已传出的文稿。也可用系统分享与导入。

### 6. 清理与版本边界
删除历史入口不一定删除原文件。Mac 清理缓存还可能永久删除所选范围内未保存到外部且不再被目录引用的私有未保存文稿；当前打开文稿保留。清理前确认需要保留的内容已另存。

本页以公开 0.3.2（8）为基准，截图仍为明确标注的 Mac 0.3.1。源码中的多标签、分屏、多窗口及手动保存工作区尚未包含在现有公开安装包中。[完整项目说明](https://github.com/ailifelab/InkEngine)。
`,qo=`墨语引擎（Ink Engine）把文本编辑、阅读与离线听读放在一起。写完后换一种方式听一遍，帮助自己发现重复、长句与不顺口的地方。

- Mac 打开和编辑本地原文件；iPhone / iPad 管理及阅读本机文稿与目录。
- 支持纯文本、Markdown 及常见代码和数据文本；用章节、书签与阅读位置继续阅读。
- 系统语音与内置 ZipVoice Serena / Dylan；各模型分别记住语速，并支持常用多音字与自定义纠音词组。
- 通过系统分享、导入或主动发起附近设备同步传递文稿，无需云端账户。
- 0.3.2 新增简体中文、繁体中文、English 和跟随系统的界面语言选项。

公开 Mac 安装包 **0.3.2（build 8）** 支持 Apple 芯片及 **macOS 26+**，已签名并公证。项目也支持 iPhone / iPad 的 iOS / iPadOS 26+，但尚未在 App Store 上架、没有公开通用签名 IPA。原创源码使用 **MIT License**；第三方组件保留各自许可证。
`,Jo=`版本：2026-10-15。适用于墨语引擎 Ink Engine 当前离线版本。运营与支持：AILife Lab。隐私与技术支持邮箱：sherardchina@gmail.com。

## 本机处理

应用无需注册账号。文稿、目录索引、阅读位置、书签、编辑历史、纠音规则、声音设置和生成的音频保存在设备本地。Mac 可以编辑你通过系统选择器授权的原文件；手机和平板可以导入文稿并管理本机副本。内置 ZipVoice 及 Mac 的 Qwen 模型均在本机合成语音，不将正文上传到我们或第三方语音服务器。系统语音由 Apple 的系统服务提供，音色的下载和系统服务行为受 Apple 政策及系统设置管理。

## 附近设备同步

只有使用附近设备功能时，应用才会在本地网络发现设备、建立连接并传输所选内容；已经记住配对的设备可能在启动或回到前台时重新发现。发现信息包含设备名称和本应用生成的随机设备标识片段，附近局域网参与者可能看到这些信息。连接双方核对配对码并确认后，文稿及所选同步项目中包含的目录、阅读进度等数据会加密传给目标设备，不经过我们的中转服务器。请仅与可信设备配对。

选择记住配对后，应用在本机偏好中保存设备标识、受信任设备名称和公钥关联，并在系统钥匙串中保存本应用的配对私钥。撤销设备信任后，后续连接需要重新配对；钥匙串可能保留旧密钥记录，不能将卸载或撤销信任理解为已清除全部钥匙串记录。撤销信任也不会删除已经传给另一台设备的文稿。

## 权限与外部服务

局域网权限用于发现和连接附近设备；拒绝该权限不影响本机编辑、阅读和内置离线声音。文件访问由系统选择器和沙盒授权控制。应用不申请麦克风、相机、定位、通讯录或广告跟踪权限，没有广告、跨应用跟踪、分析埋点或第三方崩溃上报 SDK。

主动选择系统分享、外部浏览器预览、打开网站或发送支持邮件时，信息会交给你选择的应用或服务。你选择的云盘文件提供器、操作系统备份、Apple 诊断或商店服务可能按其自身政策处理数据；应用未自建云端备份服务。访问官网或 GitHub 会使对应网站接收正常网页请求信息，与本机离线朗读是不同场景。

## 保留、删除与控制

本机文稿和阅读数据为实现功能而保留，直到你在应用或系统文件管理工具中删除。缓存与书签管理提供相应清理操作；删除历史入口记录、生成音频缓存或应用内离线副本，不一定删除 Mac 原文件、导出文件、系统备份或另一设备副本。卸载 iPhone / iPad 应用通常会删除其本机容器数据，钥匙串及备份可能由系统另行保留。重要文稿请自行备份。
Mac 清理缓存时，会一并永久删除所选范围内已移出历史、未保存为外部文件且未被目录引用的私有未保存文稿及其书签、旧版本、阅读位置和朗读缓存；当前打开的文稿会保留。

我们不持有你的本机文稿，无法代为读取或远程删除。需要隐私支持时，请联系上述邮箱；不要发送文稿全文、密钥、证书或其他敏感材料。主动发送邮件时，你的邮箱和自愿提供的信息由邮件服务处理，我们仅用其处理请求，并在处理完成后按实际需要保留或删除相关通信；你可请求删除可由我们控制的支持通信，但法律要求保留的记录除外。

## 未成年人和政策更新

本应用是通用文稿工具，不设公共内容社区，也不主动索取年龄或未成年人信息。未成年人应在监护人指导下管理文稿及分享对象。若未来新增云端语音、账号或数据收集，会在启用前更新政策和商店申报，并按适用要求告知及取得授权。当前版本不自动调用云端语音。
`,Yo=`### 1. 安裝與開啟
從 [GitHub Releases](https://github.com/ailifelab/InkEngine/releases/tag/v0.3.2) 下載 Mac DMG 與 SHA-256 檔案。核對後開啟 DMG，將應用拖入 Applications。更新前退出舊版，保留重要文稿備份。iPhone / iPad 自行安裝需要自己的開發者簽名及描述檔案，作者簽名不隨原始碼提供。

### 2. 開啟、編輯與儲存
Mac 使用“開啟”（⌘O）或“新建”（⌘N），在編輯模式修改，使用儲存（⌘S）或另存為選擇位置。手機和平板從本機文稿、歷史或匯入入口進入。處理原檔案前建議備份，不把歷史記錄當作獨立備份。

### 3. 開始聽讀
切換“閱讀”，點選底部播放，再次點選暫停；點選正文中的一行可以從該處開始。用上下段和語速控制檢查長文。播放與跳段前核對當前文稿，識別或合成結果仍需自己確認。

### 4. 模型、音色與糾音
在“更多”→“字號與朗讀設定”先選擇模型，再選該模型的音色。ZipVoice 提供 Serena 女聲與 Dylan 男聲；系統語音使用裝置已安裝音色。用“常用多音字與自定義片語”修正人名、地名。

Mac 另有 Qwen 0.6B Serena 測試模型，初始語速 1.25 倍，合成仍慢於實時，連續長篇可能等待。它是本機測試能力，不是實時朗讀保證。

### 5. 語言、書籤與裝置同步
在“更多”的“語言”，或“字號與朗讀設定”選擇跟隨系統、簡體中文、繁體中文或 English；Mac 也有語言選單。切換保留文稿、閱讀位置和音色。透過閱讀書籤管理回看位置。

需要傳文稿時主動開啟附近裝置同步，允許本地網路，在兩端核對配對碼並確認，再選擇同步專案。只與可信裝置配對；撤銷信任不會刪除已傳出的文稿。也可用系統分享與匯入。

### 6. 清理與版本邊界
刪除歷史入口不一定刪除原檔案。Mac 清理快取還可能永久刪除所選範圍內未儲存到外部且不再被目錄引用的私有未儲存文稿；當前開啟文稿保留。清理前確認需要保留的內容已另存。

本頁以公開 0.3.2（8）為基準，截圖仍為明確標註的 Mac 0.3.1。原始碼中的多標籤、分屏、多視窗及手動儲存工作區尚未包含在現有公開安裝包中。[完整專案說明](https://github.com/ailifelab/InkEngine)。
`,Xo=`墨語引擎（Ink Engine）把文字編輯、閱讀與離線聽讀放在一起。寫完後換一種方式聽一遍，幫助自己發現重複、長句與不順口的地方。

- Mac 開啟和編輯本地原檔案；iPhone / iPad 管理及閱讀本機文稿與目錄。
- 支援純文字、Markdown 及常見程式碼和資料文字；用章節、書籤與閱讀位置繼續閱讀。
- 系統語音與內建 ZipVoice Serena / Dylan；各模型分別記住語速，並支援常用多音字與自定義糾音片語。
- 透過系統分享、匯入或主動發起附近裝置同步傳遞文稿，無需雲端賬戶。
- 0.3.2 新增簡體中文、繁體中文、English 和跟隨系統的介面語言選項。

公開 Mac 安裝包 **0.3.2（build 8）** 支援 Apple 晶片及 **macOS 26+**，已簽名並公證。專案也支援 iPhone / iPad 的 iOS / iPadOS 26+，但尚未在 App Store 上架、沒有公開通用簽名 IPA。原創原始碼使用 **MIT License**；第三方元件保留各自許可證。
`,Zo=`版本：2026-10-15。適用於墨語引擎 Ink Engine 當前離線版本。運營與支持：AILife Lab。隱私與技術支持郵箱：sherardchina@gmail.com。

## 本機處理

應用無需註冊帳號。文稿、目錄索引、閱讀位置、書簽、編輯歷史、糾音規則、聲音設定和生成的音訊儲存在裝置本地。Mac 可以編輯你通過系統選擇器授權的原檔案；手機和平板可以導入文稿並管理本機副本。內置 ZipVoice 及 Mac 的 Qwen 模型均在本機合成語音，不將正文上傳到我們或第三方語音伺服器。系統語音由 Apple 的系統服務提供，音色的下載和系統服務行為受 Apple 政策及系統設定管理。

## 附近裝置同步

只有使用附近裝置功能時，應用才會在本地網路發現裝置、建立連接並傳輸所選內容；已經記住配對的裝置可能在啓動或回到前台時重新發現。發現信息包含裝置名稱和本應用生成的隨機裝置標識片段，附近區域網路參與者可能看到這些信息。連接雙方核對配對碼並確認後，文稿及所選同步項目中包含的目錄、閱讀進度等資料會加密傳給目標裝置，不經過我們的中轉伺服器。請僅與可信裝置配對。

選擇記住配對後，應用在本機偏好中儲存裝置標識、受信任裝置名稱和公鑰關聯，並在系統鑰匙串中儲存本應用的配對私鑰。撤銷裝置信任後，後續連接需要重新配對；鑰匙串可能保留舊密鑰記錄，不能將卸載或撤銷信任理解為已清除全部鑰匙串記錄。撤銷信任也不會刪除已經傳給另一台裝置的文稿。

## 權限與外部服務

區域網路權限用於發現和連接附近裝置；拒絕該權限不影響本機編輯、閱讀和內置離線聲音。檔案訪問由系統選擇器和沙盒授權控制。應用不申請麥克風、相機、定位、通訊錄或廣告跟蹤權限，沒有廣告、跨應用跟蹤、分析埋點或第三方崩潰上報 SDK。

主動選擇系統分享、外部瀏覽器預覽、打開網站或發送支持郵件時，信息會交給你選擇的應用或服務。你選擇的雲盤檔案提供器、操作系統備份、Apple 診斷或商店服務可能按其自身政策處理資料；應用未自建雲端備份服務。訪問官網或 GitHub 會使對應網站接收正常網頁請求信息，與本機離線朗讀是不同場景。

## 保留、刪除與控制

本機文稿和閱讀資料為實現功能而保留，直到你在應用或系統檔案管理工具中刪除。快取與書簽管理提供相應清理操作；刪除歷史入口記錄、生成音訊快取或應用內離線副本，不一定刪除 Mac 原檔案、導出檔案、系統備份或另一裝置副本。卸載 iPhone / iPad 應用通常會刪除其本機容器資料，鑰匙串及備份可能由系統另行保留。重要文稿請自行備份。
Mac 清理快取時，會一併永久刪除所選範圍內已移出歷史、未儲存為外部檔案且未被目錄引用的私有草稿及其書籤、舊版本、閱讀位置和朗讀快取；目前開啟的文稿會保留。

我們不持有你的本機文稿，無法代為讀取或遠程刪除。需要隱私支持時，請聯繫上述郵箱；不要發送文稿全文、密鑰、證書或其他敏感材料。主動發送郵件時，你的郵箱和自願提供的信息由郵件服務處理，我們僅用其處理請求，並在處理完成後按實際需要保留或刪除相關通信；你可請求刪除可由我們控制的支持通信，但法律要求保留的記錄除外。

## 未成年人和政策更新

本應用是通用文稿工具，不設公共內容社區，也不主動索取年齡或未成年人信息。未成年人應在監護人指導下管理文稿及分享對象。若未來新增雲端語音、帳號或資料收集，會在啓用前更新政策和商店申報，並按適用要求告知及取得授權。當前版本不自動調用雲端語音。
`,Qo=`### 1. Create a client
Open client management and add the name, contact details and notes you need. Use the system photo picker to select relevant images. Make sure you have appropriate permission to handle client information.

### 2. Add an order and appointments
Create an order, associate the client and enter the shooting style, dates, amount and notes. Check makeup trials, test shoots and the main shoot separately before saving. Review the calendar again after changing a date.

### 3. Review the day and weather
Use the overview and calendar to check upcoming work. Weather can use your current location or a selected place. With location permission, the app requests forecasts from Apple; denying location does not prevent client or order management. Check actual conditions before outdoor work.

### 4. Maintain amounts and attachments
Check the total, deposit and balance against real payment records. A past shoot date is not proof of payment. Review statistics against your source records. Text recognition can assist with information in order images; verify the result before using it.

### 5. Update and delete
Maintain records in the corresponding client or order. Check linked information before deleting. Removing the app affects local data; system backups and shared copies need separate management. This website does not promise cloud synchronization or remote recovery.

### Version scope
These instructions describe public version 1.1. Themes, three interface languages, delivery tasks and actual-payment statistics in the local 1.2 development version are **not presented as released features**. Screenshots come from the existing App Store listing, not 1.2. [Check the current App Store version](https://apps.apple.com/app/id6746808768).
`,$o=`Built for independent photographers and studios, 摄影师小助理 brings clients, photography orders and appointments into one place.

- Keep client contact details, notes and related orders together.
- Record shoot details, amounts, deposits, balances and image attachments.
- Review makeup trials, test shoots and shooting appointments from the overview and calendar.
- Check order statistics and recognize text in images to help organize requirements.
- Consult weather and sunrise/sunset guidance when planning outdoor shoots.

The current public App Store version is **1.1**, requiring **iOS / iPadOS 17.3 or later**. Weather needs an internet connection and is planning guidance. No specific productivity gains, user counts or delay-free results are promised.
`,es=`Version, effective date and update date: October 23, 2026. Publisher and support: AILife Lab. This notice covers the app's client, order, attachment, location and weather functions.

### 1. Local business records
Client names, contact details, notes, orders, appointments, amounts and selected images support your photography workflow. The business database and images are stored on the device. The app has no developer account or developer-operated cloud business storage, and does not automatically upload clients, orders or attachments to a server we operate.

### 2. Location, maps and weather use the network
Weather uses Apple WeatherKit. Location permission supplies a forecast location; a place you select can also be used for weather requests. Coordinates are sent to Apple to obtain forecasts. Place-name lookup and map display may also request Apple services. These functions are not entirely offline: Apple may receive the place, source network address and technical information needed for requests, under [Apple's privacy policy](https://www.apple.com/legal/privacy/).

You can revoke location permission in system Settings. Client and order management do not require it. Weather forecasts on screen do not mean this website continuously tracks your movements.

### 3. Images and text recognition
The system photo picker supplies images you choose for client or order attachments. Text recognition uses Apple Vision on the device; verify its output. If a camera or save-photo action requests system permission, you decide whether to allow it. Denial affects the related action, not existing text records.

### 4. Other services and support
The app does not integrate advertising trackers, third-party analytics or social-login SDKs. Apple's weather, maps, system backups, App Store and diagnostics follow their own policies and your system settings. When you choose to share content, the chosen recipient or service handles its copy.

If you email [sherardchina@gmail.com](mailto:sherardchina@gmail.com), we receive your address and voluntarily supplied information to handle the request. Do not send unauthorized client information, contracts or an entire order database.

### 5. Retention, deletion and security
Local records remain for management functions until you delete them through the app or system. Check linked attachments when deleting. Uninstalling usually removes the app container, but not system backups, originals in Photos or exported copies. We do not hold your local database and cannot remotely recover or delete it.

Protect records with your device lock and system updates. You may request deletion of support correspondence we control, except records that must be retained by law. Avoid sending client-sensitive information to unrelated recipients.

### 6. Previous notice and changes
This notice replaces the generic generator text previously reproduced on this website, removing inapplicable account, social-login and broad usage-data clauses. The store configuration may still link to the [historical notice](https://www.freeprivacypolicy.com/live/ce9f9694-9e91-481b-8272-6694e4850398); a website update does not change App Store configuration. The store's “Data Not Collected” label does not mean weather and maps never make network requests.

The app is not a children's sharing community. Guardians should guide minors in handling personal and client data. Changes to data handling will be reflected here, with notice and authorization where applicable. Use the email above for privacy and support requests.
`,ts=`### 1. 先建立客户资料
打开客户管理，新建客户，填写实际需要的姓名、联系方式和备注。添加照片时使用系统选择器，只选择与工作相关的图片；处理客户信息前请取得适当授权。

### 2. 新建并安排订单
在订单入口新建记录，关联客户，填写拍摄风格、日期、金额、预约事项与备注。把试妆、试拍和正式拍摄时间分别核对后保存；修改日期后再检查日历，避免冲突。

### 3. 查看每日安排与天气
从首页和日历检查近期事项。天气功能可以请求当前位置，或使用你选择的地点。允许定位后会向 Apple 天气服务请求预报；拒绝定位仍可管理客户与订单。户外拍摄请同时留意实际天气变化。

### 4. 整理款项和图片
在订单中核对总额、定金与尾款；不要把拍摄日期已过当成付款凭证。查看统计时请对照原始收款记录。添加订单图片后，可使用文字识别辅助录入，识别结果需要人工核对。

### 5. 修改与删除
在对应客户或订单中维护资料，删除前确认不再需要。客户和订单是关联记录，清理时请检查相关资料。卸载会影响本机数据；系统备份和已分享副本需另行管理。没有在本站承诺云端同步或远程恢复。

### 版本说明
以上以当前商店 1.1 为基准。正在开发的 1.2 中三种主题、三语界面、返图任务及按实际收款统计等改进，**尚不作为当前公开版功能**。截图来自既有 App Store 页面，并非 1.2 界面。[查看 App Store 当前版本](https://apps.apple.com/app/id6746808768)。
`,ns=`摄影师小助理把客户、拍摄订单和预约日程放在同一处，适合需要同时跟进多位客户与多次拍摄的独立摄影师和工作室。

### 从客户到拍摄安排
- 建立客户资料，记录联系方式、备注和关联订单。
- 在订单中整理拍摄内容、金额、定金尾款和图片附件。
- 用首页与日历查看试妆、试拍和正式拍摄安排。
- 查看订单统计；从图片中识别文字，辅助整理合同或需求。
- 通过天气与日出日落参考安排外景拍摄。

当前公开商店版本为 **1.1**，要求 iOS / iPadOS **17.3 或更新版本**。天气需要联网，预报与拍摄时段仅供安排参考。本站不承诺具体效率提升、用户数量或零延误。
`,rs=`版本、生效及更新日期：2026-10-23。发布与支持：AILife Lab。适用摄影师小助理现有客户、订单、附件、定位与天气功能。

### 1. 本机业务资料
你输入的客户姓名、联系方式、备注、订单、预约、金额及选择的图片用于客户与拍摄工作管理。业务数据库及图片保存在设备本机。应用不提供开发者账户或自建云端业务存储，不向我们运营的服务器自动上传客户、订单或附件。

### 2. 定位、地图和天气会联网
天气功能使用 Apple WeatherKit；当前位置授权用于获取天气地点，手选地点也可用于天气请求。地点坐标会交给 Apple 提供天气，地名查询及地图显示也可能向 Apple 系统服务发出请求。这些功能并非完全离线，Apple 可能接收请求所需的地点、来源网络地址和技术信息，处理受 [Apple 隐私政策](https://www.apple.com/legal/privacy/)约束。

你可以在系统设置撤销定位权限；客户和订单管理不依赖定位。天气页面中的预报不代表本站在后台持续追踪你的行程。

### 3. 图片与文字识别
系统照片选择器提供你主动选择的图片，用于客户或订单附件。图片文字识别使用设备上的 Apple Vision；结果需要你核对后使用。相机或保存照片等入口如触发系统权限提示，由你决定是否允许；拒绝会影响对应功能，不影响已录入文字资料。

### 4. 第三方与支持通信
应用未接入广告追踪、第三方分析或第三方社交登录 SDK。Apple 的天气、地图、系统备份、商店和诊断受其各自政策与系统设置管理。主动分享内容时，由所选接收方或服务处理副本。

向 [sherardchina@gmail.com](mailto:sherardchina@gmail.com) 发送邮件时，我们会收到邮箱和你自愿提供的内容，用于处理请求。请勿附上未获授权的客户资料、合同或完整订单数据库。

### 5. 保存、删除与安全
本机资料为实现管理功能而保存，直至你通过应用或系统删除。删除相关记录时请检查关联附件；卸载应用通常移除应用容器数据，系统备份、照片库中原件和已导出副本不会因此一并删除。我们不持有本机数据库，无法替你远程恢复或删除。

请使用设备锁屏与系统安全更新保护资料。你可请求处理我们控制范围内的支持邮件，法律要求保留的记录除外。请勿把其他客户的敏感资料发送给无关接收方。

### 6. 旧版政策与更新
本页替换本站此前收录的通用生成器条款，移除与应用不符的账户、社交登录和笼统使用数据收集描述。旧商店配置可能仍指向[历史政策](https://www.freeprivacypolicy.com/live/ce9f9694-9e91-481b-8272-6694e4850398)；网站更新不会自动修改商店配置。商店的“不收集数据”标签也不表示天气和地图从不联网。

应用不是面向儿童的资料分享社区。监护人应指导未成年人管理个人及客户信息。数据处理方式改变时会更新本政策，并按适用要求告知和取得授权。隐私及支持联系邮箱同上。
`,is=`### 1. 先建立客戶資料
開啟客戶管理，新建客戶，填寫實際需要的姓名、聯絡方式和備註。新增照片時使用系統選擇器，只選擇與工作相關的圖片；處理客戶資訊前請取得適當授權。

### 2. 新建並安排訂單
在訂單入口新建記錄，關聯客戶，填寫拍攝風格、日期、金額、預約事項與備註。把試妝、試拍和正式拍攝時間分別核對後儲存；修改日期後再檢查日曆，避免衝突。

### 3. 檢視每日安排與天氣
從首頁和日曆檢查近期事項。天氣功能可以請求當前位置，或使用你選擇的地點。允許定位後會向 Apple 天氣服務請求預報；拒絕定位仍可管理客戶與訂單。戶外拍攝請同時留意實際天氣變化。

### 4. 整理款項和圖片
在訂單中核對總額、定金與尾款；不要把拍攝日期已過當成付款憑證。檢視統計時請對照原始收款記錄。新增訂單圖片後，可使用文字識別輔助錄入，識別結果需要人工核對。

### 5. 修改與刪除
在對應客戶或訂單中維護資料，刪除前確認不再需要。客戶和訂單是關聯記錄，清理時請檢查相關資料。解除安裝會影響本機資料；系統備份和已分享副本需另行管理。沒有在本站承諾雲端同步或遠端恢復。

### 版本說明
以上以當前商店 1.1 為基準。正在開發的 1.2 中三種主題、三語介面、返圖任務及按實際收款統計等改進，**尚不作為當前公開版功能**。截圖來自既有 App Store 頁面，並非 1.2 介面。[檢視 App Store 當前版本](https://apps.apple.com/app/id6746808768)。
`,as=`攝影師小助理把客戶、拍攝訂單和預約日程放在同一處，適合需要同時跟進多位客戶與多次拍攝的獨立攝影師和工作室。

### 從客戶到拍攝安排
- 建立客戶資料，記錄聯絡方式、備註和關聯訂單。
- 在訂單中整理拍攝內容、金額、定金尾款和圖片附件。
- 用首頁與日曆檢視試妝、試拍和正式拍攝安排。
- 檢視訂單統計；從圖片中識別文字，輔助整理合同或需求。
- 透過天氣與日出日落參考安排外景拍攝。

當前公開商店版本為 **1.1**，要求 iOS / iPadOS **17.3 或更新版本**。天氣需要聯網，預報與拍攝時段僅供安排參考。本站不承諾具體效率提升、使用者數量或零延誤。
`,os=`版本、生效及更新日期：2026-10-23。釋出與支援：AILife Lab。適用攝影師小助理現有客戶、訂單、附件、定位與天氣功能。

### 1. 本機業務資料
你輸入的客戶姓名、聯絡方式、備註、訂單、預約、金額及選擇的圖片用於客戶與拍攝工作管理。業務資料庫及圖片儲存在裝置本機。應用不提供開發者賬戶或自建雲端業務儲存，不向我們運營的伺服器自動上傳客戶、訂單或附件。

### 2. 定位、地圖和天氣會聯網
天氣功能使用 Apple WeatherKit；當前位置授權用於獲取天氣地點，手選地點也可用於天氣請求。地點座標會交給 Apple 提供天氣，地名查詢及地圖顯示也可能向 Apple 系統服務發出請求。這些功能並非完全離線，Apple 可能接收請求所需的地點、來源網路地址和技術資訊，處理受 [Apple 隱私政策](https://www.apple.com/legal/privacy/)約束。

你可以在系統設定撤銷定位許可權；客戶和訂單管理不依賴定位。天氣頁面中的預報不代表本站在後臺持續追蹤你的行程。

### 3. 圖片與文字識別
系統照片選擇器提供你主動選擇的圖片，用於客戶或訂單附件。圖片文字識別使用裝置上的 Apple Vision；結果需要你核對後使用。相機或儲存照片等入口如觸發系統許可權提示，由你決定是否允許；拒絕會影響對應功能，不影響已錄入文字資料。

### 4. 第三方與支援通訊
應用未接入廣告追蹤、第三方分析或第三方社交登入 SDK。Apple 的天氣、地圖、系統備份、商店和診斷受其各自政策與系統設定管理。主動分享內容時，由所選接收方或服務處理副本。

向 [sherardchina@gmail.com](mailto:sherardchina@gmail.com) 傳送郵件時，我們會收到郵箱和你自願提供的內容，用於處理請求。請勿附上未獲授權的客戶資料、合同或完整訂單資料庫。

### 5. 儲存、刪除與安全
本機資料為實現管理功能而儲存，直至你透過應用或系統刪除。刪除相關記錄時請檢查關聯附件；解除安裝應用通常移除應用容器資料，系統備份、照片庫中原件和已匯出副本不會因此一併刪除。我們不持有本機資料庫，無法替你遠端恢復或刪除。

請使用裝置鎖屏與系統安全更新保護資料。你可請求處理我們控制範圍內的支援郵件，法律要求保留的記錄除外。請勿把其他客戶的敏感資料傳送給無關接收方。

### 6. 舊版政策與更新
本頁替換本站此前收錄的通用生成器條款，移除與應用不符的賬戶、社交登入和籠統使用資料收集描述。舊商店配置可能仍指向[歷史政策](https://www.freeprivacypolicy.com/live/ce9f9694-9e91-481b-8272-6694e4850398)；網站更新不會自動修改商店配置。商店的“不收集資料”標籤也不表示天氣和地圖從不聯網。

應用不是面向兒童的資料分享社群。監護人應指導未成年人管理個人及客戶資訊。資料處理方式改變時會更新本政策，並按適用要求告知和取得授權。隱私及支援聯絡郵箱同上。
`,ss=`### 1. Choose a nickname
Enter a nickname on first launch. Your nickname and public device identity participate in nearby discovery, so avoid information you do not want people nearby to see.

### 2. Enable nearby connections
Keep Wi-Fi and nearby connections enabled on both devices and allow local-network access. For an initial troubleshooting test, use the same Wi-Fi LAN with both apps in the foreground. No cloud server does not mean communication works in every environment.

### 3. Invite and verify
Invite a nearby device. Compare the applicant's identity code with the code shown in its Settings in person before approving it. A nickname alone is not proof of identity.

### 4. Hold to talk
Open Intercom, allow the microphone when needed, hold the talk button to send and release to stop. Use mute to silence incoming audio. Keep the app in the foreground: Keep Session does not guarantee background or locked-screen connectivity.

### 5. Send text and media
Use the message composer to enter text, select photos or capture a photo or two-second silent clip. The system photo picker provides only selected items; camera permission is requested for capture. Check the transfer result rather than assuming a completed action means delivery.

### 6. Leave and clear history
Review members and manage names or removals according to your permissions. Turn off nearby connections, leave a community or clear local message history in Settings. Leaving clears saved community credentials. Other recipients may keep copies, and Keychain device identity may survive app removal.

### Current release and images
Screenshots show actual 1.0 release-configuration simulator empty states and nickname setup. They do not invent connected peers or verify wireless performance. A download link will be added when publicly available.
`,cs=`RidgeCall is a nearby communication app for iPhone and iPad. Form a community with people around you, hold to send voice and release to stop.

- Discover and invite nearby devices. Joining requires approval, with identity codes you can compare in person.
- Share text, photos and two-second silent clips, and check transfer results.
- View members, mute incoming audio and rename a community. Founding administrators can remove members.
- Keep a foreground session screen open with talk and exit controls.

Requires **iOS / iPadOS 17 or later** and RidgeCall on each participating device. Version **1.0 is preparing for release**; no verified public download is available. Connectivity depends on distance, obstacles, devices and system conditions. It is not emergency communication equipment and does not promise a fixed range or continuous background connectivity.
`,ls=`Version: 1.0. Original effective date: October 8, 2026. Notice reorganized October 23, 2026. Publisher and support: AILife Lab. Contact: [sherardchina@gmail.com](mailto:sherardchina@gmail.com).

### 1. Local communication and recipients
RidgeCall has no account, developer-operated communication server, advertising, analytics or tracking SDK. The developer does not receive your conversations, photos, videos or device identity through the app.

When nearby connections are enabled, your nickname and public device identity are shared with nearby devices for discovery and authentication. Approved members receive community information and the voice, text, photos or silent clips you send. Devices may also relay encrypted traffic for other members.

### 2. Permissions and choices
The microphone sends intercom audio while you hold to talk; recordings are not saved. The camera is used for media you capture, and the system photo picker supplies only selected items. Local-network access discovers and connects nearby devices. You may turn nearby connections off or revoke permissions in system Settings, affecting the related functions.

### 3. Storage and deletion
Preferences stay on the device. Identity keys and saved community credentials use Keychain. A local replay-protection database stores packet identifiers to reject repeated traffic. Message history uses a bounded memory cache that can be cleared in Settings. Media preview and preparation may use temporary files, removed after use.

Leaving a community clears its saved credentials. Uninstalling does not guarantee deletion of Keychain device identity. Clearing local history cannot delete copies on other members' devices. System backups, deliberately shared copies and Apple services are managed by the corresponding system or service.

### 4. Security limits
Communication uses authenticated encrypted links and encrypted community messages. Compare identity codes in person before approval. Recipients can view and copy what you send. Encryption does not prevent a recipient from saving content or guarantee safety after a device is lost or compromised.

### 5. Support, minors and changes
When you email support, your address and voluntarily provided information are used to handle the request. Do not send conversations, identity keys or community credentials. You may request deletion of support correspondence we control, except legally required records.

The app is not a public content community for children. Guardians should guide minors in choosing recipients. Changes to data handling will be reflected in the app, website policy and store privacy information, with notice and authorization where applicable.
`,us=`### 1. 设置昵称
首次打开输入昵称，以便伙伴辨认。昵称和公开设备身份会参与附近发现，请避免使用不愿向附近人员展示的信息。

### 2. 开启附近连接
双方保持 Wi-Fi 和附近连接开启，并允许本地网络访问。初次排查建议先在同一 Wi-Fi 局域网、应用前台状态下测试。连接是否可用取决于环境，不把“无需云服务”理解为任何场景都能通信。

### 3. 邀请并核对身份
在附近设备中邀请伙伴，加入社群需要批准。当面将申请设备的身份短码与其设置中显示的短码核对一致，再批准；不要仅凭昵称信任设备。

### 4. 按住讲话
进入对讲，按需允许麦克风，按住讲话按钮发送语音，松开停止。静音控件用于关闭接收声音。保持应用在前台；“保持会话”不能保证锁屏或后台仍可连通。

### 5. 发送文字与媒体
从消息入口输入文字、选择照片，或使用相机拍摄照片及两秒无声短实况。系统照片选择器只提供你选中的内容；相机按需授权。发送后查看传输结果，避免把操作完成当成对方一定收到。

### 6. 退出与清理
在社群中查看成员，按权限调整名称或移除成员。可关闭附近连接、退出社群或在设置清除本机消息历史。退出社群清除已保存的社群凭据；接收方仍可能保存其副本，钥匙串设备身份也可能在卸载后保留。

### 当前截图与版本
图片为 1.0 发布配置在真实模拟器中的空状态和昵称界面，不虚构已连接伙伴，也不证明真实无线连接能力。下载入口在公开可用后再补充。
`,ds=`山呼（RidgeCall）是 iPhone 与 iPad 上的附近沟通工具。与身边伙伴组建社群，按住讲话、松开停止，把临时沟通留在附近设备之间。

- 发现附近设备、邀请并批准加入；批准前可当面核对身份短码。
- 分享文字、照片和两秒无声短实况，并查看传输结果。
- 查看成员、静音接收声音、管理社群名称；创始管理员可移除成员。
- 提供前台“保持会话”界面，保留讲话和退出控件。

要求 **iOS / iPadOS 17 或更新版本**，各参与设备均需安装山呼。当前 **1.0 准备上架**，尚无经核实的公开下载入口。连接受距离、遮挡、设备及系统状态影响；山呼不替代紧急通信设备，不承诺固定距离或后台持续在线。
`,fs=`版本：1.0。原政策生效日期：2026-10-08。本次说明整理：2026-10-23。发布与支持：AILife Lab。联系：[sherardchina@gmail.com](mailto:sherardchina@gmail.com)。

### 1. 本地通信及接收方
山呼无需账号，不设开发者运营的通信服务器，不含广告、分析或追踪 SDK。开发者不会通过应用接收对话、照片、视频或设备身份。

开启附近连接后，你的昵称和公开设备身份与附近设备共享，用于发现和认证。获准加入的成员接收社群信息，以及你发送的语音、文字、照片或无声短实况。设备也可能为其他成员中继加密通信。

### 2. 权限与选择
麦克风用于按住讲话时发送对讲语音，不保存录音。相机仅用于主动拍摄媒体；系统照片选择器仅提供你选择的内容。本地网络用于发现及连接附近设备。你可关闭附近连接或在系统设置撤销权限，对应功能将受影响。

### 3. 保存与删除
偏好保存在本机；身份密钥与已保存社群凭据存于钥匙串。本地重放防护数据库保存数据包标识，用于拒绝重复通信。消息历史采用有容量上限的内存缓存，可在设置清除。媒体预览和准备可能使用临时文件，用后移除。

退出社群清除其已保存凭据；卸载不保证清除钥匙串中的设备身份。清除本机历史不会删除其他成员设备上的副本。系统备份、主动分享的副本及 Apple 系统服务由相应系统或服务管理。

### 4. 安全边界
通信采用经过身份认证的加密链路与加密社群消息。批准前请当面核对身份短码。接收方可以查看和复制收到的内容；加密不阻止接收方另行保存，不保证设备丢失或被控制后的安全。

### 5. 支持、未成年人及更新
主动发邮件时，你的邮箱及自愿提供的信息用于处理该请求。请勿发送对话内容、身份密钥或社群凭据；可请求删除我们控制范围内的支持通信，法律要求保留的记录除外。

本应用不是面向儿童的公共内容社区；未成年人应在监护人指导下管理分享对象。数据处理改变时会更新应用说明、网站政策及商店隐私信息，并按适用要求告知与取得授权。
`,ps=`### 1. 設定暱稱
首次開啟輸入暱稱，以便夥伴辨認。暱稱和公開裝置身份會參與附近發現，請避免使用不願向附近人員展示的資訊。

### 2. 開啟附近連線
雙方保持 Wi-Fi 和附近連線開啟，並允許本地網路訪問。初次排查建議先在同一 Wi-Fi 區域網、應用前臺狀態下測試。連線是否可用取決於環境，不把“無需雲服務”理解為任何場景都能通訊。

### 3. 邀請並核對身份
在附近裝置中邀請夥伴，加入社群需要批准。當面將申請裝置的身份短碼與其設定中顯示的短碼核對一致，再批准；不要僅憑暱稱信任裝置。

### 4. 按住講話
進入對講，按需允許麥克風，按住講話按鈕傳送語音，鬆開停止。靜音控制元件用於關閉接收聲音。保持應用在前臺；“保持會話”不能保證鎖屏或後臺仍可連通。

### 5. 傳送文字與媒體
從訊息入口輸入文字、選擇照片，或使用相機拍攝照片及兩秒無聲短實況。系統照片選擇器只提供你選中的內容；相機按需授權。傳送後檢視傳輸結果，避免把操作完成當成對方一定收到。

### 6. 退出與清理
在社群中檢視成員，按許可權調整名稱或移除成員。可關閉附近連線、退出社群或在設定清除本機訊息歷史。退出社群清除已儲存的社群憑據；接收方仍可能儲存其副本，鑰匙串裝置身份也可能在解除安裝後保留。

### 當前截圖與版本
圖片為 1.0 釋出配置在真實模擬器中的空狀態和暱稱介面，不虛構已連線夥伴，也不證明真實無線連線能力。下載入口在公開可用後再補充。
`,ms=`山呼（RidgeCall）是 iPhone 與 iPad 上的附近溝通工具。與身邊夥伴組建社群，按住講話、鬆開停止，把臨時溝通留在附近裝置之間。

- 發現附近裝置、邀請並批准加入；批准前可當面核對身份短碼。
- 分享文字、照片和兩秒無聲短實況，並檢視傳輸結果。
- 檢視成員、靜音接收聲音、管理社群名稱；創始管理員可移除成員。
- 提供前臺“保持會話”介面，保留講話和退出控制元件。

要求 **iOS / iPadOS 17 或更新版本**，各參與裝置均需安裝山呼。當前 **1.0 準備上架**，尚無經核實的公開下載入口。連線受距離、遮擋、裝置及系統狀態影響；山呼不替代緊急通訊裝置，不承諾固定距離或後臺持續線上。
`,hs=`版本：1.0。原政策生效日期：2026-10-08。本次說明整理：2026-10-23。釋出與支援：AILife Lab。聯絡：[sherardchina@gmail.com](mailto:sherardchina@gmail.com)。

### 1. 本地通訊及接收方
山呼無需賬號，不設開發者運營的通訊伺服器，不含廣告、分析或追蹤 SDK。開發者不會透過應用接收對話、照片、影片或裝置身份。

開啟附近連線後，你的暱稱和公開裝置身份與附近裝置共享，用於發現和認證。獲准加入的成員接收社群資訊，以及你傳送的語音、文字、照片或無聲短實況。裝置也可能為其他成員中繼加密通訊。

### 2. 許可權與選擇
麥克風用於按住講話時傳送對講語音，不儲存錄音。相機僅用於主動拍攝媒體；系統照片選擇器僅提供你選擇的內容。本地網路用於發現及連線附近裝置。你可關閉附近連線或在系統設定撤銷許可權，對應功能將受影響。

### 3. 儲存與刪除
偏好儲存在本機；身份金鑰與已儲存社群憑據存於鑰匙串。本地重放防護資料庫儲存資料包標識，用於拒絕重複通訊。訊息歷史採用有容量上限的記憶體快取，可在設定清除。媒體預覽和準備可能使用臨時檔案，用後移除。

退出社群清除其已儲存憑據；解除安裝不保證清除鑰匙串中的裝置身份。清除本機歷史不會刪除其他成員裝置上的副本。系統備份、主動分享的副本及 Apple 系統服務由相應系統或服務管理。

### 4. 安全邊界
通訊採用經過身份認證的加密鏈路與加密社群訊息。批准前請當面核對身份短碼。接收方可以檢視和複製收到的內容；加密不阻止接收方另行儲存，不保證裝置丟失或被控制後的安全。

### 5. 支援、未成年人及更新
主動發郵件時，你的郵箱及自願提供的資訊用於處理該請求。請勿傳送對話內容、身份金鑰或社群憑據；可請求刪除我們控制範圍內的支援通訊，法律要求保留的記錄除外。

本應用不是面向兒童的公共內容社群；未成年人應在監護人指導下管理分享物件。資料處理改變時會更新應用說明、網站政策及商店隱私資訊，並按適用要求告知與取得授權。
`,gs=`### 1. Install
Download the [DMG](https://github.com/ailifelab/WiFiSentinel/releases/download/v0.1-build5.3/WiFiSentinel-0.1-build5.3-macos-arm64.dmg) and [SHA-256 file](https://github.com/ailifelab/WiFiSentinel/releases/download/v0.1-build5.3/WiFiSentinel-0.1-build5.3-macos-arm64.dmg.sha256), verify them, then drag the app to Applications. The official package is Developer ID signed and Apple notarized. Check its origin in the standard first-open prompt.

### 2. Observe first
Open Status and Actions from the eyes-and-Wi-Fi menu-bar icon. Review the conclusion and local/external responses. The menu-bar icon reopens the window after closing it. Monitoring and anomaly logs work with automatic recovery disabled.

### 3. Set up probes
Change the interval or custom business URL in Detection Settings and save. Default targets are Apple and Cloudflare. Before using a different URL, make sure periodic requests are appropriate. Saved-network names and gateway ports are optional.

macOS may request location permission to read the current Wi-Fi name. The app does not read location coordinates or Wi-Fi passwords. Denial can limit network verification and reconnection; follow the displayed guidance.

### 4. Choose recovery behavior
If needed, enable automatic recovery for this launch and read the confirmation. A new launch requires confirmation again. The default conservative policy does not cycle Wi-Fi solely for an external failure when the LAN is healthy. The internet-failure recovery policy may act after both external targets repeatedly time out despite a working LAN.

Both policies require at least three qualifying checks and 120 seconds of persistent failure. Two failed automatic recovery validations lead to a 30-minute awake-time cooldown. Detect and process by policy may also recover when automatic recovery is enabled. Leave the master switch off for observation only.

Manual reconnect also asks for confirmation. Automatic or manual recovery may briefly cycle Wi-Fi and interrupt meetings, downloads, SSH or VPN. Use monitoring only when interruptions are unacceptable.

### 5. Diagnose, update and remove
Check Anomaly Log and Execution and Permissions. Remove SSIDs, addresses, usernames and private paths before sharing exports. Actual outage recovery, specified-network reconnection and \`-3900\` cases remain insufficiently verified. Signing and notarization do not validate network recovery.

Quit normally before updating or rolling back and keep a copy of the old app. If Wi-Fi re-enabling is unconfirmed, check the system menu first. Before uninstalling, ensure no recovery transaction remains unfinished. Settings and logs live at \`~/Library/Application Support/WiFiSentinel/\`; back up or remove them after normal shutdown as needed.

[Full instructions](https://github.com/ailifelab/WiFiSentinel#怎么用) · [Installation and rollback](https://github.com/ailifelab/WiFiSentinel/blob/main/docs/INSTALL.md) · [Validation limits](https://github.com/ailifelab/WiFiSentinel/blob/main/docs/VALIDATION.md). The project uses MIT. Screenshots show real operation; automatic recovery is on in the image but off on a new launch.
`,_s=`This text was written entirely by CODEX.

WiFiSentinel is an AI-assisted Mac menu-bar utility. When Wi-Fi appears connected but websites will not load, it helps distinguish connection problems from internet reachability.

- Check Wi-Fi association, the local network and two external targets separately.
- See conclusions, fault rechecks and automatic/manual recovery counts.
- Check every 60 seconds by default, adjust the interval and targets, and inspect or export bounded anomaly logs.
- Automatic recovery starts disabled on every launch. It requires your confirmation and enters cooldown after repeated failures.

Public version **0.1 / build 5.3** provides an **Apple silicon (arm64)** installer only, with no Intel package. Its minimum build target is macOS 13; existing checks used macOS 27.0.1 and earlier systems have not been verified on hardware. It cannot boost wireless signal or guarantee recovery from every fault.
`,vs=`Version, effective date and update date: October 23, 2026. Applies to WiFiSentinel 0.1 / build 5.3. Maintainer and support: AILife Lab. This text was written entirely by CODEX.

### 1. Local settings and diagnostics
Settings, events, snapshots and recovery-policy state stay in the local user directory \`~/Library/Application Support/WiFiSentinel/\`. Network names may appear in plain text. Diagnostics may contain gateways, interfaces, address-derived summaries, permissions, faults, counts and timestamps. Summaries and hashes can still be guessed or correlated and are not guaranteed anonymous.

The app does not automatically upload observation logs to a maintainer service or read Wi-Fi passwords, private keys or location coordinates.

### 2. Probes make network requests
Default business probes send bounded requests to:
- \`https://www.apple.com/library/test/success.html\`
- \`https://www.cloudflare.com/cdn-cgi/trace\`

You can configure other targets. Target services, network intermediaries and VPN providers may observe source addresses, timing and connection characteristics. Monitoring is not entirely offline. External services retain request information under their own policies: [Apple](https://www.apple.com/legal/privacy/) and [Cloudflare](https://www.cloudflare.com/privacypolicy/). Local checks also communicate with the network devices being tested.

### 3. System permissions and controls
Reading the actual Wi-Fi name may require system location authorization. That permission supports reading network information; the app does not collect coordinates. You can deny or revoke it in macOS Settings, which may limit network verification. The app installs no privileged background service. Signing and notarization do not automatically grant permissions.

Automatic recovery is disabled on every launch and enabled only by confirmation for that session. Recovery can cycle Wi-Fi and interrupt connections. You can monitor without recovery or quit normally to stop checks.

### 4. Retention, export and deletion
Local settings and diagnostics support checks, troubleshooting and recovery-state decisions. Anomaly logs are bounded. Removing the app does not automatically delete its user-data directory. Quit normally and confirm no Wi-Fi recovery transaction remains before backing up or deleting the directory. Deletion also removes settings and cooldown records.

When you export or submit diagnostics, the recipient receives that file. Remove SSIDs, addresses, usernames, hostnames and private paths first. Do not post complete settings or raw snapshots in a public issue. Manage system backups, exports and recipient copies separately.

### 5. Support and changes
Visiting GitHub or this website, or sending support email, shares normal request information with the relevant website or email service. Your address and information voluntarily sent to [sherardchina@gmail.com](mailto:sherardchina@gmail.com) are used to handle the request. You may request deletion of correspondence we control, except legally required records.

This network utility does not actively request age or children's data. If data handling changes, this notice will be updated with notice and authorization where applicable. It does not guarantee absolute safety for any network environment or recipient.
`,ys=`### 1. 安装
[下载 DMG](https://github.com/ailifelab/WiFiSentinel/releases/download/v0.1-build5.3/WiFiSentinel-0.1-build5.3-macos-arm64.dmg) 与 [SHA-256 校验文件](https://github.com/ailifelab/WiFiSentinel/releases/download/v0.1-build5.3/WiFiSentinel-0.1-build5.3-macos-arm64.dmg.sha256)，核对后将应用拖入 Applications。正式包已经 Developer ID 签名及 Apple 公证，按系统首次打开提示核对来源即可。

### 2. 保持监测，先观察
从菜单栏双眼 Wi-Fi 图标打开“状态与操作”，查看结论及局域网、外网响应。关闭窗口仍可从菜单栏重新打开。保持自动恢复关闭时也能检测并查看异常。

### 3. 调整检测设置
在“检测设置”修改间隔或填写自定义业务地址，点击保存。默认访问 Apple 与 Cloudflare 检测目标；设置其他地址前确认可以接受向该地址周期请求。已保存网络名称与网关端口为可选项，普通使用可先留空。

读取当前网络名称可能需要 macOS 定位授权；应用不读取位置坐标或 Wi-Fi 密码。拒绝授权后按应用提示使用，部分网络核对与重联功能会受限。

### 4. 选择恢复方式
需要时勾选“允许本次启动自动恢复”并阅读确认；重新启动仍需再次确认。默认保守策略在局域网正常时，不会仅凭外网异常就自动关开 Wi-Fi。“上网异常循环恢复”可能在局域网正常而两个外网目标持续超时后触发，请先了解影响。

两种策略都至少需要三轮、持续 120 秒的符合条件故障；连续两次自动恢复验证失败后，冷却 30 分钟清醒时间。“检测并按策略处理”在自动恢复开启时也可能触发恢复；只观察时请关闭总开关。

手动“一键重联 Wi-Fi…”也会先确认。自动或手动恢复可能短暂关开 Wi-Fi，中断会议、下载、SSH 和 VPN。不能接受中断时只用监测。

### 5. 异常、更新与卸载
查看“异常日志”和“执行与权限”；分享导出诊断前删除 SSID、地址、用户名和私人路径。真实断网自动恢复、指定网络重联及 \`-3900\` 情况仍未充分验证，签名公证不代表网络恢复能力已通过。

更新或回滚前正常退出并保留旧应用；如重新开启 Wi-Fi 未确认，先到系统菜单处理。卸载前确认没有未完成恢复事务；本地设置与日志在 \`~/Library/Application Support/WiFiSentinel/\`，需要时在正常退出后自行备份或删除。

[完整使用说明](https://github.com/ailifelab/WiFiSentinel#怎么用) · [安装与回滚](https://github.com/ailifelab/WiFiSentinel/blob/main/docs/INSTALL.md) · [验证范围](https://github.com/ailifelab/WiFiSentinel/blob/main/docs/VALIDATION.md)。项目采用 MIT 许可。截图来自真实运行；截图中自动恢复开启，新启动仍默认关闭。
`,bs=`本文由CODEX全自动编写。

WiFi 哨兵是借助 AI 开发的 Mac 菜单栏工具。Wi-Fi 看起来还连着、网页却打不开时，帮你区分连接与上网状况，减少反复打开系统菜单检查的操作。

- 分别检查 Wi-Fi 关联、局域网响应及两个外网目标。
- 展示检测结论、故障复核进度和自动／手动恢复次数。
- 默认 60 秒检测，可调整间隔和业务目标；异常日志支持详情、翻页及导出。
- 自动恢复每次启动默认关闭，确认后才按策略尝试；连续失败进入冷却。

公开版本 **0.1 / build 5.3**，仅有 **Apple Silicon（arm64）** 安装包，没有 Intel 安装包。最低编译目标 macOS 13；既有检查主机为 macOS 27.0.1，更早系统未实机验证。它不会增强无线信号，不保证恢复所有故障。
`,xs=`版本、生效与更新日期：2026-10-23。适用于 WiFi 哨兵 0.1 / build 5.3。维护与支持：AILife Lab。本文由CODEX全自动编写。

### 1. 本地设置与诊断
设置、事件、运行快照及恢复策略状态保存在本机用户目录 \`~/Library/Application Support/WiFiSentinel/\`。网络名称可能以明文出现；诊断也可能包含网关、接口、地址派生摘要、权限、故障、次数和时间。摘要或哈希仍可能被猜测、关联，不保证匿名。

应用不把本地观察日志自动上传到维护者服务，不读取 Wi-Fi 密码、私钥或位置坐标。

### 2. 检测会发送网络请求
默认业务探测向以下公开目标发送有界请求：
- \`https://www.apple.com/library/test/success.html\`
- \`https://www.cloudflare.com/cdn-cgi/trace\`

你可设置其他业务目标。目标服务、网络中间设备及 VPN 提供方可能观察来源地址、时间与连接特征；这不是完全离线的监测。外部服务如何保存请求信息受其自身政策管理，见 [Apple](https://www.apple.com/legal/privacy/) 与 [Cloudflare](https://www.cloudflare.com/privacypolicy/)。本地网络检测也会与所检测网络设备通信。

### 3. 系统权限与控制
读取实际 Wi-Fi 名称可能需要系统定位授权，该授权用于网络信息读取，不代表应用采集位置坐标。你可以拒绝或在 macOS 设置撤销；部分网络核对功能可能不可用。应用不安装特权后台服务，签名公证不会自动授予权限。

自动恢复每次启动默认关闭，按本次确认才启用。恢复可能关开 Wi-Fi，影响当前连接；你可只用监测或正常退出应用停止检测。

### 4. 保存、导出与删除
设置和诊断在本地用于检测、排错与恢复状态判断，异常日志有容量上限。卸载应用不自动清除上述用户目录。请先正常退出并确认没有未完成的 Wi-Fi 恢复事务，再自行备份或删除目录；删除也会清除设置与冷却记录。

你主动导出或提交诊断时，接收方会获得该文件。提交前删除 SSID、地址、用户名、主机名、私人路径等信息；不要在公开 Issue 粘贴完整设置或原始快照。系统备份、已导出文件及接收方副本需分别管理。

### 5. 支持与更新
访问 GitHub、官网或发送支持邮件，会向相应网站或邮件服务提供正常请求信息。发送至 [sherardchina@gmail.com](mailto:sherardchina@gmail.com) 的邮箱及自愿提供的信息用于处理请求；可请求删除我们可控制的支持通信，法律要求保留的记录除外。

本应用是网络工具，不主动索取年龄或儿童资料。若处理方式改变，会更新本说明并按适用要求告知和取得授权。本说明不保证任何网络环境或接收方的绝对安全。
`,Ss=`### 1. 安裝
[下載 DMG](https://github.com/ailifelab/WiFiSentinel/releases/download/v0.1-build5.3/WiFiSentinel-0.1-build5.3-macos-arm64.dmg) 與 [SHA-256 校驗檔案](https://github.com/ailifelab/WiFiSentinel/releases/download/v0.1-build5.3/WiFiSentinel-0.1-build5.3-macos-arm64.dmg.sha256)，核對後將應用拖入 Applications。正式包已經 Developer ID 簽名及 Apple 公證，按系統首次開啟提示核對來源即可。

### 2. 保持監測，先觀察
從選單欄雙眼 Wi-Fi 圖示開啟“狀態與操作”，檢視結論及區域網、外網響應。關閉視窗仍可從選單欄重新開啟。保持自動恢復關閉時也能檢測並檢視異常。

### 3. 調整檢測設定
在“檢測設定”修改間隔或填寫自定義業務地址，點選儲存。預設訪問 Apple 與 Cloudflare 檢測目標；設定其他地址前確認可以接受向該地址週期請求。已儲存網路名稱與閘道器埠為可選項，普通使用可先留空。

讀取當前網路名稱可能需要 macOS 定位授權；應用不讀取位置座標或 Wi-Fi 密碼。拒絕授權後按應用提示使用，部分網路核對與重聯功能會受限。

### 4. 選擇恢復方式
需要時勾選“允許本次啟動自動恢復”並閱讀確認；重新啟動仍需再次確認。預設保守策略在區域網正常時，不會僅憑外網異常就自動關開 Wi-Fi。“上網異常迴圈恢復”可能在區域網正常而兩個外網目標持續超時後觸發，請先了解影響。

兩種策略都至少需要三輪、持續 120 秒的符合條件故障；連續兩次自動恢復驗證失敗後，冷卻 30 分鐘清醒時間。“檢測並按策略處理”在自動恢復開啟時也可能觸發恢復；只觀察時請關閉總開關。

手動“一鍵重聯 Wi-Fi…”也會先確認。自動或手動恢復可能短暫關開 Wi-Fi，中斷會議、下載、SSH 和 VPN。不能接受中斷時只用監測。

### 5. 異常、更新與解除安裝
檢視“異常日誌”和“執行與許可權”；分享匯出診斷前刪除 SSID、地址、使用者名稱和私人路徑。真實斷網自動恢復、指定網路重聯及 \`-3900\` 情況仍未充分驗證，簽名公證不代表網路恢復能力已透過。

更新或回滾前正常退出並保留舊應用；如重新開啟 Wi-Fi 未確認，先到系統選單處理。解除安裝前確認沒有未完成恢復事務；本地設定與日誌在 \`~/Library/Application Support/WiFiSentinel/\`，需要時在正常退出後自行備份或刪除。

[完整使用說明](https://github.com/ailifelab/WiFiSentinel#怎么用) · [安裝與回滾](https://github.com/ailifelab/WiFiSentinel/blob/main/docs/INSTALL.md) · [驗證範圍](https://github.com/ailifelab/WiFiSentinel/blob/main/docs/VALIDATION.md)。專案採用 MIT 許可。截圖來自真實執行；截圖中自動恢復開啟，新啟動仍預設關閉。
`,Cs=`本文由CODEX全自動編寫。

WiFi 哨兵是藉助 AI 開發的 Mac 選單欄工具。Wi-Fi 看起來還連著、網頁卻打不開時，幫你區分連線與上網狀況，減少反覆開啟系統選單檢查的操作。

- 分別檢查 Wi-Fi 關聯、區域網響應及兩個外網目標。
- 展示檢測結論、故障複核進度和自動／手動恢復次數。
- 預設 60 秒檢測，可調整間隔和業務目標；異常日誌支援詳情、翻頁及匯出。
- 自動恢復每次啟動預設關閉，確認後才按策略嘗試；連續失敗進入冷卻。

公開版本 **0.1 / build 5.3**，僅有 **Apple Silicon（arm64）** 安裝包，沒有 Intel 安裝包。最低編譯目標 macOS 13；既有檢查主機為 macOS 27.0.1，更早系統未實機驗證。它不會增強無線訊號，不保證恢復所有故障。
`,ws=`版本、生效與更新日期：2026-10-23。適用於 WiFi 哨兵 0.1 / build 5.3。維護與支援：AILife Lab。本文由CODEX全自動編寫。

### 1. 本地設定與診斷
設定、事件、執行快照及恢復策略狀態儲存在本機使用者目錄 \`~/Library/Application Support/WiFiSentinel/\`。網路名稱可能以明文出現；診斷也可能包含閘道器、介面、地址派生摘要、許可權、故障、次數和時間。摘要或雜湊仍可能被猜測、關聯，不保證匿名。

應用不把本地觀察日誌自動上傳到維護者服務，不讀取 Wi-Fi 密碼、私鑰或位置座標。

### 2. 檢測會傳送網路請求
預設業務探測向以下公開目標傳送有界請求：
- \`https://www.apple.com/library/test/success.html\`
- \`https://www.cloudflare.com/cdn-cgi/trace\`

你可設定其他業務目標。目標服務、網路中間裝置及 VPN 提供方可能觀察來源地址、時間與連線特徵；這不是完全離線的監測。外部服務如何儲存請求資訊受其自身政策管理，見 [Apple](https://www.apple.com/legal/privacy/) 與 [Cloudflare](https://www.cloudflare.com/privacypolicy/)。本地網路檢測也會與所檢測網路裝置通訊。

### 3. 系統許可權與控制
讀取實際 Wi-Fi 名稱可能需要系統定位授權，該授權用於網路資訊讀取，不代表應用採集位置座標。你可以拒絕或在 macOS 設定撤銷；部分網路核對功能可能不可用。應用不安裝特權後臺服務，簽名公證不會自動授予許可權。

自動恢復每次啟動預設關閉，按本次確認才啟用。恢復可能關開 Wi-Fi，影響當前連線；你可只用監測或正常退出應用停止檢測。

### 4. 儲存、匯出與刪除
設定和診斷在本地用於檢測、排錯與恢復狀態判斷，異常日誌有容量上限。解除安裝應用不自動清除上述使用者目錄。請先正常退出並確認沒有未完成的 Wi-Fi 恢復事務，再自行備份或刪除目錄；刪除也會清除設定與冷卻記錄。

你主動匯出或提交診斷時，接收方會獲得該檔案。提交前刪除 SSID、地址、使用者名稱、主機名、私人路徑等資訊；不要在公開 Issue 貼上完整設定或原始快照。系統備份、已匯出檔案及接收方副本需分別管理。

### 5. 支援與更新
訪問 GitHub、官網或傳送支援郵件，會向相應網站或郵件服務提供正常請求資訊。傳送至 [sherardchina@gmail.com](mailto:sherardchina@gmail.com) 的郵箱及自願提供的資訊用於處理請求；可請求刪除我們可控制的支援通訊，法律要求保留的記錄除外。

本應用是網路工具，不主動索取年齡或兒童資料。若處理方式改變，會更新本說明並按適用要求告知和取得授權。本說明不保證任何網路環境或接收方的絕對安全。
`,Ts=[`zh-Hans`,`zh-Hant`,`en`],Es={"zh-Hans":`简体`,"zh-Hant":`繁體`,en:`English`};function Ds({language:e,kind:t,slug:n}){return`/${e}/${t}/${n?`${n}/`:``}`}function Os(e){let t=e.match(/^\/(?:(zh-Hans|zh-Hant|en)\/)?(apps|privacy)\/(?:([a-z0-9-]+)\/)?$/);if(t)return{language:t[1]||`zh-Hans`,kind:t[2],slug:t[3]}}var ks=Object.assign({"../../content/products/framedir/en/locale.json":yo,"../../content/products/framedir/zh-Hans/locale.json":bo,"../../content/products/framedir/zh-Hant/locale.json":xo,"../../content/products/inkengine/en/locale.json":So,"../../content/products/inkengine/zh-Hans/locale.json":Co,"../../content/products/inkengine/zh-Hant/locale.json":wo,"../../content/products/photographer-assistant/en/locale.json":To,"../../content/products/photographer-assistant/zh-Hans/locale.json":Eo,"../../content/products/photographer-assistant/zh-Hant/locale.json":Do,"../../content/products/ridgecall/en/locale.json":Oo,"../../content/products/ridgecall/zh-Hans/locale.json":ko,"../../content/products/ridgecall/zh-Hant/locale.json":Ao,"../../content/products/wifisentinel/en/locale.json":jo,"../../content/products/wifisentinel/zh-Hans/locale.json":Mo,"../../content/products/wifisentinel/zh-Hant/locale.json":No}),As=Object.assign({"../../content/products/framedir/en/guide.md":Po,"../../content/products/framedir/en/intro.md":Fo,"../../content/products/framedir/en/privacy.md":Io,"../../content/products/framedir/zh-Hans/guide.md":Lo,"../../content/products/framedir/zh-Hans/intro.md":Ro,"../../content/products/framedir/zh-Hans/privacy.md":zo,"../../content/products/framedir/zh-Hant/guide.md":Bo,"../../content/products/framedir/zh-Hant/intro.md":Vo,"../../content/products/framedir/zh-Hant/privacy.md":Ho,"../../content/products/inkengine/en/guide.md":Uo,"../../content/products/inkengine/en/intro.md":Wo,"../../content/products/inkengine/en/privacy.md":Go,"../../content/products/inkengine/zh-Hans/guide.md":Ko,"../../content/products/inkengine/zh-Hans/intro.md":qo,"../../content/products/inkengine/zh-Hans/privacy.md":Jo,"../../content/products/inkengine/zh-Hant/guide.md":Yo,"../../content/products/inkengine/zh-Hant/intro.md":Xo,"../../content/products/inkengine/zh-Hant/privacy.md":Zo,"../../content/products/photographer-assistant/en/guide.md":Qo,"../../content/products/photographer-assistant/en/intro.md":$o,"../../content/products/photographer-assistant/en/privacy.md":es,"../../content/products/photographer-assistant/zh-Hans/guide.md":ts,"../../content/products/photographer-assistant/zh-Hans/intro.md":ns,"../../content/products/photographer-assistant/zh-Hans/privacy.md":rs,"../../content/products/photographer-assistant/zh-Hant/guide.md":is,"../../content/products/photographer-assistant/zh-Hant/intro.md":as,"../../content/products/photographer-assistant/zh-Hant/privacy.md":os,"../../content/products/ridgecall/en/guide.md":ss,"../../content/products/ridgecall/en/intro.md":cs,"../../content/products/ridgecall/en/privacy.md":ls,"../../content/products/ridgecall/zh-Hans/guide.md":us,"../../content/products/ridgecall/zh-Hans/intro.md":ds,"../../content/products/ridgecall/zh-Hans/privacy.md":fs,"../../content/products/ridgecall/zh-Hant/guide.md":ps,"../../content/products/ridgecall/zh-Hant/intro.md":ms,"../../content/products/ridgecall/zh-Hant/privacy.md":hs,"../../content/products/wifisentinel/en/guide.md":gs,"../../content/products/wifisentinel/en/intro.md":_s,"../../content/products/wifisentinel/en/privacy.md":vs,"../../content/products/wifisentinel/zh-Hans/guide.md":ys,"../../content/products/wifisentinel/zh-Hans/intro.md":bs,"../../content/products/wifisentinel/zh-Hans/privacy.md":xs,"../../content/products/wifisentinel/zh-Hant/guide.md":Ss,"../../content/products/wifisentinel/zh-Hant/intro.md":Cs,"../../content/products/wifisentinel/zh-Hant/privacy.md":ws});function js(e,t){let n=`../../content/products/${e.slug}/${t}/`,r=ks[`${n}locale.json`];if(!r)throw Error(`Missing localized metadata: ${n}`);let i=e=>{let t=As[`${n}${e}.md`];if(!t?.trim())throw Error(`Missing localized content: ${n}${e}.md`);return t};return{product:e,locale:r,intro:i(`intro`),guide:i(`guide`),privacy:e.privacyStatus===`draft`?null:i(`privacy`)}}var Ms={"zh-Hans":{about:`关于`,notes:`工造手记`,all:`全部`,filter:`筛选作品`,home:`工造院`,apps:`众器`,privacy:`隐私说明`,menu:`菜单`,navigation:`主导航`,switch:`切换语言`,appList:`把想法做成可用之器`,appListIntro:`从生活里观察问题，用技术和手艺尝试回答。各产品分别提供简介与详细使用说明。`,policyList:`逐件说明，清楚选择`,policyListIntro:`每款应用独立说明本机处理、联网请求、权限、共享与删除方式。`,intro:`简介`,guide:`详细使用说明`,images:`界面与画面`,details:`产品资料`,status:`当前状态`,category:`类别`,platform:`平台`,verified:`资料核对日期`,version:`政策版本`,effective:`生效日期`,updated:`最近更新`,contact:`联系支持`,publisher:`维护品牌`,download:`获取应用`,appStore:`前往 App Store`,testFlight:`参加 TestFlight 测试`,website:`下载与发行说明`,unavailable:`尚未开放公开下载`,readPolicy:`查看隐私政策`,readProduct:`查看产品介绍`,policyInfo:`政策信息`,policyScope:`本说明仅适用于本产品。请按实际使用的功能查看数据流、权限与删除边界。`,read:`了解此器`,draft:`隐私说明核对中`,footer:`观物 · 爱物 · 造物`,icon:`图标`,concept:`网站概念图标`,notFound:`页面未找到`,notFoundIntro:`这页暂不存在。`,shotEmpty:`真实应用截图尚待补充。`},"zh-Hant":{about:`關於`,notes:`工造手記`,all:`全部`,filter:`篩選作品`,home:`工造院`,apps:`眾器`,privacy:`隱私說明`,menu:`選單`,navigation:`主導覽`,switch:`切換語言`,appList:`把想法做成可用之器`,appListIntro:`從生活裡觀察問題，用技術和手藝嘗試回答。各產品分別提供簡介與詳細使用說明。`,policyList:`逐件說明，清楚選擇`,policyListIntro:`每款應用程式獨立說明本機處理、連網請求、權限、分享與刪除方式。`,intro:`簡介`,guide:`詳細使用說明`,images:`介面與畫面`,details:`產品資料`,status:`目前狀態`,category:`類別`,platform:`平台`,verified:`資料核對日期`,version:`政策版本`,effective:`生效日期`,updated:`最近更新`,contact:`聯絡支援`,publisher:`維護品牌`,download:`取得應用程式`,appStore:`前往 App Store`,testFlight:`參加 TestFlight 測試`,website:`下載與發行說明`,unavailable:`尚未開放公開下載`,readPolicy:`查看隱私政策`,readProduct:`查看產品介紹`,policyInfo:`政策資訊`,policyScope:`本說明僅適用於本產品。請依實際使用的功能查看資料流、權限與刪除邊界。`,read:`了解此器`,draft:`隱私說明核對中`,footer:`觀物 · 愛物 · 造物`,icon:`圖示`,concept:`網站概念圖示`,notFound:`找不到頁面`,notFoundIntro:`這個頁面暫不存在。`,shotEmpty:`實際應用程式畫面尚待補充。`},en:{about:`About`,notes:`Notes`,all:`All`,filter:`Filter apps`,home:`Workshop`,apps:`Apps`,privacy:`Privacy`,menu:`Menu`,navigation:`Main navigation`,switch:`Choose language`,appList:`Ideas made into useful tools`,appListIntro:`Tools shaped by everyday needs. Each app has an introduction followed by detailed instructions.`,policyList:`Clear choices, app by app`,policyListIntro:`Separate notices explain local processing, network requests, permissions, sharing and deletion for each app.`,intro:`Introduction`,guide:`Detailed instructions`,images:`Screenshots`,details:`App information`,status:`Status`,category:`Category`,platform:`Platforms`,verified:`Information checked`,version:`Policy version`,effective:`Effective date`,updated:`Last updated`,contact:`Contact support`,publisher:`Maintainer`,download:`Get the app`,appStore:`View on the App Store`,testFlight:`Join TestFlight`,website:`Downloads and release notes`,unavailable:`No public download yet`,readPolicy:`Read privacy notice`,readProduct:`View app details`,policyInfo:`Policy information`,policyScope:`This notice applies to this app. Review the data flows, permissions and deletion limits for the functions you use.`,read:`Explore this app`,draft:`Privacy notice under review`,footer:`Observe · Care · Create`,icon:`Icon`,concept:`Website concept icon`,notFound:`Page not found`,notFoundIntro:`This page is not available.`,shotEmpty:`Verified screenshots have not been added yet.`}};function Ns({text:e}){return(0,$.jsx)(`div`,{className:`inner-prose`,children:(0,$.jsx)(Xa,{components:{a:({href:e,children:t})=>(0,$.jsx)(`a`,{href:e?.startsWith(`/`)?i(e):e,children:t})},children:e})})}function Ps({route:e}){let{language:t,kind:n,slug:r}=e,a=Ms[t],[s,c]=(0,Ga.useState)(``),[l,u]=(0,Ga.useState)(``),d=o.filter(e=>!e.placeholder),f=[...new Set(d.map(e=>js(e,t).locale.category))],p=[...new Set(d.flatMap(e=>e.platforms))],m=o.find(e=>e.slug===r),h=!r||!(!m||n===`privacy`&&m.privacyStatus===`draft`),g=(e,n)=>i(Ds({language:t,kind:e,slug:n})),_=m&&h?js(m,t):void 0,v=_?`${_.locale.name}${n===`privacy`?` · ${a.privacy}`:``}`:n===`apps`?a.appList:a.policyList;return(0,$.jsxs)(`div`,{className:`inner-site localized-site localized-${t}`,lang:t,children:[(0,$.jsxs)(`header`,{className:`inner-header`,children:[(0,$.jsxs)(`a`,{className:`inner-brand`,href:i(`/`),"aria-label":a.home,children:[(0,$.jsx)(`span`,{className:`inner-brand-cn`,children:`爱物工造`}),(0,$.jsx)(`span`,{className:`inner-brand-en`,children:`AILife Lab`})]}),(0,$.jsxs)(`nav`,{className:`inner-nav`,"aria-label":a.navigation,children:[(0,$.jsx)(`a`,{href:i(`/`),children:a.home}),(0,$.jsx)(`a`,{href:g(`apps`),children:a.apps}),(0,$.jsx)(`a`,{href:g(`privacy`),children:a.privacy}),(0,$.jsx)(`a`,{href:i(`/notes/`),children:a.notes}),(0,$.jsx)(`a`,{href:i(`/about/`),children:a.about})]}),(0,$.jsxs)(`div`,{className:`inner-header-actions`,children:[(0,$.jsx)(`nav`,{className:`inner-languages`,"aria-label":a.switch,children:Ts.map(n=>(0,$.jsx)(`a`,{href:i(Ds({...e,language:n})),hrefLang:n,lang:n,"aria-current":n===t?`page`:void 0,children:Es[n]},n))}),(0,$.jsxs)(`details`,{className:`inner-mobile-nav`,children:[(0,$.jsx)(`summary`,{"aria-label":a.menu,children:`☰`}),(0,$.jsxs)(`nav`,{"aria-label":a.navigation,children:[(0,$.jsx)(`a`,{href:i(`/`),children:a.home}),(0,$.jsx)(`a`,{href:g(`apps`),children:a.apps}),(0,$.jsx)(`a`,{href:g(`privacy`),children:a.privacy}),(0,$.jsx)(`a`,{href:i(`/notes/`),children:a.notes}),(0,$.jsx)(`a`,{href:i(`/about/`),children:a.about})]})]})]})]}),(0,$.jsx)(`main`,{id:`main-content`,className:`inner-main`,children:h?_?(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(`div`,{className:`inner-breadcrumb`,children:[(0,$.jsx)(`a`,{href:g(n),children:n===`apps`?a.apps:a.privacy}),(0,$.jsx)(`span`,{children:`/`}),(0,$.jsx)(`span`,{children:_.locale.name})]}),n===`apps`?(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(`section`,{className:`inner-product-hero`,children:[(0,$.jsxs)(`div`,{className:`inner-product-hero-copy`,children:[(0,$.jsx)(`p`,{className:`inner-eyebrow`,children:_.locale.category}),(0,$.jsxs)(`div`,{className:`inner-product-title`,children:[(0,$.jsx)(Fs,{product:_.product,name:_.locale.name,label:a.icon}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`h1`,{children:_.locale.name}),t!==`en`&&_.product.englishName&&(0,$.jsx)(`p`,{children:_.product.englishName})]})]}),(0,$.jsx)(`p`,{className:`inner-hero-tagline`,children:_.locale.tagline}),(0,$.jsx)(`p`,{className:`inner-hero-summary`,children:_.locale.summary}),(0,$.jsxs)(`div`,{className:`inner-chips`,children:[(0,$.jsx)(`span`,{children:_.locale.statusLabel}),(0,$.jsx)(`span`,{children:_.product.platforms.join(` · `)}),_.product.iconStatus===`concept`&&(0,$.jsx)(`span`,{children:a.concept})]})]}),(0,$.jsxs)(`div`,{className:`inner-product-hero-art`,"aria-hidden":`true`,children:[(0,$.jsx)(`span`,{className:`inner-art-ring inner-art-ring-one`}),(0,$.jsx)(`span`,{className:`inner-art-ring inner-art-ring-two`}),(0,$.jsx)(`span`,{className:`inner-art-name`,children:_.product.englishName||`AILife Lab`}),(0,$.jsx)(`img`,{src:i(_.product.icon),alt:``})]})]}),(0,$.jsxs)(`nav`,{className:`inner-section-links`,"aria-label":a.guide,children:[(0,$.jsxs)(`a`,{href:`#introduction`,children:[`01 / `,a.intro]}),(0,$.jsxs)(`a`,{href:`#instructions`,children:[`02 / `,a.guide]}),(0,$.jsx)(`a`,{href:`#screenshots`,children:a.images})]}),(0,$.jsxs)(`div`,{className:`inner-content-grid`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsxs)(`section`,{className:`inner-section`,id:`introduction`,children:[(0,$.jsx)(`div`,{className:`inner-section-heading`,children:(0,$.jsxs)(`h2`,{children:[`1. `,a.intro]})}),(0,$.jsx)(Ns,{text:_.intro})]}),(0,$.jsxs)(`section`,{className:`inner-section`,id:`instructions`,children:[(0,$.jsx)(`div`,{className:`inner-section-heading`,children:(0,$.jsxs)(`h2`,{children:[`2. `,a.guide]})}),(0,$.jsx)(Ns,{text:_.guide})]})]}),(0,$.jsxs)(`aside`,{className:`inner-product-aside`,children:[(0,$.jsx)(`h2`,{children:a.details}),(0,$.jsxs)(`dl`,{children:[(0,$.jsx)(`dt`,{children:a.status}),(0,$.jsx)(`dd`,{children:_.locale.statusLabel}),(0,$.jsx)(`dt`,{children:a.platform}),(0,$.jsx)(`dd`,{children:_.product.platforms.join(` · `)}),(0,$.jsx)(`dt`,{children:a.verified}),(0,$.jsx)(`dd`,{children:_.locale.verifiedAt}),(0,$.jsx)(`dt`,{children:a.icon}),(0,$.jsx)(`dd`,{children:_.product.iconStatus===`concept`?a.concept:a.icon})]}),(0,$.jsxs)(`a`,{href:`#downloads`,children:[a.download,` ↓`]}),_.privacy&&(0,$.jsxs)(`a`,{href:g(`privacy`,r),children:[a.readPolicy,` ↗`]})]})]}),(0,$.jsxs)(`section`,{className:`inner-section`,id:`screenshots`,children:[(0,$.jsx)(`div`,{className:`inner-section-heading`,children:(0,$.jsx)(`h2`,{children:a.images})}),(0,$.jsx)(`div`,{className:`inner-screenshot-grid${r===`ridgecall`?` inner-portrait-screenshots`:``}`,children:_.product.screenshots.length?_.product.screenshots.map((e,t)=>(0,$.jsxs)(`figure`,{children:[(0,$.jsx)(`img`,{src:i(e.src),alt:_.locale.screenshotAlts[t],loading:`lazy`}),(0,$.jsx)(`figcaption`,{children:_.locale.screenshotAlts[t]})]},e.src)):(0,$.jsx)(`p`,{children:a.shotEmpty})})]}),(0,$.jsxs)(`section`,{className:`inner-section inner-action-section`,id:`downloads`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`p`,{className:`inner-eyebrow`,children:`AILIFE LAB`}),(0,$.jsx)(`h2`,{children:a.download}),(0,$.jsxs)(`p`,{children:[a.verified,` · `,_.locale.verifiedAt]})]}),(0,$.jsxs)(`div`,{className:`inner-action-links`,children:[Object.keys(_.product.links).length?Object.entries(_.product.links).map(([e,t])=>(0,$.jsxs)(`a`,{className:`inner-primary-link`,href:t,target:`_blank`,rel:`noopener noreferrer`,children:[a[e],` ↗`]},e)):(0,$.jsx)(`span`,{className:`inner-unavailable`,children:a.unavailable}),_.privacy&&(0,$.jsxs)(`a`,{href:g(`privacy`,r),children:[a.readPolicy,` ↗`]}),_.product.support&&(0,$.jsxs)(`a`,{href:_.product.support,children:[a.contact,` ↗`]})]})]})]}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(`div`,{className:`inner-page-lead`,children:[(0,$.jsx)(`p`,{className:`inner-eyebrow`,children:`AILIFE LAB`}),(0,$.jsx)(`h1`,{children:v}),(0,$.jsx)(`p`,{children:a.policyScope})]}),(0,$.jsxs)(`div`,{className:`inner-content-grid inner-policy-grid`,children:[(0,$.jsx)(`article`,{className:`inner-section`,children:(0,$.jsx)(Ns,{text:_.privacy})}),(0,$.jsxs)(`aside`,{className:`inner-product-aside`,children:[(0,$.jsx)(`h2`,{children:a.policyInfo}),(0,$.jsxs)(`dl`,{children:[(0,$.jsx)(`dt`,{children:a.version}),(0,$.jsx)(`dd`,{children:_.product.privacyVersion}),(0,$.jsx)(`dt`,{children:a.effective}),(0,$.jsx)(`dd`,{children:_.product.privacyEffectiveDate}),(0,$.jsx)(`dt`,{children:a.updated}),(0,$.jsx)(`dd`,{children:_.product.privacyUpdatedDate}),(0,$.jsx)(`dt`,{children:a.publisher}),(0,$.jsx)(`dd`,{children:_.product.developerName}),(0,$.jsx)(`dt`,{children:a.contact}),(0,$.jsx)(`dd`,{children:(0,$.jsx)(`a`,{href:`mailto:${_.product.privacyContact}`,children:_.product.privacyContact})})]}),(0,$.jsxs)(`a`,{href:g(`apps`,r),children:[a.readProduct,` ↗`]})]})]})]})]}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(`div`,{className:`inner-page-lead`,children:[(0,$.jsx)(`p`,{className:`inner-eyebrow`,children:`AILIFE LAB`}),(0,$.jsx)(`h1`,{children:v}),(0,$.jsx)(`p`,{children:n===`apps`?a.appListIntro:a.policyListIntro})]}),n===`apps`&&(0,$.jsxs)(`div`,{className:`inner-filters`,"aria-label":a.filter,children:[(0,$.jsxs)(`label`,{children:[a.category,(0,$.jsxs)(`select`,{value:s,onChange:e=>c(e.target.value),children:[(0,$.jsx)(`option`,{value:``,children:a.all}),f.map(e=>(0,$.jsx)(`option`,{children:e},e))]})]}),(0,$.jsxs)(`label`,{children:[a.platform,(0,$.jsxs)(`select`,{value:l,onChange:e=>u(e.target.value),children:[(0,$.jsx)(`option`,{value:``,children:a.all}),p.map(e=>(0,$.jsx)(`option`,{children:e},e))]})]})]}),(0,$.jsx)(`div`,{className:`inner-product-grid`,children:d.filter(e=>n!==`apps`||(!s||js(e,t).locale.category===s)&&(!l||e.platforms.includes(l))).map(e=>{let{locale:r}=js(e,t);return(0,$.jsxs)(`article`,{className:`inner-product-card`,children:[(0,$.jsxs)(`div`,{className:`inner-product-card-top`,children:[(0,$.jsx)(Fs,{product:e,name:r.name,label:a.icon}),(0,$.jsx)(`span`,{className:`inner-status`,children:r.statusLabel})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`p`,{className:`inner-card-kicker`,children:r.category}),(0,$.jsx)(`h2`,{children:r.name}),(0,$.jsx)(`p`,{children:r.summary})]}),(0,$.jsxs)(`div`,{className:`inner-product-card-foot`,children:[(0,$.jsx)(`span`,{children:e.platforms.join(` · `)}),n===`privacy`&&e.privacyStatus===`draft`?(0,$.jsx)(`span`,{children:a.draft}):(0,$.jsxs)(`a`,{href:g(n,e.slug),"aria-label":t===`zh-Hans`?`了解${r.name}`:void 0,children:[n===`apps`?a.read:a.readPolicy,` ↗`]})]})]},e.slug)})})]}):(0,$.jsxs)(`div`,{className:`inner-not-found`,children:[(0,$.jsx)(`h1`,{children:a.notFound}),(0,$.jsx)(`p`,{children:a.notFoundIntro}),(0,$.jsxs)(`a`,{href:g(`apps`),children:[a.apps,` ↗`]})]})}),(0,$.jsxs)(`footer`,{className:`inner-footer`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`strong`,{children:`AILife Lab`}),(0,$.jsx)(`span`,{children:a.footer})]}),(0,$.jsxs)(`nav`,{"aria-label":a.navigation,children:[(0,$.jsx)(`a`,{href:g(`apps`),children:a.apps}),(0,$.jsx)(`a`,{href:g(`privacy`),children:a.privacy}),(0,$.jsx)(`a`,{href:i(`/notes/`),children:a.notes}),(0,$.jsx)(`a`,{href:i(`/about/`),children:a.about})]})]})]})}function Fs({product:e,name:t,label:n}){return(0,$.jsx)(`img`,{className:`inner-product-icon`,src:i(e.icon),alt:`${t} · ${n}`,width:`96`,height:`96`})}function Is(e){let t=`/`.replace(/\/$/,``),n=e.split(/[?#]/,1)[0]||`/`;return t&&n.startsWith(`${t}/`)&&(n=n.slice(t.length)),n.startsWith(`/`)||(n=`/${n}`),n!==`/404.html`&&!n.endsWith(`/`)&&(n+=`/`),n}var Ls=[{label:`工造院`,href:`/`},{label:`众器`,href:`/apps/`},{label:`工造手记`,href:`/notes/`},{label:`关于`,href:`/about/`}];function Rs({path:e}){return(0,$.jsxs)(`header`,{className:`inner-header`,children:[(0,$.jsxs)(`a`,{className:`inner-brand`,href:i(`/`),"aria-label":`爱物工造首页`,children:[(0,$.jsx)(`span`,{className:`inner-brand-cn`,children:`爱物工造`}),(0,$.jsx)(`span`,{className:`inner-brand-en`,children:`AILife Lab`})]}),(0,$.jsx)(`nav`,{className:`inner-nav`,"aria-label":`主导航`,children:Ls.map(t=>(0,$.jsx)(`a`,{"aria-current":e===t.href?`page`:void 0,href:i(t.href),children:t.label},t.href))}),(0,$.jsxs)(`details`,{className:`inner-mobile-nav`,children:[(0,$.jsxs)(`summary`,{"aria-label":`展开导航`,children:[`菜单 `,(0,$.jsx)(`span`,{"aria-hidden":`true`,children:`☰`})]}),(0,$.jsx)(`nav`,{"aria-label":`手机导航`,children:Ls.map(e=>(0,$.jsx)(`a`,{href:i(e.href),children:e.label},e.href))})]})]})}function zs(){return(0,$.jsxs)(`footer`,{className:`inner-footer`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`strong`,{children:`爱物工造`}),(0,$.jsx)(`span`,{children:`观物 · 爱物 · 造物`})]}),(0,$.jsxs)(`nav`,{"aria-label":`页脚导航`,children:[(0,$.jsx)(`a`,{href:i(`/apps/`),children:`众器`}),(0,$.jsx)(`a`,{href:i(`/privacy/`),children:`隐私政策`}),(0,$.jsx)(`a`,{href:i(`/notes/`),children:`工造手记`}),(0,$.jsx)(`a`,{href:i(`/about/`),children:`关于`})]}),(0,$.jsx)(`p`,{children:`爱生活，也爱造些有意思的东西。`})]})}function Bs({children:e}){return(0,$.jsx)(`p`,{className:`inner-eyebrow`,children:e})}function Vs({eyebrow:e,title:t,intro:n}){return(0,$.jsxs)(`div`,{className:`inner-page-lead`,children:[(0,$.jsx)(Bs,{children:e}),(0,$.jsx)(`h1`,{children:t}),(0,$.jsx)(`p`,{children:n})]})}function Hs(e,t){return/^(https?:|mailto:|tel:|#)/i.test(t)?t:t.startsWith(`/`)?i(t):i(`/static/notes/${e}/${t.replace(/^\.\//,``)}`)}function Us({children:e,noteSlug:t}){return t?(0,$.jsx)(`div`,{className:`inner-prose inner-note-prose`,children:(0,$.jsx)(Xa,{components:{img:({src:e,alt:n})=>(0,$.jsx)(`img`,{src:Hs(t,e??``),alt:n??``,loading:`lazy`}),a:({href:e,children:n})=>{let r=e??``,i=Hs(t,r);return!/^https?:/i.test(r)&&/\.pdf(?:[?#].*)?$/i.test(r)?(0,$.jsxs)(`span`,{className:`note-pdf-viewer`,children:[(0,$.jsx)(`iframe`,{src:i,title:`PDF 文档：${String(n)}`,loading:`lazy`}),(0,$.jsx)(`span`,{children:(0,$.jsxs)(`a`,{href:i,target:`_blank`,rel:`noopener noreferrer`,children:[n,` · 单独打开 PDF ↗`]})})]}):(0,$.jsx)(`a`,{href:i,children:n})}},children:e})}):(0,$.jsx)(`div`,{className:`inner-prose`,children:(0,$.jsx)(Xa,{children:e})})}function Ws(){return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(Vs,{eyebrow:`ABOUT / 关于`,title:`观物 · 爱物 · 造物`,intro:`爱物工造 · AILife Lab，从对日常生活的观察出发，以工程与手艺探索有趣的新东西。`}),(0,$.jsxs)(`div`,{className:`inner-about-statement`,children:[(0,$.jsx)(`span`,{children:`爱生活，`}),(0,$.jsx)(`span`,{children:`也爱造些有意思的东西。`})]}),(0,$.jsxs)(`div`,{className:`inner-content-grid`,children:[(0,$.jsxs)(`section`,{className:`inner-section`,children:[(0,$.jsxs)(`div`,{className:`inner-section-heading`,children:[(0,$.jsx)(`h2`,{children:`我们如何理解工造`}),(0,$.jsx)(`span`,{children:`01 / 理念`})]}),(0,$.jsxs)(`div`,{className:`inner-prose`,children:[(0,$.jsx)(`p`,{children:`「爱物」是认真看见生活中已经存在的需求；「工造」是愿意动手，把想法做成可用、可反复打磨的东西。`}),(0,$.jsx)(`p`,{children:`这里会记录软件工具与实验作品。产品状态与能力以各自页面中已核实的资料为准。`})]})]}),(0,$.jsxs)(`aside`,{className:`inner-product-aside`,children:[(0,$.jsx)(`h2`,{children:`联系与支持`}),vo.contactUrl?(0,$.jsx)(`p`,{children:(0,$.jsxs)(`a`,{href:vo.contactUrl,children:[vo.contactLabel||vo.contactUrl,` ↗`]})}):(0,$.jsx)(`p`,{children:`可公开的联系渠道仍待项目方确认。正式发布前需要补入一个经过验证、能够收到消息的地址。`}),(0,$.jsx)(`a`,{href:i(`/apps/`),children:`查看众器 ↗`})]})]})]})}function Gs(){return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(Vs,{eyebrow:`FIELD NOTES / 工造手记`,title:`把过程也留下`,intro:`关于观察、尝试、失败和继续打磨的笔记。`}),(0,$.jsxs)(`section`,{className:`inner-section`,children:[(0,$.jsxs)(`div`,{className:`inner-section-heading`,children:[(0,$.jsx)(`h2`,{children:`全部手记`}),(0,$.jsxs)(`span`,{children:[_o.length,` 篇`]})]}),_o.length?(0,$.jsx)(`div`,{className:`inner-notes-list`,children:_o.map(e=>(0,$.jsxs)(`article`,{children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`p`,{className:`inner-note-meta`,children:e.status===`draft`?`草稿 · 本地预览`:e.publishedAt}),(0,$.jsx)(`h3`,{children:e.title}),(0,$.jsx)(`p`,{className:`inner-note-summary`,children:e.summary})]}),(0,$.jsx)(`a`,{href:i(`/notes/${e.slug}/`),children:`阅读全文 ↗`})]},e.slug))}):(0,$.jsxs)(`div`,{className:`inner-empty-notes`,children:[(0,$.jsx)(`span`,{"aria-hidden":`true`,children:`✦`}),(0,$.jsx)(`h3`,{children:`手记还在酝酿`}),(0,$.jsx)(`p`,{children:`目前没有经确认的文章。等有值得分享的工造过程时，再将它们放在这里。`})]})]})]})}function Ks({slug:e}){let t=_o.find(t=>t.slug===e);return t?(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(`div`,{className:`inner-breadcrumb`,children:[(0,$.jsx)(`a`,{href:i(`/notes/`),children:`工造手记`}),(0,$.jsx)(`span`,{"aria-hidden":`true`,children:`/`}),(0,$.jsx)(`span`,{children:t.title})]}),(0,$.jsx)(Vs,{eyebrow:`FIELD NOTES / 工造手记`,title:t.title,intro:t.summary}),t.status===`draft`&&(0,$.jsxs)(`div`,{className:`inner-draft-banner`,role:`note`,children:[(0,$.jsx)(`strong`,{children:`草稿 · 本地预览`}),(0,$.jsx)(`p`,{children:`这篇手记尚未发布，内容仅供本地预览。`})]}),(0,$.jsx)(`article`,{className:`inner-section inner-note-article`,children:(0,$.jsx)(Us,{noteSlug:t.slug,children:t.body})})]}):(0,$.jsx)(qs,{})}function qs(){return(0,$.jsxs)(`div`,{className:`inner-not-found`,children:[(0,$.jsx)(Bs,{children:`404 / 未找到`}),(0,$.jsx)(`h1`,{children:`这条路还没铺到这里。`}),(0,$.jsx)(`p`,{children:`你访问的页面不存在，也可能已经换了地址。`}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`a`,{className:`inner-primary-link`,href:i(`/`),children:`返回工造院 ↗`}),(0,$.jsx)(`a`,{href:i(`/apps/`),children:`查看众器 ↗`})]})]})}function Js({pathname:e}){let t=Is(e),n=Os(t);if(n)return(0,$.jsx)(Ps,{route:n});let r=t.match(/^\/notes\/([^/]+)\/$/)?.[1],i;return i=t===`/about/`?(0,$.jsx)(Ws,{}):t===`/notes/`?(0,$.jsx)(Gs,{}):r?(0,$.jsx)(Ks,{slug:r}):(0,$.jsx)(qs,{}),(0,$.jsxs)(`div`,{className:`inner-site`,children:[(0,$.jsx)(Rs,{path:t}),(0,$.jsx)(`main`,{id:`main-content`,className:`inner-main`,children:i}),(0,$.jsx)(zs,{})]})}export{Js as InnerPage};