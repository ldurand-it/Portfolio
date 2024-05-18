"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5441],{7492:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var n=s(5893),r=s(1151);const t={tags:["linux","kali","cyber","SSH","d\xe9cryptage","Wordlist"]},o="D\xe9cryptage de Passwords",c={id:"Cybersecurity/DecryptagePasswordsJTR",title:"D\xe9cryptage de Passwords",description:"Introduction & Pr\xe9requis",source:"@site/docs/Cybersecurity/DecryptagePasswordsJTR.md",sourceDirName:"Cybersecurity",slug:"/Cybersecurity/DecryptagePasswordsJTR",permalink:"/Portfolio/docs/Cybersecurity/DecryptagePasswordsJTR",draft:!1,unlisted:!1,tags:[{label:"linux",permalink:"/Portfolio/docs/tags/linux"},{label:"kali",permalink:"/Portfolio/docs/tags/kali"},{label:"cyber",permalink:"/Portfolio/docs/tags/cyber"},{label:"SSH",permalink:"/Portfolio/docs/tags/ssh"},{label:"d\xe9cryptage",permalink:"/Portfolio/docs/tags/decryptage"},{label:"Wordlist",permalink:"/Portfolio/docs/tags/wordlist"}],version:"current",frontMatter:{tags:["linux","kali","cyber","SSH","d\xe9cryptage","Wordlist"]},sidebar:"docs",previous:{title:"Documentations",permalink:"/Portfolio/docs/intro"},next:{title:"Installation de PfSense sur VM (PVE)",permalink:"/Portfolio/docs/Networks/Firewall/PfSense/pfsense-install"}},d={},a=[{value:"Introduction &amp; Pr\xe9requis",id:"introduction--pr\xe9requis",level:2},{value:"Connexion SSH",id:"connexion-ssh",level:2},{value:"Affichage des fichiers",id:"affichage-des-fichiers",level:2},{value:"Copie des fichiers localement",id:"copie-des-fichiers-localement",level:2},{value:"Concat\xe9nation des Fichiers",id:"concat\xe9nation-des-fichiers",level:2},{value:"V\xe9rification du fichier cr\xe9e",id:"v\xe9rification-du-fichier-cr\xe9e",level:2},{value:"Utilisation de John The Ripper",id:"utilisation-de-john-the-ripper",level:2},{value:"D\xe9cryptage avec Wordlist",id:"d\xe9cryptage-avec-wordlist",level:2},{value:"R\xe9sultat",id:"r\xe9sultat",level:2}];function l(e){const i={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"d\xe9cryptage-de-passwords",children:"D\xe9cryptage de Passwords"}),"\n",(0,n.jsx)(i.h2,{id:"introduction--pr\xe9requis",children:"Introduction & Pr\xe9requis"}),"\n",(0,n.jsx)(i.p,{children:"Bienvenue dans cette documentation qui vous guidera \xe0 travers le processus de connexion SSH \xe0 une machine distante et la r\xe9cup\xe9ration de mots de passe \xe0 l'aide de John The Ripper."}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsx)(i.p,{children:"Pour ce tutoriel nous aurons besoin d'un syst\xe8me GNU/LINUX orient\xe9 Cybers\xe9curit\xe9e (Kali, ParrotOS ...) avec l'outil John The Ripper d\xe9j\xe0 install\xe9"})}),"\n",(0,n.jsx)(i.h2,{id:"connexion-ssh",children:"Connexion SSH"}),"\n",(0,n.jsx)(i.p,{children:"Pour vous connecter \xe0 la machine distante en utilisant SSH, ex\xe9cutez la commande suivante dans un terminal :"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"ssh etudiant@192.168.56.102\n"})}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsx)(i.p,{children:'Assurez-vous de remplacer "etudiant" par votre nom d\'utilisateur et "192.168.56.102" par l\'adresse IP de votre machine distante.'})}),"\n",(0,n.jsx)(i.h2,{id:"affichage-des-fichiers",children:"Affichage des fichiers"}),"\n",(0,n.jsxs)(i.p,{children:["Une fois connect\xe9, affichez le contenu des fichiers ",(0,n.jsx)(i.em,{children:"/etc/shadow"})," et ",(0,n.jsx)(i.em,{children:"/etc/passwd"})," avec les commandes suivantes :"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"cat /etc/shadow \n"})}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"cat /etc/passwd\n"})}),"\n",(0,n.jsx)(i.h2,{id:"copie-des-fichiers-localement",children:"Copie des fichiers localement"}),"\n",(0,n.jsxs)(i.p,{children:["Sur votre machine Kali, cr\xe9ez deux fichiers dans le r\xe9pertoire ",(0,n.jsx)(i.em,{children:"/Documents"})," et copiez le contenu des fichiers pr\xe9c\xe9demment vus.",(0,n.jsx)(i.br,{}),"\n","Assurez-vous de nommer les fichiers de la m\xeame mani\xe8re et stockez-les dans le r\xe9pertoire ",(0,n.jsx)(i.em,{children:"/Documents"}),". Utilisez les commandes suivantes :"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"cp /etc/passwd Documents/passwd\n"})}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"cp /etc/shadow Documents/shadow\n"})}),"\n",(0,n.jsx)(i.h2,{id:"concat\xe9nation-des-fichiers",children:"Concat\xe9nation des Fichiers"}),"\n",(0,n.jsx)(i.p,{children:"Concat\xe9nez les deux fichiers cr\xe9\xe9s dans le r\xe9pertoire /Documents en utilisant la commande suivante :"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"unshadow Documents/passwd Documents/shadow > Documents/mypasswd\n"})}),"\n",(0,n.jsx)(i.h2,{id:"v\xe9rification-du-fichier-cr\xe9e",children:"V\xe9rification du fichier cr\xe9e"}),"\n",(0,n.jsxs)(i.p,{children:["V\xe9rifiez que le fichier ",(0,n.jsx)(i.em,{children:"mypasswd"})," a \xe9t\xe9 correctement cr\xe9\xe9 en utilisant la commande suivante :"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"cat Documents/mypasswd\n"})}),"\n",(0,n.jsx)(i.h2,{id:"utilisation-de-john-the-ripper",children:"Utilisation de John The Ripper"}),"\n",(0,n.jsxs)(i.p,{children:["Maintenant, nous allons utiliser John The Ripper pour d\xe9crypter les mots de passe.",(0,n.jsx)(i.br,{}),"\n","Ex\xe9cutez la commande suivante :"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"john --show Documents/mypasswd\n"})}),"\n",(0,n.jsx)(i.h2,{id:"d\xe9cryptage-avec-wordlist",children:"D\xe9cryptage avec Wordlist"}),"\n",(0,n.jsxs)(i.p,{children:["Utilisez John The Ripper avec une wordlist pour d\xe9crypter les mots de passe.",(0,n.jsx)(i.br,{}),"\n","Ex\xe9cutez la commande suivante :"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"john --wordlist=/usr/share/john/password.lst --rules Documents/mypasswd --format=crypt\n"})}),"\n",(0,n.jsx)(i.p,{children:"Et voil\xe0 le r\xe9sultat on a d\xe9chiffr\xe9 les passwords"}),"\n",(0,n.jsx)(i.h2,{id:"r\xe9sultat",children:"R\xe9sultat"}),"\n",(0,n.jsxs)(i.admonition,{title:"Bien Jou\xe9 ! \u2714\ufe0f",type:"tip",children:[(0,n.jsx)(i.p,{children:"Voil\xe0 ! Vous avez r\xe9ussi \xe0 d\xe9chiffrer les mots de passe \xe0 l'aide de John The Ripper."}),(0,n.jsx)(i.admonition,{title:"Information \xe0 but \xe9ducative",type:"warning",children:(0,n.jsx)(i.p,{children:"Assurez-vous d'utiliser ces informations de mani\xe8re responsable et \xe9thique."})})]}),"\n",(0,n.jsx)(i.p,{children:"\ud83d\ude80 Bonne exploration et s\xe9curisation de vos syst\xe8mes ! \ud83d\udee1\ufe0f"}),"\n",(0,n.jsx)(i.admonition,{title:"Liens \ud83d\udd17",type:"info",children:(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://fr.wikipedia.org/wiki/John_the_Ripper",children:"https://fr.wikipedia.org/wiki/John_the_Ripper"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://www.kali.org/tools/john/",children:"https://www.kali.org/tools/john/"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://tech2sec.sussudio.ovh/guide-kali-linux-partie1/",children:"https://tech2sec.sussudio.ovh/guide-kali-linux-partie1/"})}),"\n"]})})]})}function h(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,i,s)=>{s.d(i,{Z:()=>c,a:()=>o});var n=s(7294);const r={},t=n.createContext(r);function o(e){const i=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(t.Provider,{value:i},e.children)}}}]);