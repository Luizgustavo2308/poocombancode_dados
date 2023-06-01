const { Sequelize } = require("sequelize");
const Produtos = require("../models/produtos");
module.exports = {
    async getALL(req, res) {
        const sequelize = new Sequelize("root", "12345", {
            host: "localhost",
            dialect: "mysql"
        })
        const produtos = await Produtos(sequelize, Sequelize.DataTypes).findALL();

        res.status(200).send(produtos);
    }
}