### XIDWeb: ID-less Web &mdash; One Small Step Towards Trekonomics

```
<joke>
```
One is always tempted to make a joke that may offend the most powerful groups of people on Earth, whenever possible:
- X is the symbol of Christ.
- Xi is a famous person.
- XID is the abbreviation of ID-less.
- Siths are the villains in Star Wars.
```
</joke>
```

In hindsight, we find it difficult to explain what had gone wrong in the history of computing, that XIDWeb (pronounced "XID Web", ID-less Web) was not developed immediately following SSH. This may go down in history as one of the biggest technology mysteries as well as opportunities that will benefit literally all mankind.

Let's look at XIDWeb with practical examples first, so that we have something concrete as the foundation of our discussions.

1. Our story begins with Travis Tidwell's JSEncrypt, a "pure" (??) JavaScript library that is compatible with PHP OpenSSL asymmetric cryptographic encryption:

- https://github.com/travist/jsencrypt


2. We will incorporate JSEncrypt (JSE) into our own "raw and plain" JavaScript and PHP website:

- http://phos.epizy.com/smashlet/


3. We set up a local copy of the website above for development:

- http://localhost/PHP/phos/


```js
F("nxhr: phos_ajax.php xo: xsqrh: dummy_string") // set up AJAX connection to phos_ajax.php
F('a b c 9 3 + ON ECHO bv: doremi ssid: sstart: sstat: sid: init: ossl: putkps: pbk: ec:',"2je: xsend:")
// initialize PHP OpenSSL keys with ossl:
// pbk: obtains public key
// ec: echo result to front end

F("responseText ix: imkey:") // Front end: extract public key, import public key to JSEncrypt object

F("hello_phos_0419 jecr:")   // encrypt text: hello_phos_0419
F("nxhr: phos_ajax.php xo: xsqrh: swap:")  // set up AJAX connection again
F('a b c 9 3 + ON ECHO bv: 0 si: 1 i: sstart: . getkps: dcr: ec:',"2je: xsend:") 
// getkps: retrieve OpenSSL keys from $_SESSION
// dcr: decrypt using PHP OpenSSL function

// 2je: pack 2 objects (strings) at the top of stack as JSON
// xsend: send the JSON to back end
```

The _funny_ looking code above is our version of Reverse Polish Notation derived from the Forth programming language, called Phos. Each of the function word with a colon ':' suffix is mapped to a JavaScript function (in the front end) or a PHP function (in the back end), executed in a stack machine, where non-function tokens (words) are pushed onto the stack, and results from executing function words are pushed onto the stack for further processing.

(We are also going to call our Phos Universal Function Library "Phunilib", hence the "funny" pun.)

Readers may be unfamiliar with this mode of operation. However, stack machines exist everywhere from the interpretter engines of JavaScript and PHP to all other stack machine based programming languages such as Java, Python, etc. down to the very proprietary stack engine cores of microprocessors such as Intel, ARM, etc.

What the fragment of Phos code did above were explained in the comments.

Note that the back end commands are stored as a string, sent from front end to the back end:

```js
F('a b c 9 3 + ON ECHO bv: 0 si: 1 i: sstart: . getkps: dcr: ec:',"2je: xsend:") 
// Back end commands: 'a b c 9 3 + ON ECHO bv: 0 si: 1 i: sstart: . getkps: dcr: ec:'
// Front end commands: "2je: xsend:" 
```
