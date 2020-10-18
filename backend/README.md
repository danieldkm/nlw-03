# backend

```bash
yarn init -y
yarn add express
yarn add -D @types/express
yarn add -D typescript

yarn tsc --init

yarn add -D ts-node-dev
yarn add typeorm sqlite3

# migrations commands
yarn typeorm migration:create -n create_orphanages
yarn typeorm migration:run
yarn typeorm migration:revert
yarn typeorm migration:create -n create_images

# uploads
yarn add multer
yarn add -D @types/multer

# lidando com exceções
yarn add express-async-errors

# validação dos dados
yarn add yup
yarn add -D @types/yup


yarn add cors
yarn add -D @types/cors

# login
yarn add bcrypt
yarn add -D @types/bcrypt
yarn add jsonwebtoken
yarn add -D @types/jsonwebtoken
yarn add dotenv
```
