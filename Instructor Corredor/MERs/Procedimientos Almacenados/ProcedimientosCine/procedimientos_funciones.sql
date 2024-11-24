SET @id_p = 5, @id_cine_p = 2, @id_pelicula_p = 3 , @funcion_p = '2024-11-08 22:00:00';
DELIMITER $$ 
    CREATE PROCEDURE general_funcion()
        BEGIN
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
            END;
            START TRANSACTION;
                IF NOT EXISTS (SELECT 1 FROM funciones WHERE id_pelicula = @id_pelicula_p AND id_cine = @id_cine_p) THEN -- INSERTAR FUNCIÓN
                    INSERT INTO funciones VALUES (1, 1, 1, '2024-11-05 20:00:00'), (2, 1, 2, '2024-11-06 18:30:00'), (3, 2, 3, '2024-11-07 21:00:00'), (4, 3, 1, '2024-11-08 22:00:00'), (@id_p, @id_cine_p, @id_pelicula_p, @funcion_p_p);
                    ELSE
                        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Error: La función ya existe';
                END IF; 
                -- ACTUALIZAR Y ELIMINAR FUNCIÓN
                IF EXISTS (SELECT 1 FROM funciones WHERE id_cine = @id_cine_p AND id_pelicula = @id_pelicula_p) THEN
                    UPDATE funciones SET id_cine = 1, id_pelicula = 1, funcion = '2024-11-01 14:00:00' WHERE  id = 1;
                    UPDATE funciones SET id_cine = 1, id_pelicula = 2, funcion = '2024-11-01 14:00:00' WHERE  id = 2;
                    DELETE FROM funciones WHERE id = @id_p;
                    ELSE
                        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Error: La función no existe';
                END IF;
            COMMIT;
        END $$
DELIMITER ;