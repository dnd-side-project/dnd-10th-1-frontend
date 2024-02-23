export const BACK_URL =
  process.env.NEXT_PUBLIC_API_MOCKING === "enable"
    ? process.env.NEXT_PUBLIC_CLIENT_URL + "/apis"
    : process.env.NEXT_PUBLIC_BACK_URL

export const CLIENT_URL = process.env.NEXT_PUBLIC_CLIENT_URL

export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL

export const END_POINT = {
  temp: "/temp",
  user: "/user",
  MAIN: {
    INVITE_CODE: "/main/check-code",
  },
}

export const SOCKET_EVENT = {
  CREATE_ROOM: "create-room",
  LISTEN_ROOM_USER_LIST: "listen-room-user-list",
  MOVE_TO_WAITING_ROOM: "move-to-waiting-room",
  JOIN_ROOM: "join-room",
  LEAVE_ALL_USER_FROM_ROOM: "leave-all-user-from-room",
  UPDATE_STATUS: "update-status",
  SELECT_GAME: "select-game",
  MOVE_TO_LOADING_ROOM: "move-to-loading-room",
  START_GAME: "start-game",
  MOVE_TO_GAME: "move-to-game",
  END_GAME: "end-game",
  SELECT_MBTI: "select-mbti",
  MOVE_TO_MBTI_LOADING: "move-to-mbti-loading",
  MOVE_TO_MBTI_RESULT: "move-to-mbti-result",
  LISTEN_LIVE_USER_COUNT: "listen-live-user-count",
  MOVE_TO_BLACK_TOPIC_RESULT: "move-to-blank-topic-result",
  MOVE_TO_SMALL_TALK_RESULT: "move-to-small-talk-result",
  SEND_USER_ANSWER: "send-user-answer",
  GET_USERS_ANSWER: "get-users-answer",
  GET_SMALL_TALK_RANDOM_ANSWER: "get-small-talk-random-answer",
} as const
