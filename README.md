# CSSkit

## What is CSSkit?

CSSkit is an open source UI KIT for developers to create web applications in a faster, easier and less repetitive way.
Provides pure CSS3 UI components without JavaScript dependencies.

## Getting started

You have the following options to get CSSkit:

1. Download the latest release witch includes the css minified file and the resources (images, sprites, etc...).
2. Clone the repo to get all source files: git clone https://github.com/FacundoBayle/CSSkit.git
    - ```Inside dist/ you will find the latest release.```
    - ```Inside src/ you will find all the scss components, variables, mixins and a test.html file to play with the components.```
3. Add **install.sh** in your repository and execute.

## Developers

If you want to run the entire project locally:

- To install all dependencies (gulp, sass, etc...):

        $ npm install
    
- To run the project:

        $ gulp run-dev

Once the project is up, you can do tests and modify components.
Inside the **src/** folder you will find all the scss files and a **test.html** file to be able to play with each component.

## Release Structure
Add the install.sh file to your repository and run it:

    $ ./install.sh <version>
    
If version is not definde then last version will be downloaded.

Once the execution is finished, a **CSSkit** folder will appear with the corresponding content.

CSSkit folder structure:

   - /resources/
        - /sprites/
        - /fonts/
   - css-kit.min.css (components styles)
   
## Changelog
All notable changes to this project will be documented in this [file.](https://github.com/FacundoBayle/CSSkit/blob/master/CHANGELOG.md)