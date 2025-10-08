import React from 'react';
import styled from 'styled-components';

const BlogPageSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f5f0e6;
  color: #000;
  text-align: center;
`;

const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const BlogCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const BlogContent = styled.div`
  padding: 1.5rem;
`;

const BlogTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const BlogSummary = styled.p`
  font-family: 'Open Sans', sans-serif;
  line-height: 1.5;
  color: #666;
`;

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development',
      summary: 'Exploring the latest trends and technologies shaping the web development landscape.',
      image: '/5.png'
    },
    {
      id: 2,
      title: 'Building Scalable React Applications',
      summary: 'Best practices for creating maintainable and scalable React applications.',
      image: '/6.png'
    },
    {
      id: 3,
      title: 'The Importance of UI/UX Design',
      summary: 'Why user experience is crucial for the success of any digital product.',
      image: '/7.png'
    }
  ];

  return (
    <BlogPageSection>
      <Title>Blog</Title>
      <BlogGrid>
        {blogPosts.map(post => (
          <BlogCard key={post.id}>
            <BlogImage src={post.image} alt={post.title} />
            <BlogContent>
              <BlogTitle>{post.title}</BlogTitle>
              <BlogSummary>{post.summary}</BlogSummary>
            </BlogContent>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogPageSection>
  );
};

export default BlogPage;