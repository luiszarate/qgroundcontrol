# ============================================================================
# Módulo Utils - Utilidades opcionales
# ============================================================================

add_library(utils STATIC
    utils.cpp
    utils.h
)

target_include_directories(utils
    PUBLIC
        ${CMAKE_CURRENT_SOURCE_DIR}
)

message(STATUS "  [+] Módulo Utils configurado")
