import processPost from "./post.data";

export default async function () {
  const data = await processPost();
  const { catalog, title } = data[0].data;
  return { catalog, title };
}
