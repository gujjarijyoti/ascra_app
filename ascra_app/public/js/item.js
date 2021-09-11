frappe.ui.form.on("Item", "before_save", function (frm, cdt, cdn) {
    //console.log("entered")
    var item_details = locals[cdt][cdn];
    var variant_of = item_details.variant_of;
    var height = item_details.height;
    var width = item_details.width;
    var yields = item_details.yields;
    var length = item_details.length;
    
    
    //Calculating UOM Conversion (Child Table) Data
    if (variant_of != 'undefined') {
        //console.log("entered in uom")
        $.each(item_details.uoms || [], function (i, item) {
            if (item.formula) {
                var final_formula =  item.formula
               // console.log(eval(final_formula)); 
                item.conversion_factor = flt(eval(final_formula))
                item.formula = item.formula
            }
        });
        refresh_field("uoms");
    }
});