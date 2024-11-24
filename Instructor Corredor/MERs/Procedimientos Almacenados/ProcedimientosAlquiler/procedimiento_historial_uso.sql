SET @id_p = 6, @id_vehiculo_p = 5, @id_cliente_p = 3, @fecha_uso_p = '2024-09-15';
DELIMITER $$
    CREATE PROCEDURE general_historial_uso ()
        BEGIN 
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
            END;
            START TRANSACTION;
                IF (SELECT COUNT(*) FROM historialUso WHERE id_vehiculo = @id_vehiculo_p AND @id_cliente = @id_cliente_p AND fecha_uso = @fecha_uso_p ) > 0 THEN --  INSERTAR historialUso
                    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El historial de uso ya existe para esta fecha';
                    ELSE
                        INSERT INTO historialUso VALUES (1, 1, 1, '2024-11-01'), (2, 2, 2, '2024-11-01'), (3, 3, 3, '2024-10-28'), (4, 4, 4, '2024-10-27'), (5, 5, 5, '2024-09-15'), (@id_p, @id_vehiculo_p, @id_cliente_p, @fecha_uso_p);
                END IF;
                -- ACTUALIZAR Y ELIMIANR historialUso
                IF NOT EXISTS(SELECT 1 FROM historialUso WHERE id = @id_p) THEN
                    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El historial de uso no existe';
                    ELSE
                        UPDATE historialUso SET id_vehiculo = 1, id_cliente = 1, fecha_uso = '2024-11-10' WHERE id = 1;
                        UPDATE historialUso SET id_vehiculo = 2, id_cliente = 2, fecha_uso = '2024-11-11' WHERE id = 2;
                        DELETE FROM historialUso WHERE id = @id_p;
                END IF;
            COMMIT;
        END $$
DELIMITER ;