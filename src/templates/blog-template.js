import React from 'react'
import {graphql} from 'gatsby'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import styles from '../css/single-blog.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import StyledHero from '../components/StyledHero'

const BlogTemplate = ({data}) => {
  const {title, published, image, text:{json}} = data.post
  const options = {
    renderNode:{
      'embedded-asset-block':(node) => (
        <div className="rich">
          <h3>awesome image</h3>
          <img width="400" src={node.data.target.fields.file['en-US'].url} alt="blog image" />
          <p>images provided by john doe</p>
        </div>
      ),
      'embedded-entry-block':(node)=>{
        const {title, image, text} = node.data.target.fields
        return <div>
          <br/><br/><br/><br/>
          <h1>Related post: {title['en-US']}</h1>
          <img width="400" src={image['en-US'].fields.file['en-US'].url} alt="other post"/>
          {documentToReactComponents(text['en-US'])}
          <br/><br/><br/><br/>
        </div>
      },
    }
  }
  return<Layout>
    <SEO title={title} />
    <StyledHero img={image.fluid} />
    <section className={styles.blog}>
      <div className={styles.center}>
        <h1>{title}</h1>
        <h4>published at: {published}</h4>
        <article className={styles.post}>
          {documentToReactComponents(json, options)}
        </article>
        <AniLink fade to={'/blog'} className="btn-primary">all posts</AniLink>
      </div>
    </section>
  </Layout>
}

export const getPost = graphql`
	query getPost($slug:String!){
		post:contentfulPost(slug:{eq:$slug}){
			title
      image{
        fluid{
					...GatsbyContentfulFluid_withWebp
        }
      }
			published(formatString:"MMMM Do, YYYY")
			text{
				json
			}
		}
	}
`

export default BlogTemplate
