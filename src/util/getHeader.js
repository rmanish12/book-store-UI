const getHeader = () => {
    const token = document.cookie.split("=")[1];
    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  
    return header
  }

export default getHeader;