# 📚 Ejemplos Prácticos de CMake

Esta carpeta contiene ejemplos progresivos para aprender CMake desde cero.

---

## 📂 Estructura de Ejemplos

### 01_basico
**Nivel:** Principiante
**Conceptos:** `cmake_minimum_required`, `project`, `add_executable`

Un programa "Hola Mundo" básico que muestra la estructura mínima de un proyecto CMake.

**Compilar:**
```bash
cd 01_basico
cmake -S . -B build
cmake --build build
./build/hola_mundo
```

---

### 02_biblioteca
**Nivel:** Intermedio
**Conceptos:** `add_library`, `target_link_libraries`, `target_include_directories`

Muestra cómo crear una biblioteca y enlazarla con un ejecutable. Demuestra el uso de `PUBLIC` y `PRIVATE`.

**Compilar:**
```bash
cd 02_biblioteca
cmake -S . -B build
cmake --build build
./build/calculadora
```

**Estructura:**
```
02_biblioteca/
├── CMakeLists.txt
├── include/
│   └── matematicas.h      # Headers públicos
└── src/
    ├── matematicas.cpp    # Implementación de biblioteca
    └── main.cpp           # Aplicación principal
```

---

### 03_subdirectorios
**Nivel:** Avanzado
**Conceptos:** `add_subdirectory`, `option`, compilación condicional

Proyecto modular con múltiples subdirectorios, cada uno con su propio CMakeLists.txt. Demuestra:
- Organización de proyectos grandes
- Opciones de compilación (`BUILD_UTILS`, `BUILD_TESTS`)
- Compilación condicional

**Compilar (con utilidades):**
```bash
cd 03_subdirectorios
cmake -S . -B build -DBUILD_UTILS=ON
cmake --build build
./build/bin/mi_aplicacion
```

**Compilar (sin utilidades):**
```bash
cmake -S . -B build -DBUILD_UTILS=OFF
cmake --build build
./build/bin/mi_aplicacion
```

**Estructura:**
```
03_subdirectorios/
├── CMakeLists.txt          # CMake principal
├── core/
│   ├── CMakeLists.txt
│   ├── core.h
│   └── core.cpp
├── utils/
│   ├── CMakeLists.txt
│   ├── utils.h
│   └── utils.cpp
└── app/
    ├── CMakeLists.txt
    └── main.cpp
```

---

## 🎯 Ruta de Aprendizaje Recomendada

1. **Ejemplo 01 (basico)**: Compila y ejecuta para entender el flujo básico
2. **Ejemplo 02 (biblioteca)**: Aprende a crear y usar bibliotecas
3. **Ejemplo 03 (subdirectorios)**: Entiende proyectos modulares grandes
4. **Proyecto QGroundControl**: Analiza el CMakeLists.txt principal para ver técnicas avanzadas

---

## 🛠️ Comandos Útiles

### Configuración con opciones
```bash
# Ver todas las opciones disponibles
cmake -S . -B build -LAH

# Configurar tipo de compilación
cmake -S . -B build -DCMAKE_BUILD_TYPE=Debug
cmake -S . -B build -DCMAKE_BUILD_TYPE=Release

# Activar/desactivar opciones
cmake -S . -B build -DBUILD_UTILS=ON -DBUILD_TESTS=OFF
```

### Compilación
```bash
# Compilación paralela (más rápido)
cmake --build build --parallel 8

# Modo verbose (ver comandos completos)
cmake --build build --verbose

# Compilar solo un target específico
cmake --build build --target mi_aplicacion
```

### Limpieza
```bash
# Limpiar compilación
cmake --build build --target clean

# Eliminar todo el directorio de compilación
rm -rf build/
```

---

## 📖 Conceptos Clave por Ejemplo

### Ejemplo 01
- ✅ Estructura básica de CMakeLists.txt
- ✅ Creación de ejecutables
- ✅ Configuración de estándar C++

### Ejemplo 02
- ✅ Creación de bibliotecas estáticas
- ✅ Enlace de bibliotecas con ejecutables
- ✅ Gestión de directorios include
- ✅ Diferencia entre PUBLIC y PRIVATE

### Ejemplo 03
- ✅ Modularización con subdirectorios
- ✅ Opciones configurables (`option`)
- ✅ Compilación condicional (`if`)
- ✅ Organización de proyectos grandes
- ✅ Variables globales del proyecto
- ✅ Configuración de directorios de salida

---

## 🚀 Ejercicios Propuestos

### Ejercicio 1: Extender Ejemplo 02
Agrega las siguientes funciones a la biblioteca `matematicas`:
- `potencia(base, exponente)`
- `raizCuadrada(numero)`

### Ejercicio 2: Nuevo Módulo
En el Ejemplo 03, crea un nuevo módulo llamado `logger` que:
- Sea opcional (controlado por `BUILD_LOGGER`)
- Tenga funciones para escribir logs
- Se enlace con la aplicación principal

### Ejercicio 3: Crear tu Propio Proyecto
Crea un proyecto desde cero con:
- Una biblioteca que procese cadenas de texto
- Un ejecutable que use esa biblioteca
- Opciones de compilación para diferentes características

---

## 📚 Referencias

- **Guía Principal**: Ver `GUIA_CMAKE.md` en el directorio `custom/`
- **Proyecto Real**: Analizar `/CMakeLists.txt` del proyecto QGroundControl
- **Documentación Oficial**: https://cmake.org/documentation/

---

¡Éxito en tu aprendizaje de CMake! 🎓
