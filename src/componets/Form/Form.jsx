import { useTelegram } from '../../hooks/useTelegram';
import {React, useCallback, useEffect, useState} from 'react';
import './Form.css';

export const Form = () =>{
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [subject, setSubject] = useState('');
    const {tg} = useTelegram();
  
    const onChangeCountry = (e) =>{
        setCountry(e.target.value);
    }
    const onChangeCity = (e) =>{
        setCity(e.target.value);
    }
    const onChangeSubject = (e) =>{
        setSubject(e.target.value);
    }
    const onSendData = useCallback(()=>{
        const data = {
            country, city, subject
        }
        tg.sendData(JSON.stringify(data))
    }, [country, city, subject])
    useEffect(()=>{
        
        tg.onEvent('mainButtonClicked', onSendData)
        return() =>{
            tg.onEvent('mainButtonClicked', onSendData)
        }
    })
    useEffect(()=>{
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [])
    useEffect (()=>{
        if (!country || !city){
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }

    }, [country, city])
    return(
        <>
        <h3>Введите ваши данные</h3>
        <input
        className='input'
        type='text'
        placeholder='Город'
        value = {city}
        onChange= {onChangeCity}
        />
        <input
        className='input'
        type='text'
        placeholder='Улица'
        value = {country}
        onChange= {onChangeCountry}
        />
        <select value = {subject} onChange={onChangeSubject} className='select'>
           <option value={'legal'}>Физ.лицо</option>
           <option value={'legal'}>Юр.лицо</option>
        </select>
       </>
    )
}