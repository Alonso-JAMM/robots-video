# How to Install

1. Clone the repo

`git clone https://github.com/ClassicKerobel/robots-video.git`

2. Intall packages in root directory of the app

`npm install`

3. Move to server folder and install packages there

`cd server`

`npm install`

## If you want to use SSL

1. Put cert and key files in the root directory of the app

2. In the file **server/config.sample.json** put the absolute paths of the cert and key files

3. Finally change the name of config.sample.json to **config.json**

# Run

## No SSL
In the server directory

`nodejs server.js`

## SSL
In the server directory

`nodejs server-ssl.js`

## Start automatically 
Make a service file and put in **/etc/systemd/system/**. Here is an example of the file.

```
[Unit]
Description=Node.js Server

[Service]
ExecStart=/usr/bin/nodejs /var/www/easyrtc/robots-video/server/server-ssl.js
Restart=always

[Install]
WantedBy=multi-user.target
```
