# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command

# This project was created with the following commands:

-   typeorm init --express --module esm

# Uninstall pre packaged dependencies

-   npm uninstall pg body-parser

# Install depencencies

-   npm i -S bcryptjs config cookie-parser cors dotenv envalid html-to-text nodemailer ejs redis zod jsonwebtoken morgan mysql2 express-rate-limit rate-limit-redis

# Install dev dependencies

-   npm i -D @faker-js/faker @types/bcryptjs @types/config @types/cookie-parser @types/cors @types/express @types/html-to-text @types/jsonwebtoken @types/morgan @types/nodemailer morgan ts-node ts-node-dev @types/pug

# CSV parsing

-   npm i -S csv-parser

# Setup db connection with config and update scripts (package.json)

## Migrations

# Create migration

-   typeorm entity:create src/entities/post.entity

# Install redis then start it

-   brew install redis | redis-server
