import { By, PageElement } from '@serenity-js/web';

export const GoogleTranslatePage = {
    textArea: () =>
        PageElement.located(By.xpath("//textarea")).describedAs('text area texto original'),
     seleccionIdiomaIngles: () =>
        PageElement.located(By.xpath("//button[@id='i16']")).describedAs('seleccionando idioma ingles'),
    resultadoObtenidoLabel: () =>
        PageElement.located(By.xpath("//span[@class='ryNqvb']")).describedAs('label de palabra traducida'),

}
