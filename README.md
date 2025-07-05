# Mój Projekt

To jest przykładowy projekt stworzony w ramach zajęć z GitHub.

## Spis treści

- [Opis](#opis)
- [Instalacja](#instalacja)
- [Użycie](#użycie)
- [Rozwiązywanie konfliktów](#rozwiązywanie-konfliktów)
- [Historia wersji](#historia-wersji)
- [Licencja](#licencja)

## Opis

Ten projekt służy do nauki podstaw systemu kontroli wersji Git, pracy z GitHubem, CI/CD oraz Dockera.  
Zawiera serwer Node.js z endpointem `/health` i pipeline GitHub Actions.

## Instalacja

Zainstaluj zależności:
\`\`\`bash
git clone https://github.com/pjankowski98/moj-projekt.git
cd moj-projekt
npm install
\`\`\`

## Użycie

Uruchom serwer lokalnie:
\`\`\`bash
npm start
\`\`\`

Aplikacja będzie dostępna na [http://localhost:3000](http://localhost:3000).

Sprawdź health check:
\`\`\`
http://localhost:3000/health
\`\`\`

Powinna zostać zwrócona odpowiedź:
\`\`\`
OK
\`\`\`

Użycie funkcji \`square\` w Node.js:
\`\`\`js
const { square } = require('./square');
console.log(square(5)); // 25
\`\`\`

## Rozwiązywanie konfliktów

Podczas łączenia gałęzi \`feature/header-design-a\` i \`feature/header-design-b\` doszło do konfliktu w pliku \`index.html\`, w sekcji nagłówka.  
Konflikt został rozwiązany poprzez stworzenie kompromisowej wersji nagłówka:
\`\`\`
Wersja A i B – Witamy / Welcome!
\`\`\`
Finalna wersja zachowuje elementy obu zmian i jest spójna.

## Historia wersji

### [v1.0.0] - 2025-07-04
**Changed**
- Przebudowa struktury strony – zmiana łamiąca kompatybilność.

### [v0.1.0] - 2025-07-04
**Added**
- Dodanie linku 'O nas' do menu.

### [v0.0.1] - 2025-07-04
**Fixed**
- Poprawka literówki w nagłówku.

## Licencja

Projekt objęty licencją MIT.