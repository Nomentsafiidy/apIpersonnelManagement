import { Request, Response } from 'express';

export default class PersonalController {

  /**
   * get all personnal
   * @param _request 
   * @param response 
   */
  public get = (_request: Request, response: Response) => {  
    response.send("API work...");
  }

  /**
   * get personnal by mail
   * @param request 
   * @param response 
   */
  public getByEmail = (request: Request, response: Response) => {  
    console.log(request.params);    
    response.send(request.params);
  }

  /**
   * add personnal
   * @param request 
   * @param response 
   */
  public add = (request: Request, response: Response) => {  
    console.log(request.body);    
    response.send(request.body);
  }

  /**
   * update personnal
   * @param request 
   * @param response 
   */
  public update = (request: Request, response: Response) => {  
    console.log(request.body);    
    response.send(request.body);
  }
  
  /**
   * delete personnal by email
   * @param request 
   * @param response 
   */
  public delete = (request: Request, response: Response) => {  
    console.log(request.params);    
    response.send(request.params);
  }

}

export const personalController = new PersonalController();
