import{_ as e,o as i,c as t,a as o}from"./app-ef8939bd.js";const n={},l=o('<h1 id="developing-web3-with-apillon" tabindex="-1"><a class="header-anchor" href="#developing-web3-with-apillon" aria-hidden="true">#</a> Developing Web3 with Apillon</h1><div class="divider"></div><h2 id="challenges-of-blockchain-complexity" tabindex="-1"><a class="header-anchor" href="#challenges-of-blockchain-complexity" aria-hidden="true">#</a> Challenges of blockchain complexity</h2><p>When building on Web3, be it within the Polkadot ecosystem or in general, developers face challenges that still lack proper addressing.</p><ul><li>Difficult choice and understanding of new protocols and solutions launched every month</li><li>Each protocol and parachain dedicated to an isolated use case</li><li>Low protocol-level thinking</li><li>Custom token for every protocol</li><li>Potentially high token volatility</li><li>UX and documentation issues</li></ul><p>With these obstacles in mind, the process of building a Web3 product from scratch soon becomes a complex, time-consuming, and potentially even risky business.</p><p>To overcome them, developers would need to:</p><ul><li>Have a solid understanding and experience employing blockchain technology</li><li>Select a network and/or parachain on which to build a decentralized app</li><li>Research protocols of the chosen network and/or parachain</li><li>Buy and use network/parachains native tokens to use its services</li><li>Learn how to integrate and combine those services</li><li>Build, implement, shift, test, see how users respond, edit and adapt, rinse and repeat</li><li>Maintain their Web3 product in the following years, and update according to all protocol changes</li></ul><p>Using Apillon, on the other hand, the process of developing a Web3 product is radically different.</p><h2 id="web3-development-with-and-without-apillon" tabindex="-1"><a class="header-anchor" href="#web3-development-with-and-without-apillon" aria-hidden="true">#</a> Web3 Development with and without Apillon</h2><p><strong>Example #1: Building on KILT Protocol</strong>*</p><p>To build a simple Web3 app utilizing KILT Protocol for user authentication from scratch, a developer needs to do (at least) the following:</p><ul><li>Research the KILT Documentation</li><li>Configure and integrate the KILT Protocol</li><li>Generate and manage KILT’s Decentralized Identifiers (DIDs)</li><li>Attest the validity and functionality of the outcome</li><li>Handle the custody, purchase, and payments of the KILT token</li><li>Upgrade and maintain the end product with protocol upgrades</li></ul><p>Using the Apillon platform, on the other hand, a developer simply calls a function (e. g., <code>createUserWithEmailAndPassword</code>) from the Apillon SDK and sends the required parameters. The function creates a fully working user DID in the back end.</p><p><strong>Example #2: Building on Crust</strong>*</p><p>To build a simple Web3 app utilizing Crust for file storage from scratch, a developer needs to do (at least) the following:</p><ul><li>Research the Crust documentation</li><li>Configure and integrate the Crust Protocol</li><li>Handle the custody, purchase, and payments of the CRU token</li><li>Manage the FILE expiry</li><li>Upgrade and maintain the end product with protocol upgrades</li></ul><p>Using the Apillon platform, on the other hand, a developer simply calls the <code>getStorage()</code> SDK function and moves the files to a decentralized, pinned service provided by Crust and IPFS.</p><p>In both cases, the resources spent on building a functional Web3 application with Apillon are significantly reduced, and the product’s go-to-market trajectory much shorter and streamlined.</p><p>*<em>Disclaimer: These examples are technically highly simplified to illustrate the problematic context of building a Web3 product to the general public, whereas in technical reality, the process is much more complex. Examples used do not intend to imply in any way that either KILT or Crust are challenging to use but merely to show that these processes require serious work and introduce friction in cases where developers utilize several parachains to build a single solution.</em></p>',20),a=[l];function r(s,d){return i(),t("div",null,a)}const h=e(n,[["render",r],["__file","5-developing-web3-with-apillon.html.vue"]]);export{h as default};
