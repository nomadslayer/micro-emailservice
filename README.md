# email_service
Email Service
This is an IOC implementation of Email service using nodejs typescript. Please note that this currently doesn't support attachment. 

1. If you would want to run it manually, please install the items below. 

a. mongodb

b. mongo Compass (if you would like to the data)

c. redis-server

2. The email service put here is gmail. You would need to enable 2FA in your manage gmail account and also get a new 16 digit password for APP in gmail. It is call App password. 


Run Backend Server (through Docker). Please install docker

1). git clone https://github.com/nomadslayer/micro-emailservice.git

2). cd ./email_service (move to project directory)

3). docker-compose up -d --build

4). docker-compose up

5). Application run on http://localhost:3000/

