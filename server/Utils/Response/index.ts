export const successResponse = (message: string, data: any) => {
  return {
    success: true,
    data,
    message,
  };
};

export const errorResponse = (message: string, data: any) => {
  return {
    success: false,
    data,
    message,
  };
};
