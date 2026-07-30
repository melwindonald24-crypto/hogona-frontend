export const AuthButton = ({ children, isLoading, ...props }) => {
  return (
    <button
      className="w-full rounded-full bg-[#16302B]/80 py-3 text-sm font-medium uppercase tracking-wide text-[#F5EEDD] transition-colors hover:bg-[#16302B]/90 disabled:opacity-60"
      disabled={isLoading}
      {...props}
    >{isLoading?"...":children}</button>
  );
};
