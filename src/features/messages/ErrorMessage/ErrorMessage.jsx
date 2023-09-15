import './ErrorMessage.css'

const ErrorMessage = () => {
  return (
    <div className="error-message">
        <img
          src="/failure-message.png"
          alt="Logo"
          className="error-message__img"
        />
      <h2 className="error-message__title">Algo salió mal</h2>
      <p className="error-message__text">
        Te sugerimos que intentes de nuevo o recargues la página.
      </p>
    </div>
  )
}

export default ErrorMessage
