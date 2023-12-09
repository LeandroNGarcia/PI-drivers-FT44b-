const CreateDV = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" required />
        <label htmlFor="lastname">Lastname:</label>
        <input type="text" name="lastname" />
        <label htmlFor="nationality">Nationality:</label>
        <input type="text" name="nationality" />
        <label htmlFor="birthday">Birthday:</label>
        <input type="date" name="birthday" />
      </form>
    </div>
  )
}

export default CreateDV;