# Welcome to Rock, Paper, Scissors, Lizard, Spock - The ultimate game of chance.

![Site Mockup](/screenshots/site-mockup.png)


## Introduction

Rock, Paper, Scissors, Lizard, Spock is a game invented by Sam Kass with Karen Bryla.  It is an expansion of the well known classic "Rock, Paper, Scissors. The game was recently given a boost in popularity thanks to being mentioned on "The Bing Bang Theory" a popular american sitcom. 

The pupose of this site is to allow players to test their luck against the computer, or perhaps to help friends and family make decisions based on the random outcome of the game or just as a source of fun. The computer in this game makes a genuinely random selection, thus giving a fairer result than playing with another person as there are no patterns or preferred choices used by the computer. The users of this game will be able to find out the rules of the game with a simple diagram and will be able to track their score. The game is designed to be played on any device with Javascript enabled and by both adults and children. 

## User Experience Design

### User stories

#### First Time Player Goals

- As a first time player, I want to be able to easily understand the game purpose and find instructions about it.
- As a first time player, I want to be able to take my time and not be rushed.
- As a first time player, I want to know easily if I won or lost the round. 
- As a first time player, I want to view the website and the content clearly on my mobile devices.

#### Frequent Player Goals

- As a frequent player I want to feel the game is random and I can both win and lose.
- As a frequent player I want to ensure I can see my score and the computers score.
- As a frequent player I want to start the game quickly without having to look at instructions or rules.

## Design

### Colour Scheme

The main colours used throughout the site are blue and green for back grounds with black text. The reason the developer chose these colours was to give the game a sci-fi link. Spock, who fans of Star Trek will know wore a blue shirt and green as this is colour everone thinks of with aliens. They have been merged by use of a liner-gradient in css to make an appealing background. The background offers excellent constrast with the black text and ensure the foreground is prominent. 

### Typography

The font chosen for the site is Orbitron and this has sci-fi feel and fits with the theme of the site extremly well. The fallback font is Sans Serif in case of import failure.

### Media

The images used are catching and a good visual representation of the sites theme. 

All images have been given alt text. 

## Features

The site is one page split into three areas: 

- A start screen
    - play and rules button and is the entry point into the game.
    - Pressing the rules button will open a modal box with a diagram explaining the rules.
    - Pressing the play button will take the user to the game screen.

- A game screen
    - Player selection buttons to start the game and make their choice of rock, paper, scissors, lizard or spock.
    - Computer selected and Player selected fields. 
    - The result of who won or if it was tie.
    - The score for both computer and player and number of ties. 

-  a game over screen. 
    - Notifies the user if they have won or lost the game.
    - Reset button to clear the scores and restart game.


### Existing Features

#### Start Page

##### Title

![Start Screen Title](/screenshots/start-screen-title.png)

##### Start Screen Image

- Start screen has an animated cartoon image of spock with a fade in effect, making it look like he is being beamed onto the page.
- There are also two buttons, play and rules. Play will take user to the game screen and rules will display the rules diagram.

![Start Screen](/screenshots/start-screen.png)

##### Rules Modal
- When a player clicks the rules button they are present with a clear diagram showing the game rules.

![Rules](/screenshots/rules-modal.png)

#### Game Screen

##### Title

- The title is repeated on the game screen

![Game Screen Title](/screenshots/game-screen-title.png)

##### Game Start

- Clear instructions on how to start the game

![Start Game Instructions](/screenshots/game-instructions.png)

##### Player Selection Icons

- The player can click an icon to begin the game and for each turn.
- Each icon shows the same hand signal you would use if playing in person.

![Player Icons](/screenshots/selection-icons.png)

##### Selected Icons

- This area show what both the computer and player have selected

![Selected Icon](/screenshots/choices.png)

##### Result

- There are three possible outcomes for each round, a win, a loss and a tie, the user will be shown a message corrisponding to the outcome.

    - A Win 

    ![result-win](/screenshots/result-win.png)

    - A Loss

    ![result-loss](/screenshots/result-lose.png)

    - A Tie

    ![resilt-tie](/screenshots/result-tie.png)

##### Scores

- The player and computer scores and number of tied rounds are displayed.

![Scores](/screenshots/scores.png)


#### Game Over Screen

