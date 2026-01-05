import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../utils/axios";
import slugify from "slugify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { categorySchema } from "../../validations/categorySchema";

export default function CategoryForm() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [categories, setCategories] = useState([]);
    const [initialValues, setInitialValues] = useState({
        name: "",
        slug: "",
        parent_id: "",
        image: null,
        status: true,
    });

    // Fetch categories for dropdown
    useEffect(() => {
        fetchCategories();
        if (id) fetchCategory();
    }, [id]);

    const fetchCategories = async () => {
        const res = await api.get("/categories");
        setCategories(res.data.data || []);
    };

    // Fetch single category for edit
    const fetchCategory = async () => {
        const res = await api.get(`/categories/${id}`);
        const cat = res.data;
        setInitialValues({
            name: cat.name || "",
            slug: cat.slug || "",
            parent_id: cat.parent_id || "",
            image: null, // keep null for edit, user can replace
            status: cat.status ?? true,
        });
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const formData = new FormData();
            Object.keys(values).forEach((key) => {
                if (values[key] !== null) formData.append(key, values[key]);
            });

            if (id) {
                await api.put(`/categories/${id}`, formData);
            } else {
                await api.post("/categories", formData);
            }

            navigate("/categories");
        } catch (error) {
            console.error(error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="max-w-xl bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4">
                {id ? "Edit Category" : "Add Category"}
            </h2>

            <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={categorySchema}
                onSubmit={handleSubmit}
            >
                {({ setFieldValue, values, isSubmitting }) => (
                    <Form className="space-y-4">

                        {/* Name */}
                        <div>
                            <label className="block mb-1">Name</label>
                            <Field
                                name="name"
                                value={values.name}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    setFieldValue("name", val);
                                    setFieldValue("slug", slugify(val, { lower: true }));
                                }}
                                className="w-full border p-2 rounded"
                            />
                            <ErrorMessage
                                name="name"
                                component="p"
                                className="text-red-500 text-sm"
                            />
                        </div>

                        {/* Slug */}
                        <div>
                            <label className="block mb-1">Slug</label>
                            <Field
                                name="slug"
                                value={values.slug}
                                onChange={(e) => setFieldValue("slug", e.target.value)}
                                className="w-full border p-2 rounded"
                            />
                            <ErrorMessage
                                name="slug"
                                component="p"
                                className="text-red-500 text-sm"
                            />
                        </div>

                        {/* Parent Category */}
                        <div>
                            <label className="block mb-1">Parent Category</label>
                            <Field
                                as="select"
                                name="parent_id"
                                value={values.parent_id || ""}
                                onChange={(e) => setFieldValue("parent_id", e.target.value)}
                                className="w-full border p-2 rounded"
                            >
                                <option value="">None</option>
                                {categories.map((cat) => (
                                    <option key={cat._id} value={cat._id}>
                                        {cat.name}
                                    </option>
                                ))}
                            </Field>
                        </div>

                        {/* Image */}
                        <div>
                            <label className="block mb-1">Image</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => setFieldValue("image", e.currentTarget.files[0])}
                                className="w-full"
                            />
                            <ErrorMessage
                                name="image"
                                component="p"
                                className="text-red-500 text-sm"
                            />
                        </div>

                        {/* Status */}
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={values.status}
                                onChange={() => setFieldValue("status", !values.status)}
                            />
                            <label>Active</label>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                        >
                            Save
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
