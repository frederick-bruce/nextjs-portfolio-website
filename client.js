import sanityClient from "@sanity/client"
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: "j11vxk98",
    dataset: "production",
    useCdn: false,
    apiVersion: "2023-03-29",
    token: "skzAIrYdpGK6lV0bhr5Wg2J4s4yT4UJZoOvqCwQFdiZKQJWim1mG7vhsW3mCVwYZau45rWQ05bZI9u55kMdXzolEGd5ZMcfUgaya85lCbR8OGEX3hWCeGkGny0eV4uRj1q9LcDpfnAFkjtjGnwTzjQs6rSeC3jBJKnsGNlsr8IFc2uwSLaiI"
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