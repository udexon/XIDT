## XIDT: ID-less Transactions

#### Free Software Revolution 2.0

If ___Free Software Revolution 1.0___ is the creation of GNU Linux tools essentially _CLONING_ proprietary Unix functionalities, and the subsequent development that created the Internet and mobile infrastructure that we have today, we shall define ___Free Software Revolution 2.0___ as free software programmers  _CLONING_ existing mobile and Internet platforms owned by MAGAF (Microsoft Apple Google Amazon Facebook) and other tech giants, to create a ___Cloudless Computing___ platform that are ___owned by EVERYONE___, not single monolith faceless corporations. 

[___Metashellet___](https://github.com/udexon/Metashellet) and ID-less transactions are the core technologies that will give rise to Cloudless Computing, and to realize Free Software Revolution 2.0.


#### ID-less Transactions

The Unix User ID convention, based on symmetric cryptography, has shaped perhaps all of today authentication systems by way of forking software from the GNU Linux free software movement. Although asymmetric cryptography has been widely used in many applications, e.g. cryptocurrencies, browser session authentication etc., they are not completely removed from Unix style user ID, perhaps due to preconditioned mindset of the developers, who are too used to the Unix User ID convention. Although also based on asymmetric cryptography, our ID-less transactions protocol (XIDT) is a radical creation that departs completely from the principles and philosophies of Unix User ID, making it possible to serve as an intermediate and interface system amongst existing centralized Unix style authentication systems, as well as an ultimate protection of personal privacy, die to its distributed ownership and pactically uncrackable nature. 


#### ID-less Transactions (XIDT) Demos

1. [ RSA Encryption / Decryption using Phos Metashellet ](https://github.com/udexon/DatongToken/blob/master/Datong_3_in_1.md)

2. [ "Greet with a Secret Phrase" Protocol ](https://github.com/udexon/XIDT/blob/master/Greet_Secret_Phrase.md)

3. [ ID-less Transactions Demo Source Code ](https://github.com/udexon/XIDT/tree/master/XIDT)

4. [ International Money Transfer (including Cryptocurrencies) and Online Tipping ](https://github.com/udexon/EMYL/blob/master/E003_Online_Tipping.md)


#### A New Type of Blockchain based on ID-less Transactions

- The chain of key pairs and TUID (temporary user ID) by a user can be used to uniquely identify a user, similar to blockchain, but more flexible and fundamental, as TUID may be changed by a user any time arbitrarily, and there is no centralized body to manage them.

This can be used for international money transfer with multiple currencies including cryptocurrencies, and also can be used for online tipping. 

This leads to a novel and interesting mode of identification -- asymmetric identification: The owner of the chain of public and private key pairs and temporary user ID may confess he is the owner; However, third parties including law enforcement agencies CANNOT prove the owner's identity.

We believe this is an unprecedented invention in the history of laws, finance and computing, and would have huge consequences in many areas of human activities.

On the other hand, much like conventional blockchain hardware wallet, the owner of the device thatkeeps the chain of key pairs (public and private) and TUID may claim the identity.

- Temporary User ID (TUID) can be used as a convenient short hand, amongst small cluster of users, much like nicknames in many online chat system. 

The changes of key pairs and TUID can be recorded by other users in communications with a particular user. In contrast, conventional user ID (CUID) in Unix like systems cannot be changed.


#### International Money Transfer (including Cryptocurrencies) using XIDT

1. All messages should be in json with TIME and TUID. (undecided paragraph number use bullet first)

Sender A should broadcast his country (her) and bank name, and recipient B's country and bank name.

Agents can recognize A and B by TUID (I_AM) and PBK history.

2. Introduce guarantor between 2 parties:
- e.g. A G C, C G D, D G B.

- Recipient (Agents) must deposit amount greater than received funds with guarantor, in case of default.

- Creating markets for guarantors and agents.

- Breaking down conventional roles that can only be performed by institutions to individual. Greater competition. Lower costs.

Agents and Guarantors can build up track records without revealing identity. Each may have multiple identities, just like one person own many companies. Identity is defined by chain of TUID and key pairs. 

Guarantors can be registered companies in offshore territories.

To consumers,  despite being ID-less, agents' performance can be tracked using the chain of key pairs and TUI. This ensures agent's reputation and the transactions are foolproof. Just like shared economy app, users can become agents easily in XIDT. Hence its vitality and potential to grow. 


#### Future Plans

- ID-less transactions: recruit collaborators (volunteer or incentivized) online.

- Need to set up and test message relay ABCDA so that A knows message has arrived at D.
