"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3482],{1156:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var i=n(5893),r=n(1151);const t={},a="Sauvegarde des VM sur PVE avec Proxmox Backup Server (PBS)",c={id:"Services/pbs01",title:"Sauvegarde des VM sur PVE avec Proxmox Backup Server (PBS)",description:"Introduction & Pr\xe9requis",source:"@site/docs/Services/pbs01.md",sourceDirName:"Services",slug:"/Services/pbs01",permalink:"/docs/Services/pbs01",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Veille Technologique & Cyber S\xe9curit\xe9 avec FreshRSS",permalink:"/docs/Services/freshrss"},next:{title:"Installation GLPI sur CT PVE",permalink:"/docs/Services/glpi/"}},l={},o=[{value:"Introduction &amp; Pr\xe9requis",id:"introduction--pr\xe9requis",level:2},{value:"Pr\xe9requis",id:"pr\xe9requis",level:3},{value:"Installation de PBS",id:"installation-de-pbs",level:2},{value:"Interface Web de PBS",id:"interface-web-de-pbs",level:2},{value:"Cr\xe9ation du Datastore",id:"cr\xe9ation-du-datastore",level:3},{value:"Connexion PBS vers PVE",id:"connexion-pbs-vers-pve",level:3},{value:"Configurer les T\xe2ches de Sauvegardes",id:"configurer-les-t\xe2ches-de-sauvegardes",level:3},{value:"Prune Job",id:"prune-job",level:4},{value:"Backup Job",id:"backup-job",level:4},{value:"R\xe9sultat",id:"r\xe9sultat",level:2}];function d(e){const s={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"sauvegarde-des-vm-sur-pve-avec-proxmox-backup-server-pbs",children:"Sauvegarde des VM sur PVE avec Proxmox Backup Server (PBS)"}),"\n",(0,i.jsx)(s.h2,{id:"introduction--pr\xe9requis",children:"Introduction & Pr\xe9requis"}),"\n",(0,i.jsx)(s.p,{children:"Avec la num\xe9risation grandissante du monde qui nous entoure et la multiplication des catastrophes naturelles mais aussi des cyberattaques il est d\xe9sormais primordiale pour une entreprise de poss\xe9der des sauvegardes de son activit\xe9s. Pour cela il faut mettre en place un syst\xe8me de sauvegarde efficace sans erreur et r\xe9gulier. Il faut aussi tenter le plus sovent possible de retaurer ses Backups."}),"\n",(0,i.jsx)(s.p,{children:"Travaillant presque exclusivement avec la solution Proxmox Virtual Envrionnement pour d\xe9ployer des machines virtuelles. J'ai d\xe9sormais besoin de sauvegarder ces VM's pour pouvoir les restaurer rapidement \xe0 l'\xe9tat dans lesquels je les avais pr\xe9cedemment perdu."}),"\n",(0,i.jsx)(s.p,{children:"Pour cela j'utilise Proxmox Backup Server qui est la solution faite pour Proxmox Virtual Environnement."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Iluustratio",src:n(9192).Z+"",width:"1920",height:"1080"})}),"\n",(0,i.jsx)(s.h3,{id:"pr\xe9requis",children:"Pr\xe9requis"}),"\n",(0,i.jsx)(s.p,{children:"Dans ce guide je vais utiliser :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"1 PVE avec dessus une VM \xe0 sauvegarder"}),"\n",(0,i.jsx)(s.li,{children:"1 PBS sur le m\xeame r\xe9seau que mon PVE"}),"\n",(0,i.jsx)(s.li,{children:"3 Disks virtuelles sur le PBS avec 1 de 8GO pour l'OS et deux autres de 20GO chacun pour cr\xe9er un miroir et sauvegarder dessus."}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"installation-de-pbs",children:"Installation de PBS"}),"\n",(0,i.jsx)(s.p,{children:"Alors commen\xe7ons par installer la solution Proxmxox Backup Server. J'ai donc cr\xe9er une Machine Virtuelle. Dans l'id\xe9al \xe9videmment utiliser un environnemment diff\xe9rent de celui de production. L\xe0 pour le test j'installerais \xe7a sur une VM Proxmox.\r\nOn configure donc la VM d'une fa\xe7on particuli\xe8re pour les Disks."}),"\n",(0,i.jsx)(s.p,{children:"Voici \xe0 quoi \xe7a ressemble :"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"pbs1",src:n(2496).Z+"",width:"660",height:"77"})}),"\n",(0,i.jsx)(s.p,{children:"Quand la machine est pr\xeate vous pouvez alors la lancez et d\xe9buter l'installation de Proxmox Backup Server."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["S\xe9l\xe9ctionnez l'option ",(0,i.jsx)(s.strong,{children:"Installation Graphique"})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"pbs2",src:n(9709).Z+"",width:"1187",height:"503"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Acceptez le contrat de license"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"pbs3",src:n(5727).Z+"",width:"1308",height:"889"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"S\xe9l\xe9ctionnez le disque de 8 GO comme sible au format ext4 pour installer le syst\xe8me"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"pbs4",src:n(6797).Z+"",width:"1294",height:"863"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Renseignez le mot de passe Root et un email"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"pbs1",src:n(7424).Z+"",width:"1292",height:"876"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"v\xe9rifier les informations renseign\xe9s et confirmez les"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"pbs1",src:n(5325).Z+"",width:"1286",height:"882"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"L'installation se lance et se termine"}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"pbs1",src:n(6496).Z+"",width:"1163",height:"836"}),"\r\n",(0,i.jsx)(s.img,{alt:"pbs1",src:n(5370).Z+"",width:"616",height:"416"})]}),"\n",(0,i.jsx)(s.h2,{id:"interface-web-de-pbs",children:"Interface Web de PBS"}),"\n",(0,i.jsx)(s.p,{children:"Pour configurer Proxmox Backup Server on utilise comme PVE son interface Web. Pour avoir acc\xe8s \xe0 cette interface vous devez vous rendre \xe0 l'IP de votre PBS et utiliser le Port 8007"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"pbs9",src:n(2678).Z+"",width:"1105",height:"587"})}),"\n",(0,i.jsxs)(s.p,{children:["Utiliser les identifiants ",(0,i.jsx)(s.em,{children:"root"})," avec le mot de passe que vous avez renseign\xe9."]}),"\n",(0,i.jsx)(s.p,{children:"Voici l'interface Web apr\xe8s vous \xeatre connecter."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"pbs10",src:n(5481).Z+"",width:"1219",height:"763"})}),"\n",(0,i.jsx)(s.h3,{id:"cr\xe9ation-du-datastore",children:"Cr\xe9ation du Datastore"}),"\n",(0,i.jsx)(s.p,{children:"Pour cr\xe9er notre Datastore on se rend dans la cat\xe9gorie Administration > Storage/Disks > ZFS"}),"\n",(0,i.jsx)(s.p,{children:"Cliquez sur Create ZFS."}),"\n",(0,i.jsx)(s.p,{children:"Effectuez la m\xeame config."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"pbs11",src:n(2956).Z+"",width:"1001",height:"546"})}),"\n",(0,i.jsx)(s.h3,{id:"connexion-pbs-vers-pve",children:"Connexion PBS vers PVE"}),"\n",(0,i.jsxs)(s.p,{children:["Dans cette \xe9tape nous allons connecter notre syst\xe8me de sauvegarde PBS \xe0 notre Hyperviseur PVE.\r\nPour cela il va falloir r\xe9cup\xe9rer le fingerprint du PBS afin de le raneseigner dans un endroit bien sp\xe9cifique sur PVE.\r\nSur la section Dashboard cliquez sur ",(0,i.jsx)(s.em,{children:"Show Fingerprint"})," et copiez le."]}),"\n",(0,i.jsx)(s.p,{children:"Ensuite sur PVE dans Datacenter > Storage > Add Proxmox Backup Server"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"pbs11",src:n(6124).Z+"",width:"1017",height:"551"})}),"\n",(0,i.jsx)(s.p,{children:"Remplissez avec vos infos et d\xe9poser votre Fingerprint"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"pbs11",src:n(7990).Z+"",width:"734",height:"413"})}),"\n",(0,i.jsx)(s.p,{children:"Pour la Backup Retention cela se g\xe8re dans PBS directement, ici laisser l'option Keep All Backups activer"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"pbs11",src:n(2338).Z+"",width:"766",height:"436"})}),"\n",(0,i.jsx)(s.h3,{id:"configurer-les-t\xe2ches-de-sauvegardes",children:"Configurer les T\xe2ches de Sauvegardes"}),"\n",(0,i.jsx)(s.h4,{id:"prune-job",children:"Prune Job"}),"\n",(0,i.jsx)(s.p,{children:"Le Prune Job se configure sur le Datastore concern\xe9 via l'interface Web du PBS. Il sert \xe0 automatiser le nettoyages des sauvegardes sur le Datastore."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"pbs11",src:n(9683).Z+"",width:"715",height:"376"})}),"\n",(0,i.jsx)(s.h4,{id:"backup-job",children:"Backup Job"}),"\n",(0,i.jsx)(s.p,{children:"Le Backup Job se d\xe9finit lui sur le PVE et permet de s\xe9l\xe9ctionner les machines \xe0 sauvegarder automatiquement en s\xe9l\xe9ctionant comme destination le Datastore du PBS."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"pbs11",src:n(7885).Z+"",width:"714",height:"785"})}),"\n",(0,i.jsx)(s.h2,{id:"r\xe9sultat",children:"R\xe9sultat"}),"\n",(0,i.jsx)(s.admonition,{title:"Bien Jou\xe9 ! \u2714\ufe0f",type:"tip",children:(0,i.jsx)(s.p,{children:"F\xe9l\xe9citations vous venez de terminer la mise en place d'une solution de sauvegarde pour vos environnement virtualis\xe9 PVE."})}),"\n",(0,i.jsxs)(s.p,{children:["Pour v\xe9rifiez que vos sauvegardes ont bien \xe9t\xe9 effectu\xe9s rendez vous dans le contenu de votre Datastores\r\n",(0,i.jsx)(s.img,{alt:"pbs11",src:n(6893).Z+"",width:"993",height:"268"})]}),"\n",(0,i.jsx)(s.admonition,{title:"Liens \ud83d\udd17",type:"info",children:(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://pbs.proxmox.com/wiki/index.php/Main_Page",children:"https://pbs.proxmox.com/wiki/index.php/Main_Page"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.youtube.com/watch%3Fv%3D1yXZFfQggTU&ved=2ahUKEwjl4pSj-MaFAxXiVqQEHTUyA0o4FBC3AnoECCAQAg&usg=AOvVaw3YR8Z5FD1-CWV48YZTN_KG",children:"https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.youtube.com/watch%3Fv%3D1yXZFfQggTU&ved=2ahUKEwjl4pSj-MaFAxXiVqQEHTUyA0o4FBC3AnoECCAQAg&usg=AOvVaw3YR8Z5FD1-CWV48YZTN_KG"})}),"\n"]})})]})}function u(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},9192:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/miniapbs01-4ce37b9219c3c35cdfa8e08910ed40a7.png"},2496:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/pbs01-0471010978b6f7da5f4bb1069b92b167.png"},9709:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/pbs02-bbbc202fbb8a6d326896c2114b1b9d0f.png"},5727:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/pbs03-ff566d0901cd0482dbc5c801b10bb35e.png"},6797:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/pbs04-3a6c9e56cd177218f973e5c5f90f3333.png"},7424:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/pbs05-3076124ab2ef27490941efefd7084549.png"},5325:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/pbs06-2478d462b8b65df7344a3cef468f066c.png"},6496:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/pbs07-4135a015e9d549e2b2428ef89864fceb.png"},5370:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/pbs08-07ae1c70d7369ce3b41b2f78ed335762.png"},2678:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/pbs09-a1d55612cf40b297e9dcd10cc9d8852b.png"},5481:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/pbs10-7d8e8ad50815996579b6b58a94047b7e.png"},2956:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/pbs11-fe9d2ed8aa9a13c1593557e1dc5cd33f.png"},6124:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/pbs12-39f11a91b39748919eba66309d05e95f.png"},7990:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/pbs13-abe390e137eac7ef4386e35d51831a55.png"},2338:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/pbs14-f8785146fcf10f787f9b91ec9b1d62fa.png"},9683:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/pbs15-4687f3dbf08dd0923463b66d50363016.png"},7885:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/pbs16-db940ea8215ba401cfefaccf4bacdc16.png"},6893:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/pbs17-579fee5691eff51dc020a9e0068d5762.png"},1151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>a});var i=n(7294);const r={},t=i.createContext(r);function a(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);