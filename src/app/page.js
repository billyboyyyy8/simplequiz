"use client"; // Mark this file as a client component

import React, { useState } from 'react'; // Import React and useState

export default function HomePage() {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Selamat Datang di Kuis Sederhana!</h1>
            <p style={styles.subheading}>Jawab pertanyaan berikut:</p>
            <Question />
        </div>
    );
}

function Question() {
    const question = "Apa ibu kota Indonesia?";
    const options = [
        { text: "Bandung", isCorrect: false },
        { text: "Jakarta", isCorrect: true },
        { text: "Surabaya", isCorrect: false },
        { text: "Medan", isCorrect: false },
    ];

    const [result, setResult] = useState(null); // Correct useState

    const handleAnswer = (isCorrect) => {
        setResult(isCorrect ? "Benar!" : "Salah. Coba Lagi!");
    };

    return (
        <div style={styles.questionContainer}>
            <h2 style={styles.questionText}>{question}</h2>
            <div>
                {options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswer(option.isCorrect)}
                        style={styles.optionButton}
                        className={result !== null ? (option.isCorrect ? 'correct' : 'incorrect') : ''}
                    >
                        {option.text}
                    </button>
                ))}
            </div>
            {result !== null && (
                <div style={result === "Benar!" ? styles.correctResult : styles.incorrectResult}>
                    {result}
                </div>
            )}
        </div>
    );
}

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    heading: {
        fontSize: '2.5rem',
        marginBottom: '20px',
        color: '#333',
    },
    subheading: {
        fontSize: '1.2rem',
        marginBottom: '20px',
        color: '#555',
    },
    questionContainer: {
        maxWidth: '500px',
        margin: '20px auto',
        textAlign: 'center',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    questionText: {
        fontSize: '1.5rem',
        marginBottom: '20px',
        color: '#333',
    },
    optionButton: {
        display: 'block',
        width: '100%',
        margin: '10px 0',
        padding: '15px',
        fontSize: '1.2rem',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, transform 0.3s ease',
    },
    optionButtonHover: {
        backgroundColor: '#0056b3',
        transform: 'scale(1.05)',
    },
    correctResult: {
        marginTop: '20px',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: '#4caf50',
        padding: '10px',
        borderRadius: '5px',
    },
    incorrectResult: {
        marginTop: '20px',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: '#f44336',
        padding: '10px',
        borderRadius: '5px',
    },
};
