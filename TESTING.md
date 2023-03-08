# Welcome to Rock, Paper, Scissors, Lizard, Spock - Testing

[Main README.md file](/TESTING.MD)  

[View Live site](https://adamt84.github.io/rock-paper-scissors-lizard-spock/)

[View GitHub repository](https://github.com/AdamT84/rock-paper-scissors-lizard-spock/)

## Testing

### Testing user stories. 


#### First Time Player. 


1. As a new player, I want to be able to easily understand the game purpose and find instructions about it.
    - The start screen tells the user the name of the game and that it is a game of chance.
    - There is a rules button allowing the user to view the easy to follow rules diagram.
    - On the main game screen the user is told how to start the game.

2. As a new player, I want to be able to take my time and not be rushed.
    - There is no timing function used, the player decides the speed of the game.

3. As a new player, I want to know easily if I have won or lost the round.
    - The result of each round is displayed clearly in the results area. 
    - After the player or the computer gets 10 wins the game ends and the user is clearly informed if they have won or lost.

4. As a new player, I want to view the website and content clearly on my mobile devices. 
    - The website has been designed with mobile devices in mind and fully tested to ensure all aspects of the site are responsive. 

#### Frequent Player Goals

1. As a frequent player I want to feel the game is random and I can both win and lose.
    - The game is truly random as the computer player is programmed to select a random choice each time. There are no patterns or preferences to pick a certain option.
    - The choice selected by both player and computer are displayed.

2. As a frequent player I want to ensure I can see my score and the computers score.
    - The scores for both player, computer and ties are tracked correctly throughout the game.

3. As a frequent player I want to start the game quickly without having to look at instructions or rules.
    - The player can click play on the start screen and begin play immediately without being prompted to look at the rules.


### Manual Testing

Continual testing was performed during the development of this site by using DevTools, ensuring that not only did the layout look as intended but also behaved as intended. Once the site had been uploaded to GitHub repository more thorough testing was completed as outlined below.

- The tests were carried out on iOS, MacOS, Windows and Android operating systems
- Devices used in testing were MacBook Pro 16", iMac 27", iPad Pro, iPhone 8 & 12, Lenovo X1 Yoga and Samsung Galaxy S20
- Browsers used in testing: Safari, Chrome (both on Windows and MacOS), Edge and Firefox

#### Basic tests carried out on all browsers and devices

- Test pages load correctly across all operating systems and devices
- Test pages are all responsive and clearly viewable on different screen sizes
- Test pages load at an acceptable speed and no images are slow to load

#### Start Screen

- Ensure that the start page is loaded first.
- Ensure the Spock image animation is working.

![Spock animation](/screenshots/gifs/spock-animation.gif)

- Ensure that the rules modal appears when rule button is clicked.

![rules modal](/screenshots/gifs/rules-modal.gif)

- Ensure that the play button takes the player to the game screen.

![play button](/screenshots/gifs/play-button.gif)

- Ensure that the button hover style is working for play and rules.

![button hover](/screenshots/gifs/start-screen-buttons.gif)

- Ensure that the start screen is responsive to multiple screen sizes.

![Start screen responsiveness](/screenshots/gifs/start-page-responsive.gif)

- Ensure that rules modal is responsive.

![Rules modal responsiveness](/screenshots/gifs/rules-responsive.gif)

#### Game Screen

- Ensure that each icon works.
- Ensure the correct selection appears in the player choice field.
- Ensure the computer choice is displayed.
- Ensure scores and ties are recorded.
- Ensure the correct result is displayed.

![game play](/screenshots/gifs/game-play.gif)

- Ensure that the game screen is responsive to multiple screen sizes.

![Game screen responsiveness](/screenshots/gifs/game-screen-responsive.gif)

#### Game Over Screen

- Ensure the game over screen appears when player wins.
- Ensure the correct result text is displayed to tell player they won.

![Game over win](/screenshots/gifs/game-over-win.gif)

- Ensure the game over screen appears when player loses.
- Ensure the correct result text is displayed to tell player they lost.

![Game over lose](/screenshots/gifs/game-over-lose.gif)

- Ensure the reset button takes the user back to game screen and clears all scores.

![Reset button](/screenshots/gifs/reset-button.gif)

- Ensure that the reset button hover style is working.

![Reset button hover](/screenshots/gifs/game-reset-button.gif)

- Ensure that the game over screen is responsive.

![Game over responsiveness](/screenshots/gifs/game-over-responsive.gif)

#### Footer

- Ensure that Facebook opens in a new tab when icon is clicked.

![Facebook](/screenshots/gifs/fb-button-gif.gif)

- Ensure that Instagram opens in a new tab when icon is clicked.

![Instagram](/screenshots/gifs/Insta-button.gif)

- Ensure that Twitter opens in a new tab when icons is clicked.

![Twitter](/screenshots/gifs/twitter-button-gif.gif)

### Automated Testing

#### Code Validation

The [W3C Markup Validator](https://validator.w3.org/) has been used to validate the HTML code in this project.

- Result was a pass with no errors for index.html

![HTML Validator](/screenshots/html-check.png)

- Result was a pass with no errors for 404.html

![404 HTML Validator](/screenshots/html-check-404.png)


The [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) has been used to validate the CSS code in this project.

- Result was a pass with no errors

![CSS Validator](/screenshots/css-check.png)

[JSHint](https://jshint.com/) has been used to validate the JavaScript code in this project.

- Result was no errors or warnings found.

![JSHint Check](/screenshots/jshint-check.png)

#### Lighthouse

- Site scored maximum marks on Lighthouse testing

![lighthouse testing](/screenshots/lighthouse.png)

#### Wave

[Wave Accessibility Evaluation Tool](https://wave.webaim.org/) was used to check for any accessibility issues. None were found.

![Wave Accessibility Testing](/screenshots/wave-accessibility.png)



