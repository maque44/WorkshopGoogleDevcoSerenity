import { Duration, Task, Wait } from "@serenity-js/core";
import { Ensure, equals} from "@serenity-js/assertions";
import { GoogleTranslatePage } from "../../main/ui/GoogleTranslatePage.ts";
import { isVisible } from "@serenity-js/web";

export class SalidaDelTraductor {
    public static esLaPalabra = (palabraTraducida: string) =>
        Task.where(`#actor debe visualizar la palabra traducida ${palabraTraducida} en el cuadro de texto`,
        Wait.upTo(Duration.ofSeconds(5)).until(GoogleTranslatePage.resultadoObtenidoLabel(), isVisible()),
        Ensure.that(GoogleTranslatePage.resultadoObtenidoLabel().text(), equals(palabraTraducida))
        )
}