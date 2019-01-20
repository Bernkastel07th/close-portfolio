import Layout from '../components/Layout'
import { withRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'

const markdown = `
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content.
`

export default withRouter(props => (
  <Layout>
    <h1>{props.router.query.title}</h1>
    <div className="markdown">
      <ReactMarkdown source={markdown} />
    </div>
    <style jsx global>
      {`
        .markdown a {
          text-decoration: none;
          color: blue;
        }

        .markdown a:hover {
          opacity: 0.6;
        }

        .markdown h3 {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }
      `}
    </style>
  </Layout>
))
