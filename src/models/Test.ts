"use strict";
import { mongooseClient } from "@ts-utils";
import database from "@configs/database";

import { Schema, Document } from 'mongoose';
const mongoose = mongooseClient(database);


export interface TestInterface extends Document {
  name: String,
  datetime: Date,
  type: String,
}


export const TestSchema:Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  datetime: {
    type: Date,
    default: Date.now,
    required: true,
  },
  type: {
    type: String,
    minlength: 2,
    required: true,
  },
});

export const testModel = mongoose.model<TestInterface>("test_collection", TestSchema);
