export const handleChangeExpiration = (
  event: React.ChangeEvent<HTMLInputElement>,
  setValue:any,
) => {
  const inputValue = event.target.value.replace(/[^\d/]/g, ''); // Remove non-numeric characters except '/'

  const formattedInput = inputValue
    .replace(/^(0[1-9]|1[0-2])$/, '$1/') // Add '/' after two digits for MM/YY format
    .slice(0, 5); // Restrict input to 5 characters (MM/YY)

  return setValue('expirationDate',formattedInput)
};

