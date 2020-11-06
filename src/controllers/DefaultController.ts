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
   * @api {get} /default/ default endpoint
   * @apiGroup Test
   * @apiDescription Testing controller
   *
   */
  index = (req: Request, res: Response) => {
    return res.status(200).send('default is ok!')
  }

}

export default new DefaultController();
