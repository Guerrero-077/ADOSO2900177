SET @id_tipo = 5, @tipo_vehiculo_p = 'Camioneta', @valor_hora_p = 3000000.00;
DELIMITER $$
    CREATE PROCEDURE general_tipo_vehiculo ()
        BEGIN
                IF (SELECT COUNT(*) FROM tipo_vehiculo WHERE tipo = @tipo_vehiculo_p) > 0 THEN
                    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El tipo de vehiculo ya existe';
                    ELSE
                        INSERT INTO tipo_vehiculo VALUES(1, 'Sedan', 1500000.00), (2,'Deportivo', 2500000.00), (3, 'Moto', 500000.00), (4, 'Bicicleta', 20000.00), (@id_tipo, @tipo_vehiculo_p, @valor_hora_p);
                END IF;  
            -- PROCEDIMIENTO: ACTUALIZAR TIPO DE VEHICULO
            IF NOT EXISTS(SELECT 1 FROM tipo_vehiculo WHERE id = @id_tipo) THEN
                SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El tipo de vehiculo no existe';
                ELSE
                    UPDATE tipo_vehiculo SET tipo = 'Sedan', valor_hora = 2000000.00 WHERE id = 1;
                    UPDATE tipo_vehiculo SET tipo = 'Deportivo', valor_hora = 3000000.00 WHERE id = 2;
            -- PROCEDIMIENTO: ELIMINAR TIPO DE VEHICULO
                    DELETE FROM tipo_vehiculo WHERE id = @id_tipo;
            END IF;
            -- IF NOT EXISTS(SELECT 1 FROM tipo_vehiculo WHERE id = @id_tipo) THEN
            --     SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El tipo de vehiculo no existe';
            --     ELSE
            -- END IF;
        END $$
DELIMITER $$