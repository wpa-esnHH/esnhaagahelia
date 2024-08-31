import React, { useState } from "react"
import Block from "./Block"
import blocksData from "../data";
import '../css/Events.css';

export default function Events() {
    const [upcomingIndex, setUpcomingIndex] = useState(0)
    const [previousIndex, setPreviousIndex] = useState(0)
    const currentDate = new Date()

    const upcomingEvents = blocksData.filter(block => new Date(block.date) >= currentDate).sort((a, b) => new Date(a.date) - new Date(b.date));
    const previousEvents = blocksData.filter(block => new Date(block.date) < currentDate).sort((a, b) => new Date(b.date) - new Date(a.date));


    const nextUpcomingBlock = () => {
        if (upcomingIndex < upcomingEvents.length - 2) {
            setUpcomingIndex(upcomingIndex + 2)
        }
    }

    const prevUpcomingBlock = () => {
        if (upcomingIndex > 0) {
            setUpcomingIndex(upcomingIndex - 2)
        }
    }

    const nextPreviousBlock = () => {
        if (previousIndex < previousEvents.length - 2) {
            setPreviousIndex(previousIndex + 2)
        }
    }

    const prevPreviousBlock = () => {
        if (previousIndex > 0) {
            setPreviousIndex(previousIndex - 2)
        }
    }

    return (
        <>
            <div className="events">
                <h1>Upcoming events</h1>
                <div className="event_blocks">
                    {upcomingEvents.slice(upcomingIndex, upcomingIndex + 2).map(block => (
                        <Block
                            key={block.id}
                            title={block.title}
                            description={block.description}
                            price={block.price}
                            photo={block.photo}
                            date={block.date}
                            linkToEvent={block.linkToEvent}
                        />
                    ))}
                </div>
                <button onClick={prevUpcomingBlock}>Previous</button>
                <button onClick={nextUpcomingBlock}>Next</button>
            </div>
            <div className="events">
                <h1>Previous events</h1>
                <div className="event_blocks">
                    {previousEvents.slice(previousIndex, previousIndex + 2).map(block => (
                        <Block
                            key={block.id}
                            title={block.title}
                            description={block.description}
                            price={block.price}
                            photo={block.photo}
                            date={block.date}
                            linkToEvent={block.linkToEvent}
                        />
                    ))}
                </div>
                <button onClick={prevPreviousBlock}>Previous</button>
                <button onClick={nextPreviousBlock}>Next</button>
            </div>

        </>
    )
}
