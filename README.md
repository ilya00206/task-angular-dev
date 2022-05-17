### Prosta aplikacja zbudowana w Angularze 13 wykorzystująca NgRx.

### Lista uytkowników dostępna pod URL: `http://localhost:4200/users`


# **Zadanie rekrutacyjne**

## 1. Stwórz oddzielny dummy komponent <app-user-item>, wyświetlający imię, nazwisko i adres email pojedynczego użytkownika i wykorzystaj go w komponencie `UsersListComponent`.

## 2. Stwórz nowy komponent będący formularzem dodawania nowego kontaktu dla użytkownika
Formularz powinien zawierać pola:
  * imię oraz nazwisko
  * email
  * wyboru użytkownika, dla którego tworzymy kontakt (input typu select, powinno bazować na id użytkownika) - w select pokazujemy imię  nazwisko użytkownika

## 3. Dodaj customowy walidator do pola email z poprzedniego zadania, tak aby sprawdzał poprawność adresu email.
Wymagania odnośnie adresu email:
  * email nie może być z domeny `prowly.com`
  * nie chcemy by zwierał w sobie tag, czyli znak `+` (o tagach: https://support.google.com/manufacturers/answer/6184604?hl=en#:~:text=Email%20tags%20are%20a%20handy,address%20with%20the%20tag%20here.)
## 4. W widoku głównym mamy listę userów - kliknięcie na jednego z nich powinno przenieść do widoku formularza dodawania kontaktu dla wybranego użytkownika i ustawić odpowiednią wartość w polu typu select.

## 5. Na liście użytkowników obok imienia i nazwiska chcemy wyświetlić dodatkowo numer telefonu, który dostępny jest w oddzielnym streamie (getProfiles, patrz: `app/src/state`), stwórz jeden stream, który wzbogaci usera o atrybut profil (patrz: interfejs UserWithProfile).

## 6. Komponent z formularzem przenieś do oddzielnego lazy-loadowanego modułu wewntąrz folderu `src/app/lazy-modules`.
