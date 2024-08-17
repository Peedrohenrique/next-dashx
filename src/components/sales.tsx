import { CircleDollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ScrollArea } from "./ui/scroll-area";

export function Sales() {
    return (
        <Card className="flex-1">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-gray-800">Últimos clientes</CardTitle>
                    <CircleDollarSign className="ml-auto w-4 h-4" />
                </div>
                <CardDescription>Novos clientes nas últimas 24 horas</CardDescription>
            </CardHeader>
            <ScrollArea className="h-72">
                <CardContent>
                    {Array.from({ length: 40 }, (_, index) => (
                        <article className="flex items-center gap-2 border-b py-2" key={index}>
                            <Avatar>
                                <AvatarImage src="https://github.com/peedrohenrique.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-sm font-semibold">Pedro Henrique</p>
                                <span className="text-xs sm:text-sm text-muted-foreground">test@test.com</span>
                            </div>
                        </article>
                    ))}
                </CardContent>
            </ScrollArea>
        </Card>
    );
}
