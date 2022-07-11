### Simple Angular 13 + NgRx app.

### ▶️ URL to the animals list: `http://localhost:4200/animals`

# **Tasks**

### 1. Create dummy component <app-animal-item>. It should display name and type of animal. Use this component in `AnimalsListComponent`.

### 2. Create new component with a form to add a new *virtual owner* for an animal.
Form must have following fields:

  * full name
  * email
  * animal select (with animals list from previous task) - it should be an input type select, form should store animal id, select field should display animal's name

### 3. Add custom email validator to the email field from previous task.
Validator should check:

  * email address must not be from `prowly.com` domain
  * provided email must not contain an email tag, a tag in email is added with a `+` sign before `@` (more about tags: https://support.google.com/manufacturers/answer/6184604?hl=en#:~:text=Email%20tags%20are%20a%20handy,address%20with%20the%20tag%20here.)
  
### 4. In animals list (`AnimalsListComponent`), when user clicks on a specific animal, user should be redirected to the  new virtual owner form component with clicked animal already chosen in select field.

### 5. In animals list (`AnimalsListComponent`), we want to show animal's photo. Photo is stored in AnimalProfile. Use `getAnimalsProfiles` selector (take a look at `app/src/state`), and combine it with `getAnimals` selector. Remember to dispatch an action to get profiles.

### 6. Form component should be lazy-loaded. Move it to `src/app/lazy-modules`.