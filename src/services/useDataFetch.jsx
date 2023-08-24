import { useEffect, useCallback, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { setContent } from '@/slices/contentSlice';

export default function useDataFetch(tab) {
    const dispatch = useDispatch()
    const category = tab !== 'home' ? 'trending' : 'related';
    const id = tab !== 'home' ? "" : 'dQw4w9WgXcQ';
    const type = tab !== 'home' ? tab === 'trending' ? 'now' : tab : '';

    const fetchData = useCallback(async () => {
        const options = {
            url: `https://youtube-v3-alternative.p.rapidapi.com/${category}`,
            params: {
                id: id,
                geo: 'IN',
                type: type,
                lang: 'en'
            },
            headers: {
                'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
                'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
            }
        };
        try {
            const res = await axios.request(options)
            const {data} = res.data
            dispatch(setContent(data))
        } catch (error) {
                console.log(error)
        }
        
    }, [category, dispatch, id, type])
    useEffect(() => {
        fetchData()
    }, [fetchData])

    const data = useSelector(state => state.content)
    return data
}

