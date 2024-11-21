import{_ as i,r as s,o as l,c as d,b as e,e as t,d as o,w as r}from"./app-ef8939bd.js";const c={},h=e("h1",{id:"good-to-know",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#good-to-know","aria-hidden":"true"},"#"),t(" Good to know")],-1),p=e("div",{class:"divider"},null,-1),u=e("p",null,"The provision of Apillon Web3 services comes with certain specifics that are important to understand before using the Apillon dashboard.",-1),f=e("p",null,"Before jumping to the API section, please make sure you fully understand what to expect from each service so you can plan your Web3 application architecture and development accordingly.",-1),_={href:"https://polkadot.network/",target:"_blank",rel:"noopener noreferrer"},g=e("h2",{id:"concepts",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#concepts","aria-hidden":"true"},"#"),t(" Concepts")],-1),m=e("h3",{id:"centralized-vs-decentralized",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#centralized-vs-decentralized","aria-hidden":"true"},"#"),t(" Centralized vs. decentralized")],-1),b=e("p",null,"In the current state, Apillon is a Web3 hybrid platform, meaning that some services are still run by centralized solutions. This sort of compromise is quite common in other Web3 solutions, especially where a choice had to be made between fast development and simple UX vs. full decentralization.",-1),y=e("p",null,"That said, Apillon’s back end is designed to evolve towards fully decentralized service and an unstoppable way of operation with each new update, slowly removing the hybrid compromise and becoming a fully Web3 platform.",-1),w={href:"https://github.com/Apillon",target:"_blank",rel:"noopener noreferrer"},v={href:"https://discord.gg/yX3gTw36C4",target:"_blank",rel:"noopener noreferrer"},k=e("h3",{id:"production-vs-beta",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#production-vs-beta","aria-hidden":"true"},"#"),t(" Production vs. Beta")],-1),A=e("p",null,"Apillon is currently in the Closed Beta stage. Anyone can register an account on Apillon but only assigned users may get access to test the platform’s Beta features.",-1),C=e("p",null,"To join the Apillon Closed Beta program, please follow the following steps.",-1),I={href:"https://app.apillon.io/register",target:"_blank",rel:"noopener noreferrer"},x=e("li",null,"Log in to your account.",-1),z=e("li",null,"At the bottom of the welcome page, find an ID number assigned to your account.",-1),B={href:"https://discord.gg/yX3gTw36C4",target:"_blank",rel:"noopener noreferrer"},T=e("li",null,"Wait for an email with an invitation to join the Apillon Closed Beta program and access the platform’s features.",-1),W=e("p",null,[e("strong",null,"Note"),t(": Apillon Closed Beta delivers no guarantees related to functionalities or access and is intended for testing purposes only. Beta features also come with several limitations, which will be removed with each platform update as more and more users deliver feedback on Closed Beta and help improve the platform’s services.")],-1),P=e("h2",{id:"terminology-and-underlying-technology",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#terminology-and-underlying-technology","aria-hidden":"true"},"#"),t(" Terminology and underlying technology")],-1),N=e("h3",{id:"ipfs",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ipfs","aria-hidden":"true"},"#"),t(" IPFS")],-1),S={href:"https://ipfs.tech",target:"_blank",rel:"noopener noreferrer"},D=e("p",null,"When you add a file to IPFS, your file gets split into smaller chunks, is cryptographically hashed, and is given a unique fingerprint called a content identifier (CID). This CID acts as a permanent record of your file as it is at that point in time.",-1),F=e("p",null,"When other nodes search your file, they ask peer nodes which one is storing the content referenced by the file's CID. When viewing or downloading your file, they cache a copy. This way, they become a new provider of your content until their cache is cleared.",-1),L=e("h3",{id:"crust-network",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#crust-network","aria-hidden":"true"},"#"),t(" Crust Network")],-1),j={href:"https://crust.network",target:"_blank",rel:"noopener noreferrer"},E=e("p",null,"Crust Network has three main functions: NFT and metaverse metadata storage, personal file storage, and website/dapp hosting.",-1),G=e("h3",{id:"storage-buckets",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#storage-buckets","aria-hidden":"true"},"#"),t(" Storage buckets")],-1),V=e("p",null,"Storage buckets are Apillon’s Web3 Storage abstraction that allows developers to utilize IPFS and Crust to store files in an unstoppable, decentralized way.",-1);function X(q,R){const n=s("ExternalLinkIcon"),a=s("RouterLink");return l(),d("div",null,[h,p,u,f,e("p",null,[t("Apillon integrates multiple "),e("a",_,[t("Polkadot"),o(n)]),t(" parachains and offers access to them in a unified way via modules on the developer dashboard and through "),o(a,{to:"/build/1-apillon-api.html"},{default:r(()=>[t("Apillon APIs")]),_:1}),t(".")]),g,m,b,y,e("p",null,[t("If you are interested in the details of Apillon’s architecture and back-end, want to open a debate around it or contribute on "),e("a",w,[t("GitHub"),o(n)]),t(", feel free to get in touch in the development channel on "),e("a",v,[t("Apillon Discord"),o(n)]),t(".")]),k,A,C,e("ol",null,[e("li",null,[t("If you do not yet have an Apillon account, create one on "),e("a",I,[t("https://app.apillon.io/register"),o(n)]),t(".")]),x,z,e("li",null,[t("Copy the ID number and paste it to the closed-beta channel on "),e("a",B,[t("Apillon Discord"),o(n)]),t(".")]),T]),W,P,N,e("p",null,[e("a",S,[t("IPFS"),o(n)]),t(" is a distributed system for storing and accessing files, websites, applications, and data.")]),D,F,L,e("p",null,[e("a",j,[t("Crust Network"),o(n)]),t(" is a decentralized cloud storage provider that pursues three core Web3 values: decentralization, privacy, and assurance. Crust supports multiple storage-layer protocols, such as IPFS, and delivers instantly accessible on-chain storage functions. Crustʼs technical stack can also support data manipulation and computing.")]),E,G,V,e("p",null,[t("Learn more about "),o(a,{to:"/web3-services/1-good-to-know.html#storage-bucket"},{default:r(()=>[t("storage buckets")]),_:1}),t(".")])])}const K=i(c,[["render",X],["__file","1-good-to-know.html.vue"]]);export{K as default};
