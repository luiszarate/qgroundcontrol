# ============================================================================
# Ejemplo 1: CMake Básico
# ============================================================================
# Este es el ejemplo más simple posible de un archivo CMake

# Paso 1: Especificar versión mínima de CMake
cmake_minimum_required(VERSION 3.25)

# Paso 2: Declarar el proyecto
project(EjemploBasico
    VERSION 1.0.0
    DESCRIPTION "Mi primer proyecto CMake"
    LANGUAGES CXX
)

# Paso 3: Crear un ejecutable
# Sintaxis: add_executable(nombre_ejecutable archivos_fuente...)
add_executable(hola_mundo main.cpp)

# Paso 4 (opcional): Configurar estándar C++
set_target_properties(hola_mundo PROPERTIES
    CXX_STANDARD 17
    CXX_STANDARD_REQUIRED ON
)

# ============================================================================
# Cómo usar este archivo:
# ============================================================================
# 1. Crear directorio de compilación:
#    mkdir build
#
# 2. Generar archivos de compilación:
#    cmake -S . -B build
#
# 3. Compilar:
#    cmake --build build
#
# 4. Ejecutar:
#    ./build/hola_mundo
# ============================================================================
