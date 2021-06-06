export const NOMAL_SUCCESS = "ALERT_NOMAL_SUCCESS" as const;
export const NOMAL_ERROR = "ALERT_NOMAL_ERROR" as const;
export const SB_SUCCESS = "ALERT_SB_SUCCESS" as const;
export const SB_ERROR = "ALERT_SB_ERROR" as const;
export const CLEAR = "ALERT_CLEAR" as const;

export const nomal_success = (message: string) => ({
  type: NOMAL_SUCCESS,
  payload: message,
});

export const nomal_error = (message: string) => ({
  type: NOMAL_ERROR,
  payload: message,
});

export const sb_success = (message: string) => ({
  type: SB_SUCCESS,
  payload: message,
});

export const sb_error = (message: string) => ({
  type: SB_ERROR,
  payload: message,
});

export const clear = () => ({
  type: CLEAR,
});
