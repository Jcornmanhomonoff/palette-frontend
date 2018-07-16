# Palette README

## Version 1 (Not updated with v2 yet)
Palette is an a full-stack application made for graphic designers to find inspiration. It uses a 3rd party API called Dribbble to load projects that other designers are working on/have worked on. Dribbble is accessed through a jQuery library called Jribbble.


## Process
I use Ruby on Rails to scaffold out my backend. I have a one-to-many relationship with a user having many Favorites. The Favorites table includes id, dribbble, name, and tag. I ended up not using "name" but would like to unclude it upon further work. Upon finishing the backend, I proceeded to load the 3rd party API and work on the CRUD functionality.

## Unsolved Problems
The point of my "tag" on each image was to allow users to filter their favorites and easily find projects by tag. My next step would be to implement that search function. I also have a setTimeout in one of my functions because I couldn't figure out how to render my handlebars template after receiving info from my 3rd party API. I also would like to style my landing-page and my favorites section.

## User Stories
1. As a user I would like to easily be able to search through my favorites to find a project.
2. As a user I would like the site to be visually appealing so I don't get bored.
3. As a user I would like the site to be simple so I can easily use it.
