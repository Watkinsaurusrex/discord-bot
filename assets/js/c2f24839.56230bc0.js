"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29],{3905:(t,e,i)=>{i.d(e,{Zo:()=>l,kt:()=>f});var n=i(7294);function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){o(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function s(t,e){if(null==t)return{};var i,n,o=function(t,e){if(null==t)return{};var i,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)i=a[n],e.indexOf(i)>=0||(o[i]=t[i]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)i=a[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(o[i]=t[i])}return o}var c=n.createContext({}),p=function(t){var e=n.useContext(c),i=e;return t&&(i="function"==typeof t?t(e):r(r({},e),t)),i},l=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var i=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),m=p(i),u=o,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||a;return i?n.createElement(f,r(r({ref:e},l),{},{components:i})):n.createElement(f,r({ref:e},l))}));function f(t,e){var i=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=i.length,r=new Array(a);r[0]=u;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[m]="string"==typeof t?t:o,r[1]=s;for(var p=2;p<a;p++)r[p]=i[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},3084:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=i(7462),o=(i(7294),i(3905));const a={sidebar_position:3},r="Notifications",s={unversionedId:"notifications",id:"notifications",title:"Notifications",description:"Besides commands, this bot can also send notifications to your Discord server when something happens to one of your group members (new achievements, HCIM death, etc), or to your competitions (started, ended, starting soon, etc).",source:"@site/docs/notifications.mdx",sourceDirName:".",slug:"/notifications",permalink:"/notifications",draft:!1,editUrl:"https://github.com/wise-old-man/discord-bot/tree/master/docs/docs/notifications.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebar",previous:{title:"Commands",permalink:"/commands"},next:{title:"Troubleshooting",permalink:"/troubleshooting"}},c={},p=[{value:"Competition Created",id:"competition-created",level:2},{value:"Competition Starting",id:"competition-starting",level:2},{value:"Competition Started",id:"competition-started",level:2},{value:"Competition Ending",id:"competition-ending",level:2},{value:"Competition Ended",id:"competition-ended",level:2},{value:"Example (Classic competition, showing top participants):",id:"example-classic-competition-showing-top-participants",level:4},{value:"Example (Team competition, showing top teans):",id:"example-team-competition-showing-top-teans",level:4}],l={toc:p},m="wrapper";function d(t){let{components:e,...a}=t;return(0,o.kt)(m,(0,n.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"notifications"},"Notifications"),(0,o.kt)("p",null,"Besides commands, this bot can also send notifications to your Discord server when something happens to one of your group members (new achievements, HCIM death, etc), or to your competitions (started, ended, starting soon, etc)."),(0,o.kt)("p",null,"For this, the bot needs to know what your group is and where to send those notifications, and since there are many types of notifications, you need to either specify where to receive each type, disable a type, or just ",(0,o.kt)("strong",{parentName:"p"},"assign a default notifications channel"),"."),(0,o.kt)("br",null),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Notifications are only sent if configured properly beforehand. Learn more about these configurations here:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/commands#config-group"},"Configuring Group ID")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/commands#config-notifications"},"Configuring Notifications"))),(0,o.kt)("p",{parentName:"admonition"},"The bot also needs certain permissions to be able to speak in the channel you want to receive notifications in without being mentioned. Here are the current required permissions:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Send messages"),(0,o.kt)("li",{parentName:"ul"},"Manage messages"),(0,o.kt)("li",{parentName:"ul"},"Embed links"),(0,o.kt)("li",{parentName:"ul"},"Attach files"),(0,o.kt)("li",{parentName:"ul"},"Use application commands"))),(0,o.kt)("br",null),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"competition-created"},"Competition Created"),(0,o.kt)("p",null,"This notification is sent when a group competition is created."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},'To configure this notification, you can use the "Competition Status" notification type in the ',(0,o.kt)("inlineCode",{parentName:"p"},"/config notifications")," command.")),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Competition Created Notification",src:i(8869).Z,width:"415",height:"309"})),(0,o.kt)("br",null),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"competition-starting"},"Competition Starting"),(0,o.kt)("p",null,"This notification is sent when a group competition is starting soon. The time periods aren't configurable at the moment, this notification is sent multiple times before the competition starts."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"6 Hours"),(0,o.kt)("li",{parentName:"ul"},"5 Minutes")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},'To configure this notification, you can use the "Competition Status" notification type in the ',(0,o.kt)("inlineCode",{parentName:"p"},"/config notifications")," command.")),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Competition Starting Notification",src:i(1326).Z,width:"483",height:"236"})),(0,o.kt)("br",null),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"competition-started"},"Competition Started"),(0,o.kt)("p",null,"This notification is sent when a group competition has started."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},'To configure this notification, you can use the "Competition Status" notification type in the ',(0,o.kt)("inlineCode",{parentName:"p"},"/config notifications")," command.")),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Competition Started Notification",src:i(6986).Z,width:"433",height:"268"})),(0,o.kt)("br",null),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"competition-ending"},"Competition Ending"),(0,o.kt)("p",null,"This notification is sent when a group competition is ending soon. The time periods aren't configurable at the moment, this notification is sent multiple times before the competition ends."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"12 hours"),(0,o.kt)("li",{parentName:"ul"},"30 Minutes")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},'To configure this notification, you can use the "Competition Status" notification type in the ',(0,o.kt)("inlineCode",{parentName:"p"},"/config notifications")," command.")),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Competition Ending Notification",src:i(5815).Z,width:"522",height:"299"})),(0,o.kt)("br",null),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"competition-ended"},"Competition Ended"),(0,o.kt)("p",null,"This notification is sent when a group competition has ended. It also includes the top participants or teams."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},'To configure this notification, you can use the "Competition Status" notification type in the ',(0,o.kt)("inlineCode",{parentName:"p"},"/config notifications")," command.")),(0,o.kt)("br",null),(0,o.kt)("h4",{id:"example-classic-competition-showing-top-participants"},"Example (Classic competition, showing top participants):"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Competition Ended (Classic) Notification",src:i(9690).Z,width:"417",height:"176"})),(0,o.kt)("br",null),(0,o.kt)("h4",{id:"example-team-competition-showing-top-teans"},"Example (Team competition, showing top teans):"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Competition Ended (Teams) Notification",src:i(2546).Z,width:"424",height:"165"})),(0,o.kt)("br",null),(0,o.kt)("hr",null))}d.isMDXComponent=!0},8869:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/comp:created-2bd15ec44e599443a6b54e16cdef2c69.png"},9690:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/comp:ended:participants-a869b5b3e1f399925b619fd0cd553e80.png"},2546:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/comp:ended:teams-1372bf8218826460d306d88293d26d9d.png"},5815:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/comp:ending-d0d134efc8e08c46bf3295afff28999f.png"},6986:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/comp:started-ed44f62b8bab06689a7247c8ee6b1114.png"},1326:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/comp:starting-c15e76f4f630abcecb52964f1980004b.png"}}]);