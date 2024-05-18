"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9211],{4361:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var t=n(5893),a=n(1151);const l={tags:["glpi","gpo","agent-glpi"]},r="D\xe9ploiement de l'Agent GLPI via une GPO",s={id:"Services/glpi/glpigpo",title:"D\xe9ploiement de l'Agent GLPI via une GPO",description:"Introduction & Pr\xe9requis",source:"@site/docs/Services/glpi/glpigpo.md",sourceDirName:"Services/glpi",slug:"/Services/glpi/glpigpo",permalink:"/Portfolio/docs/Services/glpi/glpigpo",draft:!1,unlisted:!1,tags:[{label:"glpi",permalink:"/Portfolio/docs/tags/glpi"},{label:"gpo",permalink:"/Portfolio/docs/tags/gpo"},{label:"agent-glpi",permalink:"/Portfolio/docs/tags/agent-glpi"}],version:"current",frontMatter:{tags:["glpi","gpo","agent-glpi"]},sidebar:"docs",previous:{title:"Installation GLPI sur CT PVE",permalink:"/Portfolio/docs/Services/glpi/"},next:{title:"Liaison AD (LDAP) dans GLPI",permalink:"/Portfolio/docs/Services/glpi/adldapglpi"}},d={},o=[{value:"Introduction &amp; Pr\xe9requis",id:"introduction--pr\xe9requis",level:2},{value:"Pr\xe9requis",id:"pr\xe9requis",level:3},{value:"D\xe9ploiement de l&#39;Agent GLPI via une GPO",id:"d\xe9ploiement-de-lagent-glpi-via-une-gpo-1",level:2},{value:"T\xe9l\xe9chargement du Fichier d&#39;Installation",id:"t\xe9l\xe9chargement-du-fichier-dinstallation",level:3},{value:"Placement du Fichier MSI:",id:"placement-du-fichier-msi",level:3},{value:"Activation de l&#39;Inventaire dans GLPI",id:"activation-de-linventaire-dans-glpi",level:3},{value:"Cr\xe9ation de la GPO &quot;AgentGLPI&quot;",id:"cr\xe9ation-de-la-gpo-agentglpi",level:3},{value:"Modification de la GPO",id:"modification-de-la-gpo",level:3},{value:"Ajout du Package MSI",id:"ajout-du-package-msi",level:3},{value:"Configuration des Param\xe8tres du Registre",id:"configuration-des-param\xe8tres-du-registre",level:3},{value:"Ajout d&#39;un Autre Param\xe8tre de Registre",id:"ajout-dun-autre-param\xe8tre-de-registre",level:3},{value:"Application de la GPO",id:"application-de-la-gpo",level:3},{value:"Red\xe9marrage du Poste Client",id:"red\xe9marrage-du-poste-client",level:3},{value:"V\xe9rification de l&#39;Installation de GLPI Agent",id:"v\xe9rification-de-linstallation-de-glpi-agent",level:3},{value:"Forcer l&#39;Envoi de l&#39;Inventaire",id:"forcer-lenvoi-de-linventaire",level:3},{value:"V\xe9rification dans l&#39;Interface d&#39;Administration de GLPI",id:"v\xe9rification-dans-linterface-dadministration-de-glpi",level:3},{value:"R\xe9sultat",id:"r\xe9sultat",level:2}];function c(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"d\xe9ploiement-de-lagent-glpi-via-une-gpo",children:"D\xe9ploiement de l'Agent GLPI via une GPO"}),"\n",(0,t.jsx)(i.h2,{id:"introduction--pr\xe9requis",children:"Introduction & Pr\xe9requis"}),"\n",(0,t.jsx)(i.p,{children:"Ce guide vous aidera \xe0 d\xe9ployer l'Agent GLPI sur les postes clients de votre r\xe9seau \xe0 l'aide d'une GPO (Strat\xe9gie de Groupe). L'Agent GLPI permet de collecter des informations sur les postes clients et de les remonter \xe0 votre serveur GLPI pour un inventaire complet et pr\xe9cis."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"AgentGLPI",src:n(2006).Z+"",width:"512",height:"512"})}),"\n",(0,t.jsx)(i.h3,{id:"pr\xe9requis",children:"Pr\xe9requis"}),"\n",(0,t.jsx)(i.p,{children:"Avant de commencer, assurez-vous d'avoir :"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"T\xe9l\xe9charg\xe9 le fichier d'installation de l'Agent GLPI compatible avec la version de GLPI install\xe9e."}),"\n",(0,t.jsx)(i.li,{children:"Mis en place un partage r\xe9seau accessible aux ordinateurs du r\xe9seau pour h\xe9berger le fichier d'installation."}),"\n",(0,t.jsx)(i.li,{children:"Activ\xe9 la fonction d'inventaire dans GLPI pour recevoir les donn\xe9es des postes clients."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"d\xe9ploiement-de-lagent-glpi-via-une-gpo-1",children:"D\xe9ploiement de l'Agent GLPI via une GPO"}),"\n",(0,t.jsx)(i.h3,{id:"t\xe9l\xe9chargement-du-fichier-dinstallation",children:"T\xe9l\xe9chargement du Fichier d'Installation"}),"\n",(0,t.jsx)(i.p,{children:"T\xe9l\xe9chargez le fichier d'installation de l'Agent GLPI (.msi) compatible avec votre version de GLPI."}),"\n",(0,t.jsx)(i.h3,{id:"placement-du-fichier-msi",children:"Placement du Fichier MSI:"}),"\n",(0,t.jsx)(i.p,{children:"Placez le fichier MSI dans un partage r\xe9seau accessible aux ordinateurs du r\xe9seau."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"ImageGPOGLPI1",src:n(5414).Z+"",width:"912",height:"165"})}),"\n",(0,t.jsx)(i.h3,{id:"activation-de-linventaire-dans-glpi",children:"Activation de l'Inventaire dans GLPI"}),"\n",(0,t.jsx)(i.p,{children:"Assurez-vous d'avoir activ\xe9 la fonction d'inventaire dans GLPI pour recevoir les donn\xe9es des postes clients."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"ImageGPOGLPI2",src:n(3994).Z+"",width:"1714",height:"764"})}),"\n",(0,t.jsx)(i.h3,{id:"cr\xe9ation-de-la-gpo-agentglpi",children:'Cr\xe9ation de la GPO "AgentGLPI"'}),"\n",(0,t.jsx)(i.p,{children:'Dans le dossier des GPO, cr\xe9ez une nouvelle GPO nomm\xe9e "AgentGLPI".'}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"ImageGPOGLPI3",src:n(7614).Z+"",width:"548",height:"270"})}),"\n",(0,t.jsx)(i.h3,{id:"modification-de-la-gpo",children:"Modification de la GPO"}),"\n",(0,t.jsx)(i.p,{children:'Modifiez la GPO en acc\xe9dant \xe0 "Configuration ordinateur > Strat\xe9gies > Param\xe8tres du logiciel > Installation de logiciel".'}),"\n",(0,t.jsx)(i.h3,{id:"ajout-du-package-msi",children:"Ajout du Package MSI"}),"\n",(0,t.jsx)(i.p,{children:'S\xe9lectionnez "Nouveau Package" et choisissez l\'emplacement r\xe9seau du fichier MSI de l\'Agent GLPI.\r\nS\xe9lectionnez "Attribu\xe9" pour le mode d\'installation.'}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{alt:"ImageGPOGLPI4",src:n(9168).Z+"",width:"950",height:"580"}),"\r\n",(0,t.jsx)(i.img,{alt:"ImageGPOGLPI5",src:n(9248).Z+"",width:"463",height:"326"}),"\r\n",(0,t.jsx)(i.img,{alt:"ImageGPOGLPI6",src:n(5630).Z+"",width:"1118",height:"397"})]}),"\n",(0,t.jsx)(i.h3,{id:"configuration-des-param\xe8tres-du-registre",children:"Configuration des Param\xe8tres du Registre"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:'Acc\xe9dez \xe0 "Configuration ordinateur > Pr\xe9f\xe9rences > Param\xe8tres Windows > Registre".\r\nAjoutez un nouvel \xe9l\xe9ment de registre avec les informations suivantes :\r\nAction : Mettre \xe0 jour.\r\nRuche : HKEY_LOCAL_MACHINE.\r\nChemin d\'acc\xe8s de la cl\xe9 : SOFTWARE\\GLPI-Agent.\r\nNom de valeur : server.\r\nType de valeur : REG_SZ.\r\nDonn\xe9es de valeur : http://glpi.company.infra/front/inventory.php.\n'})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"ImageGPOGLPI7",src:n(8002).Z+"",width:"538",height:"616"})}),"\n",(0,t.jsx)(i.h3,{id:"ajout-dun-autre-param\xe8tre-de-registre",children:"Ajout d'un Autre Param\xe8tre de Registre"}),"\n",(0,t.jsx)(i.p,{children:"Ajoutez un autre \xe9l\xe9ment de registre avec les informations suivantes :"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"Action : Mettre \xe0 jour\r\nRuche : HKEY_LOCAL_MACHINE\r\nChemin d'acc\xe8s de la cl\xe9 : SOFTWARE\\GLPI-Agent\r\nNom de valeur : tag\r\nType de valeur : REG_SZ\r\nDonn\xe9es de valeur : Company\n"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"ImageGPOGLPI8",src:n(2380).Z+"",width:"1426",height:"176"})}),"\n",(0,t.jsx)(i.h3,{id:"application-de-la-gpo",children:"Application de la GPO"}),"\n",(0,t.jsx)(i.p,{children:"Appliquez la GPO \xe0 l'Unit\xe9 d'Organisation (OU) \"Ordinateurs\" puis activez-la.\r\nMise \xe0 Jour de la GPO sur les Postes Clients:"}),"\n",(0,t.jsx)(i.p,{children:"Sur le poste client, ex\xe9cutez la commande gpupdate /force pour forcer la mise \xe0 jour de la GPO."}),"\n",(0,t.jsx)(i.h3,{id:"red\xe9marrage-du-poste-client",children:"Red\xe9marrage du Poste Client"}),"\n",(0,t.jsx)(i.p,{children:"Red\xe9marrez le poste client pour appliquer les changements."}),"\n",(0,t.jsx)(i.h3,{id:"v\xe9rification-de-linstallation-de-glpi-agent",children:"V\xe9rification de l'Installation de GLPI Agent"}),"\n",(0,t.jsx)(i.p,{children:"Sur le poste client, v\xe9rifiez dans les applications si GLPI Agent est install\xe9."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"ImageGPOGLPI9",src:n(7881).Z+"",width:"1124",height:"891"})}),"\n",(0,t.jsx)(i.h3,{id:"forcer-lenvoi-de-linventaire",children:"Forcer l'Envoi de l'Inventaire"}),"\n",(0,t.jsxs)(i.p,{children:["Acc\xe9dez au navigateur sur le poste client et utilisez l'adresse ",(0,t.jsx)(i.a,{href:"http://127.0.0.1:62354",children:"http://127.0.0.1:62354"})," pour forcer l'envoi de l'inventaire."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"ImageGPOGLPI10",src:n(447).Z+"",width:"1390",height:"686"})}),"\n",(0,t.jsx)(i.h3,{id:"v\xe9rification-dans-linterface-dadministration-de-glpi",children:"V\xe9rification dans l'Interface d'Administration de GLPI"}),"\n",(0,t.jsx)(i.p,{children:"V\xe9rifiez sur l'interface d'administration de GLPI dans la section \"Inventaire\" si le poste client appara\xeet en cliquant sur l'ic\xf4ne Robot."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"ImageGPOGLPI11",src:n(1404).Z+"",width:"1389",height:"427"})}),"\n",(0,t.jsx)(i.h2,{id:"r\xe9sultat",children:"R\xe9sultat"}),"\n",(0,t.jsx)(i.admonition,{title:"Bien Jou\xe9 ! \u2714\ufe0f",type:"tip",children:(0,t.jsx)(i.p,{children:"En suivant ces \xe9tapes, vous aurez d\xe9ploy\xe9 avec succ\xe8s l'Agent GLPI sur vos postes clients via une GPO. \ud83d\udda5\ufe0f\ud83d\udee0\ufe0f"})}),"\n",(0,t.jsx)(i.admonition,{title:"Liens \ud83d\udd17",type:"info",children:(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://www.it-connect.fr/tuto-installer-configurer-gpo-agent-glpi-windows/",children:"https://www.it-connect.fr/tuto-installer-configurer-gpo-agent-glpi-windows/"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://www.it-connect.fr/tuto-installer-configurer-gpo-agent-glpi-windows/",children:"https://www.it-connect.fr/tuto-installer-configurer-gpo-agent-glpi-windows/"})}),"\n"]})})]})}function p(e={}){const{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},2006:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/agent-a59c04bfe7e45631108a263ffd2fdab1.png"},5414:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/gpoglpi01-d572b070d1a2021bb4e6a6087e6c4604.png"},3994:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/gpoglpi02-9b5a9011623817311d1c24a6ec05e736.png"},7614:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/gpoglpi03-6e875374d026850ff1a9ca55197c1da8.png"},9168:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/gpoglpi04-cb48905fa21e53bfd6a259e0d65ba725.png"},9248:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/gpoglpi05-91f3db6d1546e7c94676f6fb6f8285c1.png"},5630:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/gpoglpi06-e0cdd201f8dc66feb528badde880597d.png"},8002:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/gpoglpi07-95bb4339230f6351899889df0aceda9a.png"},2380:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/gpoglpi08-630f4658e38cd298925b23c916e81078.png"},7881:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/gpoglpi09-a0d4935f98cdf316417a5e54e453de77.png"},447:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/gpoglpi10-5d23d1cbcdd69eac9139136d23c74990.png"},1404:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/gpoglpi11-71b397a523815c4ce5b435d73295101e.png"},1151:(e,i,n)=>{n.d(i,{Z:()=>s,a:()=>r});var t=n(7294);const a={},l=t.createContext(a);function r(e){const i=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(l.Provider,{value:i},e.children)}}}]);