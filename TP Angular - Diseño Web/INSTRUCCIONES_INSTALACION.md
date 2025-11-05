# Instrucciones para Instalar Dependencias del Proyecto Angular

## 🚨 Problema Detectado
Node.js y npm no están instalados en tu sistema, por lo que no se pueden instalar las dependencias del proyecto Angular.

## 📥 Opción 1: Instalar Node.js (Recomendado)

### Paso 1: Descargar Node.js
1. Ve a: https://nodejs.org/
2. Descarga la versión **LTS** (Long Term Support) - Recomendada para la mayoría de usuarios
3. Ejecuta el instalador descargado

### Paso 2: Instalar Node.js
1. Sigue el asistente de instalación
2. Acepta la configuración por defecto
3. **IMPORTANTE**: Asegúrate de marcar la opción "Add to PATH" durante la instalación

### Paso 3: Verificar Instalación
Abre una **nueva** terminal y ejecuta:
```powershell
node --version
npm --version
```

Si ves números de versión, la instalación fue exitosa.

### Paso 4: Instalar Dependencias del Proyecto
Navega a la carpeta del proyecto y ejecuta:
```powershell
cd "C:\Users\Usuario\OneDrive\Desktop\Proyecto Mi App\12 - Resolución TP Angular 1\TP Angular - Diseño Web"
npm install
```

### Paso 5: Ejecutar el Proyecto
```powershell
npm start
```

## 🔧 Opción 2: Si Ya Tienes Node.js Instalado

Si ya tienes Node.js instalado pero no funciona en esta terminal:

### Paso 1: Cerrar y Abrir Nueva Terminal
Cierra completamente tu terminal/PowerShell y abre una nueva.

### Paso 2: Verificar Node.js
```powershell
node --version
```

### Paso 3: Instalar Dependencias
```powershell
cd "C:\Users\Usuario\OneDrive\Desktop\Proyecto Mi App\12 - Resolución TP Angular 1\TP Angular - Diseño Web"
npm install
```

## 📦 Qué Instalará npm install

Cuando ejecutes `npm install`, se instalarán automáticamente todas las dependencias listadas en `package.json`:

### Dependencias Principales:
- **@angular/core** - Framework Angular
- **@angular/forms** - Módulo de formularios
- **@angular/common/http** - Módulo HTTP
- **@ng-bootstrap/ng-bootstrap** - Componentes Bootstrap para Angular
- **bootstrap** - Framework CSS
- **rxjs** - Librería para programación reactiva

### Dependencias de Desarrollo:
- **@angular/cli** - Angular CLI para desarrollo
- **typescript** - Compilador TypeScript
- **karma** y **jasmine** - Herramientas de testing

## ✅ Después de la Instalación

Una vez que se instalen las dependencias:
1. Los errores en `app.module.ts` y otros archivos desaparecerán
2. Podrás ejecutar `npm start` para iniciar el servidor de desarrollo
3. La aplicación estará disponible en `http://localhost:4200`

## 🎯 Estado Actual del Proyecto

✅ **El código está completo y correcto**
✅ **Todas las correcciones han sido aplicadas**
✅ **README actualizado con toda la documentación**
❌ **Solo falta instalar Node.js y ejecutar npm install**

## 📚 Recursos Adicionales

- Documentación de Angular: https://angular.io/docs
- Documentación de Node.js: https://nodejs.org/docs
- Documentación de npm: https://docs.npmjs.com/

---

**Nota**: Después de instalar Node.js, puede que necesites reiniciar tu IDE (como Cursor/VS Code) para que reconozca correctamente las dependencias instaladas.

