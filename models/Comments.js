const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


Comment.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_id: {
        // HOW
    },
    post_id: {
        // also HOW
    }
}
)

module.exports = Comment;