$(document).ready(function() {
    $("#add").click(function() {
        var intId = $("#form_fields div").length + 1;
        var fieldWrapper = $("<div class=\"fieldwrapper\" id=\"field" + intId + "\"/>");
        var fName = $("<div id=\"search-keywords\" class=\"field\"><label for=\"keyword-search\">Search for Keywords</label>       <div class=\"inputs\"><input type=\"text\" name=\"search\" id=\"keyword-search\" value=\"\" size=\"40\">        </div></div>");
        var fType = $("<div id=\"search-narrow-by-fields\" class=\"field\"><div class=\"label\">Narrow by Specific Fields</div><div class=\"inputs\"><div class=\"search-entry\"><select title=\"Search Field\" class=\"advanced-search-element\"><option value=\"\">Select Below </option><optgroup id=\"optgroupDublinCore\" label=\"Dublin Core\"><option value=\"37\">contributor</option><option value=\"38\">coverage</option><option value=\"39\">creator</option><option value=\"40\">date</option><option value=\"41\">description</option><option value=\"42\">format</option><option value=\"43\">identifier</option><option value=\"44\">language</option><option value=\"45\">publisher</option><option value=\"46\">relation</option><option value=\"47\">rights</option><option value=\"48\">source</option><option value=\"49\">subject</option><option value=\"50\">title</option><option value=\"51\">type</option></optgroup></select></div></div></div></div>");
        var removeButton = $("<input type=\"button\" class=\"remove\" value=\"-\" />");
        removeButton.click(function() {
            $(this).parent().remove();
        });
        fieldWrapper.append(fName);
        fieldWrapper.append(fType);
        fieldWrapper.append(removeButton);
        $("#form_fields").append(fieldWrapper);
    });
    $("#preview").click(function() {
        $("#yourform").remove();
        var fieldSet = $("<fieldset id=\"yourform\"><legend>Your Form</legend></fieldset>");
        $("#buildyourform div").each(function() {
            var id = "input" + $(this).attr("id").replace("field","");
            var label = $("<label for=\"" + id + "\">" + $(this).find("input.fieldname").first().val() + "</label>");
            var input;
            switch ($(this).find("select.fieldtype").first().val()) {
                case "checkbox":
                    input = $("<input type=\"checkbox\" id=\"" + id + "\" name=\"" + id + "\" />");
                    break;
                case "textbox":
                    input = $("<input type=\"text\" id=\"" + id + "\" name=\"" + id + "\" />");
                    break;
                case "textarea":
                    input = $("<textarea id=\"" + id + "\" name=\"" + id + "\" ></textarea>");
                    break;    
            }
            fieldSet.append(label);
            fieldSet.append(input);
        });
        $("body").append(fieldSet);
    });
});
