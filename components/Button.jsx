function Button({ title }) {
  return (
    <>
      <button className="md:p-6 p-4 text-white rounded-xl bg-primarycolor">
        {title}
      </button>
    </>
  );
}

export default Button;
