export function validateDates(from, to) {
    if (!from || !to) return 'Both dates are required';
    const fromDate = new Date(from);
    const toDate = new Date(to);
  
    if (fromDate > toDate) return 'To Date must be after From Date';
  
    const diff = (toDate.getTime() - fromDate.getTime()) / (1000 * 60 * 60 * 24);
    if (diff > 30) return 'Date range should not exceed 30 days';
  
    return null;
  }
  