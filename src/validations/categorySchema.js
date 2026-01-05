import * as Yup from "yup";

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png", "image/webp"];
const FILE_SIZE = 2 * 1024 * 1024; // 2MB

export const categorySchema = Yup.object({
    name: Yup.string()
        .required("Category name is required")
        .min(2, "Minimum 2 characters"),

    slug: Yup.string()
        .required("Slug is required")
        .matches(
            /^[a-z0-9-]+$/,
            "Slug can contain lowercase letters, numbers & hyphens"
        ),

    parent_id: Yup.string().nullable(),

    status: Yup.boolean(),

    image: Yup.mixed()
        .nullable()
        .test(
            "fileType",
            "Only JPG, JPEG, PNG or WEBP images are allowed",
            (value) =>
                !value || SUPPORTED_FORMATS.includes(value.type)
        )
        .test(
            "fileSize",
            "Image size must be less than 2MB",
            (value) => !value || value.size <= FILE_SIZE
        ),
});