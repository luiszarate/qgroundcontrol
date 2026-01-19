#include <iostream>
#include "matematicas.h"

int main() {
    std::cout << "=== Calculadora CMake ===" << std::endl;

    int a = 10, b = 5;

    std::cout << a << " + " << b << " = " << Matematicas::sumar(a, b) << std::endl;
    std::cout << a << " - " << b << " = " << Matematicas::restar(a, b) << std::endl;
    std::cout << a << " * " << b << " = " << Matematicas::multiplicar(a, b) << std::endl;
    std::cout << a << " / " << b << " = " << Matematicas::dividir(a, b) << std::endl;

    return 0;
}
