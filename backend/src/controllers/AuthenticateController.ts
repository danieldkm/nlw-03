import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import bcrypt from 'bcrypt';
import * as Yup from 'yup';
const jwt = require("jsonwebtoken");

import User from '../models/User';
import users_view from '../views/users_view';

export default {
  async index (request: Request, response: Response) {
    const usersRepository = getRepository(User);

    const { email, password } = request.body;
    const data = { email, password };

    const schema = Yup.object().shape({
      email: Yup.string().required(),
      password: Yup.string().required(),
    });

    const castData = schema.cast(data) as User;

    await schema.validate(castData, {
      abortEarly: false
    });

    const user = await usersRepository.findOne({ email });

    if (!user) {
      return response.status(400).json({ error: "User not found" });
    }

    if (!(bcrypt.compareSync(castData.password, user.password))) {
      return response.status(400).json({ error: "Invalid password" });
    }

    return response.json({
      token: jwt.sign({ id: user.id, name: user.name }, process.env.SECRET, {
        expiresIn: 86400
      })
    });
  },

  async show (request: Request, response: Response) {
    const {userId} = request.params;

    if(userId) {
      const usersRepository = getRepository(User);
      const user = await usersRepository.findOne(parseInt(userId));
      if(user) {
        return response.json(users_view.render(user));
      }
    }
    response.status(404).json('user not found')
  }
}