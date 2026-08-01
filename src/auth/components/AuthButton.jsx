export const AuthButton = ({ children, isLoading, ...props }) => {
  return (
    <button
      className="rounded-full border border-[#F5EEDD]/40 bg-[#F5EEDD]/20 px-10 py-3 text-sm font-medium uppercase tracking-wide text-[#16302B] backdrop-blur-[3px] transition-colors hover:bg-[#F5EEDD]/30 disabled:opacity-60"
      disabled={isLoading}
      {...props}
    >{isLoading?"...":children}</button>
  );
};
