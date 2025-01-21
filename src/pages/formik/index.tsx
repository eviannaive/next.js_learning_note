import { Formik, ErrorMessage } from "formik";
import PageLayout from "@/components/PageLayout";
import { ReactElement } from "react";
import { useState } from "react";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
};

const userSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").required("Required!"),
  email: Yup.string().email("Invalid email").required("Required!"),
});

export default function Page() {
  const [error, setError] = useState<Record<string, string>>({});
  const handleValidate = async (values: typeof initialValues) => {
    const result = await userSchema
      .validate(values, { abortEarly: false })
      .then((value) => console.log(value, "true"))
      .catch((error) => {
        console.log(error.inner, "inner");
        const errors = error.inner.reduce(
          (acc, curr) => {
            acc[curr.path] = curr.message;
            return acc;
          },
          {} as Record<string, string>,
        );
        setError(errors);
        return errors;
      });
  };
  return (
    <>
      <h2 className="font-bold text-3xl px-2">[Formik]</h2>
      <div className="mt-4">
        <a
          className="text-orange-600 underline underline-offset-1"
          href="https://formik.org/"
          target="_blank"
        >
          https://formik.org/
        </a>
        <Formik
          initialValues={initialValues}
          // validate={handleValidate}
          // validateSchema={UserSchema}
          onSubmit={handleValidate}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <div className="p-8 mt-4 bg-yellow-300/40 rounded-[20px]">
              <div className="px-2 font-bold text-xl pb-2 border-b-2 border-slate-400">
                Custom Form
              </div>
              <form
                className="grid grid-cols-1 gap-4 py-4 px-2"
                onSubmit={handleSubmit}
              >
                <label className="flex">
                  <div className="mr-4 w-20">Name:</div>
                  <input
                    type="text"
                    name="name"
                    className="border"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  {error.name && (
                    <div className="ml-2 text-red-600">{error.name}</div>
                  )}
                </label>
                <label className="flex">
                  <div className="mr-4 w-20">Email:</div>
                  <input
                    type="text"
                    name="email"
                    className="border"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {error.email && (
                    <div className="ml-2 text-red-600">{error.email}</div>
                  )}
                </label>
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
}

Page.getLayout = function getLatout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};
