import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

import BlogCard from './BlogCard'
import Title from '../Title'
import styles from '../../css/blog.module.css'

const getPosts = graphql`
	query{
		posts:allContentfulPost(sort:{fields:published,order:DESC}){
			edges{
				node{
					title
					slug
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

const BlogList = () => {
	const {posts} = useStaticQuery(getPosts)
	return <section className={styles.blog}>
		<Title title={'our'} subtitle={'posts'}/>
		<div className={styles.center}>
			{posts && posts.edges.map(({ node }) => (
				<BlogCard key={node.id} blog={node}/>
			))}
		</div>
	</section>}

export default BlogList
