DELIMITER $$
    CREATE PROCEDURE general_historial_uso (IN id_p INT, IN id_vehiculo_p INT, IN id_cliente_p INT, IN fecha_uso_p DATE)
        BEGIN 
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Ha ocurrido un problema con las transacciones de historial de Uso.' AS historialUso;
            END;
            START TRANSACTION;
                IF (SELECT COUNT(*) FROM historialUso WHERE id_vehiculo = id_vehiculo_p AND @d_cliente = id_cliente_p AND fecha_uso = @fecha_uso_p ) > 0 THEN --  INSERTAR historialUso
                    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El historial de uso ya existe para esta fecha';
                    ELSE
                        INSERT INTO historialUso VALUES (1, 1, 1, '2024-11-01'), (2, 2, 2, '2024-11-01'), (3, 3, 3, '2024-10-28'), (4, 4, 4, '2024-10-27'), (5, 5, 5, '2024-09-15'), (id_p, id_vehiculo_p, id_cliente_p, fecha_uso_p);
                END IF;
                IF NOT EXISTS(SELECT 1 FROM historialUso WHERE id = id_p) THEN -- ACTUALIZAR Y ELIMIANR historialUso
                    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El historial de uso no existe';
                    ELSE
                        UPDATE historialUso SET id_vehiculo = 1, id_cliente = 1, fecha_uso = '2024-11-10' WHERE id = 1;
                        UPDATE historialUso SET id_vehiculo = 2, id_cliente = 2, fecha_uso = '2024-11-11' WHERE id = 2;
                        DELETE FROM historialUso WHERE id = id_p;
                END IF;
            COMMIT;
        END $$
DELIMITER ;