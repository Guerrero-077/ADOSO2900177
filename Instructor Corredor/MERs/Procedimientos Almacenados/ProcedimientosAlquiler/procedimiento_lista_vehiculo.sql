SET @id_p = 6, @id_concesionario_p = 5, @id_vehiculo_p = 3;
DELIMITER $$
        CREATE PROCEDURE general_lista_vehiculo ()
        BEGIN 
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
            END;
            START TRANSACTION;
                        IF (SELECT COUNT(*) FROM listaVehiculo WHERE id_concesionario = @id_concesionario_p AND  id_vehiculo = @id_vehiculo_p) > 0 THEN -- INSERTAR listaVehiculo
                        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'La listaVehiculo ya existe';
                        ELSE
                        INSERT INTO listaVehiculo VALUES (1, 1, 1), (2, 2, 2), (3, 3, 3), (4, 4, 3), (5, 5, 4), (@id_p, @id_concesionario_p, @id_vehiculo_p );
                    END IF;
                    --  ACTUALIZAR listaVehiculo
                    IF NOT EXISTS(SELECT 1 FROM listaVehiculo WHERE id = @id_p)THEN
                        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'La listaVehiculo no existe';
                        ELSE
                            UPDATE listaVehiculo SET id_concesionario = 1, id_vehiculo = 1 WHERE id = 1;
                            UPDATE listaVehiculo SET id_concesionario = 2, id_vehiculo = 1 WHERE id = 2;
                            DELETE FROM listaVehiculo WHERE id = @id_p;
                    END IF;
                COMMIT;
            END $$
    DELIMITER $$