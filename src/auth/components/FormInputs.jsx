import { forwardRef } from "react";

export const FormInputs = forwardRef(({ invalid=false, className="", ...props }, ref) => {

  return (<input
    className={`w-full rounded-full border px-5 py-3 text-center text-sm text-[#101010] placeholder:uppercase placeholder:tracking-wide placeholder:text-[#101010]/70 backdrop-blur-[3px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F2B48A]/70 bg-[#16302B]/15 ${
    invalid ? "border-red-300/60" : "border-[#F5EEDD]/25"
    } ${className}`}
    {...props}
    ref={ref}
  />);

});
