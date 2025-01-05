'use client'

import { Button } from "@/components/ui/button"
import { Calendar1Icon, Search, ChevronDown } from "lucide-react"
import Image from "next/image"
import { format, addDays, subDays, parseISO } from "date-fns";
import { useQuery } from '@tanstack/react-query';
import { useState } from "react"
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card"

export interface IAppProps { }

// interface Match {
//     id: number;
//     name: string;
//     starting_at: string;
// }

interface SportmonksResponse {
    data: any;
    message: any;
}

const fetchMatches = async (date: string): Promise<any> => {
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
    // const baseDate = '2024-03-13T00:00:00.000Z';
    const baseDate = new Date();
    const staticDate = parseISO(baseDate.toISOString());

    const [selectedDate, setSelectedDate] = useState<Date>(staticDate);

    // Comment out React Query
    // const { data: matches, isLoading, error } = useQuery({
    //   queryKey: ['matches', format(selectedDate, 'yyyy-MM-dd')],
    //   queryFn: () => fetchMatches(format(selectedDate, 'yyyy-MM-dd')),
    // });
    
    // console.log(matches)

    const dates = [
        { date: subDays(staticDate, 2), format: "EEEE" },
        { date: subDays(staticDate, 1), format: "static", label: "Yesterday" },
        { date: staticDate, format: "static", label: "Today" },
        { date: addDays(staticDate, 1), format: "static", label: "Tomorrow" },
        { date: addDays(staticDate, 2), format: "EEEE" },
        { date: addDays(staticDate, 3), format: "EEEE" },
    ];

    const getLabel = (item: { date: Date, format: string, label?: string }) => {
        return item.format === "static" ? item.label : format(item.date, item.format);
    };

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
                        flag: "/Spain.png",
                        score: "2"
                    },
                    team2: {
                        name: "Netherlands",
                        flag: "/Netherlands.png",
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
                        flag: "/Japan.png",
                        score: "0"
                    },
                    team2: {
                        name: "Sweden",
                        flag: "/Sweden.png",
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
                        flag: "/Olympiakos.png",
                        score: "0"
                    },
                    team2: {
                        name: "Genk",
                        flag: "/Genk.png",
                        score: "0"
                    }
                }
            ],
        },
        {
            _id: 2,
            league: "Spain - La Liga",
            round: "Quarter Finals",
            matches: [
                {
                    id: 1,
                    starting_at: "2024-03-13T13:40:00.000Z",
                    status: "Upcoming",
                    time: "13:40",
                    team1: {
                        name: "Spain",
                        flag: "/Spain.png",
                        score: "2"
                    },
                    team2: {
                        name: "Netherlands",
                        flag: "/Netherlands.png",
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
                        flag: "/Japan.png",
                        score: ""
                    },
                    team2: {
                        name: "Sweden",
                        flag: "/Sweden.png",
                        score: ""
                    }
                },
                {
                    id: 3,
                    starting_at: "2024-03-13T13:40:00.000Z",
                    status: "Upcoming",
                    time: "18:20",
                    team1: {
                        name: "Olympiakos",
                        flag: "/Olympiakos.png",
                        score: "0"
                    },
                    team2: {
                        name: "Genk",
                        flag: "/Genk.png",
                        score: "0"
                    }
                }
            ],
        },
    ];

    return (
        <>
            <div className="middle-banner">
                <Image
                    src="/banner.jpg"
                    alt="Main Content"
                    layout="fill"
                />
            </div>

            <Card className="border-none p-4 rounded-3xl">
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 my-2">
                    <div className="flex basis-1/3	sm:basis-auto items-center gap-2 bg-background p-2 rounded-lg">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary"></span>
                            <span className="text-sm font-bold text-primary">Live</span>
                        </div>
                        <span className="text-sm">(1)</span>
                    </div>
                    <div className="flex-1 basis-full order-last sm:order-none relative bg-background rounded-lg">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2" size={18} />
                        <input
                            type="text"
                            placeholder="Search For Matches"
                            className="w-full rounded-lg placeholder:text-center placeholder:text-foreground placeholder:text-thin pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary bg-background"
                        />
                    </div>
                    <Button variant="ghost" className="flex basis-1/3 sm:basis-auto items-center gap-2 text-sm bg-background">
                        All Matches
                        <ChevronDown size={18} />
                    </Button>
                    {/* <SidebarTrigger /> */}
                </div>

                {/* Date Navigation */}
                <div className="grid grid-cols-2 lg:grid-cols-7 md:grid-cols-3 container my-6 gap-2 justify-between font-semibold">
                    {dates.map((item, index) => (
                        <Button
                            key={index}
                            className={`bg-background h-full py-1 flex flex-col gap-0 items-center w-full rounded-xl ghost ${item.date.getTime() === staticDate.getTime() ? "border border-primary text-primary" : ""}`}
                            variant="ghost"
                            // onClick={() => setSelectedDate(item.date)}
                        >
                            {/* <div className="r"> */}
                            <span className="text-sm">{getLabel(item)}</span>
                            <span className="text-xs">{format(item.date, "dd MMM")}</span>
                        </Button>
                    ))}

                    {/* Rendered simple button cause component btn was updating icon size and should not update component btn icon size */}
                    <button className="basis-1/2 bg-background border border-primary px-2 h-full py-1 flex gap-2 items-center w-full rounded-xl hover:bg-primary/10">
                        <Calendar1Icon size={32} className="text-primary" />
                        <div className="flex flex-col items-start">
                            <span className="text-sm">View</span>
                            <span className="text-xs">Calendar</span>
                        </div>
                    </button>
                </div>

                    {staticMatches.map((league) => (
                        <Card className=" mb-6 border border-[#171717] rounded-2xl" key={league._id}>
                            <CardHeader className="p-4 bg-black rounded-t-2xl">
                                <CardTitle>
                                    <div className="flex items-center gap-2 flex-wrap md:flex-nowrap ">
                                        <span className="text-md">{league.league}</span>
                                        <span className="text-xs text-gray-400">[ {league.round} ]</span>
                                    </div>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                {league.matches.map((match, index) => (
                                    <div className={`scorecard p-4 mt-0 text-sm font-semibold ${index % 2 ? "" : "bg-background"}`} key={match.id}>
                                        <div className="flex flex-wrap justify-between items-center">
                                            <div className="items-center gap-2 w-[100px] basis-full sm:basis-auto">
                                                {match.status === "Live" ? (
                                                    <span className="text-primary">Live</span>)
                                                    : <span>{match.time}</span>
                                                }
                                            </div>
                                            <div className="flex items-center gap-4 flex-1 mx-auto justify-between">
                                                <div className="flex items-center gap-2 flex-none sm:flex-1 justify-start sm:justify-end">
                                                    <span>{match.team1.name}</span>
                                                    <img src={match.team1.flag} alt={match.team1.name} className="w-6 h-6" />
                                                </div>
                                                <span className="font-bold flex-0 text-center justify-center">
                                                    {`${match.team1.score} - ${match.team2.score}`}
                                                </span>
                                                <div className="flex items-center gap-2 flex-1 justify-start">
                                                    <img src={match.team2.flag} alt={match.team2.name} className="w-6 h-6" />
                                                    <span>{match.team2.name}</span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    ))}
            </Card>
        </>
    );
}
