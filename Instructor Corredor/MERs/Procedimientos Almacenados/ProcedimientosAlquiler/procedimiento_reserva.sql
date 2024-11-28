DELIMITER $$ 
    CREATE PROCEDURE general_reserva (IN id_p INT, id_cliente_p INT, id_vehiculo_p INT, cantidad_hora_p INT)
        BEGIN 
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Ha ocurrido un problema con las transacciones de reserva.' AS reserva;
            END;
            START TRANSACTION;
                IF (SELECT COUNT(*) FROM reserva WHERE id_cliente = id_cliente_p AND id_vehiculo = id_vehiculo_p) > 0 THEN -- PROCEDIMIENTO: INSERTAR reserva
                    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El reserva ya existe';
                    ELSE
                    INSERT INTO reserva VALUES (1, 1, 1, 1), (2, 2, 2, 2), (3, 3, 3, 3), (4, 4, 4, 4), (5, 5, 5, 5), (id_p, id_cliente_p, id_vehiculo_p, cantidad_hora_p);
                END IF;
                IF NOT EXISTS(SELECT 1 FROM reserva WHERE id = id_p)THEN -- ACTUALIZAR Y ELIMINAR reserva
                    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El reserva no existe';
                    ELSE
                        UPDATE reserva SET id_cliente = 1, id_vehiculo = 1, cantidad_hora = 3 WHERE id = 1;
                        UPDATE reserva SET id_cliente = 2, id_vehiculo = 2, cantidad_hora = 4 WHERE id = 2;
                        DELETE FROM reserva WHERE id = id_p;
                END IF;
            COMMIT;
        END $$
DELIMITER $$