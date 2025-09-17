"use client";

import { ExportOutlined } from "@ant-design/icons";
import Card from "antd/es/card/Card";

interface CardItem {
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
}

interface CardsProps {
  cards: CardItem[];
}

export default function Cards({ cards }: CardsProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      {cards.map((card, idx) => {
        const RightIcon = card.icon;
        return (
          <Card key={idx} className="flex-1 min-w-[200px] md:flex rounded-md">
            <div className="flex justify-between items-center w-full">
              <div>
                <p className="text-gray-500">{card.title}</p>
                <h2 className="text-2xl font-semibold">{card.value}</h2>
                <p
                  className={`flex items-center gap-1 ${
                    card.change.includes("+")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  <ExportOutlined /> {card.change}
                </p>
              </div>
              <RightIcon className="text-4xl" />
            </div>
          </Card>
        );
      })}
    </div>
  );
}
