export const fetchBizes = () => (
  $.ajax({
    url: 'api/biz',
    method: 'GET'
  })
);

export const fetchBiz = (bizId) => (
  $.ajax({
    url: `api/biz/${bizId}`,
    method: 'GET'
  })
);

export const sendSMS = (bizId, phoneNumber) => (
  $.ajax({
    url: `api/biz/${bizId}/sms`,
    method: 'POST',
    data: {phoneNumber: phoneNumber}
  })
);
