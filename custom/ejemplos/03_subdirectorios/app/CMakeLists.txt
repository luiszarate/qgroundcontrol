# ============================================================================
# Aplicación Principal
# ============================================================================

add_executable(mi_aplicacion
    main.cpp
)

# Enlazar con la biblioteca core
target_link_libraries(mi_aplicacion
    PRIVATE
        core
)

# Si BUILD_UTILS está activado, también enlazar con utils
if(BUILD_UTILS)
    target_link_libraries(mi_aplicacion PRIVATE utils)
    target_compile_definitions(mi_aplicacion PRIVATE UTILS_ENABLED)
endif()

message(STATUS "  [+] Aplicación principal configurada")
