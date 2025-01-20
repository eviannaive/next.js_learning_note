import { Formik, ErrorMessage } from "formik";
import PageLayout from "@/components/PageLayout";
import { ReactElement } from "react";
import { useState } from "react";

const initialValues = {
  name: "",
  email: "",
};

export default function Page() {
  const handleValidate = (values: typeof initialValues) => {
    const _errors: Record<string, string> = {};
    if (!values.name) {
      _errors.name = "Required!";
    }
    if (!values.email) {
      _errors.email = "Required!";
    }
    return _errors;
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
          validate={handleValidate}
          onSubmit={() => {}}
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
              <form className="grid grid-cols-1 gap-4 py-4 px-2">
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
                  <div className="ml-2 text-red-600">{errors.name}</div>
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
                  <div className="ml-2 text-red-600">{errors.email}</div>
                </label>
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
