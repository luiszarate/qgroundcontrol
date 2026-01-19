# 📚 Recursos de Aprendizaje de CMake

Bienvenido a tu centro de aprendizaje de CMake basado en el proyecto QGroundControl.

---

## 🎯 Contenido Disponible

### 1. 📖 [Guía Completa de CMake](GUIA_CMAKE.md)
**Recomendado para empezar aquí**

Una guía exhaustiva que cubre:
- ¿Qué es CMake y por qué usarlo?
- Conceptos fundamentales
- Comandos esenciales
- Variables y targets
- Funciones y macros
- Organización de proyectos grandes
- Ejemplos del proyecto QGroundControl
- Mejores prácticas

**Tiempo estimado:** 2-3 horas de lectura

---

### 2. 📝 [Cheat Sheet - Referencia Rápida](CMAKE_CHEATSHEET.md)
**Consulta rápida cuando necesites recordar sintaxis**

Referencia rápida con:
- Comandos de terminal más usados
- Sintaxis de comandos CMake
- Variables importantes
- Condicionales y bucles
- Generator expressions
- Tips y trucos

**Uso:** Referencia rápida durante el desarrollo

---

### 3. 💻 [Ejemplos Prácticos](ejemplos/)
**Practica con código real**

Tres ejemplos progresivos con código completo y comentado:

#### [01_basico/](ejemplos/01_basico/)
- Nivel: Principiante
- Conceptos: Estructura básica, ejecutables
- Tiempo: 15 minutos

#### [02_biblioteca/](ejemplos/02_biblioteca/)
- Nivel: Intermedio
- Conceptos: Bibliotecas, enlace, includes
- Tiempo: 30 minutos

#### [03_subdirectorios/](ejemplos/03_subdirectorios/)
- Nivel: Avanzado
- Conceptos: Modularización, opciones, proyectos grandes
- Tiempo: 45 minutos

Ver [ejemplos/README.md](ejemplos/README.md) para instrucciones detalladas.

---

## 🚀 Ruta de Aprendizaje Recomendada

### Para Principiantes Absolutos

1. **Lee la Guía Completa** (secciones 1-4)
   - ¿Qué es CMake?
   - Conceptos fundamentales
   - Estructura básica
   - Comandos esenciales

2. **Practica con Ejemplo 01**
   ```bash
   cd custom/ejemplos/01_basico
   cmake -S . -B build
   cmake --build build
   ./build/hola_mundo
   ```

3. **Lee la Guía** (secciones 5-6)
   - Variables en CMake
   - Targets

4. **Practica con Ejemplo 02**
   ```bash
   cd custom/ejemplos/02_biblioteca
   cmake -S . -B build
   cmake --build build
   ./build/calculadora
   ```

### Para Nivel Intermedio

1. **Lee la Guía** (secciones 7-8)
   - Funciones y macros
   - Organización de proyectos

2. **Practica con Ejemplo 03**
   ```bash
   cd custom/ejemplos/03_subdirectorios
   cmake -S . -B build -DBUILD_UTILS=ON
   cmake --build build
   ./build/bin/mi_aplicacion
   ```

3. **Analiza el CMakeLists.txt de QGroundControl**
   - Lee `/CMakeLists.txt` (líneas 1-150)
   - Lee `cmake/Helpers.cmake`
   - Identifica patrones y técnicas avanzadas

### Para Nivel Avanzado

1. **Explora módulos CMake del proyecto**
   - `cmake/Toolchain.cmake`
   - `cmake/BuildConfig.cmake`
   - `cmake/modules/CPM.cmake`

2. **Analiza builds específicas de plataforma**
   - Configuración de macOS (líneas 64-71 de CMakeLists.txt)
   - Configuración de Android
   - Configuración de Windows

3. **Estudia la integración Qt**
   - Busca archivos relacionados con Qt6 en el proyecto

---

## 📊 Diagrama de Flujo de Aprendizaje

```
Principiante
    ↓
[Guía Completa - Básicos]
    ↓
[Ejemplo 01: Hola Mundo]
    ↓
[Guía - Variables y Targets]
    ↓
[Ejemplo 02: Bibliotecas]
    ↓
Intermedio
    ↓
[Guía - Funciones y Organización]
    ↓
[Ejemplo 03: Modular]
    ↓
[Analizar QGroundControl CMakeLists.txt]
    ↓
Avanzado
    ↓
[Explorar módulos cmake/]
    ↓
[Crear tu propio proyecto complejo]
    ↓
Experto! 🎓
```

---

## 🎯 Ejercicios Prácticos

### Ejercicio 1: Modificar Ejemplo Básico
**Archivo:** `ejemplos/01_basico/`

Modifica el programa para:
1. Imprimir tu nombre
2. Cambiar el nombre del ejecutable a "mi_programa"
3. Usar C++20 en lugar de C++17

<details>
<summary>💡 Ver solución</summary>

```cmake
cmake_minimum_required(VERSION 3.25)
project(EjemploBasico VERSION 1.0.0 LANGUAGES CXX)

add_executable(mi_programa main.cpp)

set_target_properties(mi_programa PROPERTIES
    CXX_STANDARD 20
    CXX_STANDARD_REQUIRED ON
)
```
</details>

---

### Ejercicio 2: Extender Biblioteca
**Archivo:** `ejemplos/02_biblioteca/`

Agrega dos nuevas funciones:
1. `modulo(a, b)` - Resto de división
2. `potencia(base, exp)` - Potencia

