import moment from "moment";

export const formatDate = (
    date: Date | string,
    format: string = 'YYYY-MM-DD',
    useUtc?: boolean
  ): string => {
    const momentDate = moment(date);
  
    if (useUtc) {
      return format
        ? momentDate.utc().format(format)
        : momentDate.utc().format('YYYY-MM-DD');
    }
  
    return format ? momentDate.format(format) : momentDate.format('YYYY-MM-DD');
  };