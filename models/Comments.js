const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


Comment.init(
{
    title: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user: {
        // HOW
    },
    post: {
        // also HOW
    }
}
)

module.exports = Comment;