<?php

    class AreaFiguras{
        public $cuadrado;
        public $circulo;
        public $triangulo;

        public $lado;
        public $radio;
        public $base;
        public $altura;

        public function areaCuadrado($ladoP){
            $this->lado = $ladoP;
            $this->cuadrado = $this-> lado * $this-> lado;
            return $this->cuadrado;
        }

        public function areaCirculo($radioP){
            $this->radio = $radioP;
            $this->circulo = 3.1416 * ($this -> radio * $this-> radio );
            return $this->circulo;
        }
        
        public function areaTriangulo($baseP, $alturap){
            $this->base = $baseP;
            $this->altura = $alturap;
            $this->triangulo = ($this->base * $this->altura) / 2;
            return $this->triangulo;
        }
    }
?>