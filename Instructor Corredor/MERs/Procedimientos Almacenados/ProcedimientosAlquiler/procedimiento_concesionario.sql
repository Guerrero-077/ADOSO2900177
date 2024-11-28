DELIMITER $$
        CREATE PROCEDURE general_concesionario (IN id_p INT, IN nombre_p VARCHAR(50), IN direccion VARCHAR(100))
        BEGIN 
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Ha ocurrido un problema con las transacciones de concesionario.' AS concesionario;
            END;
            START TRANSACTION;
                IF (SELECT COUNT(*) FROM concesionario WHERE nombre = nombre_p) > 0 THEN -- INSERTAR concesionario
                    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El concesionario ya existe';
                    ELSE
                    INSERT INTO concesionario VALUES (1, 'Ford Simotor', 'Carrer 5 N. 3'), (2,'Autoshop Chevrolet', 'Carrera 5 N. 2'), (3,'JMC Automotores', 'Carrera 5 N. 15'), (4,'inverautos', 'Carrera 5 N. 11'), (5,'Distoyota', 'Carrera 5 N. 10'), (id_p, nombre_p, direccion);
                END IF;
                IF NOT EXISTS(SELECT 1 FROM concesionario WHERE id = id_p)THEN -- ACTUALIZAR Y ELIMINAR concesionario
                    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El concesionario no existe';
                    ELSE
                        UPDATE concesionario SET nombre = 'Ford Simotor', direccion = 'Carrera 5 N. 3' WHERE id = 1;
                        UPDATE concesionario SET nombre = 'Autoshop Chevrolet', direccion = 'Carrera 5 N. 26' WHERE id = 2;
                    DELETE FROM concesionario WHERE id = id_p;
                END IF;
            COMMIT;
        END $$
DELIMITER $$