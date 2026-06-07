# Employee Leave Management System

A full-stack Employee Leave Management System built using Spring Boot, React, JWT Authentication, and MySQL.

## Features

### Authentication & Authorization
- JWT Based Authentication
- Spring Security Integration
- Role-Based Access Control
- Secure Login System

### Roles

#### Admin
- View Dashboard Statistics
- Create Employees
- Create Managers
- View Employee List
- View Manager List
- Delete Employees
- Delete Managers

#### Manager
- View Pending Leave Requests
- Approve Leave Requests
- Reject Leave Requests
- Track Leave Reviews

#### Employee
- Apply for Leave
- View Leave History
- Track Leave Status
- View Leave Statistics

---

## Tech Stack

### Backend
- Java 17
- Spring Boot 3
- Spring Security
- JWT Authentication
- Spring Data JPA
- Hibernate
- MySQL
- Lombok
- Maven
- Swagger

### Frontend
- React JS
- Vite
- Axios
- React Router DOM
- CSS3

### Database
- MySQL

---

## Project Architecture

Employee Leave Management System

├── Backend (Spring Boot)

│ ├── Authentication

│ ├── Authorization

│ ├── Employee Management

│ ├── Leave Management

│ └── Dashboard APIs

│

└── Frontend (React)

├── Login Page

├── Admin Dashboard

├── Manager Dashboard

├── Employee Dashboard

└── Role-Based Navigation

---

## API Modules

### Authentication APIs
- Register Employee
- Login User
- Generate JWT Token

### Admin APIs
- Dashboard Statistics
- Create Employee
- Get Employees
- Delete Employee

### Manager APIs
- View Pending Leaves
- Approve Leave
- Reject Leave

### Employee APIs
- Apply Leave
- View Leave History

---

## Database Tables

### Employee
| Field | Type |
|---------|---------|
| id | Long |
| name | String |
| email | String |
| password | String |
| role | Enum |

### Leave Request
| Field | Type |
|---------|---------|
| id | Long |
| startDate | LocalDate |
| endDate | LocalDate |
| reason | String |
| status | Enum |
| employeeId | Long |

---

## Security

- Password Encryption using BCrypt
- JWT Token Authentication
- Protected REST APIs
- Role-Based Authorization

---

## Screenshots

### Login Page
Modern glassmorphism login page with secure authentication.

### Admin Dashboard
- Dashboard Analytics
- Employee Management
- Manager Management

### Manager Dashboard
- Pending Requests
- Approve/Reject Actions

### Employee Dashboard
- Apply Leave
- Leave Statistics
- Leave History

---

## Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/employee-leave-management-system.git
```

### Backend Setup

```bash
cd backend
```

Configure MySQL in:

```properties
application.properties
```

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/leave_management
spring.datasource.username=root
spring.datasource.password=yourpassword
```

Run:

```bash
mvn spring-boot:run
```

Backend runs on:

```text
http://localhost:8080
```

---

### Frontend Setup

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run:

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## Future Enhancements

- Email Notifications
- Leave Balance Tracking
- Employee Profile Management
- Pagination
- Search & Filter
- Charts & Analytics
- Cloud Deployment
- Docker Support

---

## Author

**Sai Rakesh**

Java Full Stack Developer

Skills:
- Java
- Spring Boot
- Spring Security
- React JS
- MySQL
- REST APIs
- JWT Authentication

---

## License

This project is developed for learning, portfolio, and interview demonstration purposes.
