SET @id_p = 5, @metodo_p = 'Cheques';
DELIMITER $$
    CREATE PROCEDURE general_metodo_pago()
        BEGIN 
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
            END;
            START TRANSACTION;
                IF (SELECT COUNT(*) FROM metodoPago WHERE metodo = @metodo_p) > 0 THEN -- INSERTAR metodoPago
                    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El metodo de pago ya existe';
                    ELSE
                        INSERT INTO metodoPago VALUES (1, 'Tarjetas de débito y crédi'), (2, 'Tranferencia Banca'), (3, 'Nequi'), (4,'Efectivo'), (@id_p , @metodo_p);
                END IF;
                -- ACTUALIZAR Y ELIMINAR metodoPago
                IF NOT EXISTS(SELECT 1 FROM metodoPago WHERE id = @id_p)THEN
                    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El metodo de pago no existe';
                    ELSE
                        UPDATE metodoPago SET metodo = 'Tarjetas de débito y crédito' WHERE id = 1;
                        UPDATE metodoPago SET metodo = 'Tranferencia Bancaria' WHERE id = 2;
                        DELETE FROM metodoPago WHERE id = @id_p;
                END IF;
            COMMIT;
        END $$
DELIMITER $$