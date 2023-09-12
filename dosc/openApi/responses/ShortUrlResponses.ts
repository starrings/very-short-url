import { RESPONSE_DESCRIPTION } from "../../../src/config/Description"; 
import { RESPONSE_CODE } from "../../../src/config/StatusCode";

export const SHORT_URL_RESPONSES = {
  '[post] /': {
    [RESPONSE_CODE.CLIENT_ERROR.INVALID_ARGUMENT]: {
      description: RESPONSE_DESCRIPTION.CLIENT_ERROR.INVALID_ARGUMENT,
    }
  }
};