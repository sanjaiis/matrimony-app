// src/components/Auth.js
import { useState } from "react";

import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { supabase } from "../supabaseClient"; // make sure this path is correct

const Auth = () => {
    const [email, setEmail] = useState("letsstart123@yopmail.com");
    const [password, setPassword] = useState("lets@123");
    const [showPassword, setShowPassword] = useState(false)

    const handleSignUp = async () => {
        const { data, error } = await supabase.auth.signUp({ email, password });
        console.log("SIGNUP result:", { data, error });
        if (error) alert(error.message);
    };

    const handleLogin = async () => {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        console.log("LOGIN result:", { data, error });
        if (error) alert(error.message);
    };

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            background: "linear-gradient(135deg, #fff0f5, #ffe4e1)"
        }}>
            <div style={{
                maxWidth: "420px",
                width: "100%",
                padding: "2.5rem",
                borderRadius: "16px",
                backgroundColor: "#fff",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                fontFamily: "'Segoe UI', sans-serif"
            }}>
                <h2 style={{
                    textAlign: "center",
                    marginBottom: "1.5rem",
                    color: "#c2185b"
                }}>
                    💞 Welcome to MatchMaker
                </h2>

                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "0.8rem",
                        marginBottom: "1rem",
                        borderRadius: "6px",
                        border: "1px solid #ccc",
                        fontSize: "1rem",
                        outline: "none"
                    }}
                />
                <div style={{
                    position: 'relative',
                    marginBottom: '1.5rem'
                }}>
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "0.8rem 2.8rem 0.8rem 0.8rem", // padding-right for icon space
                            borderRadius: "6px",
                            border: "1px solid #ccc",
                            fontSize: "1rem",
                            outline: "none"
                        }}
                    />
                    <span
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                            position: 'absolute',
                            right: '12px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            cursor: 'pointer',
                            color: '#888',
                            fontSize: '1.1rem'
                        }}
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>

                <button
                    onClick={handleLogin}
                    style={{
                        width: "100%",
                        padding: "0.9rem",
                        backgroundColor: "#c2185b",
                        color: "#fff",
                        border: "none",
                        borderRadius: "8px",
                        fontSize: "1rem",
                        fontWeight: "bold",
                        cursor: "pointer",
                        transition: "0.3s"
                    }}
                    onMouseOver={(e) => e.target.style.opacity = 0.9}
                    onMouseOut={(e) => e.target.style.opacity = 1}
                >
                    💌 Log In
                </button>

                <p style={{ textAlign: "center", marginTop: "1.5rem", color: "#777" }}>
                    New to MatchMaker? <a href="/register" style={{ color: "#c2185b", textDecoration: "none" }}>Create an account</a>
                </p>
            </div>
        </div>

    );
};

export default Auth;
