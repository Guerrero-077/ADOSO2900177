DELIMITER $$
        CREATE PROCEDURE general_lista_vehiculo (IN id_p INT, IN id_concesionario_p INT, IN id_vehiculo_p INT)
        BEGIN 
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Ha ocurrido un problema con las transacciones de lista de Vehiculos.' AS listaVehiculo;
            END;
            START TRANSACTION;
                        IF (SELECT COUNT(*) FROM listaVehiculo WHERE id_concesionario = id_concesionario_p AND  id_vehiculo = id_vehiculo_p) > 0 THEN -- INSERTAR listaVehiculo
                        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'La listaVehiculo ya existe';
                        ELSE
                        INSERT INTO listaVehiculo VALUES (1, 1, 1), (2, 2, 2), (3, 3, 3), (4, 4, 3), (5, 5, 4), (id_p, id_concesionario_p, id_vehiculo_p );
                    END IF;
                    IF NOT EXISTS(SELECT 1 FROM listaVehiculo WHERE id = id_p)THEN --  ACTUALIZAR Y ELIMINAR listaVehiculo
                        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'La listaVehiculo no existe';
                        ELSE
                            UPDATE listaVehiculo SET id_concesionario = 1, id_vehiculo = 1 WHERE id = 1;
                            UPDATE listaVehiculo SET id_concesionario = 2, id_vehiculo = 1 WHERE id = 2;
                            DELETE FROM listaVehiculo WHERE id = id_p;
                    END IF;
                COMMIT;
            END $$
    DELIMITER $$