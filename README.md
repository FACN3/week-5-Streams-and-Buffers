# week-5-Streams-and-Buffers


## :books: What streams and buffers are in Node, how are they used in conjunction?

Simple Readable and Writable Streams that use a Buffer to store received data, or for data to send out.

Streams are unix pipes that let you easily read data from a source and pipe it to a destination. Simply put, a stream is nothing but an EventEmitter and implements some specials methods. Depending on the methods implemented, a stream becomes Readable, Writable, or Duplex (both readable and writable). 
Readable streams let you read data from a source while writable streams let you write data to a destination.
The source can be anything. It can be a simple file on your file system, a buffer in memory or even another stream. As streams are EventEmitters, they emit several events at various points.
<br>source - https://www.sitepoint.com/basics-node-js-streams/


Buffers:
- temporary storage spot for a chunk of data that is being transferred from one place to another
- the buffer is filled with data, then passed along
- transfer small chunks of data at a time

