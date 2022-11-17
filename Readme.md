## welcome to the image processing project for fwd advanced by Ahmed Osama
## The project reads an image and takes the desired sizing of the image and returns the image with that size
## Instructions to build the project
    1-Download the project to your desired directory
    2-open the folder with vscode or continue with any terminal if you prefer
    3-after opening your terminal run "npm install" 
    4-run "npm run build"
    5-run "node dist/."

## How to use

    1- open your browser to url="localhost:3000/convert?imgName=santamonica&width=1400&height=800"
    2- we have 3 variables:
        . imgName: which is the name of the image in the assets folder
        . width: the desired width of the image
        . height: the desired height of the image
    3- you can change any of the 3 variables and if you wanted to test your image just copy it to assets/imgs folder in the project directory.
    4-all images you can choose from is in assets/imgs but after running the endpoint the image with the new size is created in the folder assets/loaded-imgs in which it will be loaded if the user call the same endpoint again.


## Other scripts

    1- "npm run test" for unit tests
    2- "npm run lint"
    3- "npm run prettier"
    4- "npm run start" if you want to run it from the dev with nodemon


