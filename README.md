![quickbits](http://i.imgur.com/ulynnBc.png)

# What is Quickbits
A student project created in 9 days at [Dev Bootcamp Chicago](http://devbootcamp.com), Quickbits is the USB stick for the 21st century: easy, secure, anonymous, decentralized browser-to-browser file transfer with no signups or plugins.

## Technologies
- WebRTC via the [PeerJS](https://github.com/peers/peerjs/) library 
- HTML5 File API
- [PeerServer](https://github.com/peers/peerjs-server) (Node.js)
- Firebase
- Heroku
- Amazon Web Services
- Modern web browsers (Firefox 23+)
- jQuery
- Rails 3.2, Ruby 1.9.3
- CSS3

## To run:
Things to have: 
- Either a PeerJS API key or your own peer server to handle signaling (if you elect to run your own peerserver instance, we recommend going with AWS EC2/Beanstalk; [Heroku's timeout limitations](https://devcenter.heroku.com/articles/request-timeout) degrade the window in which peers can successfully signal)
- A [Firebase](https://www.firebase.com/) store to handle URL exchange

Things to do:
- Edit Firebase instantiations in ```file_sender.js``` and ```file_receiver.js``` to point to the root of your Firebase account domain (ie, ```var myRef = new Firebase('https://$YOUR_DOMAIN.firebaseio.com/');```)
- Rails: No database required, just
```
bundle install
```

## Contributors:
- Kent Carmine
- Clark Kampfe
- Chirag Tailor
- Nathan Hadlock
- Jake Koten
- Daniel Lu
