"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4889],{1750:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>t,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=r(5893),n=r(1151);const a={tags:["Windows Server 2022","Partage R\xe9seau","SMB"]},t="Partage R\xe9seau sur Windows Server 2022",o={id:"Services/windowsserv/networkshare",title:"Partage R\xe9seau sur Windows Server 2022",description:"Introduction & Pr\xe9requis",source:"@site/docs/Services/windowsserv/networkshare.md",sourceDirName:"Services/windowsserv",slug:"/Services/windowsserv/networkshare",permalink:"/Portfolio/docs/Services/windowsserv/networkshare",draft:!1,unlisted:!1,tags:[{label:"Windows Server 2022",permalink:"/Portfolio/docs/tags/windows-server-2022"},{label:"Partage R\xe9seau",permalink:"/Portfolio/docs/tags/partage-reseau"},{label:"SMB",permalink:"/Portfolio/docs/tags/smb"}],version:"current",frontMatter:{tags:["Windows Server 2022","Partage R\xe9seau","SMB"]},sidebar:"docs",previous:{title:"Disques durs en RAID 1 sur Windows Server 2022 (PVE)",permalink:"/Portfolio/docs/Services/windowsserv/raid1winsrv"},next:{title:"Configuration Automatis\xe9e des Partages R\xe9seau et des Dossiers Utilisateurs",permalink:"/Portfolio/docs/Services/windowsserv/networkshareauto"}},c={},d=[{value:"Introduction &amp; Pr\xe9requis",id:"introduction--pr\xe9requis",level:2},{value:"Pr\xe9requis",id:"pr\xe9requis",level:3},{value:"Gestionnaire de serveur",id:"gestionnaire-de-serveur",level:2},{value:"Services de Fichiers &amp; Stockage",id:"services-de-fichiers--stockage",level:2},{value:"Cr\xe9er nouveau Partage",id:"cr\xe9er-nouveau-partage",level:2},{value:"Configuration Rapide de SMB",id:"configuration-rapide-de-smb",level:3},{value:"S\xe9lectionner le Volume",id:"s\xe9lectionner-le-volume",level:3},{value:"Nommer le Partage",id:"nommer-le-partage",level:3},{value:"Autoriser la Mise en Cache du Partage",id:"autoriser-la-mise-en-cache-du-partage",level:3},{value:"Configurer les Autorisations",id:"configurer-les-autorisations",level:3},{value:"Finaliser la Configuration",id:"finaliser-la-configuration",level:3},{value:"R\xe9sultat",id:"r\xe9sultat",level:2}];function l(e){const s={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"partage-r\xe9seau-sur-windows-server-2022",children:"Partage R\xe9seau sur Windows Server 2022"}),"\n",(0,i.jsx)(s.h2,{id:"introduction--pr\xe9requis",children:"Introduction & Pr\xe9requis"}),"\n",(0,i.jsx)(s.p,{children:"La mise en place d'un partage r\xe9seau sous Windows Server 2022 est une \xe9tape cruciale pour permettre le partage et l'acc\xe8s efficace des fichiers au sein d'un r\xe9seau local. Ce guide d\xe9taille les \xe9tapes n\xe9cessaires pour configurer un partage r\xe9seau via le Gestionnaire de Serveur, offrant une solution rapide et s\xe9curis\xe9e pour partager des ressources au sein de votre environnement Windows."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"SHARESHOW",src:r(6623).Z+"",width:"612",height:"348"})}),"\n",(0,i.jsx)(s.h3,{id:"pr\xe9requis",children:"Pr\xe9requis"}),"\n",(0,i.jsx)(s.p,{children:"Avant de commencer le processus de configuration du partage r\xe9seau, assurez-vous d'avoir les \xe9l\xe9ments suivants en place :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/Services/windowsserv/vmwindows",children:"Windows Server 2022 install\xe9 et op\xe9rationnel :"})}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Votre serveur Windows doit \xeatre install\xe9 et fonctionner correctement."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Acc\xe8s au Gestionnaire de Serveur :"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Assurez-vous d'avoir un acc\xe8s administratif au Gestionnaire de Serveur."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Services de Fichiers et de Stockage :"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Les Services de Fichiers et de Stockage doivent \xeatre activ\xe9s sur votre serveur."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Comptes Utilisateurs :"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Pr\xe9parez les comptes d'utilisateurs qui auront acc\xe8s au partage, le cas \xe9ch\xe9ant."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/Services/windowsserv/raid1winsrv",children:"Volumes Disponibles :"})}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Au moins un volume doit \xeatre disponible sur lequel vous souhaitez cr\xe9er le partage."}),"\n",(0,i.jsx)(s.p,{children:"Assurez-vous de disposer de ces \xe9l\xe9ments avant de suivre les \xe9tapes du guide pour garantir une configuration sans accroc de votre partage r\xe9seau. \ud83d\ude80\ud83d\udcc2"}),"\n",(0,i.jsx)(s.h2,{id:"gestionnaire-de-serveur",children:"Gestionnaire de serveur"}),"\n",(0,i.jsx)(s.p,{children:'Dans un premier temps lancer l\'application "Gestionnaire de Serveur" sur votre Serveur.'}),"\n",(0,i.jsx)(s.h2,{id:"services-de-fichiers--stockage",children:"Services de Fichiers & Stockage"}),"\n",(0,i.jsx)(s.p,{children:'Dans le Gestionnaire de Serveur, s\xe9lectionnez "Services de fichiers et de stockage".'}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"SHARE1",src:r(3671).Z+"",width:"1728",height:"1027"})}),"\n",(0,i.jsx)(s.h2,{id:"cr\xe9er-nouveau-partage",children:"Cr\xe9er nouveau Partage"}),"\n",(0,i.jsx)(s.p,{children:'Sous "Partages", effectuez un clic droit, puis choisissez "Nouveau Partage".'}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"SHARE2",src:r(1858).Z+"",width:"1732",height:"1027"})}),"\n",(0,i.jsx)(s.h3,{id:"configuration-rapide-de-smb",children:"Configuration Rapide de SMB"}),"\n",(0,i.jsx)(s.p,{children:'Choisissez "SMB Rapide" pour une configuration rapide.'}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"SHARE3",src:r(3754).Z+"",width:"176",height:"123"})}),"\n",(0,i.jsx)(s.h3,{id:"s\xe9lectionner-le-volume",children:"S\xe9lectionner le Volume"}),"\n",(0,i.jsx)(s.p,{children:"S\xe9lectionnez le volume que vous souhaitez partager."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"SHARE4",src:r(710).Z+"",width:"434",height:"133"})}),"\n",(0,i.jsx)(s.h3,{id:"nommer-le-partage",children:"Nommer le Partage"}),"\n",(0,i.jsx)(s.p,{children:"Nommez votre partage de mani\xe8re descriptive."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"SHARE5",src:r(1618).Z+"",width:"454",height:"216"})}),"\n",(0,i.jsx)(s.h3,{id:"autoriser-la-mise-en-cache-du-partage",children:"Autoriser la Mise en Cache du Partage"}),"\n",(0,i.jsx)(s.p,{children:"Activez l'option pour autoriser la mise en cache du partage."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"SHARE6",src:r(4971).Z+"",width:"447",height:"268"})}),"\n",(0,i.jsx)(s.h3,{id:"configurer-les-autorisations",children:"Configurer les Autorisations"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:'Sous "Autorisations", cliquez sur "Personnaliser", puis d\xe9sactivez l\'h\xe9ritage du compte Admin.'}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Supprimez les objets h\xe9rit\xe9s et ajoutez les comptes d'utilisateurs n\xe9cessaires."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"SHARE7",src:r(4482).Z+"",width:"763",height:"482"})}),"\n",(0,i.jsx)(s.h3,{id:"finaliser-la-configuration",children:"Finaliser la Configuration"}),"\n",(0,i.jsx)(s.p,{children:'Cliquez sur "Suivant", v\xe9rifiez les configurations, puis cliquez sur "Cr\xe9er" pour finaliser le partage.'}),"\n",(0,i.jsx)(s.h2,{id:"r\xe9sultat",children:"R\xe9sultat"}),"\n",(0,i.jsx)(s.admonition,{title:"Bien Jou\xe9 ! \u2714\ufe0f",type:"tip",children:(0,i.jsx)(s.p,{children:"F\xe9licitations ! Vous avez maintenant configur\xe9 avec succ\xe8s un partage r\xe9seau sur votre Windows Server 2022. Assurez-vous de tester l'acc\xe8s au partage depuis d'autres ordinateurs pour garantir son bon fonctionnement. \ud83c\udf10\ud83d\ude80"})}),"\n",(0,i.jsx)(s.admonition,{title:"Liens \ud83d\udd17",type:"info",children:(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://www.it-connect.fr/windows-server-2022-creer-son-premier-partage-de-fichiers-smb/",children:"https://www.it-connect.fr/windows-server-2022-creer-son-premier-partage-de-fichiers-smb/"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://support.microsoft.com/fr-fr/windows/partage-de-fichiers-sur-un-r%C3%A9seau-dans-windows-b58704b2-f53a-4b82-7bc1-80f9994725bf",children:"https://support.microsoft.com/fr-fr/windows/partage-de-fichiers-sur-un-r%C3%A9seau-dans-windows-b58704b2-f53a-4b82-7bc1-80f9994725bf"})}),"\n"]})})]})}function u(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},6623:(e,s,r)=>{r.d(s,{Z:()=>i});const i=r.p+"assets/images/ShareShow-ec9e9330b2adba57aae0a48b8f16402c.png"},3671:(e,s,r)=>{r.d(s,{Z:()=>i});const i=r.p+"assets/images/share1-7055257be85f50607805849117912e0a.png"},1858:(e,s,r)=>{r.d(s,{Z:()=>i});const i=r.p+"assets/images/share2-e05ae3300621744a6f7b804934bfb4b9.png"},3754:(e,s,r)=>{r.d(s,{Z:()=>i});const i=r.p+"assets/images/share3-9fc3e46e24a478dc60a5dda812479786.png"},710:(e,s,r)=>{r.d(s,{Z:()=>i});const i=r.p+"assets/images/share4-82729a15793f9fb7a8ef3111e7a06187.png"},1618:(e,s,r)=>{r.d(s,{Z:()=>i});const i=r.p+"assets/images/share5-77cfeb3e61c6f1fd77f28ac83de7cb17.png"},4971:(e,s,r)=>{r.d(s,{Z:()=>i});const i=r.p+"assets/images/share6-ec53bcfa2a12d9048d1ec30e6b3bce53.png"},4482:(e,s,r)=>{r.d(s,{Z:()=>i});const i=r.p+"assets/images/share7-5ff2ead0f944f7eef43a496209773a20.png"},1151:(e,s,r)=>{r.d(s,{Z:()=>o,a:()=>t});var i=r(7294);const n={},a=i.createContext(n);function t(e){const s=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),i.createElement(a.Provider,{value:s},e.children)}}}]);