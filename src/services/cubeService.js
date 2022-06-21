const fs = require('fs/promises');

const cubes = require('../db.json');

const path = require('path');


exports.save = (cube) => {
    cubes.push({id: cubes[cubes.length - 1].id + 1, ...cube});

    return fs.writeFile(path.resolve('src' , 'db.json') , JSON.stringify(cubes , '' , 4)) , {encoding: 'utf-8'};
}; 

exports.getOne = (cubeId) => cubes[cubeId]