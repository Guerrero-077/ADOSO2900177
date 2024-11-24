SET @id_p = 6, @id_pelicula_p = 3, @id_persona_p = 1, @id_rol_p = 2;
DELIMITER $$
    CREATE PROCEDURE general_elenco()
        BEGIN
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
            END;
            START TRANSACTION;
                IF NOT EXISTS (SELECT 1 FROM elenco WHERE id_pelicula = @id_pelicula_p AND id_persona = @id_persona_p AND id_rol = @id_rol_p) THEN -- INSERTAR ELENCO
                    INSERT INTO elenco VALUES (1, 1, 1, 4), (2, 2, 2, 1), (3, 3, 3, 2), (4, 4, 4, 3), (5, 2, 1, 2), (@id_p, @id_pelicula_p, @id_persona_p, @id_rol_p);
                    ELSE
                        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Error: El elenco ya existe';
                END IF; 
                -- ACTUALIZAR Y ELIMINAR ELENCO
                IF NOT EXISTS (SELECT 1 FROM elenco WHERE id = @id_p) THEN
                    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Error: El elenco no existe';
                    ELSE
                        UPDATE elenco SET id_rol = 1, id_pelicula = 1, id_persona = 3 WHERE id = 1;
                        UPDATE elenco SET id_rol = 2, id_pelicula = 2, id_persona = 3 WHERE id = 2;
                        DELETE FROM elenco WHERE id = @id_p;
                END IF;
            COMMIT;
        END $$
DELIMITER ;