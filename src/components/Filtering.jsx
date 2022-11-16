import React, { useEffect } from 'react'
import './css/Filtering.scss'

export default function Filtering(props){
    
    const setFilter = props.state.setFilter

    useEffect(() => {
        document.getElementById(props.state.filter).classList.add('active')
        const click = filter =>  {
            console.log("🚀 ~ file: Filtering.jsx ~ line 10 ~ click ~ props.state.filter", props.state.filter)
            setFilter(filter)
            console.log("🚀 ~ file: Filtering.jsx ~ line 10 ~ click ~ filter", filter)
        }

        [...document.getElementsByClassName('filter')[0].children].forEach(ele => {
            ele.addEventListener('click', () => {
                switch(ele.textContent){
                    case 'Daily': 
                        click('daily')
                        document.getElementById('daily').classList.add('active')
                        document.getElementById('weekly').classList.remove('active')
                        document.getElementById('monthly').classList.remove('active')
                        break
                    case 'Weekly':
                        click('weekly')
                        document.getElementById('daily').classList.remove('active')
                        document.getElementById('weekly').classList.add('active')
                        document.getElementById('monthly').classList.remove('active')
                        break
                    case 'Monthly':
                        click('monthly')
                        document.getElementById('daily').classList.remove('active')
                        document.getElementById('weekly').classList.remove('active')
                        document.getElementById('monthly').classList.add('active')
                        break
                    default: break
                }
            })
        })
    }, [setFilter, props.state.filter]);
    
    return(
        <div className='filter'>
            <span id="daily">
                Daily
            </span>
            <span id="weekly">
                Weekly
            </span>
            <span id="monthly">
                Monthly
            </span>
        </div>
    )
}