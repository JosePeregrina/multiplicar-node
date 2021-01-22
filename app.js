const colors = require("colors/safe");
const { argv } = require("./config/yargs");
const { createFile, listar } = require("./multiplicar/multiplicar");

let comando = argv._[0];

switch (comando) {
  case "listar":
    listar(argv.base, argv.limite);
    break;
  case "crear":
    createFile(argv.base, argv.limite)
      .then((archivo) =>
        console.log(`Archivo creado: ${colors.green(archivo)}`)
      )
      .catch((err) => console.log(err));
    break;

  default:
    console.log("No hay comandos", comando);
}
