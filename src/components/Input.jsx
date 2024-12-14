import { forwardRef } from "react";

const Input = forwardRef(function (props, ref) {
  const { isTextarea, label, ...otherProps } = props;

  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  return (
    <p className="flex flex-col gap-2 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {isTextarea ? (
        <textarea ref={ref} className={classes} {...otherProps} />
      ) : (
        <input ref={ref} className={classes} {...otherProps} />
      )}
    </p>
  );
});

export default Input;
