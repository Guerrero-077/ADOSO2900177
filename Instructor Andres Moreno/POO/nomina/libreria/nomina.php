<?php
    class Nomina{

        private $valorD;
        private $diasT;
        private $salarioM;


        public $pagoP;

        public $saludP;
        public $pensionP;
        public $arlP;

        public $transporte;
        public $retencion;

        public $pagoTotal;

        public function __construct(Datos $valores) {
            $this->valorD = $valores;
            $this->diasT = $valores;
            $this->salarioM = $valores;
        }

        public function pago() {
            $this -> pagoP =   $this -> diasT->getDiasT() * $this ->  valorD->getValorD();
            return $this->pagoP;
        }

        // deducible

        public function salud() {
            $this -> saludP = $this -> pagoP  * 0.12;
            return $this-> saludP;
        }

        public function pension(){
            $this -> pensionP =  $this -> pagoP * 0.16;
            return $this-> pensionP;
        }

        public function arl(){
            $this -> arlP = $this -> pagoP * 0.052;
            return $this-> arlP;
        }

        public function subTransporte(){

            if ($this -> pagoP <= $this->salarioM->getSalarioM()*2) {
                $this-> transporte = 114000;
            } else {
                $this-> transporte = 0;
            }
            return  $this-> transporte;
        }

        public function reten(){
            if ($this -> pagoP > $this -> salarioM->getSalarioM() * 4) {
                $this -> retencion = 0.04;
            } else {
                $this -> retencion = 0;
            }
            return $this -> retencion;
        }

        // pago total de la persona

        public  function pagoTotal(){
            $this -> pagoTotal = ($this -> pagoP + $this->transporte) -($this -> saludP + $this -> pensionP + $this -> arlP + $this->retencion);
            return $this->pagoTotal;
        }
    }