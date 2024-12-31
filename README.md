# NodePad ✨
##### Målet med projektet NodePad är att bygga och  utveckla en enkel applikation för att hantera uppgifter.
NodePad-applikationen som tillåter användaren  att lägga till en ny uppgift- event, redigera en event, ta bort en uppgift, visa alla uppgifter.
Systemet bestå av en serverdel som hanterar API-anrop  med hjälp  av ramverk som Spring Boot och en frontend byggd med  React.js (Javascript -bibliotek som används 
för att bygga webbgränssnitt).
Jag har använt en extra bibliotek Animate On Scroll Library för animation.

Backend byggt på MVC design pattern (Model –View –Controller) är som separerar koden för data-modellen (M) från användargränssnitt (V och C).
Projktet använder DTO som står för Data Transfer Object, vilket är ett designmönster. Programmet använder service, model, repository.
 Service är en Java-klass som innehåller Business Logic, inkapsling av applikationsfunktionalitet.
Application använder Spring Boot CRUD Operations som GET,PUT,POST,DELETE.
Uppgifterna lagras i en enkel datastruktur som en ArrayList.
Projktet använder React.js som FrontEnd. Som innehåller Cards, Header,Home komponenter.Jag använder Axios bibliotek för att skicka HTTP-förfrågningar från nod.js.
Jag  skickar GET-, POST-, PUT- och DELETE-begäranden till en server med hjälp av Axios.


## Att strarta programmet
När projektet oppnas, i projektverktygsfönstret  leta upp källan | main | java | Main. java-filen och öppna den i editorn/ IntelliJIdea. I redigeraren klickar du på rännstensikonen för att köra programmet och väljer Kör 'Main'. main()'.
