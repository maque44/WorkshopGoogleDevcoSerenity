import { By, PageElement } from '@serenity-js/web';

export const GoogleTranslatePage = {
    textArea: () =>
        PageElement.located(By.xpath("//textarea")).describedAs('text area texto original'),
}
