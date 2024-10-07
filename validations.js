import { body } from 'express-validator';

export const registerValidation = [
    body('fullName', 'Укажите имя').isLength({ min: 2 }),
    body('email', 'Неверный формат почты').isEmail(),
    body('password', 'Слишком короткий пароль').isLength({ min: 4 }),
];

export const loginValidation = [
    body('email', 'Неверный формат почты').isEmail(),
    body('password', 'Слишком короткий пароль').isLength({ min: 4 }),
];

export const postCreateValidation = [
    body('title', 'Укажите заголовок статьи').isLength({ min: 1 }).isString(),
    body('text', 'Введите текст статьи').isLength({ min: 1 }).isString(),
    body('imageUrl', 'Неверная ссылка на изображение').optional(),
];