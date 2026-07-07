# Trivia Game

A simple browser-based trivia game built with HTML, CSS, and JavaScript.
Developed using AI-assisted pair programming with GitHub Copilot.

## Features

- Choose a theme before starting a round
- Select how many questions to play
- Answer multiple-choice questions one at a time
- Track your score during the round
- Stop the round early and return to the theme selection screen

## Project Structure

- index.html — main page structure
- css/styles.css — styling for the game
- js/trivia.js — game logic and question flow
- data/triviaQuestions.js — trivia question bank

## How to Run

1. Open the project folder in a browser, or serve it locally.
2. From the project folder, run:

   python -m http.server 8000

3. Open http://localhost:8000/ in your browser.

## Notes

- The game uses a local JavaScript question bank stored in data/triviaQuestions.js.
- Questions are organized by theme and can be edited there.
