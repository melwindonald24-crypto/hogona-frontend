import { forwardRef } from "react";

export const FormInputs = forwardRef(({ invalid=false, className="", ...props }, ref) => {

  return (<input
    className={`w-full rounded-full border px-5 py-3 text-sm text-[#F5EEDD] placeholder:text-[#F5EEDD]/50 backdrop-blur-[3px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F2B48A]/70 bg-[#16302B]/25 ${
      invalid ? "border-red-300/60" : "border-[#F5EEDD]/25"
    } ${className}`}
    {...props}
    ref={ref}
  />);

});
