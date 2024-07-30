export const fetchUserData = async (userId) => {
    // Aquí puedes agregar la lógica para obtener datos de usuario desde una API
    const response = await fetch(`/api/users/${userId}`);
    const data = await response.json();
    return data;
  };
  