// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
    $('#tblData').DataTable({
        dom: 'Pfrtip'
    });
});


//$(document).ready(function () {
//    var nearLossTable = $('#tblData').DataTable(
//        {
//            "dom": '<"top"l>rt <"bottom"ip><"clear">',
//            "fnInitComplete" : function(oSettings,json) {
//                addSearchControl(json);
//            }
//        });
//    function addSearchControl(json) {
//        $("#tblData thead").append($("#tblData thead tr:first").clone());
//        $("#tblData thead tr:eq(1) th").each(function (index) {
//            $(this).replaceWith('<th><input type="text" placeholder="Search ' + $(this).html() + '"></input></th>');
//            var searchControl = $("#tblData thead tr:eq(1) th:eq(" + index + ") input");
//            searchControl.on('keyup', function () {
//                nearLossTable.column(index).search(searchControl.val()).draw();
//            });
//        });
//    }
//});


