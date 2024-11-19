import React, { useEffect, useState } from 'react';

function Energies() {
    const [energies, setEnergies] = useState([]);

    // Função para buscar dados da API
    useEffect(() => {
        fetch('http://localhost:3000/energies')
            .then(response => response.json())
            .then(data => setEnergies(data))
            .catch(error => console.error("Erro ao buscar dados:", error));
    }, []);

    return (
        <div>
                {energies.map(energy => (
                    <li key={energy.id}>
                        <p>{energy.description}</p>
                    </li>
                ))}
        </div>
    );
}

export default Energies;
