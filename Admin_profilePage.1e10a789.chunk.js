"use strict";(self.webpackChunkraval=self.webpackChunkraval||[]).push([[9497],{50166:(Y,E,t)=>{t.r(E),t.d(E,{default:()=>le});var e=t(67294),o=t(46449),r=t(64289),F=t(86896),L=t(41054),H=t(11700),I=t.n(H),w=t(88767),A=t(78718),f=t.n(A),c=t(64593),v=t(16364),$=t(25752),J=t(14087),j=t(185),B=t(53979),N=t(49066),V=t(29728),P=t(41580),g=t(11047),y=t(75515),M=t(11276),m=t(74571),O=t(40619),z=t(82562),K=t(85018),Z=t(8934),T=t(94123),k=t(50592),q=t(95428),_=t(57557),ee=t.n(_);const te=async()=>{const{get:i}=(0,r.tg)(),{data:p}=await i("/admin/users/me");return p.data},ae=async i=>{const p=ee()(i,["confirmPassword","currentTheme"]),{put:h}=(0,r.tg)(),{data:R}=await h("/admin/users/me",p);return{...R.data,currentTheme:i.currentTheme}};var se=t(87561),ne=t(17405);const re=se.Ry().shape(ne.Rw);var G=t(19631);const oe=o.ZP.a`
  color: ${({theme:i})=>i.colors.primary600};
`,x=(0,o.ZP)(v.o)`
  ::-ms-reveal {
    display: none;
  }
`,C=(0,o.ZP)($.E)`
  svg {
    height: 1rem;
    width: 1rem;
    path {
      fill: ${({theme:i})=>i.colors.neutral600};
    }
  }
`,le=()=>{const[i,p]=(0,e.useState)(!1),[h,R]=(0,e.useState)(!1),[b,ie]=(0,e.useState)(!1),{changeLocale:de,localeNames:Q}=(0,k.Z)(),{setUserDisplayName:me}=(0,r.L7)(),ce=(0,w.useQueryClient)(),{formatMessage:a}=(0,F.Z)(),{trackUsage:ue}=(0,r.rS)(),U=(0,r.lm)(),{lockApp:fe,unlockApp:ge}=(0,r.o1)(),{notifyStatus:pe}=(0,J.G)(),{currentTheme:he,themes:W,onChangeTheme:Ee}=(0,q.M1)();(0,r.go)();const{status:we,data:S}=(0,w.useQuery)("user",()=>te(),{onSuccess(){pe(a({id:"Settings.profile.form.notify.data.loaded",defaultMessage:"Your profile data has been loaded"}))},onError(){U({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),ve=we!=="success",X=(0,w.useMutation)(s=>ae(s),{async onSuccess(s){await ce.invalidateQueries("user"),r.I8.setUserInfo(f()(s,["email","firstname","lastname","username","preferedLanguage"]));const l=s.username||(0,G.Pp)(s.firstname,s.lastname);me(l),de(s.preferedLanguage),Ee(s.currentTheme),ue("didChangeMode",{newMode:s.currentTheme}),U({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}})},onSettled(){ge()},refetchActive:!0}),{isLoading:Pe}=X,ye=async(s,{setErrors:l})=>{fe();const d=s.username||null;X.mutate({...s,username:d},{onError(D){const n=D?.response?.data;return n?.data?l(n.data):U({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})},Me=["currentTheme","email","firstname","lastname","username","preferedLanguage"],Se=f()({...S,currentTheme:he},Me);if(ve)return e.createElement(j.o,{"aria-busy":"true"},e.createElement(c.q,{title:a({id:"Settings.profile.form.section.helmet.title",defaultMessage:"User profile"})}),e.createElement(B.T,{title:a({id:"Settings.profile.form.section.profile.page.title",defaultMessage:"Profile page"})}),e.createElement(N.D,null,e.createElement(r.dO,null)));const Le=Object.keys(W).filter(s=>W[s]);return e.createElement(j.o,{"aria-busy":Pe},e.createElement(c.q,{title:a({id:"Settings.profile.form.section.helmet.title",defaultMessage:"User profile"})}),e.createElement(L.J9,{onSubmit:ye,initialValues:Se,validateOnChange:!1,validationSchema:re,enableReinitialize:!0},({errors:s,values:l,handleChange:d,isSubmitting:D})=>e.createElement(r.l0,null,e.createElement(B.T,{title:S.username||(0,G.Pp)(S.firstname,S.lastname),primaryAction:e.createElement(V.z,{startIcon:e.createElement(K.Z,null),loading:D,type:"submit"},a({id:"global.save",defaultMessage:"Save"}))}),e.createElement(P.x,{paddingBottom:10},e.createElement(N.D,null,e.createElement(g.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(P.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(g.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(y.Z,{variant:"delta",as:"h2"},a({id:"global.profile",defaultMessage:"Profile"})),e.createElement(M.r,{gap:5},e.createElement(m.P,{s:12,col:6},e.createElement(r.jm,{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},error:s.firstname,onChange:d,value:l.firstname||"",type:"text",name:"firstname",required:!0})),e.createElement(m.P,{s:12,col:6},e.createElement(r.jm,{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},error:s.lastname,onChange:d,value:l.lastname||"",type:"text",name:"lastname"})),e.createElement(m.P,{s:12,col:6},e.createElement(r.jm,{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},error:s.email,onChange:d,value:l.email||"",type:"email",name:"email",required:!0})),e.createElement(m.P,{s:12,col:6},e.createElement(r.jm,{intlLabel:{id:"Auth.form.username.label",defaultMessage:"Username"},error:s.username,onChange:d,value:l.username||"",type:"text",name:"username"}))))),e.createElement(P.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(g.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(y.Z,{variant:"delta",as:"h2"},a({id:"global.change-password",defaultMessage:"Change password"})),e.createElement(M.r,{gap:5},e.createElement(m.P,{s:12,col:6},e.createElement(x,{error:s.currentPassword?a({id:s.currentPassword,defaultMessage:s.currentPassword}):"",onChange:d,value:l.currentPassword||"",label:a({id:"Auth.form.currentPassword.label",defaultMessage:"Current Password"}),name:"currentPassword",type:b?"text":"password",endAction:e.createElement(C,{onClick:n=>{n.stopPropagation(),ie(u=>!u)},label:a(b?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"})},b?e.createElement(Z.Z,null):e.createElement(T.Z,null))}))),e.createElement(M.r,{gap:5},e.createElement(m.P,{s:12,col:6},e.createElement(x,{error:s.password?a({id:s.password,defaultMessage:s.password}):"",onChange:d,value:l.password||"",label:a({id:"global.password",defaultMessage:"Password"}),name:"password",type:i?"text":"password",autoComplete:"new-password",endAction:e.createElement(C,{onClick:n=>{n.stopPropagation(),p(u=>!u)},label:a(i?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"})},i?e.createElement(Z.Z,null):e.createElement(T.Z,null))})),e.createElement(m.P,{s:12,col:6},e.createElement(x,{error:s.confirmPassword?a({id:s.confirmPassword,defaultMessage:s.confirmPassword}):"",onChange:d,value:l.confirmPassword||"",label:a({id:"Auth.form.confirmPassword.label",defaultMessage:"Password confirmation"}),name:"confirmPassword",type:h?"text":"password",autoComplete:"new-password",endAction:e.createElement(C,{onClick:n=>{n.stopPropagation(),R(u=>!u)},label:a(h?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"})},h?e.createElement(Z.Z,null):e.createElement(T.Z,null))}))))),e.createElement(P.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(g.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(g.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(y.Z,{variant:"delta",as:"h2"},a({id:"Settings.profile.form.section.experience.title",defaultMessage:"Experience"})),e.createElement(y.Z,null,a({id:"Settings.profile.form.section.experience.interfaceLanguageHelp",defaultMessage:"Preference changes will apply only to you. More information is available {here}."},{here:e.createElement(oe,{target:"_blank",rel:"noopener noreferrer",href:"https://docs.strapi.io/developer-docs/latest/development/admin-customization.html#locales"},a({id:"Settings.profile.form.section.experience.here",defaultMessage:"here"}))}))),e.createElement(M.r,{gap:5},e.createElement(m.P,{s:12,col:6},e.createElement(O.P,{label:a({id:"Settings.profile.form.section.experience.interfaceLanguage",defaultMessage:"Interface language"}),placeholder:a({id:"global.select",defaultMessage:"Select"}),hint:a({id:"Settings.profile.form.section.experience.interfaceLanguage.hint",defaultMessage:"This will only display your own interface in the chosen language."}),onClear:()=>{d({target:{name:"preferedLanguage",value:null}})},clearLabel:a({id:"Settings.profile.form.section.experience.clear.select",defaultMessage:"Clear the interface language selected"}),value:l.preferedLanguage,onChange:n=>{d({target:{name:"preferedLanguage",value:n}})}},Object.keys(Q).map(n=>{const u=Q[n];return e.createElement(z.W,{value:n,key:n},u)}))),e.createElement(m.P,{s:12,col:6},e.createElement(O.P,{label:a({id:"Settings.profile.form.section.experience.mode.label",defaultMessage:"Interface mode"}),placeholder:a({id:"components.Select.placeholder",defaultMessage:"Select"}),hint:a({id:"Settings.profile.form.section.experience.mode.hint",defaultMessage:"Displays your interface in the chosen mode."}),value:l.currentTheme,onChange:n=>{d({target:{name:"currentTheme",value:n}})}},Le.map(n=>e.createElement(z.W,{value:n,key:n},a({id:"Settings.profile.form.section.experience.mode.option-label",defaultMessage:"{name} mode"},{name:a({id:n,defaultMessage:I()(n)})}))))))))))))))}},17405:(Y,E,t)=>{t.d(E,{YM:()=>A,Rw:()=>L});var e=t(87561),o=t(64289);const r={firstname:e.Z_().trim().required(o.I0.required),lastname:e.Z_(),email:e.Z_().email(o.I0.email).lowercase().required(o.I0.required),username:e.Z_().nullable(),password:e.Z_().min(8,o.I0.minLength).matches(/[a-z]/,"components.Input.error.contain.lowercase").matches(/[A-Z]/,"components.Input.error.contain.uppercase").matches(/\d/,"components.Input.error.contain.number"),confirmPassword:e.Z_().min(8,o.I0.minLength).oneOf([e.iH("password"),null],"components.Input.error.password.noMatch").when("password",(f,c)=>f?c.required(o.I0.required):c)},L={...r,currentPassword:e.Z_().when(["password","confirmPassword"],(f,c,v)=>f||c?v.required(o.I0.required):v),preferedLanguage:e.Z_().nullable()},I={roles:e.IX().min(1,o.I0.required).required(o.I0.required)},A=e.Ry().shape({...r,isActive:e.Xg(),...I})}}]);
