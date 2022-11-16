/* eslint-disable no-eval */
import React, { useEffect, useState } from 'react'
import './css/Card.scss'

export default function Card(props){

    const type = props.type
    const img = type !== undefined ? `/images/icon-${type?.toLowerCase()?.replace(' ', '-')}.svg` : '/images/image-jeremy.png'
    const child = props.child
    const filter = props.filter

    const [now, setNow] = useState('')
    const [last, setLast] = useState('')

    useEffect(() => {
        let interval
        if(type !== undefined){
            interval = setInterval(async () => {
                let json;
                await fetch('/data.json').then(res => res.json()).then(res => {
                    let ty = filter.split('')
                    ty[0] = ty[0].toUpperCase()
                    ty = ty.join('')
                    json = res[ty][type]
                    let n = json.Now
                    let l = json.Last
                    let Ltime
                    let Ntime
                    Ltime = typeof l.time == 'string' ? eval(l.time) : l.time
                    Ntime = typeof n.time == 'string' ? eval(n.time) : n.time
                    setNow(`${Ntime} ${n.unit}`)
                    switch(filter){
                        case "daily": 
                            setLast(`Last Day - ${Ltime} ${l.unit}`)
                            break;
                        case "weekly":
                            setLast(`Last Week - ${Ltime} ${l.unit}`)
                            break;
                        case "monthly": 
                            setLast(`Last Month - ${Ltime} ${l.unit}`)
                            break;
                        default: break;
                    }
                    
                })
            }, 1000)
        }
        return () => {
            clearInterval(interval)
        };
    }, [filter, type, setNow, setLast]);

    return(
        <div className={`${type ?? 'colspan-2 xCard'}`}>
            {props.type !== undefined ?
                <div className='typeCard'>
                    <div className={`${type.toLowerCase().replace(' ', '-')} type-div`}>
                        <img src={img} alt="img"></img>
                    </div>
                    <div className='card type-card'>
                        <div className='now'>{now}</div>
                        <div className="last">{last}</div>
                    </div>
                    <div className='flex space-between t'>
                        <span className='type'>{type}</span>
                        <span>···</span>
                    </div>
                </div>:
                <div className='user-card'>
                    <div>
                        <img src={img} alt="img"></img>
                    </div>
                    <div className='user'>
                        <span>Report for</span>
                        <span>
                            <span>Jeremy</span>
                            <span>Robson</span>
                        </span>
                    </div>
                </div>
            }
            {child !== undefined ? child : ''}
        </div>
    )
}