# Student Management System - Angular

Aplicación web desarrollada con Angular para la gestión de estudiantes. Este proyecto es una migración de JavaScript a Angular que demuestra el uso de componentes, servicios, y operaciones CRUD completas.

## Características

- **Gestión de Estudiantes (CRUD)**: Crear, leer, actualizar y eliminar estudiantes
- **Interfaz Moderna**: Diseño responsive con Bootstrap y ng-bootstrap
- **Modal de Edición**: Ventana modal para editar información de estudiantes
- **Validación de Formularios**: Validación básica de campos requeridos
- **Confirmación de Eliminación**: Diálogo de confirmación antes de eliminar registros

## Tecnologías Utilizadas

- Angular 14.2.0
- TypeScript 4.7.2
- Bootstrap 5.2.0
- ng-bootstrap 13.1.0
- RxJS 7.5.0
- HttpClient para comunicación con API REST

## Requisitos Previos

- Node.js (versión 14 o superior)
- npm o yarn
- Angular CLI 14.2.5

## Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd "TP Angular - Diseño Web"
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura la URL de la API (opcional):
   - Edita `src/environments/environment.ts`
   - Por defecto, el proyecto usa **datos mock** (`useMock: true`)
   - Para usar un backend real, cambia `useMock: false` y actualiza `apiUrl`

## Uso

### Ejecutar en modo desarrollo

```bash
npm start
# o
ng serve
```

La aplicación se abrirá en `http://localhost:4200/`

### Compilar para producción

```bash
npm run build
```

Los archivos compilados se generarán en el directorio `dist/test`

## Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   └── student-list/       # Componente principal de lista de estudiantes
│   ├── models/
│   │   └── student.ts          # Modelo de datos Student
│   ├── services/
│   │   └── student.service.ts  # Servicio para comunicación con API
│   ├── app.component.*         # Componente raíz
│   └── app.module.ts           # Módulo principal
├── assets/                     # Recursos estáticos
└── environments/               # Configuración de entornos
    ├── environment.ts          # Ambiente de desarrollo
    └── environment.prod.ts     # Ambiente de producción
```

## Componentes

### StudentListComponent
Componente principal que muestra la lista de estudiantes en una tabla HTML. Incluye:
- Tabla con información de estudiantes
- Formulario inline para agregar nuevos estudiantes
- Botones para ver/editar y eliminar
- Modal para editar información

### StudentService
Servicio que maneja todas las operaciones HTTP:
- `getAll()`: Obtiene todos los estudiantes
- `save(student)`: Crea un nuevo estudiante
- `edit(student)`: Actualiza un estudiante existente
- `delete(id)`: Elimina un estudiante

## Modelo de Datos

```typescript
export class Student {
    id: number
    dni: string
    lastName: string
    firstName: string
    email: string
    cohort: number
    status: string
    gender: string
    address: string
    phone: string
}
```

## API Endpoints

La aplicación espera los siguientes endpoints en el backend:

- `GET /student/getAll` - Obtener todos los estudiantes
- `POST /student` - Crear nuevo estudiante
- `POST /student/{id}/update` - Actualizar estudiante
- `POST /student/{id}/delete` - Eliminar estudiante

## Configuración

### Variables de Entorno

En `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  apiUrl: 'https://tu-api-url.com',
  useMock: true  // true = usar datos mock, false = usar backend real
};
```

**Nota:** El proyecto viene configurado con `useMock: true` por defecto, lo que permite probarlo sin necesidad de un backend. Incluye 3 estudiantes de ejemplo que se pueden crear, editar y eliminar.

## Mejoras Implementadas

- ✅ Uso correcto de Environment variables
- ✅ Eliminación de dependencias de `document` y `location.reload()`
- ✅ Uso de `ViewChild` para referencia a elementos DOM
- ✅ Separación de estilos CSS de los templates HTML
- ✅ Confirmación antes de eliminar registros
- ✅ Refactorización de código para mejores prácticas
- ✅ Implementación de servicio mock para funcionamiento sin backend
- ✅ Configuración TypeScript optimizada

## Scripts Disponibles

- `npm start` - Inicia el servidor de desarrollo
- `npm run build` - Compila para producción
- `npm test` - Ejecuta las pruebas unitarias
- `npm run watch` - Compila y observa cambios

## Próximas Mejoras Sugeridas

- [ ] Implementar validación de formularios más robusta
- [ ] Agregar paginación para grandes cantidades de datos
- [ ] Implementar búsqueda/filtrado de estudiantes
- [ ] Agregar manejo de errores más elegante (toasts, notificaciones)
- [ ] Implementar tests unitarios y de integración
- [ ] Agregar loading states durante las peticiones HTTP

## Autor

Proyecto de migración JavaScript a Angular

## Licencia

Este proyecto es de uso educativo
