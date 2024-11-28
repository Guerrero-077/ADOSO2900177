DELIMITER $$
    CREATE PROCEDURE general_vehiculo(IN id_p INT, IN id_tipo_vehiculo_p INT, IN modelo_p INT,IN marca_p INT, IN estado_p INT)
        BEGIN 
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Ha ocurrido un problema con las transacciones de vehiculo.' AS vehiculo;
            END;
            START TRANSACTION;
                IF (SELECT COUNT(*) FROM vehiculo WHERE modelo = modelo_p AND marca = marca_p) > 0 THEN -- INSERTAR VEHICULO
                    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El vehiculo ya existe';
                    ELSE
                    INSERT INTO vehiculo VALUES (1, 4, 'Ranger', 'Ford', true), (2, 3, 'CBR', 'Honda', true), (3, 4, 'Cross Country', 'Treek', true), (4, 2, 'MX-5', 'Mazda', true), (5, 1, 'Aveo', 'Chevrolet', true), (id_p, id_tipo_vehiculo_p, modelo_p, marca_p, estado_p);
                END IF;
                IF NOT EXISTS(SELECT 1 FROM vehiculo WHERE id = id_p)THEN -- ACTUALIZAR Y ELIMINAR VEHICULO
                    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El vehiculo no existe';
                    ELSE
                        UPDATE vehiculo SET id_tipo_vehiculo = 4, modelo = 'Ranger', marca = 'Ford', estado = faLse WHERE id = 1;
                        UPDATE vehiculo SET id_tipo_vehiculo = 3, modelo = 'CBR', marca = 'Honda', estado = faLse WHERE id = 2;
                        DELETE FROM vehiculo WHERE id = id_p;
                END IF;
            COMMIT;
        END $$
DELIMITER $$