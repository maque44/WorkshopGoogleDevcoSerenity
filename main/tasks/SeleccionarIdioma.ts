import { Task } from "@serenity-js/core";
import { Click } from "@serenity-js/web";
import { GoogleTranslatePage } from "../../main/ui/GoogleTranslatePage.ts";


export class SeleccionarIdioma {
    public static destino = () =>
        Task.where(`#actor selecciona el idioma  en el google translate`,
            Click.on(GoogleTranslatePage.seleccionIdiomaIngles())
        )
}