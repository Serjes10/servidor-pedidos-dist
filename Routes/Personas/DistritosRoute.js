"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const DistritosController = require('../../Controller/Personas/DistritosController.js');
const app = express();

app.get('/distritos', (req, res)=>{
    let params = req.params;
    let distrito = new DistritosController();

    distrito.mostrarDistritos().then((result)=>{
        if(!result.hasError){
            res.status(200).send(result);
        }else{
            res.status(400).send(result);
        }
    })
});

exports.default = app;