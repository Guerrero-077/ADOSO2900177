SET @id_p = 6, @id_genero_p = 4, @id_pelicula_p = 1;
DELIMITER $$
    CREATE PROCEDURE general_pelicula_genero()
        BEGIN
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
            END;
            START TRANSACTION;
                IF NOT EXISTS (SELECT 1 FROM pelicula_genero WHERE id_pelicula = @id_pelicula_p AND id_genero = @id_genero_p) THEN  -- INSERTAR PELÍCULA-GÉNERO
                    INSERT INTO pelicula_genero VALUES (1, 1, 1), (2, 1, 2), (3, 2, 3), (4, 3, 5), (5, 4, 4), (@id_p, @id_genero_p, @id_pelicula_p);
                    ELSE
                        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Error: La relación película-género ya existe';
                END IF; 
                -- PROCEDIMIENTO: ACTUALIZAR PELÍCULA-GÉNERO
                IF EXISTS (SELECT 1 FROM pelicula_genero WHERE id = @id_p) THEN
                    UPDATE pelicula_genero SET id_genero = 1, id_pelicula = 4 WHERE id = 1;
                    UPDATE pelicula_genero SET id_genero = 2, id_pelicula = 4 WHERE id = 2;
                    DELETE FROM pelicula_genero WHERE id = @id_p;
                    ELSE
                        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Error: La relación película-género no existe';
                END IF;
            COMMIT;
        END $$
DELIMITER ;