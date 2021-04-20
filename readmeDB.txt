La base de datos "api" esta conformada por 2 tablas las cuales se crean de manera automatica al ejecutar el codigo, la primera tabla es llamada "item", y la segunda
es llamada "tipo", la tabla "item" esta conformada por 3 columnas, la primera llamada uuid(esta columna crea un id unico por objeto creado), la segunda tabla es "text"
(en esta columna se ven insertados los nombres de los productos), la tercera columna es "price"(en esta columna se ven insertados los precios de los productos).
la segunda tabla es llamada "tipo", esta tabla esta conformada por 2 columnas, la primera uuid(esta columna crea un id unico por objeto creado en la tabla "tipo")
y la segunda columna es la columna "name"(en esta columna se ven insertados los nombres de la tabla "tipo"), ambas tablas estan relacionadas, siendo la tabla "item"
la principal, para asi mediante el metodo "include" pueda verse visualizado por el metodo http GET, tanto el contenido de la tabla "item", como el contenido de la tabla
"tipo" mediante parametros que se pueden definir.