#include <iostream>
#include "core.h"

#ifdef UTILS_ENABLED
#include "utils.h"
#endif

int main() {
    std::cout << "=== Aplicación Modular ===" << std::endl;

    Core::inicializar();

#ifdef UTILS_ENABLED
    Utils::mostrarInfo();
#else
    std::cout << "[Info] Utilidades no compiladas" << std::endl;
#endif

    return 0;
}
