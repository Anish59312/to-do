export const downloadData = (e) => {
    const storedData = localStorage.getItem('todos');
    if(storedData) {

        let tasks = JSON.parse(storedData);
        let result = 'Y/N  | TASK\n';
    
        tasks.forEach((task, index) => {
            const status = task.completed ? 'Y' : 'N';
            result += `${status}    | ${task.text}\n`;
        });
    
        const blob = new Blob([result],{ type :'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'todaytask.txt';
        document.body.appendChild(a);
        a.click();
        URL.revokeObjectURL(url);
        document.body.removeChild(a);
    }
};


export const clearStorage = (e) => {
    localStorage.clear();
    console.log('Local storage cleared.');
}