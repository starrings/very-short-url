import { RESPONSE_DESCRIPTION } from "../../../src/config/Description"; 
import { RESPONSE_CODE } from "../../../src/config/StatusCode";

export const SHORT_URL_RESPONSES = {
  '[post] /': {
    [RESPONSE_CODE.CLIENT_ERROR.INVALID_ARGUMENT]: {
      description: RESPONSE_DESCRIPTION.CLIENT_ERROR.INVALID_ARGUMENT,
    }
  },

  '[get] /original-url/:shortUrl': {
    [RESPONSE_CODE.SUCCESS.OK]: {
      content: {
        'application/json': {
          examples: {
            status: "OK",
            message: "원본 url 조회 성공",
            data: {
              originalUrl: "https://naver.com"
            }
          },
        },
      }
    },
    [RESPONSE_CODE.CLIENT_ERROR.INVALID_ARGUMENT]: {
      content: {
        'application/json': {
          examples: {
            status: "INVALID_ARGUMENT",
            message: "클라이언트가 잘못된 인수를 지정했습니다. 자세한 내용은 오류 메시지와 오류 세부정보에서 확인하세요.",
            data: {
              httpCode: 400,
              name: "BadRequestError",
              message: "존재하지 않는 단축 url."
            }
          },
        },
      }
    }
  },
};