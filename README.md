# Multiplicar Console App

Es una simple aplicación de consola hecha en NodeJs

Esta aplicación tiene dos comandos *crear* y *listar*; los cuales crean un archivo de texto con una tabla de multiplicar y listar una tabla de multiplicar en la consola respectivamente.

## Uso

Para correr la aplicación simplemente ingresa en tu consola de comandos:
> node app < comando >  -- base  [ limite (opcional) ]

Como se puede opbservar, la aplicación acepta dos parametros,  la base de la multiplicación, la cual es **obligatorio pasar**. Y el limite de la multiplicación, este ultimo es opcional y tiene por **defecto un valor de 10**.

### Listar

Para usar el comando listar use la estructura de comando en consola
> node app listar --base < valor de la base >

Ejemplo de la tabla de 8 x 9

> node app listar --base 8 --limite 9



### Crear

Para crear un archivo de texto use la estructura de comando en la consola
> node app crear --base < valor de la base >

Ejemplo 
> node app crear --base 5
 
Por defecto, el limite de la tabla es 10. Para establece un nuevo limite pasa el nuevo limite como parametro.
> node app crear --base 5 --limite 25
