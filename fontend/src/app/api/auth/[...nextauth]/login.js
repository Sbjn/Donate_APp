// import { NextApiRequest, NextApiResponse } from 'next';
// import axios from 'axios';
// import { signIn } from 'next-auth/client';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { usernameOrEmail, password } = req.body;

//     try {
//       // Make a request to your Spring Boot API for login
//       const response = await axios.post('http://localhost:8080/api/auth/login', {
//         usernameOrEmail,
//         password,
//       });

//       if (response.status === 200) {
//         // Login successful, sign in with NextAuth.js
//         await signIn('credentials', {
//           username: usernameOrEmai,
//           password,
//           redirect: false, // Prevent automatic redirection
//         });

//         return res.status(200).json({ message: 'Login successful' });
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   return res.status(401).json({ message: 'Invalid username or password' });
// }