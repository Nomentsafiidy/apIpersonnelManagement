import { Request, Response } from 'express';
import { resolve } from 'path';
import { Personal, PersonalType } from './../models/personal';

export default class PersonalController {

  /**
   * get all personnal
   * @param _request 
   * @param response 
   */
  public get = async (_request: Request, response: Response) => { 
    Personal.find({}, (error: any, personal: PersonalType[])=>{
        if(error){
            response.status(500).json({error})
        }else{
            response.status(200).json(personal)
        }
    });
  }

  /**
   * get personnal by mail
   * @param request 
   * @param response 
   */
  public getByEmail = (request: Request, response: Response) => {  
    Personal.find({ email : request.params.email}, (error: any, personal: PersonalType[])=>{
        if(error){
            response.status(500).json({error})
        }else{
            response.status(200).json(personal)
        }
    });
  }

  /**
   * add personnal
   * @param request 
   * @param response 
   */
  public add = async (request: Request, response: Response) => {    
    let newPersonal: PersonalType = <PersonalType>{ ...request.body }
    if(await this.emailIsUsed(newPersonal.email)){
        response.status(500).json({ message: "the email is already used" });
    }else{
        Personal.validate(newPersonal).then(()=>{
            let personal = new Personal(newPersonal);
            personal.save()
            .then(personal=>{
                response.status(200).json(personal);
            })
            .catch(err=>{
                response.status(500).json(personal);
            });
        }).catch((err: any)=>{
            response.status(500).json(err);
        })   
    }   
  }

  /**
   * update personnal
   * @param request 
   * @param response 
   */
  public update = (request: Request, response: Response) => { 
    Personal.updateOne({ email: request.params.email }, { ...request.body }).then((res: any, aiz: any)=>{
        response.status(200).json({res, aiz});
    }).catch((_err: any)=>{}); 
  }

  /**
   * delete personnal by email
   * @param request 
   * @param response 
   */
  public delete = (request: Request, response: Response) => {  
    Personal.deleteOne({ email: request.params.email }, {}, () => {
        response.status(200).json({message: "Personal removed"});
    })  
  }

  /**
   * check if the email is already used
   * @param email 
   */
  private emailIsUsed(email: string): Promise<boolean>{
    return new Promise(resolve=>{
        Personal.find({ email : email}, (_error: any, personal: PersonalType[])=>{
            personal.length !== 0 ? resolve(true) : resolve(false);
        });
    })
  }

}

export const personalController = new PersonalController();
