<img src="./readme/title1.svg"/>

<div align="center">

> Hello world! This is the project’s summary that describes the project plain and simple, limited to the space available.

**[PROJECT PHILOSOPHY](https://github.com/julescript/well_app#-project-philosophy) • [WIREFRAMES](https://github.com/julescript/well_app#-wireframes) • [TECH STACK](https://github.com/julescript/well_app#-tech-stack) • [IMPLEMENTATION](https://github.com/julescript/well_app#-impplementation) • [HOW TO RUN?](https://github.com/julescript/well_app#-how-to-run)**

</div>

<br><br>

<img src="./readme/title2.svg"/>


> Money Hound is an accounting and project management website that helps companies handle their employees, projects and finances 
>
> There are 2 user types. The owner who can add employees, create projects and moniter the companies finances. The project manager who can be responsible for multiple projects and is able to add colleagues to their team.

### User Stories

- As an idependent business owner, I want to be able to moniter all my companies financial activity from a single place
- As a project manager, I want control over who joins my team and set activities and milestones with a few button clicks, so I would increase productivity

<br><br>

<img src="./readme/title3.svg"/>

> This design was planned before on paper, then moved to Figma app for the fine details.
> Note that i didn't use any styling library or theme, all from scratch and using pure css modules

| Landing                                                                                | User Companies                                                                               |
| -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| ![Landing](https://github.com/Khodor-Hassoun/money-hound/blob/final-updates-2/readme/project_images/Screenshot%20(88).png) | ![User companies](https://github.com/Khodor-Hassoun/money-hound/blob/final-updates-2/readme/project_images/Screenshot%20(92).png) |

| Admin Panel                                                                                | Employee table                                                                               |
| ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| ![Artists results](https://github.com/Khodor-Hassoun/money-hound/blob/final-updates-2/readme/project_images/Screenshot%20(100).png) | ![Artist's Albums](https://github.com/Khodor-Hassoun/money-hound/blob/main/readme/project_images/Screenshot%202022-11-26%20130015.png) |

| Project Details                                                                                | Sell project                                                                               |
| ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| ![Artists results](https://github.com/Khodor-Hassoun/money-hound/blob/final-updates-2/readme/project_images/Screenshot%20(98).png) | ![Artist's Albums](https://github.com/Khodor-Hassoun/money-hound/blob/final-updates-2/readme/project_images/Screenshot%20(99).png) |
<br><br>

<img src="./readme/title4.svg"/>

Here's a brief high-level overview of the tech stack the Well app uses:

- This project uses the [React library](https://reactjs.org/). React is a free, open-source JavaScript library. It works best to build user interfaces by combining sections of code (components) into full websites.
- This project uses [Express](https://expressjs.com/). A minimal and flexible [Node.js](https://nodejs.org/en/about/) web application framework that provides a robust set of features for web and mobile applications. 
- For persistent storage (database), the app uses the [MySQL](https://dev.mysql.com/doc/)  MySQL is an open-source relational database management system.
<br><br>
<img src="./readme/title5.svg"/>

> Uing the above mentioned tecch stacks and the wireframes build with figma from the user sotries we have, the implementation of the app is shown as below, these are screenshots from the real app

| User Signup                                                                                | Company Signup                                                                               |
| -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| ![Landing](https://github.com/Khodor-Hassoun/money-hound/blob/main/readme/project_images/Screenshot%20(117).png) | ![Home/Search](https://github.com/Khodor-Hassoun/money-hound/blob/main/readme/project_images/Screenshot%20(118).png) |



| Employee Page                                                                                | Projects Page                                                                               |
| -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| ![Landing](https://github.com/Khodor-Hassoun/money-hound/blob/final-updates-2/readme/project_images/Screenshot%20(102).png) | ![Home/Search](https://github.com/Khodor-Hassoun/money-hound/blob/final-updates-2/readme/project_images/Screenshot%20(103).png) |

| Project Manger                                                                | Company Owner                                                                               |
| ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| ![Home/Search](https://github.com/Khodor-Hassoun/money-hound/blob/main/readme/project_images/Screenshot%20(104).png)  | ![Home/Search](https://github.com/Khodor-Hassoun/money-hound/blob/main/readme/project_images/Screenshot%20(116).png) |

| Company Information                                                                | Employee Information                                                                               |
| ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| ![Home/Search](https://github.com/Khodor-Hassoun/money-hound/blob/main/readme/project_images/Screenshot%20(111).png)  | ![Home/Search](https://github.com/Khodor-Hassoun/money-hound/blob/main/readme/project_images/Screenshot%20(113).png) |

| User Information                                                                | New Project                                                                               |
| ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| ![Home/Search](https://github.com/Khodor-Hassoun/money-hound/blob/main/readme/project_images/Screenshot%20(114).png)  | ![Home/Search](https://github.com/Khodor-Hassoun/money-hound/blob/main/readme/project_images/Screenshot%20(112).png) |


| Project Sale GIF                                                                                | Insights GIF                                                                               |
| -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| ![Home/Search](https://github.com/Khodor-Hassoun/money-hound/blob/final-updates-2/readme/project_images/ezgif-2-59190a1074.gif) | ![Home/Search](https://github.com/Khodor-Hassoun/money-hound/blob/final-updates-2/readme/project_images/ezgif-2-4812e6f131.gif) |
<img src="./readme/title6.svg"/>

> This is an example of how you may give instructions on setting up your project locally.
> To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._


1. Clone the repo
   ```sh
   git clone https://github.com/Khodor-Hassoun/money-hound.git
   ```
2. Install NPM  packages
   ```sh
   cd backend
   npm install
   ```
3. Start Server
   ```sh
   nodemon index
   ```
4. Install React Packages
   ```sh
   cd ../frontend/webapp
   npm install
   ```
 5. Start React
    ```sh
    npm start
    ```
