import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerSchema } from "../validations/registerSchema";
import axios from "axios";
import { toast } from "react-toastify";

export default function Register() {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Register | " + process.env.REACT_APP_APP_NAME;
    }, []);

    const initialValues = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    const onSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            const response = await axios.post(
                "http://localhost:5000/api/auth/register",
                values
            );
            console.log("Registration Success:", response.data);
            alert("Registration successful!");
            resetForm(); // Reset form fields
            navigate("/login"); // Redirect to login page after registration
        } catch (error) {
            console.error("Registration Error:", error.response?.data || error.message);
            toast.error(error.response?.data?.message || error.message || "Registration failed!");
        } finally {
            setSubmitting(false); // Stop the loading state
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-6 rounded shadow">
                <h2 className="text-2xl font-bold text-center mb-6">
                    Create Account
                </h2>

                <Formik
                    initialValues={initialValues}
                    validationSchema={registerSchema}
                    onSubmit={onSubmit}
                >
                    {({ touched, errors }) => (
                        <Form>
                            {/* Name */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">
                                    Full Name
                                </label>
                                <Field
                                    name="name"
                                    className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2
                    ${touched.name && errors.name
                                            ? "border-red-500 focus:ring-red-500"
                                            : "focus:ring-blue-500"
                                        }`}
                                />
                                <ErrorMessage
                                    name="name"
                                    component="p"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Email */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">
                                    Email
                                </label>
                                <Field
                                    name="email"
                                    type="email"
                                    className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2
                    ${touched.email && errors.email
                                            ? "border-red-500 focus:ring-red-500"
                                            : "focus:ring-blue-500"
                                        }`}
                                />
                                <ErrorMessage
                                    name="email"
                                    component="p"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Password */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">
                                    Password
                                </label>
                                <Field
                                    name="password"
                                    type="password"
                                    className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2
                    ${touched.password && errors.password
                                            ? "border-red-500 focus:ring-red-500"
                                            : "focus:ring-blue-500"
                                        }`}
                                />
                                <ErrorMessage
                                    name="password"
                                    component="p"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Confirm Password */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">
                                    Confirm Password
                                </label>
                                <Field
                                    name="confirmPassword"
                                    type="password"
                                    className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2
                    ${touched.confirmPassword && errors.confirmPassword
                                            ? "border-red-500 focus:ring-red-500"
                                            : "focus:ring-blue-500"
                                        }`}
                                />
                                <ErrorMessage
                                    name="confirmPassword"
                                    component="p"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                            >
                                Register
                            </button>
                        </Form>
                    )}
                </Formik>

                <p className="text-sm text-center mt-4">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-600 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}
