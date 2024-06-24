import React, { useState, useEffect } from 'react';

import { downloadData, clearStorage } from '../utils';

const Time = () => {
    const [timeToEod, setTimeToEod] = useState(() => {
        const now = new Date();
        const eod = new Date();
        eod.setHours(23, 59, 59, 999);

        const diffMilliseconds = eod - now;
        const hrDiff = Math.floor(diffMilliseconds / (1000 * 60 * 60));
        const minDiff = Math.floor((diffMilliseconds / (1000 * 60)) % 60);

        return { hr: hrDiff, min: minDiff };
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const eod = new Date();
            eod.setHours(23, 59, 59, 999);

            const diffMilliseconds = eod - now;
            const hrDiff = Math.floor(diffMilliseconds / (1000 * 60 * 60));
            const minDiff = Math.floor((diffMilliseconds / (1000 * 60)) % 60);

            setTimeToEod({ hr: hrDiff, min: minDiff });

            if(hrDiff === 0 && minDiff === 0){
                downloadData();
                clearStorage();
            }
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div id="time">
            <p>Time till EOD : &nbsp;
        {timeToEod.hr} hours {timeToEod.min} minutes</p>
        </div>
    );
};

export default Time;
