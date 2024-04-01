Feature: Google Translate

    Scenario: Traducir palabra de español a ingles
        Given Cesar se encuentra en la web de Google Translate
        When ingresa la palabra "Queso" para ser traducida
        Then debe visualizar su traducción correspondiente "Chesse"