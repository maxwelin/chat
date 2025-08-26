function ErrorButton() {
  return (
    <button className="border"
      onClick={() => {
        throw new Error('This is your first error!');
      }}
    >
      Break the world
    </button>
  );
}

export default ErrorButton