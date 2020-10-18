import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import bcrypt from 'bcrypt';
import * as Yup from 'yup';

import User from '../models/User';
import users_view from '../views/users_view';

export default {
  async create (request: Request, response: Response) {
    const { email, name, password } = request.body;

    const usersRepository = getRepository(User);
    const data = { email, name, password }
    const schema = Yup.object().shape({
      name: Yup.string().required('Nome obrigatório'),
      email: Yup.string().required(),
      password: Yup.string().required(),
    });

    const castData = schema.cast(data) as User;

    await schema.validate(castData, {
      abortEarly: false
    });

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(castData.password, salt);
    castData.password = hash;

    if (await usersRepository.findOne({ email })) {
      return response.status(400).json({ error: "User already exists" });
    }

    const user = usersRepository.create(castData);
    
    await usersRepository.save(user);

    return response.status(201).json(users_view.render(user));
  }
}