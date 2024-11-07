	
		PRIMARY KEY (id)
	)
	
	CREATE TABLE productos (
		id integer,
		name varchar(10),
		PRIMARY KEY (id)
	)
	
	CREATE TABLE pivote (
		id integer,
		id_categoria integer, 
		id_producto integer,
		
		PRIMARY KEY (id)
	)
	
-- 	Alterar tablas para agregar llaver foranes

	ALTER TABLE categorias ADD active boolean; 
	
	UPDATE categorias SET active = TRUE 
			WHERE id = 0
	ALTER TABLE productos ADD active boolean; 
	
	ALTER TABLE pivote ADD CONSTRAINT fk_categorias FOREIGN KEY (id_categoria) REFERENCES categorias(id);
	ALTER TABLE pivote ADD CONSTRAINT fk_productos FOREIGN KEY (id_producto) REFERENCES productos(id);

-- Hacer insert a las tablas 
	INSERT INTO categorias (id, name)
		VALUES (0, 'granos'),
				(1, 'lacteos'),
				(2, 'bebidas');

	INSERT INTO productos (id, name)
				VALUES (0, 'frijol'),
						(1, 'yogurt'),
						(3, 'agua'),
						(4, 'gaseosa')

	INSERT INTO pivote (id, id_categoria, id_producto)
				VALUES (0,0,0),
						(1,1,1),
						(2,2,1),
						(3,2,3),
						(4,2,4);
						
-- Ver informacion de las tablas

	SELECT * FROM categorias; 
	SELECT * FROM productos;
	SELECT * FROM pivote;

-- INNERs 
	SELECT c.name as caegorias, p.name as productos FROM pivote t
	INNER JOIN categorias c ON c.id = t.id_categoria
	INNER JOIN productos p ON p.id = t.id_producto
	WHERE c.active = 'true' AND p.active = 'true'