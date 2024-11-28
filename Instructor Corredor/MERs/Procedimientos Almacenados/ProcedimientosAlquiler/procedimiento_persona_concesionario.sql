DELIMITER $$
    CREATE PROCEDURE general_visitas(IN id_p INT, id_persona_p INT, id_concesionario_p INT, fecha_visita_p DATE)
        BEGIN 
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Ha ocurrido un problema con las transacciones de visita.' AS visita;
            END;
            START TRANSACTION;
                IF (SELECT COUNT(*) FROM visita WHERE id_persona = id_persona_p AND id_concesionario = id_concesionario_p AND fecha_visita = fecha_visita_p) > 0 THEN  -- INSERTAR visita
                    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'La visita ya existe para esta fecha';
                ELSE
                    INSERT INTO visita VALUES (1, 1, 1, '2024-11-01'), (2, 2, 2, '2024-11-01'), (3, 3, 3, '2024-10-28'), (4, 4, 4, '2024-10-27'), (5, 5, 5, '2024-09-15'), (id_p, id_persona_p, id_concesionario_p, fecha_visita_p);
                END IF;
                IF NOT EXISTS(SELECT 1 FROM visita WHERE id = id_p) THEN -- ACTUALIZAR Y ELIMINAR visita
                    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'La visita no existe';
                ELSE
                    UPDATE visita SET id_persona = 1, id_concesionario = 1, fecha_visita = '2024-11-10' WHERE id = 1;
                    UPDATE visita SET id_persona = 2, id_concesionario = 2, fecha_visita = '2024-11-11' WHERE id = 2;
                    DELETE FROM visita WHERE id = id_p;
                END IF;
            COMMIT;
        END $$
DELIMITER ;