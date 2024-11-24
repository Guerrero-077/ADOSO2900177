SET @id_p = 5, @rol_p = 'Editor'; 
DELIMITER $$
    CREATE PROCEDURE general_rol()
        BEGIN
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
            END;
            START TRANSACTION;  
                IF NOT EXISTS (SELECT 1 FROM roles WHERE rol = @rol_p) THEN -- INSERTAR ROL
                    INSERT INTO roles VALUES (1, 'Protagonis'), (2, 'Atagonista'), (3, 'Actor Secundario'), (4, 'Director'), (@id_p, @rol_p);
                    ELSE
                        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Error: El rol ya existe';
                END IF;
                -- ACTUALIZAR Y ELIMINAR ROL
                IF NOT EXISTS (SELECT 1 FROM roles WHERE id = @id_p) THEN
                    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Error: El rol no existe';
                    ELSE
                        UPDATE roles SET rol = 'Protagonista' WHERE id = 1;
                        UPDATE roles SET rol = 'Antagonista' WHERE id = 2;
                        DELETE FROM roles WHERE id = @id_p;
                END IF;
            COMMIT;
        END $$
DELIMITER ;