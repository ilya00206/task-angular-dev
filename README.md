# 🇵🇱 Polish version (🇬🇧🇺🇸 English version below ⬇️⬇️⬇️)
🇺
### Prosta aplikacja zbudowana w Angularze 13 wykorzystująca NgRx.

### Lista uytkowników dostępna pod URL: `http://localhost:4200/users`


# **Zadania**

### 1. Stwórz oddzielny dummy komponent <app-user-item>, wyświetlający imię, nazwisko i adres email pojedynczego użytkownika i wykorzystaj go w komponencie `UsersListComponent`.

### 2. Stwórz nowy komponent będący formularzem dodawania nowego *kontaktu* dla użytkownika
Formularz powinien zawierać pola:
  * imię oraz nazwisko
  * email
  * wyboru użytkownika, dla którego tworzymy kontakt (input typu select, powinno bazować na id użytkownika) - w select pokazujemy imię  nazwisko użytkownika

### 3. Dodaj customowy walidator do pola email z poprzedniego zadania, tak aby sprawdzał poprawność adresu email.
Wymagania odnośnie adresu email:
  * email nie może być z domeny `prowly.com`
  * nie chcemy by zwierał w sobie tag, czyli znak `+` (o tagach: https://support.google.com/manufacturers/answer/6184604?hl=en#:~:text=Email%20tags%20are%20a%20handy,address%20with%20the%20tag%20here.)
### 4. W widoku głównym mamy listę userów - kliknięcie na jednego z nich powinno przenieść do widoku formularza dodawania kontaktu dla wybranego użytkownika i ustawić odpowiednią wartość w polu typu select.

### 5. Na liście użytkowników obok imienia i nazwiska chcemy wyświetlić dodatkowo numer telefonu, który dostępny jest w oddzielnym streamie (getProfiles, patrz: `app/src/state`), stwórz jeden stream, który wzbogaci usera o atrybut profil (patrz: interfejs UserWithProfile).

### 6. Komponent z formularzem przenieś do oddzielnego lazy-loadowanego modułu wewntąrz folderu `src/app/lazy-modules`.

# 🇬🇧🇺🇸 English version

### Simple Angular 13 + NgRx app.

### URL to the users list: `http://localhost:4200/users`

# **Tasks**

### 1. Create dummy component <app-user-item>. It should display first name, last name and email address of a single user. Use this component in `UsersListComponent`.

### 2. Create new component with a form to create a new *contact* for an user.
Form must have following fields:
  * first name
  * last name
  * email
  * user select (contact owner) - it should be an input type select, form should store user id, select field should display user's name

### 3. Add custom email validator to the email field from previous task.
Validator should check:
  * email address must not be from `prowly.com` domain
  * provided email must not contain an email tag, a tag in email is added with a `+` sign before `@` (more about tags: https://support.google.com/manufacturers/answer/6184604?hl=en#:~:text=Email%20tags%20are%20a%20handy,address%20with%20the%20tag%20here.)
### 4. In users list (`UsersListComponent`), when someone clicks on a specific user, she/he should be redirected to the form component with clicked user already chosen in select field.

### 5. In users list (`UsersListComponent`), we want to show user's phone number. Phone number is stored in UserProfile. Use `getProfiles` selector (take a look at `app/src/state`), and combine it with `getUsers` selector. Remeber to dispatch an action to get profiles.

### 6. Form component should be lazy-loaded. Move it to `src/app/lazy-modules`.