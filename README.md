# [Photo-Hut](https://ucf-photo-hut.herokuapp.com/)
 ![GitHub license](https://img.shields.io/badge/License-MIT-blue.svg)

## Description

PhotoHut is a community site for professional photographers. Allowing collaboration, inspiration, and accessibility for those serious about their art. The site’s success will be in its number of users and activity through the comment and voting system.

## Table of Contents
- [Description](#description)
- [Usage](#usage)
- [Installation](#installation)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions-for-the-developer)

## Usage

The deployed web application can be accessed at [Photo-Hut](https://ucf-photo-hut.herokuapp.com/).

 Photo Hut allows professional photographers to connect and collaborate in a space devoted to their art, apart from existing social networking applications which focus on promotion of the individual over the content itself. Users create an account that allows them to create a profile to disply their work. Future development plans will allow users to provide links to their other social media accounts such as LinkedIn. Users currently can upload their photos with captions, but the ability to pin their favorite at the top and reorder the photos according to their own design is also in development. Using the Search function, users can browse other profiles, commenting and upvoting. This collaboration allows photographers to follow trends in their community by popularity and gather tips and tricks from others.

## Installation

Installing this repository locally is not necessary for usage, but if you wish to contribute to development then the following steps will be required to get up and running:

*You must have mysql installed to be able to run this repository on your local machine*

1. clone the repository 

       $ git clone git@github.com:Azambik/Photo-Hut.git

2. install the necesary dependencies

       $ npm install

3. initialize your local database:

   first login to mysql (this may be different depending on how you have mysql set up)

       $ mysql -u root -p
   then create the database by running the following within the cli

       mysql> source db/schema.sql
4. seed the database with test data

       $ npm run seeds

5. link your unique environemental variables. Create a '.env' file in the root folder with the following info:

       DB_NAME='photohut_db'
       DB_USER= [YOUR MYSQL USERNAME]
       DB_PW= [YOUR MYSQL PASSWORD]
       D_PORT='3001' // or alternate port to host locally
       ES_KEY= [UNIQUE PASSWORD]

6. start your local server to view the webapp in your browser

       $ npm start

7. To view the application in a web browser at the port you defined before, enter:

       localhost:3001


**Happy Developing!**

## License
*[MIT License](https://www.mit.edu/~amini/LICENSE.md)*

## Contributing

To contribute to the future development of this site, please reach out directly to Andrew Zambik, 'Azambik' on GitHub to gain access to the workflow and be added to the queue for ongoing enhancements.

## Tests

Tests are set up through Jest to validate functionality of the helper utilities. To run the test script, first follow the installation instructions. Then enter

         $ npm test 


## Questions for the Developer
*Have a question? Contact me below and see what else I'm working on!*  

|  Role | Github      | Email |
| ---- | ----------- | ----------- |
| Database & Routes | [AZambik](https://www.github.com/AZambik)      | azambik@gmail.com       |
| Profile & Merges | [dcharney](https://www.github.com/dcharney)    | delaneycharney@gmail.com        |
| Dashboard | [MichaelDevelopsCode](https://www.github.com/michaeldevelopscode)| michaeldevelopscode@gmail.com|
| Photo Modal | [wdavonta](https://www.github.com/wdavonta) | wdavonta@gmail.com |
| Navbar | [jadavis30](https://www.github.com/jadavis30) | jared.davis21@yahoo.com |
| CSS | [adrianMike2](https://www.github.com/adrianmike2) | adrianmike2@gmail.com |
