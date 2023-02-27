export const BACKEND_URL = "http://localhost:8080";

export const GET_RECORDS = {
  url: "api/records",
  method: "get",
};

export const GET_LIKES = (id) => ({
  url: `api/records/${id}/likes`,
  method: "get",
});

export const RECORD_LIKES = (id) => ({
  url: `api/records/${id}/likes`,
  method: "PATCH",
});



