DELIMITER $$

    CREATE PROCEDURE procedimiento_todo_poderoso()
            BEGIN
                DECLARE EXIT HANDLER FOR SQLEXCEPTION
                BEGIN
                
                    ROLLBACK;
                    SELECT 'Error: Ha ocurrido un problema con las transacciones de todo poderoso, ninguna operación se realizó.';
                END;

                START TRANSACTION;

                    -- CALL general_persona(); 
                    CALL general_tipo_vehiculo(); 
                    -- CALL general_vehiculo(); 
                    -- CALL general_concesionario(); 
                    -- CALL general_metodo_pago(); 
                    -- CALL general_reserva(); 
                    -- CALL general_factura(); 
                    -- CALL general_lista_vehiculo(); 
                    -- CALL general_historial_uso();

                    CALL todo_poderoso_persona_concesionario(); 

                COMMIT;

                SELECT 'Transacción de todo poderoso completada con éxito' AS resultado;

                    -- SELECT * FROM persona;
                    SELECT * FROM tipo_vehiculo;
                    -- SELECT * FROM vehiculo;
                    -- SELECT * FROM concesionario;
                    -- SELECT * FROM metodoPago;
                    -- SELECT * FROM reserva;
                    -- SELECT * FROM factura;
                    -- SELECT * FROM listaVehiculo;
                    -- SELECT * FROM historialUso;
                    -- SELECT * FROM persona_concesionario;
            END $$
DELIMITER ;
