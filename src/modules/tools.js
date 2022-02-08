const todayISODate = new Date().toISOString().split('T')[0];

/**
 * 
 * @returns 
 */
const getTodayIndex = () => {
    const weekDayIndex = new Date().getDay();
    if(weekDayIndex < 0){
      weekDayIndex = weekDayIndex - 1;
    };
    return weekDayIndex;

}; 

export  {getTodayIndex, todayISODate};