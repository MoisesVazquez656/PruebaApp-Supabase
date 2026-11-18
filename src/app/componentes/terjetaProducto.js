

















const handleElimar = async () => {
    const confirmacion = window.confirm('¿Estás seguro 
    de eliminar? "${producto.nombre}"?')
    
    if(confirmacion) {
        setCargando(true)
        try {
            await eliminarProducto(producto.id)
        }   catch (error) {
            alert('Ocurrió un error al eliminar el producto')
        }
    }
}