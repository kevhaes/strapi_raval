"use strict";(self.webpackChunkraval=self.webpackChunkraval||[]).push([[3552],{72751:(_,P,t)=>{t.r(P),t.d(P,{default:()=>Je});var e=t(67294),d=t(64289),b=t(45697),i=t.n(b),h=t(86896),T=t(185),C=t(53979),x=t(29728),R=t(49066),N=t(89722),K=t(96315),V=t(86031),u=t(8181),l=t(57813),v=t(41054),f=t(85018),p=t(42866),M=t(24969),y=t(75515),A=t(59946),Q=t(82777),I=t(11047),Z=t(77296),ie=t(70004),de=t(41580),$=t(42761),re=t(36856),ee=t(87561);const a=(0,ee.Ry)().shape({code:(0,ee.Z_)().required(),displayName:(0,ee.Z_)().max(50,"Settings.locales.modal.locales.displayName.error").required(d.I0.required)});var O=t(86706),B=t(7982);const te=()=>{const[s,o]=(0,e.useState)(!1),r=(0,O.I0)(),n=(0,d.lm)(),{put:c}=(0,d.kY)();return{isEditing:s,editLocale:async(g,E)=>{try{o(!0);const{data:D}=await c(`/i18n/locales/${g}`,E);n({type:"success",message:{id:(0,l.O)("Settings.locales.modal.edit.success")}}),r({type:B.OT,editedLocale:D})}catch{n({type:"warning",message:{id:"notification.error"}})}finally{o(!1)}}}};var z=t(11276),H=t(74571),Pe=t(40619),je=t(82562),G=t(16364),ae=t(88767),Se=t(14087);const me=()=>{const{formatMessage:s}=(0,h.Z)(),{notifyStatus:o}=(0,Se.G)(),r=(0,d.lm)(),{get:n}=(0,d.kY)(),{isLoading:c,data:m}=(0,ae.useQuery)(["plugin-i18n","locales"],async()=>{try{const{data:g}=await n("/i18n/iso-locales");return o(s({id:(0,l.O)("Settings.locales.modal.locales.loaded"),defaultMessage:"The locales have been successfully loaded."})),g}catch{return r({type:"warning",message:{id:"notification.error"}}),[]}});return{defaultLocales:m,isLoading:c}},he=({locale:s})=>{const{formatMessage:o}=(0,h.Z)(),{values:r,handleChange:n,errors:c}=(0,v.u6)(),{defaultLocales:m,isLoading:g}=me(),E=!g&&m.find(D=>D.code===s.code);return e.createElement(z.r,{gap:4},e.createElement(H.P,{col:6},e.createElement(Pe.P,{label:o({id:(0,l.O)("Settings.locales.modal.locales.label"),defaultMessage:"Locales"}),value:E?.code||s.code,disabled:!0},e.createElement(je.W,{value:E?.code||s.code},E?.name||s.code))),e.createElement(H.P,{col:6},e.createElement(G.o,{name:"displayName",label:o({id:(0,l.O)("Settings.locales.modal.locales.displayName"),defaultMessage:"Locale display name"}),hint:o({id:(0,l.O)("Settings.locales.modal.locales.displayName.description"),defaultMessage:"Locale will be displayed under that name in the administration panel"}),error:c.displayName?o({id:(0,l.O)("Settings.locales.modal.locales.displayName.error"),defaultMessage:"The locale display name can only be less than 50 characters."}):void 0,value:r.displayName,onChange:n})))},be=he;he.propTypes={locale:i().shape({id:i().number.isRequired,name:i().string.isRequired,code:i().string.isRequired,isDefault:i().bool.isRequired}).isRequired};var ge=t(36213);const J=({isDefaultLocale:s})=>{const{values:o,setFieldValue:r}=(0,v.u6)(),{formatMessage:n}=(0,h.Z)();return e.createElement(ge.X,{name:"isDefault",hint:n({id:(0,l.O)("Settings.locales.modal.advanced.setAsDefault.hint"),defaultMessage:"One default locale is required, change it by selecting another one"}),onChange:()=>r("isDefault",!o.isDefault),value:o.isDefault,disabled:s},n({id:(0,l.O)("Settings.locales.modal.advanced.setAsDefault"),defaultMessage:"Set as default locale"}))};J.propTypes={isDefaultLocale:i().bool.isRequired};const Re=J,le=({locale:s,onClose:o})=>{const{refetchPermissions:r}=(0,d.vn)(),{isEditing:n,editLocale:c}=te(),{formatMessage:m}=(0,h.Z)(),g=async({displayName:E,isDefault:D})=>{await c(s.id,{name:E,isDefault:D}),await r()};return e.createElement(p.P,{onClose:o,labelledBy:"edit-locale-title"},e.createElement(v.J9,{initialValues:{code:s?.code,displayName:s?.name||"",isDefault:Boolean(s?.isDefault)},onSubmit:g,validationSchema:a},e.createElement(d.l0,null,e.createElement(M.x,null,e.createElement(y.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"edit-locale-title"},m({id:(0,l.O)("Settings.list.actions.edit"),defaultMessage:"Edit a locale"}))),e.createElement(A.f,null,e.createElement(Q.v,{label:m({id:(0,l.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"}),id:"tabs",variant:"simple"},e.createElement(I.k,{justifyContent:"space-between"},e.createElement(y.Z,{as:"h2"},m({id:(0,l.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"})),e.createElement(Z.m,null,e.createElement(Z.O,null,m({id:(0,l.O)("Settings.locales.modal.base"),defaultMessage:"Basic settings"})),e.createElement(Z.O,null,m({id:(0,l.O)("Settings.locales.modal.advanced"),defaultMessage:"Advanced settings"})))),e.createElement(ie.i,null),e.createElement(de.x,{paddingTop:7,paddingBottom:7},e.createElement($.n,null,e.createElement($.x,null,e.createElement(be,{locale:s})),e.createElement($.x,null,e.createElement(Re,{isDefaultLocale:Boolean(s&&s.isDefault)})))))),e.createElement(re.m,{startActions:e.createElement(x.z,{variant:"tertiary",onClick:o},m({id:"app.components.Button.cancel"})),endActions:e.createElement(x.z,{type:"submit",startIcon:e.createElement(f.Z,null),disabled:n},m({id:"global.save"}))}))))};le.defaultProps={locale:void 0},le.propTypes={locale:i().shape({id:i().number.isRequired,name:i().string.isRequired,code:i().string.isRequired,isDefault:i().bool.isRequired}),onClose:i().func.isRequired};const fe=le,ve=()=>{const[s,o]=(0,e.useState)(!1),r=(0,O.I0)(),n=(0,d.lm)(),{del:c}=(0,d.kY)();return{isDeleting:s,deleteLocale:async g=>{try{o(!0),await c(`/i18n/locales/${g}`),n({type:"success",message:{id:(0,l.O)("Settings.locales.modal.delete.success")}}),r({type:B.HC,id:g})}catch{n({type:"warning",message:{id:"notification.error"}})}finally{o(!1)}}}},ne=({localeToDelete:s,onClose:o})=>{const{isDeleting:r,deleteLocale:n}=ve(),c=Boolean(s),m=()=>n(s.id).then(o);return e.createElement(d.QH,{isConfirmButtonLoading:r,onConfirm:m,onToggleDialog:o,isOpen:c})};ne.defaultProps={localeToDelete:void 0},ne.propTypes={localeToDelete:i().shape({id:i().number.isRequired}),onClose:i().func.isRequired};const pe=ne;var Be=t(27361),ye=t.n(Be);const xe=()=>{const[s,o]=(0,e.useState)(!1),r=(0,O.I0)(),n=(0,d.lm)(),{post:c}=(0,d.kY)();return{isAdding:s,addLocale:async g=>{o(!0);try{const{data:E}=await c("/i18n/locales",g);n({type:"success",message:{id:(0,l.O)("Settings.locales.modal.create.success")}}),r({type:B.xz,newLocale:E})}catch(E){const D=ye()(E,"response.payload.message",null);throw D&&D.includes("already exists")?n({type:"warning",message:{id:(0,l.O)("Settings.locales.modal.create.alreadyExist")}}):n({type:"warning",message:{id:"notification.error"}}),E}finally{o(!1)}}}};var Le=t(29178),Ae=t(90608);const X=e.memo(({value:s,onClear:o,onLocaleChange:r,error:n})=>{const{formatMessage:c}=(0,h.Z)(),{defaultLocales:m,isLoading:g}=me(),{locales:E}=(0,u.Z)(),D=(m||[]).map(j=>({label:j.name,value:j.code})).filter(({value:j})=>{const W=E.find(({code:oe})=>oe===j);return!W||W.code===s}),U=s||"";return e.createElement(Le.hQ,{"aria-busy":g,error:n,label:c({id:(0,l.O)("Settings.locales.modal.locales.label"),defaultMessage:"Locales"}),value:U,onClear:s?o:void 0,onChange:j=>{const W=D.find(oe=>oe.value===j);W&&r({code:W.value,displayName:W.label})},placeholder:c({id:"components.placeholder.select",defaultMessage:"Select"})},D.map(j=>e.createElement(Ae.O,{value:j.value,key:j.value},j.label)))});X.defaultProps={error:void 0,value:void 0,onClear(){},onLocaleChange:()=>{}},X.propTypes={error:i().string,onClear:i().func,onLocaleChange:i().func,value:i().string};const Y=X,F=()=>{const{formatMessage:s}=(0,h.Z)(),{values:o,handleChange:r,setFieldValue:n,errors:c}=(0,v.u6)(),m=(0,e.useCallback)(E=>{n("displayName",E.displayName),n("code",E.code)},[n]),g=(0,e.useCallback)(()=>{n("displayName",""),n("code","")},[n]);return e.createElement(z.r,{gap:4},e.createElement(H.P,{col:6},e.createElement(Y,{error:c.code,value:o.code,onLocaleChange:m,onClear:g})),e.createElement(H.P,{col:6},e.createElement(G.o,{name:"displayName",label:s({id:(0,l.O)("Settings.locales.modal.locales.displayName"),defaultMessage:"Locale display name"}),hint:s({id:(0,l.O)("Settings.locales.modal.locales.displayName.description"),defaultMessage:"Locale will be displayed under that name in the administration panel"}),error:c.displayName?s({id:(0,l.O)("Settings.locales.modal.locales.displayName.error"),defaultMessage:"The locale display name can only be less than 50 characters."}):void 0,value:o.displayName,onChange:r})))},Ze=()=>{const{values:s,setFieldValue:o}=(0,v.u6)(),{formatMessage:r}=(0,h.Z)();return e.createElement(ge.X,{hint:r({id:(0,l.O)("Settings.locales.modal.advanced.setAsDefault.hint"),defaultMessage:"One default locale is required, change it by selecting another one"}),onChange:()=>o("isDefault",!s.isDefault),value:s.isDefault},r({id:(0,l.O)("Settings.locales.modal.advanced.setAsDefault"),defaultMessage:"Set as default locale"}))},Ce={code:"",displayName:"",isDefault:!1},se=({onClose:s})=>{const{isAdding:o,addLocale:r}=xe(),{formatMessage:n}=(0,h.Z)(),{refetchPermissions:c}=(0,d.vn)(),m=async g=>{await r({code:g.code,name:g.displayName,isDefault:g.isDefault}),await c()};return e.createElement(p.P,{onClose:s,labelledBy:"add-locale-title"},e.createElement(v.J9,{initialValues:Ce,onSubmit:m,validationSchema:a,validateOnChange:!1},e.createElement(d.l0,null,e.createElement(M.x,null,e.createElement(y.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"add-locale-title"},n({id:(0,l.O)("Settings.list.actions.add"),defaultMessage:"Add new locale"}))),e.createElement(A.f,null,e.createElement(Q.v,{label:n({id:(0,l.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"}),id:"tabs",variant:"simple"},e.createElement(I.k,{justifyContent:"space-between"},e.createElement(y.Z,{as:"h2",variant:"beta"},n({id:(0,l.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"})),e.createElement(Z.m,null,e.createElement(Z.O,null,n({id:(0,l.O)("Settings.locales.modal.base"),defaultMessage:"Basic settings"})),e.createElement(Z.O,null,n({id:(0,l.O)("Settings.locales.modal.advanced"),defaultMessage:"Advanced settings"})))),e.createElement(ie.i,null),e.createElement(de.x,{paddingTop:7,paddingBottom:7},e.createElement($.n,null,e.createElement($.x,null,e.createElement(F,null)),e.createElement($.x,null,e.createElement(Ze,null)))))),e.createElement(re.m,{startActions:e.createElement(x.z,{variant:"tertiary",onClick:s},n({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(x.z,{type:"submit",startIcon:e.createElement(f.Z,null),disabled:o},n({id:"global.save",defaultMessage:"Save"}))}))))};se.propTypes={onClose:i().func.isRequired};const Me=se;var $e=t(38939),w=t(8060),Oe=t(79031),S=t(37909),Fe=t(63237),We=t(15234),De=t(12028),Ue=t(4585),Ne=t(20022);const k=({locales:s,onDeleteLocale:o,onEditLocale:r})=>{const{formatMessage:n}=(0,h.Z)();return e.createElement($e.i,{colCount:4,rowCount:s.length+1},e.createElement(w.h,null,e.createElement(Oe.Tr,null,e.createElement(S.Th,null,e.createElement(y.Z,{variant:"sigma",textColor:"neutral600"},n({id:(0,l.O)("Settings.locales.row.id")}))),e.createElement(S.Th,null,e.createElement(y.Z,{variant:"sigma",textColor:"neutral600"},n({id:(0,l.O)("Settings.locales.row.displayName")}))),e.createElement(S.Th,null,e.createElement(y.Z,{variant:"sigma",textColor:"neutral600"},n({id:(0,l.O)("Settings.locales.row.default-locale")}))),e.createElement(S.Th,null,e.createElement(Fe.T,null,"Actions")))),e.createElement(We.p,null,s.map(c=>e.createElement(Oe.Tr,{key:c.id,...(0,d.X7)({fn:()=>r(c),condition:r})},e.createElement(S.Td,null,e.createElement(y.Z,{textColor:"neutral800"},c.id)),e.createElement(S.Td,null,e.createElement(y.Z,{textColor:"neutral800"},c.name)),e.createElement(S.Td,null,e.createElement(y.Z,{textColor:"neutral800"},c.isDefault?n({id:(0,l.O)("Settings.locales.default")}):null)),e.createElement(S.Td,null,e.createElement(I.k,{gap:1,justifyContent:"flex-end",...d.UW},r&&e.createElement(De.h,{onClick:()=>r(c),label:n({id:(0,l.O)("Settings.list.actions.edit")}),icon:e.createElement(Ue.Z,null),noBorder:!0}),o&&!c.isDefault&&e.createElement(De.h,{onClick:()=>o(c),label:n({id:(0,l.O)("Settings.list.actions.delete")}),icon:e.createElement(Ne.Z,null),noBorder:!0})))))))};k.defaultProps={locales:[],onDeleteLocale:void 0,onEditLocale:void 0},k.propTypes={locales:i().array,onDeleteLocale:i().func,onEditLocale:i().func};const Ke=k,q=({canUpdateLocale:s,canDeleteLocale:o,onToggleCreateModal:r,isCreating:n})=>{const[c,m]=(0,e.useState)(),[g,E]=(0,e.useState)(),{locales:D}=(0,u.Z)(),{formatMessage:U}=(0,h.Z)();(0,d.go)();const j=()=>m(void 0),W=o?m:void 0,oe=()=>E(void 0),Xe=s?E:void 0;return e.createElement(T.o,{tabIndex:-1},e.createElement(C.T,{primaryAction:e.createElement(x.z,{startIcon:e.createElement(K.Z,null),onClick:r,size:"S"},U({id:(0,l.O)("Settings.list.actions.add")})),title:U({id:(0,l.O)("plugin.name")}),subtitle:U({id:(0,l.O)("Settings.list.description")})}),e.createElement(R.D,null,D?.length>0?e.createElement(Ke,{locales:D,onDeleteLocale:W,onEditLocale:Xe}):e.createElement(N.x,{icon:e.createElement(V.Z,{width:void 0,height:void 0}),content:U({id:(0,l.O)("Settings.list.empty.title")}),action:r?e.createElement(x.z,{variant:"secondary",startIcon:e.createElement(K.Z,null),onClick:r},U({id:(0,l.O)("Settings.list.actions.add")})):null})),n&&e.createElement(Me,{onClose:r}),g&&e.createElement(fe,{onClose:oe,locale:g}),e.createElement(pe,{localeToDelete:c,onClose:j}))};q.defaultProps={onToggleCreateModal:void 0},q.propTypes={canUpdateLocale:i().bool.isRequired,canDeleteLocale:i().bool.isRequired,onToggleCreateModal:i().func,isCreating:i().bool.isRequired};const Ve=q,Te=({canReadLocale:s,canCreateLocale:o,canDeleteLocale:r,canUpdateLocale:n})=>{const[c,m]=(0,e.useState)(!1),g=o?()=>m(E=>!E):void 0;return s?e.createElement(Ve,{canUpdateLocale:n,canDeleteLocale:r,onToggleCreateModal:g,isCreating:c}):null};Te.propTypes={canReadLocale:i().bool.isRequired,canCreateLocale:i().bool.isRequired,canUpdateLocale:i().bool.isRequired,canDeleteLocale:i().bool.isRequired};const L=Te;var Ge=t(2135);const Je=()=>{const{isLoading:s,allowedActions:{canRead:o,canUpdate:r,canCreate:n,canDelete:c}}=(0,d.ss)(Ge.Z);return s?null:e.createElement(L,{canReadLocale:o,canCreateLocale:n,canUpdateLocale:r,canDeleteLocale:c})}},29178:(_,P,t)=>{t.d(P,{Wx:()=>ee,XU:()=>Q,hQ:()=>A});var e=t(85893),d=t(67294),b=t(70968),i=t(12645),h=t(52605),T=t(46449),C=t(51809),x=t(10892),R=t(2504),N=t(75368),K=t(15585),V=t(77197),u=t(41580),l=t(75515),v=t(54574),f=t(11047),p=t(19270),M=t(63428),y=t(96404);const A=({children:a,clearLabel:O="clear",creatable:B=!1,createMessage:ue=Y=>`Create "${Y}"`,defaultFilterValue:te,defaultTextValue:z,defaultOpen:H=!1,open:Pe,onOpenChange:je,disabled:G=!1,error:ae,filterValue:Se,hasMoreItems:Qe=!1,hint:me,id:he,label:be,labelAction:ge,loading:J=!1,loadingMessage:Re="Loading content...",noOptionsMessage:le=()=>"No results found",onChange:fe,onClear:Ee,onCreateOption:ve,onFilterValueChange:ne,onInputChange:pe,onTextValueChange:Be,onLoadMore:ye,placeholder:ze="Select or enter a value",required:xe=!1,startIcon:Le,textValue:Ae,value:X})=>{const[Y,He]=(0,x.T)({prop:Pe,defaultProp:H,onChange:je}),[F,Ie]=(0,x.T)({prop:Ae,defaultProp:z,onChange:Be}),[Ze,Ce]=(0,x.T)({prop:Se,defaultProp:te,onChange:ne}),se=d.useRef(null),Me=d.useRef(null),$e=d.useRef(null),w=(0,R.M)(he),Oe=L=>{Ee&&!G&&(Ie(""),Ce(""),Ee(L),Me.current.focus())},S=L=>{He(L)},Fe=L=>{Ie(L)},We=L=>{Ce(L)},De=L=>{pe&&pe(L)},Ue=L=>{fe&&fe(L)},Ne=(0,R.M)(),k=`intersection-${(0,C.B)(Ne)}`,Ke=L=>{ye&&Qe&&!J&&ye(L)},q=()=>{ve&&F&&ve(F)};(0,N.s)(se,Ke,{selectorToWatch:`#${k}`,skipWhen:!Y});const Ve=`${w}-hint`,Te=`${w}-error`;return(0,e.jsx)(v.g,{hint:me,error:ae,id:w,required:xe,children:(0,e.jsxs)(f.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(p.Q,{action:ge,children:be}),(0,e.jsxs)(h.hQ.Root,{autocomplete:B?"list":"both",open:Y,onOpenChange:S,onTextValueChange:Fe,textValue:F,allowCustomValue:!0,disabled:G,required:xe,value:X===null?void 0:X,onValueChange:Ue,filterValue:Ze,onFilterValueChange:We,children:[(0,e.jsxs)(Z,{$hasError:!!ae,children:[(0,e.jsxs)(f.k,{flex:"1",as:"span",gap:3,children:[Le?(0,e.jsx)(u.x,{as:"span","aria-hidden":!0,children:Le}):null,(0,e.jsx)(ie,{placeholder:ze,id:w,"aria-invalid":!!ae,"aria-labelledby":`${Ve} ${Te}`,onChange:De,ref:Me})]}),(0,e.jsxs)(f.k,{as:"span",gap:3,children:[F&&Ee?(0,e.jsx)(I,{as:"button",hasRadius:!0,background:"transparent",type:"button",onClick:Oe,"aria-disabled":G,"aria-label":O,title:O,ref:$e,children:(0,e.jsx)(b.Z,{})}):null,(0,e.jsx)(de,{children:(0,e.jsx)(i.Z,{})})]})]}),(0,e.jsx)(h.hQ.Portal,{children:(0,e.jsx)($,{sideOffset:4,children:(0,e.jsxs)(re,{ref:se,children:[a,B?(0,e.jsx)(h.hQ.CreateItem,{onPointerUp:q,onClick:q,asChild:!0,children:(0,e.jsx)(ce,{children:(0,e.jsx)(l.Z,{children:ue(F??"")})})}):null,!B&&!J?(0,e.jsx)(h.hQ.NoValueFound,{asChild:!0,children:(0,e.jsx)(ce,{$hasHover:!1,children:(0,e.jsx)(l.Z,{children:le(F??"")})})}):null,J?(0,e.jsx)(f.k,{justifyContent:"center",alignItems:"center",paddingTop:2,paddingBottom:2,children:(0,e.jsx)(V.a,{small:!0,children:Re})}):null,(0,e.jsx)(u.x,{id:k,width:"100%",height:"1px"})]})})})]}),(0,e.jsx)(M.J,{}),(0,e.jsx)(y.c,{})]})})},Q=a=>(0,e.jsx)(A,{...a,creatable:!0}),I=(0,T.ZP)(u.x)`
  border: none;

  svg {
    height: ${11/16}rem;
    width: ${11/16}rem;
  }

  svg path {
    fill: ${({theme:a})=>a.colors.neutral600};
  }
`,Z=(0,T.ZP)(h.hQ.Trigger)`
  position: relative;
  border: 1px solid ${({theme:a,$hasError:O})=>O?a.colors.danger600:a.colors.neutral200};
  padding-right: ${({theme:a})=>a.spaces[3]};
  padding-left: ${({theme:a})=>a.spaces[3]};
  border-radius: ${({theme:a})=>a.borderRadius};
  background: ${({theme:a})=>a.colors.neutral0};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:a})=>a.spaces[4]};

  &[data-disabled] {
    color: ${({theme:a})=>a.colors.neutral600};
    background: ${({theme:a})=>a.colors.neutral150};
    cursor: not-allowed;
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:a,$hasError:O})=>(0,K.k3)()({theme:a,hasError:O})};
`,ie=(0,T.ZP)(h.hQ.TextInput)`
  width: 100%;
  font-size: ${14/16}rem;
  color: ${({theme:a})=>a.colors.neutral800};
  min-height: ${40/16}rem;
  border: none;
  background-color: transparent;

  &:focus-visible {
    outline: none;
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,de=(0,T.ZP)(h.hQ.Icon)`
  & > svg {
    width: ${6/16}rem;

    & > path {
      fill: ${({theme:a})=>a.colors.neutral600};
    }
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,$=(0,T.ZP)(h.hQ.Content)`
  background: ${({theme:a})=>a.colors.neutral0};
  box-shadow: ${({theme:a})=>a.shadows.filterShadow};
  border: 1px solid ${({theme:a})=>a.colors.neutral150};
  border-radius: ${({theme:a})=>a.borderRadius};
  width: var(--radix-combobox-trigger-width);
  /* This is from the design-system figma file. */
  max-height: 15rem;
  z-index: ${({theme:a})=>a.zIndices[1]};
`,re=(0,T.ZP)(h.hQ.Viewport)`
  padding: ${({theme:a})=>a.spaces[1]};
`,ee=d.forwardRef(({children:a,value:O,disabled:B,textValue:ue,...te},z)=>(0,e.jsx)(h.hQ.ComboboxItem,{asChild:!0,value:O,disabled:B,textValue:ue,children:(0,e.jsx)(ce,{ref:z,...te,children:(0,e.jsx)(h.hQ.ItemText,{asChild:!0,children:(0,e.jsx)(l.Z,{children:a})})})})),ce=T.ZP.div`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  padding: ${({theme:a})=>a.spaces[2]} ${({theme:a})=>a.spaces[4]};
  background-color: ${({theme:a})=>a.colors.neutral0};
  border-radius: ${({theme:a})=>a.borderRadius};
  user-select: none;

  &[data-selected] {
    background-color: ${({theme:a})=>a.colors.primary100};

    ${l.Z} {
      color: ${({theme:a})=>a.colors.primary600};
      font-weight: bold;
    }
  }

  &:hover,
  &[data-highlighted] {
    outline: none;
    background-color: ${({theme:a,$hasHover:O=!0})=>O?a.colors.primary100:a.colors.neutral0};
  }

  &[data-highlighted] {
    ${l.Z} {
      color: ${({theme:a})=>a.colors.primary600};
      font-weight: bold;
    }
  }
`},90608:(_,P,t)=>{t.d(P,{O:()=>d});var e=t(29178);const d=e.Wx},49066:(_,P,t)=>{t.d(P,{D:()=>b});var e=t(85893),d=t(41580);const b=({children:i})=>(0,e.jsx)(d.x,{paddingLeft:10,paddingRight:10,children:i})},53979:(_,P,t)=>{t.d(P,{T:()=>N});var e=t(85893),d=t(67294),b=t(46449);const i=u=>{const l=(0,d.useRef)(null),[v,f]=(0,d.useState)(!0),p=([M])=>{f(M.isIntersecting)};return(0,d.useEffect)(()=>{const M=l.current,y=new IntersectionObserver(p,u);return M&&y.observe(l.current),()=>{M&&y.disconnect()}},[l,u]),[l,v]};var h=t(79698);const T=(u,l)=>{const v=(0,h.W)(l);(0,d.useLayoutEffect)(()=>{const f=new ResizeObserver(v);return Array.isArray(u)?u.forEach(p=>{p.current&&f.observe(p.current)}):u.current&&f.observe(u.current),()=>{f.disconnect()}},[u,v])};var C=t(41580),x=t(11047),R=t(75515);const N=u=>{const l=(0,d.useRef)(null),[v,f]=(0,d.useState)(null),[p,M]=i({root:null,rootMargin:"0px",threshold:0});return T(p,()=>{p.current&&f(p.current.getBoundingClientRect())}),(0,d.useEffect)(()=>{l.current&&f(l.current.getBoundingClientRect())},[l]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:v?.height},ref:p,children:M&&(0,e.jsx)(V,{ref:l,...u})}),!M&&(0,e.jsx)(V,{...u,sticky:!0,width:v?.width})]})};N.displayName="HeaderLayout";const K=(0,b.ZP)(C.x)`
  width: ${({width:u})=>u?`${u/16}rem`:void 0};
  z-index: ${({theme:u})=>u.zIndices[1]};
`,V=d.forwardRef(({navigationAction:u,primaryAction:l,secondaryAction:v,subtitle:f,title:p,sticky:M,width:y,...A},Q)=>{const I=typeof f=="string";return M?(0,e.jsx)(K,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:y,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(x.k,{justifyContent:"space-between",children:[(0,e.jsxs)(x.k,{children:[u&&(0,e.jsx)(C.x,{paddingRight:3,children:u}),(0,e.jsxs)(C.x,{children:[(0,e.jsx)(R.Z,{variant:"beta",as:"h1",...A,children:p}),I?(0,e.jsx)(R.Z,{variant:"pi",textColor:"neutral600",children:f}):f]}),v?(0,e.jsx)(C.x,{paddingLeft:4,children:v}):null]}),(0,e.jsx)(x.k,{children:l?(0,e.jsx)(C.x,{paddingLeft:2,children:l}):void 0})]})}):(0,e.jsxs)(C.x,{ref:Q,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:u?6:8,background:"neutral100","data-strapi-header":!0,children:[u?(0,e.jsx)(C.x,{paddingBottom:2,children:u}):null,(0,e.jsxs)(x.k,{justifyContent:"space-between",children:[(0,e.jsxs)(x.k,{minWidth:0,children:[(0,e.jsx)(R.Z,{as:"h1",variant:"alpha",...A,children:p}),v?(0,e.jsx)(C.x,{paddingLeft:4,children:v}):null]}),l]}),I?(0,e.jsx)(R.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:f}):f]})})},185:(_,P,t)=>{t.d(P,{o:()=>h});var e=t(85893),d=t(46449),b=t(41580);const i=(0,d.ZP)(b.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,h=({labelledBy:T="main-content-title",...C})=>(0,e.jsx)(i,{"aria-labelledby":T,as:"main",id:"main-content",tabIndex:-1,...C})}}]);
