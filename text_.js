function Text_Eingeben(element_name, text){
    //Das Element fokussieren
    $("input[name="+element_name+"]").focus();
    $("input[name="+element_name+"]").click();

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
        $("input[name="+element_name+"]").trigger(kdown);
        //Es auch wirklich hinschreiben
        $("input[name="+element_name+"]").change();
        document.getElementById(element_name).value += text_array[i];
        //KeyUp auslösen
        $("input[name="+element_name+"]").trigger(kup).delay(1000);        
    }
    $("input[name="+element_name+"]").blur();
}