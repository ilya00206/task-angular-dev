# Zadanie rekrutacyjne

## 1. Stwórz lazy loadowany moduł wyświetlający formularz dodawania kontaktu 
Formularz powinien zawierać pola:
  * wyboru użytkownika, dla którego tworzymy kontakt (select) - pokazujemy imię  nazwisko użytkownika
  * imię oraz nazwisko
  * email

## 2. Dodaj customowy walidator do pola email, tak aby sprawdzał poprawnpść adresu. Email nie może być z domeny `prowly.com`, a dodatkowo nie chcemy by zwierał w sobie tag, czyli znak `+`.

## 3. W widoku głównym mamy listę użytkowników - kliknięcie na jednego z nich powinno przenieść do widoku formularza i ustawionym wybranym wcześniej użytkownikiem.

## 4. Na liście obok imienia i nazwiska chcemy wyświetlić dodatkowo numer telefonu, który dostępny jest w oddzielnym streamie, stwórz jeden stream zawierający wszystkie dane.