import React from 'react'
import {Slider, SliderProps} from '@mui/material'

type SliderPropsType = SliderProps & {
    onChange: (e: Event, value: number | number[], activeThumb: number) => void
}
const SuperRange: React.FC<SliderPropsType> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width:"254px"
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
