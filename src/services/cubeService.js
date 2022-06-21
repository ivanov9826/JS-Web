const fs = require('fs/promises');

const cubes = require('../db.json');

const path = require('path');

exports.getAll = (search = '', fromInput, toInput) => {
    const from = Number(fromInput) || 0;
    const to = Number(toInput) || 6

    const result = cubes
        .filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
        .filter(x => x.difficultyLevel >= from && x.difficultyLevel <= to)

    return result;
};

exports.getOne = (cubeId) => cubes[cubeId]

exports.save = (cube) => {
    cubes.push({ id: cubes[cubes.length - 1].id + 1, ...cube });

    return fs.writeFile(path.resolve('src', 'db.json'), JSON.stringify(cubes, '', 4)), { encoding: 'utf-8' };
}; 
