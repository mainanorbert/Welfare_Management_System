# Welfare Management System

## Overview
Transparency and accountability have been my driving force in learning SE. Having noticed the inefficiencies of managing welfare activities in the village, I decided to come up with a Welfare Management System (WMS). The purpose of my PROJECT is to empower communities through the development of a system that aims to facilitate transparent contributions, accountable financial management, and seamless interaction among community members. By providing a platform for managing welfare contributions, donations, and financial activities, the WMS seeks to address the challenges associated with the inefficiencies of manual record-keeping, lack of transparency, and difficulties in maintaining accurate financial records. The project aims to streamline and automate these processes, fostering transparency, accountability, and ease of access to welfare-related information. Through the integration of the Mpesa API for automated transactions, the WMS further enhances its functionality, enabling users to make contributions and transactions more conveniently. Overall, the purpose of the project is to improve the welfare management process within communities, promoting efficiency, transparency, and accountability.
## Table of Contents

- [Technologies Used](#Technologies-Used)
- [Installation Frontend](#Installation-Frontend)
- [Installation Backend](#Installation-Backend)
- [Configurations](#Configurations)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [More](#more)

## Technologies-used
- [React-Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)
- [Tailwind-CSS](https://tailwindcss.com/docs/guides/create-react-app)
- [Django](https://docs.djangoproject.com/en/5.0/topics/install/)

## Installation-Frontend
1. Clone the repository to your local machine.
   ```sh
   git clone https://github.com/mainanorbert/Welfare_Management_System.git
2. Navigate into the Project Directory
   ```sh
   cd wms-frontend
3. Install Dependencies
   ```sh
   npm install
4. Start the Development Server
   ```sh
   npm run dev
5. Access the Project in the Browser
   ```sh
   http://localhost:5173

## Intallation-Backend
1. Clone the Repository
- skip this step if alread clone when installing frontendd
   ```sh
   git clone https://github.com/mainanorbert/Welfare_Management_System.git
2. Navigate into the Project Directory
   ``sh
   cd wms
3. Install Dependencies (optional, if using a virtual environment)
   ```sh
   python -m venv venv
   source venv/bin/activate  # For Linux/Mac
   . .\venv\Scripts\activate  # For Windows
4. install the packages with other dependencies
   ``sh
   pip install -r requirements.txt
5. Apply Migrations
   ``sh
   python manage.py migrate
6. Create a Superuser (if needed)
   ```sh
   python manage.py createsuperuser
7. Run the Development Server
   ```sh
   python3 manage.py runserver

## Configuration
After installing and running both frontend and backend, other configurations include:
1. updating `AxiosClient.jsx` file of the react frontend to ensure baseURL matches you backend url
2. Updating `wms/settings.py` of the django backend to ensure that `CORS_ALLOWED_ORIGINS` include your local frontend developement server url e.g., `http://localhost:5173`
   
 

## Usage

After installing:
### More
 - Read [blog](https://gist.github.com/mainanorbert/e7ff15c322f1c2bfa6d6a957750f81b5) on this project
 - Hosted project can be found [Here](https://wms.nobertechx.xyz/)
 - [Twitter](https://twitter.com/mainanorbert2)
