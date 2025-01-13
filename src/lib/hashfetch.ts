export const fetchTheHash = async (
  hash: string,
  type: number,
  index: number
) => {
  const bashUrl = "http://localhost:3000";
  const res = await fetch(
    `${bashUrl}/api/hash?data=${encodeURIComponent(
      hash
    )}&type=${type}&index=${index}`
  );

  const data = await res.json();
  return data.hash;
};
