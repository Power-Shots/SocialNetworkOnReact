import React from "react";
import s from "./FormsControls.module.css";

const FormsControl = ({ input, meta, children, ...props }) => {
  const hasError = meta.error && meta.touched;
  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <div>{children}</div>
      <div>{hasError && <span>{meta.error}</span>}</div>
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormsControl {...props}>
      <textarea {...input} {...restProps}></textarea>
    </FormsControl>
  );
};

export const FormsInput = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormsControl {...props}>
      <input {...input} {...restProps}/>
    </FormsControl>
  );
};
