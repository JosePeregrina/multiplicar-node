const argv = require("yargs")
  .command("listar", "Imprime en consola la tabla de multiplicar")
  .command("crear", "Crear un archivo con la tabla de multiplicar")
  .options({
    base: {
      alias: "b",
      demandOption: true,
    },
    limite: {
      alias: "li",
      default: 10,
    },
  })
  .help().argv;

module.exports = {
    argv
}
