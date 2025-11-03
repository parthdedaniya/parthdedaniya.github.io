import{h as _,_ as j,G as b,z as d,A as c,B as e,H as p,F as A,I as N,J as k,K as f,L as w,M as z,N as B,C as h,D as y,O as F,P as M,y as I,Q as V,R as P,S as J}from"./DOmYCW5h.js";/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),U=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,n,s)=>s?s.toUpperCase():n.toLowerCase()),L=o=>{const a=U(o);return a.charAt(0).toUpperCase()+a.slice(1)},T=(...o)=>o.filter((a,n,s)=>!!a&&a.trim()!==""&&s.indexOf(a)===n).join(" ").trim(),S=o=>o==="";/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var m={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=({name:o,iconNode:a,absoluteStrokeWidth:n,"absolute-stroke-width":s,strokeWidth:t,"stroke-width":l,size:i=m.width,color:v=m.stroke,...x},{slots:r})=>_("svg",{...m,...x,width:i,height:i,stroke:v,"stroke-width":S(n)||S(s)||n===!0||s===!0?Number(t||l||m["stroke-width"])*24/Number(i):t||l||m["stroke-width"],class:T("lucide",x.class,...o?[`lucide-${C(L(o))}-icon`,`lucide-${C(o)}`]:["lucide-icon"])},[...a.map(u=>_(...u)),...r.default?[r.default()]:[]]);/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=(o,a)=>(n,{slots:s,attrs:t})=>_(q,{...t,...n,iconNode:a,name:o},s);/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=g("cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=g("code-xml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=g("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=g("globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
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
 */const O=g("user",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=g("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),R={id:"about",class:"section-padding bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden"},Q={class:"container-custom relative z-10"},X={class:"text-center mb-16"},Y={class:"text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"},K={class:"max-w-4xl mx-auto",delay:200},ee={class:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"},te={class:"space-y-8",delay:400},oe={class:"grid grid-cols-2 sm:grid-cols-3 gap-4"},ae=["delay"],re={class:"flex items-center space-x-3"},se={class:"font-semibold text-gray-900 dark:text-white text-sm"},ne={class:"text-xs text-gray-500 dark:text-gray-400"},ie={class:"flex flex-col items-center space-y-8",delay:600},le={class:"relative group"},ce={class:"w-64 h-64 bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 rounded-3xl shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-105 hover:rotate-3 glow-on-hover relative overflow-hidden"},de={class:"grid grid-cols-3 gap-6 text-center"},ge=["delay"],pe={class:"text-2xl font-bold text-primary-600 dark:text-primary-400"},ue={class:"text-sm text-gray-500 dark:text-gray-400"},me={__name:"About",setup(o){const a=[{name:"Vue.js",category:"Frontend",icon:W,bgColor:"bg-green-100 dark:bg-green-900/30",iconColor:"text-green-600 dark:text-green-400"},{name:"Nuxt",category:"Framework",icon:Z,bgColor:"bg-blue-100 dark:bg-blue-900/30",iconColor:"text-blue-600 dark:text-blue-400"},{name:"NestJS",category:"Backend",icon:E,bgColor:"bg-red-100 dark:bg-red-900/30",iconColor:"text-red-600 dark:text-red-400"},{name:"Node.js",category:"Runtime",icon:G,bgColor:"bg-yellow-100 dark:bg-yellow-900/30",iconColor:"text-yellow-600 dark:text-yellow-400"},{name:"AWS",category:"Cloud",icon:H,bgColor:"bg-orange-100 dark:bg-orange-900/30",iconColor:"text-orange-600 dark:text-orange-400"},{name:"DynamoDB",category:"Database",icon:D,bgColor:"bg-purple-100 dark:bg-purple-900/30",iconColor:"text-purple-600 dark:text-purple-400"},{name:"MongoDB",category:"Database",icon:D,bgColor:"bg-green-100 dark:bg-green-900/30",iconColor:"text-green-600 dark:text-green-400"},{name:"TailwindCSS",category:"Styling",icon:$,bgColor:"bg-cyan-100 dark:bg-cyan-900/30",iconColor:"text-cyan-600 dark:text-cyan-400"}],n=[{value:"3+",label:"Years Experience"},{value:"20+",label:"Major Features"},{value:"1000+",label:"Users Impacted"}];return(s,t)=>{const l=b("motion-fade-in-up"),i=b("motion-visible-once"),v=b("motion-slide-visible-once-left"),x=b("motion-slide-visible-once-right");return c(),d("section",R,[t[7]||(t[7]=e("div",{class:"absolute inset-0 opacity-5 dark:opacity-10"},[e("div",{class:"absolute top-0 right-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl animate-float-smooth"}),e("div",{class:"absolute bottom-0 left-0 w-72 h-72 bg-primary-500 rounded-full blur-3xl animate-float-smooth",style:{"animation-delay":"1.5s"}})],-1)),e("div",Q,[e("div",X,[p((c(),d("h2",Y,[...t[0]||(t[0]=[A(" About ",-1),e("span",{class:"gradient-text"},"Me",-1)])])),[[l],[i]]),p((c(),d("div",K,[...t[1]||(t[1]=[N('<p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8" data-v-c917a7e2> Full Stack Developer with <span class="font-semibold text-primary-600 dark:text-primary-400" data-v-c917a7e2>3 years of hands-on experience</span> building <span class="font-semibold text-primary-600 dark:text-primary-400" data-v-c917a7e2>scalable web applications</span>. Currently working at Z Strike, developing a next-gen authorization platform using <span class="font-semibold text-primary-600 dark:text-primary-400" data-v-c917a7e2>Cedar policy language</span> integrated via WebAssembly. </p><p class="text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed" data-v-c917a7e2> Specialized in Vue.js, Nuxt, Express.js, and NestJS, with a focus on integrating AWS services. I&#39;ve delivered 20+ major features, built 30+ reusable components, and improved UI efficiency by 25% through optimized state management. Passionate about building tools that empower developers and setting technical standards in agile startup environments. </p>',2)])])),[[l],[i]])]),e("div",ee,[p((c(),d("div",te,[t[2]||(t[2]=e("h3",{class:"text-2xl font-bold text-gray-900 dark:text-white mb-6"}," Technologies I Love Working With ",-1)),e("div",oe,[(c(),d(k,null,f(a,(r,u)=>p(e("div",{key:r.name,class:"skill-badge group",delay:500+u*100},[e("div",re,[e("div",{class:w(["w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110",r.bgColor])},[(c(),z(B(r.icon),{class:w([r.iconColor,"w-5 h-5"])},null,8,["class"]))],2),e("div",null,[e("h4",se,h(r.name),1),e("p",ne,h(r.category),1)])])],8,ae),[[l],[i]])),64))])])),[[v]]),p((c(),d("div",ie,[e("div",le,[e("div",ce,[t[3]||(t[3]=e("div",{class:"absolute inset-0 bg-gradient-to-br from-primary-300/50 to-primary-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"},null,-1)),t[4]||(t[4]=e("div",{class:"absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"},null,-1)),y(F(O),{class:"w-32 h-32 text-white/80 relative z-10 group-hover:scale-110 transition-transform duration-300"})]),t[5]||(t[5]=e("div",{class:"absolute -top-4 -right-4 w-8 h-8 bg-primary-300 rounded-full animate-bounce-gentle glow-on-hover"},null,-1)),t[6]||(t[6]=e("div",{class:"absolute -bottom-4 -left-4 w-6 h-6 bg-primary-400 rounded-full animate-float animation-delay-400 glow-on-hover"},null,-1))]),e("div",de,[(c(),d(k,null,f(n,(r,u)=>p(e("div",{key:r.label,class:"space-y-2",delay:800+u*100},[e("div",pe,h(r.value),1),e("div",ue,h(r.label),1)],8,ge),[[l],[i]])),64))])])),[[x]])])])])}}},ye=j(me,[["__scopeId","data-v-c917a7e2"]]),be={__name:"index",setup(o){return M({title:"Parth - Full-Stack Developer",ogTitle:"Parth - Full-Stack Developer",description:"Full-Stack Developer specializing in Vue.js, Nuxt, NestJS, and AWS. Building elegant UIs and scalable backend systems.",ogDescription:"Full-Stack Developer specializing in Vue.js, Nuxt, NestJS, and AWS. Building elegant UIs and scalable backend systems.",ogImage:"/og-image.jpg",twitterCard:"summary_large_image",twitterImage:"/og-image.jpg"}),I({script:[{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"Person",name:"Parth",jobTitle:"Full-Stack Developer",description:"Full-Stack Developer specializing in Vue.js, Nuxt, NestJS, and AWS",url:"https://yourwebsite.com",sameAs:["https://github.com/yourgithub","https://linkedin.com/in/yourprofile","https://twitter.com/yourhandle"],knowsAbout:["Vue.js","Nuxt","NestJS","Node.js","AWS","DynamoDB","MongoDB","TailwindCSS","Full-Stack Development","Frontend Development","Backend Development"]})}]}),(a,n)=>{const s=V,t=ye,l=P,i=J;return c(),d("div",null,[y(s),y(t),y(l),y(i)])}}};export{be as default};
