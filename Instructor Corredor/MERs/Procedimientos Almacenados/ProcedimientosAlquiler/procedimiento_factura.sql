SET @id_p = 5, @id_reserva_p = 5, @id_metodoPago_p = 4, @total_p = 1750000.00;
DELIMITER $$
        CREATE PROCEDURE general_factura ()
        BEGIN 
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
            END;
            START TRANSACTION;
                        IF (SELECT COUNT(*) FROM factura WHERE id_reserva = @id_reserva_p) > 0 THEN -- INSERTAR factura
                            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'La factura ya existe';
                            ELSE
                                INSERT INTO factura VALUES (1, 1, 1, 150000.00), (2, 2, 2, 500000.00), (3, 3, 3, 150000.00), (4, 4, 3, 75000.00), (@id_p, @id_reserva_p, @id_metodoPago_p, @total_p);
                        END IF;
                        -- PROCEDIMIENTO: ACTUALIZAR factura
                        IF NOT EXISTS(SELECT 1 FROM factura WHERE id = @id_p)THEN
                            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'La factura no existe';
                            ELSE
                                UPDATE factura SET id_metodoPago = 1, total = 1500000.00 WHERE id = 1;
                                UPDATE factura SET id_metodoPago = 2, total = 5000000.00 WHERE id = 2;
                                DELETE FROM factura WHERE id = @id_p;
                        END IF;
                    COMMIT;
            END $$
    DELIMITER $$