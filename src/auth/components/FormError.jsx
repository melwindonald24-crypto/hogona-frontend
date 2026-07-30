export const FormError = ({message}) => {
  if (!message) return null;
  return (
    <p
      className="rounded-full bg-[#16302B]/70 px-3 py-1 text-xs text-[#F5EEDD]"
      role="alert"
    >
      {message}
    </p>
  );
};
