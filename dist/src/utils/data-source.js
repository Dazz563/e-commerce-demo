"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require('dotenv').config();
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const config_1 = __importDefault(require("config"));
const mysqlConfig = config_1.default.get('mysqlConfig');
exports.AppDataSource = new typeorm_1.DataSource(Object.assign(Object.assign({}, mysqlConfig), { type: 'mysql', synchronize: true, logging: false, entities: ['src/entity/**/*.entity{.ts,.js}'], migrations: ['src/migrations/**/*{.ts,.js}'], subscribers: ['src/subscribers/**/*{.ts,.js}'] }));
