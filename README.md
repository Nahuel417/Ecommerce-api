# 👋 API de Gestión de E-commerce!

## 📝 Descripción  
Esta API está diseñada para gestionar las principales funcionalidades de un sistema de e-commerce. Permite administrar productos, autenticar usuarios y procesar pedidos de manera eficiente, utilizando herramientas modernas y seguras.

## 🎯 Objetivos del Proyecto  
- **Gestión de productos**: Crear, editar, eliminar y listar productos en la tienda.  
- **Autenticación y autorización**: Garantizar acceso seguro mediante JWT y roles (admin y usuario).  
- **Procesamiento de pedidos**: Crear pedidos vinculados a usuarios registrados.  
- **Documentación interactiva**: Proveer documentación detallada mediante Swagger para facilitar la integración de clientes.  
- **Escalabilidad y despliegue**: Implementar contenedores Docker para facilitar el despliegue y la escalabilidad.  
- **Almacenamiento seguro de archivos**: Usar Cloudinary para la carga y gestión de imágenes de productos.  

## 💻 Tecnologías Utilizadas  

### Lenguajes de Programación  
- **TypeScript**: Aporta tipado estático para un código más robusto y mantenible.  

### Back-End  
- **NestJS**: Framework para construir aplicaciones del lado del servidor de manera modular y escalable.  
- **TypeORM**: ORM para interactuar con la base de datos PostgreSQL.  
- **PostgreSQL**: Base de datos relacional para almacenar la información de productos, usuarios y pedidos.  
- **JWT**: Para la autenticación y autorización de usuarios.  
- **Swagger**: Documentación de la API interactiva.  
- **Cloudinary**: Almacenamiento de imágenes en la nube. 

### ⚙ Herramientas de Desarrollo  
- **Docker**: Para contenerización y despliegue eficiente.  
- **ESLint y Prettier**: Para mantener la calidad del código.  

## 🚀 Despliegue en Producción
El proyecto está desplegado y accesible públicamente. Puedes acceder a la aplicación en el siguiente enlace:

[**https://ecommerce-api-mbho.onrender.com/api**](https://ecommerce-api-mbho.onrender.com/api)

### Tecnologías utilizadas para el despliegue:
- **Docker**: Contenedorización del backend y la base de datos.
- **Cloudinary**: Gestión de imágenes para productos.
- **PostgreSQL**: Base de datos relacional para almacenar la información.
- **Servidor de Producción**: [Render]

### Cómo probar el despliegue:
- Accede al enlace proporcionado.
- Usa las siguientes credenciales para probar funcionalidades específicas (si aplica):
  - Usuario de prueba:
    - **Email:** `testuser@demo.com`
    - **Contraseña:** `123456`
  - Administrador de prueba:
    - **Email:** `admin@demo.com`
    - **Contraseña:** `admin123`

### Consideraciones:
- **Ambiente de producción**: Configurado con variables de entorno protegidas.
