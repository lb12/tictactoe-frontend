# Tic Tac Toe Frontend

Webapp del famoso juego tres en raya (tic tac toe) hecho en React. Selecciona un lado (X ó O) y juega contra la máquina.

## Características y dependencias

* Uso de `React` para crear una SPA.
* Internacionalización de la web mediante `i18next`.
* Conexión con el API mediante `axios` para obtener la jugada del bot.
* Uso de `react-toasts` para mostrar mensajes de error del API.

## Configuración del proyecto
Clonar este repo en tu equipo, accede a la raíz del proyecto e instala las dependencias con npm:
```
$ git clone 'url'
$ cd tic-tac-toe-frontend
$ npm install
```

## Ejecutando la SPA
Antes de ejecutar la SPA, deberías de comprobar que tienes el API levantado (puedes encontrarlo en [mi repo de github](https://github.com/lb12/tictactoe-backend)).

Aún así puedes ejecutar la SPA si no tienes el API en caso de que quisieras echarle un ojo, arráncalo mediante el comando `npm start`.

## Acciones futuras
Planteamiento de añadir funcionalidades como:

* Refactorizar el código para usar hooks al 100% y no utilizar clases.
* Añadir un menú para seleccionar 3 modos de juego (coop, online 1v1, contra la máquina)
* Utilizar `cypress` para testear la aplicación.

## Dudas o preguntas
Si tienes alguna duda o pregunta sobre la SPA puedes contactar conmigo a través de mis redes sociales:
```
LinkedIn: https://linkedin.com/in/davidescribanorodriguez
GitHub: https://github.com/lb12
```