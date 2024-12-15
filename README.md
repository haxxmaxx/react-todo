# react-todo

A simple fullstack todo app written in node and react

# How to run
The app is currently only runable locally in dev mode. You need node and npm installed.


To install dependencies, open up a terminal and run

```npm install```

Start the backend using

```npm run api```

You can also pre-polulate the list using

```npm run api:pre-populate```

To start the frontend, open another terminal and run

```npm run dev```

## Overview and design

The idea was to create something similar to the apple reminders app. I really like how user-friendly it is, especially three features:

- checking and unchecking items is debounced, and once you are inactive, the items are deleted.
  This makes the checkbox and the delete button the same, but you can still "undo deleting" by unchecking an item.
- There is no edit button, you simply press the text to start editing it. Once you are done, it is saved automatically. The text doesn't look like an input element, creating a much cleaner look.
- There is no empty add form. You simple press the below the existing items to start to type and create a new item.

Since the last one kind of collided with the pagination, I decided to do the first two.
I focused mostly on creating intuitive UI, well structure files, short functions and easy-to-read code.
I wanted to do as few "resetting" actions as possible.
For example when you add an item, check items or change the sorting, you should stay on the same page.
The only time the page changes is if you filter/check items and the page you were on doesn't exist anymore.
Then you move to the last existing page.

## Architecture

### backend

The backend is a very simple REST API. It is only called when adding, removing or editing items (sorting, pagination and filtering is done in the frontend).
Therefor I set up, GET, POST, PUT and PATCH endpoints.
I don't have a DELETE, since you delete by calling PATCH and thus can delete multiple items at once.
Every time the "database" is changed, I do a GET request to make sure I am up to date with the backend.

### frontend

On the frontend, I tried to have a single source of truth. I chose to have a react reducer that keeps track of all the todos.
Pretty sure it is pure, so running react in strict mode is not a problem with the double calls to hooks.
There are multiple lists of todos:

- `sortedTodos`: One with all the sorted items
- `filteredTodos`: One with sorted and filtered items
- `visibleTodos`: One with sorted and filtered items, visible on the page.

This means you have to calculate all three when sorting and filtering, but they should be fast if there is no change
(the sorting is quick when changing the filter, and vise versa).
The main advantage is that you can do any combination of filtering, sorting and pagination without resetting anything else.

## Tech choices

In general I've done nothing unique here.
I've tried to use as few packages as possible for it to be lightweight and picked very common ones for easy collaboration (if that would ever be needed).

### nmp

I prefer pnpm, but npm is the default and no real benefit with something else on a small project like this.

### Vite

Mostly chose this since you can setup a repo that has typescript and react installed, plus nice lint rules.
Also really fast (not that it is needed on such a small project like this)

### Mui

It is a library that I am familiar with that I knew had a pagination component, so it was the natural choice.
It also comes with a nice default styling and has a debouncer util

### CSS

I've decided to not use any of the fancy ways of styling that mui has.
I've simply created some classes to compliment then build in styling in Mui.

### express

Simple and widespread package to write a rest API. That together with the crud package was all I needed to run a server locally.

### axios

Again, simplest choice to do REST API calls.

## De-scoped/Ideas

- **Proper backend:** I basically have no type safety or error handling. But I guess that wasn't the main focus of the assignment
- **Proper deploying:** The only way to run this currently is through two ports on localhost
- **Dynamic UI:** The UI is very static, especially in terms of height. I wanted to make sure there is no scroll and that stuff doesn't jump around.
  So the list is set to a fixed height
- **Testing:** I was planning to add unit tests for some files but didn't have time. Since almost all the buissness logic is broken out so testing that would get great coverage.
  In adding, I would add some basic React Testing Library tests. I could elaborate on this if necesarry.
- **Animation:** I would really like things animate nicely when you add and remove items. This makes it easier to keep track of where things go
