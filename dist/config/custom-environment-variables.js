"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    port: 'PORT',
    mysqlConfig: {
        host: 'MYSQL_HOST',
        port: 'MYSQL_PORT',
        username: 'MYSQL_USER',
        password: 'MYSQL_PASSWORD',
        database: 'MYSQL_DB',
    },
    accessTokenPrivateKey: 'JWT_ACCESS_TOKEN_PRIVATE_KEY',
    accessTokenPublicKey: 'JWT_ACCESS_TOKEN_PUBLIC_KEY',
    refreshTokenPrivateKey: 'JWT_REFRESH_TOKEN_PRIVATE_KEY',
    refreshTokenPublicKey: 'JWT_REFRESH_TOKEN_PUBLIC_KEY',
    smtp: {
        host: 'EMAIL_HOST',
        pass: 'EMAIL_PASS',
        port: 'EMAIL_PORT',
        user: 'EMAIL_USER',
    },
};