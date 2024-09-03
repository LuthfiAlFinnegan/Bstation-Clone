export const fetchAnimeDetails = async () => {
  const response = await fetch(`https://api.jikan.moe/v4/top/anime`);
  const data = await response.json();
  return data.data;
};

export const fetchAnimeSchedules = async () => {
  const currentDay = new Date()
    .toLocaleString("en-US", {
      weekday: "long",
    })
    .toLowerCase();
  const response = await fetch(
    `https://api.jikan.moe/v4/schedules/${currentDay}`,
  );
  const data = await response.json();
  return data.data;
};

export const fetchAnimeRecommendations = async (id) => {
  const response = await fetch(
    `https://api.jikan.moe/v4/anime/${id}/recommendations`,
  );
  const data = await response.json();
  return data.data.map((item) => item.entry);
};
