const fetch = require('node-fetch');
const LukeSkywalker = `https://swapi.dev/api/people/1/`

const getLukeSkywalker = async () => {
    let data = await fetch(LukeSkywalker);

    let JSObject = await data.json();
    return JSObject;
}

module.exports = {
    getLukeSkywalker
}