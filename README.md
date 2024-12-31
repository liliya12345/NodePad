# NodePad med Spring Boot och React.js ✨
front körs på port http://localhost:5000
backend  http://localhost:8080

##### Målet med projektet NodePad är att bygga och  utveckla en enkel applikation för att hantera uppgifter.
NodePad-applikationen som tillåter användaren  att lägga till en ny uppgift- event, redigera en event, ta bort en uppgift, visa alla uppgifter.
Systemet bestå av en serverdel som hanterar API-anrop  med hjälp  av ramverk som Spring Boot och en frontend byggd med  React.js (Javascript -bibliotek som används 
för att bygga webbgränssnitt).
Jag har använt en extra bibliotek Animate On Scroll Library för animation.

Backend byggt på MVC design pattern (Model –View –Controller) är som separerar koden för data-modellen (M) från användargränssnitt (V och C).
Projektet använder DTO som står för Data Transfer Object, vilket är ett designmönster. Programmet använder service, model, repository.
 Service är en Java-klass som innehåller Business Logic, inkapsling av applikationsfunktionalitet.
Application använder Spring Boot CRUD Operations som GET,PUT,POST,DELETE.
Uppgifterna lagras i en enkel datastruktur som en ArrayList.
Projktet använder React.js som FrontEnd. Som innehåller Cards, Header,Home komponenter.Jag använder Axios bibliotek för att skicka HTTP-förfrågningar från nod.js.
Jag  skickar GET-, POST-, PUT- och DELETE-begäranden till en server med hjälp av Axios.

## Att strarta programmet
För att köra applicationen behövs installeras node js och npm
npm install -g npm
### Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
### Download and install Node.js:
nvm install 22
### Verify the Node.js version:
node -v # Should print "v22.12.0".
nvm current # Should print "v22.12.0".
### Verify npm version:
npm -v # Should print "10.9.0".




När projektet oppnas, i projektverktygsfönstret  leta upp källan | main | java | Main. java-filen och öppna den i editorn/ IntelliJIdea. I redigeraren klickar du på rännstensikonen för att köra programmet och väljer Kör 'Main'. main()'.
