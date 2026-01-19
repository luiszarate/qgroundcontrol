# ============================================================================
# Ejemplo 3: Proyecto Modular con Subdirectorios
# ============================================================================
# Muestra cómo organizar un proyecto grande en módulos

cmake_minimum_required(VERSION 3.25)
project(ProyectoModular VERSION 2.0.0 LANGUAGES CXX)

# ============================================================================
# Opciones del proyecto
# ============================================================================
option(BUILD_UTILS "Compilar utilidades adicionales" ON)
option(BUILD_TESTS "Compilar tests" OFF)

# ============================================================================
# Variables globales del proyecto
# ============================================================================
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# Directorio de salida para todos los ejecutables
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/bin)

# ============================================================================
# Agregar subdirectorios (cada uno tiene su propio CMakeLists.txt)
# ============================================================================

# Biblioteca core (siempre se compila)
add_subdirectory(core)

# Biblioteca utils (opcional)
if(BUILD_UTILS)
    message(STATUS "Compilando módulo de utilidades")
    add_subdirectory(utils)
endif()

# Aplicación principal
add_subdirectory(app)

# Tests (opcional)
if(BUILD_TESTS)
    enable_testing()
    add_subdirectory(tests)
endif()

# ============================================================================
# Resumen de configuración
# ============================================================================
message(STATUS "")
message(STATUS "==============================================")
message(STATUS "Configuración de ${PROJECT_NAME} ${PROJECT_VERSION}")
message(STATUS "==============================================")
message(STATUS "Tipo de compilación: ${CMAKE_BUILD_TYPE}")
message(STATUS "Compilador C++: ${CMAKE_CXX_COMPILER_ID}")
message(STATUS "Estándar C++: ${CMAKE_CXX_STANDARD}")
message(STATUS "BUILD_UTILS: ${BUILD_UTILS}")
message(STATUS "BUILD_TESTS: ${BUILD_TESTS}")
message(STATUS "==============================================")
message(STATUS "")
