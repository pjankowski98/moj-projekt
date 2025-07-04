# Mój Projekt

To jest przykładowy projekt stworzony w ramach zajęć z GitHub.

## Spis treści

- [Opis](#opis)
- [Instalacja](#instalacja)
- [Użycie](#użycie)
- [Licencja](#licencja)
- [Historia wersji](#historia-wersji)

## Opis

Ten projekt służy do nauki podstaw systemu kontroli wersji Git oraz pracy z GitHubem.

## Instalacja

```bash
git clone https://github.com/twoj-login/moj-projekt.git
cd moj-projekt
```

## Rozwiązywanie konfliktów

Podczas łączenia gałęzi feature/header-design-a i feature/header-design-b doszło do konfliktu w pliku index.html, w sekcji nagłówka.  
Konflikt został rozwiązany poprzez stworzenie kompromisowej wersji nagłówka:
"Wersja A i B – Witamy / Welcome!".

Dzięki temu finalna wersja zachowuje elementy obu zmian i jest spójna.


## Historia wersji

## [v1.0.0] - 2025-07-04
### Changed
- Przebudowa struktury strony – zmiana łamiąca kompatybilność.

## [v0.1.0] - 2025-07-04
### Added
- Dodanie linku 'O nas' do menu.

## [v0.0.1] - 2025-07-04
### Fixed
- Poprawka literówki w nagłówku.

## Użycie funkcji square

Przykład:
```js
const { square } = require('./square');
console.log(square(5)); // 25
