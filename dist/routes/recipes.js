"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getRecipe_1 = require("../controllers/recipes/getRecipe");
const express = require('express');
const router = express.Router();
console.log('Loading Routes: ', __filename);
router.get('/:id', getRecipe_1.getRecipe);
module.exports = router;
