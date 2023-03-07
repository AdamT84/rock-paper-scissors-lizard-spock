# Welcome to Rock, Paper, Scissors, Lizard, Spock - The ultimate game of chance.

Rock, Paper, Scissors, Lizard, Spock is a game invented by Sam Kass with Karen Bryla.  It is an expansion of the well known classic "Rock, Paper, Scissors. The game was recently given a boost in popularity thanks to being mentioned on "The Bing Bang Theory" a popular american sitcom. 

The pupose of this site is to allow players to test their luck against the computer, or perhaps to help friends and family make decisions based on the random outcome of the game or just as a source of fun. The computer in this game makes a genuinely random selection, thus giving a fairer result than playing with another person as there are no patterns or preferred choices used by the computer. The users of this game will be able to find out the rules of the game with a simple diagram and will be able to track their score. The game is designed to be played on any device with Javascript enabled and by both adults and children. 

## Features

### Existing Features

-  Navigation Bar

    - The Navigation bar is fully responsive and aligned centrally at the top of all pages and includes links to Home, Training and Contact pages. This will ensure the navigation experience is the same across the entire site.
    - The value for the user is a simple navigation method that allows access to any page from any page. 



- Landing page image

    - The landing page image features a photo with the Young PT logo and moto overlayed showing the user that this site relates to training.
    - This will introduce the user to the Young PT brand and colour schemes used through the site. 



- Welcome page

    - The welcome page provides information on Lauren Young, her background, exprience and qualifications. This also includes details of different types of training available.
    - This will provide the user with vital information about Lauren and why they should use her services. It also educates the user on various training types that are on offer, the cost of sessions and cancellation policy.



- Training page

    - The training page provides information on the benefits of pysical training, including information on General Health, Weight Loss, Strength Training, Flexibility, Pre/Post Natal training and Mental health.
    - This will provide education on the benefits of a healthy lifestyle and serve as motivation to get active. 



- Contact page

    - The contact page provides a contact form with fields for name, email and message and lists email and mobile number for Lauren. There is also a picture of Lauren with motivational quote.
    - This will provide the user with multiple options to contact Lauren and also show them what she looks like. 

)

- Footer

    - The footer contains links to Facebook, Twitter and Instagram and apears on all pages making it easy for users to link to social media. It also includes Lauren's email and phone number on all pages.
    - This will allow the user to visit the young PT social sites from every page and encourage them to connect. It will also allow users imediate access to Lauren's contact page without having to visit a specific page.



### Future Features

- I would like to add some mutable sound effects for win and lose.
- Add animation to game over image.
- Add the ability to player vs a human player as well as the computer.

# Testing

Continual testing was performed during the development of this site by using DevTools, ensuring that not only did the layout look as intended but also behaved as intended. Once the site had been uploaded to GitHub repository more thorough testing was completed as outlined below.

- The tests were carried out on iOS, MacOS, Windows and Android operating systems
- Devices used in testing were Macbook Pro 16", iMac 27", iPad Pro, iPhone 8 & 12, Lenovo X1 Yoga and Samsung Galaxy S20
- Browsers used in testing: Safari, Chrome (both on Windows and MacOS), Edge and Firefox

## Basic tests carried out on all browsers and devices

- Test pages load correctly across all operating systems and devices
- Test pages are all responsive and clearly viewable on different screen sizes
- Test pages load at an acceptable speed and no images are slow to load

For a complete


## Validator Testing

- HTML

    - All pages had their HTML tested with the official  and no errors were returned.

- CSS

    - Stylesheet.css was passed though the official  and no errors were returned.

- JAVASCRIPT
    - index.js was passed through JSHint and no errors were returned.

## DevTools Lighthouse Testing

- Site scores highly in all areas on Lighthouse



## Bugs 

### Solved bugs

I experienced an issue after making a change to my functions, I removed the need for one called getScore which in turn would call two other functions one being updateScores. I didn't delete getScore or update an onclick that was calling this function. This meant I was getting an error stating I had an undelcared function in my code when checking the Javascript with JSHint. I then deleted the getScore function which then broke my scoring panel, meaning the player and computer scores stopped working. After some debugging I discovered this was due to the onclick function, which I updated to call the correct function and not getResult which solved the issue.

### Unfixed bugs

There are no unfixed bugs

# Deployment

## Deploy to GitHub Pages

This site has been deployed to GitHub Pages. The steps needed to deploy are listed below:

- In the GitHub repository select settings
- Once on the settings page select pages from left hand menu
- You will now see "Build and Deployment" options
- Look for the "Branch" heading
- Here you will see a drop down menu with the options none and main
- Select main and then hit save
- Within a few minutes a ribbon will appear detailing that the site is live and the deployment was successful

## For anyone wishing to load the site and develop it further by cloning or forking the repository

### Clone the respository to create a local copy 

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

### Fork the Repository

- On GitHub.com, navigate to the repository.
- In the top-right corner of the page, click Fork.
- Select an owner for the forked repository.
- By default, forks are named the same as their upstream repositories. You can change the name of the fork to distinguish it further.
- Optionally, add a description of your fork.
- Choose whether to copy only the default branch or all branches to the new fork. For many forking scenarios, such as contributing to open-source projects, you only need to copy the default branch. By default, only the default branch is copied.
- Click Create fork.



# Credits

## Content

- Advice on creating modals from [w3schools](https://w3schools.com/)
- Advice on css animation from [w3schools](https://w3schools.com/)
- Code for fixed footer from [w3schools](https://w3schools.com/)
- 3 different ways to code rock, paper scissors by Ania Kubow on youtube really helped me understand the code flow and differnet ways to solve problems. [Ania Kubow Tutorial](https://youtu.be/RwFeg0cEZvQ/)
- Font used is Orbitron from Google Fonts, both 700 and 400 weights have been used. 

## Media

- Player icons are from [Free Icon Library](https://icon-library.com/)
- Spock image, favicon and game over image are from [pngaaa.com](https://pngaaa.com/)
- Icons used on site are from [Font Awesome](https://fontawesome.com/)