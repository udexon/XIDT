### "Greet with a Secret Phrase" (GASP) Protocol

We suppose the concept of ID-less transactions is both a novel procedure and yet has many links to the long history of cryptography, perhaps predating electronic computers.

In this article, we shall illustrate one of the most fundamental, if not the most fundamental operation that can be performed with ID-less transaction, called "Greet-with-a-Secret-Phrase" (GASP), which readers may compare to various legends concerning cryptography, and could be used as a building block for more sophiticated operations.

We believe many communities worldwide would have folk legends similar this of Chinese origin:

- Agents of secret societies would greet each other with secret phrases, thus authenticating their identities.

In this example, we use 2 tabs of Firefox browser to simulate two persons -- Alice and Chris.

1. Each of Alice and Chris loads a web page, which contains JavaScript libraries for RSA encryption and WebSocket messaging:

http://localhost/XIDT/client.html

<img src="https://github.com/udexon/XIDT/blob/master/png/01_start.png" width=600>

Most of the input and output will be performed in the browser consoles, shown on the right side of the screenshot.

2. Alice and Chris execute a user initialisation script in the browser console, respectively:

```js
Alice: F("Alice iu:")
```
```js
Chris: F("Chris iu:")
```

(We shall leave the detailed explanations for the Phos script and stack machine to [another article (here)](https://github.com/udexon/GOEHDOM/blob/master/PMSM.md), just to not clutter this entry level article.)

Alice and Chris then examine the stack which contains the results of executing the script, as shown in the link and screenshot below:

https://github.com/udexon/XIDT/blob/master/png/02_S.js

In the file above, we can see that there are 3 items on the stack in Alice's browser console:

`0`: Chris' JSON string, containing Chris' public key (PBKC).

`1`: Alice's public and private key pairs (stored as an JavaScript object).

`2`: Alice's JSON string, containing Alice's public key (PBKA).

Similar items exist in the stack in Chris' browser console.

<img src="https://github.com/udexon/XIDT/blob/master/png/02_init_user.png" width=600>

In this simple example, we merely copied a websocket broadcast example from elsewhere (all clients will receive the same message, including the sender). The crucial modification we made was line 22 in [`client.js`](https://github.com/udexon/XIDT/blob/master/XIDT/client.js), where the received message is pushed on to the stack:

```js
 S.push(event.data);
 ```

3. Chris imports public key of Alice (PBKA) and encrypts a secret phrase ("chris_love_cookie"), and sends the encrypted message to Alice.

```js
F("jd: pbk ix: imkey: .")
F("chris_loves_cookies ecr: wss:")

// jd: JSON.parse(), inherited from PHP json_decode(), input is top of stack (TOS)
// pbk ix: pick item with index pbk, ie. public key
// imkey: import key (works for both public key or private key)
// ecr: encrypt TOS
// wss: send message via web socket
```


<img src="https://github.com/udexon/XIDT/blob/master/png/03_chris_encrypt.png" width=600>

<img src="https://github.com/udexon/XIDT/blob/master/png/03_alice_S.png" width=600>

<img src="https://github.com/udexon/XIDT/blob/master/png/03_alice_S_highlight.png" width=600>


4. Alice decrypts the message using her own private key (PVKA).

```js
F("dcr:")
```

<img src="https://github.com/udexon/XIDT/blob/master/png/04_alice_decrypt.png" width=600>


5. Alice imports public key of Chris (PBKC) to encrypt the same message and sends it back to Chris.

```js
F("3 pick: jd: pbk ix: imkey: .")

// 3 pick: pick 3rd item below top of stack, duplicate it and push it at the top of stack
```

<img src="https://github.com/udexon/XIDT/blob/master/png/05_alice_encrypt.png" width=600>


6. Chris reimports his own public and private keys saved on the stack earlier.

```js
F("3 pick: pbk ix: imkey: pvk ix: imkey: .")

// . pops remaining object containing pbk/pvk
```

<img src="https://github.com/udexon/XIDT/blob/master/png/06_chris_pvk.png" width=600>

<img src="https://github.com/udexon/XIDT/blob/master/png/07_chris_imkey.png" width=600>



7. Chris decrypts the message with his own private key (PVKC). The result is shown by examining the stack object (array) `S`, where the top of stack (TOS) (last element in the array) is the decrypted secret phrase `chris_loves_cookies`.

```js
F("dcr:")
```

<img src="https://github.com/udexon/XIDT/blob/master/png/07_chris_decrypt.png" width=600>
