import React from 'react';

const Hours = () => {
    const currentDay = new Date().getDay();
    let openingHours;

    if (currentDay >= 1 && currentDay <= 5) {
        openingHours = '10 a.m. - 4 p.m.';
    } else if (currentDay === 0 || currentDay === 6) {
        openingHours = '9 a.m. - 8 p.m.';
    } else {
        openingHours = 'Closed';
    }

    return (
        <div>
            <h2>Shelter Hours</h2>
            <p>Today's hours: {openingHours}</p>
        </div>
    );
};

export default Hours;