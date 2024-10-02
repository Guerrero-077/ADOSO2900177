<?php

// class Operaciones{

//     public $numeroUno;
//     public $numeroDos;
//     public $sumar;
//     public $restar;
//     public $multiplicar;
//     public $dividir;
    
//     public function suma($numUno,$numDos){
//         $this->numeroUno = $numUno;
//         $this->numeroDos = $numDos;
//         $this->sumar =$this -> numeroUno + $this->  numeroDos;
//         return $this->sumar;
//     }
    
//     public function resta($numUnos, $numDos){
//         $this->numeroUno = $numUnos;
//         $this->numeroDos = $numDos;
//         $this->restar =$this -> numeroUno - $this->  numeroDos;
//         return $this->restar;
//     }
    
//     public function multiplicacion($numUno, $numDos){
//         $this->numeroUno = $numUno;
//         $this->numeroDos = $numDos;
//         $this->multiplicar =$this -> numeroUno * $this->  numeroDos;
//         return $this->multiplicar;
//     }
    
//     public function division($numUno, $numDos){
//         $this->numeroUno = $numUno;
//         $this->numeroDos = $numDos;
//         $this->dividir =$this -> numeroUno / $this->  numeroDos;
//         return $this->dividir;
//     }
// }
    

    // class Operaciones{
    //     private $numeroUno;
    //     private $numeroDos;

    //     public function setNumeroUno($numeroUno){
    //         $this -> numeroUno = $numeroUno;
    //     }
    //     public function getNumeroUno(){
    //         return $this -> numeroUno;
    //     }

    //     public function setNumeroDos($numeroDos){
    //         $this -> numeroDos = $numeroDos;
    //     }
    //     public function getNumeroDos(){
    //         return $this -> numeroDos;
    //     }
    // }

    // class ControlOperaciones{
    //     private $numeroUno;
    //     private $numeroDos;

    //     private $suma;
    //     private $resta;
    //     private $multiplicar;
    //     private $dividir;

    //     public function sumar($numeroUno,$numeroDos){
    //         $this -> numeroUno = $numeroUno;
    //         $this -> numeroDos = $numeroDos;
            
    //         $this -> suma = $this -> numeroUno + $this -> numeroDos;
        
    //         return $this -> suma;
    //     }

    //     public function restar($numeroUno,$numeroDos){
    //         $this -> numeroUno = $numeroUno;
    //         $this -> numeroDos = $numeroDos;
            
    //         $this -> resta = $this -> numeroUno - $this -> numeroDos;
        
    //         return $this -> resta;
    //     }

    //     public function multiplicacion($numeroUno,$numeroDos){
    //         $this -> numeroUno = $numeroUno;
    //         $this -> numeroDos = $numeroDos;
            
    //         $this -> multiplicar = $this -> numeroUno * $this -> numeroDos;
        
    //         return $this -> multiplicar;
    //     }

    //     public function division($numeroUno,$numeroDos){
    //         $this -> numeroUno = $numeroUno;
    //         $this -> numeroDos = $numeroDos;
            
    //         $this -> dividir = $this -> numeroUno / $this -> numeroDos;
        
    //         return $this -> dividir;
    //     }
    // }



    class ControlOperaciones{
        private $numeroUno;
        private $numeroDos;

        public $suma;
        public $resta;
        public $multiplicar;
        public $dividir;

        
        public function __construct(Numero $numeroUno, Numero $numeroDos){
            $this -> numeroUno = $numeroUno->getValor();
            $this -> numeroDos = $numeroDos->getValor();
        }


        public function sumar(){
            $this -> suma = $this -> numeroUno + $this -> numeroDos;
        
            return $this -> suma;
        }

        public function restar(){
            $this -> resta = $this -> numeroUno - $this -> numeroDos;
        
            return $this -> resta;
        }

        public function multiplicacion(){
            $this -> multiplicar = $this -> numeroUno * $this -> numeroDos;
        
            return $this -> multiplicar;
        }

        public function division(){
            
            $this -> dividir = $this -> numeroUno / $this -> numeroDos;
        
            return $this -> dividir;
        }
    }