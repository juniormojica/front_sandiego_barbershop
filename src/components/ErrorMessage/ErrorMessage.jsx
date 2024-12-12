export function ErrorMessage (className, message) {
  return (
    <div>
      {message
        ? (<p className={className}>{message}</p>)
        : ('')}
    </div>
  )
}
