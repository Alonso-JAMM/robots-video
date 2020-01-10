# How to install
1. Clone the repo

`git clone https://github.com/ClassicKerobel/robots-video.git`

2. Install packages required for the server

`npm install`


# How to configure
The server comes with a default config file nammed *config.sample.json.* This file includes a basic 
configuration; however, it should be renamed to *config.json.* 

This file includes the configuration for the ports used for the normal server and for the ssl server
and also includes variables for the location for the cert and keys for the ssl server.


# How to use SSL
One way to use SSL is to:
1. Put the cert and key files in the root directory of the server.
2. In the *config.json* file put the absolute paths of the cert and key files.


# How to Run
Now that all the setup for the server is done, we can run it!

## No SSL
Just run the *server.js* server:

`nodejs server.js`

## SSL
Run the *server-ssl.js* file:

`nodejs server-ssl.js`
