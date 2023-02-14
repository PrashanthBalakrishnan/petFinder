async function fetchSearch({ queryKey }) {
  const { animal, location, breed } = queryKey[1];

  const res = await fetch(
    `https://www.pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );

  if (!res.ok) {
    throw new Error(`Pet Search not okay ${animal}, ${location}, ${breed}`);
  }

  return res.json();
}

export default fetchSearch;
