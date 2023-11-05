**# Medvita**
**Problem Statement:-**

Time is a precious and finite resource that governs our lives. It reminds us of the fleeting nature of existence and the need to make the most of every moment.
Time management is crucial for personal and professional success, as it allows us to prioritize tasks, and achieve goals. And many of us had to wait at the hospitals for a doctor's appointment. Sometimes it takes a long and we are bound to sit there. Many a time we reach on time but the doctor is late which makes us more frustrated.

**Proposed Solution**

We are here to help you by reducing the waiting time and managing the appointment allocation. We will be creating a web-based application in which we will implement a Machine Learning Model to allow users to avail following features.   

--> AI-Enabled Minimum Waiting Time: Every patient who schedules an appointment with our hospital will benefit from AI-driven scheduling. This technology will calculate and provide them with the minimum waiting time for their appointment, based on various factors such as doctor availability, current patient load, and traffic conditions.

--> Information Accessibility: We are committed to making information readily available to our patients. Information about appointment times, doctor availability, and any potential delays will be accessible through two main channels: our hospital website and SMS notifications. Patients will receive regular updates to keep them informed and minimize uncertainty.

--> Real-Time Doctor Availability Tracking: Implement a biometric system using fingerprints at hospital entrances and exits to accurately track the real-time availability of doctors.[1] This system will record the real-time availability of doctors. If a doctor becomes accessible earlier than expected, patients will be notified promptly, reducing their waiting time.

**Process Flow Diagram**
![Screenshot 2023-10-06 111010](https://github.com/Mayank-2112/DataMiner/assets/113326202/388ed71a-34e6-4904-afaf-970a9732e862)

**User Data Flow Diagram**
![Screenshot 2023-10-02 000032](https://github.com/Mayank-2112/DataMiner/assets/113326202/b476f719-154b-4c4d-9122-0c28be8615c2)

**Hospital Data Flow Diagram**
![Screenshot 2023-10-02 000105](https://github.com/Mayank-2112/DataMiner/assets/113326202/b497a96f-b161-4bd6-9ba7-a823729740ca)

**Machine Learning Model Implementation**
In order to predict the waiting time of patients on the basis of more than two factors, like doctor availability, current patient load, and traveling time we will be implementing Multiple Linear regression as in this algorithm result is determined with several inputs related to each other.
Multiple Linear Regression is the extended version of Linear Regression. Unlike linear regression, in this technique there are various feature variables but only one output variable. It finds the correlation between the input factors and maps them accordingly to reach the result.

![Screenshot 2023-09-30 102243](https://github.com/Mayank-2112/DataMiner/assets/113326202/3df19ecc-777d-4d48-8b81-630938aefb79)

**Web Application Architecture**
Web application architecture is a mechanism that gives us a clarification of how the connection is established between the client and the server. for example, When you type the URL in your web browser and hit enter the web browser needs to know the address of the server where the page is located. So it sends the request to the DNS (Domain Name Server, which is a storehouse of domain names and their IP addresses ). After that browser sends the request to the found IP address using the HTTPS protocol.
In the next step, the web server sends the request to the storage area to locate the page and all data. Here Business logic (also called Domain Logic and Application Logic) comes into the picture. Business Logic takes the responsibility of routing which means how each piece of data is accessed. When the response travels back, it displays in front of your screen. The web page for any website that is displayed on your screen is called the front end of an application. Here you see all the UI and UX components to access the information.

![Screenshot 2023-10-02 130147](https://github.com/Mayank-2112/DataMiner/assets/113326202/642abdf4-349d-4000-89cd-42f1fa8ed686)
**Technology Stack**

HARDWARE REQUIREMENTS:
  CPU: Minimum Intel i3 processor
  RAM: Minimum 8GB 
  GPU: Not necessary		
  HDD: Not necessary

SOFTWARE REQUIREMENTS:
  OS : Any OS that can run any web browser
  Code Editor : Visual Studio Code
  Technologies used:
    Frontend: ReactJS, Tailwind
    Backend: NodeJS, FastAPI
    Database: MongoDB
    ML Implementing Language: Python

**References**
    [1] - S. M. Fernandez, “Dormitory Management Information System with SMS Notification and Biometric Security.” Indian Journal Of Science And Technology, vol. 15, no. 26, pp. 1296-1305, 2022, doi:     10.17485/ijst/v15i26.1578.
    [2] - J. P. Hoffmann, “Multiple Linear Regression Models.” Linear Regression Models, pp. 65-88, 2021, doi: 10.1201/9781003162230-4.
    [3] - M. Deinum and I. Cosmina, “Web Application Architecture.” Pro Spring MVC with WebFlux, pp. 55-72, 2021, doi: 10.1007/978-1-4842-5666-4_3.
