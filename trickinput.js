function Text_Eingeben(element_id, text){
    //Das Element fokussieren
    $("#"+element_id).focus();
    $("#"+element_id).click();

    //Variablen für KeyDown/Up
    var kdown = jQuery.Event("keydown");
    var kup = jQuery.Event("keyup");

    //Den Text zu einem Array aus einzelnen Buchstaben machen
    var text_array = text.split("");
    console.log(text_array);

    //Durch alle Buchstaben gehen
    for(i = 0; i < text_array.length; i++){

        //Den Keycode des Buchstaben herausfinden & dem KeyDown/Up sagen
        var code = text_array[i].charCodeAt(0);
        kdown.which = code;
        kup.which = code;

        //KeyDown auslösen
        $("#"+element_id).trigger(kdown);
        //Es auch wirklich hinschreiben
        $("#"+element_id).change();
        document.getElementById(element_id).value += text_array[i];
        //KeyUp auslösen
        $("#"+element_id).trigger(kup).delay(1000);        
    }
    $("#"+element_id).blur();
}