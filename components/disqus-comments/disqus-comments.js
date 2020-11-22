import {DiscussionEmbed} from "disqus-react";

export const DisqusComments = ({ post }) => {
  const disqusShortname = "http-nick-babchenko-tech"

  console.log(post);

  const disqusConfig = {
    url: `http://nick-babchenko.tech/${post.id}`,
    identifier: post.id, // Single post id
    title: post.title // Single post title
  }

  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
export default DisqusComments;
