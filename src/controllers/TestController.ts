"use strict";
import Controller from "./Controller";
import { testModel, TestInterface } from "../models/Test";

import { Request, Response } from "express";

class TestController extends Controller {

  model: TestInterface;

  constructor() {
    super();
    this.model = testModel;
  }

  test = (req: Request, res: Response) => {
    return res.status(200).send('test is ok!')
  }

}

export default new TestController();
