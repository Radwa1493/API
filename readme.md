Download libraries 
    Run in terminal Terminal : npm install

    if an error occurce try to delete node_modules and run the bellow command
    Run in terminal Terminal : npm install jest@25.5.4 node-fetch@2.6.0 jest-html-reporter@3.10.0

Project structure 
    API_Jest/
    ├── api.test.js/      > Test class
    |   ├── POST create a new pet   -> TCC1
    |   ├──GET API - Fetch pet details  -> TC2
    ├── pets.json/        > Request body
    ├── test-results.html > HTML report 
    ├── Dockerfile

Run Project 
     Run in terminal : npm run test:report

Run on docker 
    1)open docker desktop
    2)Run in terminal : docker build -t my-jest-project .
    3)Run in terminal : docker run --rm -it my-jest-project