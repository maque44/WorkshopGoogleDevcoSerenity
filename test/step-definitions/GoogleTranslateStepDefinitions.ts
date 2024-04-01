import { Given, Then, When } from "@cucumber/cucumber";
import { Actor, Wait, actorInTheSpotlight } from "@serenity-js/core";
import { Navigate } from "@serenity-js/web";
import { IngresarEnElTraductor } from "../../main/tasks/IngresarEnElTraductor.ts";

Given('{actor} se encuentra en la web de Google Translate', async (actor: Actor) => {
    await actor.attemptsTo(
        Navigate.to("https://translate.google.com/")
    )
});

When('ingresa la palabra {string} para ser traducida', async (palabra: string) => {
    await actorInTheSpotlight().attemptsTo(
        IngresarEnElTraductor.laPalabra(palabra)
    )
});

Then('debe visualizar su traducción correspondiente {string}', function (string) {

});