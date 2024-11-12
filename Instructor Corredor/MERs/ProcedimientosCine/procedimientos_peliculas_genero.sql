-- ============================================================== 
-- ENTIDAD: pelicula_genero
-- ==============================================================

-- CREATE TABLE pelicula_genero (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     id_pelicula INT NOT NULL,
--     id_genero INT NOT NULL,
--     FOREIGN KEY (id_pelicula) REFERENCES peliculas(id),
--     FOREIGN KEY (id_genero) REFERENCES genero(id)
-- );

    DELIMITER $$

    -- ============================================================== 
    -- PROCEDIMIENTO: INSERTAR PELÍCULA-GÉNERO
    -- ==============================================================


    CREATE PROCEDURE insertar_pelicula_genero(IN id_pelicula_p INT, IN id_genero_p INT)
        BEGIN
            IF NOT EXISTS (SELECT 1 FROM pelicula_genero WHERE id_pelicula = id_pelicula_p AND id_genero = id_genero_p) THEN
                INSERT INTO pelicula_genero (id_pelicula, id_genero) 
                VALUES (id_pelicula_p, id_genero_p);
            ELSE
                SIGNAL SQLSTATE '45000'
                SET MESSAGE_TEXT = 'Error: La relación película-género ya existe';
            END IF;
        END $$ 


    -- ============================================================== 
    -- PROCEDIMIENTO: ACTUALIZAR PELÍCULA-GÉNERO
    -- ==============================================================

    CREATE PROCEDURE actualizar_pelicula_genero(IN id_pelicula_p INT, IN id_genero_nuevo_p INT)
        BEGIN
            IF EXISTS (SELECT 1 FROM pelicula_genero WHERE id_pelicula = id_pelicula_p) THEN
                UPDATE pelicula_genero
                SET id_genero = id_genero_nuevo_p
                WHERE id_pelicula = id_pelicula_p;
            ELSE
                SIGNAL SQLSTATE '45000'
                SET MESSAGE_TEXT = 'Error: La relación película-género no existe';
            END IF;
        END $$ 

    -- ============================================================== 
    -- PROCEDIMIENTO: ELIMINAR PELÍCULA-GÉNERO
    -- ==============================================================

    CREATE PROCEDURE eliminar_pelicula_genero(IN id_pelicula_genero_p INT)
        BEGIN
            IF EXISTS (SELECT 1 FROM pelicula_genero WHERE id = id_pelicula_genero_p) THEN
                DELETE FROM pelicula_genero WHERE id = id_pelicula_genero_p;
            ELSE
                SIGNAL SQLSTATE '45000'
                SET MESSAGE_TEXT = 'Error: La relación película-género no existe';
            END IF;
        END $$ 



    -- ============================================================== 
    -- TRANSACTION: PROCESO DE INSERCIÓN DE PELÍCULAS-GÉNEROS
    -- ==============================================================

    CREATE PROCEDURE insertar_pelicula_genero_proceso()
        BEGIN
            DECLARE peliculaGenero VARCHAR(30);
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Error al insertar las relaciones película-género, no se realizó la transacción.';

            END;

            START TRANSACTION;
            CALL insertar_pelicula_genero(1, 1); 
            CALL insertar_pelicula_genero(1, 2); 
            CALL insertar_pelicula_genero(2, 3); 
            CALL insertar_pelicula_genero(3, 5);
            CALL insertar_pelicula_genero(4, 4);
            CALL insertar_pelicula_genero(4, 1);

            SET peliculaGenero = "Error";
            -- CALL insertar_pelicula_genero(5, peliculaGenero);
            
            COMMIT;

        END $$

    -- ============================================================== 
    -- TRANSACTION: PROCESO DE ACTUALIZACIÓN DE PELÍCULAS-GÉNEROS
    -- ==============================================================

    CREATE PROCEDURE actualizar_pelicula_genero_proceso()
        BEGIN
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Error al actualizar las relaciones película-género, no se realizó la transacción.';
            END;

            START TRANSACTION;

            CALL actualizar_pelicula_genero(1, 4);
            CALL actualizar_pelicula_genero(2, 4);
            
            COMMIT;

        END $$


    -- ============================================================== 
    -- TRANSACTION: PROCESO DE ELIMINACIÓN DE PELÍCULAS-GÉNEROS
    -- ==============================================================

    CREATE PROCEDURE eliminar_pelicula_genero_proceso()
        BEGIN
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Error al eliminar las relaciones película-género, no se realizó la transacción.';
            END;

            START TRANSACTION;

            CALL eliminar_pelicula_genero(6);
            
            COMMIT;

        END $$


    -- ============================================================== 
    -- TRANSACTION: TODO PODEROSO pelicula genero
    -- ==============================================================

        CREATE PROCEDURE todo_poderoso_pelicula_genero()
            BEGIN
                DECLARE EXIT HANDLER FOR SQLEXCEPTION
                BEGIN
                    ROLLBACK;
                SELECT 'Error: Ha ocurrido un problema con las transacciones de las funciones, ninguna operación se realizó.';

                END;

                START TRANSACTION;

                CALL insertar_pelicula_genero_proceso();
                CALL actualizar_pelicula_genero_proceso();
                CALL eliminar_pelicula_genero_proceso();

                COMMIT;
                SELECT 'Transacción de pelicula genero completada con éxito' AS resultado;


            END $$

    DELIMITER ;