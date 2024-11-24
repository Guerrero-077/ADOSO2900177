SET @id_p = 5, @nombre_p = 'Cinepolis', @direccion_p = 'Calle 8';
DELIMITER $$
    CREATE PROCEDURE general_cine()
        BEGIN
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
            END;
            START TRANSACTION;
            IF NOT EXISTS (SELECT 1 FROM cines WHERE nombre = @nombre_p AND direccion = @direccion_p) THEN -- INSERTAR CINE
                INSERT INTO cines VALUES (1, 'Cinemar', 'Calle 8 N.38'), (2, 'Royal Films', 'Calle 64 N. 64'), (3, 'Cinela', 'Calle 8 N.50'), (@id_p, @nombre_p, @direccion_p);
                ELSE
                    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Error: El cine ya existe';
            END IF; 
            --  ACTUALIZAR CINE
            IF NOT EXISTS (SELECT 1 FROM cines WHERE id = @id_p) THEN
                SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Error: El cine no existe';
                ELSE
                    UPDATE cines SET nombre = 'Cinemark'  WHERE id = 1;
                    UPDATE cines SET nombre = 'Cineland'  WHERE id = 3;
                    DELETE FROM cines WHERE id = @id_p;
            END IF;
                COMMIT;
        END $$
DELIMITER ;