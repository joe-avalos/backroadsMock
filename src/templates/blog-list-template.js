import React from 'react'
import { graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Layout from '../components/Layout'
import BlogCard from '../components/Blog/BlogCard'
import Title from '../components/Title'
import styles from '../css/blog.module.css'

const BlogListTemplate = (props) => {
  const { currentPage, numPages } = props.pageContext
  const { data } = props
  const prevPage = currentPage - 1 === 1 ? '/blogs' : `/blogs/${currentPage - 1}`
  const nextPage = `/blogs/${currentPage + 1}`
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  return <Layout>
    <section className={styles.blog}>
      <Title title={'latest'} subtitle={'posts'}/>
      <div className={styles.center}>
        {data.posts.edges.map(({ node }) => (
          <BlogCard blog={node} key={node.id}/>
        ))}
      </div>
      <section className={styles.links}>
        {!isFirst && <AniLink className={styles.link} to={prevPage}>Prev</AniLink>}
        {Array.from({ length: numPages }, (_, i) => {
          return <AniLink
            fade
            className={i + 1 === currentPage ? `${styles.link} ${styles.active}` : `${styles.link}`}
            to={`/blogs/${i === 0 ? '' : i + 1}`}>
            {i + 1}
          </AniLink>
        })}
        {!isLast && <AniLink className={styles.link} to={nextPage}>Next</AniLink>}
      </section>
    </section>
  </Layout>
}

export const getBlogs = graphql`
	query getBlogs($skip:Int!,$limit:Int!){
		posts:allContentfulPost(
			limit:$limit,
			skip:$skip,
			sort:{fields:published,order:DESC}){
			edges{
				node{
					slug
					title
					id:contentful_id
					published(formatString:"MMMM Do, YYYY")
					image{
						fluid{
							...GatsbyContentfulFluid_withWebp
						}
					}
				}
			}
		}
	}
`

export default BlogListTemplate
