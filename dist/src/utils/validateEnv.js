"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envalid_1 = require("envalid");
const validateEnv = () => {
    (0, envalid_1.cleanEnv)(process.env, {
        NODE_ENV: (0, envalid_1.str)(),
        PORT: (0, envalid_1.port)(),
        MYSQL_HOST: (0, envalid_1.str)(),
        MYSQL_PORT: (0, envalid_1.port)(),
        MYSQL_USER: (0, envalid_1.str)(),
        MYSQL_PASSWORD: (0, envalid_1.str)(),
        MYSQL_DB: (0, envalid_1.str)(),
        JWT_ACCESS_TOKEN_PRIVATE_KEY: (0, envalid_1.str)(),
        JWT_ACCESS_TOKEN_PUBLIC_KEY: (0, envalid_1.str)(),
        JWT_REFRESH_TOKEN_PRIVATE_KEY: (0, envalid_1.str)(),
        JWT_REFRESH_TOKEN_PUBLIC_KEY: (0, envalid_1.str)(),
    });
};
exports.default = validateEnv;
