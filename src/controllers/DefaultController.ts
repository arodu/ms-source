"use strict";
import Controller from "./Controller";
import { defaultModel, DefaultInterface } from "../models/Default";

import { Request, Response } from "express";

class DefaultController extends Controller {

  model: DefaultInterface;

  constructor() {
    super();
    this.model = defaultModel;
  }

  /**
   * @api {get} /public/default/ default index endpoint
   * @apiGroup DefaultController
   * @apiDescription Testing controller
   *
   */
  index = (req: Request, res: Response) => {
    return res.status(200).send('default is ok!')
  }

  /**
   * @api {get} /public/default/:id default view endpoint
   * @apiGroup DefaultController
   * @apiDescription Testing controller
   *  
   * @apiParam id 
   */
  view = (req: Request, res: Response) => {
    return res.status(200).send('default is ok!')
  }

}

export default new DefaultController();
