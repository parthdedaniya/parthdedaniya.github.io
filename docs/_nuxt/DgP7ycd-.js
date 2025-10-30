import{h as v,_ as A,F as _,y as d,z as c,A as e,G as u,E as b,H as w,I as f,C as y,J as N,K as C,L as B,M,B as h,N as I,x as z,O as F,P as V,Q as P}from"./C8YzSL4M.js";/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),J=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,n,s)=>s?s.toUpperCase():n.toLowerCase()),T=t=>{const a=J(t);return a.charAt(0).toUpperCase()+a.slice(1)},L=(...t)=>t.filter((a,n,s)=>!!a&&a.trim()!==""&&s.indexOf(a)===n).join(" ").trim(),D=t=>t==="";/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var p={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=({name:t,iconNode:a,absoluteStrokeWidth:n,"absolute-stroke-width":s,strokeWidth:o,"stroke-width":i,size:l=p.width,color:k=p.stroke,...x},{slots:r})=>v("svg",{...p,...x,width:l,height:l,stroke:k,"stroke-width":D(n)||D(s)||n===!0||s===!0?Number(o||i||p["stroke-width"])*24/Number(l):o||i||p["stroke-width"],class:L("lucide",x.class,...t?[`lucide-${S(T(t))}-icon`,`lucide-${S(t)}`]:["lucide-icon"])},[...a.map(m=>v(...m)),...r.default?[r.default()]:[]]);/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=(t,a)=>(n,{slots:s,attrs:o})=>v(U,{...o,...n,iconNode:a,name:t},s);/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=g("cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=g("code-xml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=g("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=g("globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=g("palette",[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]]);/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=g("server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=g("user",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=g("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),G={id:"about",class:"section-padding bg-white dark:bg-gray-800"},Q={class:"container-custom"},R={class:"text-center mb-16"},X={class:"text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"},Y={class:"max-w-4xl mx-auto",delay:200},K={class:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"},ee={class:"space-y-8",delay:400},te={class:"grid grid-cols-2 sm:grid-cols-3 gap-4"},oe=["delay"],ae={class:"flex items-center space-x-3"},re={class:"font-semibold text-gray-900 dark:text-white text-sm"},se={class:"text-xs text-gray-500 dark:text-gray-400"},ne={class:"flex flex-col items-center space-y-8",delay:600},le={class:"relative"},ie={class:"w-64 h-64 bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl shadow-2xl flex items-center justify-center"},ce={class:"grid grid-cols-3 gap-6 text-center"},de=["delay"],ge={class:"text-2xl font-bold text-primary-600 dark:text-primary-400"},ue={class:"text-sm text-gray-500 dark:text-gray-400"},me={__name:"About",setup(t){const a=[{name:"Vue.js",category:"Frontend",icon:H,bgColor:"bg-green-100 dark:bg-green-900/30",iconColor:"text-green-600 dark:text-green-400"},{name:"Nuxt",category:"Framework",icon:W,bgColor:"bg-blue-100 dark:bg-blue-900/30",iconColor:"text-blue-600 dark:text-blue-400"},{name:"NestJS",category:"Backend",icon:E,bgColor:"bg-red-100 dark:bg-red-900/30",iconColor:"text-red-600 dark:text-red-400"},{name:"Node.js",category:"Runtime",icon:O,bgColor:"bg-yellow-100 dark:bg-yellow-900/30",iconColor:"text-yellow-600 dark:text-yellow-400"},{name:"AWS",category:"Cloud",icon:q,bgColor:"bg-orange-100 dark:bg-orange-900/30",iconColor:"text-orange-600 dark:text-orange-400"},{name:"DynamoDB",category:"Database",icon:j,bgColor:"bg-purple-100 dark:bg-purple-900/30",iconColor:"text-purple-600 dark:text-purple-400"},{name:"MongoDB",category:"Database",icon:j,bgColor:"bg-green-100 dark:bg-green-900/30",iconColor:"text-green-600 dark:text-green-400"},{name:"TailwindCSS",category:"Styling",icon:$,bgColor:"bg-cyan-100 dark:bg-cyan-900/30",iconColor:"text-cyan-600 dark:text-cyan-400"}],n=[{value:"3+",label:"Years Experience"},{value:"50+",label:"Projects Built"},{value:"10+",label:"Technologies"}];return(s,o)=>{const i=_("motion-fade-in-up"),l=_("motion-visible-once"),k=_("motion-slide-visible-once-left"),x=_("motion-slide-visible-once-right");return c(),d("section",G,[e("div",Q,[e("div",R,[u((c(),d("h2",X,[...o[0]||(o[0]=[b(" About ",-1),e("span",{class:"text-gradient"},"Me",-1)])])),[[i],[l]]),u((c(),d("div",Y,[...o[1]||(o[1]=[e("p",{class:"text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8"},[b(" I'm a full-stack developer who loves crafting "),e("span",{class:"font-semibold text-primary-600 dark:text-primary-400"},"elegant UIs"),b(" and "),e("span",{class:"font-semibold text-primary-600 dark:text-primary-400"},"scalable backend systems"),b(". My current stack includes Vue.js, Nuxt, and NestJS — with a focus on real-time features and cloud-native deployments (AWS). ")],-1),e("p",{class:"text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed"}," When I'm not coding, you'll find me exploring new technologies, contributing to open source, or building side projects that solve real-world problems. I believe in writing clean, maintainable code and creating delightful user experiences. ",-1)])])),[[i],[l]])]),e("div",K,[u((c(),d("div",ee,[o[2]||(o[2]=e("h3",{class:"text-2xl font-bold text-gray-900 dark:text-white mb-6"}," Technologies I Love Working With ",-1)),e("div",te,[(c(),d(w,null,f(a,(r,m)=>u(e("div",{key:r.name,class:"skill-badge group",delay:500+m*100},[e("div",ae,[e("div",{class:C(["w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110",r.bgColor])},[(c(),B(M(r.icon),{class:C([r.iconColor,"w-5 h-5"])},null,8,["class"]))],2),e("div",null,[e("h4",re,h(r.name),1),e("p",se,h(r.category),1)])])],8,oe),[[i],[l]])),64))])])),[[k]]),u((c(),d("div",ne,[e("div",le,[e("div",ie,[y(N(Z),{class:"w-32 h-32 text-white/80"})]),o[3]||(o[3]=e("div",{class:"absolute -top-4 -right-4 w-8 h-8 bg-primary-300 rounded-full animate-bounce-gentle"},null,-1)),o[4]||(o[4]=e("div",{class:"absolute -bottom-4 -left-4 w-6 h-6 bg-primary-400 rounded-full animate-float animation-delay-400"},null,-1))]),e("div",ce,[(c(),d(w,null,f(n,(r,m)=>u(e("div",{key:r.label,class:"space-y-2",delay:800+m*100},[e("div",ge,h(r.value),1),e("div",ue,h(r.label),1)],8,de),[[i],[l]])),64))])])),[[x]])])])])}}},pe=A(me,[["__scopeId","data-v-8b460cb9"]]),xe={__name:"index",setup(t){return I({title:"Parth - Full-Stack Developer",ogTitle:"Parth - Full-Stack Developer",description:"Full-Stack Developer specializing in Vue.js, Nuxt, NestJS, and AWS. Building elegant UIs and scalable backend systems.",ogDescription:"Full-Stack Developer specializing in Vue.js, Nuxt, NestJS, and AWS. Building elegant UIs and scalable backend systems.",ogImage:"/og-image.jpg",twitterCard:"summary_large_image",twitterImage:"/og-image.jpg"}),z({script:[{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"Person",name:"Parth",jobTitle:"Full-Stack Developer",description:"Full-Stack Developer specializing in Vue.js, Nuxt, NestJS, and AWS",url:"https://yourwebsite.com",sameAs:["https://github.com/yourgithub","https://linkedin.com/in/yourprofile","https://twitter.com/yourhandle"],knowsAbout:["Vue.js","Nuxt","NestJS","Node.js","AWS","DynamoDB","MongoDB","TailwindCSS","Full-Stack Development","Frontend Development","Backend Development"]})}]}),(a,n)=>{const s=F,o=pe,i=V,l=P;return c(),d("div",null,[y(s),y(o),y(i),y(l)])}}};export{xe as default};
