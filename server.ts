import dotenv from 'dotenv';
dotenv.config();

import './core/db';

import express from 'express';
import { UserCtrl } from './controllers/UserController';
import { registerValidations } from './validations/register';

const app = express();

app.use(express.json());

/*
  TODO:
  1. Скрыть поля confirmHash и password при получении инфы о пользователе
  2. Сделать авторизацию через JWT + Passport
  3. Сделать возможность добавлять твиты через авторизованного пользователя
*/

app.get('/users', UserCtrl.index);
app.post('/users', registerValidations, UserCtrl.create);
app.get('/users/verify', registerValidations, UserCtrl.verify);
// app.patch('/users', UserCtrl.update);
// app.delete('/users', UserCtrl.delete);

app.listen(process.env.PORT, (): void => {
  console.log('SERVER RUNNING!');
});
