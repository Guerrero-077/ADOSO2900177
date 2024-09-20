<?php


class Datos{
    private $diasT;
    private $valorD;

    public function setDiasT($diasT){
        $this->diasT = $diasT;
    }

    public function getDiasT(){
        return $this->diasT;
    }

    public function setValorD($valorD){
        $this->valorD = $valorD;
    }

    public function getValorD(){
        return $this->valorD;
    }
    
}


class Nomina{

    public $valorD;
    public $diasT;

    public $salud;
    public $pension;
    public $arl;
    
    public $subTransporte; 
    public $reten;

    public $salarioM;
    public  $pagoTotal;

    public $sueldo;


    public function pagoPersona($diasTP, $valorDP){
        $this->diasT = $diasTP;
        $this->valorD = $valorDP;

        $this->sueldo = $this->valorD * $this->diasT;

        return $this -> sueldo;
    }

    public function saludP(){
        $this->salud = $this->sueldo * 0.12;
        return $this -> salud;
    }

    public function pensionP() {
        $this->pension = $this->sueldo * 0.16;
        return $this -> pension;
        
    }

    public function arlP(){
        $this->arl = $this->sueldo * 0.52;
        return $this -> arl;
        
    }

    public function subTransporteP() {
        $this -> salarioM = 1300000;
        
        if ($this -> sueldo <=$this ->salarioM ) {
            $this -> subTransporte = 114000;
            
        }else{
            
            $this -> subTransporte = 0;
        }

        return $this-> subTransporte;
    }

    public function retenP(){
        $salarioM = 1300000;

        if ($this -> sueldo >= $salarioM * 4) {

            $this -> reten = 0.04;
        }else{
            $this -> reten = 0;
        }
        return $this -> reten;

    }

    public function pagoTotalP() {
        $this-> pagoTotal = ($this -> sueldo + $this -> subTransporte) - ($this -> salud + $this -> pension + $this -> arl + $this -> reten);

        return $this -> pagoTotal;
        
    }
}
?>