'use client'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar1Icon } from "lucide-react"
import Image from "next/image"
import { format, addDays, subDays, parseISO } from "date-fns";
import { useQuery } from '@tanstack/react-query';
import { useState } from "react"
import { Card, CardTitle, CardDescription, CardHeader, CardContent, CardFooter } from "@/components/ui/card"

export interface IAppProps { }

// Add this type for your API response
interface Match {
    id: number;
    name: string;
    starting_at: string;
    // Add other match properties from Sportmonks API
}

// Add interface for the Sportmonks API response
interface SportmonksResponse {
    data: Match[];
    // Add other response properties from Sportmonks API
}

const fetchMatches = async (date: string): Promise<Match[]> => {
    const API_TOKEN = process.env.NEXT_PUBLIC_SPORTMONKS_API_TOKEN;

    const response = await fetch(
        `https://api.sportmonks.com/v3/football/fixtures/date/${date}`,
        {
            headers: {
                'Authorization': `${API_TOKEN}`,
            }
        }
    );

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const result: SportmonksResponse = await response.json();
    return result.data;
};

export default function App(props: IAppProps) {
    // Use a static ISO string for consistent date handling
    const baseDate = '2024-03-13T00:00:00.000Z';
    const staticDate = parseISO(baseDate);

    const [selectedDate, setSelectedDate] = useState<Date>(staticDate);

    // Comment out React Query
    /*
    const { data: matches, isLoading, error } = useQuery({
      queryKey: ['matches', format(selectedDate, 'yyyy-MM-dd')],
      queryFn: () => fetchMatches(format(selectedDate, 'yyyy-MM-dd')),
    });
    */

    const dates = [
        { date: subDays(staticDate, 3), format: "EEEE" },
        { date: subDays(staticDate, 1), format: "static", label: "Yesterday" },
        { date: staticDate, format: "static", label: "Today" },
        { date: addDays(staticDate, 1), format: "static", label: "Tomorrow" },
        { date: addDays(staticDate, 2), format: "EEEE" },
        { date: addDays(staticDate, 3), format: "EEEE" },
    ];

    const getLabel = (item: { date: Date, format: string, label?: string }) => {
        return item.format === "static" ? item.label : format(item.date, item.format);
    };

    // Add static matches data
    const staticMatches = [
        {
            _id: 1,
            league: "World - FIFA Women's World Cup",
            round: "Quarter Finals",
            matches: [
                {
                    id: 1,
                    starting_at: "2024-03-13T13:40:00.000Z",
                    status: "Live",
                    time: "13:40",
                    team1: {
                        name: "Spain",
                        flag: "/spain-flag.png",
                        score: "2"
                    },
                    team2: {
                        name: "Netherlands",
                        flag: "/netherlands-flag.png",
                        score: "1"
                    },
                },
                {
                    id: 2,
                    starting_at: "2024-03-13T13:40:00.000Z",
                    status: "Upcoming",
                    time: "13:40",
                    team1: {
                        name: "Japan",
                        flag: "/japan-flag.png",
                        score: "0"
                    },
                    team2: {
                        name: "Sweden",
                        flag: "/sweden-flag.png",
                        score: "0"
                    }
                },
                {
                    id: 3,
                    starting_at: "2024-03-13T13:40:00.000Z",
                    status: "Upcoming",
                    time: "18:20",
                    team1: {
                        name: "Olympiakos",
                        flag: "/olympiakos-flag.png",
                        score: "0"
                    },
                    team2: {
                        name: "Genk",
                        flag: "/genk-flag.png",
                        score: "0"
                    }
                }
            ],
        },
    ];

    return (
        <>
            <div className="relative rounded-lg overflow-hidden w-full h-[277px] m-4">
                <Image
                    src="/banner.jpg"
                    alt="Main Content"
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                />
            </div>

            <Card className="border-none p-4">
                {/* Date Navigation */}
                <div className="mb-6">
                    <div className="flex w-full gap-2 justify-between"> 
                        {dates.map((item, index) => (
                            <Button
                                key={index} // justify-between
                                variant={item.date.getTime() === staticDate.getTime() ? "secondary" : "ghost"}
                                className={`bg-[#2c2c2c] h-full py-1 flex flex-col gap-0 items-center w-full rounded-xl`}
                            // onClick={() => setSelectedDate(item.date)}
                            >
                                {/* <div className="r"> */}
                                    <span className="text-sm">{getLabel(item)}</span>
                                    <span className="text-xs">{format(item.date, "dd MMM")}</span>
                                {/* </div> */}
                            </Button>
                        ))}

                        <Button variant="outline" className="bg-[#2c2c2c] h-full py-1 flex gap-2 items-center w-full rounded-xl hover:bg-[#9BFF00]/10">
                            <Calendar1Icon size={24} className="text-primary" />
                            <div className="flex flex-col items-start">
                                <span className="text-sm">View</span>
                                <span className="text-xs">Calendar</span>
                            </div>
                        </Button>
                    </div>
                </div>

                <div className="">
                    {staticMatches.map((league) => (
                            <Card className=" mb-2  border border-black rounded-lg"  key={league._id}>
                                <CardHeader className="p-4 bg-black rounded-t-lg">
                                    <CardTitle>
                                            <div className="flex items-center gap-2">
                                                <span className="text-md font-medium">{league.league}</span>
                                                <span className="text-xs text-gray-400">[ {league.round} ]</span>
                                        </div>
                                    </CardTitle>
                                    {/* <CardDescription>Card Description</CardDescription> */}
                                </CardHeader>
                                <CardContent className="p-0">
                                        {league.matches.map((match, index) => (
                                            <div className={`p-4 mt-0 text-sm font-medium ${index % 2 ? "bg-black" : ""}`} key={match.id}>
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex items-center gap-2">
                                                            <span>{match.time}</span>
                                                            {match.status === "Live" && (
                                                                <Badge variant="outline" className="bg-transparent border-[#9BFF00]">
                                                                    Live
                                                                </Badge>
                                                            )}
                                                        </div>
                                                        <div className="flex items-center gap-4 w-[300px] justify-between">
                                                            <div className="flex items-center gap-2 flex-1 text-center justify-end">
                                                                <span>{match.team1.name}</span>
                                                                <img src={"/vercel.svg"} alt={match.team1.name} className="w-6 h-6" />
                                                            </div>
                                                            <span className="font-bold flex-0 text-center justify-center">
                                                                {`${match.team1.score} - ${match.team2.score}`}
                                                            </span>
                                                            <div className="flex items-center gap-2 flex-1 justify-start">
                                                                <img src={"/vercel.svg"} alt={match.team2.name} className="w-6 h-6" />
                                                                <span>{match.team2.name}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        ))}
                                </CardContent>
                            </Card>
                    ))}
                </div>
            </Card>
        </>
    );
}
