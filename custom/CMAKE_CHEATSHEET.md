# 📝 CMake Cheat Sheet - Referencia Rápida

---

## 🚀 Comandos de Terminal

### Configuración Inicial
```bash
# Configurar proyecto
cmake -S . -B build

# Configurar con opciones
cmake -S . -B build -DCMAKE_BUILD_TYPE=Release

# Ver opciones disponibles
cmake -LAH build/
```

### Compilación
```bash
# Compilar proyecto
cmake --build build

# Compilar en paralelo (más rápido)
cmake --build build --parallel 8
cmake --build build -j 8

# Compilar target específico
cmake --build build --target mi_app

# Modo verbose
cmake --build build --verbose
```

### Limpieza e Instalación
```bash
# Limpiar
cmake --build build --target clean

# Instalar
cmake --install build --prefix /usr/local
```

### Generadores
```bash
# Usar Ninja
cmake -S . -B build -G Ninja

# Usar Unix Makefiles
cmake -S . -B build -G "Unix Makefiles"

# Ver generadores disponibles
cmake --help
```

---

## 📋 Comandos CMake Esenciales

### Estructura Básica
```cmake
cmake_minimum_required(VERSION 3.25)
project(MiProyecto VERSION 1.0.0 LANGUAGES CXX)

add_executable(app main.cpp)
```

### Targets

#### Ejecutables
```cmake
add_executable(mi_app
    main.cpp
    utils.cpp
)
```

#### Bibliotecas
```cmake
# Estática (.a, .lib)
add_library(mi_lib STATIC file.cpp)

# Compartida (.so, .dll, .dylib)
add_library(mi_lib SHARED file.cpp)

# Solo headers
add_library(mi_lib INTERFACE)
```

#### Agregar Fuentes
```cmake
target_sources(mi_app
    PRIVATE
        extra.cpp
        helper.cpp
)
```

### Dependencias e Includes

#### Directorios Include
```cmake
target_include_directories(mi_app
    PUBLIC      # Usuarios también ven
        include/
    PRIVATE     # Solo este target
        src/
    INTERFACE   # Solo usuarios
        api/
)
```

#### Enlazar Bibliotecas
```cmake
target_link_libraries(mi_app
    PUBLIC mi_lib_publica
    PRIVATE mi_lib_privada
    INTERFACE mi_lib_interface
)
```

### Propiedades de Targets

#### Estándar C++
```cmake
set_target_properties(mi_app PROPERTIES
    CXX_STANDARD 17
    CXX_STANDARD_REQUIRED ON
    CXX_EXTENSIONS OFF
)

# O globalmente
set(CMAKE_CXX_STANDARD 17)
```

#### Opciones de Compilación
```cmake
target_compile_options(mi_app
    PRIVATE
        -Wall -Wextra -Wpedantic
)
```

#### Definiciones
```cmake
target_compile_definitions(mi_app
    PRIVATE
        VERSION="${PROJECT_VERSION}"
        DEBUG_MODE
)
```

---

## 🔧 Variables Importantes

### Directorios
```cmake
${CMAKE_SOURCE_DIR}           # Raíz del proyecto
${CMAKE_BINARY_DIR}           # Directorio de build
${CMAKE_CURRENT_SOURCE_DIR}   # Directorio actual
${CMAKE_CURRENT_BINARY_DIR}   # Build actual
${PROJECT_SOURCE_DIR}         # Raíz del proyecto actual
```

### Información del Proyecto
```cmake
${PROJECT_NAME}               # Nombre
${PROJECT_VERSION}            # Versión
${CMAKE_PROJECT_NAME}         # Proyecto raíz
```

### Sistema
```cmake
${CMAKE_SYSTEM_NAME}          # Linux, Windows, Darwin
${CMAKE_CXX_COMPILER_ID}      # GNU, Clang, MSVC, AppleClang
${CMAKE_BUILD_TYPE}           # Debug, Release, RelWithDebInfo
${UNIX}                       # TRUE en Unix/Linux
${WIN32}                      # TRUE en Windows
${APPLE}                      # TRUE en macOS
${ANDROID}                    # TRUE en Android
```

