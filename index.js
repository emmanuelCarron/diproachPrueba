// Desarrollar una aplicación que cumpla con los siguientes puntos:

//  -Ingresar un codigo, descripcion y precio de un producto
//  -Cada producto ingresado se incorpora a una lista de productos ingresados
//  -Permitir eliminar cada producto ingresado
//  -Mostrar un resumen de cantidad de productos ingresados y el total del costo
//  -Permitir aplicar un porcentaje de descuento sobre el total del costo

const app = new Vue({
    el: '#app',
    data: {
        titulo1: 'Añadir Productos',
        titulo2: 'Eliminar producto',
        titulo3: 'Lista de productos',
        listaProd: [],
        codigo: "",
        detalle: "",
        precio: "",
        delCode: "",
        total: 0,
        desc: 0,
    },
    methods: {
        agregarProd () {
            this.listaProd.push({
                codigo: this.codigo,
                detalle: this.detalle,
                precio: this.precio,
            });
            this.codigo = "";
            this.detalle = "";
            this.precio = "";
            this.sumar();
        },
        quitarProd () {
            let elem = this.listaProd.filter(x => x.codigo === this.delCode)
            let index = this.listaProd.indexOf(elem);
            this.listaProd.splice(index-1, 1);
            this.sumar();
        },
        aplicarDesc () {
            this.descontar();
        } 
    },
    computed: {
        sumar() {
            this.total = this.listaProd.reduce(
                (acc, producto) => 
                acc + parseInt(producto.precio), 0);
            return this.total;
        },
        descontar() {
            let descuento = this.total * (parseInt(this.desc) / 100);
            this.total = this.total - descuento
            return this.total
        },
        
    }
})
