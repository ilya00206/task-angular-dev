### Prosta aplikacja zbudowana w Angularze 13 wykorzystująca NgRx.

### Lista uytkowników dostępna pod URL: `http://localhost:4200/users`


# **Zadanie rekrutacyjne**

## 1. Stwórz oddzielny dummy komponent <app-user-item>, wyświetlający imię i nazwisko użytkownika oraz jego adres email.

## 2. Stwórz nowy komponent będący formularzem dodawania kontaktu
Formularz powinien zawierać pola:
  * wyboru użytkownika, dla którego tworzymy kontakt (input typu select) - pokazujemy imię  nazwisko użytkownika
  * imię oraz nazwisko
  * email

## 3. Dodaj customowy walidator do pola email, tak aby sprawdzał poprawność adresu. Email nie może być z domeny `prowly.com`, a dodatkowo nie chcemy by zwierał w sobie tag, czyli znak `+`.
## 4. W widoku głównym mamy listę userów - kliknięcie na jednego z nich powinno przenieść do widoku formularza i ustawionym wybranym wcześniej użytkownikiem.

## 5. Na liście użytkowników obok imienia i nazwiska chcemy wyświetlić dodatkowo numer telefonu, który dostępny jest w oddzielnym streamie (getProfiles, patrz: `app/src/state`), stwórz jeden stream, który wzbogaci usera o atrybut profil (patrz: interfejs UserWithProfile).

## 6. Komponent z formularzem przenieś do oddzielnego lazy-loadowanego modułu wewntąrz folderu `src/app/lazy-modules`.
