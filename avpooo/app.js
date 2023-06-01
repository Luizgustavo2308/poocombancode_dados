const express = require('express');
const app = express();

const produtosRoutes = require("./api/router/produtos");

app.listen(8080);

app.use('/produtos', produtosRoutes);