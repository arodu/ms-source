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
   * @api {get} /default/ default index endpoint
   * @apiGroup Test
   * @apiDescription Testing controller
   *
   */
  index = (req: Request, res: Response) => {
    return res.status(200).send('default is ok!')
  }

  /**
   * @api {get} /default/:id default view endpoint
   * 
   * @apiGroup Test
   * @apiDescription Testing controller
   * 
   * @apiSampleRequest http://ms-devices:5000/devices
   *  
   * @apiParam id 
   */
  view = (req: Request, res: Response) => {
    return res.status(200).send('default is ok!')
  }

}

export default new DefaultController();
