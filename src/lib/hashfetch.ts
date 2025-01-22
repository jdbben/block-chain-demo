export const fetchTheHash = async (
  hash: string,
  type: number,
  index: number,
  prevHash: string
) => {
  const bashUrl = "http://localhost:3000";
  const res = await fetch(
    `${bashUrl}/api/hash?data=${encodeURIComponent(
      hash
    )}&type=${type}&index=${index}&prevHash=${encodeURIComponent(prevHash)}`
  );

  const data = await res.json();
  return data.hash;
};
