//jQuery(document)

// "_id": "5e87764c63e79a85ecf73e49",
// "name": "Steel_3",
// "min_density": 685849,
// "max_density": 1,
// "min_strength": 333,
// "max_strength": 4,
// "min_strength_density": 333,
// "max_strength_density": 0.00000583218755148728,

$(document).ready(() => {

    //let testi = $("#testi");

    let table = $("#materials_table").DataTable({
        ajax: {
            type: "GET",
            datatype: "json",
            url: "/api/materials",
            dataSrc: ""
        },
        rowId: "_id",
        columns: [{
                data: "_id",
                type: "readonly",
                visible: false
            },
            {
                data: "name",
                type: "text",
                required: true
            },
            {
                data: "min_density",
                type: "float",
                required: true
            },
            {
                data: "max_density",
                type: "float",
                required: true
            },
            {
                data: "min_strength",
                type: "float",
                required: true
            },
            {
                data: "max_strength",
                type: "float",
                required: true
            },
            {
                data: "min_strength_density",
                type: "readonly",
                required: true
            },
            {
                data: "max_strength_density",
                type: "readonly",
                required: true
            }
        ],
        dom: "Bfrtip",
        select: "single",
        responsive: true,
        altEditor: true,
        buttons: [
            "columnsToggle",
            {
                text: "Create",
                name: "add"
            },
            {
                text: "Edit",
                name: "edit"
            },
            {
                text: "Delete",
                name: "delete"
            },
            {
                text: "Refresh",
                name: "refresh"
            }
        ],
        onAddRow: (datatable, rowdata, success, error) => {
            $.ajax({
                url: "/api/material",
                type: "POST",
                data: rowdata,
                success: success,
                error: error
            });
        },
        onDeleteRow: (datatable, rowdata, success, error) => {
            $.ajax({
                url: "/api/material/" + rowdata._id,
                type: "DELETE",
                data: rowdata,
                success: success,
                error: error
            });
        },
        onEditRow: (datatable, rowdata, success, error) => {
            $.ajax({
                url: "/api/material/" + rowdata._id,
                type: "PUT",
                data: rowdata,
                success: success,
                error: error
            });
        }


    });
});