

Lunes 2025/01/27 3. Pagina web simple con JavaScript puro

# Evaluación Técnica: "Mini API o Aplicación Dinámica"

# Desarrollar una página web con HTML, CSS y JavaScript puro


Enunciado:

Crea una pequeña aplicación o servicio que permita realizar lo siguiente:

1. Registrar usuarios: Los datos del usuario deben incluir al menos nombre, correo
electrónico y edad.
2. Listar usuarios registrados: Devuelve todos los usuarios registrados.

# Resolución de la evaluación By Olga Viviana

Guía paso a paso para crear una página web simple con JavaScript puro.

Paso 1: Configurar el entorno


1.	Crear un nuevo directorio para tu proyecto y navegar a él:

    bash
    mkdir mi_pagina_web
    cd mi_pagina_web
 
#------------------

Paso 2: Escribir el HTML

Abre tu editor de texto favorito y crea el archivo index.html
 
#------------------

Paso 3: Añadir estilos
Crea el archivo styles.css para darle estilo a tu página

#------------------ 

Paso 4: Escribir el JavaScript
Crea el archivo script.js para manejar la lógica de registro de usuarios.

#------------------
 

Paso 5: Abrir la página en el navegador
1.	Navega al directorio donde creaste tus archivos.
2.	Abre el archivo index.html en tu navegador. Esto se puede hacer arrastrando el archivo al navegador o utilizando la opción "Abrir archivo" desde el menú del navegador.
 
#------------------

Subir proyecto a repositorio GITHUB

En mi cuenta de github web creo un nuevo repositorio “html-css-javascript-puro”
En la terminal del proyecto escribo el comando:

    git init

 

Creo el archivo “readme.md” donde voy a resumir el enunciado de la evaluación técnica y mi resolución.

En la terminal del proyecto escribo los comandos:

    echo "# html-css-javascript-puro" >> README.md

Edito el archivo "readme.md".

Luego continúo ejecutando los comandos para añadir el archivo "readme.md" al repositorio:

    git add README.md
    git commit -m "Inicio con el archivo readme.md"
    git branch -M main
    git remote add origin https://github.com/vdviviana/html-css-javascript-puro.git
    git push -u origin main


Crear archivo “.gitignore”
Añado las librerías y dependencias
 

Añadir archivo “.gitignore" al repositorio web:

    git add .gitignore
    git commit -m "Añadiendo .gitignore para excluir dependencias y archivos innecesarios"
    git push

Para añadir el resto de todo el proyecto (los archivos html, css, y javascript) al Repositorio, escribo en la terminal de Visual Studio los siguientes comandos:

    git add .
    git commit -m "Subiendo los archivos html, css, y javascript"
    git push


#----------- FIN *:・ﾟ ₍ᐢ•ﻌ•ᐢ₎*:・ﾟ -------