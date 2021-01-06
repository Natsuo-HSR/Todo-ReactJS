import React from 'react'
import DoneIcon from '@material-ui/icons/Done';
import DateRangeIcon from '@material-ui/icons/DateRange';
import BarChartIcon from '@material-ui/icons/BarChart';
import SchoolIcon from '@material-ui/icons/School';

function MyStatistics() {
    return (
        <div className='my-statistics'>
            <div className='myStatistics__descr'>Статистика</div>
            <div className='myStatistics__rate'>Вы продуктивнее остальных пользователей на 49%!</div>
            <div className='myStatistics__block'>
                <DoneIcon className='block__icon done__icon' />
                <div className='block__title'>Всего задач выполнено - </div>
                <div className='block__stats'>1</div>
            </div>
            <div className='myStatistics__block'>
                <DateRangeIcon className='block__icon  date__icon' />
                <div className='block__title'>Выполнено за последние 7 дней - </div>
                <div className='block__stats'>5</div>
            </div>
            <div className='myStatistics__block'>
                <BarChartIcon className='block__icon stat__icon' />
                <div className='block__title'>В среднем за день - </div>
                <div className='block__stats'>5</div>
            </div>
            <div className='myStatistics__block'>
                <SchoolIcon className='block__icon exp__icon' />
                <div className='block__title'>Опыт - </div>
                <div className='block__stats'>5</div>
            </div>
        </div>
    )
}

export default MyStatistics