### Configurar Variables
```cmake
set(MI_VAR "valor")
set(MI_LISTA item1 item2 item3)
list(APPEND MI_LISTA item4)
```

---

## 📂 Organización de Proyectos

### Subdirectorios
```cmake
add_subdirectory(src)
add_subdirectory(tests)
```

### Incluir Módulos
```cmake
# Módulos estándar
include(GNUInstallDirs)
include(FetchContent)

# Módulos personalizados
list(APPEND CMAKE_MODULE_PATH "${CMAKE_SOURCE_DIR}/cmake")
include(MiModulo)
```

---

## 🎯 Condicionales y Bucles

### If-Else
```cmake
if(UNIX)
    message("Sistema Unix")
elseif(WIN32)
    message("Windows")
else()
    message("Otro")
endif()
```

### Operadores
```cmake
# Comparación
if(VAR EQUAL 10)
if(VAR LESS 5)
if(VAR GREATER 20)

# Strings
if(VAR STREQUAL "texto")
if(VAR MATCHES "regex")

# Existencia
if(EXISTS "${FILE}")
if(DEFINED VAR)
if(TARGET mi_target)

# Booleanos
if(VAR)
if(NOT VAR)
if(VAR1 AND VAR2)
if(VAR1 OR VAR2)
```

### Foreach
```cmake
foreach(item IN LISTS MI_LISTA)
    message("Item: ${item}")
endforeach()

foreach(i RANGE 0 10)
    message("Número: ${i}")
endforeach()
```

---

## 🛠️ Funciones y Macros

### Función
```cmake
function(mi_funcion arg1 arg2)
    message("${arg1} ${arg2}")
    set(result "ok" PARENT_SCOPE)
endfunction()

mi_funcion("hola" "mundo")
```

### Macro
```cmake
macro(mi_macro arg)
    set(LOCAL_VAR ${arg})
endmacro()
```

### Argumentos Nombrados
```cmake
function(crear_lib)
    set(options SHARED STATIC)
    set(oneValueArgs NAME)
    set(multiValueArgs SOURCES LIBS)

    cmake_parse_arguments(ARG
        "${options}"
        "${oneValueArgs}"
        "${multiValueArgs}"
        ${ARGN}
    )

    add_library(${ARG_NAME} ${ARG_SOURCES})
endfunction()

crear_lib(
    NAME mi_lib
    SOURCES a.cpp b.cpp
    LIBS Qt6::Core
)
```

---

## 🎨 Generator Expressions

### Sintaxis
```cmake
$<condición:valor_si_true>
$<$<condición>:valor>
```

### Ejemplos Comunes
```cmake
# Según configuración
$<$<CONFIG:Debug>:debug_flag>
$<$<CONFIG:Release>:-O3>

# Según compilador
$<$<CXX_COMPILER_ID:GNU>:-Wall>
$<$<CXX_COMPILER_ID:MSVC>:/W4>

# Según plataforma
$<$<PLATFORM_ID:Linux>:linux.cpp>
$<$<PLATFORM_ID:Windows>:windows.cpp>

# Paths
$<TARGET_FILE:mi_app>
$<TARGET_FILE_DIR:mi_app>
```

---

## 📦 Gestión de Dependencias

### FetchContent
```cmake
include(FetchContent)

FetchContent_Declare(
    googletest
    GIT_REPOSITORY https://github.com/google/googletest.git
    GIT_TAG v1.14.0
)

FetchContent_MakeAvailable(googletest)
target_link_libraries(mi_test gtest_main)
```

### find_package
```cmake
find_package(Qt6 REQUIRED COMPONENTS Core Widgets)
target_link_libraries(mi_app Qt6::Core Qt6::Widgets)
```

---

## 🔍 Debugging