- Once either the player or the computer reaches ten round wins the game is over. 
- The user will be presented with the game over screen and a message to say whether they have won or lost the game.
- There is a reset button that will allow the user to return to the game screen with all scores reset to start a new game.

    - Game over win

    ![game-over-win](/screenshots/game-over-win.png)

    - Game over lose

    ![game-over-lose](/screenshots/game-over-lose.png)
  
#### Footer

- The footer contains links to Facebook, Twitter and Instagram and apears on all pages making it easy for users to link to social media. This is viewable on the landing page, the main game page and the game over screen.

![footer](/screenshots/social-media.png)

### Future Features

- I would like to add some mutable sound effects for win and lose.
- Add animation to game over image.
- Add the ability to player vs a human player as well as the computer.
- Add play online functionality

## Technologies Used

### Main Languages

- HTML5
- CSS3
- JavaScript

### Libraries, Frameworks & Programs Used

- [Google Fonts](https://fonts.google.com/)
    - The font "Obritron" was imported from Google fonts. 

- [Git](https://git-scm.com/)
    - Git was used for version control by using the terminal within GitPod to commit to Git and then push to GitHub.

- [GitHub](https://github.com/)
    - GitHub was used to store the project after performing a push from GitPod.

- [Font Awesome](https://fontawesome.com/)
    - Font Awesome was used to import social media icons into the footer. 

- [Am I Responsive](https://ui.dev/amiresponsive#/)
    - Am I Responsive was used to create the mockup at the top of the README and to ensure responsive design throughout the project.

## Testing

Information on testing performed is locatated in a seperate testing file [Here](/TESTING.MD)

## Bugs 

### Solved bugs

I experienced an issue after making a change to my functions, I removed the need for one called getScore which in turn would call two other functions one being updateScores. I didn't delete getScore or update an onclick that was calling this function. This meant I was getting an error stating I had an undelcared function in my code when checking the Javascript with JSHint. I then deleted the getScore function which then broke my scoring panel, meaning the player and computer scores stopped working. After some debugging I discovered this was due to the onclick function, which I updated to call the correct function and not getResult which solved the issue.

### Unfixed bugs

There are no unfixed bugs

## Deployment

### Deploy to GitHub Pages

This site has been deployed to GitHub Pages. The steps needed to deploy are listed below:

- In the GitHub repository select settings
- Once on the settings page select pages from left hand menu
- You will now see "Build and Deployment" options
- Look for the "Branch" heading
- Here you will see a drop down menu with the options none and main
- Select main and then hit save
- Within a few minutes a ribbon will appear detailing that the site is live and the deployment was successful

### For anyone wishing to load the site and develop it further by cloning or forking the repository

#### Clone the respository to create a local copy 

- On GitHub.com navigate to the main page of the repository.
- Abouve the list of files you should see the code button click this and you will be given the below options
- Copy the URL for the repository
    - To clone the repository using HTTPS, under "HTTPS", click copy.
    - To clone the repository using an SSH key, click SSH, then click copy.
    - To clone a repository using GitHub CLI, click GitHub CLI, then click copy.
- Open Terminal in GitPod.
- Change the current working directory to the location where you want the cloned directory.
- Type git clone, and then paste the URL you copied earlier.
- Press Enter to create your local clone.

#### Fork the Repository

- On GitHub.com, navigate to the repository.
- In the top-right corner of the page, click Fork.
- Select an owner for the forked repository.
- By default, forks are named the same as their upstream repositories. You can change the name of the fork to distinguish it further.
- Optionally, add a description of your fork.
- Choose whether to copy only the default branch or all branches to the new fork. For many forking scenarios, such as contributing to open-source projects, you only need to copy the default branch. By default, only the default branch is copied.
- Click Create fork.


## Credits

### Content

- Advice on creating modals from [w3schools](https://w3schools.com/)
- Advice on css animation from [w3schools](https://w3schools.com/)
- Code for fixed footer from [w3schools](https://w3schools.com/)
- 3 different ways to code rock, paper scissors by Ania Kubow on youtube really helped me understand the code flow, different logic options and differnet ways to solve problems. [Ania Kubow Tutorial](https://youtu.be/RwFeg0cEZvQ/)
- Font used is Orbitron from Google Fonts, both 700 and 400 weights have been used. 

### Media

- Player icons are from [Free Icon Library](https://icon-library.com/)
- Spock image, favicon and game over image are from [pngaaa.com](https://pngaaa.com/)
- Icons used on site are from [Font Awesome](https://fontawesome.com/)