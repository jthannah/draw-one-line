import type { NextPage } from 'next'
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react'
import { HelloData } from './api/hello'
const FreeDraw = dynamic(() => import('../components/freedraw'), { ssr: false });

const Drawing: NextPage = () => {

    // const [data, setData] = useState<HelloData | null>(null)
    // const [isLoading, setLoading] = useState(false)

    // useEffect(() => {
    //     setLoading(true)
    //     fetch('api/hello')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setData(data)
    //             setLoading(false)
    //         })
    // }, [])

    // if (isLoading) return <p>Loading...</p>
    // if (!data) return <p>No profile data</p>

    return (
        <div>
            The drawing page:
            <button>Save My Line!</button>
            <FreeDraw></FreeDraw>
        </div>
    )
}

export default Drawing
