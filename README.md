# Picture Board

Displays user posted images. Users can login through Twitter and link or delete their own images.

[Live Application](https://picture-board-dlzl.herokuapp.com)

### Project Goals

Application was completed as a freeCodeCamp [challenge](https://www.freecodecamp.org/challenges/build-a-pinterest-clone).

1. User Story: As an unauthenticated user, I can login with Twitter.

2. User Story: As an authenticated user, I can link to images.

3. User Story: As an authenticated user, I can delete images that I've linked to.

4. User Story: As an authenticated user, I can see a Pinterest-style wall of all the images I've linked to.

5. User Story: As an unauthenticated user, I can browse other users' walls of images.

6. User Story: As an authenticated user, if I upload an image that is broken, it will be replaced by a placeholder image. (can use jQuery broken image detection)

7. Hint: Masonry.js is a library that allows for Pinterest-style image grids.

### Technologies

* body-parser
* connect-ensure-login
* express
* express-handlebars
* express-session
* mongoose
* morgan
* passport
* passport-twitter
* path
