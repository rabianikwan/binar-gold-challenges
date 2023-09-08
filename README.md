# Goals
+ App Internal Restaurant + Restaurant Profiles

# Design
+ bootsrap
+ CSS

# Tools
+ dotenv
+ express
+ express-rate-limit
+ helmet
+ knex
+ pg
+ uuid
+ babel
+ commitlint
+ husky

# How To Run
Install all dependency by:
```bash
npm i -g pnpm && pnpm install 
```

copy or create .env file
```bash
cp env.example .env
```
config .env file(example) :

```env
PORT=5000
NODE_ENV=development
DB_USER=root
DB_PASS=root
DB_NAME=binar
```
migrate & seed your database:
```bash
pnpm database:prepare
```

run project by : 
```bash
pnpm dev
```
# API Documentation
go to this link :
https://documenter.getpostman.com/view/27283702/2s9Y5bQ1nE