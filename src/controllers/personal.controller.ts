import { Request, Response } from 'express';

export default class PersonalController {
  public get(_request: Request, response: Response) {  
    response.send("API work");
  }
}

export const personalController = new PersonalController();
