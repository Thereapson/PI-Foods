const { Router } = require('express');
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipe = require('./recipe');
const recipes = require('./recipes');
const diets = require('./diets');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("recipe", recipe);
router.use("recipes", recipes);
router.use("diets", diets);


module.exports = router;
