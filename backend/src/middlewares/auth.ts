import jwt from 'jsonwebtoken';
import {promisify} from 'util';
import {Request, Response, NextFunction} from 'express';

interface IResult {
  id: number
}

export default async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({ error: "No token provided" });
  }

  const [scheme, token] = authHeader.split(" ");

  try {
    const decoded = await promisify(jwt.verify)(token, process.env.SECRET ?? 'talocosemsecrete?') as IResult;
    
    req.params.userId = String(decoded.id);

    return next();
  } catch (err) {
    return res.status(401).send({ error: "Token invalid" });
  }
};