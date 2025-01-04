import { Bookmark, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';
import * as React from 'react';

export interface IAppProps {
}

const feturedPost = {
  title: "Here Are The Top 100 Players And Managers",
  timestamp: "11 Oct 2023, 06:00 AM",
  imgSrc: "/tn-banner.png",
  isBookmarked: true,
}

const newsData = [
  {
    title: "Here Are The Top 100 Players And Managers",
    timestamp: "11 Oct 2023, 06:00 AM",
    imgSrc: "/tn_1.png",
    isBookmarked: false,
  },
  {
    title: "Results And Scores From The Premier League...!!",
    timestamp: "10 Oct 2023, 09:00 PM",
    imgSrc: "/tn_2.png",
    isBookmarked: false,
  },
  {
    title: "Join Or Start A Competition Now!",
    timestamp: "10 Oct 2023, 02:40 PM",
    imgSrc: "/tn_3.png",
    isBookmarked: true,
  },
  {
    title: "Results And Scores From The Premier League...!!",
    timestamp: "10 Oct 2023, 09:00 PM",
    imgSrc: "/tn_4.png",
    isBookmarked: true,
  },
  {
    title: "Results And Scores From The Premier League...!!",
    timestamp: "09 Oct 2023, 08:12 AM",
    imgSrc: "/tn_5.png",
    isBookmarked: false,
  },
];

export default function App (props: IAppProps) {
  return (
    <div className="bg-card px-4 py-8 rounded-3xl shadow-lg my-4">
    {/* Header Section */}
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-bold">Trending News</h2>
      <ChevronRight size={30} className="cursor-pointer text-primary" />
    </div>

    {/* Featured News Section */}
    {
      feturedPost && ( 
        <div
          className="rounded-xl overflow-hidden mb-4 relative"
        >
          <div className="relative rounded-xl overflow-hidden h-[200px]">
          <Image
            src={feturedPost.imgSrc}
            alt={feturedPost.title}
            className="w-full rounded-xl"
            layout="fill"
            objectFit="fill"
              />
          </div>
          <div className="flex p-1 my-2 justify-between">
            <div>
            <h3 className="text-lg font-bold leading-6 line-clamp-2 my-1">
              {feturedPost.title}
            </h3>
            <p className="text-xs text-destructive">{feturedPost.timestamp}</p>
            </div>
            <Bookmark size={24} className="fill-current ml-2 text-primary" />
          </div>
        </div>
      )
    }

    {/* Other News List */}
    <div className="space-y-8 mt-4">
      {newsData
        .map((news, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 rounded-lg"
          >
            {/* News Image */}
          <div className="w-20 h-20 relative overflow-hidden">
            <Image
              src={news.imgSrc}
              alt={news.title}
              className="rounded-md"
              layout="fill"
              objectFit="cover"
              />
              </div>
            {/* <img
              src={news.imgSrc}
              alt={news.title}
              className="w-20 h-20 rounded-md object-cover"
            /> */}

            {/* News Content */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold leading-6 line-clamp-2 my-1">
                {news.title}
              </h3>
              <p className="text-xs text-destructive">{news.timestamp}</p>
            </div>
                <Bookmark size={24} className={`my-1 text-primary ${news.isBookmarked ? "fill-current" : ""}`} />
          </div>
        ))}
    </div>
  </div>
  );
}
