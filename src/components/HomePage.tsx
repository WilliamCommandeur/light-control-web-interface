import React, { useEffect, useState } from "react";
import axios from "axios";

const HomePage: React.FC = () => {
    const [devices, setDevices] = useState<any[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchDevices = async () => {
            try {
                const response = await axios.get("http://localhost:8000/devices");
                setDevices(response.data.data);
                console.log(response)
            } catch (error) {
                console.error("Erreur lors du chargement des ampoules :", error)
            } finally {
                setLoading(false);
            }
        };

        fetchDevices();
    }, [])

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Mes ampoules connectées</h1>

            {loading ? (
                <p>Chargement...</p>
            ) : devices?.length === 0 ? (
                <p>Aucunes ampoules trouvées</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {devices?.map((device) => (
                        <div
                            key={device.id}
                            className="p-4 border rounded shadow hover:shadow-md transition"
                        >
                            <h2 className="text-xl font-semibold">Nom de l'ampoule</h2>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default HomePage;