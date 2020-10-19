import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import * as Yup from 'yup';
import Orphanage from '../models/Orphanage';
import orphanages_view from '../views/orphanages_view';

interface IOrphanage {
  name?: string;
  latitude?: number;
  longitude?: number;
  about?: string;
  instructions?: string;
  opening_hours?: string;
  open_on_weekends?: boolean;//: open_on_weekends === 'true',
  images?: object;
  pending?: boolean;
}

export default {
  async index (request: Request, response: Response) {
    const orphanagesRepository = getRepository(Orphanage);
    const orphanages = await orphanagesRepository.find({
      where: {
        pending: false
      },
      relations: ['images']
    });
    response.json(orphanages_view.renderMany(orphanages));
  },
  async show (request: Request, response: Response) {
    const {id} = request.params;
    const orphanagesRepository = getRepository(Orphanage);
    const orphanage = await orphanagesRepository.findOneOrFail(id, {
      relations: ['images']
    });
    response.json(orphanages_view.render(orphanage));
  },
  async update (request: Request, response: Response) {
    const {userId, id} = request.params;
    console.log({userId, id});

    if(!id || !userId) {
      return response.status(400).json("id não informado.");
    }
    console.log('request.body', request.body, request.params);

    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      pending
    } = request.body;
      
    const orphanagesRepository = getRepository(Orphanage);

    const requestImages = request.files as Express.Multer.File[];
    const images = requestImages?.map(image => {
      return { path: image.filename };
    });

    const data: IOrphanage = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,//: open_on_weekends === 'true',
      images,
      pending
    };
    console.log('data', data);

    const schema = Yup.object().shape({
      name: Yup.string(),
      latitude: Yup.number(),
      longitude: Yup.number(),
      about: Yup.string(),
      instructions: Yup.string(),
      opening_hours: Yup.string(),
      open_on_weekends: Yup.boolean(),
      pending: Yup.boolean(),
      images: Yup.array(Yup.object().shape({
        path: Yup.string()
      }))
    });

    const castData = schema.cast(data) as Orphanage;

    await schema.validate(castData, {
      abortEarly: false // retornar a mensagem de todos os campos invalidos
    });
    console.log('castData', castData);

    return response.json("atualizar orphanage");

  },
  async create (request: Request, response: Response) {
    const {name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends
      } = request.body;
      
      const orphanagesRepository = getRepository(Orphanage);

      const requestImages = request.files as Express.Multer.File[];
      const images = requestImages.map(image => {
        return { path: image.filename };
      });

      const data = {
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends,//: open_on_weekends === 'true',
        images,
        pending: true
      };

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        latitude: Yup.number().required(),
        longitude: Yup.number().required(),
        about: Yup.string().required().max(300),
        instructions: Yup.string().required(),
        opening_hours: Yup.string().required(),
        open_on_weekends: Yup.boolean().required(),
        pending: Yup.boolean().required(),
        images: Yup.array(Yup.object().shape({
          path: Yup.string().required()
        })).required()
      });

      const castData = schema.cast(data) as Orphanage;

      await schema.validate(castData, {
        abortEarly: false // retornar a mensagem de todos os campos invalidos
      });
    
      const orphanage = orphanagesRepository.create(castData);
    
      await orphanagesRepository.save(orphanage);
    
      response.status(201).json(orphanages_view.render(orphanage));
  }
}