SET @id_p = 6, @id_cliente_p = 5, @id_vehiculo_p = 2, @cantidad_hora_p = 5;
DELIMITER $$ 
    CREATE PROCEDURE general_reserva ()
        BEGIN 
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
            END;
            START TRANSACTION;
                IF (SELECT COUNT(*) FROM reserva WHERE id_cliente = @id_cliente_p AND id_vehiculo = @id_vehiculo_p) > 0 THEN -- PROCEDIMIENTO: INSERTAR reserva
                    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El reserva ya existe';
                    ELSE
                    INSERT INTO reserva VALUES (1, 1, 1, 1), (2, 2, 2, 2), (3, 3, 3, 3), (4, 4, 4, 4), (5, 5, 5, 5), (@id_p, @id_cliente_p, @id_vehiculo_p, @cantidad_hora_p);
                END IF;
                -- ACTUALIZAR Y ELIMINAR reserva
                IF NOT EXISTS(SELECT 1 FROM reserva WHERE id = @id_p)THEN
                    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El reserva no existe';
                    ELSE
                        UPDATE reserva SET id_cliente = 1, id_vehiculo = 1, cantidad_hora = 3 WHERE id = 1;
                        UPDATE reserva SET id_cliente = 2, id_vehiculo = 2, cantidad_hora = 4 WHERE id = 2;
                        DELETE FROM reserva WHERE id = @id_p;
                END IF;
            COMMIT;
        END $$
DELIMITER $$