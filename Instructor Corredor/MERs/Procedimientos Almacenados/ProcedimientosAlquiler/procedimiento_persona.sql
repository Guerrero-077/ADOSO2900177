SET @id_p = 6, @nombres_p = 'Ruben Felipe', @apellidos_p = 'Tovar', @telefono_p = '12345060789', @correo_p = 'felipe@gmail.com';
DELIMITER $$
    CREATE PROCEDURE general_persona() 
        BEGIN 
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
            END;
            START TRANSACTION;
                IF (SELECT COUNT(*) FROM persona WHERE telefono = @telefono_p OR correo = @correo_p)  > 0 THEN -- INSERTAR PERSONA
                    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Ya existe una persona con ese teléfono o correo';
                    ELSE 
                        INSERT INTO persona (id, nombre, apellido, telefono, correo) VALUES (1, 'Ingrid Yulissa', 'Medina', '1203456789', 'ingrid@gmail.com'), (2, 'Brayan Santiago', 'Guerrero', '1023456789', 'santiago@gmail.com'), (3, 'Juan Manuel', 'Gutierrez', '1230456789', 'juan@gmail.com'),(4, 'Juan David', 'Artunduaga', '1234056789', 'JuanDavid@gmail.com'), (5, 'Esteban', 'Palomar', '1234506789', 'esteban@gmail.com'), (@id_p, @nombres_p, @apellidos_p, @telefono_p, @correo_p);
                END IF;
                -- ACTUALIZAR Y ELIMINAR PERSONA
                IF NOT EXISTS (SELECT 1 FROM persona WHERE id = @id_p) THEN 
                    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'No existe una persona con ese ID';
                    ELSE
                        UPDATE persona SET nombre = 'Ingrid Yulissa', apellido = 'Medina Esquivel', telefono = '1203456789', correo = 'ingrid@gmail.com' WHERE id = 1;
                        UPDATE persona SET nombre = 'Brayan Santiago', apellido = 'Guerrero Mendez', telefono = '1023456789', correo = 'santiago@gmail.com' WHERE id = 2;
                        DELETE FROM persona WHERE id = @id_p;
                END IF;
            COMMIT;
        END $$
DELIMITER ;