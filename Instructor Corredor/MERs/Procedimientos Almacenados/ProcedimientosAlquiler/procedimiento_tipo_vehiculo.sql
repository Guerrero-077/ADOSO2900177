DELIMITER $$
    CREATE PROCEDURE general_tipo_vehiculo(IN id_p INT, IN tipo_vehiculo_p VARCHAR(50), IN valor_hora_p DECIMAL(10,2))
        BEGIN
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Ha ocurrido un problema con las transacciones de tipo de vehiculo.' AS tipo_vehiculo;
            START TRANSACTION;
                IF (SELECT COUNT(*) FROM tipo_vehiculo WHERE tipo = @tipo_vehiculo_p) > 0 THEN -- INSERTAR PERSONA
                    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El tipo de vehiculo ya existe';
                    ELSE
                        INSERT INTO tipo_vehiculo VALUES(1, 'Sedan', 1500000.00), (2, 'Deportivo', 2500000.00), (3, 'Moto', 500000.00), (4, 'Bicicleta', 20000.00), (id_p, tipo_vehiculo_p, valor_hora_p);
                END IF;
                IF NOT EXISTS(SELECT 1 FROM tipo_vehiculo WHERE id = id_p)THEN -- ACTUALIZAR Y ELIMINAR tipo de vehiculo
                    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El tipo de vehiculo no existe';
                    ELSE
                        UPDATE tipo_vehiculo SET tipo = 'Sedan', valor_hora = 2000000.00 WHERE id = 1;
                        UPDATE tipo_vehiculo SET tipo = 'Deportivo', valor_hora = 3000000.00 WHERE id = 2;
                        DELETE FROM tipo_vehiculo WHERE id = id_p;
                END IF;
            COMMIT;
        END $$
DELIMITER ;