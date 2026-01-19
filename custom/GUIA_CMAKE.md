# 🎯 Guía Completa de CMake
## Aprendiendo con QGroundControl como Ejemplo

---

## 📚 Tabla de Contenidos

1. [¿Qué es CMake?](#qué-es-cmake)
2. [Conceptos Fundamentales](#conceptos-fundamentales)
3. [Estructura Básica de CMakeLists.txt](#estructura-básica)
4. [Comandos Esenciales](#comandos-esenciales)
5. [Variables en CMake](#variables-en-cmake)
6. [Targets (Objetivos)](#targets)
7. [Funciones y Macros](#funciones-y-macros)
8. [Organización de Proyectos Grandes](#organización-de-proyectos-grandes)
9. [Ejemplos del Proyecto QGroundControl](#ejemplos-qgroundcontrol)
10. [Mejores Prácticas](#mejores-prácticas)

---

## ¿Qué es CMake?

**CMake** (Cross-Platform Make) es un sistema de construcción multiplataforma que genera archivos nativos de compilación para diferentes plataformas:

- **Linux/Unix**: Genera Makefiles
- **Windows**: Genera archivos de Visual Studio (.sln) o Ninja
- **macOS**: Genera Xcode projects o Makefiles

### ¿Por qué usar CMake?

✅ **Multiplataforma**: Un solo archivo funciona en Windows, Linux y macOS
✅ **Gestión de dependencias**: Maneja bibliotecas externas automáticamente
✅ **Modular**: Permite organizar proyectos grandes en subdirectorios
✅ **Estándar de la industria**: Usado por Qt, LLVM, OpenCV, etc.

---

## Conceptos Fundamentales

### 1. **Archivos CMakeLists.txt**
Son los archivos de configuración que contienen las instrucciones de construcción.

### 2. **Build Directory (Directorio de Compilación)**
Directorio separado donde se generan los archivos de compilación. Nunca se compila en el directorio de código fuente.

```bash
# Estructura típica
proyecto/
├── CMakeLists.txt          # Configuración
├── src/                    # Código fuente
└── build/                  # Directorio de compilación (gitignore)
```

### 3. **Proceso de Construcción**

```bash
# Paso 1: Generar archivos de compilación
cmake -S . -B build

# Paso 2: Compilar el proyecto
cmake --build build

# Paso 3 (opcional): Instalar
cmake --install build
```

---

## Estructura Básica

### Ejemplo Mínimo

```cmake
# Versión mínima requerida de CMake
cmake_minimum_required(VERSION 3.25)

# Declarar el proyecto
project(MiAplicacion
    VERSION 1.0.0
    DESCRIPTION "Mi primera aplicación"
    LANGUAGES C CXX
)

# Crear un ejecutable
add_executable(mi_app main.cpp)
```

### Ejemplo del Proyecto QGC (Simplificado)

```cmake
# Del archivo: CMakeLists.txt (líneas 1-93)

cmake_minimum_required(VERSION 3.25)

# Agregar rutas de módulos personalizados
list(APPEND CMAKE_MODULE_PATH
    "${CMAKE_SOURCE_DIR}/cmake"
    "${CMAKE_SOURCE_DIR}/cmake/modules"
)

# Configurar tipo de compilación por defecto
if(NOT CMAKE_BUILD_TYPE)
    set(CMAKE_BUILD_TYPE "Release" CACHE STRING "Build type" FORCE)
endif()

# Declarar el proyecto
project(${QGC_APP_NAME}
    VERSION ${QGC_APP_VERSION}
    DESCRIPTION ${QGC_APP_DESCRIPTION}
    HOMEPAGE_URL "https://${QGC_ORG_DOMAIN}"
    LANGUAGES C CXX
)
```

**Explicación:**
- `cmake_minimum_required()`: Define la versión mínima de CMake necesaria
- `list(APPEND CMAKE_MODULE_PATH ...)`: Agrega directorios donde buscar módulos .cmake
- `project()`: Declara el proyecto con metadatos

---

## Comandos Esenciales

### 1. **cmake_minimum_required**

```cmake
cmake_minimum_required(VERSION 3.25)
```

Define la versión mínima de CMake. Afecta el comportamiento de políticas (policies).

---

### 2. **project**

```cmake
project(NombreProyecto
    VERSION 1.2.3
    DESCRIPTION "Descripción del proyecto"
    HOMEPAGE_URL "https://example.com"
    LANGUAGES C CXX
)
```

Inicializa el proyecto y establece variables:
- `PROJECT_NAME`: Nombre del proyecto
- `PROJECT_VERSION`: Versión (1.2.3)
- `PROJECT_SOURCE_DIR`: Directorio raíz del proyecto

---

### 3. **add_executable**

```cmake
# Ejecutable simple
add_executable(mi_app main.cpp)

# Ejecutable con múltiples archivos
add_executable(mi_app
    main.cpp
    utils.cpp
    helper.cpp
)
```

Crea un target (objetivo) ejecutable.

---

### 4. **add_library**

```cmake
# Biblioteca estática
add_library(mi_lib STATIC
    lib.cpp
    lib.h
)

# Biblioteca compartida (.so, .dll, .dylib)
add_library(mi_lib SHARED
    lib.cpp
)

# Biblioteca de interfaz (solo headers)
add_library(mi_lib INTERFACE)
```

---

### 5. **target_sources**

```cmake
# Agregar fuentes a un target existente
target_sources(mi_app
    PRIVATE
        archivo1.cpp
        archivo2.cpp
)
```

**Ejemplo del Proyecto QGC:**
```cmake
# De: test/Camera/CMakeLists.txt

target_sources(${CMAKE_PROJECT_NAME}
    PRIVATE
        QGCCameraManagerTest.cc
        QGCCameraManagerTest.h
)
```

---

### 6. **target_include_directories**

```cmake
target_include_directories(mi_app
    PUBLIC      # Los usuarios de mi_app también verán estos includes
        ${CMAKE_CURRENT_SOURCE_DIR}/include
    PRIVATE     # Solo mi_app ve estos includes
        ${CMAKE_CURRENT_SOURCE_DIR}/src
)
```

**Niveles de Visibilidad:**
- `PUBLIC`: El target y sus consumidores
- `PRIVATE`: Solo el target
- `INTERFACE`: Solo los consumidores

---

### 7. **target_link_libraries**

```cmake
# Enlazar con otras bibliotecas
target_link_libraries(mi_app
    PRIVATE
        mi_biblioteca
        Qt6::Core
        Qt6::Widgets
)
```

---

### 8. **set**

```cmake
# Definir variables
set(MI_VARIABLE "valor")
set(LISTA "item1" "item2" "item3")

# Variable de cache (configurable por usuario)
set(OPCION ON CACHE BOOL "Descripción de la opción")
```

---

### 9. **option**

```cmake
# Crear opciones booleanas
option(BUILD_TESTING "Compilar tests" ON)
option(ENABLE_DOCS "Generar documentación" OFF)

# Uso condicional
if(BUILD_TESTING)
    add_subdirectory(tests)
endif()
```

---

### 10. **add_subdirectory**

```cmake
# Incluir subdirectorios con su propio CMakeLists.txt
add_subdirectory(src)
add_subdirectory(tests)
add_subdirectory(external)
```

---

### 11. **include**

```cmake
# Incluir archivos .cmake
include(GNUInstallDirs)        # Módulo estándar de CMake
include(CustomHelpers)         # Módulo personalizado
```

**Ejemplo del Proyecto QGC:**
```cmake
# De: CMakeLists.txt (líneas 100-107)

include(GNUInstallDirs)
include(FetchContent)
include(CMakePrintHelpers)
include(CPM)
include(Toolchain)
```

---

## Variables en CMake

### Variables Predefinidas Importantes

```cmake
# Directorios
${CMAKE_SOURCE_DIR}           # Directorio raíz del proyecto
${CMAKE_BINARY_DIR}           # Directorio de compilación
${CMAKE_CURRENT_SOURCE_DIR}   # Directorio actual del CMakeLists.txt
${CMAKE_CURRENT_BINARY_DIR}   # Directorio de compilación actual

# Información del proyecto
${PROJECT_NAME}               # Nombre del proyecto
${PROJECT_VERSION}            # Versión
${CMAKE_PROJECT_NAME}         # Nombre del proyecto raíz

# Sistema y compilador
${CMAKE_SYSTEM_NAME}          # Linux, Windows, Darwin (macOS)
${CMAKE_CXX_COMPILER_ID}      # GNU, Clang, MSVC
${CMAKE_BUILD_TYPE}           # Debug, Release, RelWithDebInfo

# Plataforma
${UNIX}                       # TRUE en Unix/Linux
${WIN32}                      # TRUE en Windows
${APPLE}                      # TRUE en macOS
${ANDROID}                    # TRUE en Android
```

### Definir Variables Personalizadas

```cmake
# Variable simple
set(MI_VERSION "1.0.0")

# Lista
set(MIS_ARCHIVOS
    main.cpp
    utils.cpp
    helper.cpp
)

# Concatenar a lista
list(APPEND MIS_ARCHIVOS extra.cpp)

# Variable de cache (aparece en cmake-gui)
set(FEATURE_X ON CACHE BOOL "Habilitar Feature X")
```

### Usar Variables

```cmake
message(STATUS "La versión es: ${MI_VERSION}")

add_executable(app ${MIS_ARCHIVOS})
```

---

## Targets

### ¿Qué es un Target?

Un **target** es cualquier cosa que CMake puede construir:
- Ejecutables (`add_executable`)
- Bibliotecas (`add_library`)
- Targets personalizados (`add_custom_target`)

### Propiedades de Targets

```cmake
# Configurar propiedades
set_target_properties(mi_app PROPERTIES
    CXX_STANDARD 17
    CXX_STANDARD_REQUIRED ON
    OUTPUT_NAME "MiAplicacion"
)

# Agregar definiciones de compilador
target_compile_definitions(mi_app
    PRIVATE
        APP_VERSION="${PROJECT_VERSION}"
        DEBUG_MODE=$<$<CONFIG:Debug>:1>
)

# Opciones de compilación
target_compile_options(mi_app
    PRIVATE
        $<$<CXX_COMPILER_ID:GNU>:-Wall -Wextra>
        $<$<CXX_COMPILER_ID:MSVC>:/W4>
)
```

### Generator Expressions

Son expresiones que se evalúan en tiempo de generación:

```cmake
# Según configuración
$<$<CONFIG:Debug>:debug_flag>
$<$<CONFIG:Release>:release_flag>

# Según compilador
$<$<CXX_COMPILER_ID:GNU>:-Wall>
$<$<CXX_COMPILER_ID:MSVC>:/W4>

# Según plataforma
$<$<PLATFORM_ID:Linux>:linux_specific.cpp>
```

---

## Funciones y Macros

### Diferencia entre Function y Macro

**Function**: Crea un nuevo scope (ámbito)
**Macro**: Se expande en el scope actual

### Definir una Función

```cmake
function(mi_funcion arg1 arg2)
    message(STATUS "Argumento 1: ${arg1}")
    message(STATUS "Argumento 2: ${arg2}")

    # Variables locales
    set(local_var "valor")

    # Para retornar valores, usar PARENT_SCOPE
    set(resultado "OK" PARENT_SCOPE)
endfunction()

# Uso
mi_funcion("hola" "mundo")
```

### Ejemplo del Proyecto QGC

```cmake
# De: cmake/Helpers.cmake (líneas 15-27)

function(qgc_set_qt_resource_alias)
    foreach(resource_file IN LISTS ARGN)
        if(NOT EXISTS "${resource_file}")
            message(WARNING "QGC: Resource file does not exist: ${resource_file}")
            continue()
        endif()
        get_filename_component(alias "${resource_file}" NAME)
        set_source_files_properties("${resource_file}"
            PROPERTIES
                QT_RESOURCE_ALIAS "${alias}"
        )
    endforeach()
endfunction()
```

**Explicación:**
- `ARGN`: Todos los argumentos pasados a la función
- `foreach(... IN LISTS ARGN)`: Itera sobre todos los argumentos
- `get_filename_component()`: Extrae el nombre del archivo
- `set_source_files_properties()`: Configura propiedades de archivos

### Función con Argumentos Nombrados

```cmake
function(crear_libreria)
    # Definir argumentos esperados
    set(options SHARED STATIC)
    set(oneValueArgs NAME)
    set(multiValueArgs SOURCES LIBS)

    cmake_parse_arguments(ARG
        "${options}"
        "${oneValueArgs}"
        "${multiValueArgs}"
        ${ARGN}
    )

    # Uso
    if(ARG_SHARED)
        add_library(${ARG_NAME} SHARED ${ARG_SOURCES})
    else()
        add_library(${ARG_NAME} STATIC ${ARG_SOURCES})
    endif()

    target_link_libraries(${ARG_NAME} ${ARG_LIBS})
endfunction()

# Llamada
crear_libreria(
    NAME mi_lib
    SHARED
    SOURCES file1.cpp file2.cpp
    LIBS Qt6::Core
)
```

---

## Organización de Proyectos Grandes

### Estructura Recomendada

```
proyecto/
├── CMakeLists.txt              # CMake principal
├── cmake/                      # Módulos CMake personalizados
│   ├── Helpers.cmake
│   ├── Toolchain.cmake
│   └── modules/
│       ├── CPM.cmake
│       └── Coverage.cmake
├── src/                        # Código fuente
│   ├── CMakeLists.txt
│   ├── core/
│   │   └── CMakeLists.txt
│   └── ui/
│       └── CMakeLists.txt
├── tests/                      # Tests
│   └── CMakeLists.txt
├── external/                   # Dependencias externas
│   └── CMakeLists.txt
└── build/                      # Directorio de compilación
```

### CMakeLists.txt Principal

```cmake
cmake_minimum_required(VERSION 3.25)

# Agregar módulos personalizados
list(APPEND CMAKE_MODULE_PATH "${CMAKE_SOURCE_DIR}/cmake")

# Incluir helpers
include(Helpers)

# Proyecto
project(MiProyecto VERSION 1.0.0 LANGUAGES CXX)

# Opciones
option(BUILD_TESTING "Compilar tests" ON)

# Subdirectorios
add_subdirectory(src)

if(BUILD_TESTING)
    enable_testing()
    add_subdirectory(tests)
endif()
```

### CMakeLists.txt de Subdirectorio

```cmake
# src/core/CMakeLists.txt

add_library(core STATIC
    module.cpp
    module.h
    utils.cpp
    utils.h
)

target_include_directories(core
    PUBLIC
        ${CMAKE_CURRENT_SOURCE_DIR}
)

target_link_libraries(core
    PUBLIC
        Qt6::Core
)
```

---

## Ejemplos del Proyecto QGroundControl

### 1. Configuración de Directorio de Salida

```cmake
# De: CMakeLists.txt (líneas 118-126)

set(CMAKE_ARCHIVE_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}/$<CONFIG>/lib")
set(CMAKE_LIBRARY_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}/$<CONFIG>")
if(ANDROID)
    set(CMAKE_PDB_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}")
else()
    set(CMAKE_RUNTIME_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}/$<CONFIG>")
endif()
```

**Explicación:**
- `$<CONFIG>`: Generator expression que se reemplaza con Debug/Release
- Organiza los binarios según la configuración de compilación

---

### 2. Políticas de CMake

```cmake
# De: CMakeLists.txt (líneas 131-147)

# CMP0168: Modern FetchContent integration
if(POLICY CMP0168)
    cmake_policy(SET CMP0168 NEW)
    set(CMAKE_POLICY_DEFAULT_CMP0168 NEW)
endif()

# CMP0141: MSVC debug information format
if(POLICY CMP0141)
    cmake_policy(SET CMP0141 NEW)
    set(CMAKE_POLICY_DEFAULT_CMP0141 NEW)
endif()
```

**Explicación:**
- Las políticas controlan comportamientos retrocompatibles
- `NEW`: Usa el comportamiento moderno
- `OLD`: Usa el comportamiento antiguo (retrocompatibilidad)

---

### 3. Configuración Específica de Plataforma

```cmake
# De: CMakeLists.txt (líneas 64-71)

if(APPLE)
    set(CMAKE_OSX_DEPLOYMENT_TARGET "12.0")
    if(QGC_MACOS_UNIVERSAL_BUILD)
        # Universal binary para Intel y Apple Silicon
        set(CMAKE_OSX_ARCHITECTURES "x86_64h;arm64")
    endif()
endif()
```

**Explicación:**
- `CMAKE_OSX_DEPLOYMENT_TARGET`: Versión mínima de macOS
- `CMAKE_OSX_ARCHITECTURES`: Arquitecturas a compilar (binario universal)

---

### 4. Compilación de Caché (ccache/sccache)

```cmake
# De: cmake/Helpers.cmake (líneas 33-93)

function(qgc_config_caching)
    find_program(QGC_CACHE_PROGRAM
        NAMES ccache sccache
        VALIDATOR _qgc_verify_cache_tool
    )

    if(QGC_CACHE_PROGRAM)
        set(CMAKE_C_COMPILER_LAUNCHER "${QGC_CACHE_PROGRAM}" CACHE STRING "C compiler launcher" FORCE)
        set(CMAKE_CXX_COMPILER_LAUNCHER "${QGC_CACHE_PROGRAM}" CACHE STRING "CXX compiler launcher" FORCE)
    endif()
endfunction()
```

**Explicación:**
- `find_program()`: Busca programas ejecutables en el sistema
- `CMAKE_CXX_COMPILER_LAUNCHER`: Envuelve el compilador con ccache para acelerar compilaciones

---

### 5. Custom Build (Personalizaciones)

```cmake
# De: CMakeLists.txt (líneas 45-50)

if(IS_DIRECTORY "${CMAKE_SOURCE_DIR}/custom")
    message(STATUS "QGC: Custom build directory detected")
    set(QGC_CUSTOM_BUILD ON)
    list(APPEND CMAKE_MODULE_PATH "${CMAKE_SOURCE_DIR}/custom/cmake")
    include(CustomOverrides)
endif()
```

**Explicación:**
- Permite a usuarios crear builds personalizados sin modificar el código principal
- Si existe el directorio `custom/`, carga sus archivos CMake

---

## Mejores Prácticas

### ✅ 1. Usa Targets Modernos (CMake 3.x+)

**❌ Antiguo (CMake 2.x):**
```cmake
include_directories(${MY_INCLUDE_DIR})
link_libraries(${MY_LIB})
add_executable(app main.cpp)
```

**✅ Moderno (CMake 3.x):**
```cmake
add_executable(app main.cpp)
target_include_directories(app PRIVATE ${MY_INCLUDE_DIR})
target_link_libraries(app PRIVATE ${MY_LIB})
```

---

### ✅ 2. Especifica Visibilidad (PUBLIC/PRIVATE/INTERFACE)

```cmake
target_include_directories(mi_lib
    PUBLIC      # Los usuarios de mi_lib verán estos includes
        include/
    PRIVATE     # Solo mi_lib verá estos
        src/
)
```

**Regla general:**
- `PRIVATE`: Detalles de implementación
- `PUBLIC`: Parte de la interfaz pública
- `INTERFACE`: Solo para usuarios, no para la biblioteca misma

---

### ✅ 3. No uses `file(GLOB)`

**❌ Evitar:**
```cmake
file(GLOB SOURCES "src/*.cpp")  # No detecta archivos nuevos automáticamente
add_executable(app ${SOURCES})
```

**✅ Preferir:**
```cmake
add_executable(app
    src/main.cpp
    src/utils.cpp
    src/helper.cpp
)
```

---

### ✅ 4. Usa Build Directory Separado

```bash
# ❌ No hacer
cd proyecto
cmake .
make

# ✅ Hacer
cd proyecto
cmake -B build
cmake --build build
```

---

### ✅ 5. Usa Generator Expressions para Configuraciones

```cmake
target_compile_definitions(app PRIVATE
    $<$<CONFIG:Debug>:DEBUG_MODE>
    $<$<CONFIG:Release>:RELEASE_MODE>
)
```

---

### ✅ 6. Crea Funciones Helper Reutilizables

```cmake
# En cmake/Helpers.cmake
function(add_qgc_library name)
    add_library(${name} ${ARGN})
    target_compile_features(${name} PUBLIC cxx_std_17)
    set_target_properties(${name} PROPERTIES
        POSITION_INDEPENDENT_CODE ON
    )
endfunction()

# Uso
add_qgc_library(mi_lib file1.cpp file2.cpp)
```

---

### ✅ 7. Usa `message()` para Debugging

```cmake
message(STATUS "Build type: ${CMAKE_BUILD_TYPE}")
message(WARNING "This is deprecated")
message(FATAL_ERROR "Configuration error!")

# Variable dump
cmake_print_variables(MY_VAR OTHER_VAR)
cmake_print_properties(TARGETS my_target PROPERTIES TYPE OUTPUT_NAME)
```

---

### ✅ 8. Gestiona Dependencias con FetchContent o CPM

```cmake
include(FetchContent)

FetchContent_Declare(
    googletest
    GIT_REPOSITORY https://github.com/google/googletest.git
    GIT_TAG v1.14.0
)

FetchContent_MakeAvailable(googletest)

# Ahora puedes usar gtest
target_link_libraries(mi_test PRIVATE gtest_main)
```

---

## Comandos de Terminal Útiles

### Configurar y Compilar

```bash
# Generar archivos de compilación
cmake -S . -B build -DCMAKE_BUILD_TYPE=Release

# Compilar
cmake --build build --parallel 8

# Compilar solo un target específico
cmake --build build --target mi_app

# Instalar
cmake --install build --prefix /usr/local

# Limpiar
cmake --build build --target clean
```

### Opciones Avanzadas

```bash
# Cambiar compilador
cmake -S . -B build -DCMAKE_CXX_COMPILER=clang++

# Modo verbose (ver comandos completos)
cmake --build build --verbose

# Usar Ninja en lugar de Make
cmake -S . -B build -G Ninja

# Ver todas las opciones
cmake -LAH build/
```

---

## Depuración de CMake

### Ver Variables

```cmake
# En CMakeLists.txt
message(STATUS "CMAKE_SOURCE_DIR = ${CMAKE_SOURCE_DIR}")
message(STATUS "PROJECT_NAME = ${PROJECT_NAME}")

# Ver todas las variables
get_cmake_property(_vars VARIABLES)
foreach(_var ${_vars})
    message(STATUS "${_var} = ${${_var}}")
endforeach()
```

### Ver Propiedades de Targets

```cmake
# Imprimir propiedades
get_target_property(out mi_app LINK_LIBRARIES)
message(STATUS "LINK_LIBRARIES: ${out}")

# O usar cmake_print
include(CMakePrintHelpers)
cmake_print_properties(
    TARGETS mi_app
    PROPERTIES TYPE LINK_LIBRARIES INCLUDE_DIRECTORIES
)
```

### Modo Trace

```bash
# Ver todas las llamadas de CMake
cmake -S . -B build --trace

# Solo ciertas funciones
cmake -S . -B build --trace-expand --trace-redirect=trace.log
```

---

## Recursos Adicionales

### Documentación Oficial
- [CMake Documentation](https://cmake.org/documentation/)
- [CMake Tutorial](https://cmake.org/cmake/help/latest/guide/tutorial/index.html)

### Libros
- "Professional CMake: A Practical Guide" por Craig Scott
- "Mastering CMake" por Ken Martin y Bill Hoffman

### Proyectos de Ejemplo
- Este proyecto (QGroundControl)
- Qt Creator
- LLVM/Clang
- OpenCV

---

## 🎓 Resumen de Conceptos Clave

1. **CMakeLists.txt**: Archivo de configuración principal
2. **Targets**: Entidades construibles (ejecutables, bibliotecas)
3. **Variables**: Almacenan información (`${VAR}`)
4. **Funciones**: Reutilización de código CMake
5. **Subdirectorios**: Organización modular con `add_subdirectory()`
6. **Propiedades**: Configuración de targets con `target_*` comandos
7. **Generator Expressions**: Lógica condicional en tiempo de generación
8. **Build Directory**: Separación de código fuente y archivos compilados

---

## 💡 Ejercicio Práctico

### Crear un Proyecto Básico

1. Crea esta estructura:
```
mi_proyecto/
├── CMakeLists.txt
├── src/
│   └── main.cpp
└── include/
    └── utils.h
```

2. `CMakeLists.txt`:
```cmake
cmake_minimum_required(VERSION 3.25)
project(MiProyecto VERSION 1.0.0)

add_executable(mi_app src/main.cpp)

target_include_directories(mi_app PRIVATE include)

set_target_properties(mi_app PROPERTIES
    CXX_STANDARD 17
    CXX_STANDARD_REQUIRED ON
)
```

3. Compilar:
```bash
cmake -S . -B build
cmake --build build
./build/mi_app
```

---

**¡Éxito en tu aprendizaje de CMake!** 🚀

Esta guía cubre desde lo básico hasta conceptos avanzados usados en proyectos reales como QGroundControl.
