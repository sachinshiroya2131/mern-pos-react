import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/axios";

export default function CategoryList() {
    const [categories, setCategories] = useState([]);
    const [pagination, setPagination] = useState({
        page: 1,
        totalPages: 1,
    });

    const fetchCategories = async (page = 1) => {
        const res = await api.get(`/categories?page=${page}&limit=10`);
        setCategories(res.data.data);
        setPagination(res.data.pagination);
    };

    useEffect(() => {
        document.title = "Categories | " + process.env.REACT_APP_APP_NAME;
        fetchCategories();
    }, []);

    const renderCategories = (parentId = null, level = 0) =>
        categories
            .filter(cat => cat.parent_id === parentId)
            .map(cat => (
                <tr key={cat._id}>
                    <td className="p-3">
                        <div style={{ paddingLeft: `${level * 20}px` }}>
                            {level > 0 && "— "}
                            {cat.name}
                        </div>
                    </td>
                    <td className="p-3">{cat.slug}</td>
                    <td className="p-3">
                        {cat.image_url && (
                            <img
                                src={cat.image_url}
                                alt={cat.name}
                                className="w-10 h-10 rounded object-cover"
                            />
                        )}
                    </td>
                    <td className="p-3">
                        {cat.status ? "Active" : "Inactive"}
                    </td>
                    <td className="p-3">
                        <Link
                            to={`/categories/edit/${cat._id}`}
                            className="text-blue-600"
                        >
                            Edit
                        </Link>
                    </td>
                </tr>
            ))
            .concat(
                categories
                    .filter(cat => cat.parent_id === parentId)
                    .flatMap(cat => renderCategories(cat._id, level + 1))
            );

    return (
        <div>
            <div className="flex justify-between mb-4">
                <h2 className="text-xl font-bold">Categories</h2>
                <Link
                    to="/categories/create"
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Add Category
                </Link>
            </div>

            <table className="w-full bg-white rounded shadow">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="p-3 text-left">Name</th>
                        <th className="p-3 text-left">Slug</th>
                        <th className="p-3 text-left">Image</th>
                        <th className="p-3 text-left">Status</th>
                        <th className="p-3 text-left">Action</th>
                    </tr>
                </thead>
                <tbody>{renderCategories()}</tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-4">
                <button
                    disabled={pagination.page === 1}
                    onClick={() => fetchCategories(pagination.page - 1)}
                    className="px-3 py-1 border rounded disabled:opacity-50"
                >
                    Prev
                </button>

                {[...Array(pagination.totalPages)].map((_, i) => (
                    <button
                        key={i}
                        onClick={() => fetchCategories(i + 1)}
                        className={`px-3 py-1 border rounded ${
                            pagination.page === i + 1
                                ? "bg-blue-600 text-white"
                                : ""
                        }`}
                    >
                        {i + 1}
                    </button>
                ))}

                <button
                    disabled={pagination.page === pagination.totalPages}
                    onClick={() => fetchCategories(pagination.page + 1)}
                    className="px-3 py-1 border rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
