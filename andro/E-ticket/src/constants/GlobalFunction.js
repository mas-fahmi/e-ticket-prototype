import moment from 'moment';

export const addCommas = nStr => {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    x3 = x1 + x2
    return x3.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const calculateDateTime = (startDateTime, endDateTime) => {
    const start = moment(startDateTime)
    const end = moment(endDateTime)
    const minutes = end.diff(start, 'minutes')

    const d = Math.floor(minutes / 1440); // 60*24 day
    const h = Math.floor((minutes - (d * 1440)) / 60); // hour
    const m = Math.round(minutes % 60); //minutes

    if (d > 0) return `${d} hari ${h} jam ${m} menit`
    else if (h > 0) return `${h} jam ${m} menit`
    else return `${m} menit`
}