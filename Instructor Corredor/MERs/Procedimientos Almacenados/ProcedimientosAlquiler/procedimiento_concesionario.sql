    -- ============================================================== 
    -- ENTIDAD: concesionario
    -- ==============================================================

    -- CREATE TABLE concesionario (
    --     id INT PRIMARY KEY AUTO_INCREMENT,
    --     nombre VARCHAR(100) NOT NULL,
    --     direccion VARCHAR(150) NOT NULL
    -- );

    DELIMITER $$
    -- ============================================================== 
    -- PROCEDIMIENTO: INSERTAR concesionario
    -- ==============================================================

        CREATE PROCEDURE insertar_concesionario (
            IN nombre_p VARCHAR(50),
            IN direccion_p VARCHAR(50)
        )
            BEGIN
                IF (SELECT COUNT(*) FROM concesionario WHERE nombre = nombre_p) > 0 THEN
                    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El concesionario ya existe';
                    ELSE
                    INSERT INTO concesionario (nombre, direccion)
                    VALUES (nombre_p, direccion_p);
                END IF;
            END $$     

    -- ============================================================== 
    -- PROCEDIMIENTO: ACTUALIZAR concesionario
    -- ==============================================================
        CREATE PROCEDURE actualizar_concesionario (
            IN id_p INT,
            IN nombre_p VARCHAR(50),
            IN direccion_p VARCHAR(50)
        )
        BEGIN
            IF NOT EXISTS(SELECT 1 FROM concesionario WHERE id = id)THEN
                SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El concesionario no existe';
                ELSE
                    UPDATE concesionario SET nombre = nombre_p, direccion = direccion_p WHERE id = id_p;
            END IF;
        END $$

    -- ============================================================== 
    -- PROCEDIMIENTO: ELIMINAR concesionario
    -- ==============================================================
        CREATE PROCEDURE eliminar_concesionario (
            IN id_p INT
        )
            BEGIN
                IF NOT EXISTS(SELECT 1 FROM concesionario WHERE id = id_p)THEN
                    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El concesionario no existe';
                    ELSE
                        DELETE FROM concesionario WHERE id = id_p;
                END IF;
            END $$

    -- ============================================================== 
    -- TRANSACTION: INSERTAR concesionario PROCESO
    -- ============================================================== 

        CREATE PROCEDURE insertar_concesionario_proceso()   
        BEGIN 
            DECLARE concesionarioErrro INT;
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                        SELECT 'Error: Error al insertar concesionario, no se realizó la transacción.';

                
            END;
        
        START TRANSACTION;
        CALL insertar_concesionario('Ford Simotor', 'Carrer 5 N. 3');
        CALL insertar_concesionario('Autoshop Chevrolet', 'Carrera 5 N. 2');
        CALL insertar_concesionario('JMC Automotores', 'Carrera 5 N. 15');
        CALL insertar_concesionario('inverautos', 'Carrera 5 N. 11');
        CALL insertar_concesionario('Distoyota', 'Carrera 5 N. 10');
        
        CALL insertar_concesionario('Distoyotas', 'Carrera 5 N. 10');

        SET concesionarioErrro = NULL;
        -- CALL insertar_concesionario(concesionarioErrro, 'Carrera 5 N. 10'); -- Esto debería fallar

            COMMIT;
        END $$

    -- ============================================================== 
    -- TRANSACTION: ACTURALIZAR concesionario PROCESO
    -- ============================================================== 
        CREATE PROCEDURE actualizar_concesionario_proceso()
            BEGIN
                DECLARE concesionarioErrro VARCHAR(30);

                DECLARE EXIT HANDLER FOR SQLEXCEPTION
                BEGIN
                    ROLLBACK;
                    SELECT 'Error: Error al actualizar concesionario, no se realizó la transacción.';
                END;
                
                START TRANSACTION;
                CALL actualizar_concesionario(1, 'Ford Simotor', 'Carrera 5 N. 3');
                CALL actualizar_concesionario(2, 'Autoshop Chevrolet', 'Carrera 5 N. 26');

                SET concesionarioErrro = 'Hola Mundo';
                -- CALL actualizar_concesionario(concesionarioErrro, 'Autoshop Chevrolet', 'Carrera 5 N. 26');
                
                COMMIT;
            END $$

    -- ============================================================== 
    -- TRANSACTION: ELIMINAR concesionario PROCESO
    -- ============================================================== 
        CREATE PROCEDURE eliminar_concesionario_proceso()
            BEGIN
                DECLARE concesionarioErrro VARCHAR(30);
                DECLARE EXIT HANDLER FOR SQLEXCEPTION
                BEGIN
                    ROLLBACK;
                    SELECT 'Error: Error al eliminar concesionario, no se realizó la transacción.';
                END;

                START TRANSACTION;
                
                CALL eliminar_concesionario(6);

                SET concesionarioErrro = 'Hola Mundo';
                -- CALL eliminar_concesionario(6);

                COMMIT;
            END $$

    -- ============================================================== 
    -- PROCEDIMIENTO: TODO PODEROSO concesionario 
    -- ============================================================== 
        CREATE PROCEDURE todo_poderoso_concesionario()
            BEGIN
                DECLARE EXIT HANDLER FOR SQLEXCEPTION
                BEGIN
                    ROLLBACK;
                    
                SELECT 'Error: Ha ocurrido un problema con las transacciones de las funciones, ninguna operación se realizó.';
                END;

                START TRANSACTION;

                CALL insertar_concesionario_proceso();
                CALL actualizar_concesionario_proceso();
                CALL eliminar_concesionario_proceso();

                COMMIT;
                SELECT 'Transacción de concesionario completada con éxito' AS resultado;
                
            END $$
    DELIMITER $$