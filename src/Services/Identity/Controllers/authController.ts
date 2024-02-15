// WEAB.Identity.API.Controllers

import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../Models/User';

const users: User[] = []; // Simples banco de dados de usuários em memória (substituir por um banco de dados real)

const saltRounds = 10;
const secretKey = 'your_secret_key';

export const register = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).send('Username and password are required');
    return;
  }

  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const newUser: User = {
    id: users.length + 1,
    username,
    password: hashedPassword,
  };

  users.push(newUser);

  res.status(201).send('User registered successfully');
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username);

  if (!user) {
    res.status(401).send('Invalid username or password');
    return;
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    res.status(401).send('Invalid username or password');
    return;
  }

  const token = jwt.sign({ username: user.username }, secretKey);
  res.json({ token });
};
