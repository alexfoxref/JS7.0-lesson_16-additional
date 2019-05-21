import React from 'react'
import './style.css'

const Delivery = () => (
    <div className="delivery">
        <h1>Быстрая доставка</h1>
        <p>бетона, щебня, песка</p>
        <p>и других нерудных материалов</p>
        <p>по Москве и Московской области</p>
        <div className="details">
            <button>Подробнее о доставке</button> или <a href="#">перейти в каталог</a>
        </div>
    </div>
)

export {Delivery}