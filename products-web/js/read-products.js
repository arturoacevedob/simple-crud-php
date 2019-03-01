$(document).ready(function () {
    // Muestra la lista de productos.
    var apiURL = "http://abelworld.byethost4.com/apps/app-products-api/";
    $.getJSON(apiURL + "product/read.php?callback=1", function (data) {
        var read_products_html = `
            <!-- Comienza la tabla. -->
            <table class='table table-bordered table-hover'>
        
            <!-- Encabezado de tabla. -->
	    <thead class="thead-dark">
		    <tr>
		        <th scope="col">ID</th>
		        <th scope="col">Producto</th>
		        <th scope="col">Descripción</th>
		        <th scope="col">Marca</th>
		        <th scope="col">Precio</th>
		        <th scope="col">Foto</th>
		    </tr>
	    </thead>`;
        
        $.each(data.records, function (key, val) {
            // Crea cada renglón de la tabla.
            read_products_html += `
                <tr>
                    <td>` + val.id_product + `</td>
                    <td>` + val.name + `</td>
                    <td>` + val.description + `</td>
                    <td>` + val.brand + `</td>
                    <td>` + val.price + `</td>
                    <td> <img src='` + apiURL + val.image + `' height='80px'> </td>
                </tr>`;
        });
        // Termina la tabla.
        read_products_html += `</table>`;
        // Inyecta en 'page-content' de la aplicación.
        $("#page-content").html(read_products_html);
    });
});