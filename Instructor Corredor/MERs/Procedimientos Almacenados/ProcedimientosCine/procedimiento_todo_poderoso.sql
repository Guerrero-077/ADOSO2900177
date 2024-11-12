DELIMITER $$

    CREATE PROCEDURE procedimiento_todo_poderoso()
            BEGIN
                DECLARE EXIT HANDLER FOR SQLEXCEPTION
                BEGIN
                    ROLLBACK;
                    SELECT 'Error: Ha ocurrido un problema con las transacciones.' AS resultado;
                END;

                START TRANSACTION;

                    CALL todo_poderoso_persona();
                    CALL todo_poderoso_roles();
                    CALL todo_poderoso_cine();  
                    CALL todo_poderoso_pelicula();
                    

                    CALL todo_poderoso_genero();
                    
                    CALL todo_poderoso_pelicula_genero();
                    CALL todo_poderoso_elenco();
                    
                    CALL todo_poderoso_pelicula_cine();
                    CALL todo_poderoso_funciones(); 

                COMMIT;

                SELECT 'Transacción de todo poderoso completada con éxito' AS resultado;
                SELECT * FROM persona;
                SELECT * FROM roles;
                SELECT * FROM cines;
                SELECT * FROM peliculas;
                SELECT * FROM genero;
                SELECT * FROM pelicula_genero;
                SELECT * FROM elenco;
                SELECT * FROM pelicula_cine;
                SELECT * FROM funciones;
                
            END $$

DELIMITER ;