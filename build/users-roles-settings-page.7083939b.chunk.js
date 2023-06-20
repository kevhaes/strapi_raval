(self.webpackChunkraval=self.webpackChunkraval||[]).push([[8853],{20400:(h,E,t)=>{"use strict";t.r(E),t.d(E,{default:()=>Zt});var e=t(67294),r=t(16550),n=t(64289),i=t(31498),l=t(81912),f=t(14087),c=t(17034),x=t(185),b=t(53979),M=t(29728),O=t(36989),L=t(49066),g=t(38939),u=t(8060),R=t(79031),v=t(37909),m=t(75515),I=t(63237),S=t(96315),j=t(86896),W=t(88767),Z=t(89031);const V=async(s,o)=>{try{const{get:a}=(0,n.tg)(),{data:d}=await a((0,Z.Gc)("roles"));return o("The roles have loaded successfully"),d}catch{throw s({type:"warning",message:{id:"notification.error"}}),new Error("error")}},N=async(s,o)=>{try{const{del:a}=(0,n.tg)();await a(`${(0,Z.Gc)("roles")}/${s}`)}catch{o({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}};var ee=t(45697),B=t.n(ee),ue=t(15234),k=t(11047),ae=t(12028),Q=t(4585),re=t(20022);const te=({sortedRoles:s,canDelete:o,permissions:a,setRoleToDelete:d,onDelete:C})=>{const{formatMessage:p}=(0,j.Z)(),{push:D}=(0,r.k6)(),[P,T]=C,A=y=>o&&!["public","authenticated"].includes(y.type),U=y=>{d(y),T(!P)},$=y=>{D(`/settings/${i.Z}/roles/${y}`)};return e.createElement(ue.p,null,s?.map(y=>e.createElement(R.Tr,{key:y.name,...(0,n.X7)({fn:()=>$(y.id)})},e.createElement(v.Td,{width:"20%"},e.createElement(m.Z,null,y.name)),e.createElement(v.Td,{width:"50%"},e.createElement(m.Z,null,y.description)),e.createElement(v.Td,{width:"30%"},e.createElement(m.Z,null,`${y.nb_users} ${p({id:"global.users",defaultMessage:"users"}).toLowerCase()}`)),e.createElement(v.Td,null,e.createElement(k.k,{justifyContent:"end",...n.UW},e.createElement(n.jW,{permissions:a.updateRole},e.createElement(ae.h,{onClick:()=>$(y.id),noBorder:!0,icon:e.createElement(Q.Z,null),label:p({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:`${y.name}`})})),A(y)&&e.createElement(n.jW,{permissions:a.deleteRole},e.createElement(ae.h,{onClick:()=>U(y.id),noBorder:!0,icon:e.createElement(re.Z,null),label:p({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${y.name}`})})))))))},me=te;te.defaultProps={canDelete:!1},te.propTypes={onDelete:B().array.isRequired,permissions:B().object.isRequired,setRoleToDelete:B().func.isRequired,sortedRoles:B().array.isRequired,canDelete:B().bool};const ge=()=>{const{trackUsage:s}=(0,n.rS)(),{formatMessage:o,locale:a}=(0,j.Z)(),{push:d}=(0,r.k6)(),C=(0,n.lm)(),{notifyStatus:p}=(0,f.G)(),[{query:D}]=(0,n.Kx)(),P=D?._q||"",[T,A]=(0,e.useState)(!1),[U,$]=(0,e.useState)(!1),[y,z]=(0,e.useState)();(0,n.go)();const H=(0,W.useQueryClient)(),G=(0,e.useMemo)(()=>({create:l.Z.createRole,read:l.Z.readRoles,update:l.Z.updateRole,delete:l.Z.deleteRole}),[]),{isLoading:F,allowedActions:{canRead:w,canDelete:_}}=(0,n.ss)(G),{isLoading:Bt,data:{roles:Be},isFetching:St}=(0,W.useQuery)("get-roles",()=>V(C,p),{initialData:{},enabled:w}),{includes:Se}=(0,n.L0)(a,{sensitivity:"base"}),Ue=(0,n.Xe)(a,{sensitivity:"base"}),$e=Bt||St,Ut=()=>{s("willCreateRole"),d(`/settings/${i.Z}/roles/new`)},$t=()=>{A(!T)},It={roles:{id:(0,Z.OB)("Roles.empty"),defaultMessage:"You don't have any roles yet."},search:{id:(0,Z.OB)("Roles.empty.search"),defaultMessage:"No roles match the search."}},kt=o({id:"global.roles",defaultMessage:"Roles"}),Wt=(0,W.useMutation)(X=>N(X,C),{async onSuccess(){await H.invalidateQueries("get-roles")}}),Gt=async()=>{$(!0),await Wt.mutateAsync(y),A(!T),$(!1)},de=(Be||[]).filter(X=>Se(X.name,P)||Se(X.description,P)).sort((X,Ie)=>Ue.compare(X.name,Ie.name)||Ue.compare(X.description,Ie.description)),Nt=P&&!de.length?"search":"roles",Ft=4,wt=(Be?.length||0)+1;return e.createElement(c.A,null,e.createElement(n.SL,{name:kt}),e.createElement(x.o,{"aria-busy":$e},e.createElement(b.T,{title:o({id:"global.roles",defaultMessage:"Roles"}),subtitle:o({id:"Settings.roles.list.description",defaultMessage:"List of roles"}),primaryAction:e.createElement(n.jW,{permissions:l.Z.createRole},e.createElement(M.z,{onClick:Ut,startIcon:e.createElement(S.Z,null),size:"S"},o({id:(0,Z.OB)("List.button.roles"),defaultMessage:"Add new role"})))}),e.createElement(O.Z,{startActions:e.createElement(n.m,{label:o({id:"app.component.search.label",defaultMessage:"Search"})})}),e.createElement(L.D,null,!w&&e.createElement(n.ZF,null),($e||F)&&e.createElement(n.dO,null),w&&de&&de?.length?e.createElement(g.i,{colCount:Ft,rowCount:wt},e.createElement(u.h,null,e.createElement(R.Tr,null,e.createElement(v.Th,null,e.createElement(m.Z,{variant:"sigma",textColor:"neutral600"},o({id:"global.name",defaultMessage:"Name"}))),e.createElement(v.Th,null,e.createElement(m.Z,{variant:"sigma",textColor:"neutral600"},o({id:"global.description",defaultMessage:"Description"}))),e.createElement(v.Th,null,e.createElement(m.Z,{variant:"sigma",textColor:"neutral600"},o({id:"global.users",defaultMessage:"Users"}))),e.createElement(v.Th,null,e.createElement(I.T,null,o({id:"global.actions",defaultMessage:"Actions"}))))),e.createElement(me,{sortedRoles:de,canDelete:_,permissions:l.Z,setRoleToDelete:z,onDelete:[T,A]})):e.createElement(n.x7,{content:It[Nt]})),e.createElement(n.QH,{isConfirmButtonLoading:U,onConfirm:Gt,onToggleDialog:$t,isOpen:T})))},oe=()=>e.createElement(n.O4,{permissions:l.Z.accessRoles},e.createElement(ge,null));var ne=t(41054),K=t(41580),ie=t(11276),Y=t(74571),ve=t(16364),xe=t(61467),ye=t(85018),ke=t(67109),J=t(84757),We=t(27361),se=t.n(We),Ge=t(41609),Ne=t.n(Ge),Fe=t(82569),we=t.n(Fe);const Re=(0,e.createContext)({}),Ce=({children:s,value:o})=>e.createElement(Re.Provider,{value:o},s),he=()=>(0,e.useContext)(Re);Ce.propTypes={children:B().node.isRequired,value:B().object.isRequired};var le=t(46449),Ke=t(35161),ze=t.n(Ke),He=t(13217),Ve=t.n(He);const Ye=s=>{switch(s){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},Xe=(0,le.ZP)(K.x)`
  margin: -1px;
  border-radius: ${({theme:s})=>s.spaces[1]} 0 0 ${({theme:s})=>s.spaces[1]};
`;function Ee({route:s}){const{formatMessage:o}=(0,j.Z)(),{method:a,handler:d,path:C}=s,p=C?Ve()(C.split("/")):[],[D="",P=""]=d?d.split("."):[],T=Ye(s.method);return e.createElement(k.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(m.Z,{variant:"delta",as:"h3"},o({id:"users-permissions.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",e.createElement("span",null,D),e.createElement(m.Z,{variant:"delta",textColor:"primary600"},".",P)),e.createElement(k.k,{hasRadius:!0,background:"neutral0",borderColor:"neutral200",gap:0},e.createElement(Xe,{background:T.background,borderColor:T.border,padding:2},e.createElement(m.Z,{fontWeight:"bold",textColor:T.text},a)),e.createElement(K.x,{paddingLeft:2,paddingRight:2},ze()(p,A=>e.createElement(m.Z,{key:A,textColor:A.includes(":")?"neutral600":"neutral900"},"/",A)))))}Ee.defaultProps={route:{handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}},Ee.propTypes={route:B().shape({handler:B().string,method:B().string,path:B().string})};const Qe=Ee,Je=()=>{const{formatMessage:s}=(0,j.Z)(),{selectedAction:o,routes:a}=he(),d=we()(o.split("."),"controllers"),C=se()(a,d[0]),p=d.slice(1).join("."),D=Ne()(C)?[]:C.filter(P=>P.handler.endsWith(p));return e.createElement(Y.P,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"}},o?e.createElement(k.k,{direction:"column",alignItems:"stretch",gap:2},D.map((P,T)=>e.createElement(Qe,{key:T,route:P}))):e.createElement(k.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(m.Z,{variant:"delta",as:"h3"},s({id:"users-permissions.Policies.header.title",defaultMessage:"Advanced settings"})),e.createElement(m.Z,{as:"p",textColor:"neutral600"},s({id:"users-permissions.Policies.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"}))))};var qe=t(48734),_e=t(74756),et=t(63081),tt=t(11700),nt=t.n(tt);function st(s){switch(s){case"application":return"Application";case"plugin::content-manager":return"Content manager";case"plugin::content-type-builder":return"Content types builder";case"plugin::documentation":return"Documentation";case"plugin::email":return"Email";case"plugin::i18n":return"i18n";case"plugin::upload":return"Upload";case"plugin::users-permissions":return"Users-permissions";default:return nt()(s.replace("api::","").replace("plugin::",""))}}const at=st;var rt=t(89734),Pe=t.n(rt),Ae=t(36213),ot=t(78114);const Te=le.iv`
  background: ${s=>s.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,it=(0,le.ZP)(K.x)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${s=>s.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${s=>s.isActive&&Te}
  &:hover {
    ${Te}
  }
`,lt=le.ZP.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:s})=>s.colors.neutral150};
`,De=({subCategory:s})=>{const{formatMessage:o}=(0,j.Z)(),{onChange:a,onChangeSelectAll:d,onSelectedAction:C,selectedAction:p,modifiedData:D}=he(),P=(0,e.useMemo)(()=>se()(D,s.name,{}),[D,s]),T=(0,e.useMemo)(()=>Object.values(P).every(y=>y.enabled===!0),[P]),A=(0,e.useMemo)(()=>Object.values(P).some(y=>y.enabled===!0)&&!T,[P,T]),U=(0,e.useCallback)(({target:{name:y}})=>{d({target:{name:y,value:!T}})},[T,d]),$=(0,e.useCallback)(y=>p===y,[p]);return e.createElement(K.x,null,e.createElement(k.k,{justifyContent:"space-between",alignItems:"center"},e.createElement(K.x,{paddingRight:4},e.createElement(m.Z,{variant:"sigma",textColor:"neutral600"},s.label)),e.createElement(lt,null),e.createElement(K.x,{paddingLeft:4},e.createElement(Ae.X,{name:s.name,value:T,onValueChange:y=>U({target:{name:s.name,value:y}}),indeterminate:A},o({id:"app.utils.select-all",defaultMessage:"Select all"})))),e.createElement(k.k,{paddingTop:6,paddingBottom:6},e.createElement(ie.r,{gap:2,style:{flex:1}},s.actions.map(y=>{const z=`${y.name}.enabled`;return e.createElement(Y.P,{col:6,key:y.name},e.createElement(it,{isActive:$(y.name),padding:2,hasRadius:!0},e.createElement(Ae.X,{value:se()(D,z,!1),name:z,onValueChange:H=>a({target:{name:z,value:H}})},y.label),e.createElement("button",{type:"button","data-testid":"action-cog",onClick:()=>C(y.name),style:{display:"inline-flex",alignItems:"center"}},e.createElement(ot.Z,null))))}))))};De.propTypes={subCategory:B().object.isRequired};const ct=De,be=({name:s,permissions:o})=>{const a=(0,e.useMemo)(()=>Pe()(Object.values(o.controllers).reduce((d,C,p)=>{const D=`${s}.controllers.${Object.keys(o.controllers)[p]}`,P=Pe()(Object.keys(C).reduce((T,A)=>[...T,{...C[A],label:A,name:`${D}.${A}`}],[]),"label");return[...d,{actions:P,label:Object.keys(o.controllers)[p],name:D}]},[]),"label"),[s,o]);return e.createElement(K.x,{padding:6},a.map(d=>e.createElement(ct,{key:d.name,subCategory:d})))};be.propTypes={name:B().string.isRequired,permissions:B().object.isRequired};const dt=be,ut=(s,o)=>{const a=Object.keys(o).sort().map(d=>({name:d,isOpen:!1}));return{...s,collapses:a}};var ce=t(18172);const mt={collapses:[]},gt=(s,o)=>(0,ce.ZP)(s,a=>{switch(o.type){case"TOGGLE_COLLAPSE":{a.collapses=s.collapses.map((d,C)=>C===o.index?{...d,isOpen:!d.isOpen}:{...d,isOpen:!1});break}default:return a}}),pt=()=>{const{modifiedData:s}=he(),{formatMessage:o}=(0,j.Z)(),[{collapses:a},d]=(0,e.useReducer)(gt,mt,p=>ut(p,s)),C=p=>d({type:"TOGGLE_COLLAPSE",index:p});return e.createElement(k.k,{direction:"column",alignItems:"stretch",gap:1},a.map((p,D)=>e.createElement(qe.U,{expanded:p.isOpen,onToggle:()=>C(D),key:p.name,variant:D%2===0?"secondary":void 0},e.createElement(_e.B,{title:at(p.name),description:o({id:"users-permissions.Plugin.permissions.plugins.description",defaultMessage:"Define all allowed actions for the {name} plugin."},{name:p.name}),variant:D%2?"primary":"secondary"}),e.createElement(et.v,null,e.createElement(K.x,null,e.createElement(dt,{permissions:s[p.name],name:p.name}))))))};var ht=t(36968),Me=t.n(ht),Et=t(69572),ft=t.n(Et);const vt={initialData:{},modifiedData:{},routes:{},selectedAction:"",policies:[]},xt=(s,o)=>(0,ce.ZP)(s,a=>{switch(o.type){case"ON_CHANGE":{const d=o.keys.length,C=o.keys[d-1]==="enabled";if(o.value&&C){const p=ft()(o.keys,d-1).join(".");a.selectedAction=p}Me()(a,["modifiedData",...o.keys],o.value);break}case"ON_CHANGE_SELECT_ALL":{const d=["modifiedData",...o.keys],C=se()(s,d,{}),p=Object.keys(C).reduce((D,P)=>(D[P]={...C[P],enabled:o.value},D),{});Me()(a,d,p);break}case"ON_RESET":{a.modifiedData=s.initialData;break}case"ON_SUBMIT_SUCCEEDED":{a.initialData=s.modifiedData;break}case"SELECT_ACTION":{const{actionToSelect:d}=o;a.selectedAction=d===s.selectedAction?"":d;break}default:return a}}),yt=(s,o,a)=>({...s,initialData:o,modifiedData:o,routes:a}),Le=(0,e.forwardRef)(({permissions:s,routes:o},a)=>{const{formatMessage:d}=(0,j.Z)(),[C,p]=(0,e.useReducer)(xt,vt,U=>yt(U,s,o));(0,e.useImperativeHandle)(a,()=>({getPermissions(){return{permissions:C.modifiedData}},resetForm(){p({type:"ON_RESET"})},setFormAfterSubmit(){p({type:"ON_SUBMIT_SUCCEEDED"})}}));const A={...C,onChange:({target:{name:U,value:$}})=>p({type:"ON_CHANGE",keys:U.split("."),value:$==="empty__string_value"?"":$}),onChangeSelectAll:({target:{name:U,value:$}})=>p({type:"ON_CHANGE_SELECT_ALL",keys:U.split("."),value:$}),onSelectedAction:U=>p({type:"SELECT_ACTION",actionToSelect:U})};return e.createElement(Ce,{value:A},e.createElement(ie.r,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0"},e.createElement(Y.P,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(k.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(k.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(m.Z,{variant:"delta",as:"h2"},d({id:(0,J.Z)("Plugins.header.title"),defaultMessage:"Permissions"})),e.createElement(m.Z,{as:"p",textColor:"neutral600"},d({id:(0,J.Z)("Plugins.header.description"),defaultMessage:"Only actions bound by a route are listed below."}))),e.createElement(pt,null))),e.createElement(Je,null)))});Le.propTypes={permissions:B().object.isRequired,routes:B().object.isRequired};const Oe=(0,e.memo)(Le),Jt={isLoading:!0,modifiedData:{}},qt=(s,o)=>produce(s,a=>{switch(o.type){case"GET_DATA":{a.isLoading=!0,a.modifiedData={};break}case"GET_DATA_SUCCEEDED":{a.isLoading=!1,a.modifiedData=o.data;break}case"GET_DATA_ERROR":{a.isLoading=!0;break}case"ON_SUBMIT_SUCCEEDED":{a.modifiedData=o.data;break}default:return a}}),_t=null,en=(s,o)=>{const{isLoading:a,allowedActions:d}=useRBAC(o),[{isLoading:C,modifiedData:p},D]=useReducer(reducer,initialState),P=useNotification(),T=useRef(!0),{get:A}=useFetchClient();useEffect(()=>(a||(async()=>{try{D({type:"GET_DATA"});const{data:y}=await A(getRequestURL(s));D({type:"GET_DATA_SUCCEEDED",data:y})}catch(y){T.current&&(D({type:"GET_DATA_ERROR"}),console.error(y),P({type:"warning",message:{id:"notification.error"}}))}})(),()=>{T.current=!1}),[a,s,A,P]);const U=useCallback($=>{D({type:"ON_SUBMIT_SUCCEEDED",data:$})},[]);return{allowedActions:d,dispatchSubmitSucceeded:U,isLoading:C,isLoadingForPermissions:a,modifiedData:p}},tn=null,nn={roles:[],isLoading:!0},sn=(s,o)=>produce(s,a=>{switch(o.type){case"GET_DATA":{a.isLoading=!0,a.roles=[];break}case"GET_DATA_SUCCEEDED":{a.roles=o.data,a.isLoading=!1;break}case"GET_DATA_ERROR":{a.isLoading=!1;break}default:return a}}),an=null,rn=(s=!0)=>{const[{roles:o,isLoading:a},d]=useReducer(reducer,initialState,()=>init(initialState,s)),C=useNotification(),p=useRef(!0),D=useFetchClient(),P=useCallback(async()=>{try{d({type:"GET_DATA"});const{data:{roles:T}}=await D.get(`/${pluginId}/roles`);d({type:"GET_DATA_SUCCEEDED",data:T})}catch(T){const A=get(T,["response","payload","message"],"An error occured");p.current&&(d({type:"GET_DATA_ERROR"}),A!=="Forbidden"&&C({type:"warning",message:A}))}},[D,C]);return useEffect(()=>(s&&P(),()=>{p.current=!1}),[s,P]),{roles:o,isLoading:a,getData:P}},on=null,Rt=(s,o)=>({...s,isLoading:o}),je={permissions:{},routes:{},isLoading:!0},Ct=(s,o)=>(0,ce.ZP)(s,a=>{switch(o.type){case"GET_DATA":{a.isLoading=!0,a.permissions={},a.routes={};break}case"GET_DATA_SUCCEEDED":{a.permissions=o.permissions,a.routes=o.routes,a.isLoading=!1;break}case"GET_DATA_ERROR":{a.isLoading=!1;break}default:return a}}),Ze=(s=!0)=>{const o=(0,n.lm)(),[{permissions:a,routes:d,isLoading:C},p]=(0,e.useReducer)(Ct,je,()=>Rt(je,s)),D=(0,n.kY)(),P=(0,e.useCallback)(async()=>{try{p({type:"GET_DATA"});const[{permissions:T},{routes:A}]=await Promise.all([`/${i.Z}/permissions`,`/${i.Z}/routes`].map(async U=>(await D.get(U)).data));p({type:"GET_DATA_SUCCEEDED",permissions:(0,Z.YX)(T),routes:A})}catch(T){const A=se()(T,["response","payload","message"],"An error occured");p({type:"GET_DATA_ERROR"}),A!=="Forbidden"&&o({type:"warning",message:A})}},[o]);return(0,e.useEffect)(()=>{s&&P()},[P,s]),{permissions:a,routes:d,getData:P,isLoading:C}},Pt={role:{},isLoading:!0},At=(s,o)=>(0,ce.ZP)(s,a=>{switch(o.type){case"GET_DATA_SUCCEEDED":{a.role=o.role,a.isLoading=!1;break}case"GET_DATA_ERROR":{a.isLoading=!1;break}case"ON_SUBMIT_SUCCEEDED":{a.role.name=o.name,a.role.description=o.description;break}default:return a}}),Tt=s=>{const[o,a]=(0,e.useReducer)(At,Pt),d=(0,n.lm)(),C=(0,e.useRef)(null),{get:p}=(0,n.kY)();(0,e.useEffect)(()=>(C.current=!0,s?D(s):a({type:"GET_DATA_SUCCEEDED",role:{}}),()=>C.current=!1),[s]);const D=async T=>{try{const{data:{role:A}}=await p(`/${i.Z}/roles/${T}`);C.current&&a({type:"GET_DATA_SUCCEEDED",role:A})}catch(A){console.error(A),a({type:"GET_DATA_ERROR"}),d({type:"warning",message:{id:"notification.error"}})}},P=(0,e.useCallback)(T=>{a({type:"ON_SUBMIT_SUCCEEDED",...T})},[]);return{...o,onSubmitSucceeded:P}};var q=t(87561);const Dt=q.Ry().shape({name:q.Z_().required(n.I0.required),description:q.Z_().required(n.I0.required)}),bt=()=>{const{formatMessage:s}=(0,j.Z)(),[o,a]=(0,e.useState)(!1),d=(0,n.lm)(),{lockApp:C,unlockApp:p}=(0,n.o1)(),{params:{id:D}}=(0,r.$B)(`/settings/${i.Z}/roles/:id`),{isLoading:P,routes:T}=Ze(),{role:A,onSubmitSucceeded:U,isLoading:$}=Tt(D),y=(0,e.useRef)(),{put:z}=(0,n.kY)(),H=async G=>{C(),a(!0);try{const F=y.current.getPermissions();await z(`/${i.Z}/roles/${D}`,{...G,...F,users:[]}),U({name:G.name,description:G.description}),d({type:"success",message:{id:(0,J.Z)("Settings.roles.edited"),defaultMessage:"Role edited"}})}catch(F){console.error(F),d({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}a(!1),p()};return $?e.createElement(n.dO,null):e.createElement(x.o,null,e.createElement(n.SL,{name:"Roles"}),e.createElement(ne.J9,{enableReinitialize:!0,initialValues:{name:A.name,description:A.description},onSubmit:H,validationSchema:Dt},({handleSubmit:G,values:F,handleChange:w,errors:_})=>e.createElement(n.l0,{noValidate:!0,onSubmit:G},e.createElement(b.T,{primaryAction:!P&&e.createElement(M.z,{disabled:A.code==="strapi-super-admin",type:"submit",loading:o,startIcon:e.createElement(ye.Z,null)},s({id:"global.save",defaultMessage:"Save"})),title:A.name,subtitle:A.description,navigationAction:e.createElement(n.rU,{startIcon:e.createElement(ke.Z,null),to:"/settings/users-permissions/roles"},s({id:"global.back",defaultMessage:"Back"}))}),e.createElement(L.D,null,e.createElement(k.k,{direction:"column",alignItems:"stretch",gap:7},e.createElement(K.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(k.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(m.Z,{variant:"delta",as:"h2"},s({id:(0,J.Z)("EditPage.form.roles"),defaultMessage:"Role details"})),e.createElement(ie.r,{gap:4},e.createElement(Y.P,{col:6},e.createElement(ve.o,{name:"name",value:F.name||"",onChange:w,label:s({id:"global.name",defaultMessage:"Name"}),error:_.name?s({id:_.name,defaultMessage:"Invalid value"}):null})),e.createElement(Y.P,{col:6},e.createElement(xe.g,{id:"description",value:F.description||"",onChange:w,label:s({id:"global.description",defaultMessage:"Description"}),error:_.description?s({id:_.description,defaultMessage:"Invalid value"}):null}))))),!P&&e.createElement(Oe,{ref:y,permissions:A.permissions,routes:T}))))))},Mt=()=>e.createElement(n.O4,{permissions:l.Z.updateRole},e.createElement(bt,null)),Lt=q.Ry().shape({name:q.Z_().required(n.I0.required),description:q.Z_().required(n.I0.required)}),Ot=()=>{const{formatMessage:s}=(0,j.Z)(),[o,a]=(0,e.useState)(!1),d=(0,n.lm)(),{goBack:C}=(0,r.k6)(),{lockApp:p,unlockApp:D}=(0,n.o1)(),{isLoading:P,permissions:T,routes:A}=Ze(),{trackUsage:U}=(0,n.rS)(),$=(0,e.useRef)(),{post:y}=(0,n.kY)(),z=async H=>{p(),a(!0);try{const G=$.current.getPermissions();await y(`/${i.Z}/roles`,{...H,...G,users:[]}),U("didCreateRole"),d({type:"success",message:{id:(0,J.Z)("Settings.roles.created"),defaultMessage:"Role created"}}),C()}catch(G){console.error(G),d({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}a(!1),D()};return e.createElement(x.o,null,e.createElement(n.SL,{name:"Roles"}),e.createElement(ne.J9,{enableReinitialize:!0,initialValues:{name:"",description:""},onSubmit:z,validationSchema:Lt},({handleSubmit:H,values:G,handleChange:F,errors:w})=>e.createElement(n.l0,{noValidate:!0,onSubmit:H},e.createElement(b.T,{primaryAction:!P&&e.createElement(M.z,{type:"submit",loading:o,startIcon:e.createElement(ye.Z,null)},s({id:"global.save",defaultMessage:"Save"})),title:s({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:s({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"})}),e.createElement(L.D,null,e.createElement(k.k,{direction:"column",alignItems:"stretch",gap:7},e.createElement(K.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(k.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(m.Z,{variant:"delta",as:"h2"},s({id:(0,J.Z)("EditPage.form.roles"),defaultMessage:"Role details"})),e.createElement(ie.r,{gap:4},e.createElement(Y.P,{col:6},e.createElement(ve.o,{name:"name",value:G.name||"",onChange:F,label:s({id:"global.name",defaultMessage:"Name"}),error:w.name?s({id:w.name,defaultMessage:"Invalid value"}):null})),e.createElement(Y.P,{col:6},e.createElement(xe.g,{id:"description",value:G.description||"",onChange:F,label:s({id:"global.description",defaultMessage:"Description"}),error:w.description?s({id:w.description,defaultMessage:"Invalid value"}):null}))))),!P&&e.createElement(Oe,{ref:$,permissions:T,routes:A}))))))},jt=()=>e.createElement(n.O4,{permissions:l.Z.createRole},e.createElement(Ot,null)),Zt=()=>e.createElement(n.O4,{permissions:l.Z.accessRoles},e.createElement(r.rs,null,e.createElement(r.AW,{path:`/settings/${i.Z}/roles/new`,component:jt,exact:!0}),e.createElement(r.AW,{path:`/settings/${i.Z}/roles/:id`,component:Mt,exact:!0}),e.createElement(r.AW,{path:`/settings/${i.Z}/roles`,component:oe,exact:!0}),e.createElement(r.AW,{path:"",component:n.Hn})))},89031:(h,E,t)=>{"use strict";t.d(E,{YX:()=>i,Gc:()=>c,OB:()=>x.Z});var e=t(41609),r=t.n(e);const i=b=>Object.keys(b).reduce((M,O)=>{const L=b[O].controllers,g=Object.keys(L).reduce((u,R)=>(r()(L[R])||(u[R]=L[R]),u),{});return r()(g)||(M[O]={controllers:g}),M},{});var l=t(31498);const c=b=>`/${l.Z}/${b}`;var x=t(84757)},47443:(h,E,t)=>{var e=t(42118);function r(n,i){var l=n==null?0:n.length;return!!l&&e(n,i,0)>-1}h.exports=r},1196:h=>{function E(t,e,r){for(var n=-1,i=t==null?0:t.length;++n<i;)if(r(e,t[n]))return!0;return!1}h.exports=E},20731:(h,E,t)=>{var e=t(88668),r=t(47443),n=t(1196),i=t(29932),l=t(7518),f=t(74757),c=200;function x(b,M,O,L){var g=-1,u=r,R=!0,v=b.length,m=[],I=M.length;if(!v)return m;O&&(M=i(M,l(O))),L?(u=n,R=!1):M.length>=c&&(u=f,R=!1,M=new e(M));e:for(;++g<v;){var S=b[g],j=O==null?S:O(S);if(S=L||S!==0?S:0,R&&j===j){for(var W=I;W--;)if(M[W]===j)continue e;m.push(S)}else u(M,j,L)||m.push(S)}return m}h.exports=x},89881:(h,E,t)=>{var e=t(47816),r=t(99291),n=r(e);h.exports=n},41848:h=>{function E(t,e,r,n){for(var i=t.length,l=r+(n?1:-1);n?l--:++l<i;)if(e(t[l],l,t))return l;return-1}h.exports=E},42118:(h,E,t)=>{var e=t(41848),r=t(62722),n=t(42351);function i(l,f,c){return f===f?n(l,f,c):e(l,r,c)}h.exports=i},62722:h=>{function E(t){return t!==t}h.exports=E},69199:(h,E,t)=>{var e=t(89881),r=t(98612);function n(i,l){var f=-1,c=r(i)?Array(i.length):[];return e(i,function(x,b,M){c[++f]=l(x,b,M)}),c}h.exports=n},82689:(h,E,t)=>{var e=t(29932),r=t(97786),n=t(67206),i=t(69199),l=t(71131),f=t(7518),c=t(85022),x=t(6557),b=t(1469);function M(O,L,g){L.length?L=e(L,function(v){return b(v)?function(m){return r(m,v.length===1?v[0]:v)}:v}):L=[x];var u=-1;L=e(L,f(n));var R=i(O,function(v,m,I){var S=e(L,function(j){return j(v)});return{criteria:S,index:++u,value:v}});return l(R,function(v,m){return c(v,m,g)})}h.exports=M},71131:h=>{function E(t,e){var r=t.length;for(t.sort(e);r--;)t[r]=t[r].value;return t}h.exports=E},26393:(h,E,t)=>{var e=t(33448);function r(n,i){if(n!==i){var l=n!==void 0,f=n===null,c=n===n,x=e(n),b=i!==void 0,M=i===null,O=i===i,L=e(i);if(!M&&!L&&!x&&n>i||x&&b&&O&&!M&&!L||f&&b&&O||!l&&O||!c)return 1;if(!f&&!x&&!L&&n<i||L&&l&&c&&!f&&!x||M&&l&&c||!b&&c||!O)return-1}return 0}h.exports=r},85022:(h,E,t)=>{var e=t(26393);function r(n,i,l){for(var f=-1,c=n.criteria,x=i.criteria,b=c.length,M=l.length;++f<b;){var O=e(c[f],x[f]);if(O){if(f>=M)return O;var L=l[f];return O*(L=="desc"?-1:1)}}return n.index-i.index}h.exports=r},99291:(h,E,t)=>{var e=t(98612);function r(n,i){return function(l,f){if(l==null)return l;if(!e(l))return n(l,f);for(var c=l.length,x=i?c:-1,b=Object(l);(i?x--:++x<c)&&f(b[x],x,b)!==!1;);return l}}h.exports=r},42351:h=>{function E(t,e,r){for(var n=r-1,i=t.length;++n<i;)if(t[n]===e)return n;return-1}h.exports=E},35161:(h,E,t)=>{var e=t(29932),r=t(67206),n=t(69199),i=t(1469);function l(f,c){var x=i(f)?e:n;return x(f,r(c,3))}h.exports=l},89734:(h,E,t)=>{var e=t(21078),r=t(82689),n=t(5976),i=t(16612),l=n(function(f,c){if(f==null)return[];var x=c.length;return x>1&&i(f,c[0],c[1])?c=[]:x>2&&i(c[0],c[1],c[2])&&(c=[c[0]]),r(f,e(c,1),[])});h.exports=l},13217:(h,E,t)=>{var e=t(14259);function r(n){var i=n==null?0:n.length;return i?e(n,1,i):[]}h.exports=r},69572:(h,E,t)=>{var e=t(14259),r=t(40554);function n(i,l,f){return i&&i.length?(l=f||l===void 0?1:r(l),e(i,0,l<0?0:l)):[]}h.exports=n},82569:(h,E,t)=>{var e=t(20731),r=t(5976),n=t(29246),i=r(function(l,f){return n(l)?e(l,f):[]});h.exports=i},48734:(h,E,t)=>{"use strict";t.d(E,{U:()=>L,y:()=>M});var e=t(85893),r=t(67294),n=t(46449),i=t(13819),l=t(2504),f=t(75515),c=t(11047),x=t(41580);const b=({theme:g,expanded:u,variant:R,disabled:v,error:m})=>m?`1px solid ${g.colors.danger600} !important`:v?`1px solid ${g.colors.neutral150}`:u?`1px solid ${g.colors.primary600}`:R==="primary"?`1px solid ${g.colors.neutral0}`:`1px solid ${g.colors.neutral100}`,M=(0,n.ZP)(f.Z)``,O=(0,n.ZP)(x.x)`
  border: ${b};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:g})=>g.colors.primary600};

    ${M} {
      color: ${({theme:g,expanded:u})=>u?void 0:g.colors.primary700};
    }

    ${f.Z} {
      color: ${({theme:g,expanded:u})=>u?void 0:g.colors.primary600};
    }

    & > ${c.k} {
      background: ${({theme:g})=>g.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:g})=>g.colors.primary200};
    }
  }
`,L=({children:g,disabled:u=!1,error:R,expanded:v=!1,hasErrorMessage:m=!0,id:I,onToggle:S,toggle:j,size:W="M",variant:Z="primary",shadow:V})=>{const N=(0,l.M)(I),ee=r.useMemo(()=>({expanded:v,onToggle:S,toggle:j,id:N,size:W,variant:Z,disabled:u}),[u,v,N,S,W,j,Z]);return(0,e.jsxs)(i.S.Provider,{value:ee,children:[(0,e.jsx)(O,{"data-strapi-expanded":v,disabled:u,"aria-disabled":u,expanded:v,hasRadius:!0,variant:Z,error:R,shadow:V,children:g}),R&&m&&(0,e.jsx)(x.x,{paddingTop:1,children:(0,e.jsx)(f.Z,{variant:"pi",textColor:"danger600",children:R})})]})}},63081:(h,E,t)=>{"use strict";t.d(E,{v:()=>i});var e=t(85893),r=t(13819),n=t(41580);const i=({children:l,...f})=>{const{expanded:c,id:x}=(0,r.A)();if(!c)return null;const b=`accordion-content-${x}`,M=`accordion-label-${x}`,O=`accordion-desc-${x}`;return(0,e.jsx)(n.x,{role:"region",id:b,"aria-labelledby":M,"aria-describedby":O,...f,children:l})}},13819:(h,E,t)=>{"use strict";t.d(E,{A:()=>n,S:()=>r});var e=t(67294);const r=(0,e.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),n=()=>(0,e.useContext)(r)},74756:(h,E,t)=>{"use strict";t.d(E,{B:()=>g});var e=t(85893),r=t(12645),n=t(46449),i=t(48734),l=t(13819);const f=({expanded:u,disabled:R,variant:v})=>{let m="neutral100";return u?m="primary100":R?m="neutral150":v==="primary"&&(m="neutral0"),m};var c=t(39785),x=t(52624),b=t(11047),M=t(75515);const O=(0,n.ZP)(c.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:u,expanded:R})=>R?u.colors.primary600:u.colors.neutral500};
    }
  }
`,L=(0,n.ZP)(b.k)`
  min-height: ${({theme:u,size:R})=>u.sizes.accordions[R]};
  border-radius: ${({theme:u,expanded:R})=>R?`${u.borderRadius} ${u.borderRadius} 0 0`:u.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:u})=>u.colors.primary600};
      }
    }
  }
`,g=({title:u,description:R,as:v="span",togglePosition:m="right",action:I,...S})=>{const{onToggle:j,toggle:W,expanded:Z,id:V,size:N,variant:ee,disabled:B}=(0,l.A)(),ue=`accordion-content-${V}`,k=`accordion-label-${V}`,ae=`accordion-desc-${V}`,Q=N==="M"?6:4,re=N==="M"?Q:Q-2,te=f({expanded:Z,disabled:B,variant:ee}),me={as:v,fontWeight:N==="S"?"bold":void 0,id:k,textColor:Z?"primary600":"neutral700",ellipsis:!0,variant:N==="M"?"delta":void 0},fe=Z?"primary600":"neutral600",ge=Z?"primary200":"neutral200",pe=N==="M"?`${32/16}rem`:`${24/16}rem`,oe=()=>{B||(W&&!j?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),W()):j&&j())},ne=(0,e.jsx)(b.k,{justifyContent:"center",borderRadius:"50%",height:pe,width:pe,transform:Z?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:ge,cursor:B?"not-allowed":"pointer",onClick:oe,shrink:0,children:(0,e.jsx)(x.J,{as:r.Z,width:N==="M"?`${11/16}rem`:`${8/16}rem`,color:Z?"primary600":"neutral600"})});return(0,e.jsx)(L,{paddingBottom:re,paddingLeft:Q,paddingRight:Q,paddingTop:re,background:te,expanded:Z,size:N,justifyContent:"space-between",cursor:B?"not-allowed":"",children:(0,e.jsxs)(b.k,{gap:3,flex:1,maxWidth:"100%",children:[m==="left"&&ne,(0,e.jsx)(O,{onClick:oe,"aria-disabled":B,"aria-expanded":Z,"aria-controls":ue,"aria-labelledby":k,"data-strapi-accordion-toggle":!0,expanded:Z,type:"button",flex:1,minWidth:0,...S,children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.y,{...me,children:u}),R&&(0,e.jsx)(M.Z,{as:"p",id:ae,textColor:fe,children:R})]})}),m==="right"&&(0,e.jsxs)(b.k,{gap:3,children:[ne,I]}),m==="left"&&I]})})}},36989:(h,E,t)=>{"use strict";t.d(E,{Z:()=>n});var e=t(85893),r=t(11047);const n=({startActions:i,endActions:l})=>!i&&!l?null:(0,e.jsxs)(r.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(r.k,{gap:2,wrap:"wrap",children:i}),(0,e.jsx)(r.k,{gap:2,shrink:0,wrap:"wrap",children:l})]})},49066:(h,E,t)=>{"use strict";t.d(E,{D:()=>n});var e=t(85893),r=t(41580);const n=({children:i})=>(0,e.jsx)(r.x,{paddingLeft:10,paddingRight:10,children:i})},53979:(h,E,t)=>{"use strict";t.d(E,{T:()=>M});var e=t(85893),r=t(67294),n=t(46449);const i=g=>{const u=(0,r.useRef)(null),[R,v]=(0,r.useState)(!0),m=([I])=>{v(I.isIntersecting)};return(0,r.useEffect)(()=>{const I=u.current,S=new IntersectionObserver(m,g);return I&&S.observe(u.current),()=>{I&&S.disconnect()}},[u,g]),[u,R]};var l=t(79698);const f=(g,u)=>{const R=(0,l.W)(u);(0,r.useLayoutEffect)(()=>{const v=new ResizeObserver(R);return Array.isArray(g)?g.forEach(m=>{m.current&&v.observe(m.current)}):g.current&&v.observe(g.current),()=>{v.disconnect()}},[g,R])};var c=t(41580),x=t(11047),b=t(75515);const M=g=>{const u=(0,r.useRef)(null),[R,v]=(0,r.useState)(null),[m,I]=i({root:null,rootMargin:"0px",threshold:0});return f(m,()=>{m.current&&v(m.current.getBoundingClientRect())}),(0,r.useEffect)(()=>{u.current&&v(u.current.getBoundingClientRect())},[u]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:R?.height},ref:m,children:I&&(0,e.jsx)(L,{ref:u,...g})}),!I&&(0,e.jsx)(L,{...g,sticky:!0,width:R?.width})]})};M.displayName="HeaderLayout";const O=(0,n.ZP)(c.x)`
  width: ${({width:g})=>g?`${g/16}rem`:void 0};
  z-index: ${({theme:g})=>g.zIndices[1]};
`,L=r.forwardRef(({navigationAction:g,primaryAction:u,secondaryAction:R,subtitle:v,title:m,sticky:I,width:S,...j},W)=>{const Z=typeof v=="string";return I?(0,e.jsx)(O,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:S,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(x.k,{justifyContent:"space-between",children:[(0,e.jsxs)(x.k,{children:[g&&(0,e.jsx)(c.x,{paddingRight:3,children:g}),(0,e.jsxs)(c.x,{children:[(0,e.jsx)(b.Z,{variant:"beta",as:"h1",...j,children:m}),Z?(0,e.jsx)(b.Z,{variant:"pi",textColor:"neutral600",children:v}):v]}),R?(0,e.jsx)(c.x,{paddingLeft:4,children:R}):null]}),(0,e.jsx)(x.k,{children:u?(0,e.jsx)(c.x,{paddingLeft:2,children:u}):void 0})]})}):(0,e.jsxs)(c.x,{ref:W,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:g?6:8,background:"neutral100","data-strapi-header":!0,children:[g?(0,e.jsx)(c.x,{paddingBottom:2,children:g}):null,(0,e.jsxs)(x.k,{justifyContent:"space-between",children:[(0,e.jsxs)(x.k,{minWidth:0,children:[(0,e.jsx)(b.Z,{as:"h1",variant:"alpha",...j,children:m}),R?(0,e.jsx)(c.x,{paddingLeft:4,children:R}):null]}),u]}),Z?(0,e.jsx)(b.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:v}):v]})})},17034:(h,E,t)=>{"use strict";t.d(E,{A:()=>f});var e=t(85893),r=t(46449),n=t(41580);const i=(0,r.ZP)(n.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:c})=>c?"auto 1fr":"1fr"};
`,l=(0,r.ZP)(n.x)`
  overflow-x: hidden;
`,f=({sideNav:c,children:x})=>(0,e.jsxs)(i,{hasSideNav:!!c,children:[c,(0,e.jsx)(l,{paddingBottom:10,children:x})]})},185:(h,E,t)=>{"use strict";t.d(E,{o:()=>l});var e=t(85893),r=t(46449),n=t(41580);const i=(0,r.ZP)(n.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,l=({labelledBy:f="main-content-title",...c})=>(0,e.jsx)(i,{"aria-labelledby":f,as:"main",id:"main-content",tabIndex:-1,...c})},67109:(h,E,t)=>{"use strict";t.d(E,{Z:()=>n});var e=t(85893);const r=i=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...i,children:(0,e.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),n=r},78114:(h,E,t)=>{"use strict";t.d(E,{Z:()=>n});var e=t(85893);const r=i=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...i,children:(0,e.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M2.68 9.192c-.6.276-2.114 1.18-2.306 1.303a.792.792 0 0 0-.374.68v1.65a.797.797 0 0 0 .384.687c.254.16 1.73 1.042 2.306 1.303l.744 1.8c-.24.634-.67 2.333-.72 2.554a.797.797 0 0 0 .216.744l1.167 1.166a.801.801 0 0 0 .744.216l.03-.008c.36-.092 1.946-.498 2.523-.712l1.8.744c.276.6 1.181 2.115 1.304 2.307a.805.805 0 0 0 .679.374h1.649a.797.797 0 0 0 .686-.384c.16-.254 1.042-1.73 1.303-2.306l1.8-.744c.634.24 2.333.67 2.554.72a.797.797 0 0 0 .744-.216l1.166-1.167a.803.803 0 0 0 .216-.744l-.008-.03c-.092-.36-.498-1.946-.712-2.523l.744-1.8c.6-.276 2.115-1.181 2.307-1.304a.804.804 0 0 0 .374-.679v-1.649a.796.796 0 0 0-.382-.679c-.254-.16-1.73-1.041-2.306-1.303l-.744-1.8c.24-.634.67-2.333.72-2.554a.796.796 0 0 0-.216-.744l-1.166-1.173a.802.802 0 0 0-.744-.216l-.03.008c-.361.092-1.947.498-2.524.712l-1.8-.744c-.276-.6-1.18-2.115-1.303-2.307a.803.803 0 0 0-.68-.374h-1.65a.797.797 0 0 0-.68.382c-.16.254-1.041 1.73-1.303 2.306l-1.8.744c-.634-.24-2.333-.67-2.554-.72a.797.797 0 0 0-.744.216L2.921 4.094a.802.802 0 0 0-.216.744l.008.03c.092.361.498 1.947.712 2.524l-.744 1.8ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",clipRule:"evenodd"})}),n=r}}]);