### Mensajes
```cmake
message(STATUS "Info normal")
message(WARNING "Advertencia")
message(FATAL_ERROR "Error fatal")
message(DEBUG "Debug info")
```

### Imprimir Variables
```cmake
include(CMakePrintHelpers)

cmake_print_variables(MY_VAR OTHER_VAR)

cmake_print_properties(
    TARGETS mi_app
    PROPERTIES TYPE LINK_LIBRARIES
)
```

### Ver Todos los Comandos
```bash
# Modo trace
cmake -S . -B build --trace

# Con expansión
cmake -S . -B build --trace-expand
```

---

## ⚙️ Opciones y Cache

### option
```cmake
option(BUILD_TESTS "Compilar tests" ON)
option(ENABLE_DOCS "Generar docs" OFF)

if(BUILD_TESTS)
    add_subdirectory(tests)
endif()
```

### Variables de Cache
```cmake
set(MY_VAR "default" CACHE STRING "Descripción")

# Tipos de cache
BOOL      # ON/OFF
STRING    # Texto
PATH      # Ruta de directorio
FILEPATH  # Ruta de archivo
```

### Forzar Valores
```cmake
set(VAR "valor" CACHE STRING "desc" FORCE)
```

---

## 📊 Propiedades

### Propiedades de Targets
```cmake
# Establecer
set_target_properties(mi_app PROPERTIES
    OUTPUT_NAME "MiApp"
    VERSION ${PROJECT_VERSION}
)

# Obtener
get_target_property(out mi_app OUTPUT_NAME)
message("Output name: ${out}")
```

### Propiedades de Archivos
```cmake
set_source_files_properties(file.cpp PROPERTIES
    COMPILE_FLAGS "-O3"
)
```

---

## 🌍 Instalación

### Reglas de Instalación
```cmake
# Ejecutables
install(TARGETS mi_app
    RUNTIME DESTINATION bin
)

# Bibliotecas
install(TARGETS mi_lib
    LIBRARY DESTINATION lib
    ARCHIVE DESTINATION lib
)

# Headers
install(FILES mi_lib.h
    DESTINATION include
)

# Directorios
install(DIRECTORY include/
    DESTINATION include
)
```

---

## 🧪 Testing

### Habilitar Tests
```cmake
enable_testing()

add_executable(mi_test test.cpp)
target_link_libraries(mi_test gtest_main)

add_test(NAME mi_test COMMAND mi_test)
```

### Ejecutar Tests
```bash
# Compilar y ejecutar
cmake --build build
ctest --test-dir build

# Verbose
ctest --test-dir build --verbose
```

---

## 💾 Directorios de Salida

```cmake
# Ejecutables
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/bin)

# Bibliotecas compartidas
set(CMAKE_LIBRARY_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/lib)

# Bibliotecas estáticas
set(CMAKE_ARCHIVE_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/lib)
```

---

## 🔗 Recursos Útiles

- **Documentación Oficial**: https://cmake.org/documentation/
- **Tutorial**: https://cmake.org/cmake/help/latest/guide/tutorial/
- **Wiki**: https://gitlab.kitware.com/cmake/community/-/wikis/home

---

## 💡 Tips Rápidos

1. **Siempre usa build directory separado**
   ```bash
   cmake -S . -B build  # ✅ Correcto
   cmake .              # ❌ Evitar
   ```

2. **Usa targets modernos**
   ```cmake
   target_link_libraries(app PRIVATE lib)  # ✅
   link_libraries(lib)                     # ❌
   ```

3. **No uses GLOB para fuentes**
   ```cmake
   add_executable(app main.cpp utils.cpp)  # ✅
   file(GLOB SRCS *.cpp)                   # ❌
   ```

4. **Especifica visibilidad**
   ```cmake
   target_include_directories(app PRIVATE include/)  # ✅
   ```

5. **Usa Generator Expressions**
   ```cmake
   $<$<CONFIG:Debug>:flag>  # ✅
   ```

---

**¡Guarda esta hoja como referencia rápida!** 📌
