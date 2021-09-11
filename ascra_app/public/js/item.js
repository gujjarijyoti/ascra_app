frappe.ui.form.on("Item", "before_save", function (frm, cdt, cdn) {
    console.log("entered")
    var iitem_details = locals[cdt][cdn];
    var variant_of = iitem_details.variant_of;
    var height = iitem_details.heigth;
    var width = iitem_details.width;
    var yields = iitem_details.yields;
    var length = iitem_details.length;
    var weight_per_unit = iitem_details.weight_per_unit;
    var warranty_period = iitem_details.warranty_period;
    var shelf_life_in_days = iitem_details.shelf_life_in_days;
    
    //Getting UOM Conversion Detail(Child Table) Data
    if (variant_of != 'undefined') {
        console.log("entered in uom")
        $.each(iitem_details.uoms || [], function (i, item) {
            console.log(iitem_details.item_code)
            console.log(item.formula)
            if (item.formula) {
                var final_formula =  item.formula
                console.log(eval(final_formula)); 
                item.conversion_factor = flt(eval(final_formula))
                item.formula = item.formula
            }
        });
        refresh_field("uoms");
    }
});