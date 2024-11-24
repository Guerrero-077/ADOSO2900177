DELIMITER $$
    CREATE PROCEDURE procedimiento_todo_poderoso()
            BEGIN
                CALL general_persona();
                CALL general_rol();
                CALL general_cine();  
                CALL general_pelicula();
                CALL general_genero();                
                CALL general_pelicula_genero();
                CALL general_elenco();
                CALL general_pelicula_cine();
                CALL general_funcion(); 
                
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