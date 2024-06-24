import React from 'react';
import { clearStorage, downloadData } from '../utils';

const Download  = () => {

    const handleDownloadClick = () => {
        downloadData();
        clearStorage();
        window.location.reload();
    }

    return (
        <button id="downloadbtn" onClickCapture={handleDownloadClick}>
            Download & Clear
        </button>
    )
}

export default Download;