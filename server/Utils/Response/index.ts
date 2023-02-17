export const successResponse = (message: string, data?: any) => {
  return {
    success: true,
    data,
    time: new Date(),
    message,
  };
};

export const errorResponse = (message: string, data?: any) => {
  return {
    success: false,
    data,
    time: new Date(),
    message,
  };
};
