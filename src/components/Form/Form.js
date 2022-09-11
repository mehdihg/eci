import "./Form.css";
import Input from "./Input/Input";

import "react-toastify/dist/ReactToastify.css";
import Button from "./Button/Button";
import { ToastContainer } from "react-toastify";

const Form = ({ InputValues, formik, children, autocomplete, ButtnText }) => {
  return (
    <>
      <form
        className="form"
        onSubmit={formik.handleSubmit}
        autoComplete={autocomplete}
      >
        {InputValues.map((item) => {
          return <Input key={item.id} formik={formik} {...item} />;
        })}

        {children}
        <Button formik={formik} type='submit' FormsBtn>
          {ButtnText}
        </Button>
      </form>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};
export default Form;
