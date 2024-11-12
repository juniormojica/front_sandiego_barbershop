import React from 'react'

const Error = ({ message }) => {
    return (
        <div style={styles.container}>
            <p style={styles.errorText}>Error: {message}</p>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Centrado verticalmente
        color: 'red',
        fontSize: '1.5rem',
    },
    errorText: {
        fontWeight: 'bold',
    },
}

export default Error
