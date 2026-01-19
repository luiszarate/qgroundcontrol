# ============================================================================
# Ejemplo 2: Crear y Usar una Biblioteca
# ============================================================================
# Muestra cómo crear una biblioteca y enlazarla con un ejecutable

cmake_minimum_required(VERSION 3.25)
project(EjemploBiblioteca VERSION 1.0.0 LANGUAGES CXX)

# ============================================================================
# Paso 1: Crear una biblioteca estática
# ============================================================================
add_library(matematicas STATIC
    src/matematicas.cpp
    include/matematicas.h
)

# Configurar directorios de include para la biblioteca
target_include_directories(matematicas
    PUBLIC                              # PUBLIC: los usuarios verán este include
        ${CMAKE_CURRENT_SOURCE_DIR}/include
)

# ============================================================================
# Paso 2: Crear el ejecutable
# ============================================================================
add_executable(calculadora
    src/main.cpp
)

# ============================================================================
# Paso 3: Enlazar el ejecutable con la biblioteca
# ============================================================================
target_link_libraries(calculadora
    PRIVATE                             # PRIVATE: solo calculadora necesita esto
        matematicas
)

# ============================================================================
# Configuración C++
# ============================================================================
set_target_properties(matematicas calculadora PROPERTIES
    CXX_STANDARD 17
    CXX_STANDARD_REQUIRED ON
)

# ============================================================================
# Información de compilación
# ============================================================================
message(STATUS "==============================================")
message(STATUS "Proyecto: ${PROJECT_NAME}")
message(STATUS "Versión: ${PROJECT_VERSION}")
message(STATUS "Directorio fuente: ${CMAKE_SOURCE_DIR}")
message(STATUS "Directorio compilación: ${CMAKE_BINARY_DIR}")
message(STATUS "==============================================")
