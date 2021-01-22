const fs = require("fs");
const colors = require("colors");

const listar = (base, limite = 10) => {
  console.log("===================".green);
  console.log(`======tabla del ${base}=========`.green);
  console.log("===================".green);
  for (let i = 1; i <= limite; i++) {
    console.log(`${base} * ${i} = ${base * i} \n`.cyan);
  }
};

const crearArchivo = async (base, limite = 10) => {
  let tabla = "";
  for (let i = 1; i <= limite; i++) {
    tabla += `${base} * ${i} = ${base * i} \n`;
  }

  fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, tabla, (err) => {
    if (err) throw new Error(err);
  });
  return `tabla-${base}:limite-${limite}`;
};

const createFile = async (base, limite = 10) => {
  if (!base)
    throw new Error(
      `El parametro (${base}) que se paso como base, no es valido`
    );
  if (!Number(base)) throw new Error("La base no es un valor númerico");
  if (!Number(limite)) throw new Error("El limite no es un valor númerico");

  return crearArchivo(base, limite);
};

module.exports = {
  createFile,
  listar,
};
