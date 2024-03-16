"use strict";

const {model, Schema, default:mongoose} = require("mongoose");


const RoomTypeSchema = new Schema({
    _id: Schema.ObjectId,
    name: {
        type: String,
        required: true,
    },
},{ timestamps: true, })


module.exports = model("roomType", RoomTypeSchema);
