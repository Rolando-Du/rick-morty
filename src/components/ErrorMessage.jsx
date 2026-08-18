function ErrorMessage({ message }) {
  return (
    <div
      className="rounded-2xl border border-red-900 bg-red-950/40 p-6 text-center"
      role="alert"
    >
      <h2 className="text-lg font-semibold text-red-300">
        Ocurrió un problema
      </h2>

      <p className="mt-2 text-red-400">
        {message}
      </p>
    </div>
  );
}

export default ErrorMessage;