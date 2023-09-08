const ErrorMessage = () => {
  return (
    <div className="text-center bg-white shadow-lg rounded-lg p-6 my-10">
        <img
          src="/failure-message.png"
          alt="Logo"
          className="mx-auto my-4 max-h-48"
        />
      <h2 className="text-red-500 text-2xl font-semibold mb-4">Algo salió mal</h2>
      <p className="text-red-500 text-lg">
        Te sugerimos que intentes de nuevo o recargues la página.
      </p>
    </div>
  )
}

export default ErrorMessage;
