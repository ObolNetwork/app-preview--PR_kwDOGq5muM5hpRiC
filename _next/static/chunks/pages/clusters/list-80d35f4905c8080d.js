(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[15],{41344:function(t,e,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/clusters/list",function(){return l(42361)}])},42361:function(t,e,l){"use strict";l.r(e),l.d(e,{default:function(){return _}});var o=l(85893),s=l(8478),r=l(11163),n=l(2504),i=l(21237),a=l(67294),c=l(83121),u=l(80050),d=l(59734),h=l(71866);let v=[{accessorKey:"clusterDisplay",header:"Cluster",sortable:!0,sortAccessor:t=>t.cluster},{accessorKey:"validators",header:"Validators",sortable:!0},{accessorKey:"operators",header:"Operators",sortable:!0}],p=t=>{var e;let{operator:l,setTotalClusters:r,setTotalValidators:n}=t,{data:a,error:c,isLoading:p}=(0,d.ZP)(l?"/dv/operator/".concat(l):null,u.gP),{data:f,error:x,isLoading:_}=(0,d.ZP)(l?"/lock/operator/".concat(l):null,u.e0);if(n&&n(null==f?void 0:f.total_count),p)return(0,o.jsx)(s.xv,{children:"Loading..."});if(c||!a)return(0,o.jsx)(s.xv,{children:"Error | no data"});if(a&&!a.cluster_definitions)return(0,o.jsx)(s.xv,{children:"No clusters"});let g=null==f?void 0:f.cluster_locks.map(t=>{var e,l,r,n;return{id:t._id,clusterDisplay:(0,o.jsx)(s.rU,{href:"/clusters/details/?lockHash=".concat(t.lock_hash),children:t.cluster_definition.name}),cluster:t.cluster_definition.name,validators:null===(e=t.cluster_definition)||void 0===e?void 0:null===(l=e.validators)||void 0===l?void 0:l.length,operators:null===(r=t.cluster_definition)||void 0===r?void 0:null===(n=r.operators)||void 0===n?void 0:n.length}}),m=null==f?void 0:f.cluster_locks.map(t=>t.cluster_definition.config_hash),j=null==a?void 0:null===(e=a.cluster_definitions)||void 0===e?void 0:e.filter(t=>!(null==m?void 0:m.includes(t.config_hash))),b=j.map(t=>{var e,l;let r=t.operators.every(t=>""===t.address),n=r?"/solo/create-cluster/?configHash=".concat(t.config_hash,"&fromList=true"):"/dv/?configHash=".concat(t.config_hash);return{id:t._id,clusterDisplay:(0,o.jsx)(s.rU,{href:n,children:t.name}),cluster:t.name,status:(0,o.jsx)(s.HV,{textVariant:"body",status:(0,i.yc)(t)}),validators:null==t?void 0:null===(e=t.validators)||void 0===e?void 0:e.length,operators:null==t?void 0:null===(l=t.operators)||void 0===l?void 0:l.length}});return r&&(null==b?void 0:b.length)>0&&(null==m?void 0:m.length)>0&&r((null==b?void 0:b.length)+(null==m?void 0:m.length)),(0,o.jsx)(h.g_,{css:{".table-container":{"@sm":{width:"694px"}}},children:(0,o.jsx)(s.Nk,{tabs:[{title:"Clusters",count:null==f?void 0:f.total_count,tableProps:{columns:v,rows:g}},{title:"Invites",count:null==b?void 0:b.length,tableProps:{columns:v,rows:b}}]})})},f=(0,s.zo)(s.kC,{flexDirection:"column",width:"auto",gap:"$2xl",px:"10%",py:"$5xl","@sm":{px:"10%",pb:"$5xl",pt:"$xl"}}),x=()=>{let t=(0,r.useRouter)(),e=(0,i.xs)(t,"walletAddress"),{account:l}=(0,n.kR)(),[u]=(0,n.pZ)(e||l),[d,h]=(0,a.useState)(0),[v,x]=(0,a.useState)(0),_=t=>{h(t)},g=t=>{x(t)},m=v-d;return(0,o.jsxs)(f,{children:[(0,o.jsx)(s.kC,{direction:"column",css:{gap:"$xxs"},children:(0,o.jsx)(s.xv,{variant:"h3",children:u||(0,c.zN)(e,[2,10],5)})}),(0,o.jsxs)(s.kC,{css:{gap:"$lg","@sm":{flexDirection:"column"}},children:[(0,o.jsx)(s.gK,{heading:"Clusters",content:v||"0",tooltipContent:"The number of clusters that this user operates"}),(0,o.jsx)(s.gK,{heading:"Validators",content:d||"0",tooltipContent:"The number of validators in all of this operators clusters"}),(0,o.jsx)(s.gK,{heading:"Invites",content:m>=0?m:"0",tooltipContent:"The number of cluster invites sent to this operator"})]}),(0,o.jsx)(p,{setTotalClusters:g,setTotalValidators:_,operator:e||l})]})};var _=x}},function(t){t.O(0,[774,888,179],function(){return t(t.s=41344)}),_N_E=t.O()}]);