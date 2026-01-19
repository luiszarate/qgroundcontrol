# ============================================================================
# Módulo Core - Funcionalidad básica
# ============================================================================

add_library(core STATIC
    core.cpp
    core.h
)

target_include_directories(core
    PUBLIC
        ${CMAKE_CURRENT_SOURCE_DIR}
)

message(STATUS "  [+] Módulo Core configurado")
