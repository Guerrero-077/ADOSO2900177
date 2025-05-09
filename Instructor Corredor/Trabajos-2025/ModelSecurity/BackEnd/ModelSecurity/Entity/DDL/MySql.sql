--CREATE TABLE `user`
--(
--    id INT PRIMARY KEY AUTO_INCREMENT,
--    user_name VARCHAR(100) NOT NULL,
--    email VARCHAR(100) NOT NULL UNIQUE, 
--    password VARCHAR(100) NOT NULL,
--    create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--    active BOOLEAN,
--    is_deleted BOOLEAN,
--    person_id INT 
--);

--CREATE TABLE person 
--(
--    id INT PRIMARY KEY AUTO_INCREMENT,
--    first_name VARCHAR(100) NOT NULL,
--    last_name VARCHAR(100) NOT NULL,
--    phone_number VARCHAR(20) NOT NULL,
--    active BOOLEAN,
--    is_deleted BOOLEAN
--);

--CREATE TABLE Rol 
--(
--    id INT PRIMARY KEY AUTO_INCREMENT,
--    name VARCHAR(100) NOT NULL,
--    description TEXT,
--    active BOOLEAN,
--    is_deleted BOOLEAN
--);

--CREATE TABLE rol_user
--(
--    id INT PRIMARY KEY AUTO_INCREMENT,
--    rolid INT,
--    userid INT,
--    is_deleted BOOLEAN
--);

--CREATE TABLE permission
--(
--    id INT PRIMARY KEY AUTO_INCREMENT,
--    name VARCHAR(100) NOT NULL,
--    description TEXT,
--    active BOOLEAN,
--    is_deleted BOOLEAN
--);

--CREATE TABLE form 
--(
--    id INT PRIMARY KEY AUTO_INCREMENT,
--    name VARCHAR(100) NOT NULL,
--    description TEXT,
--    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--    active BOOLEAN,
--    is_deleted BOOLEAN
--);

--CREATE TABLE form_module
--(
--    id INT PRIMARY KEY AUTO_INCREMENT,
--    formid INT,
--    moduleid INT,
--    is_deleted BOOLEAN
--);

--CREATE TABLE rol_form_permission
--(
--    id INT PRIMARY KEY AUTO_INCREMENT,
--    rolid INT,
--    formid INT,
--    permissionid INT,
--    is_deleted BOOLEAN
--);

--CREATE TABLE module
--(
--    id INT PRIMARY KEY AUTO_INCREMENT,
--    name VARCHAR(100) NOT NULL,
--    description TEXT, 
--    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--    active BOOLEAN,
--    is_deleted BOOLEAN
--);

---- Relaciones 


---- user  - person
--ALTER TABLE `user` 
--ADD CONSTRAINT FK_User_Person 
--FOREIGN KEY (person_id) REFERENCES person(id);

---- RolUser - Rol - user
--ALTER TABLE rol_user
--ADD CONSTRAINT FK_RolUser_Rol 
--FOREIGN KEY (rolid) REFERENCES rol(id);

--ALTER TABLE rol_user 
--ADD CONSTRAINT FK_RolUser_User
--FOREIGN KEY (userid) REFERENCES `user`(id);

---- form_module - form - module

--ALTER TABLE form_module 
--ADD CONSTRAINT FK_FormModule 
--FOREIGN KEY (formid) REFERENCES form(id);

--ALTER TABLE form_module 
--ADD CONSTRAINT FK_FormModule_Module 
--FOREIGN KEY (moduleid) REFERENCES module(id);

---- rol_form_permission - Rol - form - permission
--ALTER TABLE rol_form_permission 
--ADD CONSTRAINT FK_RolFormPermission_Rol 
--FOREIGN KEY (rolid) REFERENCES Rol(id);

--ALTER TABLE rol_form_permission 
--ADD CONSTRAINT FK_RolFormPermission_Form
--FOREIGN KEY (formid) REFERENCES form(id);

--ALTER TABLE rol_form_permission 
--ADD CONSTRAINT FK_RolFormPermission
--FOREIGN KEY (permissionid) REFERENCES permission(id);

