-- ============================================================== 
-- ENTIDAD: elenco
-- ==============================================================

-- CREATE TABLE elenco (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     id_pelicula INT NOT NULL,
--     id_persona INT NOT NULL,
--     id_rol INT NOT NULL,
--     FOREIGN KEY (id_pelicula) REFERENCES peliculas(id),
--     FOREIGN KEY (id_persona) REFERENCES persona(id),
--     FOREIGN KEY (id_rol) REFERENCES roles(id)
-- );

DELIMITER $$

-- ============================================================== 
-- PROCEDIMIENTO: INSERTAR ELENCO
-- ==============================================================

    CREATE PROCEDURE insertar_elenco(IN id_pelicula_p INT, IN id_persona_p INT, IN id_rol_p INT)
        BEGIN
            IF NOT EXISTS (SELECT 1 FROM elenco WHERE id_pelicula = id_pelicula_p AND id_persona = id_persona_p AND id_rol = id_rol_p) THEN
                INSERT INTO elenco (id_pelicula, id_persona, id_rol) 
                VALUES (id_pelicula_p, id_persona_p, id_rol_p);
            ELSE
                SIGNAL SQLSTATE '45000'
                SET MESSAGE_TEXT = 'Error: El elenco ya existe';
            END IF;
        END $$


-- ============================================================== 
-- PROCEDIMIENTO: ACTUALIZAR ELENCO
-- ==============================================================

    CREATE PROCEDURE actualizar_elenco(IN id_pelicula_p INT, IN id_persona_p INT, IN nuevo_rol_p INT)
        BEGIN
            IF NOT EXISTS (SELECT 1 FROM elenco WHERE id_pelicula = id_pelicula_p AND id_persona = id_persona_p ) THEN
                SIGNAL SQLSTATE '45000'
                SET MESSAGE_TEXT = 'Error: El elenco no existe';
            ELSE
                UPDATE elenco
                SET id_rol = nuevo_rol_p
                WHERE id_pelicula = id_pelicula_p AND id_persona = id_persona_p;
            END IF;
        END $$

-- ============================================================== 
-- PROCEDIMIENTO: ELIMINAR ELENCO
-- ==============================================================

    CREATE PROCEDURE eliminar_elenco(IN id_pelicula_p INT)
        BEGIN
            IF NOT EXISTS (SELECT 1 FROM elenco WHERE id = id_pelicula_p) THEN
                SIGNAL SQLSTATE '45000'
                SET MESSAGE_TEXT = 'Error: El elenco no existe';
            ELSE
                DELETE FROM elenco WHERE id = id_pelicula_p;
            END IF;
        END $$


-- ============================================================== 
-- TRANSACTION: PROCESO DE INSERCIÓN DE ELENCO
-- ==============================================================

    CREATE PROCEDURE insertar_elenco_proceso()
        BEGIN

            DECLARE elencoError VARCHAR(30);
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Error al insertar el elenco, no se realizó la transacción.';

            END;

            START TRANSACTION;
            
            CALL insertar_elenco(1, 1, 4);  
            CALL insertar_elenco(2, 2, 1);  
            CALL insertar_elenco(3, 3, 2);  
            CALL insertar_elenco(4, 4, 3);  
            CALL insertar_elenco(2, 1, 2);
            CALL insertar_elenco(3, 1, 2); 

            SET elencoError = "Hola Mundo!";
            -- CALL insertar_elenco(5, 1, 2);  
            
            COMMIT;
        END $$


-- ============================================================== 
-- TRANSACTION: PROCESO DE ACTUALIZACIÓN DE ELENCO
-- ==============================================================

    CREATE PROCEDURE actualizar_elenco_proceso()
        BEGIN
            DECLARE elencoError VARCHAR(30);
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Error al actualizar el elenco, no se realizó la transacción.';
            END;

            START TRANSACTION;
            
            CALL actualizar_elenco(1, 1, 3);  
            CALL actualizar_elenco(2, 2, 3);  

            SET elencoError = "Hola Mundo!";
            -- CALL actualizar_elenco(elencoError, 2, 3);  
            
            COMMIT;
        END $$


-- ============================================================== 
-- TRANSACTION: PROCESO DE ELIMINACIÓN DE ELENCO
-- ==============================================================

    CREATE PROCEDURE eliminar_elenco_proceso()
        BEGIN
            DECLARE elencoError VARCHAR(30);
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Error al eliminar el elenco, no se realizó la transacción.';
            END;

            START TRANSACTION;

            CALL eliminar_elenco(6);

            SET elencoError = "Hola Mundo!";
            -- CALL eliminar_elenco(elencoError);
            
            COMMIT;
        END $$



-- ============================================================== 
-- TRANSACTION: TODO PODEROSO elenco
-- ==============================================================



    CREATE PROCEDURE todo_poderoso_elenco()
        BEGIN
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Ha ocurrido un problema con las transacciones del elenco, ninguna operación se realizó.';
            END;

            START TRANSACTION;

            CALL insertar_elenco_proceso();
            CALL actualizar_elenco_proceso();
            CALL eliminar_elenco_proceso(); 

            COMMIT;
            SELECT 'Transacción de elenco completada con éxito' AS resultado;


        END $$

DELIMITER ;
    