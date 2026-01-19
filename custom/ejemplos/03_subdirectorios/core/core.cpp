#include "core.h"
#include <iostream>

std::string Core::getVersion() {
    return "2.0.0";
}

void Core::inicializar() {
    std::cout << "[Core] Sistema inicializado v" << getVersion() << std::endl;
}
