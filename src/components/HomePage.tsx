import { Device } from "../types/device";
import DeviceCard from "./DeviceCard";
import { fetchDevices } from "../api/device";
import { useQuery } from "@tanstack/react-query";

const HomePage: React.FC = () => {
    
    const { data: devices, isLoading } = useQuery<Device[] | null>({
        queryKey: ["devices"],
        queryFn: fetchDevices,
    })
    

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Mes ampoules connectées</h1>

            {isLoading ? (
                <p>Chargement...</p>
            ) : devices?.length === 0 ? (
                <p>Aucunes ampoules trouvées</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {devices?.map((device) => (
                        <DeviceCard
                            key={device.device}
                            device={device}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default HomePage;