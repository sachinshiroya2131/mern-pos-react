import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../validations/loginSchema";
import { Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login | POS System";
  }, []);

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log(values);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold text-center mb-6">
          POS Login
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={onSubmit}
        >
          {({ touched, errors }) => (
            <Form>
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

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Login
              </button>
            </Form>
          )}
        </Formik>
         <p className="text-sm text-center mt-4">
        Don’t have an account?{" "}
        <Link
          to="/register"
          className="text-blue-600 hover:underline font-medium"
        >
          Register
        </Link>
      </p>
      </div>
     
    </div>
  );
}
