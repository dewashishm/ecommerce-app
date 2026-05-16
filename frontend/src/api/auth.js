const BASE_URL = "https://ecommerce-app-1-roke.onrender.com"

export async function signupUser(name, email, password) {
  try {
    const response = await fetch(`${BASE_URL}/api/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "signup failed")
    }
    console.log(data);
    return data;

  } catch (error) {
    console.log("Signup Error:", error);
    throw error;
  }
};

export async function loginUser(email, password) {
  try {
    const response = await fetch(`${BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email, password
      })
    });
    
    const data = await response.json();

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    window.location.reload();
    console.log(data);

    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }
    return data;


  } catch (error) {
    console.log("Login error:", error);
    throw error;

  }
}
