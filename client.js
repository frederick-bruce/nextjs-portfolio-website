import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";



export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-03-29",
  token: process.env.NEXT_PUBLIC_SANITY_STUDIO_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

// export async function getStaticProps() {
//     const projects =
// }

// export async function getPosts() {
//     const posts = await client.fetch('*[_type == "post"]')
//     return posts
// }

// export async function createPost(post: Post) {
//     const result = client.create(post)
//     return result;
// }

// export async function updateDocumentTitle(_id, title) {
//     const result = client.patch(_id).set({title})
//     return result
// }
