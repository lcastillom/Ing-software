# Ingenieria de software

Este proyecto es una aplicación que incluye un frontend en React, dos APIs en Node.js y una base de datos MySQL. La aplicación se ejecuta en contenedores Docker utilizando Docker Compose.

## Estructura del Proyecto

- `restaurant-menu-app`: Contiene el código del frontend en React.
- `api-usuarios`: Contiene el código de la API de usuarios en Node.js.
- `api-menus`: Contiene el código de la API de menus en Node.js.
- `api-reservaciones`: Contiene el código de la API de reservaciones en Node.js.
- `api-mesas`: Contiene el código de la API de mesas en Node.js.
- `docker-compose.yaml`: Archivo de configuración para Docker Compose.

## Requisitos

- Docker
- Docker Compose

## Configuración

### Variables de Entorno

Asegúrate de configurar las siguientes variables de entorno en un archivo `.env` en la raíz del proyecto:

#### API usuarios

```env
PORT=3001
IS_HTTPS=false
ORIGINS=
URL=localhost
```

#### API menus

```env
PORT=3002
IS_HTTPS=false
ORIGINS=
URL=localhost
DB_HOST=localhost
DB_USER=
DB_PASSWORD=
DB_NAME=
```
#### API reservaciones

```env
PORT=3003
IS_HTTPS=false
ORIGINS=
URL=localhost
DB_HOST=localhost
DB_USER=
DB_PASSWORD=
DB_NAME=
```
#### API mesas

```env
PORT=3004
IS_HTTPS=false
ORIGINS=
URL=localhost
DB_HOST=localhost
DB_USER=
DB_PASSWORD=
DB_NAME=
```
#### Front-end

```env
REACT_APP_API_USUARIOS_URL=http://localhost:3001/api
REACT_APP_API_MENUS_URL=http://localhost:3002/api
REACT_APP_API_RESERVACIONES_URL=http://localhost:3003/api
REACT_APP_API_MESAS_URL=http://localhost:3004/api
```