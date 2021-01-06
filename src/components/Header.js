import React from 'react'
import TodayIcon from '@material-ui/icons/Today';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

function Header() {
    return (
        <div className='header'>
            <div className='header__contasiner'>
                <div className='header__categories'>
                    <a className='category' href='/'>
                        <TodayIcon className='category__icon' />
                        Задачи
                    </a>
                    <a className='category' href='/challenges'>
                        <FilterHdrIcon className='category__icon' />
                        Челленджи
                    </a>
                    <a className='category main' href='/'>
                        <span>TO</span>
                        <FormatListBulletedIcon className='main__icon'/>
                        <span>DO</span>
                    </a>
                    <a className='category' href='/progress'>
                        <DirectionsRunIcon className='category__icon' />
                        Прогресс
                    </a>
                    <a className='category' href='/statistics'>
                        <EqualizerIcon className='category__icon' />
                        Статистика
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header
