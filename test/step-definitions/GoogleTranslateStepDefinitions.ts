import { Given, Then, When } from "@cucumber/cucumber";
import { Actor, Wait, actorInTheSpotlight } from "@serenity-js/core";
import { Navigate } from "@serenity-js/web";
import { IngresarEnElTraductor } from "../../main/tasks/IngresarEnElTraductor.ts";
import { SalidaDelTraductor } from "../../main/questions/SalidaDelTraductor.ts";
import { SeleccionarIdioma } from "../../main/tasks/SeleccionarIdioma.ts";
Given('{actor} se encuentra en la web de Google Translate', async (actor: Actor) => {
    await actor.attemptsTo(
        Navigate.to("https://translate.google.com/")
    )
});

When('ingresa la palabra {string} para ser traducida', async (palabra: string) => {
    await actorInTheSpotlight().attemptsTo(
        IngresarEnElTraductor.laPalabra(palabra),
        SeleccionarIdioma.destino()
    )
});

Then('debe visualizar su traducción correspondiente {string}', async (palabraTraducida: string ) => {
    await actorInTheSpotlight().attemptsTo(
        SalidaDelTraductor.esLaPalabra(palabraTraducida)
    )
});