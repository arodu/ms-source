"use strict";
import { mongooseClient } from "@ts-utils";
import database from "@configs/database";

import { Schema, Document } from 'mongoose';
const mongoose = mongooseClient(database);


export interface DefaultInterface extends Document {
  name: String,
  datetime: Date,
  type: String,
}


export const DefaultSchema:Schema = new Schema({
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

export const defaultModel = mongoose.model<DefaultInterface>("default_collection", DefaultSchema);
