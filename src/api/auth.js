export async function signupUser(name,email,password) {
  try {
    const response = await fetch("http://localhost:3000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      })
    });

    const data = await response.json();
    console.log(data);
    return data;

  } catch (error) {
    console.log("Error:", error);
  }
}
