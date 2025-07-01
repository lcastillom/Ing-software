# Restaurant Tables API

REST API para la gestión de mesas de un restaurante usando Node.js, Express, Sequelize y MySQL.

## Estructura del Proyecto

restaurant-api-mesas 
├── src
│ ├── app.js # Punto de entrada de la aplicación 
│ ├── config 
│ │ └── db.js # Configuración de la base de datos 
│ ├── controllers 
│ │ └── mesaController.js 
│ ├── models 
│ │ └── mesa.js 
│ └── routes 
│ └── mesaRoutes.js 
├── .env # Variables de entorno 
├── .gitignore # Archivos ignorados por git 
├── package.json # Configuración de NPM 
└── README.md # Documentación del proyecto

## Instalación

1. Clona el repositorio:
    ...
    git clone <repository-url>
    ...
2. Entra al directorio del proyecto:
    ...
    cd api-mesas
    ...   
3. Instala las dependencias:
    ...
    npm install 
    ...


## Uso

1. Crea un archivo `.env` en la raíz del proyecto y agrega tus variables de entorno (ver ejemplo en `.env`).

2. Inicia el servidor:

3. La API estará disponible en `http://localhost:3004`.

## Endpoints

- `GET /mesas` - Obtener todas las mesas
- `POST /mesas` - Crear una nueva mesa
- `PUT /mesas/:id` - Actualizar una mesa existente
- `DELETE /mesas/:id` - Eliminar una mesa

## Contribuciones

¡Las contribuciones son bienvenidas! Abre un issue o un pull request para mejoras o correcciones.

## Licencia

Este proyecto está licenciado bajo la MIT