namespace Data.Interfaces
{
    /// <summary>
    /// Define operaciones genéricas de acceso a datos para cualquier entidad.
    /// </summary>
    /// <typeparam name="T">Tipo de entidad.</typeparam>
    public interface IData<T> where T : class
    {

        /// <summary>
        /// Obtiene todos los registros almacenados en la base de datos.
        /// </summary>
        /// <returns>Lista de entidades.</returns>
        Task<IEnumerable<T>> GetAllAsync();

        /// <summary>
        /// Obtiene un registro por su identificador único.
        /// </summary>
        /// <param name="id">Identificador único del registro.</param>
        /// <returns>La entidad encontrada, o null si no existe.</returns>
        Task<T?> GetByIdAsync(int id);

        /// <summary>
        /// Crea una nueva entidad en la base de datos.
        /// </summary>
        /// <param name="entity">Instancia de la entidad a crear.</param>
        /// <returns>La entidad creada.</returns>
        Task<T> CreateAsync(T entity);

        /// <summary>
        /// Actualiza una entidad existente en la base de datos.
        /// </summary>
        /// <param name="entity">Objeto con la información actualizada.</param>
        /// <returns>True si la operación fue exitosa, False en caso contrario.</returns>
        Task<bool> UpdateAsync(T entity);

        /// <summary>
        /// Elimina lógicamente una entidad de la base de datos.
        /// </summary>
        /// <param name="id">Identificador único de la entidad a eliminar.</param>
        /// <returns>True si la eliminación fue exitosa, False en caso contrario.</returns>
        Task<bool> DeleteLogicalAsync(int id);

        /// <summary>
        /// Elimina de forma persistente una entidad de la base de datos.
        /// </summary>
        /// <param name="id">Identificador único de la entidad a eliminar.</param>
        /// <returns>True si la eliminación fue exitosa, False en caso contrario.</returns>
        Task<bool> DeleteAsync(int id);

        Task<bool> RestoreLogicalAsync(int id);

        Task<IEnumerable<T>> GetAllDeletes();
    }
}
