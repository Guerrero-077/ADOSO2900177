<?php
    class Datos{

        private $valorD;
        private $diasT;
        private $salarioM;

        public function __construct($valorD, $diasT, $salarioM) {
            $this-> valorD = $valorD;
            $this-> diasT = $diasT;
            $this-> salarioM = $salarioM;
        }

        public function  setValorD() {
            $this->valorD;
        }
        public function  getValorD() {
            return $this->valorD;
        }


        public function   setDiasT() {
            $this->diasT;
        }
        public function   getDiasT() {
            return $this->diasT;
        }

        public function   setSalarioM() {
            $this->salarioM;
        }
        public function   getSalarioM() {
            return $this->salarioM;
        }
    }