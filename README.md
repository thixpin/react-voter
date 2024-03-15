#Deploying a React App on linux server


```bash
curl -s https://deb.nodesource.com/setup_16.x | sudo bash
sudo apt install nodejs -y
sudo apt install build-essential -y
node -v
npm -v
sudo apt install git -y
cd /var/www
chown -R $USER:www-data /var/www
git clone https://github.com/thixpin/react-voter.git vote-app

cd vote-app
npm install -g yarn
npm install -g pm2
npm install -g serve
yarn install
yarn start
yarn build --production
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```


```bash
sudo apt-get update
sudo apt-get install -y nginx
sudo systemctl enable --now nginx
sudo systemctl start nginx
```

```bash
sudo vim /etc/nginx/sites-available/vote-app
```


## Nginx Configuration
```conf

server {
    listen 80;

    root /var/www/html;

    server_name vote.devktops.xyz;

    location / {
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $host;
        proxy_pass http://127.0.0.1:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/vote-app /etc/nginx/sites-enabled/sudo nginx -t
sudo systemctl restart nginx

sudo certbot --nginx -d vote.devktops.xyz
```


