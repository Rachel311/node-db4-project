const db = require('../data/db-config.js');

const getAll = async () => {
    return await db('recipes')
}

module.exports = { getAll }