SET @id_p = 6, @nombre_p = 'Tom Holland';
DELIMITER $$ 
    CREATE PROCEDURE general_persona()
        BEGIN
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
            END;
            START TRANSACTION;
                IF NOT EXISTS (SELECT 1 FROM persona WHERE nombre = @nombre_p) THEN -- INSERTAR PERSONA
                    INSERT INTO persona VALUES (1, 'Kongkiat Komsiri'), (2, 'Andrew Garfie'), (3, 'Dwayne Johnson'), (4, 'Robinson Díaz'), (5, 'Tom Hardy'), (@id_p, @nombre_p);
                    ELSE
                        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Error: La persona ya existe';
                END IF;
                -- PROCEDIMIENTO: ACTUALIZAR PERSONA
                IF NOT EXISTS (SELECT 1 FROM persona WHERE id = @id_p) THEN
                    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Error: La persona no existe';
                    ELSE
                    UPDATE persona SET nombre = 'Kongkiat Khomsiri' WHERE id = 1;
                    UPDATE persona SET nombre = 'Andrew Garfield' WHERE id = 2;
                    DELETE FROM persona WHERE id = @id_p;
                END IF;
            COMMIT;
        END $$
DELIMITER ;