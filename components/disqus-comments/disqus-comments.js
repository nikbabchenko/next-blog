import {DiscussionEmbed} from "disqus-react";

export const DisqusComments = ({ post }) => {
  const disqusShortname = "Nick's tech blog"
  const disqusConfig = {
    url: `https://nick-babchenko-tech.disqus.com/${post.title}`,
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
