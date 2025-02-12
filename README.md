# Laredu - Plataforma Escolar con Laravel 11 y React 19

## Introducción
Laredu es una plataforma escolar desarrollada con **Laravel 11** y **React 19** que permite gestionar usuarios, cursos, asignaturas, evaluaciones, tareas, asistencia, eventos del calendario, mensajería interna, roles y permisos.

El objetivo es construir una **API REST** robusta y segura, junto con un **frontend moderno y responsivo**, siguiendo buenas prácticas de desarrollo.

### Características principales:
- **Registro e inicio de sesión seguro** con Laravel Sanctum.
- **Administración de cursos y asignaturas** para estudiantes y docentes.
- **Creación y gestión de tareas** con calificaciones.
- **Gestor de eventos del calendario** con FullCalendar.js.
- **Mensajería interna** entre usuarios.
- **Asignación y gestión de roles y permisos**.

---

## Tecnologías Utilizadas

| Tecnología        | Uso en el Proyecto                |
|--------------------|---------------------------------|
| Laravel 11        | Backend y API REST             |
| React 19 + TS     | Frontend dinámico              |
| MySQL            | Base de datos relacional       |
| Laravel Sanctum  | Autenticación API segura      |
| Tailwind CSS 4   | Diseño moderno y responsivo   |
| FullCalendar.js  | Gestión de eventos y calendario |

---

## Instalación y Configuración

### **Requisitos previos:**
- PHP 8.2 o superior
- Composer
- MySQL 8 o MariaDB
- Node.js y npm
- (Opcional) Laragon en Windows

### **Instalar Laravel 11**
Ejecuta los siguientes comandos:
```sh
# Crear el proyecto en la carpeta "backend"
composer create-project laravel/laravel backend

# Moverse a la carpeta del proyecto
cd backend

# Iniciar el servidor de desarrollo
php artisan serve
```
Si todo está correcto, deberías ver:
```
Application running at http://127.0.0.1:8000
```

### **Configurar la Base de Datos**
Edita el archivo `.env` para configurar la base de datos:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laredu
DB_USERNAME=root
DB_PASSWORD=
```

> **Nota:** Si usas Laragon, XAMPP o WAMP, la contraseña puede estar vacía.

---

## Definición de la Base de Datos

Laredu maneja más de **20 tablas** para gestionar cursos, usuarios, asignaturas, evaluaciones, asistencia, eventos, permisos, logs y más.

### **Estructura de Tablas**

#### 1. **Gestión de Usuarios y Roles**
| Tabla        | Descripción |
|-------------|-------------|
| users       | Almacena información de usuarios. |
| roles       | Define roles como admin, profesor, estudiante. |
| user_roles  | Relación entre usuarios y roles. |

#### 2. **Gestión Académica**
| Tabla        | Descripción |
|-------------|-------------|
| courses     | Cursos académicos. |
| subjects    | Asignaturas dentro de un curso. |
| course_user | Relación muchos a muchos entre cursos y usuarios. |

#### 3. **Evaluaciones y Entregas**
| Tabla       | Descripción |
|------------|-------------|
| assignments | Tareas y exámenes creados por profesores. |
| submissions | Registra las entregas de tareas. |
| grades      | Almacena calificaciones. |

#### 4. **Gestión de Horarios y Asistencia**
| Tabla            | Descripción |
|-----------------|-------------|
| calendar_events | Eventos del calendario. |
| attendance      | Registro de asistencia. |

#### 5. **Sistema de Permisos**
| Tabla            | Descripción |
|-----------------|-------------|
| permissions     | Lista de permisos. |
| role_permissions | Relación entre roles y permisos. |

#### 6. **Comunicación y Notificaciones**
| Tabla       | Descripción |
|------------|-------------|
| messages   | Mensajes privados entre usuarios. |
| notifications | Notificaciones del sistema. |

#### 7. **Auditoría y Registro de Errores**
| Tabla          | Descripción |
|--------------|-------------|
| logs         | Registro de eventos del sistema. |
| activity_logs | Guarda cambios en la plataforma. |

---

## Creación de Migraciones en Laravel 11
Para generar las tablas, ejecuta:
```sh
php artisan migrate
```
Para generar datos de ejemplo, ejecuta:
```sh
php artisan db:seed
```
O descarga e importa el archivo Laredu.sql en backend/database/laredu.sql
---

## Licencia
Este proyecto está bajo la licencia MIT. Para más información, consulta el archivo [LICENSE](LICENSE).

---

## Contribuciones
Las contribuciones son bienvenidas. Si deseas colaborar, por favor sigue estos pasos:
1. Realiza un **fork** del repositorio.
2. Crea una rama (`git checkout -b feature-nueva-funcionalidad`).
3. Realiza los cambios y confirma los commits (`git commit -m 'Agrega nueva funcionalidad'`).
4. Sube los cambios (`git push origin feature-nueva-funcionalidad`).
5. Abre un **pull request**.

---