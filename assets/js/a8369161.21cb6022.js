"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2146],{9240:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var s=i(5893),r=i(1151);const t={tags:["DHCP","Windows Server 2022"]},o="DHCP sur Windows Server 2022",d={id:"Services/windowsserv/dhcpwinsrv",title:"DHCP sur Windows Server 2022",description:"Introducion & Pr\xe9requis",source:"@site/docs/Services/windowsserv/dhcpwinsrv.md",sourceDirName:"Services/windowsserv",slug:"/Services/windowsserv/dhcpwinsrv",permalink:"/Portfolio/docs/Services/windowsserv/dhcpwinsrv",draft:!1,unlisted:!1,tags:[{label:"DHCP",permalink:"/Portfolio/docs/tags/dhcp"},{label:"Windows Server 2022",permalink:"/Portfolio/docs/tags/windows-server-2022"}],version:"current",frontMatter:{tags:["DHCP","Windows Server 2022"]},sidebar:"docs",previous:{title:"Active Directory Windows Server 2022",permalink:"/Portfolio/docs/Services/windowsserv/adwindows"},next:{title:"Joindre une machine Windows \xe0 un Domaine",permalink:"/Portfolio/docs/Services/windowsserv/joindomain"}},l={},a=[{value:"Introducion &amp; Pr\xe9requis",id:"introducion--pr\xe9requis",level:2},{value:"Pr\xe9requis",id:"pr\xe9requis",level:3},{value:"Installation de la fonctionnalit\xe9e DHCP",id:"installation-de-la-fonctionnalit\xe9e-dhcp",level:2},{value:"Configuration du DHCP",id:"configuration-du-dhcp",level:2},{value:"Cr\xe9ation d&#39;une nouvelle \xe9tendue",id:"cr\xe9ation-dune-nouvelle-\xe9tendue",level:3},{value:"Les Options DNS &amp; WINS",id:"les-options-dns--wins",level:3},{value:"DNS",id:"dns",level:4},{value:"WINS",id:"wins",level:4},{value:"Activer l&#39;\xe9tendue",id:"activer-l\xe9tendue",level:3},{value:"R\xe9sultat",id:"r\xe9sultat",level:2},{value:"Phase de Test",id:"phase-de-test",level:3},{value:"Conclusion",id:"conclusion",level:3}];function c(e){const n={a:"a",admonition:"admonition",br:"br",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"dhcp-sur-windows-server-2022",children:"DHCP sur Windows Server 2022"}),"\n",(0,s.jsx)(n.h2,{id:"introducion--pr\xe9requis",children:"Introducion & Pr\xe9requis"}),"\n",(0,s.jsx)(n.p,{children:"Bienvenue dans ce guide pratique qui vous aidera \xe0 mettre en place un serveur DHCP (Dynamic Host Configuration Protocol) sur votre r\xe9seau. Suivez ces \xe9tapes simples pour garantir une distribution dynamique et efficace des adresses IP \xe0 vos clients.\nSuivez attentivement les instructions ci-dessous pour \xe9tablir un serveur DHCP op\xe9rationnel et assurez-vous de profiter pleinement des avantages d'une allocation dynamique des adresses IP. \ud83c\udf10\ud83d\ude80"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"DHCPshow",src:i(1389).Z+"",width:"500",height:"500"})}),"\n",(0,s.jsx)(n.admonition,{title:"C'est quoi le DHCP ?",type:"info",children:(0,s.jsx)(n.p,{children:"La fonction Dynamic Host Configuration Protocol (DHCP) est un protocole client/serveur qui fournit automatiquement une adresse Internet Protocol (IP) et d'autres informations de configuration pertinentes \xe0 un h\xf4te IP (par exemple, masque de sous-r\xe9seau et passerelle par d\xe9faut)."})}),"\n",(0,s.jsx)(n.admonition,{title:"Liens  \ud83d\udd17",type:"note",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/fr-fr/windows-server/networking/technologies/dhcp/dhcp-top",children:"https://learn.microsoft.com/fr-fr/windows-server/networking/technologies/dhcp/dhcp-top"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.it-connect.fr/chapitres/dhcp-presentation-et-definitions/",children:"https://www.it-connect.fr/chapitres/dhcp-presentation-et-definitions/"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://fr.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol",children:"https://fr.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol"})}),"\n"]})}),"\n",(0,s.jsx)(n.h3,{id:"pr\xe9requis",children:"Pr\xe9requis"}),"\n",(0,s.jsxs)(n.p,{children:["Dasn ce guide nous faisons suite \xe0 ces deux guides pr\xe9c\xe9dent : ",(0,s.jsx)(n.a,{href:"vmwindows",children:"Cr\xe9ation d'une Machine Virtuelle Windows Server 2022 (ProxmoxVE)"})," & ",(0,s.jsx)(n.a,{href:"adwindows",children:"Active Directory Windows Server 2022"}),".",(0,s.jsx)(n.br,{}),"\n","Pour configurer votre serveur DHCP sur Windows Server 2022 vous aurez donc besoin d'un domaine d\xe9j\xe0 configur\xe9 et d'une machine Windows 10/11 pour tester le DHCP."]}),"\n",(0,s.jsx)(n.h2,{id:"installation-de-la-fonctionnalit\xe9e-dhcp",children:"Installation de la fonctionnalit\xe9e DHCP"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Ouvrez le "Gestionnaire de Serveur".'}),"\n",(0,s.jsx)(n.li,{children:'S\xe9lectionnez "Ajouter des R\xf4les et Fonctionnalit\xe9s".'}),"\n",(0,s.jsx)(n.li,{children:'Dans "R\xf4le de Serveur" s\xe9lectionnez "DHCP".'}),"\n",(0,s.jsx)(n.li,{children:"Suivez l'assistant pour terminer l'installation."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"ImageDHCP1",src:i(7277).Z+"",width:"1920",height:"1080"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"ImageDHCP2",src:i(7407).Z+"",width:"1920",height:"1080"})}),"\n",(0,s.jsx)(n.h2,{id:"configuration-du-dhcp",children:"Configuration du DHCP"}),"\n",(0,s.jsxs)(n.p,{children:["Apr\xe8s l'installation ne fermez pas la fen\xeatre et cliquez sur Terminer la configuration DHCP.\nOn va devoir autoriser notre serveur DHCP sur notre domaine pour cela gardez la premi\xe8re Option qui est configur\xe9e avec le compte Adminsitrateur du domaine et faites valider.",(0,s.jsx)(n.br,{}),"\n",'L\xe0 apr\xe8s un tr\xe8s court chargement dans la fen\xeatre "R\xe9sum\xe9" vous verrez deux \xe9tapes  qui sont en mode termin\xe9s .']}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"ImageDHCP3",src:i(3565).Z+"",width:"1920",height:"1080"})}),"\n",(0,s.jsx)(n.h3,{id:"cr\xe9ation-dune-nouvelle-\xe9tendue",children:"Cr\xe9ation d'une nouvelle \xe9tendue"}),"\n",(0,s.jsx)(n.p,{children:"En cr\xe9ant une nouvelle \xe9tendue, donnez-lui un nom significatif et d\xe9crivez son objectif. D\xe9finissez la plage d'adresses \xe0 distribuer et ajustez la dur\xe9e du bail"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Suivez l'assistant de cr\xe9ation de nouvelle \xe9tendue."}),"\n",(0,s.jsx)(n.li,{children:"Entrez un nom et une description pour l'\xe9tendue."}),"\n",(0,s.jsx)(n.li,{children:"D\xe9finissez la plage DHCP (par exemple, de 192.168.50.10 \xe0 192.168.50.20)."}),"\n",(0,s.jsx)(n.li,{children:"Aucune exclusion n\xe9cessaire."}),"\n",(0,s.jsx)(n.li,{children:"D\xe9finissez la dur\xe9e du bail \xe0 4 heures."}),"\n",(0,s.jsx)(n.li,{children:"Mettre une Passerelle par d\xe9faut (par exemple 192.168.50.254)"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"ImageDHCP4",src:i(722).Z+"",width:"1920",height:"1080"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"ImageDHCP5",src:i(7033).Z+"",width:"1920",height:"1080"})}),"\n",(0,s.jsx)(n.h3,{id:"les-options-dns--wins",children:"Les Options DNS & WINS"}),"\n",(0,s.jsx)(n.h4,{id:"dns",children:"DNS"}),"\n",(0,s.jsxs)(n.p,{children:["On laisse que qui est configur\xe9 par d\xe9faut tout en v\xe9rifiant que ce sont biens les infos que l'on veut transmettre au client de notre DHCP\n",(0,s.jsx)(n.img,{alt:"ImageDHCP6",src:i(1605).Z+"",width:"1920",height:"1080"})]}),"\n",(0,s.jsx)(n.h4,{id:"wins",children:"WINS"}),"\n",(0,s.jsxs)(n.p,{children:["On ne touche pas \xe0 cette options ce n'est pas n\xe9c\xe9ssaire pour un fonctionnement simple que nous mettons en place dans ce guide.\n",(0,s.jsx)(n.img,{alt:"ImageDHCP6",src:i(1605).Z+"",width:"1920",height:"1080"})]}),"\n",(0,s.jsx)(n.h3,{id:"activer-l\xe9tendue",children:"Activer l'\xe9tendue"}),"\n",(0,s.jsxs)(n.p,{children:["Pour activer votre \xe9tendue rien de plus simple que de suivre l'assistant qui \xe0  la fin vous proposera d'activer l'\xe9tendue\n",(0,s.jsx)(n.img,{alt:"ImageDHCP6",src:i(1605).Z+"",width:"1920",height:"1080"})]}),"\n",(0,s.jsx)(n.h2,{id:"r\xe9sultat",children:"R\xe9sultat"}),"\n",(0,s.jsx)(n.h3,{id:"phase-de-test",children:"Phase de Test"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Sur une machine cliente Windows, ouvrez une invite de commande."}),"\n",(0,s.jsx)(n.li,{children:"Tapez ipconfig /all pour afficher la configuration actuelle."}),"\n",(0,s.jsx)(n.li,{children:"Tapez ensuite ipconfig /renew pour renouveler l'adresse IP."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"ImageDHCP7",src:i(3105).Z+"",width:"1218",height:"639"})}),"\n",(0,s.jsx)(n.h3,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(n.admonition,{title:"Bien Jou\xe9 ! \u2714\ufe0f",type:"tip",children:(0,s.jsx)(n.p,{children:"F\xe9licitations ! Vous avez maintenant un serveur DHCP op\xe9rationnel sur votre r\xe9seau. Les clients qui rejoignent votre r\xe9seau recevront automatiquement des adresses IP conformes \xe0 la configuration que vous avez d\xe9finie. N'h\xe9sitez pas \xe0 ajuster les param\xe8tres selon les besoins sp\xe9cifiques de votre environnement. \ud83d\ude80"})}),"\n",(0,s.jsx)(n.admonition,{title:"Liens \ud83d\udd17",type:"info",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/fr-fr/windows-server/networking/technologies/dhcp/quickstart-install-configure-dhcp-server?tabs=powershell",children:"https://learn.microsoft.com/fr-fr/windows-server/networking/technologies/dhcp/quickstart-install-configure-dhcp-server?tabs=powershell"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.it-connect.fr/installer-et-configurer-un-serveur-dhcp-sous-windows-server-2019/",children:"https://www.it-connect.fr/installer-et-configurer-un-serveur-dhcp-sous-windows-server-2019/"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.lemagit.fr/conseil/Reseau-comment-configurer-un-serveur-DHCP-sur-Windows",children:"https://www.lemagit.fr/conseil/Reseau-comment-configurer-un-serveur-DHCP-sur-Windows"})}),"\n"]})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1389:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/dhcpshow-2d4feed29012c4ef3de6241db8b46ce3.png"},7277:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/dhcpwinsrv1-b47336d29cde71ce80c65e2b7aeefc0b.png"},7407:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/dhcpwinsrv2-3fbb5c5ffa4c6183214c9d2a2ff6d658.png"},3565:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/dhcpwinsrv3-0aaff497659b2839e2c81022aa28dba3.png"},722:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/dhcpwinsrv4-3545a43c5b104394fd7149cd22285299.png"},7033:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/dhcpwinsrv5-e4ab9df72d8f15a9fb0df9e030e586b3.png"},1605:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/dhcpwinsrv6-5acebad18e0b94e0fbbe9dcec27e6b2e.png"},3105:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/dhcpwinsrv7-9ae147ecf2be69b1d6c7206cd91973fe.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>o});var s=i(7294);const r={},t=s.createContext(r);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);