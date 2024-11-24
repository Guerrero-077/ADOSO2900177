SET @id_p = 6, @tipo_genero_p = 'Romance';
DELIMITER $$
    CREATE PROCEDURE general_genero()
        BEGIN
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
            END;
            START TRANSACTION;
                IF EXISTS (SELECT 1 FROM genero WHERE tipo_genero = @tipo_genero_p) THEN -- INSERTAR GÉNERO
                    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Error: Este género ya existe.';
                    ELSE
                        INSERT INTO genero VALUES (1, 'Acción'), (2, 'Animación'), (3, 'Drama'), (4, 'Terror'), (5, 'Comedia'), (@id_p, @tipo_genero_p);
                END IF;
                -- ACTUALIZAR Y ELIMINAR GÉNERO
                IF NOT EXISTS (SELECT 1 FROM genero WHERE id = @id_p) THEN
                    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Error: El género no existe.';
                    ELSE
                        UPDATE genero SET tipo_genero = 'Ficcion' WHERE id = 1;
                        UPDATE genero SET tipo_genero = 'Suspenso' WHERE id = 2;
                        DELETE FROM genero WHERE id = @id_p;
                END IF;
            COMMIT;
        END $$
DELIMITER ;