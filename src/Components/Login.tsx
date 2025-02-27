// import { useState } from "react";
// import * as Yup from "yup";
// import { useFormik } from "formik";
// import { Link } from "react-router-dom";
// import { getUserByToken, login } from "../core/_requests";
// import { useAuth } from "../core/Auth";

// const loginSchema = Yup.object().shape({
//   email: Yup.string()
//     .email("Invalid email format")
//     .min(3, "Minimum 3 characters")
//     .max(50, "Maximum 50 characters")
//     .required("Email is required"),
//   password: Yup.string()
//     .min(3, "Minimum 3 characters")
//     .max(50, "Maximum 50 characters")
//     .required("Password is required"),
// });

// const initialValues = {
//   email: "admin@demo.com",
//   password: "demo",
// };

// export function Login() {
//   const [loading, setLoading] = useState(false);
//   const { saveAuth, setCurrentUser } = useAuth();

//   const formik = useFormik({
//     initialValues,
//     validationSchema: loginSchema,
//     onSubmit: async (values, { setStatus, setSubmitting }) => {
//       setLoading(true);
//       try {
//         const { data: auth } = await login(values.email, values.password);
//         saveAuth(auth);
//         const { data: user } = await getUserByToken(auth.token);
//         setCurrentUser(user);
//       } catch (error) {
//         saveAuth(undefined);
//         setStatus("Incorrect login details");
//         setSubmitting(false);
//         setLoading(false);
//       }
//     },
//   });

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
//       <form
//         className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
//         onSubmit={formik.handleSubmit}
//         noValidate
//       >
//         {/* Logo */}
//         <div className="flex justify-center mb-6">
//           <img src="/logo.svg" alt="Logo" className="h-12" />
//         </div>

//         {/* Error Message */}
//         {formik.status && (
//           <div className="mb-4 p-2 text-sm text-red-600 bg-red-100 rounded-md">
//             {formik.status}
//           </div>
//         )}

//         {/* Email Input */}
//         <div className="mb-4">
//           <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
//             Email
//           </label>
//           <input
//             type="email"
//             {...formik.getFieldProps("email")}
//             className={`w-full p-2 rounded-md border ${
//               formik.touched.email && formik.errors.email
//                 ? "border-red-500"
//                 : "border-gray-300"
//             } bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white`}
//             placeholder="Enter your email"
//           />
//           {formik.touched.email && formik.errors.email && (
//             <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
//           )}
//         </div>

//         {/* Password Input */}
//         <div className="mb-4">
//           <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
//             Password
//           </label>
//           <input
//             type="password"
//             {...formik.getFieldProps("password")}
//             className={`w-full p-2 rounded-md border ${
//               formik.touched.password && formik.errors.password
//                 ? "border-red-500"
//                 : "border-gray-300"
//             } bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white`}
//             placeholder="Enter your password"
//           />
//           {formik.touched.password && formik.errors.password && (
//             <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>
//           )}
//         </div>

//         {/* Forgot Password & Sign Up Links */}
//         <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
//           <Link to="/auth/forgot-password" className="hover:underline">
//             Forgot Password?
//           </Link>
//           <Link to="/auth/registration" className="hover:underline">
//             Sign Up
//           </Link>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className={`w-full p-2 rounded-md bg-green-600 text-white font-medium hover:bg-green-700 transition ${
//             formik.isSubmitting || !formik.isValid ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//           disabled={formik.isSubmitting || !formik.isValid}
//         >
//           {loading ? "Please wait..." : "Login"}
//         </button>
//       </form>
//     </div>
//   );
// }
