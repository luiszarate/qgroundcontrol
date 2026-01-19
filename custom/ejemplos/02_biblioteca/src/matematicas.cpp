#include "matematicas.h"
#include <stdexcept>

int Matematicas::sumar(int a, int b) {
    return a + b;
}

int Matematicas::restar(int a, int b) {
    return a - b;
}

int Matematicas::multiplicar(int a, int b) {
    return a * b;
}

double Matematicas::dividir(double a, double b) {
    if (b == 0.0) {
        throw std::runtime_error("División por cero");
    }
    return a / b;
}
