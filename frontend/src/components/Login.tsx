import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

async function handleSubmit(isSignup: boolean, formData: any, navigate) {
    const url = isSignup ? "http://localhost:4000/user/signup" : "http://localhost:4000/user/login";

    const payload = isSignup
        ? {
              name: formData.name,
              email: formData.email,
              password: formData.password,
              avatar_url: formData.url,
          }
        : {
              username: formData.username,
              password: formData.password,
          };

    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload),
        });

        const data = await res.json();

        if (!isSignup && data.message === "success") {
            navigate("/", {state: {
                user: data
            }});
        } else {
            navigate("/", {state: {
                user: data
            }});
        }
    } catch (error) {
        console.error("Request failed:", error);
    }
}

export default function Auth() {
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
        url: "" // for avatar_url (only if you want it in signup form)
    });

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    return (
        <div className="login-card">
            <h2 className="login-title">{isSignup ? "Sign Up" : "Login"}</h2>
            <div className="login-form">
                {isSignup && (
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                )}

                {isSignup ? (
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                ) : (
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            type="text"
                            placeholder="Enter your username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div>
                )}

                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>

                {/* Optional avatar URL input for signup */}
                {isSignup && (
                    <div className="input-group">
                        <label htmlFor="url">Avatar URL (optional)</label>
                        <input
                            id="url"
                            type="text"
                            placeholder="Enter your avatar URL"
                            value={formData.url}
                            onChange={handleChange}
                        />
                    </div>
                )}

                <button
                    className="login-button"
                    onClick={() => handleSubmit(isSignup, formData, navigate)}
                >
                    {isSignup ? "Sign Up" : "Sign In"}
                </button>

                {!isSignup && <button className="reset-button">Forgot Password?</button>}

                <button
                    className="toggle-button"
                    onClick={() => setIsSignup(!isSignup)}
                >
                    {isSignup
                        ? "Already have an account? Login"
                        : "Don't have an account? Sign Up"}
                </button>
            </div>
        </div>
    );
}
