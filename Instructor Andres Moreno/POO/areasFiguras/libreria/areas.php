<?php

class AreaFiguras {

    private $lado;
    private $base;
    private $altura;

    public function __construct($lado, $base, $altura) {
        $this->lado = $lado;
        $this->base = $base;
        $this->altura = $altura;
    }

    public function areaCuadrado() {
        return $this->lado ? pow($this->lado->getValor(), 2) : null;
    }

    public function areaRectangulo() {
        return $this->base && $this->altura ? $this->base->getValor() * $this->altura->getValor() : null;
    }

    public function areaTriangulo() {
        return $this->base && $this->altura ? ($this->base->getValor() * $this->altura->getValor()) / 2 : null;
    }
}
