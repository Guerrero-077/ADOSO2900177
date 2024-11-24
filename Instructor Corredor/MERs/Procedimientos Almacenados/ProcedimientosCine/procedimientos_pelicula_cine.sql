SET @id_p = 5, @id_cine_p = 3, @id_pelicula_p = 1;
DELIMITER $$
    CREATE PROCEDURE general_pelicula_cine()
        BEGIN
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
            END;
            START TRANSACTION;
                IF NOT EXISTS (SELECT 1 FROM pelicula_cine WHERE id_cine = @id_cine_p AND id_pelicula = @id_pelicula_p) THEN -- INSERTAR PELICULA CINE
                    INSERT INTO pelicula_cine VALUES (1, 1, 1), (2, 1, 2), (3, 2, 3), (4, 3, 4), (@id_p, @id_cine_p, @id_pelicula_p);
                    ELSE
                        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Error: La película ya está asociada con el cine';
                END IF;
                -- ACTUALIZAR Y ELIMINAR PELÍCULA CINE
                IF NOT EXISTS (SELECT 1 FROM pelicula_cine WHERE id = @id_p) THEN
                    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Error: La película no está asociada con el cine';
                    ELSE
                        UPDATE pelicula_cine SET id_cine = 1, id_pelicula = 1  WHERE id = 1;
                        UPDATE pelicula_cine SET id_cine = 2, id_pelicula = 2  WHERE id = 2;
                        DELETE FROM pelicula_cine WHERE id = @id_p;
                END IF;
            COMMIT;
        END $$
DELIMITER ;