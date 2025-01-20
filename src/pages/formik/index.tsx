import { Formik } from "formik";
import PageLayout from "@/components/PageLayout";
import { ReactElement } from "react";

const initialValues = {
  name: "",
  email: "",
  grander: "",
  birthday: "",
  city: "",
  dist: "",
  address: "",
};

export default function Page() {
  return (
    <>
      <h2 className="font-bold text-3xl px-2">[Formik]</h2>
      <div className="mt-4">
        <Formik
          initialValues={initialValues}
          validate={() => {}}
          onSubmit={() => {}}
        ></Formik>
      </div>
    </>
  );
}

Page.getLayout = function getLatout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};
