import { TableClient } from "@/components/tableClient";
import { Button } from "@/components/ui/button";


export default function Client() {
    

    return (
        <div className="sm:ml-14 p-10">
            <div className="flex items-center justify-between lg:justify-between">
                <div className="flex flex-col gap-3">
                    <h1 className="text-5xl ">Clientes</h1>
                    <p className="text-sm text-gray-500 ">Todas as informações sobre os clientes</p>
                </div>
                <Button className="px-10">Novo</Button>
            </div>
            
            <TableClient />
            
        </div>
    );
}