<details>
<summary>💡 Ver pista</summary>

1. Agrega las declaraciones en `include/matematicas.h`
2. Implementa en `src/matematicas.cpp`
3. Usa en `src/main.cpp`
4. No necesitas modificar `CMakeLists.txt`
</details>

---

### Ejercicio 3: Nuevo Módulo
**Archivo:** `ejemplos/03_subdirectorios/`

Crea un nuevo módulo `logger`:
1. Directorio `logger/` con su `CMakeLists.txt`
2. Funciones `log_info()`, `log_error()`
3. Opción `BUILD_LOGGER` para habilitarlo
4. Úsalo en la aplicación principal

<details>
<summary>💡 Ver estructura</summary>

```
03_subdirectorios/
├── logger/
│   ├── CMakeLists.txt
│   ├── logger.h
│   └── logger.cpp
├── CMakeLists.txt (modificar)
└── app/
    ├── CMakeLists.txt (modificar)
    └── main.cpp (modificar)
```
</details>

---

## 🔍 Explorando QGroundControl

### Archivos CMake Importantes

| Archivo | Descripción | Nivel |
|---------|-------------|-------|
| `/CMakeLists.txt` | CMake principal del proyecto | Avanzado |
| `cmake/Helpers.cmake` | Funciones helper personalizadas | Intermedio |
| `cmake/Toolchain.cmake` | Configuración de compilador | Avanzado |
| `test/*/CMakeLists.txt` | Ejemplos de tests | Intermedio |

### Buscar Ejemplos Específicos

```bash
# Buscar uso de target_sources
grep -r "target_sources" --include="CMakeLists.txt"

# Buscar funciones personalizadas
grep -r "^function(" cmake/

# Buscar opciones del proyecto
grep -r "^option(" --include="*.cmake"
```

---

## 📚 Recursos Externos

### Documentación Oficial
- [CMake Documentation](https://cmake.org/documentation/)
- [CMake Tutorial](https://cmake.org/cmake/help/latest/guide/tutorial/index.html)
- [CMake Command Reference](https://cmake.org/cmake/help/latest/manual/cmake-commands.7.html)

### Libros Recomendados
- "Professional CMake: A Practical Guide" - Craig Scott
- "Mastering CMake" - Ken Martin, Bill Hoffman

### Comunidad
- [CMake Discourse](https://discourse.cmake.org/)
- [Stack Overflow - CMake Tag](https://stackoverflow.com/questions/tagged/cmake)
- [Reddit - r/cmake](https://www.reddit.com/r/cmake/)

---

## 🛠️ Herramientas Útiles

### IDEs con Soporte CMake
- **CLion**: Soporte CMake nativo
- **Visual Studio Code**: Extensión CMake Tools
- **Visual Studio**: Proyectos CMake integrados
- **Qt Creator**: Excelente soporte CMake

### Herramientas de Línea de Comandos
```bash
# ccache: Acelera compilaciones
sudo apt install ccache

# ninja: Build system más rápido que make
sudo apt install ninja-build

# cmake-gui: Interfaz gráfica
sudo apt install cmake-gui
```

---

## 💡 Consejos Finales

### ✅ Buenas Prácticas

1. **Siempre usa out-of-source builds**
   ```bash
   cmake -S . -B build  # ✅
   ```

2. **Lee los mensajes de error cuidadosamente**
   - CMake da mensajes de error muy descriptivos

3. **Usa `message()` para debugging**
   ```cmake
   message(STATUS "Variable: ${MI_VAR}")
   ```

4. **Consulta la documentación**
   ```bash
   cmake --help-command target_link_libraries
   ```

5. **Aprende de proyectos reales**
   - QGroundControl (este proyecto)
   - Qt
   - OpenCV
   - LLVM

---

### ❌ Errores Comunes a Evitar

1. ❌ Compilar en el directorio de código fuente
2. ❌ Usar `file(GLOB)` para archivos fuente
3. ❌ No especificar PUBLIC/PRIVATE/INTERFACE
4. ❌ Usar comandos antiguos (link_libraries, include_directories)
5. ❌ No usar targets modernos

---

## 🎓 Certificación de Conocimiento

### Nivel Básico ⭐
- [ ] Puedes crear un CMakeLists.txt básico
- [ ] Entiendes `project()` y `add_executable()`
- [ ] Sabes compilar un proyecto simple
- [ ] Entiendes variables básicas como `${PROJECT_NAME}`

### Nivel Intermedio ⭐⭐
- [ ] Puedes crear y enlazar bibliotecas
- [ ] Entiendes PUBLIC/PRIVATE/INTERFACE
- [ ] Sabes usar `target_*` comandos
- [ ] Puedes organizar proyectos en subdirectorios

### Nivel Avanzado ⭐⭐⭐
- [ ] Creas funciones CMake reutilizables
- [ ] Usas generator expressions correctamente
- [ ] Entiendes políticas de CMake
- [ ] Puedes gestionar dependencias externas
- [ ] Configuras builds multiplataforma

---

## 📞 Soporte

Si tienes preguntas:
1. Consulta la [Guía Completa](GUIA_CMAKE.md)
2. Revisa el [Cheat Sheet](CMAKE_CHEATSHEET.md)
3. Analiza los [ejemplos](ejemplos/)
4. Busca en la documentación oficial
5. Pregunta en la comunidad de CMake

---

**¡Éxito en tu aprendizaje de CMake!** 🚀

*Última actualización: 2026-01-19*
