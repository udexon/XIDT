We suppose the concept of ID-less transactions is both a novel procedure and yet has many links to the long history of cryptography, perhaps predating electronic computers.

In this article, we shall illustrate one of the most fundamental, if not the most fundamental operation that can be performed with ID-less transaction, called "Guess-a-Secret-Phrase" (GASP), which readers may compare to various legends concerning cryptography, and could be used as a building block for more sophiticated operations.

We believe many communities worldwide would have folk legends similar this of Chinese origin:

- Agents of secret societies would greet each other with secret phrases, thus authenticating their identities.

In this example, we use 2 tabs of Firefox browser to simulate two persons -- Alice and Chris.

Each of Alice and Chris loads a web page, which contains JavaScript libraries for RSA encryption and WebSocket messaging:

http://localhost/XIDT/client.html

<img src="https://github.com/udexon/XIDT/blob/master/png/01_start.png" width=600>

https://github.com/udexon/XIDT/blob/master/png/02_S.js

<img src="https://github.com/udexon/XIDT/blob/master/png/02_init_user.png" width=600>

<img src="https://github.com/udexon/XIDT/blob/master/png/03_alice_S.png" width=600>

<img src="https://github.com/udexon/XIDT/blob/master/png/03_alice_S_highlight.png" width=600>

<img src="https://github.com/udexon/XIDT/blob/master/png/03_chris_encrypt.png" width=600>

<img src="https://github.com/udexon/XIDT/blob/master/png/04_alice_decrypt.png" width=600>

<img src="https://github.com/udexon/XIDT/blob/master/png/05_alice_encrypt.png" width=600>

<img src="https://github.com/udexon/XIDT/blob/master/png/05_chris_S.png" width=600>

<img src="https://github.com/udexon/XIDT/blob/master/png/05_chris_S_highlight.png" width=600>

<img src="https://github.com/udexon/XIDT/blob/master/png/06_chris_pvk.png" width=600>

<img src="https://github.com/udexon/XIDT/blob/master/png/07_chris_decrypt.png" width=600>

<img src="https://github.com/udexon/XIDT/blob/master/png/07_chris_imkey.png" width=600>
