SET @id_p = 6, @titulo_p = 'Avengers', @estreno = '2020-11-09';
DELIMITER $$
        CREATE PROCEDURE general_pelicula()
            BEGIN
                DECLARE EXIT HANDLER FOR SQLEXCEPTION
                BEGIN
                    ROLLBACK;
                END;
                START TRANSACTION;
                IF EXISTS (SELECT 1 FROM peliculas WHERE titulo = @titulo_p) THEN  -- INSERTAR PELÍCULA
                    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Error: La película ya existe';
                    ELSE
                        INSERT INTO peliculas VALUES (1, 'operacion zombi', '2024-11-07'), (2, 'El tiempo que tenemo', '2024-11-08'), (3, 'Código Traje Rojo', '2024-11-09'), (4, 'La Patasola', '2024-11-09'), (5, 'Venon: El Último Baile', '2024-11-09'), (@id_p, @titulo_p, @estreno);
                END IF;
                -- ACTUALIZAR PELÍCULA
                IF NOT EXISTS (SELECT 1 FROM peliculas WHERE id = @id_p) THEN
                    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Error: La película no existe';
                    ELSE
                        UPDATE peliculas SET titulo = 'Operaón Zombie' WHERE id = 1;
                        UPDATE peliculas SET titulo = 'El Tiempo Que Tenemos' WHERE id = 2;
                        DELETE FROM peliculas WHERE id = @id_p;
                END IF;
                COMMIT;
            END $$
    DELIMITER ;