We suppose the concept of ID-less transactions is both a novel procedure and yet has many links to the long history of cryptography, perhaps predating electronic computers.

In this article, we shall illustrate one of the most fundamental, if not the most fundamental operation that can be performed with ID-less transaction, called "Greet-with-a-Secret-Phrase" (GASP), which readers may compare to various legends concerning cryptography, and could be used as a building block for more sophiticated operations.

We believe many communities worldwide would have folk legends similar this of Chinese origin:

- Agents of secret societies would greet each other with secret phrases, thus authenticating their identities.

In this example, we use 2 tabs of Firefox browser to simulate two persons -- Alice and Chris.

1. Each of Alice and Chris loads a web page, which contains JavaScript libraries for RSA encryption and WebSocket messaging:

http://localhost/XIDT/client.html

<img src="https://github.com/udexon/XIDT/blob/master/png/01_start.png" width=600>

Most of the input and output will be performed in the browser consoles, shown on the right side of the screenshot.

2. Alice and Chris execute a user initialisation script, respectively:

```js
F("Alice iu:")
```
```js
F("Chris iu:")
```

(We shall leave the detailed explanations for the Phos script to another article, just to not clutter this entry level article.)

Alice and Chris then examine the stack which contains the results of executing the script, as shown in the link and screenshot below:

https://github.com/udexon/XIDT/blob/master/png/02_S.js

In the file above, we can see that there are 3 items on the stack:

`0`: Chris JSON string, containing Chris' public key (PBKC).

`1`: Alice's public and private key pairs (stored as an JavaScript object).

`2`: Alice's JSON string, containing Alice's public key (PBKA).

<img src="https://github.com/udexon/XIDT/blob/master/png/02_init_user.png" width=600>

3. Chris imports public key of Alice (PBKA) and encrypts a secret phrase ("chris_love_cookie"), and sends the encrypted message to Alice.

<img src="https://github.com/udexon/XIDT/blob/master/png/03_chris_encrypt.png" width=600>

<img src="https://github.com/udexon/XIDT/blob/master/png/03_alice_S.png" width=600>

<img src="https://github.com/udexon/XIDT/blob/master/png/03_alice_S_highlight.png" width=600>


4. Alice decrypts the message using her own private key (PVKA).

<img src="https://github.com/udexon/XIDT/blob/master/png/04_alice_decrypt.png" width=600>


5. Alice imports public key of Chris (PBKC) to encrypt the same message and sends it back to Chris.

<img src="https://github.com/udexon/XIDT/blob/master/png/05_alice_encrypt.png" width=600>

<img src="https://github.com/udexon/XIDT/blob/master/png/05_chris_S.png" width=600>

<img src="https://github.com/udexon/XIDT/blob/master/png/05_chris_S_highlight.png" width=600>


6. Chris reimport his own public and private keys saved on the stack earlier.

<img src="https://github.com/udexon/XIDT/blob/master/png/07_chris_imkey.png" width=600>

<img src="https://github.com/udexon/XIDT/blob/master/png/06_chris_pvk.png" width=600>


7. Chris decrypts the message with his own private key (PVKC).

<img src="https://github.com/udexon/XIDT/blob/master/png/07_chris_decrypt.png" width=600>
