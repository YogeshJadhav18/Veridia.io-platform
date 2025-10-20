# Veridia Hiring Platform
## Project Summary
Veridia Hiring Platform is a full-stack application to replace Google Forms for hiring. It provides applicant registration, job applications, applicant dashboard and an admin dashboard for HR.

## Tech Stack
- Frontend: React, Tailwind CSS, Redux Toolkit
- Backend: Node.js, Express
- Database: MongoDB (Atlas)
- Authentication: JWT (HttpOnly cookies)
- Email: Nodemailer (optional)
## Quick Start (local)
1. Clone repo:
   ```bash
   git clone https://github.com/<yogeshjadhav18>/<repo>.git
   cd <veridia.io-platform>

## Features
- Candidate registration & login ✅
- Application form (name, email, phone, resume link, LeetCode, project, experience) ✅
- Applicant dashboard (view status, applied jobs) ✅
- Admin dashboard (view applications, change status) ✅
- Automated emails (planned) ⏳
  
Backend:
cd backend
npm install
npm run dev

Frontend:
npm install
npm run dev

Environment Variables (.env.example)
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
FRONTEND_URL=http://localhost:5173

## API (high level)
-POST /api/v1/user/signup

-POST /api/v1/user/login

-POST /api/v1/application/apply/:jobId

-GET /api/v1/application/get (get user applications)

-GET /api/v1/application/:jobId/applicants (admin)

## Database Models

User: { fullname, email, password, profile }

Job: { title, description, company, applications[] }

Application: { job, applicant, name, email, phone, resumeLink, leetcode, project, experience, status }

## Screenshots
<img width="1817" height="870" alt="image" src="https://github.com/user-attachments/assets/0d021469-9f09-4716-819b-1ce1c53a2fd6" />
# Signup page
<img width="1847" height="840" alt="image" src="https://github.com/user-attachments/assets/e682246f-88c9-4dbf-9176-d3bd4eb6a4d1" />
# Login page
<img width="1438" height="708" alt="image" src="https://github.com/user-attachments/assets/ac1b14a2-00e2-4d53-800a-4d42588a91e3" />
# Login as user
<img width="852" height="521" alt="image" src="https://github.com/user-attachments/assets/c68cc819-25ee-4f23-940d-9f6b259da91a" />
<img width="856" height="375" alt="image" src="https://github.com/user-attachments/assets/6dc879ae-4008-4393-a917-c767adaada09" />
# User Dashboard

<img width="1351" height="712" alt="image" src="https://github.com/user-attachments/assets/c96d8b57-a7d5-4727-8843-b9f430c651ca" />
# User update profile

<img width="562" height="617" alt="image" src="https://github.com/user-attachments/assets/1ff92281-3d86-4896-842a-423b95fe91ad" />
# User job portal

<img width="1838" height="645" alt="image" src="https://github.com/user-attachments/assets/160b89ae-0f6c-4251-8aa0-dfa1798717dd" />


# Recruiter Login portal
<img width="1200" height="608" alt="image" src="https://github.com/user-attachments/assets/f66f2eb6-5e6a-4308-9b1f-a102eb0c0b86" />

# Recruiter Company creation portal
<img width="1677" height="555" alt="image" src="https://github.com/user-attachments/assets/3676247a-170b-4b12-8b92-9fddca7774bc" />

-Company portal
<img width="1523" height="583" alt="image" src="https://github.com/user-attachments/assets/e44cef6b-1ee6-4989-8707-e964c509e178" />

-company's job management
<img width="1717" height="428" alt="image" src="https://github.com/user-attachments/assets/7f2aa399-54be-4cf2-8954-46f23c992f31" />

-company's job applicant page
<img width="1833" height="840" alt="image" src="https://github.com/user-attachments/assets/cb305d83-4279-4bf4-94f8-ee416853cb76" />

-Applicant form page at admin's side
<img width="733" height="465" alt="image" src="https://github.com/user-attachments/assets/ecfd3a54-bc25-481b-9c69-8d839fdfb311" />

-Action option at admin's page to accept and reject
<img width="1768" height="387" alt="image" src="https://github.com/user-attachments/assets/28ab6c57-a7f5-47f3-9604-3149f5a5d7fd" />


















